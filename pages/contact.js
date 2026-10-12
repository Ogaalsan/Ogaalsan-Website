import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { useOrganization } from "@/context/OrganizationContext";

export default function Contact() {
  const { email, phoneLabel, phoneHref, fullAddress, whatsappUrl } =
    useOrganization();
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
    <Layout>
      <section className="ogaalsan-contact">
        <div className="container">
          <nav className="ogaalsan-contact__crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Contact</span>
          </nav>

          <div className="ogaalsan-contact__layout">
            <aside className="ogaalsan-contact__aside">
              <span className="ogaalsan-contact__eyebrow">Contact</span>
              <h1 className="ogaalsan-contact__title">Get in touch</h1>
              <p className="ogaalsan-contact__lead">
                Tell us about your ICT, capacity building, or business
                development needs — we&apos;ll respond as soon as we can.
              </p>

              <ul className="ogaalsan-contact__list">
                <li>
                  <strong>Address</strong>
                  <span>{fullAddress}</span>
                </li>
                <li>
                  <strong>Email</strong>
                  <a href={`mailto:${email}`}>{email}</a>
                </li>
                <li>
                  <strong>Phone</strong>
                  <a href={phoneHref}>{phoneLabel}</a>
                </li>
              </ul>

              <a
                href={whatsappUrl(
                  "Hello! I would like to know more about OgaalSan services."
                )}
                className="ogaalsan-contact__whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </aside>

            <div className="ogaalsan-contact__form-wrap">
              <h2 className="ogaalsan-contact__form-title">Send a message</h2>
              {submitStatus ? (
                <div
                  className={`auth-alert ${
                    submitStatus.type === "success"
                      ? "auth-alert--success"
                      : "auth-alert--error"
                  }`}
                >
                  {submitStatus.message}
                </div>
              ) : null}

              <form className="ogaalsan-contact__form" onSubmit={handleSubmit}>
                <div className="ogaalsan-contact__grid">
                  <div className="ogaalsan-contact__field">
                    <label htmlFor="contact-name">Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="ogaalsan-contact__field">
                    <label htmlFor="contact-email">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="ogaalsan-contact__field">
                    <label htmlFor="contact-phone">Phone / WhatsApp</label>
                    <input
                      id="contact-phone"
                      type="text"
                      name="phone"
                      placeholder="+252 ..."
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="ogaalsan-contact__field">
                    <label htmlFor="contact-subject">Subject</label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      placeholder="What is this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="ogaalsan-contact__field">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  />
                </div>
                <button
                  type="submit"
                  className="ogaalsan-btn ogaalsan-btn--primary ogaalsan-contact__submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
