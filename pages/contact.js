import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useOrganization } from "@/context/OrganizationContext";

export default function Contact() {
  const {
    email,
    phoneLabel,
    phoneHref,
    fullAddress,
    whatsappUrl,
  } = useOrganization();
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
    <>
      <Layout breadcrumbTitle="Contact Us">
        <section className="ogaalsan-contact inner-contact-area pt-120 pb-120">
          <div className="container">
            <div className="row ogaalsan-contact__row">
              <div className="col-lg-5">
                <aside className="ogaalsan-contact__aside">
                  <div className="ogaalsan-contact__logo-wrap">
                    <Image
                      src="/assets/img/logo/logo-ogalsan.png"
                      alt="OgaalSan Consultancy"
                      width={220}
                      height={72}
                      className="ogaalsan-contact__logo"
                    />
                  </div>
                  <p className="ogaalsan-contact__tagline">
                    ICT &amp; Business Consultancy
                  </p>
                  <div className="ogaalsan-contact__visual">
                    <Image
                      src="/assets/img/ogalsan/contact.png"
                      alt="Contact OgaalSan Consultancy"
                      width={433}
                      height={577}
                      className="ogaalsan-contact__cubes"
                    />
                  </div>
                  <ul className="ogaalsan-contact__details">
                    <li>
                      <span className="ogaalsan-contact__icon" aria-hidden="true">
                        <i className="flaticon-location" />
                      </span>
                      <div>
                        <span className="ogaalsan-contact__label">Address</span>
                        <span>{fullAddress}</span>
                      </div>
                    </li>
                    <li>
                      <span className="ogaalsan-contact__icon" aria-hidden="true">
                        <i className="flaticon-mail" />
                      </span>
                      <div>
                        <span className="ogaalsan-contact__label">Email</span>
                        <Link href={`mailto:${email}`}>{email}</Link>
                      </div>
                    </li>
                    <li>
                      <span className="ogaalsan-contact__icon" aria-hidden="true">
                        <i className="flaticon-phone-call" />
                      </span>
                      <div>
                        <span className="ogaalsan-contact__label">Phone</span>
                        <Link href={phoneHref}>{phoneLabel}</Link>
                      </div>
                    </li>
                  </ul>
                  <Link
                    href={whatsappUrl(
                      "Hello! I would like to know more about OgaalSan services."
                    )}
                    className="ogaalsan-contact__whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </Link>
                </aside>
              </div>
              <div className="col-lg-7">
                <div className="inner-contact-info ogaalsan-contact__form-card">
                  <h2 className="title">Get in Touch With OgaalSan</h2>
                  <p>
                    Share your ICT, Training, or Business Development needs and
                    our team will get back to you as soon as possible.
                  </p>
                  {submitStatus && (
                    <div
                      className={`auth-alert ${
                        submitStatus.type === "success"
                          ? "auth-alert--success"
                          : "auth-alert--error"
                      }`}
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
                        className="btn btn-three"
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
      </Layout>
    </>
  );
}
