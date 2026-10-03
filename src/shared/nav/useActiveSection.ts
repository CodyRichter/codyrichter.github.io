"use client";

import { useEffect, useState } from "react";
import { SECTIONS } from "@/sections";

const NAV_HEIGHT_PX = 56;

/**
 * The section currently "under" the top nav: the last one whose top edge has
 * scrolled above a line 30% down the viewport. Position-based (not
 * visibility-based) so tall sections and short ones both work, and scrolling
 * back up updates correctly.
 */
export function useActiveSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    let frame = 0;

    const compute = () => {
      frame = 0;
      const line = NAV_HEIGHT_PX + window.innerHeight * 0.3;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      let current = 0;
      if (atBottom) {
        current = SECTIONS.length - 1;
      } else {
        for (let i = 1; i < SECTIONS.length; i++) {
          const el = document.getElementById(`section-${i}`);
          if (el && el.getBoundingClientRect().top <= line) current = i;
        }
      }
      setActive(current);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return active;
}
