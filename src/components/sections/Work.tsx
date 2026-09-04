import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Container } from "@/components/ui/Container";
import { SectionMark } from "@/components/ui/SectionMark";
import { Reveal } from "@/components/ui/Reveal";
import { WorkPanel } from "./WorkPanel";

function WorkHeader() {
  return (
    <Container>
      <SectionMark index="02" label="Selected Work" />
      <Reveal delay={0.06} className="mt-6 max-w-2xl">
        <h2 className="text-3xl font-semibold text-text sm:text-4xl">
          Four systems, four stories to tell.
        </h2>
      </Reveal>
      <Reveal delay={0.1} className="mt-4 max-w-xl">
        <p className="text-base text-text-secondary sm:text-lg">
          This section is ready for real project write-ups — swap in details as they're cleared to
          share.
        </p>
      </Reveal>
    </Container>
  );
}

function StaticWorkList() {
  return (
    <section id="work" className="relative border-t border-border py-24 md:py-32">
      <WorkHeader />
      <div className="mt-14 space-y-14">
        {projects.map((project) => (
          <Reveal key={project.index} as="div">
            <Container className="border-t border-border pt-8">
              <span className="font-mono text-sm text-text-tertiary">{project.index} / 04</span>
              <h3 className="mt-4 text-2xl font-semibold text-text sm:text-3xl">{project.title}</h3>
              <p className="mt-2 text-base text-text-secondary">{project.tagline}</p>
              <ul className="mt-5 space-y-2.5">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border-strong px-2.5 py-1 font-mono text-xs text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Container>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ScrollDrivenWork() {
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const track = trackRef.current;
      const pin = pinRef.current;
      if (!track || !pin) return;

      const getDistance = () => track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: pin,
          start: "top top",
          end: () => "+=" + getDistance(),
          scrub: 0.6,
          pin: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            setActiveIndex(Math.min(projects.length - 1, Math.round(self.progress * (projects.length - 1))));
          },
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    // Web fonts (and other async content) can finish loading after ScrollTrigger
    // has already measured the page, leaving pin start/end positions stale — a
    // classic GSAP + web-font gotcha. Recompute once everything has settled.
    let cancelled = false;
    document.fonts.ready.then(() => {
      if (!cancelled) ScrollTrigger.refresh();
    });
    const settle = window.setTimeout(() => {
      if (!cancelled) ScrollTrigger.refresh();
    }, 500);

    return () => {
      cancelled = true;
      window.clearTimeout(settle);
      mm.revert();
    };
  }, []);

  return (
    <section id="work" className="relative border-t border-border">
      <div className="pt-24 md:pt-32">
        <WorkHeader />

        <div className="mt-12 hidden items-center gap-2 px-6 md:flex md:px-10">
          {projects.map((project, i) => (
            <span
              key={project.index}
              className={`h-[3px] rounded-full transition-all duration-500 ${
                i === activeIndex ? "w-8 bg-accent" : "w-4 bg-border-strong"
              }`}
            />
          ))}
        </div>

        <p className="mt-8 px-6 font-mono text-xs uppercase tracking-[0.2em] text-text-tertiary md:hidden">
          Swipe to explore →
        </p>
      </div>

      <div ref={pinRef} className="relative mt-8 h-[70vh] min-h-[560px] overflow-hidden md:h-screen md:min-h-0">
        <div
          ref={trackRef}
          className="flex h-full snap-x snap-mandatory gap-0 overflow-x-auto md:w-max md:snap-none md:overflow-visible"
        >
          {projects.map((project, i) => (
            <WorkPanel key={project.index} project={project} isActive={i === activeIndex} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Work() {
  const reducedMotion = useReducedMotion();
  return reducedMotion ? <StaticWorkList /> : <ScrollDrivenWork />;
}
