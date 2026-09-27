import type { Metadata } from "next";
import { display, body } from "./fonts";
import "./globals.css";
import "./brand.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import StickyCallBar from "@/components/motion/StickyCallBar";
import { facts } from "@/lib/facts";

export const metadata: Metadata = {
  title: {
    default: "Pure Home 365 | Water Filtration & Softener Systems in Asheville, NC",
    template: "%s | Pure Home 365 Asheville",
  },
  description:
    "Pure Home 365 provides custom water filtration, water softeners, and well water treatment for homes in Asheville, NC and within 80 miles. Local experts. BBB A Rating. $0 down financing available.",
  openGraph: {
    title: "Pure Home 365 | Water Filtration & Softener Systems in Asheville, NC",
    description:
      "Custom water filtration, water softeners, and well water treatment in Asheville, NC. Local company. BBB A Rating. $0 down available.",
    url: "https://purehome365.com/locations/asheville",
    siteName: "Pure Home 365 Asheville",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Header
          companyName={facts.companyName}
          logoSrc={facts.logoPath}
          logoAlt={`${facts.companyName} logo`}
          navLinks={[
            { href: "/about", label: "About" },
            { href: "/service-areas", label: "Service Areas" },
            { href: "/faq", label: "FAQ" },
            { href: "/contact", label: "Contact" },
          ]}
          servicesLabel="Services"
          servicesLinks={facts.services.map((s) => ({
            href: `/services/${s.slug}`,
            label: s.name,
          }))}
          phone={facts.phone}
          phoneHref={facts.phoneHref}
          ctaLabel="Get a Free Quote"
          ctaHref="/contact"
        />
        {children}
        <Footer
          companyName={facts.companyName}
          address={`${facts.city}, ${facts.state}`}
          phone={facts.phone}
          phoneHref={facts.phoneHref}
          email={facts.email}
          navLinks={[
            { href: "/", label: "Home" },
            { href: "/services/water-filtration", label: "Water Filtration" },
            { href: "/services/water-softeners", label: "Water Softeners" },
            { href: "/services/water-filters", label: "Water Filters" },
            { href: "/services/well-water", label: "Well Water Treatment" },
            { href: "/about", label: "About" },
            { href: "/service-areas", label: "Service Areas" },
            { href: "/faq", label: "FAQ" },
            { href: "/contact", label: "Contact" },
          ]}
          legalLine={`© ${new Date().getFullYear()} Pure Home 365. Serving Asheville, NC and communities within 80 miles. BBB Accredited Business, A Rating.`}
          ctaLabel="Get a Free Quote"
          ctaHref="/contact"
        />
        <StickyCallBar phone={facts.phone} quoteHref="/contact" quoteLabel="Get a Free Quote" />
      </body>
    </html>
  );
}
