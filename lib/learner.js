import { getStoredToken } from "./auth";
import { getApiBaseUrlCandidates, getResolvedApiBaseUrl } from "./api";
import { mapApiCourse, resolveCourseImage } from "./courses";

async function learnerRequest(path, options = {}) {
  const token = getStoredToken();
  if (!token) {
    const error = new Error("Please sign in to continue.");
    error.status = 401;
    throw error;
  }

  const { method = "GET", body } = options;
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  };

  if (body !== undefined) {
    headers["Content-Type"] = "application/json";
  }

  const candidates = [
    getResolvedApiBaseUrl(),
    ...getApiBaseUrlCandidates(),
  ].filter(Boolean);
  const uniqueBases = [...new Set(candidates.map((url) => url.replace(/\/$/, "")))];

  let lastError = null;

  for (const baseUrl of uniqueBases) {
    try {
      const response = await fetch(`${baseUrl}/api/v1/learner${path}`, {
        method,
        headers,
        body: body !== undefined ? JSON.stringify(body) : undefined,
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok || payload.success === false) {
        const error = new Error(payload.message || "Request failed");
        error.status = response.status;
        error.errors = payload.errors || {};
        throw error;
      }

      return { payload, apiBaseUrl: baseUrl };
    } catch (error) {
      lastError = error;
      if (error.status && error.status !== 404) {
        throw error;
      }
    }
  }

  throw lastError || new Error(`Failed to reach learner API ${path}`);
}

function mapLearnerCourseCard(item, apiBaseUrl) {
  const course = item.course || {};

  return {
    registrationId: item.registration_id,
    status: item.status,
    registeredAt: item.registered_at,
    canAccess: Boolean(item.can_access),
    progress: {
      completedLessons: item.progress?.completed_lessons ?? 0,
      totalLessons: item.progress?.total_lessons ?? 0,
      percent: item.progress?.percent ?? 0,
    },
    course: {
      id: course.id,
      slug: course.slug,
      title: course.title,
      description: course.description || "",
      duration: course.duration || "Self-paced",
      level: course.level || "All Levels",
      category: course.category?.name || "Course",
      instructor: course.instructor?.name || "Ogaalsan Instructor",
      image: resolveCourseImage(
        course.featured_image,
        apiBaseUrl,
        course.featured_image_url
      ),
      status: course.status,
    },
  };
}

export async function fetchMyCourses() {
  const { payload, apiBaseUrl } = await learnerRequest("/courses");
  const data = payload.data || {};

  return {
    courses: (data.courses || []).map((item) =>
      mapLearnerCourseCard(item, apiBaseUrl)
    ),
    summary: {
      total: data.summary?.total ?? 0,
      confirmed: data.summary?.confirmed ?? 0,
      pending: data.summary?.pending ?? 0,
      inProgress: data.summary?.in_progress ?? 0,
      completed: data.summary?.completed ?? 0,
    },
  };
}

export async function enrollInCourse({
  courseId,
  phone,
  organization,
  notes,
}) {
  const { payload } = await learnerRequest("/enrollments", {
    method: "POST",
    body: {
      course_id: courseId,
      phone: phone || null,
      organization: organization || null,
      notes: notes || null,
    },
  });

  return payload.data;
}

export async function fetchLearnerCourse(identifier) {
  const { payload, apiBaseUrl } = await learnerRequest(
    `/courses/${encodeURIComponent(identifier)}`
  );
  const data = payload.data || {};
  const coursePayload = data.course || {};

  const mapped = mapApiCourse(
    {
      ...coursePayload,
      syllabuses: (coursePayload.syllabuses || []).map((syllabus) => ({
        ...syllabus,
        lessons: (syllabus.lessons || []).map((lesson) => ({
          ...lesson,
          // Locked lessons already have null media from API
        })),
      })),
    },
    apiBaseUrl
  );

  const flatLessons = (coursePayload.syllabuses || []).flatMap((syllabus) =>
    (syllabus.lessons || []).map((lesson) => ({
      id: lesson.id,
      title: lesson.title,
      order: lesson.order,
      video_url: lesson.video_url,
      document_url: lesson.document_url,
      content: lesson.content,
      is_free_preview: Boolean(lesson.is_free_preview),
      is_unlocked: Boolean(lesson.is_unlocked),
      is_completed: Boolean(lesson.is_completed),
      chapterTitle: syllabus.title,
    }))
  );

  const quizzes = (coursePayload.quizzes || []).map((quiz) => ({
    id: quiz.id,
    title: quiz.title,
    type: quiz.type,
    lessonId: quiz.lesson_id,
    syllabusId: quiz.syllabus_id,
    passingScore: quiz.passing_score ?? 70,
    timeLimitMinutes: quiz.time_limit_minutes,
    questionCount: quiz.question_count ?? 0,
    canTake: Boolean(quiz.can_take),
    bestScore: quiz.best_score,
    passed: Boolean(quiz.passed),
  }));

  return {
    access: {
      registered: Boolean(data.access?.registered),
      status: data.access?.status || null,
      canAccess: Boolean(data.access?.can_access),
      message: data.access?.message || "",
    },
    progress: {
      completedLessons: data.progress?.completed_lessons ?? 0,
      totalLessons: data.progress?.total_lessons ?? flatLessons.length,
      percent: data.progress?.percent ?? 0,
      completedLessonIds: data.progress?.completed_lesson_ids || [],
    },
    course: {
      ...mapped,
      lessons: flatLessons.length ? flatLessons : mapped.lessons,
      quizzes,
      finalQuizzes: quizzes.filter((quiz) => quiz.type === "final"),
    },
  };
}

