import { ArrowDown, ArrowRight, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { scrollToId } from "@/lib/scroll";
import { StatCounter } from "@/components/ui/StatCounter";

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[100svh] flex-col px-6 pb-6 pt-20 md:px-10">
      <div className="mx-auto my-auto w-full max-w-4xl">
        <div
          className="animate-fade-up font-mono text-xs uppercase tracking-[0.2em] text-text-tertiary"
          style={{ animationDelay: "0ms" }}
        >
          Senior Software Engineer — Indira IVF Group
        </div>

        <h1
          className="animate-fade-up mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-text sm:text-5xl md:text-6xl"
          style={{ animationDelay: "90ms" }}
        >
          Dhruv Sonani
        </h1>

        <p
          className="animate-fade-up mt-4 max-w-2xl text-balance text-lg font-medium leading-snug text-text-secondary sm:text-xl md:text-2xl"
          style={{ animationDelay: "170ms" }}
        >
          Building enterprise systems and <span className="text-accent-soft">AI agents</span> that
          connect language models to real business data.
        </p>

        <p
          className="animate-fade-up mt-4 max-w-xl text-sm leading-relaxed text-text-secondary sm:text-base"
          style={{ animationDelay: "250ms" }}
        >
          {profile.abstract}
        </p>

        <div className="animate-fade-up mt-7 flex flex-wrap items-center gap-4" style={{ animationDelay: "330ms" }}>
          <button
            onClick={() => scrollToId("experience")}
            className="group inline-flex items-center gap-2 rounded-md bg-text px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
          >
            See the work
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </button>
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2 rounded-md border border-border-strong px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent/50 hover:text-accent-soft"
          >
            <Mail size={16} />
            Get in touch
          </a>
        </div>

        <dl
          className="animate-fade-up mt-8 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-5"
          style={{ animationDelay: "420ms" }}
        >
          <div>
            <dt className="font-mono text-xs uppercase tracking-wider text-text-tertiary">Experience</dt>
            <dd className="mt-1 text-xl font-semibold text-text sm:text-2xl">
              <StatCounter target={3} suffix="+" />
              <span className="ml-1 text-sm font-normal text-text-tertiary">yrs</span>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-wider text-text-tertiary">Teams</dt>
            <dd className="mt-1 text-xl font-semibold text-text sm:text-2xl">
              <StatCounter target={3} />
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-wider text-text-tertiary">Papers</dt>
            <dd className="mt-1 text-xl font-semibold text-text sm:text-2xl">
              <StatCounter target={profile.publishedPapers} />
            </dd>
          </div>
        </dl>
      </div>

      <button
        onClick={() => scrollToId("experience")}
        aria-label="Scroll to next section"
        className="animate-fade-up mx-auto mt-6 hidden shrink-0 flex-col items-center gap-2 text-text-tertiary transition-colors hover:text-text-secondary sm:flex"
        style={{ animationDelay: "550ms" }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown size={14} />
      </button>
    </section>
  );
}
