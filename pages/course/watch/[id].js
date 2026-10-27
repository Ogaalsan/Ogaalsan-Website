import LearnLayout from "@/components/layout/LearnLayout";
import ContentLoader from "@/components/common/ContentLoader";
import CourseQuizPanel from "@/components/courses/CourseQuizPanel";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { extractYouTubeId } from "@/lib/courses";
import {
  fetchLearnerCourse,
  markLessonComplete,
  markLessonIncomplete,
} from "@/lib/learner";
import { resolveMediaUrl } from "@/lib/media";

function buildChapters(sections, lessons) {
  if (Array.isArray(sections) && sections.length > 0) {
    return sections.map((section) => ({
      id: section.id,
      title: section.title || "Course Content",
      lessons: section.lessons || [],
    }));
  }

  // Fallback when sections are missing: group by lesson chapter titles
  const groups = [];
  const map = new Map();
  (lessons || []).forEach((lesson) => {
    const key = lesson.chapterTitle || "Course Content";
    if (!map.has(key)) {
      const group = { id: null, title: key, lessons: [] };
      map.set(key, group);
      groups.push(group);
    }
    map.get(key).lessons.push(lesson);
  });
  return groups;
}

export default function CourseWatch() {
  const router = useRouter();
  const identifier = router.query.id;
  const lessonQuery = router.query.lesson;
  const quizQuery = router.query.quiz;
  const ready = router.isReady && Boolean(identifier);
  const { isAuthenticated, loading: authLoading } = useAuth();

  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const [openChapters, setOpenChapters] = useState([]);
  const [activeTab, setActiveTab] = useState("summary");
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [savingProgress, setSavingProgress] = useState(false);
  const activeQuizId = ready && quizQuery ? String(quizQuery) : null;

  const returnPath =
    ready && identifier ? `/course/watch/${identifier}` : "/my-courses";

  useEffect(() => {
    if (authLoading) return;
    if (!isAuthenticated) {
      router.replace(
        `/auth/sign-in?redirect=${encodeURIComponent(returnPath)}`
      );
    }
  }, [authLoading, isAuthenticated, returnPath, router]);

  useEffect(() => {
    if (!ready || !isAuthenticated || authLoading) return undefined;

    let active = true;
    setLoading(true);
    setError(null);

    fetchLearnerCourse(identifier)
      .then((result) => {
        if (!active) return;
        setPayload(result);
        const list = result.course.lessons || [];
        let index = 0;
        if (lessonQuery) {
          const byId = list.findIndex(
            (lesson) => String(lesson.id) === String(lessonQuery)
          );
          if (byId >= 0) index = byId;
        } else {
          const firstUnlocked = list.findIndex((lesson) => lesson.is_unlocked);
          index = firstUnlocked >= 0 ? firstUnlocked : 0;
        }
        setActiveLessonIndex(index);
        // Only open the section that contains the current lesson
        const activeChapter =
          list[index]?.chapterTitle ||
          result.course.sections?.[0]?.title ||
          null;
        setOpenChapters(activeChapter ? [activeChapter] : []);
      })
      .catch((err) => {
        if (active) {
          setError(err);
          setPayload(null);
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [ready, identifier, isAuthenticated, authLoading, lessonQuery]);

  const course = payload?.course;
  const access = payload?.access;
  const progress = payload?.progress;

  const lessons = useMemo(() => course?.lessons || [], [course]);
  const quizzes = useMemo(() => course?.quizzes || [], [course]);
  const chapters = useMemo(
    () => buildChapters(course?.sections, lessons),
    [course?.sections, lessons]
  );
  const activeLesson = lessons[activeLessonIndex] || lessons[0];
  const activeVideo = extractYouTubeId(activeLesson?.video_url);
  const lessonQuizzes = useMemo(
    () =>
      quizzes.filter(
        (quiz) =>
          quiz.type === "lesson" &&
          activeLesson?.id &&
          Number(quiz.lessonId) === Number(activeLesson.id)
      ),
    [quizzes, activeLesson?.id]
  );

  const buildWatchUrl = ({ lessonId, quizId } = {}) => {
    const params = new URLSearchParams();
    if (lessonId) params.set("lesson", String(lessonId));
    if (quizId) params.set("quiz", String(quizId));
    const qs = params.toString();
    return qs
      ? `/course/watch/${identifier}?${qs}`
      : `/course/watch/${identifier}`;
  };

  const selectLesson = (index) => {
    setActiveLessonIndex(index);
    setActiveTab("summary");
    const lesson = lessons[index];
    if (lesson?.id && ready) {
      router.replace(
        {
          pathname: "/course/watch/[id]",
          query: { id: identifier, lesson: lesson.id },
        },
        buildWatchUrl({ lessonId: lesson.id }),
        { shallow: true }
      );
    }
  };

  const openQuiz = (quiz) => {
    if (!quiz?.id || !ready) return;
    if (!quiz.canTake) {
      router.push(`/course/${course?.slug || course?.id}/register`);
      return;
    }
    const lessonId = activeLesson?.id;
    const query = { id: identifier, quiz: quiz.id };
    if (lessonId) query.lesson = lessonId;
    router.replace(
      { pathname: "/course/watch/[id]", query },
      buildWatchUrl({ lessonId, quizId: quiz.id }),
      { shallow: true }
    );
  };

  const closeQuiz = () => {
    if (!ready) return;
    const lessonId = activeLesson?.id;
    const query = { id: identifier };
    if (lessonId) query.lesson = lessonId;
    router.replace(
      { pathname: "/course/watch/[id]", query },
      buildWatchUrl({ lessonId }),
      { shallow: true }
    );
  };

  const handleQuizCompleted = (response) => {
    if (!activeQuizId || !response?.result) return;
    setPayload((prev) => {
      if (!prev) return prev;
      const patchQuiz = (quiz) =>
        String(quiz.id) === String(activeQuizId)
          ? {
              ...quiz,
              bestScore: response.result.score,
              passed: Boolean(response.result.passed) || Boolean(quiz.passed),
            }
          : quiz;
      return {
        ...prev,
        course: {
          ...prev.course,
          quizzes: (prev.course.quizzes || []).map(patchQuiz),
          finalQuizzes: (prev.course.finalQuizzes || []).map(patchQuiz),
        },
      };
    });
  };

  const refreshProgressLocal = (lessonId, completed) => {
    setPayload((prev) => {
      if (!prev) return prev;

      const nextLessons = (prev.course.lessons || []).map((lesson) =>
        lesson.id === lessonId
          ? { ...lesson, is_completed: completed }
          : lesson
      );
      const completedCount = nextLessons.filter((l) => l.is_completed).length;
      const total = nextLessons.length;

      return {
        ...prev,
        course: { ...prev.course, lessons: nextLessons },
        progress: {
          ...prev.progress,
          completedLessons: completedCount,
          totalLessons: total,
          percent: total > 0 ? Math.round((completedCount / total) * 100) : 0,
          completedLessonIds: nextLessons
            .filter((l) => l.is_completed)
            .map((l) => l.id),
        },
      };
    });
  };

  const handleToggleComplete = async () => {
    if (!activeLesson?.id || !activeLesson.is_unlocked) return;

    setSavingProgress(true);
    try {
      if (activeLesson.is_completed) {
        await markLessonIncomplete(activeLesson.id);
        refreshProgressLocal(activeLesson.id, false);
      } else {
        await markLessonComplete(activeLesson.id);
        refreshProgressLocal(activeLesson.id, true);
      }
    } catch (err) {
      setError(err);
    } finally {
      setSavingProgress(false);
    }
  };

  const toggleChapter = (title) => {
    setOpenChapters((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title]
    );
  };

  if (authLoading || !isAuthenticated) {
    return (
      <LearnLayout>
        <div className="learn-portal__loading">
          <ContentLoader message="Checking your account..." />
        </div>
      </LearnLayout>
    );
  }

  if (!ready || loading) {
    return (
      <LearnLayout>
        <div className="learn-portal__loading">
          <ContentLoader message="Loading your course..." />
        </div>
      </LearnLayout>
    );
  }

  if (error && !course) {
    return (
      <LearnLayout>
        <div className="learn-portal__empty">
          <h2>Unable to load course</h2>
          <p>{error.message || "Please try again."}</p>
          <Link href="/my-courses" className="learn-portal__primary-btn">
            Back to My Courses
          </Link>
        </div>
      </LearnLayout>
    );
  }

  if (!course) {
    return (
      <LearnLayout>
        <div className="learn-portal__empty">
          <h2>Course not found</h2>
          <Link href="/my-courses" className="learn-portal__primary-btn">
            Back to My Courses
          </Link>
        </div>
      </LearnLayout>
    );
  }

  const documentHref = activeLesson?.document_url
    ? resolveMediaUrl(activeLesson.document_url)
    : null;
  const percent = progress?.percent ?? 0;
  const completed = progress?.completedLessons ?? 0;
  const total = progress?.totalLessons ?? lessons.length;

  return (
    <LearnLayout
      headTitle={course.title}
      courseTitle={course.title}
    >
      {!access?.canAccess && (
        <div className="learn-portal__banner">
          <strong>Limited access.</strong>{" "}
          {access?.message ||
            "Your enrollment is pending confirmation. Free preview lessons are available meanwhile."}
          {!access?.registered && (
            <Link href={`/course/${course.slug || course.id}/register`}>
              Register for full access →
            </Link>
          )}
        </div>
      )}

      <div className="learn-portal__shell">
        <aside className="learn-portal__sidebar">
          <div className="learn-portal__content-head">
            <h2 className="learn-portal__content-title">Course Content</h2>
          </div>

          <div className="learn-portal__progress-card">
            <div className="learn-portal__progress-track">
              <span style={{ width: `${percent}%` }} />
            </div>
            <div className="learn-portal__progress-label">
              {percent}% Completed ({completed}/{total} items)
            </div>
            <p className="learn-portal__progress-hint">
              Finish all lessons and quizzes to unlock your certificate.
            </p>
            <Link href="/my-courses" className="learn-portal__back-link">
              ← My Courses
            </Link>
          </div>

          <div className="learn-portal__curriculum">
            <h2 className="learn-portal__curriculum-heading">Course content</h2>
            {chapters.map((chapter) => {
              const isOpen = openChapters.includes(chapter.title);
              const chapterQuizzes = quizzes.filter(
                (quiz) =>
                  quiz.type === "section" &&
                  (chapter.id != null
                    ? Number(quiz.syllabusId) === Number(chapter.id)
                    : chapter.lessons.some(
                        (lesson) =>
                          Number(quiz.syllabusId) === Number(lesson.syllabusId)
                      ))
              );
              return (
                <div
                  key={chapter.id || chapter.title}
                  className="learn-portal__chapter"
                >
                  <button
                    type="button"
                    className="learn-portal__chapter-toggle"
                    onClick={() => toggleChapter(chapter.title)}
                    aria-expanded={isOpen}
                  >
                    <span className="learn-portal__chapter-toggle-main">
                      <i className="fas fa-book" aria-hidden="true" />
                      <span>{chapter.title}</span>
                    </span>
                    <i
                      className={`fas fa-chevron-${isOpen ? "up" : "down"}`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <ul className="learn-portal__lesson-list">
                      {chapter.lessons.length === 0 &&
                        chapterQuizzes.length === 0 && (
                          <li className="learn-portal__empty-section">
                            No lessons in this section yet.
                          </li>
                        )}
                      {chapter.lessons.map((lesson) => {
                        const index = lessons.findIndex(
                          (item) => item.id === lesson.id
                        );
                        const isActive =
                          !activeQuizId && activeLessonIndex === index;
                        const locked = !lesson.is_unlocked;
                        const lessonQuizzesForItem = quizzes.filter(
                          (quiz) =>
                            quiz.lessonId != null &&
                            Number(quiz.lessonId) === Number(lesson.id)
                        );
                        return (
                          <li
                            key={lesson.id || `${chapter.title}-${index}`}
                            className="learn-portal__lesson-group"
                          >
                            <button
                              type="button"
                              className={`learn-portal__row${
                                isActive ? " is-active" : ""
                              }${locked ? " is-locked" : ""}${
                                lesson.is_completed ? " is-done" : ""
                              }`}
                              onClick={() => selectLesson(index)}
                            >
                              <i
                                className={
                                  locked
                                    ? "fas fa-lock"
                                    : lesson.is_completed
                                      ? "fas fa-check-circle"
                                      : isActive
                                        ? "fas fa-play-circle"
                                        : "far fa-circle"
                                }
                                aria-hidden="true"
                              />
                              <span className="learn-portal__row-body">
                                <strong>
                                  LESSON {index + 1}: {lesson.title}
                                </strong>
                                <small>
                                  {lesson.content
                                    ? `${String(lesson.content).slice(0, 72)}${
                                        String(lesson.content).length > 72
                                          ? "…"
                                          : ""
                                      }`
                                    : lesson.video_url
                                      ? "Video lesson"
                                      : "Reading materials"}
                                </small>
                              </span>
                            </button>
                            {lessonQuizzesForItem.map((quiz) => (
                              <button
                                key={quiz.id}
                                type="button"
                                className={`learn-portal__row learn-portal__row--quiz learn-portal__row--sub${
                                  String(activeQuizId) === String(quiz.id)
                                    ? " is-active"
                                    : ""
                                }${quiz.passed ? " is-done" : ""}`}
                                onClick={() => openQuiz(quiz)}
                              >
                                <i
                                  className={
                                    quiz.passed
                                      ? "fas fa-check-circle"
                                      : "far fa-circle"
                                  }
                                  aria-hidden="true"
                                />
                                <span className="learn-portal__row-body">
                                  <strong>{quiz.title}</strong>
                                  <small>
                                    Quiz
                                    {quiz.questionCount
                                      ? ` · ${quiz.questionCount} questions`
                                      : ""}
                                    {quiz.passed
                                      ? " · Passed"
                                      : quiz.bestScore != null
                                        ? ` · Best ${quiz.bestScore}%`
                                        : ` · Pass ${quiz.passingScore}%`}
                                  </small>
                                </span>
                              </button>
                            ))}
                          </li>
                        );
                      })}
                      {chapterQuizzes.map((quiz) => (
                        <li key={quiz.id}>
                          <button
                            type="button"
                            className={`learn-portal__row learn-portal__row--quiz${
                              String(activeQuizId) === String(quiz.id)
                                ? " is-active"
                                : ""
                            }${quiz.passed ? " is-done" : ""}`}
                            onClick={() => openQuiz(quiz)}
                          >
                            <i
                              className={
                                quiz.passed
                                  ? "fas fa-check-circle"
                                  : "far fa-circle"
                              }
                              aria-hidden="true"
                            />
                            <span className="learn-portal__row-body">
                              <strong>{quiz.title}</strong>
                              <small>
                                Section quiz
                                {quiz.questionCount
                                  ? ` · ${quiz.questionCount} questions`
                                  : ""}
                                {quiz.passed
                                  ? " · Passed"
                                  : ` · Pass ${quiz.passingScore}%`}
                              </small>
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}

            {(course.finalQuizzes || []).length > 0 && (
              <div className="learn-portal__sidebar-block">
                <h3>Final quiz</h3>
                {course.finalQuizzes.map((quiz) => (
                  <button
                    key={quiz.id}
                    type="button"
                    className={`learn-portal__row learn-portal__row--quiz${
                      String(activeQuizId) === String(quiz.id)
                        ? " is-active"
                        : ""
                    }${quiz.passed ? " is-done" : ""}`}
                    onClick={() => openQuiz(quiz)}
                  >
                    <i
                      className={
                        quiz.passed
                          ? "fas fa-check-circle"
                          : "far fa-circle"
                      }
                      aria-hidden="true"
                    />
                    <span className="learn-portal__row-body">
                      <strong>{quiz.title}</strong>
                      <small>
                        Final quiz
                        {quiz.questionCount
                          ? ` · ${quiz.questionCount} questions`
                          : ""}
                        {quiz.passed
                          ? " · Passed"
                          : quiz.bestScore != null
                            ? ` · Best ${quiz.bestScore}%`
                            : ` · Pass ${quiz.passingScore}%`}
                      </small>
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </aside>

        <main className="learn-portal__main">
          <div
            className={`learn-portal__player${
              activeQuizId ? " learn-portal__player--quiz" : ""
            }`}
          >
            {activeQuizId ? (
              <CourseQuizPanel
                quizId={activeQuizId}
                onClose={closeQuiz}
                onCompleted={handleQuizCompleted}
              />
            ) : !activeLesson?.is_unlocked ? (
              <div className="learn-portal__player-empty">
                <i className="fas fa-lock" aria-hidden="true" />
                <p>This lesson is locked until your enrollment is confirmed.</p>
              </div>
            ) : activeVideo ? (
              <div className="learn-portal__player-frame">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo}?rel=0&modestbranding=1`}
                  title={activeLesson?.title || "Course video"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="learn-portal__player-empty">
                <i className="fas fa-video-slash" aria-hidden="true" />
                <p>
                  {activeLesson?.document_url || activeLesson?.content
                    ? "This lesson uses reading materials below."
                    : "Video content for this lesson will be available soon."}
                </p>
              </div>
            )}
          </div>

          {!activeQuizId ? (
            <>
              <nav className="learn-portal__tabs" aria-label="Lesson tools">
                {[
                  { id: "summary", label: "Summary", icon: "fas fa-align-left" },
                  {
                    id: "resources",
                    label: "Resources",
                    icon: "fas fa-folder-open",
                  },
                  {
                    id: "quizzes",
                    label: "Quizzes",
                    icon: "fas fa-clipboard-list",
                  },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    className={`learn-portal__tab${
                      activeTab === tab.id ? " is-active" : ""
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <i className={tab.icon} aria-hidden="true" />
                    {tab.label}
                  </button>
                ))}
              </nav>

              <div className="learn-portal__panel">
                {activeTab === "summary" && (
                  <>
                    <div className="learn-portal__lesson-head">
                      {course.category ? (
                        <span className="learn-portal__chip">
                          {course.category}
                        </span>
                      ) : null}
                      <h2>{activeLesson?.title || course.title}</h2>
                      {activeLesson?.chapterTitle ? (
                        <p>
                          Chapter: {activeLesson.chapterTitle}
                          {activeLesson?.content
                            ? ` — ${String(activeLesson.content).slice(0, 90)}${
                                String(activeLesson.content).length > 90
                                  ? "…"
                                  : ""
                              }`
                            : ""}
                        </p>
                      ) : null}
                    </div>

                    {activeLesson?.is_unlocked && (
                      <button
                        type="button"
                        className={`learn-portal__complete-btn${
                          activeLesson.is_completed ? " is-done" : ""
                        }`}
                        onClick={handleToggleComplete}
                        disabled={savingProgress}
                      >
                        {savingProgress
                          ? "Saving..."
                          : activeLesson.is_completed
                            ? "Completed — Undo"
                            : "Mark as Complete"}
                      </button>
                    )}

                    {activeLesson?.content ? (
                      <div className="learn-portal__notes">
                        <h3>Lesson notes</h3>
                        <p>{activeLesson.content}</p>
                      </div>
                    ) : (
                      <p className="learn-portal__muted">
                        No written summary for this lesson yet.
                      </p>
                    )}

                    <div className="learn-portal__instructor">
                      <div className="learn-portal__instructor-avatar">
                        <i className="fas fa-user-tie" aria-hidden="true" />
                      </div>
                      <div>
                        <strong>{course.instructor}</strong>
                        <span>Instructor</span>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === "resources" && (
                  <div className="learn-portal__resources">
                    {documentHref ? (
                      <a
                        href={documentHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="learn-portal__resource-card"
                      >
                        <i className="fas fa-file-alt" aria-hidden="true" />
                        <span>
                          <strong>Lesson document</strong>
                          <small>Open or download PDF / file</small>
                        </span>
                      </a>
                    ) : (
                      <p className="learn-portal__muted">
                        No resources attached to this lesson.
                      </p>
                    )}
                  </div>
                )}

                {activeTab === "quizzes" && (
                  <div className="learn-portal__resources">
                    {lessonQuizzes.length > 0 ? (
                      lessonQuizzes.map((quiz) => (
                        <button
                          key={quiz.id}
                          type="button"
                          className="learn-portal__resource-card"
                          onClick={() => openQuiz(quiz)}
                        >
                          <i
                            className="fas fa-clipboard-list"
                            aria-hidden="true"
                          />
                          <span>
                            <strong>{quiz.title}</strong>
                            <small>
                              {quiz.questionCount} questions · Pass{" "}
                              {quiz.passingScore}%
                            </small>
                          </span>
                        </button>
                      ))
                    ) : (
                      <p className="learn-portal__muted">
                        No quizzes for this lesson.
                      </p>
                    )}
                  </div>
                )}
              </div>
            </>
          ) : null}
        </main>
      </div>
    </LearnLayout>
  );
}
