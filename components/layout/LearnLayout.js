import Link from "next/link";
import { useRouter } from "next/router";
import PageHead from "./PageHead";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";

export default function LearnLayout({
  headTitle,
  courseTitle,
  children,
}) {
  const router = useRouter();
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  const displayName =
    user?.name || user?.first_name || user?.email?.split("@")[0] || "Learner";

  return (
    <>
      <PageHead headTitle={headTitle || courseTitle || "Learn Portal"} />
      <div className="learn-portal">
        <header className="learn-portal__topbar">
          <div className="learn-portal__brand">
            <Link href="/" className="learn-portal__logo">
              <img
                src="/assets/img/logo/ogaalsan version 4-03.png"
                alt="OgaalSan"
              />
            </Link>
            <div className="learn-portal__brand-copy">
              <span className="learn-portal__brand-label">Learn Portal</span>
              <span className="learn-portal__brand-sub">OgaalSan Consultancy</span>
            </div>
          </div>

          {courseTitle ? (
            <h1 className="learn-portal__course-title">{courseTitle}</h1>
          ) : (
            <span className="learn-portal__course-title learn-portal__course-title--empty" />
          )}

          <div className="learn-portal__actions">
            <button
              type="button"
              className="learn-portal__theme-hint"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              <i className={isDark ? "far fa-sun" : "far fa-moon"} aria-hidden="true" />
            </button>
            <Link
              href="/student-dashboard"
              className="learn-portal__user-btn"
              title={displayName}
              aria-label={`Account: ${displayName}`}
            >
              <i className="fas fa-user" aria-hidden="true" />
              <span className="learn-portal__user-name">{displayName}</span>
            </Link>
            <button
              type="button"
              className="learn-portal__text-btn learn-portal__sign-out"
              onClick={handleLogout}
              aria-label="Sign out"
            >
              <i className="fas fa-sign-out-alt" aria-hidden="true" />
              <span>Sign Out</span>
            </button>
          </div>
        </header>

        <div className="learn-portal__body">{children}</div>
      </div>
    </>
  );
}
