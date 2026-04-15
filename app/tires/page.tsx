import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";
import { withPageMeta } from "@/lib/site-metadata";
import { tiresArticleSections, tiresFaqs } from "@/lib/service-articles/tires";

export const metadata: Metadata = withPageMeta("/tires", {
  title: { absolute: "Tire Repair & Truck Tire Change Services in South Carolina | KM Truck & Trailer" },
  description:
    "Get fast and reliable tire repair and truck tire change services in South Carolina. KM Truck & Trailer offers professional roadside assistance, affordable rates, and expert technicians to keep your truck moving safely.",
});

export default function Page() {
  return (
    <ServicePageTemplate
      title="Tire Repair & Truck Tire Change Services in South Carolina | KM Truck & Trailer"
      heroSubtitle="Get fast and reliable tire repair and truck tire change services in South Carolina. KM Truck & Trailer offers professional roadside assistance, affordable rates, and expert technicians to keep your truck moving safely."
      bodyIntro="A flat or blowout can bring your operation to a halt. Our mobile tire team arrives fast with the right equipment to repair or replace your commercial tires roadside, at your yard, or in our shop."
      articleSections={tiresArticleSections}
      bodyContent="We carry a wide selection of commercial tire brands and sizes for steer, drive, and trailer positions. Whether it's a simple repair or full replacement, we get you rolling again fast."
      extraSections={[
        {
          title: "Truck Tire Brands:",
          items: [
            "Michelin",
            "Bridgestone",
            "Goodyear",
            "Firestone",
            "Continental",
            "Yokohama",
            "Hankook",
            "Toyo Tires",
            "Sumitomo",
            "Falken",
            "Kumho",
            "Nitto",
            "Sailun",
            "Double Coin",
            "Ironman Tires",
            "Radar Tires",
          ],
        },
        {
          title: "Truck Tire Sizes:",
          items: [
            "295/75R22.5",
            "275/80R22.5",
            "275/70R22.5",
            "255/70R22.5",
            "315/80R22.5",
            "11R22.5",
            "11R24.5",
            "285/75R24.5",
            "225/70R19.5",
            "245/70R19.5",
            "265/70R19.5",
            "8R19.5",
            "9R22.5",
            "10R22.5",
            "12R22.5",
            "445/50R22.5",
          ],
        },
      ]}
      features={[
        "Flat Tire Repair",
        "Tire Mounting & Balancing",
        "Roadside Service",
        "All Major Brands",
        "Steer/Drive/Trailer Tires",
        "Emergency Service",
        "Budget-Friendly Pricing",
        "Commercial Sizes",
      ]}
      faqItems={tiresFaqs}
      relatedServices={[
        { label: "Brakes", href: "/brakes" },
        { label: "Trailer Tires", href: "/trailer-tires" },
        { label: "Emergency Roadside", href: "/emergency-roadside-repair" },
      ]}
      images={["/tires-img-1.jpg", "/tires-img-2.jpg"]}
    />
  );
}
