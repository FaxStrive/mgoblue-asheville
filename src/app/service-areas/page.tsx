import type { Metadata } from "next";
import { facts } from "@/lib/facts";
import VideoHero from "@/components/sections/VideoHero";
import ServiceAreas from "@/components/sections/ServiceAreas";
import ClosingCta from "@/components/sections/ClosingCta";
import Divider from "@/components/sections/CurvedEdge";

export const metadata: Metadata = {
  title: "Service Areas | Water Treatment Near Asheville, NC",
  description:
    "Pure Home 365 serves Asheville, NC and communities within 80 miles including Hendersonville, Black Mountain, Weaverville, Morganton, and more.",
};

export default function ServiceAreasPage() {
  return (
    <main>
      <VideoHero
        variant="centered"
        eyebrow="Service Areas"
        headline="We cover Asheville and communities within 80 miles"
        subhead="If you are in Western North Carolina, we can likely reach you. Call us to confirm your area."
        posterSrc="/images/water-treatment.jpg"
        posterAlt="Western North Carolina mountains near Asheville"
        primaryCtaLabel="Get a Free Quote"
        primaryCtaHref="/contact"
        secondaryCtaLabel={`Call ${facts.phone}`}
        secondaryCtaHref={facts.phoneHref}
      />

      <ServiceAreas
        eyebrow="Where We Work"
        headline="Cities and towns we serve"
        tone="light"
        areas={[
          {
            name: "Buncombe County",
            places: ["Asheville", "Weaverville", "Black Mountain", "Swannanoa", "Arden", "Woodfin", "Fairview"],
          },
          {
            name: "Henderson County",
            places: ["Hendersonville", "Brevard", "Fletcher", "Mills River", "Etowah"],
          },
          {
            name: "Burke and Caldwell Counties",
            places: ["Morganton", "Marion", "Lenoir", "Valdese"],
          },
          {
            name: "McDowell and Polk Counties",
            places: ["Marion", "Old Fort", "Columbus", "Saluda"],
          },
          {
            name: "Haywood County",
            places: ["Waynesville", "Maggie Valley", "Canton"],
          },
          {
            name: "Jackson and Macon Counties",
            places: ["Sylva", "Franklin", "Highlands", "Cullowhee"],
          },
          {
            name: "Yancey and Mitchell Counties",
            places: ["Burnsville", "Spruce Pine", "Bakersville"],
          },
          {
            name: "Transylvania County",
            places: ["Brevard", "Rosman", "Pisgah Forest"],
          },
        ]}
      />

      <Divider into="dark" direction="down" />

      <ClosingCta
        variant="band"
        headline="Not sure if we reach your area?"
        subhead={`Call us at ${facts.phone} and we will let you know right away.`}
        primaryCtaLabel="Get a Free Quote"
        primaryCtaHref="/contact"
        secondaryCtaLabel={`Call ${facts.phone}`}
        secondaryCtaHref={facts.phoneHref}
        posterSrc="/images/kitchen-water-1.jpg"
        posterAlt="Clean mountain water in a kitchen"
      />
    </main>
  );
}
