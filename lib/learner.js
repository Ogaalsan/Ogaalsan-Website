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
