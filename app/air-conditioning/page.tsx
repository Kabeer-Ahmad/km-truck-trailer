import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";
import { withPageMeta } from "@/lib/site-metadata";
import { acHeatingArticleSections, acHeatingFaqs } from "@/lib/service-articles/ac-heating";

export const metadata: Metadata = withPageMeta("/air-conditioning", {
  title: { absolute: "AC & Heating Repair for Trucks in South Carolina | KM Truck & Trailer" },
  description:
    "Reliable AC and heating repair services for trucks in South Carolina. KM Truck & Trailer provides fast diagnostics, expert repairs, and climate control solutions to keep your truck comfortable in all weather conditions.",
});

export default function Page() {
  return (
    <ServicePageTemplate
      title="AC & Heating Repair for Trucks in South Carolina | KM Truck & Trailer"
      heroSubtitle="Reliable AC and heating repair services for trucks in South Carolina. KM Truck & Trailer provides fast diagnostics, expert repairs, and climate control solutions to keep your truck comfortable in all weather conditions."
      bodyIntro="Staying comfortable in your cab matters - especially on long hauls through South Carolina's hot summers and cold winters. Our HVAC technicians handle the full range of truck heating and cooling repairs."
      articleSections={acHeatingArticleSections}
      bodyContent="We diagnose and repair all truck HVAC systems including sleeper compartment climate control. Our mobile units can perform most AC and heating repairs on-site."
      features={[
        "AC Recharge",
        "Leak Detection",
        "Compressor Repair",
        "Heater Core Service",
        "Blower Motor",
        "Evaporator Cleaning",
        "Refrigerant Recharge",
        "Mobile HVAC Service",
      ]}
      faqItems={acHeatingFaqs}
      relatedServices={[
        { label: "Heating & AC Repairs", href: "/heating-ac-repairs" },
        { label: "Electrical Repair", href: "/electrical" },
        { label: "Semi Truck Repair", href: "/semi-truck-repair" },
      ]}
    />
  );
}
