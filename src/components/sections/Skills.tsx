import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { skillGroups } from "@/data/skills";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionMark } from "@/components/ui/SectionMark";

export function Skills() {
  const [active, setActive] = useState(0);
  const group = skillGroups[active];

  return (
    <section id="skills" className="relative border-t border-border py-24 md:py-32">
      <Container>
        <SectionMark index="04" label="Skills" />
        <Reveal delay={0.06} className="mt-6 max-w-2xl">
          <h2 className="text-3xl font-semibold text-text sm:text-4xl">The working toolkit.</h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-2">
          {skillGroups.map((g, i) => (
            <button
              key={g.label}
              onClick={() => setActive(i)}
              className={cn(
                "rounded-md border px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.08em] transition-colors duration-200",
                i === active
                  ? "border-accent/40 bg-accent/[0.06] text-accent-soft"
                  : "border-border-strong text-text-tertiary hover:text-text-secondary"
              )}
            >
              {g.label}
            </button>
          ))}
        </Reveal>

        <div className="mt-6 min-h-[140px] rounded-lg border border-border-strong bg-bg-elevated/40 p-6 sm:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-2.5"
            >
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border-strong bg-bg-elevated-2 px-3.5 py-1.5 text-sm text-text"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
