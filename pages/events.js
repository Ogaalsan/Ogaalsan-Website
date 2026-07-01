import Layout from "@/components/layout/Layout"
import Image from "next/image"
import { useState } from "react"

export default function Events() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    background: "",
    email: "",
    skills: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your event interest has been received.",
        })
        setFormData({
          name: "",
          location: "",
          background: "",
          email: "",
          skills: "",
        })
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to submit. Please try again.",
        })
      }
    } catch (error) {
      console.error("Error submitting events form:", error)
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Events & Opportunities">
        <div>
          <section className="inner-contact-area pt-120 pb-120">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="inner-contact-img">
                    <Image
                      src="/assets/img/ogalsan/creative.jpg"
                      alt="OgaalSan Events & Opportunities"
                      width={600}
                      height={800}
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="inner-contact-info">
                    <h2 className="title">Events, Trainings & Opportunities</h2>
                    <p>
                      Share your details to join our upcoming ICT trainings, digital innovation
                      events, and professional development opportunities.
                    </p>
                    {submitStatus && (
                      <div
                        style={{
                          padding: "15px",
                          marginBottom: "20px",
                          borderRadius: "5px",
                          backgroundColor:
                            submitStatus.type === "success" ? "#d4edda" : "#f8d7da",
                          color: submitStatus.type === "success" ? "#155724" : "#721c24",
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
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-grp">
                              <input
                                type="text"
                                name="name"
                                placeholder="Name *"
                                value={formData.name}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
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
                          </div>
                          <div className="col-md-12">
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
                          </div>
                          <div className="col-md-12">
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
                          </div>
                          <div className="col-md-12">
                            <div className="form-grp">
                              <textarea
                                name="skills"
                                placeholder="Skills (ICT, digital, languages, etc.) *"
                                value={formData.skills}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-three w-100"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Submitting..." : "Submit Details"}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}


