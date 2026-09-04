import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "14 Architectural Fabrication Services | Banu Engineering Trichy",
  description: "Explore Banu Engineering's 14 specialized services: SS 304/316 handrails, spiral steps, Saint-Gobain toughened glass railings, spider glass facades, JSW sloping roofs, and HPL CNC compound gates.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "14 Fabrication & Architectural Services | Banu Engineering Trichy",
    description: "Full capability matrix of certified stainless steel handrails, toughened glass works, and sloping metal roofings in Trichy & Tamil Nadu.",
    url: "https://banuengineering.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
