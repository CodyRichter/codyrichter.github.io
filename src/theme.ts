import { createTheme, type MantineColorsTuple } from "@mantine/core";

// Shades built around the hero navy (#232741, shade 8) so future steps can
// tie buttons, links, and accents back to the hero instead of using a
// different named color per element.
const navy: MantineColorsTuple = [
  "#eef0f8",
  "#d9dcea",
  "#b2b7d3",
  "#898fbb",
  "#656ca8",
  "#4d55a0",
  "#3f4694",
  "#313782",
  "#232741",
  "#191c30",
];

const MONO = 'var(--font-plex-mono), "IBM Plex Mono", monospace';
const SANS_FALLBACK =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

// Mantine 7+ changed a few defaults from what this site was designed against;
// restore them so the look stays the same.
export const theme = createTheme({
  colors: { navy },
  // Mantine 6 used `sm` (4px) by default; Mantine 9 uses `md` (8px).
  defaultRadius: "sm",
  // Mantine 6 used a single 1.55 line height for all text sizes.
  lineHeights: { xs: "1.55", sm: "1.55", md: "1.55", lg: "1.55", xl: "1.55" },
  fontFamily: `var(--font-plex-sans), "IBM Plex Sans", ${SANS_FALLBACK}`,
  fontFamilyMonospace: MONO,
  headings: { fontFamily: MONO },
});
