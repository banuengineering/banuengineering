import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sloping Roofing Sheds & JSW Metal Tile Roofings Trichy | Banu Engineering",
  description: "Architectural sloping metal roofings, JSW color-coated tile profile roofing sheds, steel truss sheds, and ACP elevation cladding installed by Banu Engineering across Tamil Nadu.",
  keywords: [
    "Sloping roofing shed Trichy",
    "JSW metal roofing Trichy",
    "Steel truss roof shed Trichy",
    "Industrial roofing shed Trichy",
    "ACP elevation cladding Trichy",
    "Terrace roofing contractor Trichy"
  ],
  alternates: {
    canonical: "/services/acp",
  },
  openGraph: {
    title: "Sloping Metal Roofings & JSW Roofing Sheds | Banu Engineering Trichy",
    description: "Sloping steel truss roofing sheds, JSW color tile profile roofs, UPVC panels, and ACP facade elevations in Trichy & Tamil Nadu.",
    url: "https://banuengineering.com/services/acp",
    images: [
      {
        url: "https://banuengineering.com/images/logo.png",
        width: 800,
        height: 800,
        alt: "Banu Engineering Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sloping Metal Roofings & JSW Roofing Sheds | Banu Engineering Trichy",
    description: "Sloping steel truss roofing sheds, JSW color tile profile roofs, UPVC panels, and ACP facade elevations in Trichy & Tamil Nadu.",
    images: ["https://banuengineering.com/images/logo.png"],
  },
};

export default function AcpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
