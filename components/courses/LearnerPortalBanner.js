import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function LearnerPortalBanner({ compact = false }) {
  const { isAuthenticated } = useAuth();

  return (
    <div
      className={`learner-portal-banner${
        compact ? " learner-portal-banner--compact" : ""
      }`}
    >
      <div>
        <span className="learner-portal-banner__eyebrow">Learning Portal</span>
        <h3>My Courses, progress, and dashboard</h3>
        <p>
          Sign in to track enrollments, continue lessons, and see how far you
          have come.
        </p>
      </div>
      <div className="learner-portal-banner__actions">
        <Link href="/my-courses" className="btn">
          {isAuthenticated ? "Open My Courses" : "Go to My Courses"}
        </Link>
        {!isAuthenticated && (
          <Link href="/auth/sign-in?redirect=%2Fmy-courses" className="btn btn-two">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}
