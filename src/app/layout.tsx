import type { Metadata } from "next";
import { display, body } from "./fonts";
import "./globals.css";
import "./brand.css";

/* The house look loads two faces: a display face for headings and a plain sans
   for body. ./fonts.ts names which families: the seed's own default there, or
   the client's style faces once bin/stitch-brand-from-facts.mjs --css-out has
   overwritten it. The scale and weights in globals.css do not change with the
   face, because the scale is what the house-look gate measures. */

export const metadata: Metadata = {
  title: "Client Site Seed",
  description: "Placeholder metadata. The build stage replaces this with the client's own copy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
