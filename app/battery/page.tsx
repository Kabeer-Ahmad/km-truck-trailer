import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";
import { withPageMeta } from "@/lib/site-metadata";
import { batteryArticleSections, batteryFaqs } from "@/lib/service-articles/battery";

export const metadata: Metadata = withPageMeta("/battery", {
  title: { absolute: "Semi Truck Battery Replacement & Service in South Carolina | KM Truck & Trailer" },
  description:
    "Get reliable semi truck battery replacement and service in South Carolina. KM Truck & Trailer offers fast diagnostics, quality battery installation, and professional roadside support to keep your truck powered and running without delays.",
});

export default function Page() {
  return (
    <ServicePageTemplate
      title="Semi Truck Battery Replacement & Service in South Carolina | KM Truck & Trailer"
      heroSubtitle="Get reliable semi truck battery replacement and service in South Carolina. KM Truck & Trailer offers fast diagnostics, quality battery installation, and professional roadside support to keep your truck powered and running without delays."
      bodyIntro="A dead or failing battery can leave you stranded. Our mobile battery service includes load testing to identify weak batteries before they fail, fast replacement with commercial-grade batteries, and full charging system diagnostics."
      articleSections={batteryArticleSections}
      bodyContent="We also inspect your alternator and voltage regulator to ensure your charging system is functioning properly. A well-maintained electrical system prevents unexpected breakdowns and extends the life of your batteries."
      features={[
        "Battery Load Testing",
        "Battery Replacement",
        "Jump-Start Service",
        "Alternator Inspection",
        "Charging System Check",
        "Voltage Testing",
        "All Battery Brands",
        "Mobile Service",
      ]}
      faqItems={batteryFaqs}
      relatedServices={[
        { label: "Electrical Repair", href: "/electrical" },
        { label: "Emergency Roadside", href: "/emergency-roadside-repair" },
        { label: "Engine Diagnostics", href: "/vehicle-engine-diagnostic" },
      ]}
      images={["/battery-img-1.jpg", "/battery-img-2.jpg"]}
      imageLayout="scattered-alt"
    />
  );
}
