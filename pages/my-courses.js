import Layout from "@/components/layout/Layout";
import ContentLoader from "@/components/common/ContentLoader";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { fetchMyCourses } from "@/lib/learner";
import { useClientFetch } from "@/hooks/useClientFetch";

function ProgressBar({ percent }) {
  const value = Math.max(0, Math.min(100, Number(percent) || 0));

  return (
    <div
      style={{
        width: "100%",
        height: "8px",
        borderRadius: "999px",
        backgroundColor: "#e8eef6",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${value}%`,
          height: "100%",
          backgroundColor: value >= 100 ? "#16a34a" : "#3FA9F5",
          transition: "width 0.3s ease",
        }}
      />
    </div>
  );
}

function statusMeta(status, canAccess) {
  if (status === "confirmed" || canAccess) {
    return { label: "Confirmed", color: "#16a34a", bg: "rgba(22,163,74,0.1)" };
  }
  if (status === "pending") {
    return { label: "Pending", color: "#d97706", bg: "rgba(217,119,6,0.12)" };
  }
  return { label: status || "Unknown", color: "#64748b", bg: "#f1f5f9" };
}

export default function MyCoursesPage() {
  const router = useRouter();
  const { user, isAuthenticated, loading: authLoading } = useAuth();

  useEffect(() => {
    if (authLoading) return;
    if (!isAuthenticated) {
      router.replace(
        `/auth/sign-in?redirect=${encodeURIComponent("/my-courses")}`
      );
    }
  }, [authLoading, isAuthenticated, router]);

  const { data, loading, error } = useClientFetch(
    () => fetchMyCourses(),
    [user?.id],
    {
      enabled: isAuthenticated && !authLoading,
      initialData: null,
      cacheKey: `my-courses-${user?.id || "guest"}`,
    }
  );

  if (authLoading || !isAuthenticated) {
    return (
      <Layout breadcrumbTitle="My Courses">
        <ContentLoader message="Checking your account..." />
      </Layout>
    );
  }

  if (loading) {
    return (
      <Layout breadcrumbTitle="My Courses">
        <ContentLoader message="Loading your courses..." />
      </Layout>
    );
  }

  const courses = data?.courses || [];
  const summary = data?.summary || {
    total: 0,
    confirmed: 0,
    pending: 0,
    inProgress: 0,
    completed: 0,
  };

  return (
    <Layout breadcrumbTitle="My Courses">
      <section className="pt-100 pb-120">
        <div className="container">
          <div className="row mb-40 align-items-end">
            <div className="col-lg-8">
              <span
                style={{
                  color: "#3FA9F5",
                  fontWeight: 600,
                  fontSize: "14px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Learning Portal
              </span>
              <h2
                style={{
                  color: "#22428F",
                  fontWeight: 700,
                  marginTop: "8px",
                  marginBottom: "10px",
                }}
              >
                Welcome back, {user?.name?.split(" ")[0] || "Learner"}
              </h2>
              <p style={{ color: "#334770", margin: 0, maxWidth: "560px" }}>
                Track your enrollments, continue where you left off, and monitor
                your progress across Ogaalsan courses.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end mt-20 mt-lg-0">
              <Link
                href="/courses"
                className="btn"
                style={{
                  backgroundColor: "#3FA9F5",
                  color: "#fff",
                  padding: "12px 22px",
                  borderRadius: "8px",
                  fontWeight: 600,
                }}
              >
                Browse Courses
              </Link>
            </div>
          </div>

          <div className="row mb-40 g-3">
            {[
              { label: "Enrolled", value: summary.total },
              { label: "Confirmed", value: summary.confirmed },
              { label: "In Progress", value: summary.inProgress },
              { label: "Completed", value: summary.completed },
            ].map((stat) => (
              <div className="col-6 col-md-3" key={stat.label}>
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid #e8eef6",
                    borderRadius: "12px",
                    padding: "20px",
                    boxShadow: "0 6px 20px rgba(34, 66, 143, 0.04)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "28px",
                      fontWeight: 700,
                      color: "#22428F",
                      lineHeight: 1.1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: "13px", color: "#667085", marginTop: 6 }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {error && (
            <div
              className="mb-30"
              style={{
                background: "rgba(220,38,38,0.08)",
                color: "#b91c1c",
                padding: "14px 18px",
                borderRadius: "8px",
              }}
            >
              {error.message || "Unable to load your courses."}
            </div>
          )}

          {courses.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "60px 24px",
                border: "1px dashed #c7d7ea",
                borderRadius: "12px",
                background: "#f9fbff",
              }}
            >
              <i
                className="fas fa-graduation-cap"
                style={{ fontSize: 40, color: "#3FA9F5", marginBottom: 16 }}
              />
              <h3 style={{ color: "#22428F", marginBottom: 10 }}>
                No courses yet
              </h3>
              <p style={{ color: "#334770", marginBottom: 24 }}>
                Register for a course to start learning in your portal.
              </p>
              <Link
                href="/courses"
                className="btn"
                style={{
                  backgroundColor: "#3FA9F5",
                  color: "#fff",
                  padding: "12px 22px",
                  borderRadius: "8px",
                }}
              >
                Explore Courses
              </Link>
            </div>
          ) : (
            <div className="row">
              {courses.map((item) => {
                const meta = statusMeta(item.status, item.canAccess);
                const course = item.course;
                const watchHref = `/course/watch/${course.slug || course.id}`;

                return (
                  <div className="col-lg-6 mb-30" key={item.registrationId}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        background: "#fff",
                        border: "1px solid #e8eef6",
                        borderRadius: "14px",
                        overflow: "hidden",
                        boxShadow: "0 8px 24px rgba(34, 66, 143, 0.06)",
                      }}
                    >
                      <div style={{ position: "relative", height: 180 }}>
                        <Image
                          src={course.image}
                          alt={course.title}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="(max-width: 992px) 100vw, 50vw"
                        />
                      </div>

                      <div
                        style={{
                          padding: "22px",
                          display: "flex",
                          flexDirection: "column",
                          flex: 1,
                          gap: 12,
                        }}
                      >
                        <div className="d-flex justify-content-between align-items-start gap-2">
                          <span
                            style={{
                              fontSize: 12,
                              fontWeight: 600,
                              color: "#3FA9F5",
                              textTransform: "uppercase",
                            }}
                          >
                            {course.category}
                          </span>
                          <span
                            style={{
                              fontSize: 12,
                              fontWeight: 600,
                              color: meta.color,
                              background: meta.bg,
                              padding: "4px 10px",
                              borderRadius: 999,
                            }}
                          >
                            {meta.label}
                          </span>
                        </div>

                        <h4
                          style={{
                            color: "#22428F",
                            fontWeight: 700,
                            margin: 0,
                            fontSize: 20,
                            lineHeight: 1.35,
                          }}
                        >
                          {course.title}
                        </h4>

                        <p
                          style={{
                            color: "#667085",
                            fontSize: 14,
                            margin: 0,
                            flex: 1,
                          }}
                        >
                          {course.instructor} · {course.duration}
                        </p>

                        <div>
                          <div className="d-flex justify-content-between mb-2">
                            <span style={{ fontSize: 13, color: "#334770" }}>
                              Progress
                            </span>
                            <span
                              style={{
                                fontSize: 13,
                                fontWeight: 600,
                                color: "#22428F",
                              }}
                            >
                              {item.progress.percent}%
                            </span>
                          </div>
                          <ProgressBar percent={item.progress.percent} />
                          <div
                            style={{
                              fontSize: 12,
                              color: "#8b9db5",
                              marginTop: 6,
                            }}
                          >
                            {item.progress.completedLessons} of{" "}
                            {item.progress.totalLessons} lessons complete
                          </div>
                        </div>

                        <div className="d-flex gap-2 flex-wrap mt-2">
                          {item.canAccess ? (
                            <Link
                              href={watchHref}
                              style={{
                                backgroundColor: "#22428F",
                                color: "#fff",
                                padding: "10px 16px",
                                borderRadius: 8,
                                fontWeight: 600,
                                fontSize: 14,
                                textDecoration: "none",
                              }}
                            >
                              Continue Learning
                            </Link>
                          ) : (
                            <span
                              style={{
                                backgroundColor: "#f1f5f9",
                                color: "#64748b",
                                padding: "10px 16px",
                                borderRadius: 8,
                                fontWeight: 600,
                                fontSize: 14,
                              }}
                            >
                              Awaiting confirmation
                            </span>
                          )}
                          <Link
                            href={`/course/${course.slug || course.id}`}
                            style={{
                              border: "1px solid #c7d7ea",
                              color: "#22428F",
                              padding: "10px 16px",
                              borderRadius: 8,
                              fontWeight: 600,
                              fontSize: 14,
                              textDecoration: "none",
                            }}
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
