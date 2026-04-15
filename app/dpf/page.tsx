import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";
import { withPageMeta } from "@/lib/site-metadata";
import { dpfArticleSections, dpfFaqs } from "@/lib/service-articles/dpf";

export const metadata: Metadata = withPageMeta("/dpf", {
  title: { absolute: "Truck DPF Cleaning Service in South Carolina | KM Truck & Trailer" },
  description:
    "Professional truck DPF cleaning service in South Carolina. KM Truck & Trailer offers efficient diesel particulate filter cleaning to improve engine performance, reduce emissions, and keep your truck running smoothly and reliably.",
});

export default function Page() {
  return (
    <ServicePageTemplate
      title="Truck DPF Cleaning Service in South Carolina | KM Truck & Trailer"
      heroSubtitle="Professional truck DPF cleaning service in South Carolina. KM Truck & Trailer offers efficient diesel particulate filter cleaning to improve engine performance, reduce emissions, and keep your truck running smoothly and reliably."
      bodyIntro="A clogged DPF can impact your vehicle in several ways - reduced engine power, poor fuel economy, and repeated regeneration cycles are common symptoms. Using certified equipment, we remove soot and ash thoroughly to restore proper airflow and reduce backpressure."
      articleSections={dpfArticleSections}
      bodyContent="Regular DPF cleaning ensures compliance with environmental regulations. For diesel truck owners in South Carolina, maintaining a clean DPF is essential for keeping emissions within legal limits and avoiding potential fines."
      features={[
        "Clean Air for Trucks",
        "Complete DPF Service",
        "Mobile DPF Regen",
        "Advanced Tools",
        "Fuel & Law Compliance",
        "All Truck Types",
        "Affordable Rates",
        "Roadside Help",
      ]}
      faqItems={dpfFaqs}
      relatedServices={[
        { label: "Force Regen", href: "/force-regen" },
        { label: "Engine Diagnostics", href: "/vehicle-engine-diagnostic" },
        { label: "Electrical Repair", href: "/electrical" },
      ]}
    />
  );
}
