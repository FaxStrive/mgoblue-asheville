import type { Metadata } from "next";
import { facts } from "@/lib/facts";
import { systemImage } from "@/lib/systemImages";
import VideoHero from "@/components/sections/VideoHero";
import WhySystems from "@/components/sections/WhySystems";
import SystemsGrid from "@/components/sections/SystemsGrid";
import ProofBand from "@/components/sections/ProofBand";
import WaterHook from "@/components/sections/WaterHook";
import Process from "@/components/sections/Process";
import ServiceAreas from "@/components/sections/ServiceAreas";
import Faq from "@/components/sections/Faq";
import ClosingCta from "@/components/sections/ClosingCta";
import FullBleedBand from "@/components/sections/FullBleedBand";
import FollowTheWater from "@/components/sections/FollowTheWater";
import Divider from "@/components/sections/CurvedEdge";

export const metadata: Metadata = {
  title: "Pure Home 365 | Water Filtration & Softener Systems in Asheville, NC",
  description:
    "Pure Home 365 installs custom water filtration, water softeners, and well water treatment systems for homes in Asheville, NC and within 80 miles. Local experts. BBB A Rating.",
};

export default function HomePage() {
  return (
    <main>
      {/* 1. Video Hero */}
      <VideoHero
        variant="full-bleed"
        eyebrow="Asheville, NC Water Treatment Experts"
        headline="Clean Water, Customized for Your Home"
        subhead="We build the right system for your water, whether you are on city supply or a private well. Local company. Real expertise. No surprises."
        videoSrc="/video/hero.mp4"
        posterSrc="/images/hero-poster.jpg"
        posterAlt="Clean water flowing from a kitchen tap"
        primaryCtaLabel="Get a Free Quote"
        primaryCtaHref="/contact"
        secondaryCtaLabel="See Our Systems"
        secondaryCtaHref="/services/water-filtration"
      />

      {/* 2. Proof Band */}
      <ProofBand
        variant="promise"
        items={[
          { value: "BBB A Rating", label: "Accredited Business" },
          { value: "Local Company", label: "Invested in Our Community" },
          { value: "Free Water Testing", label: "Know Before You Buy" },
        ]}
      />

      {/* 3. Why Systems */}
      <WhySystems
        eyebrow="Why Pure Home 365"
        headline="We fit the system to your water, not the other way around"
        subhead="Every home is different. Every water source is different. We start by testing your water and recommending only what your home actually needs."
        variant="cards"
        tone="light"
        reasons={[
          {
            title: "Systems built for your water",
            body: "Municipal water and well water have different problems. We diagnose first, then recommend. You get a system that solves what you actually have.",
          },
          {
            title: "Options for every budget",
            body: "From whole-home systems to point-of-use filters, we carry solutions at a range of price points. Financing options are available. Contact us for details.",
          },
          {
            title: "A local company you can call",
            body: "We live and work in Western North Carolina. When you need service, you reach a local team, not a national call center.",
          },
        ]}
        ctaLabel="Schedule a Free Water Test"
        ctaHref="/contact"
      />

      <Divider into="alt" direction="down" />

      {/* 4. Systems Grid */}
      <SystemsGrid
        eyebrow="Our Systems"
        headline="The right solution for every water problem"
        subhead="From whole-home filtration to well water treatment, we carry systems for every source and situation."
        tone="alt"
        cardMedia="product"
        items={facts.services.map((s) => ({
          name: s.name,
          blurb: s.blurb,
          href: `/services/${s.slug}`,
          imageSrc: systemImage(s.slug),
          imageAlt: `${s.name} system`,
        }))}
        footerCtaLabel="Get a Free Quote"
        footerCtaHref="/contact"
      />

      <Divider into="light" direction="up" />

      {/* 5. Water Hook - Problem Section */}
      <WaterHook
        headline="When was the last time you thought about what is in your water?"
        body="Buildup on your faucets. Staining in sinks and tubs. Water that smells or tastes off. These are not just annoyances. They signal problems that shorten the life of your appliances and raise questions about what you are drinking. A free water test gives you answers in minutes."
        ctaLabel="Schedule Your Free Water Test"
        ctaHref="/contact"
        imageSrc="/images/kitchen-water-2.jpg"
        imageAlt="Kitchen faucet with clean water"
      />

      <Divider into="dark" direction="down" />

      {/* 6. FollowTheWater - How the process works */}
      <FollowTheWater
        eyebrow="How It Works"
        headline="From test to install in three steps"
        stages={[
          {
            label: "Free Water Test",
            note: "We visit your home, test your water on-site, and show you exactly what we find. No charge, no obligation.",
          },
          {
            label: "Custom System Design",
            note: "Based on your results, we recommend only what your water needs. You choose the system and the payment option that fits your budget.",
          },
          {
            label: "Professional Installation",
            note: "Our team installs your system cleanly and quickly. We walk you through everything before we leave.",
          },
        ]}
      />

      <Divider into="light" direction="up" />

      {/* 7. Process details */}
      <Process
        eyebrow="Our Approach"
        headline="No upsell. No guessing. Just the right system for your home."
        tone="light"
        variant="steps"
        steps={[
          {
            title: "We test your water first",
            description: "Every recommendation starts with a test. We identify what is actually present before suggesting any equipment.",
          },
          {
            title: "We explain what you have",
            description: "We show you the results in plain terms and tell you what the options are. You make the call.",
          },
          {
            title: "We size the system correctly",
            description: "A system that is too small fails to keep up. One that is too large wastes money. We size to your household.",
          },
          {
            title: "We install it right",
            description: "Clean, professional installation. We verify performance before we leave and provide documentation of your system.",
          },
        ]}
      />

      <Divider into="alt" direction="down" />

      {/* 8. FullBleedBand - Trust / BBB */}
      <FullBleedBand
        eyebrow="BBB Accredited Business"
        headline="A Rating from the Better Business Bureau"
        body="We earned our BBB A rating by treating every customer the way we would want to be treated. Local company. Transparent pricing. Work we stand behind."
        tone="dark"
        imageSrc="/images/softener-3.jpg"
        imageAlt="Water treatment professional at work"
        ctaLabel="Get a Free Quote"
        ctaHref="/contact"
      />

      <Divider into="light" direction="up" />

      {/* 9. Service Areas Preview */}
      <ServiceAreas
        eyebrow="Where We Work"
        headline="Serving Asheville and communities within 80 miles"
        tone="light"
        areas={[
          {
            name: "Buncombe County",
            places: ["Asheville", "Weaverville", "Black Mountain", "Swannanoa", "Arden"],
          },
          {
            name: "Henderson County",
            places: ["Hendersonville", "Brevard", "Fletcher"],
          },
          {
            name: "Burke County",
            places: ["Morganton", "Marion", "Lenoir"],
          },
          {
            name: "Western NC",
            places: ["Waynesville", "Sylva", "Franklin", "Burnsville", "Spruce Pine"],
          },
        ]}
      />

      {/* 10. FAQ */}
      <Faq
        eyebrow="Common Questions"
        headline="Answers to what homeowners ask us most"
        items={[
          {
            question: "How do I know which system is right for my home?",
            answer: "We start with a free water test. City water and well water have different issues, and the right system depends on what your test shows. We never recommend a system without testing first.",
          },
          {
            question: "Do you offer financing?",
            answer: "Yes. We offer monthly financing on whole-home systems with no money down after credit approval. We also have buy-now options with discounts for upfront payment. See our offers on the contact page.",
          },
          {
            question: "How long does installation take?",
            answer: "Most installations are completed in a single day. A basic point-of-use filter can often be done in a couple of hours. We give you a time estimate when we schedule.",
          },
          {
            question: "What if I am on well water?",
            answer: "Well water is a specialty for us. Western North Carolina wells commonly have iron, hardness, bacteria, and pH issues. We test specifically for well-water concerns and design systems that address them.",
          },
          {
            question: "Do I need to be home for the water test?",
            answer: "Yes, we test at your taps and discuss the results with you in person. The appointment typically takes 30 to 45 minutes and there is no charge.",
          },
        ]}
      />

      {/* 11. Closing CTA with offer - price appears ONCE here */}
      <ClosingCta
        variant="band"
        headline="Ready for water you can trust?"
        subhead={`Whole-home system from $96/month with $0 down. Or save $500 when you pay by credit card. Call us at ${facts.phone} or request a free quote online.`}
        primaryCtaLabel="Get a Free Quote"
        primaryCtaHref="/contact"
        secondaryCtaLabel={`Call ${facts.phone}`}
        secondaryCtaHref={facts.phoneHref}
        posterSrc="/images/softener-1.jpg"
        posterAlt="Water filtration system installed"
      />
    </main>
  );
}
