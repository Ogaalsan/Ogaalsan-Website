import Layout from "@/components/layout/Layout";
import ContentLoader from "@/components/common/ContentLoader";
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

export default function CourseWatch() {
  const router = useRouter();
  const identifier = router.query.id;
  const ready = router.isReady && Boolean(identifier);
  const { isAuthenticated, loading: authLoading } = useAuth();

  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [savingProgress, setSavingProgress] = useState(false);

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
        if (active) {
          setPayload(result);
          const firstUnlocked = result.course.lessons?.findIndex(
            (lesson) => lesson.is_unlocked
          );
          setActiveLessonIndex(
            firstUnlocked !== undefined && firstUnlocked >= 0
              ? firstUnlocked
              : 0
          );
        }
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
  }, [ready, identifier, isAuthenticated, authLoading]);

  const course = payload?.course;
  const access = payload?.access;
  const progress = payload?.progress;

  const lessons = useMemo(() => course?.lessons || [], [course]);
  const activeLesson = lessons[activeLessonIndex] || lessons[0];
  const activeVideo = extractYouTubeId(activeLesson?.video_url);

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

  if (authLoading || !isAuthenticated) {
    return (
      <Layout>
        <ContentLoader message="Checking your account..." />
      </Layout>
    );
  }

  if (!ready || loading) {
    return (
      <Layout>
        <ContentLoader message="Loading your course..." />
      </Layout>
    );
  }

  if (error && !course) {
    return (
      <Layout>
        <div className="container pt-120 pb-120 text-center">
          <h2 style={{ color: "#22428F" }}>Unable to load course</h2>
          <p style={{ color: "#334770" }}>
            {error.message || "Please try again."}
          </p>
          <Link href="/my-courses" className="btn mt-30">
            Back to My Courses
          </Link>
        </div>
      </Layout>
    );
  }

  if (!course) {
    return (
      <Layout>
        <div className="container pt-120 pb-120 text-center">
          <h2>Course not found.</h2>
          <Link href="/my-courses" className="btn mt-30">
            Back to My Courses
          </Link>
        </div>
      </Layout>
    );
  }

  const documentHref = activeLesson?.document_url
    ? resolveMediaUrl(activeLesson.document_url)
    : null;

  return (
    <Layout breadcrumbTitle={course.title}>
      <section className="course-watch-area pt-60 pb-120">
        <div className="container-fluid" style={{ maxWidth: "1600px" }}>
          {!access?.canAccess && (
            <div
              className="mb-30"
              style={{
                background: "rgba(217,119,6,0.12)",
                border: "1px solid rgba(217,119,6,0.25)",
                color: "#92400e",
                padding: "14px 18px",
                borderRadius: 10,
              }}
            >
              <strong style={{ display: "block", marginBottom: 4 }}>
                Limited access
              </strong>
              {access?.message ||
                "Your registration is pending. Free preview lessons are available."}
              {!access?.registered && (
                <div className="mt-2">
                  <Link
                    href={`/course/${course.slug || course.id}/register`}
                    style={{ color: "#22428F", fontWeight: 600 }}
                  >
                    Register for full access →
                  </Link>
                </div>
              )}
            </div>
          )}

          <div className="row mb-20 align-items-center">
            <div className="col-md-8">
              <Link
                href="/my-courses"
                style={{
                  color: "#3FA9F5",
                  fontWeight: 600,
                  fontSize: 14,
                  textDecoration: "none",
                }}
              >
                ← My Courses
              </Link>
              <h2
                style={{
                  color: "#22428F",
                  fontWeight: 700,
                  marginTop: 8,
                  marginBottom: 0,
                  fontSize: 28,
                }}
              >
                {course.title}
              </h2>
            </div>
            <div className="col-md-4 text-md-end mt-3 mt-md-0">
              <div style={{ fontSize: 13, color: "#667085", marginBottom: 6 }}>
                Progress: {progress?.percent ?? 0}% (
                {progress?.completedLessons ?? 0}/
                {progress?.totalLessons ?? lessons.length})
              </div>
              <div
                style={{
                  width: "100%",
                  maxWidth: 220,
                  marginLeft: "auto",
                  height: 8,
                  borderRadius: 999,
                  background: "#e8eef6",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${progress?.percent ?? 0}%`,
                    height: "100%",
                    background: "#3FA9F5",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 mb-40">
              <div
                className="video-player-container"
                style={{
                  backgroundColor: "#000",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                }}
              >
                {!activeLesson?.is_unlocked ? (
                  <div
                    style={{
                      minHeight: "420px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      padding: "40px",
                      textAlign: "center",
                    }}
                  >
                    <div>
                      <i
                        className="fas fa-lock"
                        style={{ fontSize: "42px", marginBottom: "16px" }}
                      />
                      <p style={{ margin: 0 }}>
                        This lesson is locked until your enrollment is
                        confirmed.
                      </p>
                    </div>
                  </div>
                ) : activeVideo ? (
                  <div
                    style={{
                      position: "relative",
                      paddingBottom: "56.25%",
                      height: 0,
                    }}
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${activeVideo}?rel=0&modestbranding=1&autoplay=0`}
                      title="Course Video Player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                ) : (
                  <div
                    style={{
                      minHeight: "420px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      padding: "40px",
                      textAlign: "center",
                    }}
                  >
                    <div>
                      <i
                        className="fas fa-video-slash"
                        style={{ fontSize: "42px", marginBottom: "16px" }}
                      />
                      <p style={{ margin: 0 }}>
                        {activeLesson?.document_url || activeLesson?.content
                          ? "This lesson uses reading materials below."
                          : "Video content for this lesson will be available soon."}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="course-info mt-40">
                <span
                  style={{
                    backgroundColor: "rgba(63, 169, 245, 0.1)",
                    color: "#3FA9F5",
                    padding: "5px 15px",
                    borderRadius: "20px",
                    fontSize: "14px",
                    fontWeight: "600",
                    marginBottom: "15px",
                    display: "inline-block",
                  }}
                >
                  {course.category}
                </span>
                <h2
                  style={{
                    color: "#22428F",
                    fontWeight: "700",
                    marginBottom: "12px",
                  }}
                >
                  {activeLesson?.title || course.title}
                </h2>

                {activeLesson?.chapterTitle && (
                  <p style={{ color: "#8b9db5", marginBottom: 16 }}>
                    Chapter: {activeLesson.chapterTitle}
                  </p>
                )}

                {activeLesson?.is_unlocked && (
                  <button
                    type="button"
                    onClick={handleToggleComplete}
                    disabled={savingProgress}
                    style={{
                      backgroundColor: activeLesson.is_completed
                        ? "#16a34a"
                        : "#22428F",
                      color: "#fff",
                      border: "none",
                      borderRadius: 8,
                      padding: "10px 16px",
                      fontWeight: 600,
                      marginBottom: 20,
                      cursor: savingProgress ? "wait" : "pointer",
                    }}
                  >
                    {savingProgress
                      ? "Saving..."
                      : activeLesson.is_completed
                        ? "✓ Completed — Undo"
                        : "Mark as Complete"}
                  </button>
                )}

                {activeLesson?.content && (
                  <>
                    <h4 style={{ color: "#22428F", marginBottom: "15px" }}>
                      Lesson Notes
                    </h4>
                    <p
                      style={{
                        color: "#334770",
                        lineHeight: "1.8",
                        fontSize: "16px",
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      {activeLesson.content}
                    </p>
                  </>
                )}

                {documentHref && (
                  <a
                    href={documentHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      marginTop: 16,
                      color: "#3FA9F5",
                      fontWeight: 600,
                    }}
                  >
                    <i className="fas fa-file-alt" />
                    Download / open lesson document
                  </a>
                )}

                <div
                  className="mt-30 pt-30"
                  style={{ borderTop: "1px solid #eef2f6" }}
                >
                  <div className="d-flex align-items-center gap-3">
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        backgroundColor: "#eef2f6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <i
                        className="fas fa-user-tie"
                        style={{ color: "#3FA9F5", fontSize: "20px" }}
                      />
                    </div>
                    <div>
                      <h5 style={{ margin: 0, color: "#22428F" }}>
                        {course.instructor}
                      </h5>
                      <span style={{ fontSize: "14px", color: "#334770" }}>
                        Instructor
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="course-content-sidebar"
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid #eef2f6",
                  borderRadius: "10px",
                  boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.05)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    padding: "20px 25px",
                    borderBottom: "1px solid #eef2f6",
                    backgroundColor: "#f9fbff",
                  }}
                >
                  <h4 style={{ margin: 0, color: "#22428F", fontSize: "20px" }}>
                    Course Content
                  </h4>
                  <span style={{ fontSize: "14px", color: "#334770" }}>
                    {lessons.length} lessons • {course.duration}
                  </span>
                </div>

                <div
                  className="syllabus-list"
                  style={{ maxHeight: "700px", overflowY: "auto" }}
                >
                  {lessons.map((lesson, index) => {
                    const isActive = activeLessonIndex === index;
                    const locked = !lesson.is_unlocked;

                    return (
                      <div
                        key={lesson.id || index}
                        onClick={() => setActiveLessonIndex(index)}
                        style={{
                          padding: "20px 25px",
                          borderBottom: "1px solid #eef2f6",
                          cursor: "pointer",
                          backgroundColor: isActive
                            ? "rgba(63, 169, 245, 0.05)"
                            : "#fff",
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "15px",
                          opacity: locked ? 0.65 : 1,
                        }}
                      >
                        <div
                          style={{
                            marginTop: "3px",
                            color: lesson.is_completed
                              ? "#16a34a"
                              : isActive
                                ? "#3FA9F5"
                                : "#a1b1c5",
                          }}
                        >
                          <i
                            className={
                              locked
                                ? "fas fa-lock"
                                : lesson.is_completed
                                  ? "fas fa-check-circle"
                                  : isActive
                                    ? "fas fa-play-circle"
                                    : "far fa-play-circle"
                            }
                            style={{ fontSize: "18px" }}
                          />
                        </div>
                        <div>
                          <h6
                            style={{
                              margin: 0,
                              color: isActive ? "#3FA9F5" : "#22428F",
                              fontSize: "15px",
                              lineHeight: "1.4",
                            }}
                          >
                            {index + 1}. {lesson.title}
                          </h6>
                          <span style={{ fontSize: "13px", color: "#8b9db5" }}>
                            {locked
                              ? "Locked"
                              : lesson.is_free_preview
                                ? "Free preview"
                                : lesson.video_url
                                  ? "Video lesson"
                                  : "Reading material"}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
