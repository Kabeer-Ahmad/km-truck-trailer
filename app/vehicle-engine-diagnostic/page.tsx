import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";
import { withPageMeta } from "@/lib/site-metadata";
import {
  engineDiagnosticArticleSections,
  engineDiagnosticFaqs,
} from "@/lib/service-articles/engine-diagnostics";

export const metadata: Metadata = withPageMeta("/vehicle-engine-diagnostic", {
  title: {
    absolute: "Engine Diagnostics & Repair in Columbia, SC | KM Truck",
  },
  description:
    "Need expert engine diagnostics and repair in Columbia, SC? KM Truck & Trailer provides fast, reliable 24/7 service to keep your truck running smoothly and safely.",
});

export default function Page() {
  return (
    <ServicePageTemplate
      title="Engine Diagnostics & Repair in Columbia, SC | KM Truck"
      heroSubtitle="Need expert engine diagnostics and repair in Columbia, SC? KM Truck & Trailer provides fast, reliable 24/7 service to keep your truck running smoothly and safely."
      bodyIntro="Keeping your truck in top working condition is essential for both safety and performance. Engine problems can appear suddenly and, if ignored, can lead to serious damage and expensive repairs. That is why timely engine diagnostics and professional repair matter for every driver in Columbia, SC."
      articleSections={engineDiagnosticArticleSections}
      bodyContent="We specialize in Cummins, Detroit Diesel, and Paccar diagnostics and repair, including ECM support, turbo and cooling issues, and full engine work when needed."
      extraSections={[
        {
          title: "Truck Brands:",
          items: [
            "Freightliner",
            "Kenworth",
            "Peterbilt",
            "Mack Trucks",
            "Western Star",
            "International Trucks",
            "Volvo Trucks",
            "Hino Motors",
            "Isuzu",
            "UD Trucks",
            "Ford Trucks",
            "Chevrolet",
            "RAM Trucks",
            "Tesla Semi",
            "Autocar Trucks",
          ],
        },
      ]}
      features={[
        "OEM Diagnostic Software",
        "Fault Code Reading",
        "Cummins/Detroit/Paccar",
        "ECM Diagnostics",
        "Sensor Testing",
        "Turbo Diagnosis",
        "Cooling System",
        "Full Engine Repair",
      ]}
      faqItems={engineDiagnosticFaqs}
      relatedServices={[
        { label: "Semi Truck Repair", href: "/semi-truck-repair" },
        { label: "Electrical Repair", href: "/electrical" },
        { label: "DPF Cleaning", href: "/dpf" },
      ]}
      images={["/mechanic-diagnostic-1.jpg", "/mechanic-diagnostic-2.jpg"]}
      imageLayout="grid"
    />
  );
}
