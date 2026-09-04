import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="relative border-t border-border py-8">
      <Container className="flex flex-wrap items-center justify-between gap-4">
        <span className="text-sm text-text-secondary">Dhruv Sonani</span>
        <span className="font-mono text-xs text-text-tertiary">
          © {new Date().getFullYear()} — built with React &amp; Vite.
        </span>
      </Container>
    </footer>
  );
}
