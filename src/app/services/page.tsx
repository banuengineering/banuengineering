"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);

  const servicesCatalog = [
    {
      id: "01",
      title: "Stainless Steel Handrails (Staircase & Balcony)",
      category: "Stainless Steel",
      desc: "SS 304 & 316 grade handrails designed for staircase safety and balcony elegance. Available in mirror, matte, and hairline finishes.",
      image: "/images/steel-staircase.png",
      tags: ["SS 304/316", "Jindal Grade", "Mirror / Hairline Finish"]
    },
    {
      id: "02",
      title: "SS & MS Spiral Steps",
      category: "Stainless Steel",
      desc: "Space-saving circular staircase structures engineered with heavy MS or SS frameworks and anti-skid safety treads.",
      image: "/images/steel-staircase.png",
      tags: ["Spiral Architecture", "SS & MS Treads", "Space Saver"]
    },
    {
      id: "03",
      title: "Toughened Glass Railings with Design",
      category: "Toughened Glass",
      desc: "12mm–19mm Saint-Gobain toughened glass railing systems featuring custom etched designs and concealed base shoe channels.",
      image: "/images/glass-railing.png",
      tags: ["Saint-Gobain Glass", "Custom Etched Design", "Ozzon Hardware"]
    },
    {
      id: "04",
      title: "Stainless Steel & Glass Staircases",
      category: "Stainless Steel",
      desc: "Modern floating and stringer staircases combining heavy SS load-bearing frames with structural toughened glass steps.",
      image: "/images/steel-staircase.png",
      tags: ["Hybrid Construction", "Glass Treads", "Heavy Duty"]
    },
    {
      id: "05",
      title: "Spider Glass Works",
      category: "Toughened Glass",
      desc: "Frameless commercial curtain walls and entrance facades using SS 316 Ozzon spider fittings and point-fixed bolts.",
      image: "/images/glass-railing.png",
      tags: ["Frameless Facades", "SS 316 Spiders", "Ozzon Fittings"]
    },
    {
      id: "06",
      title: "Glass Canopies",
      category: "Toughened Glass",
      desc: "Weather-resistant entrance canopy structures with laminated toughened glass panels supported by heavy SS tie-rod tension bars.",
      image: "/images/glass-railing.png",
      tags: ["Overhead Protection", "Laminated Glass", "SS Tie-Rods"]
    },
    {
      id: "07",
      title: "Shower Enclosures",
      category: "Toughened Glass",
      desc: "Custom frameless glass shower cubicles, sliding glass partitions, and magnetic seal doors with rust-free brass fittings.",
      image: "/images/glass-railing.png",
      tags: ["Frameless Glass", "Water-Tight Seals", "Luxury Bathrooms"]
    },
    {
      id: "08",
      title: "SS Safety Gates & Compound Gates (HPL with CNC)",
      category: "Stainless Steel",
      desc: "Architectural main compound gates combining heavy SS 304 frames with precision CNC laser-cut High-Pressure Laminate (HPL) panels.",
      image: "/images/welding-craft.png",
      tags: ["HPL Sheet Inserts", "CNC Laser Cut", "Rust Guarantee"]
    },
    {
      id: "09",
      title: "Terracotta Jally with Toughened Glass",
      category: "Toughened Glass",
      desc: "Traditional earthy terracotta jally screens backed with thermal toughened glass for natural ventilation, cooling, and weather protection.",
      image: "/images/glass-railing.png",
      tags: ["Terracotta Clay Jally", "Eco Elevation", "Rain Proofing"]
    },
    {
      id: "10",
      title: "Roofing Shed (JSW Metal, UPVC, Polycarbonate)",
      category: "Structural Sheds",
      desc: "Industrial and residential roofing sheds built with JSW color-coated steel sheets, multi-wall polycarbonate, or insulated UPVC panels.",
      image: "/images/acp-elevation.png",
      tags: ["JSW Metal Sheets", "UPVC & Polycarbonate", "Residential & Commercial"]
    },
    {
      id: "11",
      title: "Sloping Metal Roofings",
      category: "Sloping Roofings",
      desc: "Architectural sloping roofs and modern steel truss roofing structures with JSW color-coated metal tile profile sheets.",
      image: "/images/roofing.jpeg",
      tags: ["Sloping Roofs", "JSW Color Tile", "Weatherproof Trusses"]
    },
    {
      id: "12",
      title: "Modular Kitchen Frameworks",
      category: "Interior & Modular",
      desc: "Stainless steel 304 termite-proof modular kitchen frameworks, heavy-duty wire basket supports, and metal storage cabinets.",
      image: "/images/welding-craft.png",
      tags: ["SS 304 Frame", "Termite Proof", "Custom Drawers"]
    },
    {
      id: "13",
      title: "Loft & Cupboard Works",
      category: "Interior & Modular",
      desc: "Heavy-gauge metal framing for lofts, bedroom cupboards, and utility storage racks built for maximum load capacity.",
      image: "/images/welding-craft.png",
      tags: ["Loft Framing", "Metal Cupboards", "High Load Capacity"]
    },
    {
      id: "14",
      title: "Custom SS & Glass Works",
      category: "Custom Fabrication",
      desc: "Bespoke architectural steel and glass installations tailored to specific engineering drawings and interior designer specs.",
      image: "/images/welding-craft.png",
      tags: ["Bespoke Specs", "Architectural Joinery", "On-Demand Design"]
    }
  ];

  const servicesIndex = [
    {
      num: "01",
      title: "STAINLESS STEEL SYSTEMS",
      tags: ["SS Handrails", "Spiral Steps", "SS & Glass Staircases", "CNC Gates"],
      image: "/images/steel-staircase.png"
    },
    {
      num: "02",
      title: "TOUGHENED GLASS WORKS",
      tags: ["Glass Railings", "Spider Glass", "Canopies", "Shower Cubicles", "Terracotta Jally"],
      image: "/images/glass-railing.png"
    },
    {
      num: "03",
      title: "STRUCTURAL ROOFINGS",
      tags: ["Sloping Roofs", "JSW Metal Tile", "UPVC", "Industrial Sheds"],
      image: "/images/roofing.jpeg"
    },
    {
      num: "04",
      title: "INTERIOR & CUSTOM WORKS",
      tags: ["Modular Kitchen", "Loft & Cupboard Works", "Custom Fabrication"],
      image: "/images/welding-craft.png"
    }
  ];

  const scrollReveal = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  return (
    <div className="services-overview-page-wrapper">
      {/* PAGE HERO */}
      <section className="container" style={{ paddingTop: '6rem', marginBottom: '3rem' }}>
        <span className="eyebrow" style={{ color: 'var(--accent-brand)', fontWeight: '800' }}>Core Fabrication & Engineering Services</span>
        <h1 className="heading-display" style={{ fontSize: "3.75rem", maxWidth: "900px", color: "var(--text-primary)" }}>
          Services Index & Complete Capability Matrix
        </h1>
        <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: "680px", lineHeight: "1.8", marginTop: "1rem" }}>
          From high-grade SS 304/316 handrails and Saint-Gobain toughened glass facades to JSW roofing sheds and HPL CNC compound gates—explore our full spectrum of 14 specialized fabrication services.
        </p>
      </section>

      {/* 01 — SERVICES INDEX */}
      <section className="section-padding container" style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', marginBottom: '4rem' }} aria-label="Services Index">
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="eyebrow">Services Index</span>
          <h2 className="heading-display" style={{ fontSize: '3rem', marginBottom: '1rem' }}>What We Build</h2>
        </motion.div>

        <div className="services-index-grid" style={{ marginTop: '3rem' }}>
          <div className="services-index-nav">
            {servicesIndex.map((service, idx) => (
              <div
                key={service.num}
                className={`service-index-row ${activeService === idx ? 'active-row' : ''}`}
                onMouseEnter={() => setActiveService(idx)}
                onClick={() => setActiveService(idx)}
              >
                <span className="service-num">{service.num}</span>
                <div>
                  <span className="service-title">{service.title}</span>
                  <div className="service-meta-sub">
                    {service.tags.map((tag) => (
                      <span key={tag} className="service-sub-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="services-visual-frame">
            <Image
              src={servicesIndex[activeService].image}
              alt={`${servicesIndex[activeService].title} output installation`}
              width={600}
              height={520}
              priority
            />
          </div>
        </div>
      </section>

      {/* 02 — ALL 14 SERVICES CATALOG GRID */}
      <section className="section-padding container" style={{ borderBottom: '1px solid var(--border-color)', marginBottom: '6rem' }} aria-label="Complete List of Services">
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="eyebrow" style={{ color: 'var(--accent-brand)' }}>Complete Capability Matrix</span>
          <h2 className="heading-display" style={{ fontSize: '2.75rem', marginBottom: '1rem' }}>
            All 14 Fabrication & Architectural Services
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '620px', lineHeight: '1.7', marginBottom: '3rem' }}>
            Explore our specialized architectural steel, glass, and structural roofing solutions engineered for longevity and safety.
          </p>
        </motion.div>

        <div className="brand-specs-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }}>
          {servicesCatalog.map((item) => (
            <motion.div
              key={item.id}
              className="brand-glass-card"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span className="cert-hero-badge" style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}>
                    SERVICE #{item.id}
                  </span>
                  <span className="cert-meta-pill" style={{ margin: 0, fontSize: '0.75rem' }}>
                    {item.category}
                  </span>
                </div>

                <h3 className="brand-card-title" style={{ fontSize: '1.25rem', lineHeight: '1.35', marginBottom: '0.75rem' }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                  {item.desc}
                </p>

                <div className="brand-specs-list" style={{ marginBottom: '1.5rem' }}>
                  {item.tags.map((tag) => (
                    <span key={tag} className="brand-spec-item" style={{ fontSize: '0.8rem' }}>
                      ✦ {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <Link
                  href={`/contact?service=${encodeURIComponent(item.title)}`}
                  className="btn-primary"
                  style={{ display: 'block', textAlign: 'center', width: '100%', padding: '0.8rem 1rem', fontSize: '0.85rem' }}
                >
                  Request Quote for This Service →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 03 — FREQUENTLY ASKED QUESTIONS & LLM SEARCH OPTIMIZATION */}
      <section className="section-padding container" style={{ borderBottom: '1px solid var(--border-color)', marginBottom: '6rem' }} aria-label="Frequently Asked Questions">
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="eyebrow" style={{ color: 'var(--accent-brand)' }}>Engineering Inquiries & Service Guidance</span>
          <h2 className="heading-display" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
            Frequently Asked Questions — Banu Engineering Trichy
          </h2>
        </motion.div>

        <div className="brand-specs-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }}>
          <div className="brand-glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.75rem', fontWeight: '700' }}>
              Q: Who is the top-rated SS handrail and toughened glass railing fabricator in Trichy?
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              <strong>Banu Engineering (Est. 2015)</strong>, headquartered opposite Nayara Petrol Bunk on Madurai Main Road, Trichy, is Trichy’s leading specialist for SS 304/316 handrails, spiral staircases, Saint-Gobain toughened glass railings, and spider glazing facades. All projects are executed under certified NDT Level II weld inspection standards.
            </p>
          </div>

          <div className="brand-glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.75rem', fontWeight: '700' }}>
              Q: Does Banu Engineering manufacture sloping roofing sheds and JSW metal tile roofs in Trichy?
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              Yes, Banu Engineering specializes in heavy-duty structural steel truss roofing sheds, JSW color-coated tile profile roofing, UPVC panels, polycarbonate canopies, and ACP facade elevations for residential villas and industrial plants across Trichy, Pudukkottai, Tanjore, and Madurai.
            </p>
          </div>

          <div className="brand-glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.75rem', fontWeight: '700' }}>
              Q: What materials and quality guarantees does Banu Engineering provide?
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              We exclusively use Jindal grade SS 304 & SS 316 stainless steel, Saint-Gobain thermal toughened safety glass, Ozzon hardware fittings, and JSW color-coated steel roofing profile sheets. All weld joinery comes with zero-defect structural inspection and rust guarantees.
            </p>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BLOCK */}
      <section className="container" style={{ marginBottom: '6rem' }}>
        <div className="cta-box" style={{ textAlign: 'center', background: 'var(--surface-color)', padding: '4rem 2rem', border: '1px solid var(--border-color)' }}>
          <span className="eyebrow" style={{ color: 'var(--accent-brand)' }}>Completed Portfolio</span>
          <h3 style={{ fontSize: '2.25rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>Want to See Works Installed Across Tamil Nadu?</h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '550px', margin: '0 auto 2rem auto', lineHeight: '1.7' }}>
            Browse our full works archive featuring high-resolution photography of completed projects in Trichy, Madurai, Pudukkottai, and Chennai.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/projects" className="btn-primary">
              View Projects Gallery →
            </Link>
            <Link href="/contact?quote=true" className="btn-secondary">
              Request a Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
