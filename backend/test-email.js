import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.RESEND_API_KEY;
const from = process.env.EMAIL_FROM || "Dawit Portfolio <onboarding@resend.dev>";
const to = process.env.ADMIN_EMAIL || "devaoobsa@gmail.com";

if (!apiKey) {
  console.error("Missing RESEND_API_KEY. Add it to backend/.env before testing email delivery.");
  process.exit(1);
}

const resend = new Resend(apiKey);

const run = async () => {
  try {
    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      subject: "Portfolio email test",
      html: "<p>This is a test email from your portfolio backend.</p>",
    });

    if (error) {
      console.error("Email send failed:", error);
      process.exit(1);
    }

    console.log("Email sent successfully.");
    console.log(JSON.stringify({ id: data?.id ?? null, to }, null, 2));
  } catch (error) {
    console.error("Unexpected error while sending email:", error);
    process.exit(1);
  }
};

run();
