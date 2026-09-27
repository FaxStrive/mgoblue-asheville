import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { facts } from "@/lib/facts";
import { systemImage } from "@/lib/systemImages";
import systemCopyData from "@/lib/systemCopy.json";
import VideoHero from "@/components/sections/VideoHero";
import WhySystems from "@/components/sections/WhySystems";
import Process from "@/components/sections/Process";
import Faq from "@/components/sections/Faq";
import SystemsGrid from "@/components/sections/SystemsGrid";
import ClosingCta from "@/components/sections/ClosingCta";
import Divider from "@/components/sections/CurvedEdge";

interface ServicePageParams {
  slug: string;
}

function findService(slug: string) {
  return facts.services.find((s) => s.slug === slug);
}

type SystemCopyKey = keyof typeof systemCopyData;

export function generateStaticParams(): ServicePageParams[] {
  return facts.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ServicePageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) {
    return { title: "Service not found" };
  }
  return {
    title: `${service.name} in Asheville, NC`,
    description: service.description,
    openGraph: {
      title: `${service.name} | Pure Home 365 Asheville`,
      description: service.description,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<ServicePageParams>;
}) {
  const { slug } = await params;
  const service = findService(slug);

  if (!service) {
    notFound();
  }

  const copy = systemCopyData[slug as SystemCopyKey];
  const otherServices = facts.services.filter((s) => s.slug !== slug);

  return (
    <main>
      {/* Hero */}
      <VideoHero
        variant="split"
        eyebrow={copy?.eyebrow ?? "Water Treatment"}
        headline={copy?.headline ?? service.name}
        subhead={copy?.subhead ?? service.description}
        posterSrc={systemImage(slug)}
        posterAlt={`${service.name} system`}
        primaryCtaLabel="Get a Free Quote"
        primaryCtaHref="/contact"
        secondaryCtaLabel={`Call ${facts.phone}`}
        secondaryCtaHref={facts.phoneHref}
      />

      {/* Features */}
      {copy?.features && copy.features.length >= 3 ? (
        <>
          <WhySystems
            eyebrow="What You Get"
            headline={`What our ${service.name.toLowerCase()} systems deliver`}
            tone="light"
            variant="numbered-list"
            reasons={copy.features.map((f) => ({ title: f, body: "" }))}
            ctaLabel="Schedule a Free Water Test"
            ctaHref="/contact"
          />
          <Divider into="alt" direction="down" />
        </>
      ) : null}

      {/* How it works */}
      <Process
        eyebrow="Our Process"
        headline="How we get your system running"
        tone="light"
        variant="diagram"
        steps={[
          { title: "Free Water Test", description: "We test your water on-site at no charge to identify exactly what your home needs." },
          { title: "System Recommendation", description: "We explain the results and recommend a system sized for your household and water source." },
          { title: "Professional Installation", description: "Our team installs your system and verifies performance before we leave." },
          { title: "Ongoing Support", description: "We answer questions and provide service when your system needs attention." },
        ]}
      />

      <Divider into="light" direction="up" />

      {/* FAQ */}
      {copy?.faq && copy.faq.length > 0 ? (
        <Faq
          eyebrow="Questions"
          headline={`Common questions about ${service.name.toLowerCase()}`}
          items={copy.faq}
        />
      ) : null}

      {/* Other services */}
      {otherServices.length > 0 ? (
        <>
          <Divider into="alt" direction="down" />
          <SystemsGrid
            eyebrow="Other Services"
            headline="We handle every water problem"
            tone="alt"
            items={otherServices.map((s) => ({
              name: s.name,
              blurb: s.blurb,
              href: `/services/${s.slug}`,
              imageSrc: systemImage(s.slug),
              imageAlt: `${s.name} system`,
            }))}
          />
          <Divider into="dark" direction="down" />
        </>
      ) : (
        <Divider into="dark" direction="down" />
      )}

      {/* Closing CTA */}
      <ClosingCta
        variant="split"
        headline={`Ready to improve your ${service.name.toLowerCase()}?`}
        subhead="Schedule a free water test and get a system recommendation specific to your home. No obligation."
        primaryCtaLabel="Get a Free Quote"
        primaryCtaHref="/contact"
        secondaryCtaLabel={`Call ${facts.phone}`}
        secondaryCtaHref={facts.phoneHref}
        posterSrc={systemImage(slug)}
        posterAlt={`${service.name} system installed`}
      />
    </main>
  );
}
