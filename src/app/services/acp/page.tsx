import Link from "next/link";
import Image from "next/image";

export default function AcpService() {
  const offerings = [
    {
      title: "Commercial Facade Cladding",
      desc: "Complete exterior elevation systems designed to modernize commercial premises, office buildings, and retail outlets."
    },
    {
      title: "Showroom Front Panels",
      desc: "Sleek, eye-catching architectural panels designed specifically for showroom entrances, using geometric layouts that capture consumer attention."
    },
    {
      title: "SS, Glass & ACP Combined Works",
      desc: "Integrated structural designs blending solid composite panel facades with clear toughened glass panels and polished stainless steel frame accents."
    },
    {
      title: "Weatherproof Panel Installation",
      desc: "Precision-sealed panel systems featuring heavy-duty backing frames and premium silicone joints to resist rain penetration and solar fading."
    }
  ];

  return (
    <div className="service-page-wrapper">
      {/* Service Hero */}
      <section className="hero-cinematic container">
        <div className="hero-editorial-grid">
          <div className="hero-text-col">
            <span className="eyebrow" style={{ color: 'var(--accent-brand)', fontWeight: '800' }}>Core Expertise 03</span>
            <h1 className="hero-display-title">ACP Elevation</h1>
            <p className="hero-paragraph">
              Precision-fabricated Aluminium Composite Panel (ACP) facades for modern building frontages. Architectural cladding built around durability and aesthetics.
            </p>
            <div>
              <Link href="/contact?quote=true&service=ACP+Elevation" className="btn-primary">
                Get a Quote
              </Link>
            </div>
          </div>
          <div className="hero-image-col">
            <Image 
              src="/images/acp-elevation.png" 
              alt="Premium Aluminium Composite Panel cladding on a modern commercial facade"
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
            <span className="eyebrow">Geometric Elevation</span>
            <h2 className="heading-medium">Clean Facades</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              ACP cladding is highly effective for updating aging buildings and creating brand-specific modern storefronts. However, subpar sub-framing or inaccurate panel alignment leads to buckling under high wind pressure and unsightly uneven seams.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              At **Banu Engineering**, we utilize heavy-gauge aluminum and structural steel frame systems to anchor each ACP panel. Our engineering team designs with precise expansions gaps and high-grade silicone sealants, preventing warping and ensuring a perfectly flat, clean visual grid.
            </p>
            
            <div style={{ borderLeft: '2px solid var(--text-primary)', paddingLeft: '1.5rem', marginTop: '1.5rem' }}>
              <span className="eyebrow" style={{ marginBottom: '0.25rem' }}>Combined Glazing Cladding</span>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                We specialize in complex, multi-material facades. We integrate structural <strong>Jindal steel joints</strong> with <strong>Saint-Gobain glass panels</strong> and premium ACP cladding to produce comprehensive architectural structures.
              </p>
            </div>
          </div>

          {/* Right Offerings Column */}
          <div className="service-offerings-col">
            <span className="eyebrow">Cladding Offerings</span>
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
            <h3>Transform your building frontage</h3>
            <p>
              Ready to convert a standard commercial building front into a premium, high-value visual asset? Request a site measurement and architectural quote.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/contact?quote=true&service=ACP+Elevation" className="btn-primary">
                Discuss Cladding Specs
              </Link>
              <a href="https://wa.me/9159965923?text=Hi%20Banu%20Engineering,%20I'm%20inquiring%20about%20ACP%20Elevation%20works." target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Enquire via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
