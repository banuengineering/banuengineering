import Link from "next/link";
import Image from "next/image";

export default function AcpService() {
  const offerings = [
    {
      title: "Sloping Metal Roofings",
      desc: "Architectural sloping rooflines engineered with precision MS / SS steel structural truss frameworks and JSW color-coated metal tile profile sheets for residential homes and luxury villas."
    },
    {
      title: "JSW Color-Coated Metal Tile Roofing",
      desc: "Lightweight, high-strength weatherproof metal tile roofing sheets with multi-layer heat insulation and zero leak structural installation."
    },
    {
      title: "Industrial & Commercial Structural Sheds",
      desc: "Heavy-duty structural steel trusses, factory sheds, and warehouse roofing featuring UPVC and translucent polycarbonate skylight paneling."
    },
    {
      title: "Car Porch & Terrace Roof Extensions",
      desc: "Custom architectural roof structures, cantilevered car parking sheds, and weatherproof outdoor patio roof enclosures."
    }
  ];

  return (
    <div className="service-page-wrapper">
      {/* Service Hero */}
      <section className="hero-cinematic container">
        <div className="hero-editorial-grid">
          <div className="hero-text-col">
            <span className="eyebrow" style={{ color: 'var(--accent-brand)', fontWeight: '800' }}>Core Expertise 03</span>
            <h1 className="hero-display-title">Roofings & Structural Sheds</h1>
            <p className="hero-paragraph">
              Custom-engineered sloping metal roofings and steel truss structures. Weatherproof JSW metal tile roofing, UPVC, and heavy-duty structural sheds designed for timeless aesthetics and lifetime durability.
            </p>
            <div>
              <Link href="/contact?quote=true&service=Roofings" className="btn-primary">
                Get a Quote
              </Link>
            </div>
          </div>
          <div className="hero-image-col">
            <Image
              src="/images/roofing.jpeg"
              alt="Structural Roofing and Tile Shed Fabrication by Banu Engineering"
              fill
              sizes="(max-width: 950px) 100vw, 600px"
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Detail Description */}
      <section className="section-padding container" style={{ borderTop: '1px solid var(--border-color)' }}>
        <div className="grid-12">
          {/* Left Text Column */}
          <div className="service-text-col">
            <span className="eyebrow">Architectural Truss Craftsmanship</span>
            <h2 className="heading-medium">Sloping Roofings & Structural Sheds</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              Sloping rooflines and custom structural roofing add unmatched elegance and thermal comfort to Indian homes. However, traditional wooden or weak sub-rafters degrade over time due to weather exposure, humidity, and pest infestation.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              At **Banu Engineering**, we engineer high-strength structural steel and stainless steel truss sub-framing paired with JSW color-coated metal tile roofing profile sheets. Our precision-welded joinery ensures structural stability against monsoon storms while retaining classic architectural charm.
            </p>

            <div style={{ borderLeft: '2px solid var(--text-primary)', paddingLeft: '1.5rem', marginTop: '1.5rem' }}>
              <span className="eyebrow" style={{ marginBottom: '0.25rem' }}>Weatherproof Engineering</span>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                We combine structural <strong>Jindal steel framing</strong> with <strong>premium heat-insulation underlays</strong> and weatherproof sealant flashings, delivering roofs that stay cool, quiet, and 100% leak-proof for decades.
              </p>
            </div>
          </div>

          {/* Right Offerings Column */}
          <div className="service-offerings-col">
            <span className="eyebrow">Roofing Solutions</span>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '2rem' }}>
              {offerings.map((off, idx) => (
                <div key={idx} className="offering-row">
                  <span className="offering-num">0{idx + 1}</span>
                  <div className="offering-content">
                    <h4>{off.title}</h4>
                    <p>{off.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="presence-section section-padding" style={{ borderBottom: 'none' }} aria-label="CTA">
        <div className="container">
          <div className="cta-box">
            <span className="eyebrow" style={{ color: 'var(--accent-brand)' }}>Initiate Discussion</span>
            <h3>Plan Your Structural Roofing Project</h3>
            <p>
              Ready to construct a sloping metal roof, villa terrace canopy, or heavy industrial shed? Request a site measurement and engineering estimate.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/contact?quote=true&service=Roofings" className="btn-primary">
                Discuss Roofing Specs
              </Link>
              <a href="https://wa.me/9159965923?text=Hi%20Banu%20Engineering,%20I'm%20inquiring%20about%20Roofings." target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Enquire via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
