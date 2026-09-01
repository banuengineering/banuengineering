import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const cities = [
    "Trichy", "Pudukkottai", "Thanjavur", "Kumbakonam",
    "Ramanathapuram", "Madurai", "Chennai", "Dindigul", "Theni"
  ];

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">

          {/* Column 1: Brand Info */}
          <div className="footer-col">
            <span className="footer-brand">BANU ENGINEERING</span>
            <p className="footer-desc">
              Transforming raw materials into architectural elements. We fabricate and install high-integrity Stainless Steel, Toughened Glass, and Aluminium Composite Panel (ACP) facade elevations.
            </p>
            <div style={{ fontStyle: 'italic', fontSize: '0.8rem', color: 'var(--text-primary)', borderLeft: '1.5px solid var(--text-primary)', paddingLeft: '0.75rem', marginTop: '0.5rem' }}>
              “Quality is our proof.”
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h3 className="footer-h3">Index</h3>
            <ul className="footer-links-list">
              <li><Link href="/projects" className="nav-link" style={{ fontSize: '0.85rem' }}>Projects</Link></li>
              <li><Link href="/#about" className="nav-link" style={{ fontSize: '0.85rem' }}>About</Link></li>
              <li><Link href="/contact" className="nav-link" style={{ fontSize: '0.85rem' }}>Contact</Link></li>
              <li><Link href="/contact?quote=true" className="nav-link" style={{ fontSize: '0.85rem' }}>Get Quote</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="footer-col">
            <h3 className="footer-h3">Inquiries</h3>
            <div className="footer-contact-details">
              <div className="footer-contact-item">
                <span className="footer-contact-label">Call / WhatsApp</span>
                <a href="tel:9159965923" className="footer-contact-val">9159965923</a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-label">Email Address</span>
                <a href="mailto:banuengineeringtrichy@gmail.com" className="footer-contact-val" style={{ textTransform: 'none' }}>banuengineeringtrichy@gmail.com</a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-label">Working Hours</span>
                <span className="footer-contact-val" style={{ fontSize: '0.8rem', fontWeight: 'normal' }}>9:00 AM – 6:00 PM<br />(Sunday: Closed)</span>
              </div>
            </div>
          </div>

          {/* Column 4: Physical Address */}
          <div className="footer-col">
            <h3 className="footer-h3">Office</h3>
            <p className="footer-desc footer-address">
              Kullampatti, Alanthur, Nagamangalam, Manigandam, Madurai Main Road,<br />
              opposite Nayara Petrol Bunk,<br />
              Trichy – 620012, Tamil Nadu.
            </p>
            <div style={{ marginTop: '0.5rem' }}>
              <a
                href="https://maps.app.goo.gl/rUeEwtoaopDp6Ttt7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-underline"
                style={{ fontSize: '0.75rem' }}
              >
                Google Maps Location
              </a>
            </div>
          </div>

        </div>

        {/* Geographic Presence Block */}
        <div style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid var(--border-color)' }}>
          <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--text-muted)', fontWeight: '700', display: 'block', marginBottom: '1.5rem' }}>
            Serving Projects Across Tamil Nadu
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
            {cities.map((city) => (
              <span key={city} className="city-outline-tag" style={{ padding: '0.5rem 1.25rem', fontSize: '0.75rem' }}>{city}</span>
            ))}
            <span className="city-outline-tag active-tag" style={{ padding: '0.5rem 1.25rem', fontSize: '0.75rem', fontWeight: '700' }}>All over Tamil Nadu</span>
          </div>
        </div>

        {/* Footer Bottom Metadata Bar */}
        <div className="footer-bottom">
          <span>
            © {currentYear} Banu Engineering. All rights reserved.
          </span>
          <span className="welder-qualification">
            Lead Welder: NTD-IBR Qualified
          </span>
        </div>
      </div>
    </footer>
  );
}
