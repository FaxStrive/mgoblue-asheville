import type { Metadata } from "next";
import { facts } from "@/lib/facts";
import VideoHero from "@/components/sections/VideoHero";
import Faq from "@/components/sections/Faq";
import ClosingCta from "@/components/sections/ClosingCta";
import Divider from "@/components/sections/CurvedEdge";

export const metadata: Metadata = {
  title: "FAQ | Water Filtration Questions Answered in Asheville, NC",
  description:
    "Common questions about water filtration, water softeners, and well water treatment in Asheville, NC answered by Pure Home 365.",
};

export default function FaqPage() {
  return (
    <main>
      <VideoHero
        variant="centered"
        eyebrow="FAQ"
        headline="Questions we hear from Asheville homeowners"
        subhead="Straight answers about water treatment, our process, and what to expect."
        posterSrc="/images/kitchen-water-2.jpg"
        posterAlt="Clear water in a kitchen"
        primaryCtaLabel="Get a Free Quote"
        primaryCtaHref="/contact"
      />

      <Faq
        eyebrow="General Questions"
        headline="About our service"
        items={[
          {
            question: "How much does a water filtration system cost?",
            answer: "Cost depends on the type of system and the size of your home. We offer whole-home systems starting from $96/month with $0 down and financing approval, as well as buy-now options with a $500 discount for credit card payment. Point-of-use systems qualify for a $200 discount. We provide a firm quote before any work begins.",
          },
          {
            question: "Do you offer a free water test?",
            answer: "Yes. We visit your home, test your water on-site, and explain the results at no charge and with no obligation. We recommend scheduling a test before committing to any system.",
          },
          {
            question: "How long does installation take?",
            answer: "Most installations are completed in a single visit. A point-of-use filter can often be done in a couple of hours. A whole-home system typically takes a full day. We give you an estimated timeframe when we schedule.",
          },
          {
            question: "Are you licensed and insured?",
            answer: "Yes. We carry the appropriate licensing and insurance for water treatment installation in North Carolina.",
          },
          {
            question: "Do you service what you install?",
            answer: "Yes. We service every system we install and are available for routine maintenance and any issues that come up after the fact.",
          },
        ]}
      />

      <Divider into="alt" direction="down" />

      <Faq
        eyebrow="Water Quality"
        headline="About your water"
        items={[
          {
            question: "What is hard water and why does it matter?",
            answer: "Hard water contains dissolved calcium and magnesium minerals. It causes scale buildup on faucets and inside appliances, leaves spots on dishes and glassware, and can leave skin and hair feeling dry. A water softener removes these minerals before the water reaches your plumbing.",
          },
          {
            question: "How do I know if my well water is safe?",
            answer: "Well water is not regulated by the EPA the way city water is. Contamination from iron, bacteria, nitrates, and other sources is common in private wells in Western North Carolina. A professional water test is the only way to know what is present. We test specifically for the issues common to WNC wells.",
          },
          {
            question: "What contaminants does a water filter remove?",
            answer: "This depends on the filter type. A basic sediment filter removes particles and rust. A carbon filter removes chlorine, chloramines, and some chemicals. A reverse osmosis system removes dissolved solids, heavy metals, nitrates, and most other contaminants. We recommend the right filter type based on your test results.",
          },
          {
            question: "My water smells like rotten eggs. What is causing it?",
            answer: "That odor is hydrogen sulfide gas, which is common in well water in this region. It is produced naturally by certain bacteria and by reactions with sulfur in the rock. It is treatable with an aeration or oxidizing filter system. We test for it specifically and can eliminate the odor.",
          },
        ]}
      />

      <Divider into="light" direction="up" />

      <ClosingCta
        variant="quiet"
        headline="Have a question we did not answer?"
        subhead={`Call us at ${facts.phone} or send a message and we will respond the same day.`}
        primaryCtaLabel="Contact Us"
        primaryCtaHref="/contact"
      />
    </main>
  );
}
