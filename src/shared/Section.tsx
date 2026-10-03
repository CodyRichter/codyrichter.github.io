"use client";

import { Container, Title } from "@mantine/core";

import classes from "./Section.module.css";
import { useSectionInView } from "./SiteChrome";

interface Props {
  /** Index into `SECTIONS`; becomes the `section-<n>` element id. */
  index: number;
  /** Visible fraction that marks this section as the active one. */
  threshold: number;
  title: string;
  /** Draws a hairline above the section (every section after the first). */
  divided?: boolean;
  /** Set on the section directly below the hero backdrop. */
  afterHero?: boolean;
  /** Container max-width; defaults to the standard content column. */
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

/** Shared frame for the About / Projects / Experience / Contact sections. */
export default function Section({
  index,
  threshold,
  title,
  divided,
  afterHero,
  size = "md",
  children,
}: Props) {
  const { ref } = useSectionInView(index, threshold);

  return (
    <section
      id={`section-${index}`}
      ref={ref}
      className={[
        classes.section,
        divided && classes.divided,
        afterHero && classes.afterHero,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-labelledby={`section-${index}-title`}
    >
      <Container size={size} className={classes.container}>
        <Title
          order={2}
          size="h1"
          ta="center"
          id={`section-${index}-title`}
          className={classes.title}
        >
          {title}
        </Title>
        {children}
      </Container>
    </section>
  );
}
