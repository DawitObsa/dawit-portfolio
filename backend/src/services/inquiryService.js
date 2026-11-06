import { createClient } from "@supabase/supabase-js";
import { env, requireBackendEnv } from "../config/env.js";
import { inquiryModel } from "../db/inquiry.model.js";
import { sendInquiryEmail } from "./emailService.js";

export function mapInquiryPayload(raw) {
  return {
    name: raw.name,
    email: raw.email,
    project_type: raw.projectType,
    budget_range: raw.budgetRange ?? null,
    timeline: raw.timeline ?? null,
    required_features: raw.requiredFeatures ?? null,
    description: raw.description,
  };
}

export async function createInquiry(rawInquiry) {
  requireBackendEnv();

  const supabase = createClient(env.supabaseUrl, env.supabaseServiceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  const payload = mapInquiryPayload(rawInquiry);

  const { error } = await supabase.from(inquiryModel.tableName).insert(payload);

  if (error) {
    throw new Error(error.message || "Could not save inquiry");
  }

  await sendInquiryEmail(rawInquiry);

  return { ok: true };
}
