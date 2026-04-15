import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";
import { withPageMeta } from "@/lib/site-metadata";
import { airCabinArticleSections, airCabinFaqs } from "@/lib/service-articles/air-cabin";

export const metadata: Metadata = withPageMeta("/air-and-cabin-filter", {
  title: { absolute: "Air & Cabin Filter Replacement for Trucks in South Carolina | KM Truck & Trailer" },
  description:
    "Professional air and cabin filter replacement services for trucks in South Carolina. KM Truck & Trailer ensures clean airflow, improved engine performance, and better cabin air quality with fast and reliable service.",
});

export default function Page() {
  return (
    <ServicePageTemplate
      title="Air & Cabin Filter Replacement for Trucks in South Carolina | KM Truck & Trailer"
      heroSubtitle="Professional air and cabin filter replacement services for trucks in South Carolina. KM Truck & Trailer ensures clean airflow, improved engine performance, and better cabin air quality with fast and reliable service."
      bodyIntro="Clogged filters reduce engine performance, increase fuel consumption, and can cause long-term damage. Regular filter replacement is one of the simplest and most cost-effective forms of preventive maintenance."
      articleSections={airCabinArticleSections}
      bodyContent="We replace all types of truck filters including engine air filters, cabin air filters, fuel filters, and hydraulic filters. Our preventive maintenance service helps you stay DOT compliant and avoid costly breakdowns."
      features={[
        "Engine Air Filter",
        "Cabin Air Filter",
        "DPF Filter",
        "Fuel Filter",
        "Hydraulic Filter",
        "Oil Filter",
        "Fast Service",
        "Preventive Maintenance",
      ]}
      faqItems={airCabinFaqs}
      relatedServices={[
        { label: "Semi Truck Repair", href: "/semi-truck-repair" },
        { label: "DPF Cleaning", href: "/dpf" },
        { label: "Engine Diagnostics", href: "/vehicle-engine-diagnostic" },
      ]}
      images={["/Cabin%20Filter%201.jpg", "/Cabin%20Filter%202.jpg"]}
      imageLayout="scattered-alt"
    />
  );
}
