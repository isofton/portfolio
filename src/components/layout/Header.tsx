import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { scrollToId } from "@/lib/scroll";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "research", label: "Research" },
  { id: "skills", label: "Skills" },
  { id: "background", label: "Background" },
  { id: "contact", label: "Contact" },
];

const sectionIds = ["hero", ...navItems.map((item) => item.id)];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const go = (id: string) => {
    setMobileOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled ? "border-border bg-bg/90 backdrop-blur-xl" : "border-transparent"
      )}
    >
      <nav className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-6 md:px-10">
        <button
          onClick={() => go("hero")}
          className="flex items-center gap-2.5 justify-self-start"
          aria-label="Back to top"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-border-strong text-[13px] font-semibold text-text">
            DS
          </span>
          <span className="hidden text-sm text-text-secondary sm:inline">Dhruv Sonani</span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => go(item.id)}
                  className={cn(
                    "relative px-4 py-2 text-sm transition-colors duration-200",
                    isActive ? "text-text" : "text-text-tertiary hover:text-text-secondary"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-4 -bottom-px h-px bg-accent transition-opacity duration-300",
                      isActive ? "opacity-100" : "opacity-0"
                    )}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center justify-self-end rounded-md border border-border-strong text-text md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>

      <div
        className={cn(
          "grid overflow-hidden border-b border-border bg-bg/95 backdrop-blur-xl transition-[grid-template-rows] duration-300 ease-in-out md:hidden",
          mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-b-0"
        )}
      >
        <ul className="flex min-h-0 flex-col px-6 py-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => go(item.id)}
                className={cn(
                  "block w-full py-3 text-left text-base",
                  activeId === item.id ? "text-text" : "text-text-tertiary"
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
