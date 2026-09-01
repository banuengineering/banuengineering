import Link from "next/link";
import Image from "next/image";

export default function StainlessSteelService() {
  const offerings = [
    {
      title: "Staircase Handrails",
      desc: "Architectural staircase railings custom-formed to suit spiral, straight, or curved stairs. Sourced from high-integrity Jindal steel."
    },
    {
      title: "Balcony Handrails",
      desc: "Rust-resistant outdoor balcony handrails designed to endure heavy rain, salt air, and direct sun without losing structural tensile capacity."
    },
    {
      title: "SS & MS Spiral Steps",
      desc: "Precision-engineered spiral staircases for residential lofts and commercial access yards. Tailored dimensions for optimal spacing."
    },
    {
      title: "SS Safety & Compound Gates",
      desc: "Heavy-duty security gates fabricated with robust structural piping and seamless welded joints for lasting security."
    },
    {
      title: "Custom Steel Works",
      desc: "Structural columns, custom brackets, architectural steel fixtures, and decorative grilles crafted to custom engineering drawings."
    }
  ];

  return (
    <div className="service-page-wrapper">
      {/* Service Header */}
      <section className="hero-cinematic container">
        <div className="hero-editorial-grid">
          <div className="hero-text-col">
            <span className="eyebrow" style={{ color: 'var(--accent-brand)', fontWeight: '800' }}>Core Expertise 01</span>
            <h1 className="hero-display-title">Stainless Steel</h1>
            <p className="hero-paragraph">
              Precision-fabricated, heavy-duty stainless steel solutions for residential and commercial spaces. Engineered for high structural integrity and rust-free durability.
            </p>
            <div>
              <Link href="/contact?quote=true&service=Stainless+Steel+Works" className="btn-primary">
                Get a Quote
              </Link>
            </div>
          </div>
          <div className="hero-image-col">
            <Image 
              src="/images/steel-staircase.png" 
              alt="Custom stainless steel balcony and staircase handrails by Banu Engineering"
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
            <span className="eyebrow">Welding Quality</span>
            <h2 className="heading-medium">Precision Joinery</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              Stainless steel structures are only as stable as their joinery. Typical fabrication shops use simple arc welding that leaves porous joints, creating stress concentration points that are prone to fracture and rust over time.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              At **Banu Engineering**, we utilize inert gas welding (TIG) executed by an **NTD-IBR qualified welder**. This process yields fully fused joints with pristine, slag-free finishes that resemble a neat row of overlapping coins. The result is structural steelwork that withstands heavy daily usage and outdoor exposure for decades.
            </p>
            
            <div style={{ borderLeft: '2px solid var(--text-primary)', paddingLeft: '1.5rem', marginTop: '1.5rem' }}>
              <span className="eyebrow" style={{ marginBottom: '0.25rem' }}>Confirmed Sourcing</span>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                We source raw steel tubes and sheets from <strong>Jindal Stainless</strong>, guaranteeing standard chemical composition to ensure chemical stability and rust protection.
              </p>
            </div>
          </div>

          {/* Right Offerings Column */}
          <div className="service-offerings-col">
            <span className="eyebrow">Our Metal Fabrications</span>
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
            <h3>Bring us your design drawings</h3>
            <p>
              Have custom design drawings from your architect, or need us to formulate measurements for your staircase? Let’s initiate a structural discussion.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/contact?quote=true&service=Stainless+Steel+Works" className="btn-primary">
                Submit Specifications
              </Link>
              <a href="https://wa.me/9159965923?text=Hi%20Banu%20Engineering,%20I'm%20inquiring%20about%20Stainless%20Steel%20works." target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Enquire via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
