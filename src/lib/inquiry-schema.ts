import { z } from "zod";

export const projectTypes = [
  "Website",
  "Web Application",
  "Android App",
  "API / Backend",
  "Database",
  "Custom Software",
  "Other",
] as const;

export const budgetRanges = [
  "Under $100",
  "$100–$300",
  "$300–$500",
  "$500–$1,000",
  "$1,000+",
  "Discuss Later",
] as const;

export const timelines = [
  "As soon as possible",
  "Within 2 weeks",
  "Within 1 month",
  "1–3 months",
  "Flexible",
] as const;

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .optional()
    .transform((v) => (v ? v : undefined));

export const inquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  projectType: z.enum(projectTypes, { errorMap: () => ({ message: "Choose a project type" }) }),
  budgetRange: z.enum(budgetRanges).optional(),
  timeline: z.enum(timelines).optional(),
  requiredFeatures: optionalText(1500),
  description: z
    .string()
    .trim()
    .min(20, "Please describe your project in at least 20 characters")
    .max(4000),
});

export type InquiryInput = z.input<typeof inquirySchema>;
