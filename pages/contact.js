import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useOrganization } from "@/context/OrganizationContext";

export default function Contact() {
  const { email, phoneLabel, phoneHref, fullAddress } = useOrganization();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! We'll get back to you soon.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <Layout breadcrumbTitle="Contact Us">
        <div>
          <section className="inner-contact-area pt-120 pb-120">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="inner-contact-img">
                    <Image
                      src="/assets/img/ogalsan/contact.png"
                      alt="Contact OgaalSan Consultancy"
                      width={600}
                      height={600}
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-40">
                    <ul className="list-wrap">
                      <li className="mb-3">
                        <strong>Address:</strong> {fullAddress}
                      </li>
                      <li className="mb-3">
                        <strong>Email:</strong>{" "}
                        <Link href={`mailto:${email}`}>{email}</Link>
                      </li>
                      <li className="mb-3">
                        <strong>Phone:</strong>{" "}
                        <Link href={phoneHref}>{phoneLabel}</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="inner-contact-info">
                    <h2 className="title">Get in Touch With OgaalSan</h2>
                    <p>
                      Share your Business Development, ICT, Training,
                      Research, or Legal Advisory needs and our team will
                      get back to you as soon as possible.
                    </p>
                    {submitStatus && (
                      <div
                        style={{
                          padding: "15px",
                          marginBottom: "20px",
                          borderRadius: "5px",
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
                    <div className="contact-form contact-form-inner">
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-md-6">
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
                          <div className="col-md-6">
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
                          <div className="col-md-6">
                            <div className="form-grp">
                              <input
                                type="text"
                                name="phone"
                                placeholder="Phone / WhatsApp *"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-grp">
                              <input
                                type="text"
                                name="subject"
                                placeholder="Subject *"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-grp">
                              <textarea
                                name="message"
                                placeholder="How can we help you? *"
                                value={formData.message}
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
                          {isSubmitting ? "Sending..." : "Send Message"}
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
  );
}
