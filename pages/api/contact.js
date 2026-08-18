import { fetchOrganization } from "@/lib/organization";
import {
  brandedEmailAttachments,
  brandedEmailHtml,
} from "@/lib/mailTemplate";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !phone || !subject || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const organization = await fetchOrganization();
  const recipientEmail =
    process.env.ADMIN_EMAIL || organization.email || "ogaalsancon@gmail.com";

  const emailSubject = `Contact Form: ${subject}`;
  const submittedOn = new Date().toLocaleString();
  const emailBody = `
New Contact Form Submission from OgaalSan Website

Contact Details:
Name: ${name}
Email: ${email}
Phone/WhatsApp: ${phone}
Subject: ${subject}

Message:
${message}

---
This email was sent from the OgaalSan Consultancy contact form.
Submitted on: ${submittedOn}
  `;

  try {
    let emailSent = false;

    try {
      const nodemailer = require("nodemailer");

      if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
          },
        });

        await transporter.sendMail({
          from: `"OgaalSan Consultancy" <${process.env.GMAIL_USER}>`,
          to: recipientEmail,
          replyTo: email,
          subject: emailSubject,
          text: emailBody,
          html: brandedEmailHtml({
            title: "New Contact Form Submission",
            intro: "A visitor sent a message from the OgaalSan website.",
            rows: [
              ["Name", name],
              ["Email", email],
              ["Phone / WhatsApp", phone],
              ["Subject", subject],
              ["Submitted", submittedOn],
            ],
            messageLabel: "Message",
            message,
            footerNote:
              "This email was sent from the OgaalSan Consultancy contact form.",
          }),
          attachments: brandedEmailAttachments(),
        });
        emailSent = true;
      }
    } catch (nodemailerError) {
      console.log("Nodemailer not configured, using alternative method");
    }

    if (!emailSent) {
      console.log(
        "Email service not configured. Please set up nodemailer or add environment variables."
      );
      console.log("Email would be sent to:", recipientEmail);
      console.log("Subject:", emailSubject);
      console.log("Body:", emailBody);
    }

    return res.status(200).json({
      success: true,
      message: emailSent
        ? "Message sent successfully! We'll get back to you soon."
        : "Form received. Please configure email service for automatic sending.",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return res.status(500).json({
      message: "Error processing request. Please try again later.",
    });
  }
}
