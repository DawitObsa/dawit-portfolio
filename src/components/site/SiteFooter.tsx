import { Github, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface-alt">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>
          <span className="font-mono font-bold text-foreground">
            DO<span className="text-primary">.</span>
          </span>{" "}
          © {new Date().getFullYear()} Dawit Obsa Kenea
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          <a
            href="mailto:devaobsa@gmail.com"
            className="inline-flex items-center gap-2 hover:text-foreground"
          >
            <Mail className="size-4 text-primary" /> devaobsa@gmail.com
          </a>
          <a href="tel:+251910824429" className="inline-flex items-center gap-2 hover:text-foreground">
            <span className="size-2 rounded-full bg-primary" /> +251910824429
          </a>
          <a
            href="https://github.com/DawitObsa"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-foreground"
          >
            <Github className="size-4 text-primary" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/dawit-obsa-362453438"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="https://t.me/da_ok1"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-foreground"
          >
            Telegram
          </a>
        </div>
      </div>
    </footer>
  );
}
