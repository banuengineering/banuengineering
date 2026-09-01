"use client";

import QuoteForm from "@/components/QuoteForm";
import { Suspense } from "react";

export default function ContactPage() {
  return (
    <div className="contact-page-wrapper">
      {/* Header */}
      <section className="section-padding container">
        <span className="eyebrow">Contact & Inquiries</span>
        <h1 className="heading-display" style={{ fontSize: '3.75rem', maxWidth: '800px' }}>
          Let's talk about your project
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '480px', lineHeight: '1.7' }}>
          Whether you need structural analysis, measurements, or have architect blueprints ready, submit details to our engineering team.
        </p>
      </section>

      {/* Split Details Section */}
      <section className="container" style={{ paddingBottom: '10rem' }}>
        <div className="contact-layout-split">
          
          {/* Left Column: Coordinates & Map */}
          <div className="contact-details-panel">
            <h2 className="heading-medium" style={{ fontSize: '2rem' }}>Fabrication Yard</h2>
            
            <div className="craft-spec-list" style={{ borderTop: 'none', paddingTop: 0 }}>
              <div className="craft-spec-item">
                <span className="craft-spec-label">Physical Address</span>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginTop: '0.25rem' }}>
                  Banu Engineering,<br/>
                  Kullampatti, Alanthur, Nagamangalam,<br/>
                  Manigandam, Madurai Main Road,<br/>
                  opposite Nayara Petrol Bunk,<br/>
                  Trichy – 620012, Tamil Nadu, India.
                </p>
              </div>

              <div className="craft-spec-item">
                <span className="craft-spec-label">Direct Phone & WhatsApp</span>
                <a href="tel:9159965923" style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-primary)', marginTop: '0.25rem' }}>9159965923</a>
              </div>

              <div className="craft-spec-item">
                <span className="craft-spec-label">Email Sourcing</span>
                <a href="mailto:banuengineeringtrichy@gmail.com" style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--text-primary)', marginTop: '0.25rem' }}>
                  banuengineeringtrichy@gmail.com
                </a>
              </div>

              <div className="craft-spec-item">
                <span className="craft-spec-label">Business Hours</span>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                  9:00 AM – 6:00 PM<br/>
                  (Monday through Saturday. Sunday: Closed)
                </p>
              </div>
            </div>

            {/* Map Frame */}
            <div style={{ width: '100%', height: '320px', border: '1px solid var(--border-color)', overflow: 'hidden', marginTop: '2rem' }}>
              <iframe
                title="Banu Engineering Office Map Location"
                src="https://maps.google.com/maps?q=Banu%20Engineering%20opposite%20Nayara%20Petrol%20Bunk%20Trichy&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

          {/* Right Column: Form */}
          <div style={{ width: '100%' }}>
            <Suspense fallback={<div>Loading quote options...</div>}>
              <QuoteForm />
            </Suspense>
          </div>

        </div>
      </section>
    </div>
  );
}
