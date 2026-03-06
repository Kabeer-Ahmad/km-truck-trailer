import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Truck Repair Tips & News | KM Truck & Trailer",
  description:
    "Expert tips on DPF cleaning, roadside repair, fleet maintenance, and more. From the team at K&M Truck & Trailer Repair in South Carolina.",
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
