import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us & Engineering Credentials | Banu Engineering Trichy",
  description: "Established in 2015, Banu Engineering is Trichy's trusted architectural fabrication firm led by NDT Level II & IBR certified welders. Serving clients across 10+ cities in Tamil Nadu.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Banu Engineering | History, Certifications & Reputation",
    description: "Certified NDT Level II weld inspection, Jindal SS 304/316 steel, Saint-Gobain glass, and JSW roofing execution across Tamil Nadu.",
    url: "https://banuengineering.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
