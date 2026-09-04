import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects Gallery & Works Archive | Banu Engineering Trichy",
  description: "Browse photography of completed stainless steel handrails, toughened glass railings, spider glass facades, sloping roofs, and CNC gates installed by Banu Engineering across Tamil Nadu.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Completed Projects Gallery | Banu Engineering Trichy",
    description: "High-resolution portfolio of architectural steel, glass, and roofing installations in Trichy, Madurai, Tanjore, and Pudukkottai.",
    url: "https://banuengineering.com/projects",
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
    title: "Completed Projects Gallery | Banu Engineering Trichy",
    description: "High-resolution portfolio of architectural steel, glass, and roofing installations in Trichy, Madurai, Tanjore, and Pudukkottai.",
    images: ["https://banuengineering.com/images/logo.png"],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
