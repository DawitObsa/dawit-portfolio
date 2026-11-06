import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Github,
  Globe,
  Layers,
  Lightbulb,
  Mail,
  MapPin,
  MessageSquare,
  RefreshCw,
  Server,
  Smartphone,
  Sparkles,
  Target,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/site/ContactForm";
import { plannedProjects, projects } from "@/data/projects";
import profilePhoto from "@/assets/profile-photo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dawit Obsa – Full-Stack Developer & Software Engineer" },
      {
        name: "description",
        content:
          "Dawit Obsa builds web apps, Android apps, REST APIs and databases. See projects and start a freelance project.",
      },
      { property: "og:title", content: "Dawit Obsa – Turning Ideas Into Working Software" },
      {
        property: "og:description",
        content:
          "Full-stack and Android developer from Ethiopia. Explore real projects and request a custom build.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const heroStack = ["React", "Next.js", "Node.js", "Java", "Android", "MongoDB", "SQLite"];

const strip = [
  { icon: Braces, title: "Software Engineering", text: "Software Engineering background" },
  { icon: Layers, title: "Full-Stack Development", text: "Frontend + Backend + Database" },
  { icon: Smartphone, title: "Mobile Development", text: "Android application development" },
  { icon: Check, title: `${projects.length} Public Projects`, text: "Web, mobile, Java & MERN on GitHub" },
];

const strengths = [
  { title: "Problem Solver", text: "I focus on understanding the actual problem before choosing a technical solution." },
  { title: "Full-Stack Mindset", text: "I work across frontend interfaces, backend services, APIs, databases, and application logic." },
  { title: "Continuous Learner", text: "I continuously improve my software engineering skills and explore modern development technologies and tools." },
];

const services = [
  { icon: Globe, title: "Full-Stack Web Development", text: "Responsive, database-driven web applications with modern interfaces, backend services, APIs, authentication, and database integration.", tags: ["React", "Next.js", "Node.js", "Express", "TypeScript"], cta: "Discuss a Web Project" },
  { icon: Smartphone, title: "Android App Development", text: "Practical Android applications with user-friendly interfaces, application logic, and database functionality.", tags: ["Java", "Android Studio", "XML", "SQLite"], cta: "Build an Android App" },
  { icon: Server, title: "Backend & API Development", text: "Structured REST APIs and backend services that connect web and mobile applications with databases and other services.", tags: ["Node.js", "Express", "REST APIs", "MongoDB", "SQL"], cta: "Build My API" },
  { icon: Database, title: "Database Development", text: "Databases designed and integrated for applications that require structured and reliable data management.", tags: ["MongoDB", "MySQL", "SQLite", "SQL"], cta: "Discuss My Database" },
  { icon: Wrench, title: "Custom Software Development", text: "Have a specific software idea? I can help transform your requirements into a functional application.", tags: ["Requirements", "Design", "Development", "Testing", "Delivery"], cta: "Discuss My Idea" },
  { icon: Sparkles, title: "AI-Assisted Development", text: "Modern AI tools accelerate prototyping, debugging, research, and documentation while engineering principles guide the final product.", tags: ["Prototyping", "Research", "Debugging", "Documentation"], cta: "Discuss Your Project" },
];

const skills = [
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { title: "Database", items: ["MongoDB", "MySQL", "SQLite", "SQL"] },
  { title: "Mobile", items: ["Java", "Android Studio", "XML", "SQLite"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "Android Studio", "Postman"] },
  { title: "AI / Productivity", items: ["AI-assisted development tools", "AI coding assistants", "AI research tools"] },
];

const processSteps = [
  { title: "Understand", text: "I learn about the client's idea, requirements, users, and goals." },
  { title: "Plan", text: "I choose an appropriate architecture, technology stack, database, and development approach." },
  { title: "Build", text: "I develop the interface, backend, database, APIs, and application functionality." },
  { title: "Test & Improve", text: "I test functionality, fix bugs, improve usability, and refine the application." },
  { title: "Deliver", text: "I provide the completed solution and explain the important parts of the project." },
];

const reasons = [
  { icon: MessageSquare, title: "Clear Communication", text: "I focus on understanding requirements and keeping project communication straightforward." },
  { icon: Target, title: "Practical Solutions", text: "I build around the actual problem instead of adding unnecessary complexity." },
  { icon: Cpu, title: "Modern Technologies", text: "I use technologies that are appropriate for the project's requirements." },
  { icon: RefreshCw, title: "Continuous Improvement", text: "I test, debug, learn, and improve throughout development." },
];

const experience = [
  {
    role: "Full-Stack Developer",
    type: "Freelance & Independent Work",
    description:
      "I design and build responsive web applications, business dashboards, APIs, and database-backed systems that connect the product experience end to end.",
    bullets: ["React, Next.js, TypeScript, and Node.js", "REST APIs and data-driven workflows", "Authentication, dashboards, and product features"],
  },
  {
    role: "Software Engineer",
    type: "Product & Problem Solving",
    description:
      "I turn ideas into working software by translating requirements into practical architecture, clean interfaces, and reliable implementation decisions.",
    bullets: ["Requirement analysis and planning", "UI, backend, and database coordination", "Testing, debugging, and iterative improvement"],
  },
  {
    role: "Android & Java Developer",
    type: "Mobile App Experience",
    description:
      "I build native Android experiences and Java-based tools focused on real workflows, usability, and everyday business or personal use cases.",
    bullets: ["Java, Android Studio, XML, and SQLite", "Screen flows, local data handling, and app logic", "User-focused mobile product design"],
  },
];

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-muted-foreground">{text}</p>}
    </div>
  );
}

