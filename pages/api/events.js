import {
  brandedEmailAttachments,
  brandedEmailHtml,
} from "@/lib/mailTemplate";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, location, background, email, skills, trainingMode, training } =
    req.body;

  if (!name || !location || !background || !email || !skills) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const trainingModeLabel =
    trainingMode === "offline" ? "Offline (In-person)" : "Online";
  const trainingName = training || "General Interest";

  const recipientEmail =
    process.env.ADMIN_EMAIL || process.env.GMAIL_USER || "ogaalsancon@gmail.com";

  const emailSubject = `Training Registration: ${trainingName} - ${name}`;
  const submittedOn = new Date().toLocaleString();
  const emailBody = `
New Training Registration from OgaalSan Website

Training: ${trainingName}

Participant Details:
Name: ${name}
Location: ${location}
Background / Education Level: ${background}
Email: ${email}
Preferred Training Mode: ${trainingModeLabel}

Skills:
${skills}

---
This email was sent from the OgaalSan Consultancy events & opportunities form.
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
            title: "New Training Registration",
            intro: "A visitor registered interest from the events form.",
            rows: [
              ["Training", trainingName],
              ["Name", name],
              ["Location", location],
              ["Background", background],
              ["Email", email],
              ["Training mode", trainingModeLabel],
              ["Submitted", submittedOn],
            ],
            messageLabel: "Skills",
            message: skills,
            footerNote:
              "This email was sent from the OgaalSan Consultancy events form.",
          }),
          attachments: brandedEmailAttachments(),
        });
        emailSent = true;
      }
    } catch (error) {
      console.log("Nodemailer not configured for events form.");
    }

    if (!emailSent) {
      console.log(
        "Email service not configured for events form. Please set up nodemailer or environment variables."
      );
      console.log("Email would be sent to:", recipientEmail);
      console.log("Subject:", emailSubject);
      console.log("Body:", emailBody);
    }

    return res.status(200).json({
      success: true,
      message: emailSent
        ? "Details submitted successfully! We'll contact you about upcoming events."
        : "Form received. Please configure email service for automatic sending.",
    });
  } catch (error) {
    console.error("Error processing events form:", error);
    return res.status(500).json({
      message: "Error processing request. Please try again later.",
    });
  }
}
