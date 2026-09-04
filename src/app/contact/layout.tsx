import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Location Yard | Banu Engineering Trichy",
  description: "Get in touch with Banu Engineering in Trichy for stainless steel handrails, toughened glass railings, and sloping roofs. Phone: +91 9159965923. Yard opposite Nayara Petrol Bunk, Trichy.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Banu Engineering Trichy | Fabrication Quotations",
    description: "Submit project blueprints or request site measurement visits for SS handrails, glass railings, and roofing sheds across Tamil Nadu.",
    url: "https://banuengineering.com/contact",
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
    title: "Contact Banu Engineering Trichy | Fabrication Quotations",
    description: "Submit project blueprints or request site measurement visits for SS handrails, glass railings, and roofing sheds across Tamil Nadu.",
    images: ["https://banuengineering.com/images/logo.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