function Index() {
  return (
    <>
      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="hero-glow pointer-events-none absolute inset-0" />
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#f0c36a]/25 bg-[#0f172a]/80 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#f7d98c] shadow-[0_0_30px_rgba(245,201,117,0.12)]">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#f7d98c] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#f7d98c]" />
              </span>
              Available for product & web work
            </span>
            <p className="eyebrow mt-6 text-[0.68rem] sm:text-xs">Software Engineer • Full-Stack Developer • Product Mindset</p>
            <h1 className="mt-4 max-w-xl text-4xl font-bold leading-[1.02] sm:text-5xl lg:text-7xl">
              I craft <span className="bg-gradient-to-r from-[#f7d98c] via-[#dfeffd] to-[#7ec8ff] bg-clip-text text-transparent">premium digital products</span> that help brands grow.
            </h1>
            <p className="mt-6 max-w-xl text-base text-foreground/90 sm:text-lg">
              I design and build polished web experiences, business systems, mobile apps, and API-driven platforms for founders, teams, and organizations that want dependable software and a stronger digital presence.
            </p>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
              From first idea to final delivery, I focus on clean design, solid engineering, and products that feel credible, scalable, and ready for real-world use.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild variant="hero" size="lg">
                <a href="#contact">
                  Book a Discovery Call <ArrowRight />
                </a>
              </Button>
              <Button asChild variant="ghostLine" size="lg">
                <a href="#projects">View Case Studies</a>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href="https://github.com/DawitObsa" target="_blank" rel="noreferrer">
                  <Github /> GitHub
                </a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-5 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-[#f7d98c]" /> Addis Ababa, Ethiopia
              </span>
              <a href="mailto:devaobsa@gmail.com" className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
                <Mail className="size-4 text-[#f7d98c]" /> devaobsa@gmail.com
              </a>
              <a href="tel:+251910824429" className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
                <span className="size-2 rounded-full bg-[#f7d98c]" /> +251910824429
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              <span className="rounded-full border border-border bg-card/80 px-3 py-2">Web</span>
              <span className="rounded-full border border-border bg-card/80 px-3 py-2">Mobile</span>
              <span className="rounded-full border border-border bg-card/80 px-3 py-2">APIs</span>
              <span className="rounded-full border border-border bg-card/80 px-3 py-2">Systems</span>
            </div>
          </div>

          <div className="relative mt-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[440px]">
              <div className="absolute inset-6 rounded-full bg-[radial-gradient(circle,_rgba(245,201,117,0.34),_transparent_58%)] blur-3xl" />
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.26),_transparent_60%)] blur-3xl" />

              <div className="relative overflow-hidden rounded-full border border-[#f0c36a]/30 bg-[linear-gradient(135deg,#f7d98c_0%,#7ec8ff_26%,#14213d_52%,#0b1020_100%)] p-[3px] shadow-[0_0_0_1px_rgba(240,195,106,0.12),0_30px_90px_rgba(59,130,246,0.26),0_0_60px_rgba(245,201,117,0.18)]">
                <div className="relative overflow-hidden rounded-full border border-white/10 bg-background/70 p-2">
                  <img
                    src={profilePhoto}
                    alt="Dawit Obsa portrait"
                    className="h-[280px] w-[280px] rounded-full object-cover sm:h-[400px] sm:w-[400px]"
                    style={{ objectPosition: "center top" }}
                  />
                </div>
              </div>

              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-background/85 px-4 py-3 shadow-[0_18px_40px_rgba(8,15,32,0.5)] backdrop-blur-md sm:px-5">
                <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#f7d98c]">Available</p>
                <p className="mt-1 text-center text-sm font-semibold text-foreground sm:text-base">
                  Full-Stack Developer
                </p>
              </div>
            </div>

            <div className="pointer-events-none absolute -left-2 top-10 hidden rounded-full border border-border bg-card/80 px-3 py-2 text-[10px] font-medium text-muted-foreground shadow-[0_12px_30px_rgba(2,6,23,0.4)] backdrop-blur-sm sm:block">
              React • Node • Java
            </div>
            <div className="pointer-events-none absolute -right-2 bottom-16 hidden rounded-full border border-border bg-card/80 px-3 py-2 text-[10px] font-medium text-muted-foreground shadow-[0_12px_30px_rgba(2,6,23,0.4)] backdrop-blur-sm sm:block">
              Web • Mobile • APIs
            </div>
          </div>
        </div>
      </section>

      {/* STRIP */}
      <section className="border-y border-border bg-surface-alt">
        <div className="mx-auto grid max-w-6xl sm:grid-cols-2 lg:grid-cols-4">
          {strip.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-3 border-border px-5 py-6 lg:border-r lg:last:border-r-0">
              <Icon className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <p className="font-display font-semibold">{title}</p>
                <p className="text-sm text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading eyebrow="About" title="Practical software, built end to end." />
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4 text-muted-foreground">
            <p className="text-lg text-foreground">
              I'm Dawit Obsa Kenea, a software engineer and full-stack developer based in Addis Ababa,
              Ethiopia, creating digital products that are practical, reliable, and built for real users.
            </p>
            <p>
              My work spans web applications, Android apps, API development, database systems, dashboards,
              authentication, and custom software built to solve everyday business and operational needs.
            </p>
            <p>
              I enjoy taking an idea from the first requirement to the final product — planning, building,
              testing, refining, and delivering software that is functional, user-friendly, and ready to perform.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-4 font-mono text-xs">
              {["Understand", "Plan", "Build", "Test", "Improve", "Deliver"].map((s, i, arr) => (
                <span key={s} className="inline-flex items-center gap-2">
                  <span className="rounded-md border border-border bg-card px-2.5 py-1 text-foreground">{s}</span>
                  {i < arr.length - 1 && <ArrowRight className="size-3 text-primary" />}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {strengths.map((s, i) => (
              <div key={s.title} className="rounded-xl border border-border bg-card p-5">
                <p className="font-mono text-xs text-primary">0{i + 1}</p>
                <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          eyebrow="Experience"
          title="Built across web, mobile, and product work."
          text="I have hands-on experience developing software that connects user experience, application logic, and data systems."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {experience.map((item, index) => (
            <article
              key={item.role}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs text-primary">{String(index + 1).padStart(2, "0")}</span>
                <span className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-primary">
                  {item.type}
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-foreground">{item.role}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-foreground/90">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-y border-border bg-surface-alt">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <SectionHeading
            eyebrow="Services"
            title="What I can build for you."
            text="From a single website to a complete system with users, data, and workflows."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, text, tags, cta }) => (
              <article
                key={title}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <span className="flex size-11 items-center justify-center rounded-lg bg-accent text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{text}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                >
                  {cta} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          eyebrow="Projects"
          title="Real work, with the source code to prove it."
          text="Each project links to its code on GitHub and a short case study."
        />
        <div className="space-y-8">
          {projects.map((p, i) => (
            <article
              key={p.slug}
              className="grid overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-2"
            >
              <div className={`relative ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <img
                  src={p.cover}
                  alt={p.coverAlt}
                  loading="lazy"
                  width={1400}
                  height={900}
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur">
                  {p.category}
                </span>
              </div>
              <div className="flex flex-col p-6 sm:p-8">
                <p className="font-mono text-sm text-primary">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 text-2xl font-bold">{p.title}</h3>
                <p className="mt-3 text-muted-foreground">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="mt-5 grid gap-2 text-sm sm:grid-cols-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" /> {h}
                    </li>
                  ))}
                </ul>
                {p.note && (
                  <blockquote className="mt-5 border-l-2 border-primary pl-4 text-sm italic text-muted-foreground">
                    {p.note}
                  </blockquote>
                )}
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  <Button asChild variant="hero">
                    <Link to="/projects/$slug" params={{ slug: p.slug }}>
                      View Case Study <ArrowRight />
                    </Link>
                  </Button>
                  <Button asChild variant="ghostLine">
                    <a href={p.github} target="_blank" rel="noreferrer">
                      <Github /> Code
                    </a>
                  </Button>
                  {p.live && (
                    <Button asChild variant="ghostLine">
                      <a href={p.live} target="_blank" rel="noreferrer">
                        <ExternalLink /> Live
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-dashed border-border p-6 sm:flex-row sm:items-center">
          <div>
            <p className="eyebrow">More Projects</p>
            <h3 className="mt-2 text-xl font-semibold">More work, experiments, and progress.</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Explore additional software projects and experiments demonstrating my continuous development and
              learning.
            </p>
          </div>
          <Button asChild variant="ghostLine" size="lg">
            <a href="https://github.com/DawitObsa" target="_blank" rel="noreferrer">
              View All Projects <ArrowUpRight />
            </a>
          </Button>
        </div>
      </section>

      {/* PLANNED */}
      <section id="roadmap" className="border-y border-border bg-surface-alt">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <SectionHeading
            eyebrow="What I'm Building Next"
            title="Upcoming business systems."
            text="Projects on my roadmap. Each one is labelled honestly and will move to the projects list once it's built."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {plannedProjects.map((p) => (
              <article key={p.title} className="flex flex-col rounded-2xl border border-dashed border-border bg-card/60 p-6">
                <div className="flex items-start justify-between gap-3">
                  <Lightbulb className="size-5 text-primary" />
                  <span className="rounded-full bg-planned px-2.5 py-1 text-xs font-semibold text-planned-foreground">
                    {p.status}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
                <ul className="mt-4 flex-1 space-y-1.5 text-sm">
                  {p.scope.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-foreground/85">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" /> {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
            <article className="flex flex-col justify-center rounded-2xl border border-primary/30 bg-accent p-6">
              <Code2 className="size-6 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">Need one of these now?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                If your business needs a system like these, I can build it around your exact requirements.
              </p>
              <Button asChild variant="hero" className="mt-5 self-start">
                <a href="#contact">
                  Discuss It <ArrowRight />
                </a>
              </Button>
            </article>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading eyebrow="Skills" title="Tools I work with." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((g) => (
            <div key={g.title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="border-y border-border bg-surface-alt">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <SectionHeading eyebrow="Process" title="How we'll work together." />
          <ol className="grid gap-5 md:grid-cols-5">
            {processSteps.map((s, i) => (
              <li key={s.title} className="relative rounded-2xl border border-border bg-card p-5">
                <p className="font-mono text-2xl font-bold text-primary">0{i + 1}</p>
                <h3 className="mt-3 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
          <Button asChild variant="hero" size="lg" className="mt-10">
            <a href="#contact">
              Start Your Project <ArrowRight />
            </a>
          </Button>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <Icon className="size-5 text-primary" />
                <h3 className="mt-3 font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs">
              <span className="size-2 rounded-full bg-primary" /> Available for freelance work
            </span>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Looking for a Developer?</h2>
            <p className="mt-4 text-muted-foreground">
              Whether you need a website, web application, Android app, REST API, database system, or custom
              software solution, I can help turn your requirements into a working product.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="ghostLine" size="lg">
                <a href="mailto:devaobsa@gmail.com">
                  <Mail /> Email Me
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href="https://github.com/DawitObsa" target="_blank" rel="noreferrer">
                  <Github /> GitHub
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href="https://www.linkedin.com/in/dawit-obsa-362453438" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href="https://t.me/da_ok1" target="_blank" rel="noreferrer">
                  Telegram
                </a>
              </Button>
            </div>
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-muted-foreground">
              <a href="tel:+251910824429" className="hover:text-foreground">+251910824429</a>
              <span>•</span>
              <a href="https://stylemart-khts7jgh.manus.space/" target="_blank" rel="noreferrer" className="hover:text-foreground">
                Portfolio
              </a>
              <span>•</span>
              <a href="https://www.linkedin.com/in/dawit-obsa-362453438" target="_blank" rel="noreferrer" className="hover:text-foreground">
                LinkedIn
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-t border-border">
        <div className="hero-glow pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-3xl px-5 py-24 text-center">
          <p className="eyebrow">Start a conversation</p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Have an idea? Let's build it.</h2>
          <p className="mt-4 text-muted-foreground">
            Tell me what you're trying to build, and let's turn your idea into a practical digital product.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="lg">
              <a href="#contact">
                Start a Project <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="ghostLine" size="lg">
              <a href="https://github.com/DawitObsa" target="_blank" rel="noreferrer">
                <Github /> View My GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function Line({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <span className="block whitespace-pre">
      <span className="mr-4 select-none text-muted-foreground/60">{n}</span>
      {children}
    </span>
  );
}

function K({ children }: { children: React.ReactNode }) {
  return <span className="text-primary">{children}</span>;
}

function S({ children }: { children: React.ReactNode }) {
  return <span className="text-foreground">{children}</span>;
}
