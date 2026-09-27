import type { Metadata } from "next";
import { facts } from "@/lib/facts";
import { systemImage } from "@/lib/systemImages";
import VideoHero from "@/components/sections/VideoHero";
import SystemsGrid from "@/components/sections/SystemsGrid";
import WhySystems from "@/components/sections/WhySystems";
import Process from "@/components/sections/Process";
import ClosingCta from "@/components/sections/ClosingCta";
import Divider from "@/components/sections/CurvedEdge";

export const metadata: Metadata = {
  title: "Water Treatment Services in Asheville, NC",
  description:
    "Pure Home 365 offers water filtration, water softeners, water filters, and well water treatment for homes in Asheville, NC and within 80 miles.",
};

export default function ServicesPage() {
  return (
    <main>
      <VideoHero
        variant="centered"
        eyebrow="Our Services"
        headline="Water treatment solutions for every home"
        subhead="We customize systems for city water and well water alike. Every recommendation starts with a free water test."
        posterSrc="/images/filter-system.jpg"
        posterAlt="Water filtration system"
        primaryCtaLabel="Get a Free Quote"
        primaryCtaHref="/contact"
      />

      <SystemsGrid
        eyebrow="What We Install"
        headline="Every system we carry"
        subhead="From whole-home filtration to under-sink reverse osmosis and well water treatment."
        tone="light"
        cardMedia="product"
        items={facts.services.map((s) => ({
          name: s.name,
          blurb: s.blurb,
          href: `/services/${s.slug}`,
          imageSrc: systemImage(s.slug),
          imageAlt: `${s.name} system`,
        }))}
      />

      <Divider into="alt" direction="down" />

      <WhySystems
        eyebrow="Why It Matters"
        headline="Your water source shapes the solution"
        tone="alt"
        variant="split-statement"
        reasons={[
          {
            title: "City water and well water are not the same problem",
            body: "Municipal water is treated at the plant but can still carry chlorine, disinfection byproducts, and pipe sediment by the time it reaches your tap. Well water skips the plant entirely and may carry iron, bacteria, hardness, or pH issues that need targeted treatment.",
          },
          {
            title: "A test takes 30 minutes",
            body: "We visit, test your water on-site, and show you the results before recommending anything. No guessing.",
          },
          {
            title: "You choose what fits your budget",
            body: "We carry systems at different price points and offer financing from $96/month with $0 down.",
          },
          {
            title: "Installation is typically one day",
            body: "Most systems are installed in a single visit. We verify performance before we leave.",
          },
        ]}
      />

      <Divider into="light" direction="up" />

      <Process
        eyebrow="From Test to Install"
        headline="How we work with you"
        tone="light"
        variant="steps"
        steps={[
          { title: "Schedule a free water test", description: "We come to your home, test your water, and explain exactly what we find." },
          { title: "Review your options", description: "We show you the systems that address your water issues and your budget." },
          { title: "Professional installation", description: "Our team handles the entire installation and leaves your home clean." },
          { title: "You are covered", description: "We stand behind our work and are available for service when you need us." },
        ]}
      />

      <Divider into="dark" direction="down" />

      <ClosingCta
        variant="band"
        headline="Start with a free water test"
        subhead="Know what is in your water before choosing a system. Schedule at no charge."
        primaryCtaLabel="Schedule Now"
        primaryCtaHref="/contact"
        secondaryCtaLabel={`Call ${facts.phone}`}
        secondaryCtaHref={facts.phoneHref}
        posterSrc="/images/kitchen-water-3.jpg"
        posterAlt="Clear water from a kitchen tap"
      />
    </main>
  );
}