export async function markLessonComplete(lessonId) {
  const { payload } = await learnerRequest(`/lessons/${lessonId}/complete`, {
    method: "POST",
  });
  return payload.data;
}

export async function markLessonIncomplete(lessonId) {
  const { payload } = await learnerRequest(`/lessons/${lessonId}/complete`, {
    method: "DELETE",
  });
  return payload.data;
}

export async function fetchLearnerQuiz(quizId) {
  const { payload } = await learnerRequest(`/quizzes/${quizId}`);
  const data = payload.data || {};
  const quiz = data.quiz || {};

  return {
    quiz: {
      id: quiz.id,
      title: quiz.title,
      type: quiz.type,
      passingScore: quiz.passing_score ?? 70,
      timeLimitMinutes: quiz.time_limit_minutes,
      questionCount: quiz.question_count ?? quiz.questions?.length ?? 0,
      course: quiz.course
        ? {
            id: quiz.course.id,
            title: quiz.course.title,
            slug: quiz.course.slug,
          }
        : null,
      questions: (quiz.questions || []).map((question) => ({
        id: question.id,
        question: question.question,
        options: question.options || [],
        order: question.order ?? 0,
      })),
    },
    bestAttempt: data.best_attempt
      ? {
          id: data.best_attempt.id,
          score: data.best_attempt.score,
          passed: data.best_attempt.passed,
          submittedAt: data.best_attempt.submitted_at,
        }
      : null,
  };
}

export async function submitQuizAttempt(quizId, answers) {
  const { payload } = await learnerRequest(`/quizzes/${quizId}/attempts`, {
    method: "POST",
    body: { answers },
  });
  const data = payload.data || {};

  return {
    message: payload.message,
    attempt: data.attempt,
    result: {
      score: data.result?.score ?? 0,
      passed: Boolean(data.result?.passed),
      passingScore: data.result?.passing_score ?? 70,
      correctCount: data.result?.correct_count ?? 0,
      totalQuestions: data.result?.total_questions ?? 0,
    },
  };
}

export async function fetchMyQuizAttempts() {
  const { payload } = await learnerRequest("/quiz-attempts");
  const data = payload.data || {};

  return {
    attempts: (data.attempts || []).map((item) => ({
      id: item.id,
      quizId: item.quiz_id,
      courseId: item.course_id,
      score: item.score,
      correctCount: item.correct_count,
      totalQuestions: item.total_questions,
      passed: Boolean(item.passed),
      submittedAt: item.submitted_at,
      quiz: item.quiz
        ? {
            id: item.quiz.id,
            title: item.quiz.title,
            type: item.quiz.type,
            passingScore: item.quiz.passing_score ?? 70,
          }
        : null,
      course: item.course
        ? {
            id: item.course.id,
            title: item.course.title,
            slug: item.course.slug,
          }
        : null,
    })),
    summary: {
      total: data.summary?.total ?? 0,
      passed: data.summary?.passed ?? 0,
      failed: data.summary?.failed ?? 0,
    },
  };
}

export async function fetchMyCertificates() {
  const { payload } = await learnerRequest("/certificates");
  const data = payload.data || {};

  return {
    certificates: (data.certificates || []).map((item) => ({
      id: item.id,
      code: item.certificate_code,
      issuedAt: item.issued_at,
      course: item.course
        ? {
            id: item.course.id,
            title: item.course.title,
            slug: item.course.slug,
          }
        : null,
      template: item.template
        ? { id: item.template.id, name: item.template.name }
        : null,
    })),
    summary: {
      total: data.summary?.total ?? 0,
    },
  };
}

export async function openCertificateDownload(certificateId) {
  const token = getStoredToken();
  if (!token) {
    throw new Error("Please sign in to download your certificate.");
  }

  const candidates = [
    getResolvedApiBaseUrl(),
    ...getApiBaseUrlCandidates(),
  ].filter(Boolean);
  const uniqueBases = [...new Set(candidates.map((url) => url.replace(/\/$/, "")))];

  let lastError = null;

  for (const baseUrl of uniqueBases) {
    try {
      const response = await fetch(
        `${baseUrl}/api/v1/learner/certificates/${certificateId}/download`,
        {
          headers: {
            Accept: "text/html",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.message || "Failed to download certificate");
      }

      const html = await response.text();
      const blob = new Blob([html], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank", "noopener,noreferrer");
      setTimeout(() => URL.revokeObjectURL(url), 60_000);
      return;
    } catch (error) {
      lastError = error;
      if (error.message && !error.message.includes("Failed to fetch")) {
        throw error;
      }
    }
  }

  throw lastError || new Error("Failed to download certificate");
}
