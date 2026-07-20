import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { fetchTrainingBySlug, submitTrainingRegistration } from "@/lib/trainings";

export default function TrainingDetail({ training }) {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    background: "",
    email: "",
    skills: "",
    trainingMode: "online",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await submitTrainingRegistration({
        registration_type: "training",
        name: formData.name,
        email: formData.email,
        location: formData.location,
        background: formData.background,
        skills: formData.skills,
        training_mode: formData.trainingMode,
        training_slug: training?.slug || null,
        training_title: training?.title || "General Training",
      });

      setSubmitStatus({
        type: "success",
        message:
          "Thank you! Your training registration has been received. Check your email for confirmation.",
      });
      setFormData({
        name: "",
        location: "",
        background: "",
        email: "",
        skills: "",
        trainingMode: "online",
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

  if (!training) {
    return (
      <Layout breadcrumbTitle="Training">
        <section className="blog-area pt-120 pb-120">
          <div className="container text-center">
            <h3>Training not found</h3>
            <p>The training you are looking for is not available.</p>
            <Link href="/training" className="btn btn-three mt-20">
              Back to Trainings
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout breadcrumbTitle={training.title}>
      <section className="inner-contact-area pt-120 pb-120">
        <div className="container">
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
                      borderRadius: "12px",
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
                <h2 className="title">Register for this training</h2>
                <p>
                  Fill in your details and choose whether you want to attend
                  online or offline.
                </p>

                {submitStatus && (
                  <div
                    style={{
                      padding: "15px",
                      marginBottom: "20px",
                      borderRadius: "5px",
                      backgroundColor:
                        submitStatus.type === "success" ? "#d4edda" : "#f8d7da",
                      color:
                        submitStatus.type === "success" ? "#155724" : "#721c24",
                      border: `1px solid ${
                        submitStatus.type === "success" ? "#c3e6cb" : "#f5c6cb"
                      }`,
                    }}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <div className="contact-form contact-form-inner">
                  <form onSubmit={handleSubmit}>
                    <div className="form-grp">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full name *"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-grp">
                      <input
                        type="text"
                        name="location"
                        placeholder="Location (Country & City) *"
                        value={formData.location}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-grp">
                      <input
                        type="text"
                        name="background"
                        placeholder="Background / Education Level *"
                        value={formData.background}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-grp">
                      <input
                        type="email"
                        name="email"
                        placeholder="E-mail *"
                        value={formData.email}
                        onChange={handleChange}
                        required
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
                        How would you like to attend? *
                      </label>
                      <div
                        style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}
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
                            value="online"
                            checked={formData.trainingMode === "online"}
                            onChange={handleChange}
                          />
                          Online
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
                            value="offline"
                            checked={formData.trainingMode === "offline"}
                            onChange={handleChange}
                          />
                          Offline (In-person)
                        </label>
                      </div>
                    </div>
                    <div className="form-grp">
                      <textarea
                        name="skills"
                        placeholder="Skills (ICT, digital, languages, etc.) *"
                        value={formData.skills}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-three w-100"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Registration"}
                    </button>
                  </form>
                </div>
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
