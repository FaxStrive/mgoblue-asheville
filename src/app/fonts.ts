// fonts.ts for Pure Home 365 Asheville
// Style: corporate-professional
// Display: Inter (headings), Body: Inter (body)

import { Inter } from "next/font/google";

export const display = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body-loaded",
  display: "swap",
});
