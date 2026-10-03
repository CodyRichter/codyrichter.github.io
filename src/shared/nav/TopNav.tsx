"use client";

import { Burger, Drawer, Stack } from "@mantine/core";
import { SECTIONS, type SectionName, sectionIndex } from "@/sections";

import classes from "./TopNav.module.css";
import { useDisclosure } from "@mantine/hooks";
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
  const [opened, { toggle, close }] = useDisclosure(false);

  const go = (section: SectionName) => {
    close();
    // Wait for the drawer to release its scroll lock before scrolling.
    setTimeout(() => scrollToSectionByName(section), opened ? 250 : 0);
  };

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
        go(section);
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
            className={`${classes.brand} mono`}
            data-visible={pastHero || undefined}
            tabIndex={pastHero ? 0 : -1}
            onClick={(e) => {
              e.preventDefault();
              go(SECTIONS[0]);
            }}
          >
            Cody Richter
          </a>

          <nav className={classes.links} aria-label="Primary">
            {LINKS.map(({ section, label }) => renderLink(section, label))}
          </nav>

          <Burger
            className={classes.burger}
            opened={opened}
            onClick={toggle}
            color={pastHero ? "var(--mantine-color-gray-9)" : "white"}
            aria-label={
              opened ? "Close navigation menu" : "Open navigation menu"
            }
          />
        </div>
      </header>

      <Drawer
        opened={opened}
        onClose={close}
        position="top"
        size="auto"
        title="Menu"
        classNames={{ title: "mono" }}
      >
        <Stack gap={0} component="nav" aria-label="Mobile">
          {LINKS.map(({ section, label }) => (
            <a
              key={section}
              href={`#section-${sectionIndex(section)}`}
              className={classes.drawerLink}
              data-active={activeSection === sectionIndex(section) || undefined}
              onClick={(e) => {
                e.preventDefault();
                go(section);
              }}
            >
              {label}
            </a>
          ))}
        </Stack>
      </Drawer>
    </>
  );
}
