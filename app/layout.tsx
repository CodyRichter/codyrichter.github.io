import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@/styles/index.css";

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";

import type { Metadata, Viewport } from "next";
import Metrics from "@/shared/Metrics";
import { Notifications } from "@mantine/notifications";
import { theme } from "@/theme";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-plex-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-plex-mono",
});

const SITE_URL = "https://cody.richter.codes";
const TITLE = "Cody Richter Codes";
const DESCRIPTION =
  "Cody Richter codes, develops, and more. This is my personal website with a bit about me, showcases of work I've done, and methods of contact.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Cody",
    "Richter",
    "Cody Richter",
    "Cody Richter Codes",
    "Blog",
    "Website",
    "Personal Site",
  ],
  authors: [{ name: "Cody Richter" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: TITLE,
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#232741",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexMono.variable}`}
      {...mantineHtmlProps}
    >
      <head>
        <ColorSchemeScript forceColorScheme="light" />
      </head>
      <body>
        <MantineProvider theme={theme} forceColorScheme="light">
          <Notifications position="top-center" zIndex={2077} limit={3} />
          <Metrics />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
