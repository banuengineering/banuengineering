import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toughened Glass Railings & Spider Facades Trichy | Banu Engineering",
  description: "Saint-Gobain 12mm-19mm toughened glass balcony railings, frameless glass partitions, spider glass curtain walls, and glass canopies installed by Banu Engineering in Trichy.",
  keywords: [
    "Toughened glass railing Trichy",
    "Saint Gobain glass works Trichy",
    "Spider glass facade Trichy",
    "Glass canopy contractor Trichy",
    "Frameless shower cubicle Trichy",
    "Terracotta jally glass elevation Trichy"
  ],
  alternates: {
    canonical: "/services/glass",
  },
  openGraph: {
    title: "Toughened Glass Railings & Spider Facades | Banu Engineering Trichy",
    description: "Saint-Gobain glass railings, spigot glass balconies, spider glazing facades, and custom shower enclosures in Trichy & Tamil Nadu.",
    url: "https://banuengineering.com/services/glass",
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
    title: "Toughened Glass Railings & Spider Facades | Banu Engineering Trichy",
    description: "Saint-Gobain glass railings, spigot glass balconies, spider glazing facades, and custom shower enclosures in Trichy & Tamil Nadu.",
    images: ["https://banuengineering.com/images/logo.png"],
  },
};

export default function GlassLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
