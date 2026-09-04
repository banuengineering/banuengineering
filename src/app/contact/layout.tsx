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
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
