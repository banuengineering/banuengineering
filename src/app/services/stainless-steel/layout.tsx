import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stainless Steel Handrails & Staircases Trichy | Banu Engineering",
  description: "Certified SS 304 & SS 316 Jindal grade handrails, spiral staircases, SS & glass steps, and safety CNC gates fabricated by Banu Engineering in Trichy, Tamil Nadu.",
  keywords: [
    "Stainless steel handrails Trichy",
    "SS 304 railing Trichy",
    "SS 316 balcony handrail Trichy",
    "Spiral staircase fabricator Trichy",
    "SS safety gate Trichy",
    "Jindal steel handrail Tamil Nadu"
  ],
  alternates: {
    canonical: "/services/stainless-steel",
  },
  openGraph: {
    title: "Stainless Steel Handrail & Staircase Works | Banu Engineering Trichy",
    description: "Rust-free Jindal grade SS 304/316 handrails, spiral staircases, and custom gate fabrications in Trichy & Tamil Nadu.",
    url: "https://banuengineering.com/services/stainless-steel",
  },
};

export default function StainlessSteelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
