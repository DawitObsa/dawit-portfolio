import { createServerFn } from "@tanstack/react-start";
import { inquirySchema } from "./inquiry-schema";

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => inquirySchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("project_inquiries").insert({
      name: data.name,
      email: data.email,
      project_type: data.projectType,
      budget_range: data.budgetRange ?? null,
      timeline: data.timeline ?? null,
      required_features: data.requiredFeatures ?? null,
      description: data.description,
    });
    if (error) {
      console.error("Failed to save inquiry", error);
      throw new Error("Could not send your inquiry. Please try again or email directly.");
    }
    return { ok: true as const };
  });
