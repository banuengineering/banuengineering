import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  themeColor: "#0A101C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://banuengineering.com"),
  title: {
    default: "Banu Engineering | Stainless Steel, Toughened Glass & Sloping Roofings Trichy",
    template: "%s | Banu Engineering Trichy",
  },
  description: "Banu Engineering (Est. 2015, Trichy) is Tamil Nadu's top architectural fabrication contractor specializing in SS 304/316 handrails, toughened glass railings, spider facades, sloping roofing sheds, and HPL CNC compound gates.",
  keywords: [
    "Stainless steel works Trichy",
    "SS handrail fabricators Trichy",
    "Glass railing Trichy",
    "Toughened glass works Trichy",
    "Sloping roofing shed Trichy",
    "JSW metal roofing Trichy",
    "ACP elevation cladding Trichy",
    "Spider glass facade Trichy",
    "HPL CNC compound gate Trichy",
    "Spiral staircase fabrication Trichy",
    "Stainless steel fabricator Pudukkottai",
    "Glass railing fabricator Madurai",
    "Metal roofing contractor Tanjore",
    "Banu Engineering Trichy",
    "Best SS fabricator Tamil Nadu"
  ],
  authors: [{ name: "Banu Engineering", url: "https://banuengineering.com" }],
  creator: "Banu Engineering",
  publisher: "Banu Engineering",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Banu Engineering | Stainless Steel, Toughened Glass & Sloping Roofings Trichy",
    description: "Banu Engineering (Est. 2015) specializes in certified SS 304/316 staircases, Saint-Gobain toughened glass railings, spider glazing, and JSW sloping roofings across Tamil Nadu.",
    url: "https://banuengineering.com",
    siteName: "Banu Engineering Trichy",
    images: [
      {
        url: "https://banuengineering.com/images/logo.png",
        width: 800,
        height: 800,
        alt: "Banu Engineering Logo",
        type: "image/png",
      },
      {
        url: "https://banuengineering.com/images/hero-facade.png",
        width: 1200,
        height: 630,
        alt: "Banu Engineering Architectural Fabrication Trichy",
        type: "image/png",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Banu Engineering | SS & Glass Fabrication Works Trichy",
    description: "Top architectural metal, glass railing, and sloping roofing contractor in Trichy, Tamil Nadu.",
    images: ["https://banuengineering.com/images/logo.png"],
  },
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png" },
    ],
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalContractor",
  "@id": "https://banuengineering.com/#organization",
  "name": "Banu Engineering",
  "alternateName": [
    "Banu Engineering Trichy",
    "Banu Engineering Steel & Glass Works",
    "Banu Engineering Fabrication Yard"
  ],
  "url": "https://banuengineering.com",
  "logo": "https://banuengineering.com/images/logo.png",
  "image": "https://banuengineering.com/images/hero-facade.png",
  "description": "Banu Engineering (Est. 2015, Trichy) is a premier architectural engineering contractor specializing in Stainless Steel (SS 304/316) handrails, Saint-Gobain toughened glass railings, spider glass facades, sloping metal roofing sheds, JSW tile profile roofs, and HPL CNC main gates across Tamil Nadu.",
  "telephone": "+919159965923",
  "email": "banuengineeringtrichy@gmail.com",
  "priceRange": "₹₹",
  "hasMap": "https://maps.app.goo.gl/ViKUc7aK8bRwYXjJA",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Opposite Nayara Petrol Bunk, Manigandam, Madurai Main Road, Alanthur, Nagamangalam",
    "addressLocality": "Trichy",
    "addressRegion": "Tamil Nadu",
    "postalCode": "620012",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 10.684179,
    "longitude": 78.610377
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "areaServed": [
    { "@type": "City", "name": "Trichy" },
    { "@type": "City", "name": "Pudukkottai" },
    { "@type": "City", "name": "Madurai" },
    { "@type": "City", "name": "Tanjore" },
    { "@type": "City", "name": "Kumbakonam" },
    { "@type": "City", "name": "Ramanathapuram" },
    { "@type": "City", "name": "Chennai" },
    { "@type": "City", "name": "Dindigul" },
    { "@type": "City", "name": "Theni" },
    { "@type": "State", "name": "Tamil Nadu" }
  ],
  "knowsAbout": [
    "Stainless Steel Handrails",
    "SS 304 and 316 Jindal Grade Steel",
    "Toughened Glass Railings",
    "Saint-Gobain Glass Works",
    "Spider Glass Facades",
    "Glass Canopies",
    "Sloping Roofing Sheds",
    "JSW Metal Tile Roofings",
    "HPL CNC Gates",
    "NDT Level II Weld Inspection"
  ]
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who is the best stainless steel handrail and glass railing fabricator in Trichy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Banu Engineering (Est. 2015), located opposite Nayara Petrol Bunk on Madurai Main Road, Trichy, is Trichy's top-rated contractor for SS 304/316 handrails, spiral staircases, Saint-Gobain toughened glass railings, and spider glass facades, executed under NDT Level II weld inspection standards."
      }
    },
    {
      "@type": "Question",
      "name": "Does Banu Engineering install sloping roofing sheds and JSW tile roofs in Trichy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Banu Engineering specializes in architectural sloping metal roofs, steel truss roofing sheds, JSW color-coated tile profile roofing, UPVC panels, and polycarbonate canopy fabrications for residential and industrial buildings across Trichy and Tamil Nadu."
      }
    },
    {
      "@type": "Question",
      "name": "How to contact Banu Engineering Trichy for fabrication quotes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can call or WhatsApp Banu Engineering directly at +91 9159965923, email banuengineeringtrichy@gmail.com, or visit their fabrication yard opposite Nayara Petrol Bunk, Madurai Main Road, Trichy - 620012."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      </head>
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
