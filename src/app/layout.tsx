import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Banu Engineering | Stainless Steel, Toughened Glass & ACP Works Trichy",
  description: "Banu Engineering (Est. 2015) specializes in architectural Stainless Steel staircases, Toughened Glass railings, and ACP elevations across Tamil Nadu. Led by NTD-IBR qualified welders.",
  keywords: [
    "Stainless steel works Trichy",
    "Glass works Trichy",
    "ACP works Trichy",
    "Stainless steel railings",
    "Glass railings",
    "Stainless steel staircase",
    "Toughened glass works",
    "ACP elevation",
    "Custom fabrication Tamil Nadu",
    "Banu Engineering Trichy"
  ],
  authors: [{ name: "Banu Engineering" }],
  openGraph: {
    title: "Banu Engineering | Stainless Steel & Toughened Glass Works",
    description: "Premium architectural fabrication and installation services across Tamil Nadu. Quality is our proof.",
    type: "website",
    locale: "en_IN",
    siteName: "Banu Engineering",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" style={{ flexGrow: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
