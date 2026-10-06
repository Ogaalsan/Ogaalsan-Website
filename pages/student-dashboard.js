import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useMemo, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { fetchMyCourses } from "@/lib/learner";
import { useClientFetch } from "@/hooks/useClientFetch";
import ContentLoader from "@/components/common/ContentLoader";
import ThemeToggle from "@/components/common/ThemeToggle";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export default function StudentDashboard() {
  const router = useRouter();
  const { user, isAuthenticated, loading: authLoading, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (authLoading) return;
    if (!isAuthenticated) {
      router.replace(
        `/auth/sign-in?redirect=${encodeURIComponent("/student-dashboard")}`
      );
    }
  }, [authLoading, isAuthenticated, router]);

  const { data, loading, error } = useClientFetch(
    () => fetchMyCourses(),
    [user?.id],
    {
      enabled: isAuthenticated && !authLoading,
      initialData: null,
      cacheKey: `student-dashboard-${user?.id || "guest"}`,
    }
  );

  const courses = data?.courses || [];
  const summary = data?.summary || {
    total: 0,
    confirmed: 0,
    pending: 0,
    inProgress: 0,
    completed: 0,
  };

  const avgProgress = useMemo(() => {
    if (!courses.length) return 0;
    const totalPercent = courses.reduce(
      (sum, item) => sum + (item.progress?.percent || 0),
      0
    );
    return Math.round(totalPercent / courses.length);
  }, [courses]);

  const filteredCourses = useMemo(() => {
    if (!searchQuery.trim()) return courses;
    const q = searchQuery.toLowerCase().trim();
    return courses.filter((c) =>
      c.course?.title?.toLowerCase().includes(q) ||
      c.course?.category?.toLowerCase().includes(q)
    );
  }, [courses, searchQuery]);

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  if (authLoading || !isAuthenticated) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
        <ContentLoader message="Loading your student portal..." />
      </div>
    );
  }

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: "fas fa-tachometer-alt" },
    { id: "courses", label: "My Courses", icon: "fas fa-book-open" },
    { id: "certificates", label: "My Certificates", icon: "fas fa-award" },
    { id: "quizzes", label: "Quiz Attempts", icon: "fas fa-clipboard-check" },
    { id: "events", label: "Events & Workshops", icon: "fas fa-calendar-alt" },
    { id: "settings", label: "Settings", icon: "fas fa-cog" },
  ];

  const firstName = user?.name ? user.name.split(" ")[0] : "there";
  const userInitials = (user?.name || "U")
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <>
      <Head>
        <title>Student Dashboard | OgaalSan Portal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="student-portal-wrapper">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className="portal-backdrop"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside className={`portal-sidebar ${sidebarOpen ? "show" : ""}`}>
          <div className="portal-sidebar-brand">
            <Link href="/" className="portal-brand-link">
              <img
                src="/assets/img/logo/logo-ogalsan.png"
                alt="OgaalSan"
                className="portal-brand-logo"
              />
              <div className="portal-brand-text">
                <span className="portal-title">Student Portal</span>
                <span className="portal-subtitle">OgaalSan Academy</span>
              </div>
            </Link>
          </div>

          <div className="portal-nav-section">
            <ul className="portal-nav-list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className={`portal-nav-btn ${
                      activeTab === item.id ? "active" : ""
                    }`}
                    onClick={() => {
                      setActiveTab(item.id);
                      setSidebarOpen(false);
                    }}
                  >
                    <i className={item.icon} />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* User Profile Card */}
          <div className="portal-sidebar-footer">
            <div className="portal-user-card">
              <div className="portal-user-avatar">
                {userInitials}
              </div>
              <div className="portal-user-info">
                <span className="portal-user-name">{user?.name || "Student"}</span>
                <span className="portal-user-email">{user?.email || ""}</span>
              </div>
              <button
                type="button"
                className="portal-logout-btn"
                onClick={handleLogout}
                title="Sign Out"
                aria-label="Sign Out"
              >
                <i className="fas fa-sign-out-alt" />
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="portal-main">
          {/* Top Bar */}
          <header className="portal-topbar">
            <div className="d-flex align-items-center gap-3">
              <button
                type="button"
                className="portal-menu-toggle d-lg-none"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-label="Toggle Navigation"
              >
                <i className="fas fa-bars" />
              </button>
              <div className="portal-breadcrumbs">
                <Link href="/">Home</Link>
                <i className="fas fa-chevron-right separator" />
                <span>Student Dashboard</span>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3">
              <ThemeToggle />
              <Link href="/courses" className="portal-link-btn">
                <span>Browse Catalog</span>
                <i className="fas fa-external-link-alt" />
              </Link>
            </div>
          </header>

          <div className="portal-content-container">
            {/* Banner Greeting */}
            <div className="portal-welcome-banner">
              <div className="d-flex align-items-center gap-4 flex-wrap flex-md-nowrap">
                <div className="portal-welcome-icon">
                  <i className="fas fa-graduation-cap" />
                </div>
                <div className="portal-welcome-text">
                  <span className="portal-welcome-sub">{getGreeting()}</span>
                  <h1 className="portal-welcome-title">{firstName}</h1>
                </div>
              </div>
              <Link href="/courses" className="portal-banner-btn">
                <span>Browse courses</span>
                <i className="fas fa-arrow-up-right-from-square" />
              </Link>
            </div>

            {/* KPI Stat Cards */}
            <div className="portal-stats-grid">
              <div className="portal-stat-card">
                <div className="portal-stat-icon">
                  <i className="fas fa-book-open" />
                </div>
                <div className="portal-stat-data">
                  <span className="portal-stat-label">Enrolled</span>
                  <span className="portal-stat-value">{summary.total}</span>
                </div>
              </div>

              <div className="portal-stat-card">
                <div className="portal-stat-icon completed">
                  <i className="fas fa-check-circle" />
                </div>
                <div className="portal-stat-data">
                  <span className="portal-stat-label">Completed</span>
                  <span className="portal-stat-value">{summary.completed}</span>
                </div>
              </div>

              <div className="portal-stat-card">
                <div className="portal-stat-icon progress-icon">
                  <i className="fas fa-chart-line" />
                </div>
                <div className="portal-stat-data">
                  <span className="portal-stat-label">Avg. progress</span>
                  <span className="portal-stat-value">{avgProgress}%</span>
                </div>
              </div>
            </div>

            {/* Main Course Section */}
            {activeTab === "dashboard" || activeTab === "courses" ? (
              <div className="portal-section-card">
                <div className="portal-section-header">
                  <div>
                    <h2 className="portal-section-title">My courses</h2>
                    <p className="portal-section-sub">
                      Pick up where you left off or review completed lessons.
                    </p>
                  </div>

                  <div className="portal-search-box">
                    <i className="fas fa-search search-icon" />
                    <input
                      type="text"
                      placeholder="Search your courses..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        className="clear-search"
                        onClick={() => setSearchQuery("")}
                      >
                        <i className="fas fa-times" />
                      </button>
                    )}
                  </div>
                </div>

                {loading ? (
                  <div className="py-5 text-center">
                    <ContentLoader message="Loading your courses..." />
                  </div>
                ) : error ? (
                  <div className="alert alert-danger my-4">
                    {error.message || "Failed to load courses."}
                  </div>
                ) : filteredCourses.length === 0 ? (
                  <div className="portal-empty-state">
                    <div className="portal-empty-icon">
                      <i className="fas fa-book-open" />
                    </div>
                    <h3 className="portal-empty-title">
                      {searchQuery ? "No matching courses found" : "No courses yet"}
                    </h3>
                    <p className="portal-empty-desc">
                      {searchQuery
                        ? `No enrolled courses match "${searchQuery}".`
                        : "You haven't enrolled in any courses yet. Explore our catalog to find the perfect learning opportunity for you."}
                    </p>
                    <Link href="/courses" className="portal-action-btn">
                      <span>Explore courses</span>
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                ) : (
                  <div className="portal-courses-grid">
                    {filteredCourses.map((item) => {
                      const course = item.course;
                      const watchHref = `/course/watch/${course.slug || course.id}`;
                      const percent = item.progress?.percent || 0;
                      const isConfirmed = item.status === "confirmed" || item.canAccess;

                      return (
                        <div className="portal-course-card" key={item.registrationId}>
                          <div className="portal-course-thumb">
                            <Image
                              src={course.image || "/assets/img/courses/course_thumb01.jpg"}
                              alt={course.title}
                              fill
                              style={{ objectFit: "cover" }}
                            />
                            <span
                              className={`portal-badge ${
                                isConfirmed ? "badge-confirmed" : "badge-pending"
                              }`}
                            >
                              {isConfirmed ? "Confirmed" : "Pending"}
                            </span>
                          </div>

                          <div className="portal-course-body">
                            <span className="portal-course-category">
                              {course.category}
                            </span>
                            <h4 className="portal-course-title">
                              <Link href={watchHref}>{course.title}</Link>
                            </h4>
                            <div className="portal-course-instructor">
                              <i className="fas fa-user-circle" />
                              <span>{course.instructor}</span>
                            </div>

                            <div className="portal-course-progress">
                              <div className="d-flex justify-content-between text-xs mb-1">
                                <span className="progress-label">Progress</span>
                                <span className="progress-percent">{percent}%</span>
                              </div>
                              <div className="progress-track">
                                <div
                                  className="progress-fill"
                                  style={{
                                    width: `${percent}%`,
                                    backgroundColor: percent >= 100 ? "#16a34a" : "#3FA9F5",
                                  }}
                                />
                              </div>
                              <div className="progress-count mt-1">
                                {item.progress?.completedLessons || 0} of{" "}
                                {item.progress?.totalLessons || 0} lessons completed
                              </div>
                            </div>

                            <div className="portal-course-footer">
                              <Link href={watchHref} className="portal-continue-btn">
                                <i className="fas fa-play" />
                                <span>Continue Learning</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ) : null}

            {activeTab === "certificates" && (
              <div className="portal-section-card text-center py-5">
                <div className="portal-empty-icon">
                  <i className="fas fa-award" />
                </div>
                <h3 className="portal-empty-title">My Certificates</h3>
                <p className="portal-empty-desc">
                  Complete 100% of your course lessons and quizzes to earn verified certificates.
                </p>
                <button
                  type="button"
                  className="portal-action-btn"
                  onClick={() => setActiveTab("courses")}
                >
                  View Course Progress
                </button>
              </div>
            )}

            {activeTab === "quizzes" && (
              <div className="portal-section-card text-center py-5">
                <div className="portal-empty-icon">
                  <i className="fas fa-clipboard-check" />
                </div>
                <h3 className="portal-empty-title">Quiz Attempts</h3>
                <p className="portal-empty-desc">
                  Your quiz scores and attempt history will appear here once you take module quizzes.
                </p>
              </div>
            )}

            {activeTab === "events" && (
              <div className="portal-section-card text-center py-5">
                <div className="portal-empty-icon">
                  <i className="fas fa-calendar-alt" />
                </div>
                <h3 className="portal-empty-title">Events &amp; Workshops</h3>
                <p className="portal-empty-desc">
                  Join upcoming live webinars and capacity building sessions organized by OgaalSan.
                </p>
                <Link href="/events" className="portal-action-btn">
                  Browse Events
                </Link>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="portal-section-card p-4">
                <h3 className="portal-section-title mb-4">Account Settings</h3>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label text-sm fw-bold">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={user?.name || ""}
                      readOnly
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-sm fw-bold">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      value={user?.email || ""}
                      readOnly
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      <style jsx global>{`
        .student-portal-wrapper {
          display: flex;
          min-height: 100vh;
          background-color: #f8fafc;
          font-family: var(--tg-body-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
        }

        .portal-sidebar {
          width: 260px;
          background: #ffffff;
          border-right: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          z-index: 1050;
          transition: transform 0.3s ease;
        }

        @media (max-width: 991.98px) {
          .portal-sidebar {
            transform: translateX(-100%);
          }
          .portal-sidebar.show {
            transform: translateX(0);
          }
        }

        .portal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.4);
          z-index: 1040;
        }

        .portal-sidebar-brand {
          padding: 24px 20px;
          border-bottom: 1px solid #f1f5f9;
        }

        .portal-brand-link {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .portal-brand-logo {
          height: 38px;
          width: auto;
          object-fit: contain;
        }

        .portal-brand-text {
          display: flex;
          flex-direction: column;
        }

        .portal-title {
          font-size: 15px;
          font-weight: 700;
          color: #22428F;
          line-height: 1.2;
        }

        .portal-subtitle {
          font-size: 11px;
          color: #64748b;
        }

        .portal-nav-section {
          flex: 1;
          padding: 20px 12px;
          overflow-y: auto;
        }

        .portal-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .portal-nav-btn {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 16px;
          border-radius: 8px;
          border: none;
          background: transparent;
          color: #475569;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
        }

        .portal-nav-btn:hover {
          background: #f1f5f9;
          color: #22428F;
        }

        .portal-nav-btn.active {
          background: #3FA9F5;
          color: #ffffff;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(63, 169, 245, 0.25);
        }

        .portal-nav-btn i {
          font-size: 16px;
          width: 20px;
          text-align: center;
        }

        .portal-sidebar-footer {
          padding: 16px;
          border-top: 1px solid #f1f5f9;
          background: #ffffff;
        }

        .portal-user-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px;
          border-radius: 8px;
          background: #f8fafc;
        }

        .portal-user-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #22428F;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 13px;
        }

        .portal-user-info {
          flex: 1;
          min-width: 0;
        }

        .portal-user-name {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: #1e293b;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .portal-user-email {
          display: block;
          font-size: 11px;
          color: #64748b;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .portal-logout-btn {
          border: none;
          background: transparent;
          color: #94a3b8;
          cursor: pointer;
          padding: 6px;
          border-radius: 6px;
          transition: color 0.2s;
        }

        .portal-logout-btn:hover {
          color: #ef4444;
        }

        .portal-main {
          flex: 1;
          margin-left: 260px;
          min-width: 0;
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 991.98px) {
          .portal-main {
            margin-left: 0;
          }
        }

        .portal-topbar {
          height: 68px;
          background: #ffffff;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 28px;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .portal-menu-toggle {
          border: 1px solid #cbd5e1;
          background: transparent;
          padding: 6px 10px;
          border-radius: 6px;
          color: #334155;
          cursor: pointer;
        }

        .portal-breadcrumbs {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #64748b;
        }

        .portal-breadcrumbs a {
          color: #64748b;
          text-decoration: none;
        }

        .portal-breadcrumbs .separator {
          font-size: 10px;
        }

        .portal-breadcrumbs span {
          color: #1e293b;
          font-weight: 600;
        }

        .portal-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 500;
          color: #22428F;
          text-decoration: none;
          padding: 6px 12px;
          border-radius: 6px;
          background: #f1f5f9;
          transition: all 0.2s;
        }

        .portal-link-btn:hover {
          background: #e2e8f0;
        }

        .portal-content-container {
          padding: 28px;
          max-width: 1400px;
        }

        .portal-welcome-banner {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 24px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 24px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
        }

        .portal-welcome-icon {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: #e6f4fe;
          color: #3FA9F5;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .portal-welcome-sub {
          font-size: 13px;
          color: #64748b;
          display: block;
        }

        .portal-welcome-title {
          font-size: 26px;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
          line-height: 1.2;
        }

        .portal-banner-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 8px;
          border: 1px solid #cbd5e1;
          color: #1e293b;
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          background: #ffffff;
          transition: all 0.2s;
          white-space: nowrap;
        }

        .portal-banner-btn:hover {
          border-color: #3FA9F5;
          color: #3FA9F5;
        }

        .portal-stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-bottom: 28px;
        }

        .portal-stat-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
        }

        .portal-stat-icon {
          width: 46px;
          height: 46px;
          border-radius: 10px;
          background: #e6f4fe;
          color: #3FA9F5;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }

        .portal-stat-icon.completed {
          background: #dcfce7;
          color: #16a34a;
        }

        .portal-stat-icon.progress-icon {
          background: #e0f2fe;
          color: #0284c7;
        }

        .portal-stat-label {
          font-size: 13px;
          color: #64748b;
          display: block;
        }

        .portal-stat-value {
          font-size: 24px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.2;
        }

        .portal-section-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 28px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
        }

        .portal-section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 24px;
        }

        .portal-section-title {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 4px;
        }

        .portal-section-sub {
          font-size: 13px;
          color: #64748b;
          margin: 0;
        }

        .portal-search-box {
          position: relative;
          min-width: 260px;
        }

        .portal-search-box input {
          width: 100%;
          padding: 9px 36px 9px 36px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font-size: 13px;
          outline: none;
        }

        .portal-search-box input:focus {
          border-color: #3FA9F5;
        }

        .portal-search-box .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
          font-size: 13px;
        }

        .portal-search-box .clear-search {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          border: none;
          background: transparent;
          color: #94a3b8;
          cursor: pointer;
        }

        .portal-empty-state {
          text-align: center;
          padding: 60px 20px;
          max-width: 480px;
          margin: 0 auto;
        }

        .portal-empty-icon {
          width: 56px;
          height: 56px;
          margin: 0 auto 16px;
          border-radius: 12px;
          background: #e6f4fe;
          color: #3FA9F5;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .portal-empty-title {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
        }

        .portal-empty-desc {
          font-size: 14px;
          color: #64748b;
          margin-bottom: 24px;
          line-height: 1.5;
        }

        .portal-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 22px;
          border-radius: 8px;
          background: #3FA9F5;
          color: #ffffff;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: background 0.2s;
        }

        .portal-action-btn:hover {
          background: #22428F;
          color: #ffffff;
        }

        .portal-courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 24px;
        }

        .portal-course-card {
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          overflow: hidden;
          background: #ffffff;
          transition: transform 0.2s, box-shadow 0.2s;
          display: flex;
          flex-direction: column;
        }

        .portal-course-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(34, 66, 143, 0.08);
        }

        .portal-course-thumb {
          position: relative;
          height: 180px;
          width: 100%;
        }

        .portal-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .badge-confirmed {
          background: #16a34a;
          color: #ffffff;
        }

        .badge-pending {
          background: #d97706;
          color: #ffffff;
        }

        .portal-course-body {
          padding: 18px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .portal-course-category {
          font-size: 12px;
          font-weight: 600;
          color: #3FA9F5;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .portal-course-title {
          font-size: 16px;
          font-weight: 700;
          line-height: 1.4;
          margin: 0 0 8px;
        }

        .portal-course-title a {
          color: #0f172a;
          text-decoration: none;
        }

        .portal-course-title a:hover {
          color: #22428F;
        }

        .portal-course-instructor {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #64748b;
          margin-bottom: 16px;
        }

        .portal-course-progress {
          margin-top: auto;
          margin-bottom: 16px;
        }

        .progress-label {
          color: #64748b;
          font-size: 12px;
        }

        .progress-percent {
          font-weight: 700;
          color: #0f172a;
          font-size: 12px;
        }

        .progress-track {
          height: 7px;
          border-radius: 999px;
          background: #f1f5f9;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          border-radius: 999px;
          transition: width 0.4s ease;
        }

        .progress-count {
          font-size: 11px;
          color: #94a3b8;
        }

        .portal-continue-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 10px;
          border-radius: 8px;
          background: #22428F;
          color: #ffffff;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.2s;
        }

        .portal-continue-btn:hover {
          background: #3FA9F5;
          color: #ffffff;
        }

        /* Dark Mode Support */
        html[data-theme="dark"] .student-portal-wrapper {
          background-color: #0b1120;
        }
        html[data-theme="dark"] .portal-sidebar,
        html[data-theme="dark"] .portal-topbar,
        html[data-theme="dark"] .portal-welcome-banner,
        html[data-theme="dark"] .portal-stat-card,
        html[data-theme="dark"] .portal-section-card,
        html[data-theme="dark"] .portal-course-card,
        html[data-theme="dark"] .portal-sidebar-footer {
          background-color: #111827;
          border-color: #1f2937;
        }
        html[data-theme="dark"] .portal-title,
        html[data-theme="dark"] .portal-welcome-title,
        html[data-theme="dark"] .portal-stat-value,
        html[data-theme="dark"] .portal-section-title,
        html[data-theme="dark"] .portal-course-title a,
        html[data-theme="dark"] .progress-percent {
          color: #f8fafc;
        }
        html[data-theme="dark"] .portal-nav-btn {
          color: #94a3b8;
        }
        html[data-theme="dark"] .portal-nav-btn:hover {
          background-color: #1f2937;
          color: #f8fafc;
        }
        html[data-theme="dark"] .portal-user-card {
          background-color: #1f2937;
        }
        html[data-theme="dark"] .portal-user-name {
          color: #f8fafc;
        }
      `}</style>
    </>
  );
}
