"use client";

import { SECTIONS, type SectionName, sectionIndex } from "@/sections";
import { useCallback } from "react";
import { useMediaQuery, useReducedMotion } from "@mantine/hooks";

import BackToTopButton from "./nav/BackToTopButton";
import TopNav from "./nav/TopNav";
import { ParticlesProvider } from "@tsparticles/react";
import dynamic from "next/dynamic";
import { loadLinksPreset } from "@tsparticles/preset-links";
import { useActiveSection } from "./nav/useActiveSection";

// Client-only, and loaded after the first media-query check so it never
// mounts during hydration.
const BackgroundParticles = dynamic(() => import("./BackgroundParticles"), {
  ssr: false,
});

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const activeSection = useActiveSection();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const reduceMotion = useReducedMotion();

  const scrollToSectionById = useCallback(
    (id: number) => {
      const target = id % SECTIONS.length;
      const behavior = reduceMotion ? "auto" : "smooth";
      if (target === 0) {
        window.scrollTo({ top: 0, behavior });
      } else {
        document
          .getElementById(`section-${target}`)
          ?.scrollIntoView({ behavior });
      }
    },
    [reduceMotion],
  );

  const scrollToSectionByName = (name: SectionName) =>
    scrollToSectionById(sectionIndex(name));

  // `isMobile` is undefined until the first client-side check, so nothing
  // heavy mounts during hydration.
  const showParticles = isMobile !== undefined;

  return (
    <>
      <TopNav
        activeSection={activeSection}
        scrollToSectionByName={scrollToSectionByName}
      />

      <BackToTopButton onClick={() => scrollToSectionById(0)} />

      {/* `children` is a stable server-rendered element, so section changes
          re-render only the nav and FAB above, not the page content. */}
      {children}

      {showParticles && (
        <ParticlesProvider init={loadLinksPreset}>
          <BackgroundParticles mobile={isMobile} calm={reduceMotion} />
        </ParticlesProvider>
      )}
    </>
  );
}
