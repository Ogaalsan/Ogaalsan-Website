import Layout from "@/components/layout/Layout";
import ContentLoader from "@/components/common/ContentLoader";
import CourseCurriculum from "@/components/courses/CourseCurriculum";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useOrganization } from "@/context/OrganizationContext";
import { fetchPublishedCourse } from "@/lib/courses";
import { fetchMyCourses } from "@/lib/learner";
import { useClientFetch } from "@/hooks/useClientFetch";

function formatPrice(course) {
  const price = Number(course?.price || 0);
  const discount = Number(course?.discountPrice);
  const hasDiscount =
    Number.isFinite(discount) && discount > 0 && discount < price;

  if (price <= 0) {
    return { label: "Free", current: null, old: null, isFree: true };
  }

  return {
    label: null,
    current: (hasDiscount ? discount : price).toFixed(2),
    old: hasDiscount ? price.toFixed(2) : null,
    isFree: false,
  };
}

export default function CourseDetails() {
  const router = useRouter();
  const identifier = router.query.id;
  const ready = router.isReady && Boolean(identifier);
  const { isAuthenticated, loading: authLoading } = useAuth();
  const { whatsappUrl: buildWhatsAppUrl } = useOrganization();
  const [enrollment, setEnrollment] = useState(null);
  const [activeTab, setActiveTab] = useState("curriculum");

  const { data: course, loading } = useClientFetch(
    () => fetchPublishedCourse(identifier),
    [identifier],
    { enabled: ready, initialData: null }
  );

  useEffect(() => {
    if (!isAuthenticated || authLoading || !course?.id) {
      setEnrollment(null);
      return undefined;
    }

    let active = true;
    fetchMyCourses()
      .then((result) => {
        if (!active) return;
        const match = (result.courses || []).find(
          (item) =>
            item.course?.id === course.id ||
            item.course?.slug === course.slug ||
            String(item.course?.id) === String(identifier) ||
            item.course?.slug === identifier
        );
        setEnrollment(match || null);
      })
      .catch(() => {
        if (active) setEnrollment(null);
      });

    return () => {
      active = false;
    };
  }, [isAuthenticated, authLoading, course?.id, course?.slug, identifier]);

  const whatsappUrl = course
    ? buildWhatsAppUrl(
        `Hello! I have a question about the course: ${course.title}`
      )
    : buildWhatsAppUrl();

  const pricing = useMemo(() => formatPrice(course), [course]);
  const courseKey = course?.slug || course?.id;
  const curriculumSummary =
    course?.format === "online"
      ? `${course.sectionCount || 0} sections · ${course.lessonCount || 0} lessons`
      : `${course?.sectionCount || course?.lessonCount || 0} topics`;

  if (!ready || loading) {
    return (
      <Layout breadcrumbTitle="Course Details">
        <ContentLoader message="Loading course..." />
      </Layout>
    );
  }

  if (!course) {
    return (
      <Layout breadcrumbTitle="Course Details">
        <section className="course-detail pt-100 pb-100">
          <div className="container text-center">
            <h2 className="course-detail__empty-title">Course not found</h2>
            <p className="course-detail__empty-text">
              This course may be unpublished or the link is incorrect.
            </p>
            <Link href="/courses" className="ogaalsan-btn ogaalsan-btn--primary">
              Back to Courses
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  let primaryCta = (
    <Link
      href={`/course/${courseKey}/register`}
      className="course-detail__cta course-detail__cta--primary"
    >
      Enroll Now
    </Link>
  );

  if (enrollment?.canAccess && course.format === "online") {
    primaryCta = (
      <Link
        href={`/course/watch/${courseKey}`}
        className="course-detail__cta course-detail__cta--primary"
      >
        <i className="fas fa-play" aria-hidden="true" />
        Continue Learning
      </Link>
    );
  } else if (enrollment?.canAccess) {
    primaryCta = (
      <Link
        href="/my-courses"
        className="course-detail__cta course-detail__cta--primary"
      >
        <i className="fas fa-check-circle" aria-hidden="true" />
        Go to My Courses
      </Link>
    );
  } else if (enrollment?.status === "pending") {
    primaryCta = (
      <Link
        href="/my-courses"
        className="course-detail__cta course-detail__cta--pending"
      >
        <i className="fas fa-clock" aria-hidden="true" />
        Registration Pending
      </Link>
    );
  }

  return (
    <Layout breadcrumbTitle="Course Details">
      <section className="course-detail">
        <div className="container">
          <div className="course-detail__grid">
            <div className="course-detail__main">
              <div className="course-detail__intro">
                <span className="course-detail__category">
                  {course.category}
                  {course.level ? ` · ${course.level}` : ""}
                </span>
                <h1 className="course-detail__title">{course.title}</h1>
                {course.description ? (
                  <p className="course-detail__lead">
                    {course.description.length > 220
                      ? `${course.description.slice(0, 220).trim()}…`
                      : course.description}
                  </p>
                ) : null}

                <div className="course-detail__meta">
                  <span>
                    <i className="far fa-clock" aria-hidden="true" />
                    {course.duration || "Self-paced"}
                  </span>
                  <span>
                    <i className="fas fa-layer-group" aria-hidden="true" />
                    {curriculumSummary}
                  </span>
                  <span>
                    <i className="fas fa-laptop" aria-hidden="true" />
                    {course.format === "online" ? "Online" : "In-person"}
                  </span>
                </div>

                <div className="course-detail__instructor">
                  <span className="course-detail__instructor-avatar" aria-hidden="true">
                    {(course.instructor || "O")
                      .split(" ")
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join("")
                      .toUpperCase()}
                  </span>
                  <div>
                    <span className="course-detail__instructor-label">
                      Instructor
                    </span>
                    <strong className="course-detail__instructor-name">
                      {course.instructor}
                    </strong>
                  </div>
                </div>
              </div>

              <div className="course-detail__tabs" role="tablist">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "curriculum"}
                  className={`course-detail__tab${
                    activeTab === "curriculum" ? " is-active" : ""
                  }`}
                  onClick={() => setActiveTab("curriculum")}
                >
                  Curriculum
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "overview"}
                  className={`course-detail__tab${
                    activeTab === "overview" ? " is-active" : ""
                  }`}
                  onClick={() => setActiveTab("overview")}
                >
                  Overview
                </button>
              </div>

              <div className="course-detail__panel">
                {activeTab === "curriculum" ? (
                  course.sections?.length > 0 ? (
                    <CourseCurriculum
                      course={course}
                      canTakeQuizzes={Boolean(enrollment?.canAccess)}
                    />
                  ) : (
                    <div className="course-detail__empty-panel">
                      <h3>Curriculum coming soon</h3>
                      <p>
                        Sections and lessons will appear here once they are
                        added in the admin.
                      </p>
                    </div>
                  )
                ) : (
                  <div className="course-detail__overview">
                    <h3>About this course</h3>
                    <p>{course.description || "No overview available yet."}</p>
                    <div className="course-detail__overview-grid">
                      <div>
                        <h4>Format</h4>
                        <p>
                          {course.format === "online"
                            ? "Online via the Ogaalsan learning portal"
                            : "In-person / instructor-led"}
                        </p>
                      </div>
                      <div>
                        <h4>
                          {course.format === "online"
                            ? "Where to learn"
                            : "How to attend"}
                        </h4>
                        <p>{course.whereToWatch}</p>
                      </div>
                      <div>
                        <h4>Level</h4>
                        <p>{course.level || "All levels"}</p>
                      </div>
                      <div>
                        <h4>Duration</h4>
                        <p>{course.duration || "Self-paced"}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <aside className="course-detail__aside">
              <div className="course-detail__card">
                <div className="course-detail__media">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={640}
                    height={360}
                    className="course-detail__media-img"
                    priority
                  />
                </div>

                <div className="course-detail__card-body">
                  <div className="course-detail__price">
                    {pricing.isFree ? (
                      <span className="course-detail__price-current">Free</span>
                    ) : (
                      <>
                        <span className="course-detail__price-current">
                          ${pricing.current}
                        </span>
                        {pricing.old ? (
                          <span className="course-detail__price-old">
                            ${pricing.old}
                          </span>
                        ) : null}
                      </>
                    )}
                  </div>

                  {primaryCta}

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="course-detail__cta course-detail__cta--whatsapp"
                  >
                    <i className="fab fa-whatsapp" aria-hidden="true" />
                    Chat on WhatsApp
                  </a>
                  <p className="course-detail__card-note">
                    WhatsApp is for questions only — it does not enroll you.
                  </p>

                  <div className="course-detail__includes">
                    <h4>This course includes</h4>
                    <ul>
                      <li>
                        <i className="far fa-clock" aria-hidden="true" />
                        {course.duration || "Self-paced learning"}
                      </li>
                      <li>
                        <i className="fas fa-book-open" aria-hidden="true" />
                        {curriculumSummary}
                      </li>
                      <li>
                        <i className="fas fa-laptop" aria-hidden="true" />
                        {course.format === "online"
                          ? "Full portal access after enrollment"
                          : "Instructor-led sessions"}
                      </li>
                      <li>
                        <i className="fas fa-user-tie" aria-hidden="true" />
                        Taught by {course.instructor}
                      </li>
                      {(course.finalQuizzes || []).length > 0 ? (
                        <li>
                          <i className="fas fa-clipboard-check" aria-hidden="true" />
                          Final quiz assessment
                        </li>
                      ) : null}
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
}
