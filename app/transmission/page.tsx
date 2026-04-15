import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";
import { withPageMeta } from "@/lib/site-metadata";
import { transmissionArticleSections, transmissionFaqs } from "@/lib/service-articles/transmission";

export const metadata: Metadata = withPageMeta("/transmission", {
  title: { absolute: "KM Truck & Trailer | Transmission Repair SC" },
  description:
    "Expert transmission repair for all automatic and manual heavy-duty truck transmissions. From minor adjustments to full rebuilds.",
});

export default function Page() {
  return (
    <ServicePageTemplate
      title="KM Truck & Trailer | Transmission Repair SC"
      heroSubtitle="Expert transmission repair for all automatic and manual heavy-duty truck transmissions. From minor adjustments to full rebuilds."
      bodyIntro="A failing transmission can sideline your truck for days. Our experienced technicians diagnose and repair all types of heavy-duty truck transmissions, from minor adjustments to complete rebuilds."
      articleSections={transmissionArticleSections}
      bodyContent="We specialize in Allison automatic transmissions, Eaton Fuller manual transmissions, and all other major heavy-duty gearbox brands. Our diagnostics pinpoint the exact issue to avoid unnecessary repairs and cost."
      features={[
        "Full Transmission Rebuild",
        "Clutch Service",
        "Fluid Flush & Refill",
        "Electronic Diagnostics",
        "Allison & Eaton Fuller",
        "Minor Adjustments",
        "Torque Converter",
        "Mobile Inspection",
      ]}
      faqItems={transmissionFaqs}
      relatedServices={[
        { label: "Engine Diagnostics", href: "/vehicle-engine-diagnostic" },
        { label: "Semi Truck Repair", href: "/semi-truck-repair" },
        { label: "Electrical Repair", href: "/electrical" },
      ]}
      images={["/transmission-img-1.jpg", "/transmission-img-2.jpg"]}
    />
  );
}
