import Link from "next/link";
import Image from "next/image";

export default function GlassService() {
  const offerings = [
    {
      title: "Toughened Glass Railings",
      desc: "Balcony and deck railings utilizing heavy-duty tempered safety glass panels. Choose between frameless spigots, post mounts, or recessed profiles."
    },
    {
      title: "Spider Glass Works",
      desc: "Frameless spider-fitting glass walls for commercial showrooms and corporate entries. Allows maximum transparency and high load capacity."
    },
    {
      title: "Architectural Glass Canopies",
      desc: "Entrance canopies fabricated with structural steel frames and laminated tempered glass panels to resist storm winds and impact."
    },
    {
      title: "Custom Shower Enclosures",
      desc: "Elegant shower spaces utilizing custom-dimensioned tempered glass, high-end Ozzon hinges, and waterproof gaskets."
    },
    {
      title: "Terracotta Jally & Tough Glass",
      desc: "Bespoke fusion screens mixing traditional terracotta jali work with clear toughened glass panels for unique thermal and acoustic barriers."
    },
    {
      title: "Custom Architectural Glass",
      desc: "Glass partition walls, sliding glass dividers, structural glass stairs, and geometric panels made to specification."
    }
  ];

  return (
    <div className="service-page-wrapper">
      {/* Service Header */}
      <section className="hero-cinematic container">
        <div className="hero-editorial-grid">
          <div className="hero-text-col">
            <span className="eyebrow" style={{ color: 'var(--accent-brand)', fontWeight: '800' }}>Core Expertise 02</span>
            <h1 className="hero-display-title">Toughened Glass</h1>
            <p className="hero-paragraph">
              Architectural glazing systems combining structural safety with geometric elegance. Fabricated using premium Saint-Gobain safety glass.
            </p>
            <div>
              <Link href="/contact?quote=true&service=Toughened+Glass+Works" className="btn-primary">
                Get a Quote
              </Link>
            </div>
          </div>
          <div className="hero-image-col">
            <Image 
              src="/images/glass-railing.png" 
              alt="Architectural toughened glass railings with stainless steel fittings"
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
            <span className="eyebrow">Precision Engineering</span>
            <h2 className="heading-medium">Glazing Safety</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              Architectural glass installation demands absolute precision. Improperly aligned spigots or miscalculated expansion gaps can cause glass panels to experience localized mechanical stress, leading to spontaneous breakage.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              At **Banu Engineering**, we engineer every glass fixture with safety buffers. We source only customized, factory-tempered glass from industry-best manufacturers like **Saint-Gobain**, ensuring impact resistance and structural longevity.
            </p>
            
            <div style={{ borderLeft: '2px solid var(--text-primary)', paddingLeft: '1.5rem', marginTop: '1.5rem' }}>
              <span className="eyebrow" style={{ marginBottom: '0.25rem' }}>Confirmed Hardware</span>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                We anchor all glass panels using premium heavy-duty brackets, anchors, and spiders by <strong>Ozzon</strong>. These are fabricated from structural grade steel and designed to eliminate metal-on-glass friction, safeguarding against fractures.
              </p>
            </div>
          </div>

          {/* Right Offerings Column */}
          <div className="service-offerings-col">
            <span className="eyebrow">Our Glazing Services</span>
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
            <h3>Discuss your project glazing</h3>
            <p>
              Whether you need balcony railings for a multi-unit apartment complex or a spider-glass storefront for a commercial showroom, we have the installation expertise.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/contact?quote=true&service=Toughened+Glass+Works" className="btn-primary">
                Request Quote
              </Link>
              <a href="https://wa.me/9159965923?text=Hi%20Banu%20Engineering,%20I'm%20inquiring%20about%20Toughened%20Glass%20works." target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Enquire via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
