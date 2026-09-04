import { ScrollTrigger } from "./gsap";
import { withFadeJump } from "./pageTransition";

const HEADER_OFFSET = 64;

// Jumps straight to a section — no animated scroll through the content in
// between, which is what made nav-jumps flash past every section (and the
// pinned Work section's 4 panels) at high speed. The jump itself is instant;
// withFadeJump masks it behind a brief fade so it still reads as a
// deliberate transition rather than a jarring hard cut. ScrollTrigger.update
// resyncs the Work section's pinned/scrubbed state immediately, so jumping
// across it never leaves it in a stale visual state.
export function scrollToId(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  withFadeJump(() => {
    const targetY = Math.max(
      0,
      target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
    );
    window.scrollTo(0, targetY);
    ScrollTrigger.update();
  });
}
