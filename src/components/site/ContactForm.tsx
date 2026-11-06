import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { budgetRanges, inquirySchema, projectTypes, timelines } from "@/lib/inquiry-schema";

const selectClass =
  "flex h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";
const fieldClass = "h-11 bg-background";
const ADMIN_EMAIL = "devaoobsa@gmail.com";

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
      const subject = encodeURIComponent(`Project Inquiry - ${raw.projectType}`);
      const body = encodeURIComponent(
        [
          `Name: ${raw.name}`,
          `Email: ${raw.email}`,
          raw.projectType ? `Project Type: ${raw.projectType}` : "",
          raw.budgetRange ? `Budget Range: ${raw.budgetRange}` : "",
          raw.timeline ? `Timeline: ${raw.timeline}` : "",
          raw.requiredFeatures ? `Required Features: ${raw.requiredFeatures}` : "",
          "",
          "Project Description:",
          raw.description,
        ]
          .filter(Boolean)
          .join("\n"),
      );

      window.location.href = `mailto:${ADMIN_EMAIL}?subject=${subject}&body=${body}`;
      setStatus("sent");
      form.reset();
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
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
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" autoComplete="name" className={fieldClass} />
          {err("name")}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" autoComplete="email" className={fieldClass} />
          {err("email")}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="projectType">Project Type</Label>
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
          <Label htmlFor="budgetRange">Budget Range (optional)</Label>
          <select id="budgetRange" name="budgetRange" defaultValue="" className={selectClass}>
            <option value="">Not sure yet</option>
            {budgetRanges.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="timeline">Timeline (optional)</Label>
          <select id="timeline" name="timeline" defaultValue="" className={selectClass}>
            <option value="">Not sure yet</option>
            {timelines.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="requiredFeatures">Required Features (optional)</Label>
        <Textarea
          id="requiredFeatures"
          name="requiredFeatures"
          rows={3}
          placeholder="e.g. user login, admin dashboard, payments, reports…"
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Project Description</Label>
        <Textarea
          id="description"
          name="description"
          rows={5}
          placeholder="What are you trying to build, and who will use it?"
          className="bg-background"
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
