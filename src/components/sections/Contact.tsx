import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionMark } from "@/components/ui/SectionMark";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-border py-24 md:py-32">
      <Container className="max-w-3xl">
        <SectionMark index="06" label="Contact" />

        <Reveal delay={0.08} className="mt-6">
          <h2 className="max-w-xl text-balance text-3xl font-semibold leading-tight text-text sm:text-4xl md:text-5xl">
            Open to senior engineering roles and{" "}
            <span className="text-accent-soft">AI-systems</span> collaborations.
          </h2>
        </Reveal>

        <Reveal delay={0.14} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center justify-between rounded-xl border border-border-strong bg-bg-elevated/40 px-5 py-4 transition-colors hover:border-accent/50"
          >
            <span className="flex items-center gap-2.5 text-sm text-text">
              <Mail size={15} className="text-accent" />
              Email
            </span>
            <ArrowUpRight size={14} className="text-text-tertiary transition-colors group-hover:text-accent" />
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s+/g, "")}`}
            className="group flex items-center justify-between rounded-xl border border-border-strong bg-bg-elevated/40 px-5 py-4 transition-colors hover:border-accent/50"
          >
            <span className="flex items-center gap-2.5 text-sm text-text">
              <Phone size={15} className="text-accent" />
              Call
            </span>
            <ArrowUpRight size={14} className="text-text-tertiary transition-colors group-hover:text-accent" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-xl border border-border-strong bg-bg-elevated/40 px-5 py-4 transition-colors hover:border-accent/50"
          >
            <span className="flex items-center gap-2.5 text-sm text-text">
              <LinkedInIcon size={15} />
              LinkedIn
            </span>
            <ArrowUpRight size={14} className="text-text-tertiary transition-colors group-hover:text-accent" />
          </a>
          <div className="flex items-center justify-between rounded-xl border border-border-strong bg-bg-elevated/40 px-5 py-4">
            <span className="flex items-center gap-2.5 text-sm text-text">
              <MapPin size={15} className="text-accent" />
              {profile.location}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 border-t border-border pt-6 font-mono text-sm text-text-secondary">
          {profile.email} &nbsp;·&nbsp; {profile.phone}
        </Reveal>
      </Container>
    </section>
  );
}
