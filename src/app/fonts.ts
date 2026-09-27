// fonts.ts for the seed
//
// bin/stitch-brand-from-facts.mjs --css-out overwrites this file per client,
// from the style named by --style (or the onboarding record's `style` field,
// or "wavy" if neither names one). This copy is the seed's own default, built
// by hand from styles/wavy/style.json so the seed still builds with no client
// wired up.
//
// style: wavy
// display: Space Grotesk (Space_Grotesk), body: Inter (Inter)

import { Space_Grotesk, Inter } from "next/font/google";

export const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

export const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body-loaded",
  display: "swap",
});
