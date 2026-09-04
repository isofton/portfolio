import { AnimatePresence, motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useState } from "react";
import { experience } from "@/data/experience";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SectionMark } from "@/components/ui/SectionMark";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = experience[activeIndex];

  return (
    <section id="experience" className="relative border-t border-border py-24 md:py-32">
      <Container>
        <SectionMark index="01" label="Experience" />
        <Reveal delay={0.06} className="mt-6 max-w-2xl">
          <h2 className="text-3xl font-semibold text-text sm:text-4xl">
            Three years, three teams.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-[240px_1fr] lg:gap-8">
          <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {experience.map((entry, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={entry.company}
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "shrink-0 rounded-md border px-4 py-3 text-left transition-colors duration-200 lg:shrink",
                    isActive ? "border-accent/40 bg-accent/[0.06]" : "border-border hover:border-border-strong"
                  )}
                >
                  <span className="block font-mono text-[10px] uppercase tracking-[0.12em] text-text-tertiary">
                    {entry.roles[0].period}
                  </span>
                  <span
                    className={cn(
                      "mt-1 block whitespace-nowrap text-sm font-medium lg:whitespace-normal",
                      isActive ? "text-text" : "text-text-secondary"
                    )}
                  >
                    {entry.company}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="min-h-[380px] rounded-lg border border-border-strong bg-bg-elevated/40 p-6 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.company}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold text-text">{active.company}</h3>
                  <span className="flex items-center gap-1.5 font-mono text-xs text-text-tertiary">
                    <MapPin size={13} />
                    {active.location}
                  </span>
                </div>

                {active.roles.map((role) => (
                  <div key={role.title} className="mt-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h4 className="text-base font-medium text-text">{role.title}</h4>
                      <span className="font-mono text-xs uppercase tracking-[0.08em] text-accent">
                        {role.period}
                      </span>
                    </div>
                    {role.points.length > 0 ? (
                      <ul className="mt-4 space-y-2.5">
                        {role.points.map((point) => (
                          <li key={point} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-tertiary" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-3 text-sm text-text-tertiary">
                        Early backend role — details not published.
                      </p>
                    )}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
