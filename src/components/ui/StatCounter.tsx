import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function StatCounter({
  target,
  suffix = "",
  duration = 1200,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const reducedMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;

    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    };

    raf = requestAnimationFrame(tick);
    // Safety net: guarantee the final value lands even if rAF stalls.
    const settle = window.setTimeout(() => setValue(target), duration + 400);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(settle);
    };
  }, [target, duration, reducedMotion]);

  return (
    <span>
      {reducedMotion ? target : value}
      {suffix}
    </span>
  );
}
