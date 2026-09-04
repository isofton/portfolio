let overlay: HTMLDivElement | null = null;

export function setTransitionOverlay(el: HTMLDivElement | null) {
  overlay = el;
}

const FADE_MS = 200;
const SETTLE_MS = 50;

// Wraps an instant, un-animated jump (e.g. window.scrollTo with no smooth
// behavior) in a brief fade so it reads as a deliberate transition instead
// of a jarring hard cut — without ever animating *through* the content in
// between, which is what made nav-jumps flash past every section (and the
// pinned Work section's panels) at high speed.
export function withFadeJump(jump: () => void) {
  if (!overlay) {
    jump();
    return;
  }

  overlay.style.pointerEvents = "auto";
  overlay.style.opacity = "1";

  window.setTimeout(() => {
    jump();
    window.setTimeout(() => {
      if (!overlay) return;
      overlay.style.opacity = "0";
      overlay.style.pointerEvents = "none";
    }, SETTLE_MS);
  }, FADE_MS);
}
