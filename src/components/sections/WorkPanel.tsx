import type { Project } from "@/data/projects";

export function WorkPanel({ project, isActive = true }: { project: Project; isActive?: boolean }) {
  return (
    <article
      className="work-panel relative flex h-full w-[88vw] shrink-0 snap-center flex-col overflow-y-auto border-r border-border px-6 py-8 transition-opacity duration-500 md:w-screen md:px-0 md:py-12"
      style={{ opacity: isActive ? 1 : 0.4 }}
    >
      <div className="mx-auto my-auto w-full max-w-3xl px-6 md:px-10">
        <span className="font-mono text-sm text-text-tertiary">{project.index} / 04</span>

        <h3 className="mt-5 text-2xl font-semibold leading-tight text-text sm:text-3xl md:text-4xl">
          {project.title}
        </h3>
        <p className="mt-2.5 text-base text-text-secondary sm:text-lg">{project.tagline}</p>

        <ul className="mt-6 space-y-2.5">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border-strong px-2.5 py-1 font-mono text-xs text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
