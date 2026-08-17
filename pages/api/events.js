// API route to handle events / opportunities form submissions
// Uses the same email configuration approach as the main contact form.

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
              <h2 style="color: #3FA9F5;">New Training Registration</h2>
              <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
                <p><strong>Training:</strong> ${trainingName}</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Location:</strong> ${location}</p>
                <p><strong>Background / Education Level:</strong> ${background}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Preferred Training Mode:</strong> ${trainingModeLabel}</p>
              </div>
              <div style="margin: 20px 0;">
                <h3>Skills:</h3>
                <p style="white-space: pre-wrap;">${skills}</p>
              </div>
              <hr style="border: 1px solid #ddd; margin: 20px 0;">
              <p style="color: #666; font-size: 12px;">
                This email was sent from the OgaalSan Consultancy events & opportunities form.<br>
                Submitted on: ${new Date().toLocaleString()}
              </p>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
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


