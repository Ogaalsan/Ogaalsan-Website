import Layout from "@/components/layout/Layout";
import ContentLoader from "@/components/common/ContentLoader";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useOrganization } from "@/context/OrganizationContext";
import { fetchPublishedCourse } from "@/lib/courses";
import { useClientFetch } from "@/hooks/useClientFetch";

export default function CourseDetails() {
  const router = useRouter();
  const identifier = router.query.id;
  const ready = router.isReady && Boolean(identifier);
  const { whatsappUrl: buildWhatsAppUrl } = useOrganization();

  const { data: course, loading } = useClientFetch(
    () => fetchPublishedCourse(identifier),
    [identifier],
    { enabled: ready, initialData: null }
  );

  const whatsappUrl = course
    ? buildWhatsAppUrl(`Hello! I have a question about the course: ${course.title}`)
    : buildWhatsAppUrl();

  if (!ready || loading) {
    return (
      <Layout breadcrumbTitle="Course Details">
        <ContentLoader message="Loading course..." />
      </Layout>
    );
  }

  return (
    <Layout breadcrumbTitle="Course Details">
      {course ? (
        <section className="course-details-area pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="course-details-content">
                  <span
                    style={{
                      color: "#3FA9F5",
                      fontWeight: "600",
                      fontSize: "14px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      marginBottom: "15px",
                      display: "inline-block",
                    }}
                  >
                    {course.category}
                  </span>
                  <h2
                    className="title mb-30"
                    style={{
                      fontSize: "36px",
                      color: "#22428F",
                      fontWeight: "700",
                    }}
                  >
                    {course.title}
                  </h2>

                  <div
                    className="course-image mb-40"
                    style={{ borderRadius: "10px", overflow: "hidden" }}
                  >
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={800}
                      height={400}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <h3 className="mb-20" style={{ color: "#22428F" }}>
                    Course Overview
                  </h3>
                  <p
                    style={{
                      color: "#334770",
                      lineHeight: "1.8",
                      fontSize: "16px",
                      marginBottom: "30px",
                    }}
                  >
                    {course.description}
                  </p>

                  <h3 className="mb-20" style={{ color: "#22428F" }}>
                    What You Will Learn
                  </h3>
                  <ul style={{ marginBottom: "30px", paddingLeft: "20px" }}>
                    {course.syllabus?.map((item, index) => (
                      <li
                        key={index}
                        style={{
                          color: "#334770",
                          lineHeight: "1.8",
                          fontSize: "16px",
                          marginBottom: "10px",
                          listStyleType: "disc",
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-lg-4">
                <div
                  className="course-sidebar"
                  style={{
                    backgroundColor: "#f9fbff",
                    padding: "30px",
                    borderRadius: "10px",
                    border: "1px solid #eef2f6",
                    boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <h4
                    className="mb-30"
                    style={{
                      color: "#22428F",
                      borderBottom: "2px solid #eef2f6",
                      paddingBottom: "15px",
                    }}
                  >
                    Course Information
                  </h4>

                  <div className="info-item mb-20">
                    <strong
                      style={{
                        color: "#22428F",
                        display: "block",
                        marginBottom: "5px",
                      }}
                    >
                      Instructor:
                    </strong>
                    <span style={{ color: "#334770" }}>{course.instructor}</span>
                  </div>

                  <div className="info-item mb-20">
                    <strong
                      style={{
                        color: "#22428F",
                        display: "block",
                        marginBottom: "5px",
                      }}
                    >
                      Duration:
                    </strong>
                    <span style={{ color: "#334770" }}>{course.duration}</span>
                  </div>

                  <div className="info-item mb-20">
                    <strong
                      style={{
                        color: "#22428F",
                        display: "block",
                        marginBottom: "5px",
                      }}
                    >
                      Level:
                    </strong>
                    <span style={{ color: "#334770" }}>{course.level}</span>
                  </div>

                  <div className="info-item mb-20">
                    <strong
                      style={{
                        color: "#22428F",
                        display: "block",
                        marginBottom: "5px",
                      }}
                    >
                      Lessons:
                    </strong>
                    <span style={{ color: "#334770" }}>
                      {course.lessonCount} lessons
                    </span>
                  </div>

                  <div className="info-item mb-30">
                    <strong
                      style={{
                        color: "#22428F",
                        display: "block",
                        marginBottom: "5px",
                      }}
                    >
                      Where to Watch / Take:
                    </strong>
                    <span style={{ color: "#334770" }}>
                      {course.whereToWatch}
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "14px",
                      marginTop: "8px",
                    }}
                  >
                    <Link
                      href={`/course/${course.slug || course.id}/register`}
                      style={{
                        backgroundColor: "#3FA9F5",
                        color: "#fff",
                        padding: "14px 18px",
                        borderRadius: "8px",
                        fontWeight: "600",
                        fontSize: "15px",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        width: "100%",
                        lineHeight: 1.3,
                        boxShadow: "0 4px 12px rgba(63, 169, 245, 0.25)",
                      }}
                    >
                      <i className="fas fa-user-plus" aria-hidden="true" />
                      Register for Course
                    </Link>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: "#25D366",
                        color: "#fff",
                        padding: "14px 18px",
                        borderRadius: "8px",
                        fontWeight: "600",
                        fontSize: "15px",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        width: "100%",
                        lineHeight: 1.3,
                        boxShadow: "0 4px 12px rgba(37, 211, 102, 0.25)",
                      }}
                    >
                      <i
                        className="fab fa-whatsapp"
                        style={{ fontSize: "18px" }}
                        aria-hidden="true"
                      />
                      Chat on WhatsApp
                    </a>

                    <p
                      style={{
                        fontSize: "12px",
                        color: "#667085",
                        textAlign: "center",
                        margin: "0",
                        lineHeight: 1.5,
                      }}
                    >
                      For questions only — this does not replace registration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="pt-120 pb-120 text-center">
          <div className="container">
            <h2>Course not found.</h2>
            <Link
              href="/courses"
              className="btn mt-30"
              style={{
                backgroundColor: "#3FA9F5",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "5px",
              }}
            >
              Back to Courses
            </Link>
          </div>
        </section>
      )}
    </Layout>
  );
}
