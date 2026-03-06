import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Truck & Trailer Repair Questions Answered | KM Truck & Trailer",
  description:
    "Common questions about truck repair, DPF cleaning, brakes, tires, emergency roadside, and more. Get answers from KM Truck & Trailer in South Carolina.",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
