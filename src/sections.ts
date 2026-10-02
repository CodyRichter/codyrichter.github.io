/** Page sections in scroll order. The array index doubles as the `section-<n>` element id. */
export const SECTIONS = [
  "home",
  "about",
  "projects",
  "timeline",
  "contact",
] as const;

export type SectionName = (typeof SECTIONS)[number];

export const sectionIndex = (name: SectionName): number =>
  SECTIONS.indexOf(name);
