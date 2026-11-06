import { Router } from "express";
import { z } from "zod";
import { createInquiry } from "../services/inquiryService.js";

const projectTypes = [
  "Website",
  "Web Application",
  "Android App",
  "API / Backend",
  "Database",
  "Custom Software",
  "Other",
];

const budgetRanges = [
  "Under $100",
  "$100–$300",
  "$300–$500",
  "$500–$1,000",
  "$1,000+",
  "Discuss Later",
];

const timelines = [
  "As soon as possible",
  "Within 2 weeks",
  "Within 1 month",
  "1–3 months",
  "Flexible",
];

const inquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  projectType: z.enum(projectTypes, { errorMap: () => ({ message: "Choose a project type" }) }),
  budgetRange: z.enum(budgetRanges).optional(),
  timeline: z.enum(timelines).optional(),
  requiredFeatures: z.string().trim().max(1500).optional().transform((value) => (value ? value : undefined)),
  description: z.string().trim().min(20, "Please describe your project in at least 20 characters").max(4000),
});

const router = Router();

router.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "backend" });
});

router.post("/inquiries", async (req, res) => {
  try {
    const parsed = inquirySchema.safeParse(req.body);

    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0];
      return res.status(400).json({ message: firstIssue?.message ?? "Invalid inquiry data." });
    }

    await createInquiry(parsed.data);
    return res.status(200).json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Something went wrong while sending your inquiry.";

    return res.status(500).json({ message });
  }
});

export default router;
