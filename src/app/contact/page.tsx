import type { Metadata } from "next";
import { facts } from "@/lib/facts";
import VideoHero from "@/components/sections/VideoHero";
import ContactBody from "@/components/sections/ContactBody";
import Divider from "@/components/sections/CurvedEdge";

export const metadata: Metadata = {
  title: "Contact Pure Home 365 | Free Water Test in Asheville, NC",
  description:
    "Schedule a free water test or get a quote from Pure Home 365. Serving Asheville, NC and communities within 80 miles. Call 828-532-2015.",
};

export default function ContactPage() {
  return (
    <main>
      <VideoHero
        variant="centered"
        eyebrow="Get in Touch"
        headline="Schedule your free water test"
        subhead="We test your water on-site at no charge. Tell us a little about your home and we will reach out to schedule."
        posterSrc="/images/kitchen-water-3.jpg"
        posterAlt="Clean water in an Asheville kitchen"
        primaryCtaLabel={`Call ${facts.phone}`}
        primaryCtaHref={facts.phoneHref}
      />

      <Divider into="light" direction="up" />

      <ContactBody
        eyebrow="Contact"
        headline="Request a free water test"
        intro="Fill out the form below and we will contact you within one business day to schedule your free on-site water test."
        formAction="/api/contact"
        submitLabel="Request Your Free Water Test"
        details={[
          { label: "Phone", value: facts.phone, href: facts.phoneHref },
          { label: "Email", value: facts.email, href: `mailto:${facts.email}` },
          { label: "Service Area", value: "Asheville, NC and communities within 80 miles" },
        ]}
      />
    </main>
  );
}
