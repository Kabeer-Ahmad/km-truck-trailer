import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews | Customer Reviews | KM Truck & Trailer",
  description:
    "See what our customers say about K&M Truck & Trailer Repair. Read Google reviews and leave your own. Serving South Carolina with trusted truck and trailer repair.",
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
