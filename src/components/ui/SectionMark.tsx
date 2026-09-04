import { Reveal } from "./Reveal";

export function SectionMark({ index, label }: { index: string; label: string }) {
  return (
    <Reveal>
      <div className="flex items-center gap-3 font-mono text-xs">
        <span className="text-text-tertiary">{"//"}</span>
        <span className="text-accent">{index}</span>
        <span className="uppercase tracking-[0.25em] text-text-tertiary">{label}</span>
        <span className="h-px flex-1 bg-border" />
      </div>
    </Reveal>
  );
}
