"use client";

import { SECTIONS, type SectionName, sectionIndex } from "@/sections";
import { createContext, useCallback, useContext, useState } from "react";
import { useMediaQuery, useReducedMotion } from "@mantine/hooks";

import FloatingActionNavButton from "./nav/FloatingActionNavButton";
import FloatingSideNav from "./nav/FloatingSideNav";
import { ParticlesProvider } from "@tsparticles/react";
import dynamic from "next/dynamic";
import { loadLinksPreset } from "@tsparticles/preset-links";
import { useInView } from "react-intersection-observer";

// Loaded only on desktop; mobile never downloads the particle engine.
const BackgroundParticles = dynamic(() => import("./BackgroundParticles"), {
  ssr: false,
});

const SetActiveSectionContext = createContext<(section: number) => void>(
  () => {},
);

/** Marks the returned ref's element as the active section while it is in view. */
export function useSectionInView(section: number, threshold: number) {
  const setActiveSection = useContext(SetActiveSectionContext);
  return useInView({
    threshold,
    onChange: (inView) => inView && setActiveSection(section),
  });
}

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState(0);
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
  const showParticles = isMobile === false && !reduceMotion;

  return (
    <SetActiveSectionContext.Provider value={setActiveSection}>
      <div className="hero-backdrop" aria-hidden />

      <FloatingSideNav scrollToSectionByName={scrollToSectionByName} />

      <FloatingActionNavButton
        currentSectionId={activeSection}
        finalSectionId={SECTIONS.length - 1}
        scrollToNextSection={() => scrollToSectionById(activeSection + 1)}
      />

      {/* `children` is a stable server-rendered element, so section changes
          re-render only the nav and FAB above, not the page content. */}
      {children}

      {showParticles && (
        <ParticlesProvider init={loadLinksPreset}>
          <BackgroundParticles />
        </ParticlesProvider>
      )}
    </SetActiveSectionContext.Provider>
  );
}
