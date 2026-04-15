import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";
import { withPageMeta } from "@/lib/site-metadata";
import { brakesArticleSections, brakesFaqs } from "@/lib/service-articles/brakes";

export const metadata: Metadata = withPageMeta("/brakes", {
  title: { absolute: "KM Truck & Trailer | Truck Brake Repair Columbia SC" },
  description:
    "Expert truck brake repair - air brakes, drum & disc, ABS diagnostics, and DOT-compliant inspections. Mobile service available 24/7 across South Carolina.",
});

export default function Page() {
  return (
    <ServicePageTemplate
      title="KM Truck & Trailer | Truck Brake Repair Columbia SC"
      heroSubtitle="Expert truck brake repair - air brakes, drum & disc, ABS diagnostics, and DOT-compliant inspections. Mobile service available 24/7 across South Carolina."
      bodyIntro="Your brakes are your most critical safety system. Our certified technicians specialize in heavy-duty truck brake repair, including air brake systems, drum and disc brakes, and ABS diagnostics for all major truck brands."
      articleSections={brakesArticleSections}
      bodyContent="We perform thorough DOT-compliant brake inspections and repairs to ensure your stopping power meets all federal safety regulations. Our mobile units can reach you roadside for emergency brake repair any time."
      features={[
        "Air Brake Inspection",
        "Drum & Disc Brakes",
        "ABS Diagnostics",
        "DOT Compliance Check",
        "Emergency Roadside Brake Fix",
        "Brake Adjustment",
        "Slack Adjuster Service",
        "Wheel Seal Replacement",
      ]}
      faqItems={brakesFaqs}
      relatedServices={[
        { label: "Tires", href: "/tires" },
        { label: "Steering & Suspension", href: "/steering-and-suspension" },
        { label: "Emergency Roadside", href: "/emergency-roadside-repair" },
      ]}
      images={["/brakes-img-1.jpg", "/brakes-img-2.jpg"]}
      imageLayout="stacked"
    />
  );
}
