import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";
import { withPageMeta } from "@/lib/site-metadata";
import { electricalArticleSections, electricalFaqs } from "@/lib/service-articles/electrical";

export const metadata: Metadata = withPageMeta("/electrical", {
  title: { absolute: "Electrical System Repair for Semi Trucks in South Carolina | KM Truck & Trailer" },
  description:
    "Professional electrical system repair services for semi trucks in South Carolina. KM Truck & Trailer provides fast diagnostics, reliable repairs, and expert technicians to keep your truck’s electrical system running smoothly and safely.",
});

export default function Page() {
  return (
    <ServicePageTemplate
      title="Electrical System Repair for Semi Trucks in South Carolina | KM Truck & Trailer"
      heroSubtitle="Professional electrical system repair services for semi trucks in South Carolina. KM Truck & Trailer provides fast diagnostics, reliable repairs, and expert technicians to keep your truck’s electrical system running smoothly and safely."
      bodyIntro="Electrical problems can be complex and difficult to diagnose without the right tools. Our certified technicians use advanced diagnostic equipment to pinpoint faults in your truck's electrical system quickly and accurately."
      articleSections={electricalArticleSections}
      bodyContent="From simple lighting repairs to complex ECM reprogramming, we handle the full spectrum of electrical issues on all major truck brands. Our mobile units carry the necessary equipment to perform most repairs roadside."
      features={[
        "Wiring Diagnostics",
        "ECM/ECU Repair",
        "Lighting Systems",
        "Sensor Replacement",
        "Charging System",
        "Fuse & Relay",
        "Turn Signal & ABS",
        "Mobile Electrical Service",
      ]}
      faqItems={electricalFaqs}
      relatedServices={[
        { label: "Engine Diagnostics", href: "/vehicle-engine-diagnostic" },
        { label: "Trailer Repair", href: "/trailer-repair" },
        { label: "Battery Service", href: "/battery" },
      ]}
      images={["/electrical-img-1.jpg", "/electrical-img-2.jpg"]}
      imageLayout="sidebar-gallery"
    />
  );
}
