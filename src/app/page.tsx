"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import QuoteForm from "@/components/QuoteForm";
import EngineeringWorkbench from "@/components/EngineeringWorkbench";

export default function Home() {
  const currentYear = new Date().getFullYear();
  const startYear = 2007;
  const yearsExperience = currentYear - startYear;

  // Section 01: Material hover photo swap state
  const [activeMaterial, setActiveMaterial] = useState(0);

  const materialsList = [
    {
      title: "STEEL",
      desc: "Raw high-tensile steel columns, tubes, and sheets transformed via gas-tungsten welding into high-integrity staircases, compound gates, and safety handrails.",
      image: "/images/steel-staircase.png"
    },
    {
      title: "GLASS",
      desc: "Factory-tempered safety glass custom-engineered for frameless balcony balustrades, spider-fitting glazed frontages, and architectural canopies.",
      image: "/images/glass-railing.png"
    },
    {
      title: "ROOFINGS",
      desc: "Sloping metal roofings and structural steel trusses fabricated with JSW color-coated tile sheets, UPVC panels, and weatherproof insulation.",
      image: "/images/roofing.jpeg"
    }
  ];

  const featuredWorks = [
    {
      image: "/images/steel-staircase.png",
      title: "Structural Brushed SS Staircase",
      location: "Trichy Sarathas, Trichy",
      desc: "Custom-rolled spiral steps and handrails fully fused with TIG welding for premium commercial access.",
      layout: "col-8"
    },
    {
      image: "/images/glass-railing.png",
      title: "Frameless Spigot Glass Balcony",
      location: "Thaila Silks, Trichy",
      desc: "Saint-Gobain laminated safety glass sheets anchored with custom floor-mounted spigots.",
      layout: "col-4"
    },
    {
      image: "/images/acp-elevation.png",
      title: "ACP Elevation Cladding System",
      location: "Dov Chem, Trichy",
      desc: "Custom-fabricated Aluminium Composite Panel (ACP) facade system with concealed framing and expansion joints for commercial buildings.",
      layout: "col-12"
    }
  ];

  const citiesServed = [
    "Trichy", "Pudukkottai", "Thanjavur", "Kumbakonam",
    "Ramanathapuram", "Madurai", "Chennai", "Dindigul", "Theni"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

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
    <div className="homepage-wrapper">

      {/* 01 — BENTO HERO SECTION */}
      <section className="section-padding container" aria-label="Banu Engineering Bento Opening" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <motion.div
          className="hero-bento-grid"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >

          {/* Bento Cell 1: Typographic Brand Block */}
          <motion.div className="bento-cell bento-text-card" variants={itemVariants}>
            <div className="bento-logo-block">
              <span className="eyebrow" style={{ color: 'var(--accent-brand)', fontWeight: '800', marginBottom: '0.25rem' }}>Est. 2015 / Trichy</span>
              <span className="text-meta">Stainless Steel · Glass · Roofings</span>
            </div>

            <div className="bento-title-block">
              <h1 className="bento-hero-title">
                BANU<br />
                ENGINEERING
              </h1>
              <p className="bento-hero-desc">
                Transforming raw materials into architectural structures. Custom fabrication engineered for safety and permanence.
              </p>
            </div>

            <div>
              <Link href="/contact?quote=true" className="btn-underline">
                Request a Quote →
              </Link>
            </div>
          </motion.div>

          {/* Bento Cell 2: Primary Roofing & Steel Image */}
          <motion.div className="bento-cell bento-image-large" variants={itemVariants}>
            <Image
              src="/images/hero-facade.png"
              alt="High-end structural steel, glass, and roofing structures by Banu Engineering"
              fill
              sizes="(max-width: 950px) 100vw, 50vw"
              priority
              style={{ objectFit: 'cover' }}
            />
          </motion.div>

          {/* Bento Cell 3: Secondary Craft Image */}
          <motion.div className="bento-cell bento-image-small" variants={itemVariants}>
            <Image
              src="/images/welding-craft.png"
              alt="NTD-IBR qualified welder executing TIG weld"
              fill
              sizes="(max-width: 950px) 100vw, 25vw"
              style={{ objectFit: 'cover' }}
            />
          </motion.div>

          {/* Bento Cell 4: Numeric Experience Stat */}
          <motion.div className="bento-cell bento-stat-card" variants={itemVariants}>
            <span className="bento-stat-num">{yearsExperience}</span>
            <span className="bento-stat-label">Years of Craft</span>
            <span className="bento-stat-desc">Combined experience in structural fabrication.</span>
          </motion.div>

        </motion.div>
      </section>

      {/* 02 — SECTION 01: RAW MATERIALS NARRATIVE */}
      <section className="section-padding container" style={{ borderTop: '1px solid var(--border-color)' }} aria-label="Narrative: Raw Materials">
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="eyebrow">01 — The Materials</span>
          <h2 className="heading-display">Raw Material to Element</h2>
        </motion.div>

        <div className="materials-narrative-grid" style={{ marginTop: '4rem' }}>
          <div className="materials-interactive-nav">
            {materialsList.map((material, idx) => (
              <div
                key={material.title}
                className={`material-narrative-row ${activeMaterial === idx ? 'active-row' : ''}`}
                onMouseEnter={() => setActiveMaterial(idx)}
                onClick={() => setActiveMaterial(idx)}
              >
                <span className="material-narrative-title">{material.title}</span>
                <p className="material-narrative-desc">{material.desc}</p>
              </div>
            ))}
          </div>

          <div className="materials-visual-pane">
            <Image
              src={materialsList[activeMaterial].image}
              alt={`${materialsList[activeMaterial].title} fabrication work`}
              width={600}
              height={520}
            />
          </div>
        </div>
      </section>

      {/* 03 — SECTION 02: CRAFT DETAILS (CLOSE UPS & GLASSMorphism CERTIFICATIONS) */}
      <section className="section-padding container cert-section-wrapper" style={{ borderTop: '1px solid var(--border-color)', position: 'relative' }} aria-label="Narrative: The Craft">
        {/* Ambient Glassmorphic Background Glows */}
        <div className="cert-ambient-glow gold"></div>
        <div className="cert-ambient-glow blue"></div>

        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="cert-header-badge">
            <span className="cert-pulse-dot"></span>
            <span>100% Quality & Compliance Floor</span>
          </div>
          <h2 className="heading-display shimmer-gold">Certified Welder & Standards</h2>
          <p className="craft-text-body" style={{ maxWidth: '680px', marginBottom: '3.5rem' }}>
            A structure is only as reliable as its welds and joinery. Our fabrication floor is directly supervised by an NDT-IBR qualified master welder with {yearsExperience} years of industrial experience, ensuring 100% fused joints, structural safety, and zero cross-metal contamination.
          </p>
        </motion.div>

        <div className="cert-bento-grid">
          {/* Featured Hero Card (Left 55%) */}
          <div className="cert-hero-bento">
            <div className="cert-card-shine"></div>

            <div className="cert-hero-top-bar">
              <span className="cert-sub-eyebrow" style={{ color: 'var(--accent-brand)', letterSpacing: '0.12em' }}>
                Master Floor Specification
              </span>
              <div className="cert-verify-tag">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span>Verified Welder & Inspection Floor</span>
              </div>
            </div>

            <div className="cert-hero-emblem-wrapper">
              <div className="cert-big-emblem">
                <Image
                  src="/images/certification.png"
                  alt="Certified Welder Official Certification Logo"
                  width={185}
                  height={185}
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
              <div className="cert-hero-content">
                <h3 className="cert-hero-title">Master Welder Fabrication Floor</h3>
                <p className="cert-hero-body">
                  Every structural column, stainless steel staircase, and architectural glass installation is directly engineered and welded under certified floor supervision.
                </p>
                <ul className="cert-feature-list" style={{ marginTop: '0.25rem' }}>
                  <li>
                    <span className="cert-check-bullet">✦</span>
                    <span>100% Full Penetration Weld Joints & Zero Micro-Porosity</span>
                  </li>
                  <li>
                    <span className="cert-check-bullet">✦</span>
                    <span>Hand-Finished Satin Grain & Anti-Corrosive Passivation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="cert-hero-stats-row">
              <div className="cert-stat-box">
                <span className="cert-stat-num">{yearsExperience}+ Yrs</span>
                <span className="cert-stat-label">Floor Expertise</span>
              </div>
              <div className="cert-stat-box">
                <span className="cert-stat-num">100%</span>
                <span className="cert-stat-label">Joint Fusion</span>
              </div>
              <div className="cert-stat-box">
                <span className="cert-stat-num">Zero</span>
                <span className="cert-stat-label">Micro-Porosity</span>
              </div>
            </div>
          </div>

          {/* Vertical Bento Stack (Right 45%) */}
          <div className="cert-bento-stack">
            {/* Bento 1: Regulatory Standards */}
            <div className="cert-bento-card">
              <div className="cert-card-shine"></div>
              <div className="cert-card-header">
                <div className="cert-mini-icon gold">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 18c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" />
                  </svg>
                </div>
                <div>
                  <span className="cert-sub-eyebrow">Regulatory Engineering</span>
                  <h3 className="cert-name">IBR & ASME Section IX</h3>
                </div>
              </div>

              <p className="cert-desc">
                High-pressure steam lines and heavy structural components adhere to ASME IX WPS/WPQ specifications and Indian Boiler Regulations.
              </p>

              <div className="cert-pill-list">
                <span className="cert-pill">High-Pressure Piping</span>
                <span className="cert-pill">WPS/WPQ Compliant</span>
                <span className="cert-pill">Thermal Stress Rated</span>
              </div>
            </div>

            {/* Bento 2: NDT Quality Control */}
            <div className="cert-bento-card">
              <div className="cert-card-shine"></div>
              <div className="cert-card-header">
                <div className="cert-mini-icon cyan">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                  </svg>
                </div>
                <div>
                  <span className="cert-sub-eyebrow">Quality Assurance</span>
                  <h3 className="cert-name">NDT Level II Inspection</h3>
                </div>
              </div>

              <p className="cert-desc">
                Comprehensive Radiographic (RT), Magnetic Particle (MT), Ultrasonic (UT), Liquid Penetrant (PT), and Visual (VT) testing certified under ASNT NDT Level II standards.
              </p>

              <div className="cert-pill-list">
                <span className="cert-pill">Radiographic Testing (RT)</span>
                <span className="cert-pill">Magnetic Particle (MT)</span>
                <span className="cert-pill">Ultrasonic Testing (UT)</span>
                <span className="cert-pill">ASNT Level II Qualified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION — THE ENGINEERING WORKBENCH */}
      <EngineeringWorkbench />

      {/* 05 — SECTION 04: THE WORK (CURATED MASONRY GALLERY) */}
      <section className="section-padding container" style={{ borderTop: '1px solid var(--border-color)' }} aria-label="Narrative: Finished Architecture">
        <motion.div
          className="portfolio-header"
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div>
            <span className="eyebrow">03 — Completed Architecture</span>
            <h2 className="heading-display" style={{ marginBottom: 0 }}>Selected Portfolio</h2>
          </div>
          <Link href="/projects" className="btn-secondary" style={{ height: 'fit-content' }}>
            View Full Index
          </Link>
        </motion.div>

        <div className="masonry-layout-asymmetric">
          {featuredWorks.map((work, idx) => (
            <motion.div
              key={idx}
              className={`portfolio-item ${work.layout}`}
              variants={scrollReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="portfolio-img-box">
                <Image
                  src={work.image}
                  alt={`${work.title} installation`}
                  width={900}
                  height={620}
                />
              </div>
              <div className="portfolio-meta-row">
                <span className="portfolio-title-text">{work.title}</span>
                <span className="portfolio-loc-text">{work.location}</span>
              </div>
              <p className="portfolio-desc-text">{work.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 06 — SECTION 05: TYPOGRAPHIC EXPERIENCE */}
      <section className="container" aria-label="Narrative: Experience Stats">
        <motion.div
          className="experience-grid-typography"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="experience-stat-cell" variants={itemVariants}>
            <span className="experience-stat-huge">{yearsExperience}</span>
            <span className="experience-stat-label">Years Experience</span>
            <p className="experience-stat-paragraph">Deep-rooted technical knowledge in metal fabrication and glazing engineering.</p>
          </motion.div>
          <motion.div className="experience-stat-cell" variants={itemVariants}>
            <span className="experience-stat-huge">2015</span>
            <span className="experience-stat-label">Established</span>
            <p className="experience-stat-paragraph">Serving architects, builders, and developers from our Trichy base.</p>
          </motion.div>
          <motion.div className="experience-stat-cell" variants={itemVariants}>
            <span className="experience-stat-huge">10+</span>
            <span className="experience-stat-label">Cities Served</span>
            <p className="experience-stat-paragraph">Providing structural installations and roofing solutions across Tamil Nadu.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* 08 — SECTION 07: MATERIAL QUALITY SPEC SHEET (LUXURY GLASSMARPHISM BRAND CARDS) */}
      <section className="section-padding container cert-section-wrapper" style={{ borderTop: '1px solid var(--border-color)', position: 'relative' }} aria-label="Narrative: Raw Material Specs">
        {/* Ambient Glassmorphic Glows */}
        <div className="cert-ambient-glow gold"></div>
        <div className="cert-ambient-glow blue"></div>

        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="cert-header-badge">
            <span className="cert-pulse-dot"></span>
            <span>100% Certified Tier-1 Mill Supply Chain</span>
          </div>
          <h2 className="heading-display shimmer-gold">Trusted Brands We Use</h2>
          <p className="craft-text-body" style={{ maxWidth: '680px', marginBottom: '3.5rem' }}>
            We source certified structural metals, safety glass, and architectural hardware directly from industry-leading global manufacturers to ensure zero corrosion, thermal rating, and maximum structural reliability.
          </p>
        </motion.div>

        <motion.div
          className="brand-specs-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Brand 1: Jindal */}
          <motion.div className="brand-glass-card" variants={itemVariants}>
            <div className="brand-card-shine"></div>

            <div className="brand-card-header-row">
              <div className="brand-logo-badge">
                <Image
                  src="/images/brands/jindal.png"
                  alt="Jindal Stainless logo"
                  fill
                  style={{ objectFit: 'contain', padding: '0.4rem' }}
                  priority
                />
              </div>
              <div className="brand-title-group">
                <span className="brand-card-category">Stainless Steel Partner</span>
                <h3 className="brand-card-title">Jindal Stainless</h3>
                <span className="brand-verify-tag">✓ Certified Mill Source</span>
              </div>
            </div>

            <p className="brand-card-desc">
              High-tensile SS 304 and 316 grade tubes and structural profiles. Guaranteed chemical composition ensuring zero outdoor rusting and extreme load capacities.
            </p>

            <ul className="cert-feature-list">
              <li>
                <span className="cert-check-bullet">✦</span>
                <span><strong>SS 304 / 316 Grades:</strong> Outdoor corrosion-proof metallurgy.</span>
              </li>
              <li>
                <span className="cert-check-bullet">✦</span>
                <span><strong>Mill Certified:</strong> Factory batch test certificates for every order.</span>
              </li>
            </ul>

            <div className="cert-pill-list">
              <span className="cert-pill">SS 304 / 316 Grade</span>
              <span className="cert-pill">Zero Rust Guarantee</span>
              <span className="cert-pill">High Load Capacity</span>
            </div>
          </motion.div>

          {/* Brand 2: Saint-Gobain */}
          <motion.div className="brand-glass-card" variants={itemVariants}>
            <div className="brand-card-shine"></div>

            <div className="brand-card-header-row">
              <div className="brand-logo-badge">
                <Image
                  src="/images/brands/saint-gobain.webp"
                  alt="Saint-Gobain Glass logo"
                  fill
                  style={{ objectFit: 'contain', padding: '0.4rem' }}
                  priority
                />
              </div>
              <div className="brand-title-group">
                <span className="brand-card-category">Architectural Glass Partner</span>
                <h3 className="brand-card-title">Saint-Gobain</h3>
                <span className="brand-verify-tag">✓ Authorized Safety Glazing</span>
              </div>
            </div>

            <p className="brand-card-desc">
              Factory-tempered safety glass custom-crafted for thickness, thermal stress, and visual clarity. Impact-resistant glazing for structural balconies and canopies.
            </p>

            <ul className="cert-feature-list">
              <li>
                <span className="cert-check-bullet">✦</span>
                <span><strong>Factory Tempered:</strong> 12mm to 19mm safety toughened glass.</span>
              </li>
              <li>
                <span className="cert-check-bullet">✦</span>
                <span><strong>Impact Resistant:</strong> Safe dice breakage pattern under extreme load.</span>
              </li>
            </ul>

            <div className="cert-pill-list">
              <span className="cert-pill">Toughened Glass</span>
              <span className="cert-pill">Thermal Stress Rated</span>
              <span className="cert-pill">Crystal Optical Clarity</span>
            </div>
          </motion.div>

          {/* Brand 3: Ozzon */}
          <motion.div className="brand-glass-card" variants={itemVariants}>
            <div className="brand-card-shine"></div>

            <div className="brand-card-header-row">
              <div className="brand-logo-badge">
                <Image
                  src="/images/brands/ozzon.jpeg"
                  alt="Ozzon Hardware logo"
                  fill
                  style={{ objectFit: 'contain', padding: '0.4rem' }}
                  priority
                />
              </div>
              <div className="brand-title-group">
                <span className="brand-card-category">Architectural Hardware Partner</span>
                <h3 className="brand-card-title">Ozzon Fittings</h3>
                <span className="brand-verify-tag">✓ Structural Hardware Grade</span>
              </div>
            </div>

            <p className="brand-card-desc">
              Heavy-grade stainless steel spider fittings, glass fasteners, brackets, and spigots. Engineered to eliminate metal-on-glass stress fractures.
            </p>

            <ul className="cert-feature-list">
              <li>
                <span className="cert-check-bullet">✦</span>
                <span><strong>Heavy Spider Assemblies:</strong> Precision SS 316 cast fittings.</span>
              </li>
              <li>
                <span className="cert-check-bullet">✦</span>
                <span><strong>Friction-Free Joints:</strong> Gasket-isolated structural glass mounts.</span>
              </li>
            </ul>

            <div className="cert-pill-list">
              <span className="cert-pill">SS 316 Spider Fittings</span>
              <span className="cert-pill">Friction-Free Mounts</span>
              <span className="cert-pill">Structural Spigots</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 09 — SECTION 09: TAMIL NADU GEOGRAPHIC COMPOSITION */}
      <section className="presence-section section-padding" style={{ borderBottom: 'none' }} aria-label="Geographic Service Reach">
        <div className="container">
          <motion.div
            className="geographic-layout"
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="geographic-left-panel">
              <span className="eyebrow">04 — Reach</span>
              <span className="geographic-huge-txt">TRICHY</span>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Serving residential builders, commercial developers, and architects across Tamil Nadu from our centrally located fabrication floor.
              </p>
            </div>

            <div className="geographic-right-cities">
              {citiesServed.map((city) => (
                <span key={city} className="city-outline-tag">{city}</span>
              ))}
              <span className="city-outline-tag active-tag">All over Tamil Nadu</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 10 — FINAL CTA BLOCK */}
      <section className="container" style={{ borderTop: '1px solid var(--border-color)' }} aria-label="Conversion CTA">
        <motion.div
          className="final-cta-block"
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="eyebrow">Next Steps</span>
          <h2 className="final-cta-display">Have a project in mind? Let's build it properly.</h2>
          <div className="final-cta-links-row">
            <a href="#quote-section" className="btn-primary">Initiate Estimate</a>
            <a href="tel:9159965923" className="btn-secondary">Call Engineering Office</a>
          </div>
        </motion.div>
      </section>

      {/* 11 — ESTIMATION INQUIRY & FORM */}
      <section className="section-padding container" style={{ borderTop: '1px solid var(--border-color)' }} id="quote-section" aria-label="Request a Quotation">
        <div className="contact-layout-split">
          <motion.div
            className="contact-details-panel"
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="eyebrow">Inquiries</span>
            <h2 className="heading-medium" style={{ fontSize: '2.5rem' }}>Let's talk about it.</h2>

            <div className="contact-meta-group" style={{ marginTop: '2rem' }}>
              <span className="contact-meta-label">Call / WhatsApp Direct</span>
              <span className="contact-meta-val">9159965923</span>
            </div>

            <div className="contact-meta-group">
              <span className="contact-meta-label">Email Address</span>
              <span className="contact-meta-val" style={{ fontSize: '1.25rem', textTransform: 'none' }}>banuengineeringtrichy@gmail.com</span>
            </div>

            <div className="contact-meta-group">
              <span className="contact-meta-label">Office Address</span>
              <p className="contact-meta-paragraph">
                Alanthur, Nagamangalam, Manigandam, Madurai Main Road, opposite Nayara Petrol Bunk, Trichy – 620012.
              </p>
            </div>
          </motion.div>

          <motion.div
            style={{ width: '100%' }}
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Suspense fallback={<div>Loading quote options...</div>}>
              <QuoteForm />
            </Suspense>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
