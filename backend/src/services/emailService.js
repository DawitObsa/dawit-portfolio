import { Resend } from "resend";
import { env } from "../config/env.js";

export async function sendInquiryEmail(inquiry) {
  if (!env.resendApiKey || !env.emailFrom || !env.adminEmail) {
    console.warn("Email not sent: missing Resend configuration. Set RESEND_API_KEY, EMAIL_FROM, and ADMIN_EMAIL.");
    return { ok: false, skipped: true };
  }

  const resend = new Resend(env.resendApiKey);

  const html = `
    <h2>New project inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(inquiry.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(inquiry.email)}</p>
    <p><strong>Project type:</strong> ${escapeHtml(inquiry.projectType)}</p>
    <p><strong>Budget:</strong> ${escapeHtml(inquiry.budgetRange ?? "Not specified")}</p>
    <p><strong>Timeline:</strong> ${escapeHtml(inquiry.timeline ?? "Not specified")}</p>
    <p><strong>Required features:</strong> ${escapeHtml(inquiry.requiredFeatures ?? "Not specified")}</p>
    <p><strong>Description:</strong></p>
    <p>${escapeHtml(inquiry.description)}</p>
  `;

  const { error } = await resend.emails.send({
    from: env.emailFrom,
    to: [env.adminEmail],
    replyTo: inquiry.email,
    subject: `New inquiry from ${inquiry.name}`,
    html,
  });

  if (error) {
    throw new Error(error.message || "Failed to send inquiry email");
  }

  return { ok: true, skipped: false };
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
