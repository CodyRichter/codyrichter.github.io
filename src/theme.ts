import { createTheme } from "@mantine/core";

// Mantine 7+ changed a few defaults from what this site was designed against;
// restore them so the look stays the same.
export const theme = createTheme({
  // Mantine 6 used `sm` (4px) by default; Mantine 9 uses `md` (8px).
  defaultRadius: "sm",
  // Mantine 6 used a single 1.55 line height for all text sizes.
  lineHeights: { xs: "1.55", sm: "1.55", md: "1.55", lg: "1.55", xl: "1.55" },
});
