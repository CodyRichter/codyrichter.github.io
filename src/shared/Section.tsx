"use client";

import { Container, Title } from "@mantine/core";

import classes from "./Section.module.css";

interface Props {
  /** Index into `SECTIONS`; becomes the `section-<n>` element id. */
  index: number;
  title: string;
  /** Draws a hairline above the section (every section after the first). */
  divided?: boolean;
  /** Container max-width; defaults to the standard content column. */
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

/** Shared frame for the About / Projects / Experience / Contact sections. */
export default function Section({
  index,
  title,
  divided,
  size = "md",
  children,
}: Props) {
  return (
    <section
      id={`section-${index}`}
      className={[classes.section, divided && classes.divided]
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
