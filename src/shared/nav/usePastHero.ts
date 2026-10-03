"use client";

import { useEffect, useState } from "react";

// Go solid just before the white content reaches the bar (nav is 3.5rem tall).
const SOLID_BEFORE_PX = 56 + 16;

/**
 * True once the hero has (almost) scrolled out from under the nav. Measures the
 * hero itself rather than a fraction of `innerHeight`, which on iOS Safari
 * differs from the hero's `svh` height as the toolbar collapses.
 */
export function usePastHero() {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("section-0");
    const update = () => {
      if (!hero) return;
      setPast(hero.getBoundingClientRect().bottom <= SOLID_BEFORE_PX);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return past;
}
