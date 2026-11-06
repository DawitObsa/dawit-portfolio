import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, ExternalLink, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProject } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found – Dawit Obsa" }, { name: "robots", content: "noindex" }] };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.title} – Case Study | Dawit Obsa` },
        { name: "description", content: project.summary },
        { property: "og:title", content: `${project.title} – Case Study` },
        { property: "og:description", content: project.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-5 py-32 text-center">
      <h1 className="text-3xl font-bold">Project not found</h1>
      <p className="mt-3 text-muted-foreground">This case study doesn't exist.</p>
      <Button asChild variant="hero" className="mt-6">
        <a href="/#projects">Back to projects</a>
      </Button>
    </div>
  ),
  component: CaseStudy,
});

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-4 border-t border-border py-10 md:grid-cols-[200px_1fr]">
      <h2 className="eyebrow pt-1">{label}</h2>
      <div>{children}</div>
    </section>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((t) => (
        <span key={t} className="tag">
          {t}
        </span>
      ))}
    </div>
  );
}

function CaseStudy() {
  const { project: p } = Route.useLoaderData();

  return (
    <article>
      <header className="relative overflow-hidden">
        <div className="hero-glow pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-5xl px-5 pb-10 pt-12">
          <a href="/#projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="size-4" /> Back to projects
          </a>
          <p className="eyebrow mt-8">{p.category} · Case Study</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{p.title}</h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">{p.summary}</p>
          <div className="mt-6">
            <Tags items={p.stack} />
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <Button asChild variant="hero">
              <a href={p.github} target="_blank" rel="noreferrer">
                <Github /> View Source on GitHub
              </a>
            </Button>
            {p.live && (
              <Button asChild variant="ghostLine">
                <a href={p.live} target="_blank" rel="noreferrer">
                  <ExternalLink /> Open Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-5">
        <img
          src={p.cover}
          alt={p.coverAlt}
          width={1400}
          height={900}
          className="w-full rounded-2xl border border-border shadow-glow"
        />

        <div className="mt-14">
          <Block label="Project Overview">
            <p className="text-lg">{p.overview}</p>
          </Block>
          <Block label="Problem">
            <p className="text-muted-foreground">{p.problem}</p>
          </Block>
          <Block label="Solution">
            <p className="text-muted-foreground">{p.solution}</p>
          </Block>
          <Block label="Features">
            <ul className="grid gap-2 sm:grid-cols-2">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" /> {f}
                </li>
              ))}
            </ul>
          </Block>
          <Block label="Technology Stack">
            <Tags items={p.stack} />
          </Block>
          <Block label="Development Process">
            <ol className="flex flex-wrap gap-2">
              {p.process.map((s, i) => (
                <li key={s} className="rounded-lg border border-border bg-card px-3 py-2 text-sm">
                  <span className="mr-2 font-mono font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
                  {s}
                </li>
              ))}
            </ol>
          </Block>
          <Block label="Challenges">
            <p className="text-muted-foreground">{p.challenges}</p>
          </Block>
          <Block label="What I Learned">
            <Tags items={p.learned} />
          </Block>
          <blockquote className="border-l-2 border-primary py-2 pl-5 text-lg italic text-foreground/90">
            {p.takeaway}
          </blockquote>
        </div>
      </div>

      <section className="mx-auto my-20 max-w-5xl px-5">
        <div className="rounded-2xl border border-primary/30 bg-accent p-8 text-center sm:p-12">
          <p className="eyebrow">Build something useful</p>
          <h2 className="mt-3 text-3xl font-bold">{p.ctaTitle}</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Share your requirements, users, and goals. I'll help shape them into a practical software solution.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="lg">
              <a href="/#contact">
                Start a Project <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="ghostLine" size="lg">
              <a href="mailto:devaobsa@gmail.com">
                <Mail /> Email Dawit
              </a>
            </Button>
          </div>
          <Link to="/" className="mt-6 inline-block text-sm text-muted-foreground hover:text-foreground">
            ← Home
          </Link>
        </div>
      </section>
    </article>
  );
}
