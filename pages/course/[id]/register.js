import Layout from "@/components/layout/Layout";
import ContentLoader from "@/components/common/ContentLoader";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useOrganization } from "@/context/OrganizationContext";
import { fetchPublishedCourse } from "@/lib/courses";
import { submitTrainingRegistration } from "@/lib/trainings";
import { useClientFetch } from "@/hooks/useClientFetch";

function buildFormFromUser(user) {
  return {
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.whatsapp_phone || user?.phone || "",
    organization: "",
    trainingMode: "online",
    notes: "",
  };
}

export default function CourseRegister() {
  const router = useRouter();
  const identifier = router.query.id;
  const ready = router.isReady && Boolean(identifier);
  const { user, isAuthenticated, loading: authLoading } = useAuth();
  const { whatsappUrl: buildWhatsAppUrl } = useOrganization();

  const { data: course, loading } = useClientFetch(
    () => fetchPublishedCourse(identifier),
    [identifier],
    { enabled: ready && isAuthenticated, initialData: null }
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    trainingMode: "online",
    notes: "",
  });
  const [prefilled, setPrefilled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const returnPath =
    ready && identifier
      ? `/course/${identifier}/register`
      : "/courses";

  useEffect(() => {
    if (authLoading) return;
    if (!isAuthenticated) {
      router.replace(
        `/auth/sign-in?redirect=${encodeURIComponent(returnPath)}`
      );
    }
  }, [authLoading, isAuthenticated, returnPath, router]);

  useEffect(() => {
    if (user && !prefilled) {
      setFormData(buildFormFromUser(user));
      setPrefilled(true);
    }
  }, [user, prefilled]);

  const whatsappUrl = course
    ? buildWhatsAppUrl(`Hello! I have a question about the course: ${course.title}`)
    : buildWhatsAppUrl();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!course) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await submitTrainingRegistration({
        registration_type: "course",
        course_id: course.id,
        training_slug: course.slug || String(course.id),
        training_title: course.title,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        organization: formData.organization || null,
        notes: formData.notes || null,
        training_mode: formData.trainingMode,
      });

      setSubmitStatus({
        type: "success",
        message:
          "Your registration has been received. Our team will contact you with the next steps (payment instructions, venue details, or the Zoom meeting link).",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error.message || "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (authLoading || !isAuthenticated) {
    return (
      <Layout breadcrumbTitle="Course Registration">
        <ContentLoader message="Checking your account..." />
      </Layout>
    );
  }

  if (!ready || loading) {
    return (
      <Layout breadcrumbTitle="Course Registration">
        <ContentLoader message="Loading course..." />
      </Layout>
    );
  }

  if (!course) {
    return (
      <Layout breadcrumbTitle="Course Registration">
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
      </Layout>
    );
  }

  return (
    <Layout breadcrumbTitle="Course Registration">
      <section className="inner-contact-area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className="course-register-card"
                style={{
                  backgroundColor: "#f9fbff",
                  padding: "36px",
                  borderRadius: "12px",
                  border: "1px solid #eef2f6",
                  boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.05)",
                }}
              >
                <Link
                  href={`/course/${course.slug || course.id}`}
                  style={{
                    color: "#3FA9F5",
                    fontWeight: 600,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "20px",
                  }}
                >
                  <i className="fas fa-arrow-left" aria-hidden="true" />
                  Back to course details
                </Link>

                <h2
                  className="title mb-10"
                  style={{ color: "#22428F", fontSize: "30px" }}
                >
                  Register for Course
                </h2>
                <p style={{ color: "#334770", marginBottom: "8px" }}>
                  You are registering for:
                </p>
                <h4
                  style={{
                    color: "#22428F",
                    marginBottom: "12px",
                    fontWeight: 700,
                  }}
                >
                  {course.title}
                </h4>
                <p
                  style={{
                    color: "#667085",
                    fontSize: "14px",
                    marginBottom: "24px",
                  }}
                >
                  Your account details are filled in below. You can edit them
                  before submitting, and complete any remaining fields.
                </p>

                {submitStatus && (
                  <div
                    style={{
                      padding: "15px",
                      marginBottom: "20px",
                      borderRadius: "8px",
                      backgroundColor:
                        submitStatus.type === "success"
                          ? "#d4edda"
                          : "#f8d7da",
                      color:
                        submitStatus.type === "success"
                          ? "#155724"
                          : "#721c24",
                      border: `1px solid ${
                        submitStatus.type === "success"
                          ? "#c3e6cb"
                          : "#f5c6cb"
                      }`,
                    }}
                  >
                    {submitStatus.message}
                  </div>
                )}

                {submitStatus?.type === "success" ? (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "12px",
                      marginTop: "10px",
                    }}
                  >
                    <Link
                      href={`/course/${course.slug || course.id}`}
                      style={{
                        backgroundColor: "#3FA9F5",
                        color: "#fff",
                        padding: "12px 20px",
                        borderRadius: "8px",
                        fontWeight: 600,
                        textDecoration: "none",
                      }}
                    >
                      Back to Course
                    </Link>
                    <Link
                      href="/courses"
                      style={{
                        backgroundColor: "transparent",
                        color: "#22428F",
                        padding: "12px 20px",
                        borderRadius: "8px",
                        fontWeight: 600,
                        textDecoration: "none",
                        border: "1px solid #22428F",
                      }}
                    >
                      Browse Courses
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="contact-form contact-form-inner">
                      <form onSubmit={handleSubmit}>
                        <div className="form-grp">
                          <input
                            type="text"
                            name="name"
                            placeholder="Full Name *"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-grp">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email *"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-grp">
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number *"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-grp">
                          <input
                            type="text"
                            name="organization"
                            placeholder="Organization (optional)"
                            value={formData.organization}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-grp">
                          <label
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontWeight: 600,
                              color: "#22428F",
                            }}
                          >
                            Attendance Type *
                          </label>
                          <div
                            style={{
                              display: "flex",
                              gap: "24px",
                              flexWrap: "wrap",
                            }}
                          >
                            <label
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                cursor: "pointer",
                                fontWeight: 500,
                              }}
                            >
                              <input
                                type="radio"
                                name="trainingMode"
                                value="offline"
                                checked={formData.trainingMode === "offline"}
                                onChange={handleChange}
                              />
                              In Person
                            </label>
                            <label
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                cursor: "pointer",
                                fontWeight: 500,
                              }}
                            >
                              <input
                                type="radio"
                                name="trainingMode"
                                value="online"
                                checked={formData.trainingMode === "online"}
                                onChange={handleChange}
                              />
                              Online via Zoom
                            </label>
                          </div>
                        </div>
                        <div className="form-grp">
                          <textarea
                            name="notes"
                            placeholder="Additional Notes (optional)"
                            value={formData.notes}
                            onChange={handleChange}
                            rows={4}
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          style={{
                            backgroundColor: "#3FA9F5",
                            color: "#fff",
                            padding: "14px 24px",
                            borderRadius: "8px",
                            fontWeight: 600,
                            border: "none",
                            cursor: isSubmitting ? "not-allowed" : "pointer",
                            minWidth: "200px",
                          }}
                        >
                          {isSubmitting
                            ? "Submitting..."
                            : "Submit Registration"}
                        </button>
                      </form>
                    </div>

                    <div
                      style={{
                        marginTop: "28px",
                        paddingTop: "20px",
                        borderTop: "1px solid #eef2f6",
                        textAlign: "center",
                      }}
                    >
                      <p
                        style={{
                          color: "#667085",
                          fontSize: "14px",
                          marginBottom: "12px",
                        }}
                      >
                        Have a question before registering?
                      </p>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          backgroundColor: "#25D366",
                          color: "#fff",
                          padding: "12px 20px",
                          borderRadius: "8px",
                          fontWeight: 600,
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <i className="fab fa-whatsapp" aria-hidden="true" />
                        Chat on WhatsApp
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
