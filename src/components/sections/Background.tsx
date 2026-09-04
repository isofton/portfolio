import { Award, GraduationCap, Trophy } from "lucide-react";
import { certifications } from "@/data/certifications";
import { education } from "@/data/education";
import { extracurricular } from "@/data/extracurricular";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionMark } from "@/components/ui/SectionMark";

export function Background() {
  return (
    <section id="background" className="relative border-t border-border py-24 md:py-32">
      <Container>
        <SectionMark index="05" label="Background" />
        <Reveal delay={0.06} className="mt-6 max-w-2xl">
          <h2 className="text-3xl font-semibold text-text sm:text-4xl">
            Education &amp; beyond the role.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal delay={0.1} className="rounded-lg border border-border-strong bg-bg-elevated/40 p-6 sm:p-8">
            <div className="flex items-center gap-2.5 text-accent">
              <GraduationCap size={17} />
              <span className="font-mono text-xs uppercase tracking-[0.15em]">Education</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-text">{education.school}</h3>
            <p className="mt-1 text-sm text-text-secondary">
              {education.degree}{" "}
              <span className="text-text-tertiary">— affiliated to {education.affiliation}</span>
            </p>
            <p className="mt-1 font-mono text-xs text-text-tertiary">{education.period}</p>

            <div className="mt-8 flex items-center gap-2.5 text-accent">
              <Award size={17} />
              <span className="font-mono text-xs uppercase tracking-[0.15em]">Certifications</span>
            </div>
            <ul className="mt-4 space-y-2.5">
              {certifications.map((cert) => (
                <li
                  key={cert.title}
                  className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5"
                >
                  <span className="text-sm text-text-secondary">
                    {cert.title} <span className="text-text-tertiary">— {cert.issuer}</span>
                  </span>
                  <span className="font-mono text-xs text-text-tertiary">{cert.period}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.16} className="rounded-lg border border-border-strong bg-bg-elevated/40 p-6 sm:p-8">
            <div className="flex items-center gap-2.5 text-accent">
              <Trophy size={17} />
              <span className="font-mono text-xs uppercase tracking-[0.15em]">Extracurricular</span>
            </div>
            <ul className="mt-5 space-y-6">
              {extracurricular.map((item) => (
                <li key={item.title}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                    <h4 className="text-sm font-semibold text-text">{item.title}</h4>
                    <span className="font-mono text-xs text-text-tertiary">{item.period}</span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
