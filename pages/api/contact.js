import { fetchOrganization } from "@/lib/organization";

// API route to handle contact form submissions
// To enable email sending, you'll need to install nodemailer:
// npm install nodemailer
//
// For Gmail, you'll need to:
// 1. Enable 2-factor authentication
// 2. Create an App Password: https://myaccount.google.com/apppasswords
// 3. Add environment variables to .env.local:
//    GMAIL_USER=your-email@gmail.com
//    GMAIL_APP_PASSWORD=your-app-password

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !phone || !subject || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const organization = await fetchOrganization();
  const recipientEmail = organization.email || "ogaalsancon@gmail.com";

  const emailSubject = `Contact Form: ${subject}`;
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
Submitted on: ${new Date().toLocaleString()}
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

        const mailOptions = {
          from: process.env.GMAIL_USER,
          to: recipientEmail,
          replyTo: email,
          subject: emailSubject,
          text: emailBody,
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
              <h2 style="color: #3FA9F5;">New Contact Form Submission</h2>
              <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone/WhatsApp:</strong> ${phone}</p>
                <p><strong>Subject:</strong> ${subject}</p>
              </div>
              <div style="margin: 20px 0;">
                <h3>Message:</h3>
                <p style="white-space: pre-wrap;">${message}</p>
              </div>
              <hr style="border: 1px solid #ddd; margin: 20px 0;">
              <p style="color: #666; font-size: 12px;">
                This email was sent from the OgaalSan Consultancy contact form.<br>
                Submitted on: ${new Date().toLocaleString()}
              </p>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
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
