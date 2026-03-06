import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Truck & Trailer Repair Photos | KM Truck & Trailer",
  description:
    "Photos of our shop, team, and truck and trailer repair services across South Carolina. K&M Truck & Trailer Repair.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
