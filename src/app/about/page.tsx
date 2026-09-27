import type { Metadata } from "next";
import { facts } from "@/lib/facts";
import VideoHero from "@/components/sections/VideoHero";
import WhySystems from "@/components/sections/WhySystems";
import OriginStory from "@/components/sections/OriginStory";
import ClosingCta from "@/components/sections/ClosingCta";
import FullBleedBand from "@/components/sections/FullBleedBand";
import Divider from "@/components/sections/CurvedEdge";

export const metadata: Metadata = {
  title: "About Pure Home 365 | Water Treatment in Asheville, NC",
  description:
    "Pure Home 365 is a local water treatment company in Asheville, NC. We customize filtration and softener systems for homes on city water and well water.",
};

export default function AboutPage() {
  return (
    <main>
      <VideoHero
        variant="statement"
        eyebrow="About Pure Home 365"
        headline="A local company built on doing the right thing for your water"
        subhead="We sell a variety of solutions to give you an option that fits your needs and budget. We are invested in our community."
        posterSrc="/images/softener-2.jpg"
        posterAlt="Water treatment professional at work in Asheville"
        primaryCtaLabel="Get a Free Quote"
        primaryCtaHref="/contact"
      />

      <OriginStory
        eyebrow="Who We Are"
        headline="We customize systems, not sell packages"
        body="Pure Home 365 was built around a simple belief: homeowners deserve a water system that fits their actual water, not a generic package designed for volume. Whether you are on Asheville city water or a private well in the mountains, your water source comes with its own challenges. We test first, explain what we find, then recommend the solution that addresses what you actually have. We are a local company, invested in this community."
        ctaLabel="Schedule a Free Water Test"
        ctaHref="/contact"
      />

      <Divider into="alt" direction="down" />

      <WhySystems
        eyebrow="Our Approach"
        headline="How we are different from a big-box installer"
        tone="alt"
        variant="cards"
        reasons={[
          {
            title: "We test before we recommend",
            body: "Every system recommendation starts with a free on-site water test. We do not guess, and we do not upsell.",
          },
          {
            title: "Options for every budget",
            body: "We carry systems at different price points. Financing available from $96/month with $0 down. Discounts for upfront payment.",
          },
          {
            title: "Local support after the sale",
            body: "We live and work here. When you need service or have questions, you reach local people who know your system.",
          },
        ]}
      />

      <Divider into="dark" direction="down" />

      <FullBleedBand
        imageSrc="/images/water-glass.jpg"
        imageAlt="Clear glass of water against a clean background"
        eyebrow="BBB Accredited Business"
        headline="Earning an A rating one installation at a time"
        body="Our BBB A rating reflects the standard we hold ourselves to on every job. Transparent pricing, professional installation, and reliable follow-through."
        tone="dark"
        ctaLabel="Get a Free Quote"
        ctaHref="/contact"
      />

      <Divider into="light" direction="up" />

      <ClosingCta
        variant="quiet"
        headline="Questions about what we do?"
        subhead={`Call us at ${facts.phone} or send a message and we will get back to you the same day.`}
        primaryCtaLabel="Contact Us"
        primaryCtaHref="/contact"
      />
    </main>
  );
}
