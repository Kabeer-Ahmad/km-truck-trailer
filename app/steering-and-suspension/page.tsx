import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";
import { withPageMeta } from "@/lib/site-metadata";
import { steeringSuspensionArticleSections, steeringSuspensionFaqs } from "@/lib/service-articles/steering-suspension";

export const metadata: Metadata = withPageMeta("/steering-and-suspension", {
  title: { absolute: "Steering & Suspension Repair for Trucks in South Carolina | KM Truck & Trailer" },
  description:
    "Professional steering and suspension repair services for trucks in South Carolina. KM Truck & Trailer provides expert diagnostics, durable repairs, and fast service to ensure safe handling, stability, and smooth driving performance.",
});

export default function Page() {
  return (
    <ServicePageTemplate
      title="Steering & Suspension Repair for Trucks in South Carolina | KM Truck & Trailer"
      heroSubtitle="Professional steering and suspension repair services for trucks in South Carolina. KM Truck & Trailer provides expert diagnostics, durable repairs, and fast service to ensure safe handling, stability, and smooth driving performance."
      bodyIntro="Proper steering and suspension are critical for safe truck operation. Our technicians inspect and repair all components of your truck's steering and suspension systems to ensure confident handling and a smooth ride."
      articleSections={steeringSuspensionArticleSections}
      bodyContent="We service air ride suspension, leaf spring systems, steering gears, tie rods, and perform wheel alignments to extend tire life and improve handling. Road-ready inspection included."
      features={[
        "Steering Gear Repair",
        "Tie Rod Replacement",
        "Air Bag Service",
        "Shock Absorbers",
        "Wheel Alignment",
        "Kingpin Service",
        "U-Joint Replacement",
        "Road-Ready Inspection",
      ]}
      faqItems={steeringSuspensionFaqs}
      relatedServices={[
        { label: "Brakes", href: "/brakes" },
        { label: "Tires", href: "/tires" },
        { label: "Semi Truck Repair", href: "/semi-truck-repair" },
      ]}
      images={["/Steering%20&%20Suspension%201.jpg", "/steering-suspension-unsplash.jpg"]}
      imageLayout="scattered"
    />
  );
}
