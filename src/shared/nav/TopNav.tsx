"use client";

import { SECTIONS, type SectionName, sectionIndex } from "@/sections";

import Image from "next/image";
import classes from "./TopNav.module.css";
import { usePastHero } from "./usePastHero";

const LINKS: { section: SectionName; label: string }[] = [
  { section: "about", label: "About" },
  { section: "projects", label: "Projects" },
  { section: "timeline", label: "Experience" },
  { section: "contact", label: "Contact" },
];

interface Props {
  activeSection: number;
  scrollToSectionByName: (name: SectionName) => void;
}

/** Transparent over the hero, solid once the page scrolls past it. */
export default function TopNav({
  activeSection,
  scrollToSectionByName,
}: Props) {
  const pastHero = usePastHero();
  const renderLink = (section: SectionName, label: string) => (
    <a
      key={section}
      href={`#section-${sectionIndex(section)}`}
      className={classes.link}
      data-active={activeSection === sectionIndex(section) || undefined}
      aria-current={
        activeSection === sectionIndex(section) ? "location" : undefined
      }
      onClick={(e) => {
        e.preventDefault();
        scrollToSectionByName(section);
      }}
    >
      {label}
    </a>
  );

  return (
    <>
      <header className={classes.nav} data-solid={pastHero || undefined}>
        <div className={classes.inner}>
          <a
            href="#"
            className={classes.home}
            data-visible={pastHero || undefined}
            tabIndex={pastHero ? 0 : -1}
            aria-label="Back to top"
            onClick={(e) => {
              e.preventDefault();
              scrollToSectionByName(SECTIONS[0]);
            }}
          >
            <Image
              className={classes.headshot}
              src="/headshot.webp"
              alt=""
              width={72}
              height={72}
              loading="eager"
            />
            <span className={`${classes.brand} mono`}>Cody Richter</span>
          </a>

          <nav className={classes.links} aria-label="Primary">
            {LINKS.map(({ section, label }) => renderLink(section, label))}
          </nav>
        </div>
      </header>
    </>
  );
}
