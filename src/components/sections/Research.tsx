import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, FileText, FlaskConical, Wrench } from "lucide-react";
import { useState } from "react";
import { research } from "@/data/research";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionMark } from "@/components/ui/SectionMark";

const kindIcon = {
  "Published paper": FileText,
  "Applied research": FlaskConical,
  "Applied engineering": Wrench,
} as const;

export function Research() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const entry = research[index];
  const Icon = kindIcon[entry.kind];

  const go = (next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex((next + research.length) % research.length);
  };

  return (
    <section id="research" className="relative border-t border-border py-24 md:py-32">
      <Container>
        <SectionMark index="03" label="Research &amp; Projects" />
        <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
          <Reveal delay={0.06} className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-text sm:text-4xl">
              Three problems, worked the way a paper works.
            </h2>
          </Reveal>

          <div className="flex items-center gap-2">
            <button
              onClick={() => go(index - 1)}
              aria-label="Previous"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border-strong text-text-secondary transition-colors hover:border-accent/40 hover:text-accent-soft"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => go(index + 1)}
              aria-label="Next"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border-strong text-text-secondary transition-colors hover:border-accent/40 hover:text-accent-soft"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2">
          {research.map((r, i) => (
            <button
              key={r.index}
              onClick={() => go(i)}
              aria-label={`Show research ${i + 1}`}
              className={cn(
                "h-[3px] rounded-full transition-all duration-500",
                i === index ? "w-8 bg-accent" : "w-4 bg-border-strong hover:bg-text-tertiary"
              )}
            />
          ))}
        </div>

        <div className="relative mt-8 min-h-[500px] overflow-hidden rounded-lg border border-border-strong bg-bg-elevated/40 p-6 sm:p-10">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={entry.index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -30 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="font-mono text-sm text-text-tertiary">
                  {entry.index} / 0{research.length}
                </span>
                <span className="flex items-center gap-1.5 rounded-md border border-border-strong px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-text-secondary">
                  <Icon size={12} />
                  {entry.kind}
                </span>
              </div>

              <h3 className="mt-6 max-w-2xl text-2xl font-semibold leading-snug text-text sm:text-3xl">
                {entry.title}
              </h3>

              <dl className="mt-8 grid gap-6 sm:grid-cols-3">
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-tertiary">
                    Problem
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-text-secondary">{entry.problem}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-tertiary">
                    Approach
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-text-secondary">{entry.approach}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
                    Result
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-text">{entry.result}</dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-wrap gap-2">
                {entry.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border-strong bg-bg-elevated-2 px-2.5 py-1 font-mono text-xs text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {entry.citation ? (
                <p className="mt-6 border-t border-border pt-4 font-mono text-xs leading-relaxed text-text-tertiary">
                  {entry.citation}
                </p>
              ) : null}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
