import fs from "fs";
import path from "path";

export function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function brandedEmailAttachments() {
  const logoPath = path.join(
    process.cwd(),
    "public",
    "assets",
    "img",
    "logo",
    "ogaalsan version 4-03.png"
  );

  if (!fs.existsSync(logoPath)) {
    return [];
  }

  return [
    {
      filename: "logo-ogalsan.png",
      path: logoPath,
      cid: "ogaalsan-logo",
    },
  ];
}

export function brandedEmailHtml({
  title,
  intro,
  rows = [],
  messageLabel,
  message,
  footerNote,
}) {
  const rowsHtml = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #e2e8f0;color:#22428F;font-weight:700;width:170px;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:12px 0;border-bottom:1px solid #e2e8f0;color:#475569;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join("");

  const messageHtml = message
    ? `
      <p style="margin:24px 0 8px;color:#22428F;font-weight:700;">${escapeHtml(messageLabel || "Message")}</p>
      <div style="background:#f8fafc;border-left:4px solid #3FA9F5;border-radius:10px;padding:16px 18px;color:#475569;white-space:pre-wrap;">${escapeHtml(message)}</div>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:24px 12px;background:#e8f6fe;font-family:'Segoe UI',Arial,sans-serif;color:#334155;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 8px 24px rgba(34,66,143,0.12);">
    <div style="background:linear-gradient(135deg,#3FA9F5 0%,#22428F 100%);color:#ffffff;padding:28px 24px;text-align:center;">
      <img src="cid:ogaalsan-logo" alt="OgaalSan Consultancy" width="180" style="max-width:180px;height:auto;margin-bottom:12px;">
      <h1 style="margin:0;font-size:22px;font-weight:700;">${escapeHtml(title)}</h1>
      <p style="margin:8px 0 0;font-size:15px;opacity:0.95;">ICT &amp; Business Consultancy</p>
    </div>
    <div style="padding:32px 28px;">
      ${intro ? `<p style="margin:0 0 20px;color:#475569;">${escapeHtml(intro)}</p>` : ""}
      <table style="width:100%;border-collapse:collapse;">${rowsHtml}</table>
      ${messageHtml}
    </div>
    <div style="padding:24px 28px;text-align:center;font-size:13px;color:#64748b;background:#f8fafc;border-top:1px solid #e2e8f0;">
      <p style="margin:0 0 6px;color:#22428F;font-weight:700;">OgaalSan Consultancy</p>
      <p style="margin:0;">${escapeHtml(footerNote || "This email was sent from the OgaalSan Consultancy website.")}</p>
      <p style="margin:8px 0 0;">&copy; ${new Date().getFullYear()} OgaalSan Consultancy. All rights reserved.</p>
    </div>
  </div>
</body>
</html>`;
}
