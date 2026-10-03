"use client";

import { useEffect, useState } from "react";

/** True once the page has scrolled beyond (most of) the hero. */
export function usePastHero() {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const update = () => setPast(window.scrollY > window.innerHeight * 0.85);
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
