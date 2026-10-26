import Layout from "@/components/layout/Layout";
import ContentLoader from "@/components/common/ContentLoader";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import {
  fetchTrainingBySlug,
  submitTrainingRegistration,
} from "@/lib/trainings";

const LOCATION_OPTIONS = [
  "Mogadishu, Somalia",
  "Hargeisa, Somaliland",
  "Garowe, Puntland",
  "Kismayo, Somalia",
  "Baidoa, Somalia",
  "Nairobi, Kenya",
  "Addis Ababa, Ethiopia",
  "Djibouti",
  "Other",
];

const BACKGROUND_OPTIONS = [
  "High school / Secondary",
  "Diploma / Certificate",
  "Bachelor's degree",
  "Master's degree or higher",
  "Professional / Working",
  "Other",
];

const SKILL_OPTIONS = [
  "ICT / Computers",
  "Digital tools",
  "Languages",
  "Office / Admin",
  "Management",
  "None yet / Beginner",
];

function buildFormFromUser(user) {
  return {
    name: user?.name || "",
    location: "",
    locationOther: "",
    background: "",
    email: user?.email || "",
    phone: user?.whatsapp_phone || user?.phone || "",
    organization: "",
    skills: [],
    trainingMode: "online",
  };
}

export default function TrainingDetail({ training }) {
  const router = useRouter();
  const { user, isAuthenticated, loading: authLoading } = useAuth();
  const [formData, setFormData] = useState(buildFormFromUser(null));
  const [prefilled, setPrefilled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const returnPath = training?.slug
    ? `/training/${training.slug}`
    : "/training";

  useEffect(() => {
    if (user && !prefilled) {
      setFormData(buildFormFromUser(user));
      setPrefilled(true);
    }
  }, [user, prefilled]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillToggle = (skill) => {
    setFormData((prev) => {
      const selected = prev.skills.includes(skill)
        ? prev.skills.filter((item) => item !== skill)
        : [...prev.skills, skill];
      return { ...prev, skills: selected };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      router.push(
        `/auth/sign-in?redirect=${encodeURIComponent(returnPath)}`
      );
      return;
    }

    const locationValue =
      formData.location === "Other"
        ? formData.locationOther.trim()
        : formData.location;

    if (!locationValue) {
      setSubmitStatus({
        type: "error",
        message: "Please select or enter your location.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await submitTrainingRegistration({
        registration_type: "training",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        organization: formData.organization || null,
        location: locationValue,
        background: formData.background,
        skills: formData.skills.length ? formData.skills.join(", ") : null,
        training_mode: formData.trainingMode,
        training_slug: training?.slug || null,
        training_title: training?.title || "General Training",
      });

      setSubmitStatus({
        type: "success",
        trainingMode: formData.trainingMode,
        email: formData.email,
      });
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
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

  if (!training) {
    return (
      <Layout headTitle="Training & Workshops">
        <section className="ogaalsan-page">
          <div className="container text-center">
            <h3>Program not found</h3>
            <p>The program you are looking for is not available.</p>
            <Link href="/training" className="btn btn-three mt-20">
              Back to Training & Workshops
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout headTitle={training.title}>
      <section className="inner-contact-area ogaalsan-page">
        <div className="container">
          <nav className="ogaalsan-page-intro__crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/training">Training & Workshops</Link>
            <span aria-hidden="true">/</span>
            <span>{training.title}</span>
          </nav>
          <div className="row">
            <div className="col-lg-6">
              <div className="training-detail">
                <div className="training-detail__thumb">
                  <img
                    src={training.image}
                    alt={training.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "4px",
                    }}
                  />
                </div>
                <div className="training-card__meta mt-20">
                  <span>
                    <i className="far fa-clock" /> {training.duration}
                  </span>
                  <span>
                    <i className="fas fa-signal" /> {training.level}
                  </span>
                  <span>
                    <i className="fas fa-laptop" /> Online / Offline
                  </span>
                </div>
                <h3 className="title mt-20">{training.title}</h3>
                <p>{training.description}</p>
                <h5 className="mt-20">What you will learn</h5>
                <ul className="training-topics">
                  {(training.topics || []).map((topic) => (
                    <li key={topic}>
                      <i className="fas fa-check" /> {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="inner-contact-info">
                {submitStatus?.type === "success" ? (
                  <div className="training-register-success" role="status">
                    <div className="training-register-success__icon" aria-hidden="true">
                      <i className="fas fa-check-circle" />
                    </div>
                    <h2 className="title">Registration received</h2>
                    <p className="training-register-success__lead">
                      You’re registered for <strong>{training.title}</strong>.
                    </p>
                    <ul className="training-register-success__steps">
                      <li>
                        Confirmation sent to{" "}
                        <strong>{submitStatus.email || "your email"}</strong>.
                      </li>
                      <li>
                        Our team will follow up with next steps (schedule,
                        payment, or meeting link).
                      </li>
                      <li>
                        Attendance preference:{" "}
                        <strong>
                          {submitStatus.trainingMode === "offline"
                            ? "Offline (In-person)"
                            : "Online"}
                        </strong>
                      </li>
                    </ul>
                    <div className="training-register-success__actions">
                      <Link href="/training" className="btn btn-three">
                        Browse more workshops
                      </Link>
                      <Link href="/student-dashboard" className="btn">
                        Go to dashboard
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="title">Register for this workshop</h2>
                    <p>
                      Fill in your details and choose whether you want to attend
                      online or in person.
                    </p>

                    {authLoading ? (
                      <ContentLoader message="Checking your account..." />
                    ) : !isAuthenticated ? (
                      <div className="training-register-gate">
                        <p>
                          Sign in to register for this training or workshop.
                          Your account details will be filled in automatically.
                        </p>
                        <div className="training-register-gate__actions">
                          <Link
                            href={`/auth/sign-in?redirect=${encodeURIComponent(
                              returnPath
                            )}`}
                            className="btn btn-three"
                          >
                            Sign in to register
                          </Link>
                          <Link
                            href={`/auth/sign-up?redirect=${encodeURIComponent(
                              returnPath
                            )}`}
                            className="btn"
                          >
                            Create account
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <>
                        {submitStatus?.type === "error" ? (
                          <div className="training-register-error" role="alert">
                            {submitStatus.message}
                          </div>
                        ) : null}

                        <div className="contact-form contact-form-inner training-register-form">
                          <form onSubmit={handleSubmit}>
                            <div className="form-grp">
                              <label className="training-form-label" htmlFor="name">
                                Full name *
                              </label>
                              <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Your full name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div className="form-grp">
                              <label className="training-form-label" htmlFor="email">
                                Email *
                              </label>
                              <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div className="form-grp">
                              <label className="training-form-label" htmlFor="phone">
                                Phone number *
                              </label>
                              <input
                                id="phone"
                                type="tel"
                                name="phone"
                                placeholder="+252 ..."
                                value={formData.phone}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div className="form-grp">
                              <label
                                className="training-form-label"
                                htmlFor="organization"
                              >
                                Organization
                                <span className="training-form-optional">
                                  Optional
                                </span>
                              </label>
                              <input
                                id="organization"
                                type="text"
                                name="organization"
                                placeholder="Company or institution"
                                value={formData.organization}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-grp">
                              <label
                                className="training-form-label"
                                htmlFor="location"
                              >
                                Location *
                              </label>
                              <select
                                id="location"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                required
                              >
                                <option value="">Select location</option>
                                {LOCATION_OPTIONS.map((option) => (
                                  <option key={option} value={option}>
                                    {option}
                                  </option>
                                ))}
                              </select>
                            </div>
                            {formData.location === "Other" ? (
                              <div className="form-grp">
                                <label
                                  className="training-form-label"
                                  htmlFor="locationOther"
                                >
                                  Your city / country *
                                </label>
                                <input
                                  id="locationOther"
                                  type="text"
                                  name="locationOther"
                                  placeholder="Enter your city and country"
                                  value={formData.locationOther}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            ) : null}
                            <div className="form-grp">
                              <label
                                className="training-form-label"
                                htmlFor="background"
                              >
                                Background / education *
                              </label>
                              <select
                                id="background"
                                name="background"
                                value={formData.background}
                                onChange={handleChange}
                                required
                              >
                                <option value="">Select background</option>
                                {BACKGROUND_OPTIONS.map((option) => (
                                  <option key={option} value={option}>
                                    {option}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="form-grp">
                              <span className="training-form-label">
                                How would you like to attend? *
                              </span>
                              <div
                                className="training-attend-options"
                                role="radiogroup"
                                aria-label="Attendance mode"
                              >
                                <label
                                  className={`training-choice${
                                    formData.trainingMode === "online"
                                      ? " is-selected"
                                      : ""
                                  }`}
                                >
                                  <input
                                    type="radio"
                                    name="trainingMode"
                                    value="online"
                                    checked={formData.trainingMode === "online"}
                                    onChange={handleChange}
                                  />
                                  <i
                                    className="fas fa-laptop"
                                    aria-hidden="true"
                                  />
                                  <span>Online</span>
                                </label>
                                <label
                                  className={`training-choice${
                                    formData.trainingMode === "offline"
                                      ? " is-selected"
                                      : ""
                                  }`}
                                >
                                  <input
                                    type="radio"
                                    name="trainingMode"
                                    value="offline"
                                    checked={
                                      formData.trainingMode === "offline"
                                    }
                                    onChange={handleChange}
                                  />
                                  <i
                                    className="fas fa-map-marker-alt"
                                    aria-hidden="true"
                                  />
                                  <span>Offline (In-person)</span>
                                </label>
                              </div>
                            </div>
                            <div className="form-grp">
                              <span className="training-form-label">
                                Skills
                                <span className="training-form-optional">
                                  Optional
                                </span>
                              </span>
                              <div className="training-skill-options">
                                {SKILL_OPTIONS.map((skill) => {
                                  const selected =
                                    formData.skills.includes(skill);
                                  return (
                                    <label
                                      key={skill}
                                      className={`training-choice training-choice--chip${
                                        selected ? " is-selected" : ""
                                      }`}
                                    >
                                      <input
                                        type="checkbox"
                                        checked={selected}
                                        onChange={() =>
                                          handleSkillToggle(skill)
                                        }
                                      />
                                      <span>{skill}</span>
                                    </label>
                                  );
                                })}
                              </div>
                            </div>
                            <button
                              type="submit"
                              className="btn btn-three w-100"
                              disabled={isSubmitting}
                            >
                              {isSubmitting
                                ? "Submitting..."
                                : "Submit Registration"}
                            </button>
                          </form>
                        </div>
                      </>
                    )}
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

export async function getServerSideProps({ params }) {
  const training = await fetchTrainingBySlug(params.slug);
  return { props: { training: training || null } };
}
