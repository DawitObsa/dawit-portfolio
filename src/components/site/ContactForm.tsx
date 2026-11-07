import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { budgetRanges, inquirySchema, projectTypes, timelines } from "@/lib/inquiry-schema";

const selectClass =
  "flex h-11 w-full rounded-xl border border-white/10 bg-[#0b1220]/90 px-3 text-sm text-foreground shadow-inner shadow-black/20 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f7d98c]/60";
const fieldClass =
  "h-11 rounded-xl border border-white/10 bg-[#0b1220]/90 text-foreground shadow-inner shadow-black/20 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f7d98c]/60";
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000";

type Errors = Partial<Record<string, string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [serverError, setServerError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const raw = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      projectType: String(fd.get("projectType") ?? ""),
      budgetRange: (fd.get("budgetRange") as string) || undefined,
      timeline: (fd.get("timeline") as string) || undefined,
      requiredFeatures: String(fd.get("requiredFeatures") ?? ""),
      description: String(fd.get("description") ?? ""),
    };
    const parsed = inquirySchema.safeParse(raw);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setStatus("sending");

    try {
      const response = await fetch(`${API_BASE}/api/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const responseBody = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(responseBody.message || "Unable to send inquiry right now.");
      }

      setStatus("sent");
      form.reset();
      toast.success("Inquiry sent successfully — I’ll reply soon.");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      setServerError(message);
      setStatus("error");
      toast.error(message);
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-primary/30 bg-card p-10 text-center">
        <CheckCircle2 className="size-10 text-primary" />
        <h3 className="text-xl font-semibold">Inquiry received</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Thanks for sharing your project. I'll review it and reply to the email you provided.
        </p>
        <Button variant="ghostLine" onClick={() => setStatus("idle")}>
          Send another
        </Button>
      </div>
    );
  }

  const err = (k: string) =>
    errors[k] ? (
      <p className="text-xs text-destructive" role="alert">
        {errors[k]}
      </p>
    ) : null;

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-6 rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(13,18,29,0.96),rgba(10,16,26,0.9))] p-6 shadow-[0_30px_90px_rgba(2,6,23,0.38)] sm:p-8"
    >
      <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#f7d98c]">Project inquiry</p>
          <h3 className="mt-2 text-2xl font-semibold text-foreground">Tell me about your project</h3>
        </div>
        <span className="rounded-full border border-[#f7d98c]/30 bg-[#f7d98c]/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#f7d98c]">
          Usually replies within 24h
        </span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium text-foreground/90">
            Name
          </Label>
          <Input id="name" name="name" autoComplete="name" className={fieldClass} />
          {err("name")}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-foreground/90">
            Email
          </Label>
          <Input id="email" name="email" type="email" autoComplete="email" className={fieldClass} />
          {err("email")}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="projectType" className="text-sm font-medium text-foreground/90">
            Project Type
          </Label>
          <select id="projectType" name="projectType" defaultValue="" className={selectClass}>
            <option value="" disabled>
              Select a type
            </option>
            {projectTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
          {err("projectType")}
        </div>
        <div className="space-y-2">
          <Label htmlFor="budgetRange" className="text-sm font-medium text-foreground/90">
            Budget Range (optional)
          </Label>
          <select id="budgetRange" name="budgetRange" defaultValue="" className={selectClass}>
            <option value="">Not sure yet</option>
            {budgetRanges.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="timeline" className="text-sm font-medium text-foreground/90">
            Timeline (optional)
          </Label>
          <select id="timeline" name="timeline" defaultValue="" className={selectClass}>
            <option value="">Not sure yet</option>
            {timelines.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="requiredFeatures" className="text-sm font-medium text-foreground/90">
          Required Features (optional)
        </Label>
        <Textarea
          id="requiredFeatures"
          name="requiredFeatures"
          rows={3}
          placeholder="e.g. user login, admin dashboard, payments, reports…"
          className="rounded-xl border border-white/10 bg-[#0b1220]/90 text-foreground shadow-inner shadow-black/20 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f7d98c]/60"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description" className="text-sm font-medium text-foreground/90">
          Project Description
        </Label>
        <Textarea
          id="description"
          name="description"
          rows={5}
          placeholder="What are you trying to build, and who will use it?"
          className="rounded-xl border border-white/10 bg-[#0b1220]/90 text-foreground shadow-inner shadow-black/20 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f7d98c]/60"
        />
        {err("description")}
      </div>

      <p className="text-xs text-muted-foreground">
        Budget ranges are a conversation starter, not fixed rates.
      </p>

      {status === "error" && (
        <p className="text-sm text-destructive" role="alert">
          {serverError}
        </p>
      )}

      <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto" disabled={status === "sending"}>
        {status === "sending" ? <Loader2 className="animate-spin" /> : <Send />}
        Send Project Inquiry
      </Button>
    </form>
  );
}
