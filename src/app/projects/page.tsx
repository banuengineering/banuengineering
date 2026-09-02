"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import galleryItems from "@/data/galleryData.json";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const [itemsToShow, setItemsToShow] = useState(12);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeService, setActiveService] = useState(0);

  const categories = ["All", "Stainless Steel", "Toughened Glass", "ACP Elevation", "Structural Sheds", "Interior & Modular", "Custom Works"];

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
      title: "ACP Elevation Cladding",
      category: "ACP Elevation",
      desc: "Aluminum Composite Panel (ACP) exterior cladding for commercial showroom facades, corporate towers, and modern building elevations.",
      image: "/images/acp-elevation.png",
      tags: ["Commercial Elevation", "PVDF Coating", "Weatherproof"]
    },
    {
      id: "12",
      title: "Modular Kitchen Frameworks",
      category: "Interior & Modular",
      desc: "Stainless steel 304 termite-proof modular kitchen frameworks, heavy-duty wire basket supports, and metal storage cabinets.",
      image: "/images/welding-craft.png",
      tags: ["SS 304 Framework", "Termite Proof", "Custom Drawers"]
    },
    {
      id: "13",
      title: "Loft & Cupboard Works",
      category: "Interior & Modular",
      desc: "Custom overhead metal loft structures, stainless steel storage cupboards, aluminum wardrobe partitioning, and utility shelving.",
      image: "/images/welding-craft.png",
      tags: ["Loft Framing", "Metal Storage", "Utility Shelving"]
    },
    {
      id: "14",
      title: "Custom SS & Glass Works",
      category: "Custom Works",
      desc: "Tailor-made architectural metal & glass features, custom display structures, metal wall grilles, and specialized engineering items.",
      image: "/images/welding-craft.png",
      tags: ["Bespoke Fabrication", "Custom Engineering", "Architectural Metal"]
    }
  ];

  const servicesIndex = [
    {
      num: "01",
      title: "STAINLESS STEEL SYSTEMS",
      tags: ["Handrails", "Spiral Steps", "Safety Gates (HPL CNC)", "SS Staircases"],
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
      title: "FACADES & ROOFING SHEDS",
      tags: ["ACP Elevation", "JSW Roofing Sheds", "UPVC", "Polycarbonate Sheets"],
      image: "/images/acp-elevation.png"
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

  // Filter projects
  const filteredProjects = filter === "All" 
    ? galleryItems 
    : galleryItems.filter(p => p.category === filter);

  // Pagination slice
  const visibleProjects = filteredProjects.slice(0, itemsToShow);

  const hasMore = itemsToShow < filteredProjects.length;

  const loadMore = () => {
    setItemsToShow(prev => Math.min(prev + 12, filteredProjects.length));
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowRight") {
        setLightboxIndex(prev => (prev! + 1) % filteredProjects.length);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex(prev => (prev! - 1 + filteredProjects.length) % filteredProjects.length);
      } else if (e.key === "Escape") {
        setLightboxIndex(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredProjects.length]);

  // Reset pagination when filter changes
  useEffect(() => {
    setItemsToShow(12);
    setLightboxIndex(null);
  }, [filter]);

  const activeProject = lightboxIndex !== null ? filteredProjects[lightboxIndex] : null;

  return (
    <div className="projects-page-wrapper">
      
      {/* SERVICES INDEX */}
      <section className="section-padding container" style={{ paddingTop: '6rem', borderBottom: '1px solid var(--border-color)', marginBottom: '4rem' }} aria-label="Narrative: Outputs">
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="eyebrow">Services Index</span>
          <h2 className="heading-display" style={{ fontSize: '3rem', marginBottom: '1rem' }}>What We Build</h2>
        </motion.div>

        <div className="services-index-grid" style={{ marginTop: '4rem' }}>
          <div className="services-index-nav">
            {servicesIndex.map((service, idx) => (
              <div
                key={service.num}
                className="service-index-row"
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
            />
          </div>
        </div>
      </section>

      {/* ALL 14 SERVICES CATALOG GRID */}
      <section className="section-padding container" style={{ borderBottom: '1px solid var(--border-color)', marginBottom: '4rem' }} aria-label="Complete List of Services">
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
            From high-grade SS 304/316 handrails and Saint-Gobain toughened glass facades to JSW roofing sheds and HPL CNC compound gates—explore our full spectrum of specialized fabrication services.
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

      {/* 01 — PAGE HEADER */}
      <section className="container" style={{ marginBottom: '3rem' }}>
        <span className="eyebrow">Works Archive</span>
        <h1 className="heading-display" style={{ fontSize: "4rem", maxWidth: "800px", color: "var(--text-primary)" }}>
          Fabricated Systems & Gallery of Works
        </h1>
        <p style={{ fontSize: "1rem", color: "var(--text-secondary)", maxWidth: "520px", lineHeight: "1.7" }}>
          Browse our portfolio of custom installations completed across Tamil Nadu. Use the filter tabs below to view specific categories and select any item to view high-resolution details.
        </p>
      </section>

      {/* 02 — FILTER TABS & MOSAIC GALLERY */}
      <section className="container" style={{ paddingBottom: "10rem" }}>
        
        {/* Category Filters */}
        <div className="filter-tabs-container">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-tab ${filter === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Mosaic Grid */}
        <div className="gallery-mosaic-grid" style={{ marginTop: "2rem" }}>
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, idx) => (
              <motion.div 
                key={project.id} 
                className="portfolio-item"
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setLightboxIndex(idx)}
              >
                <div className="portfolio-img-box">
                  {project.type === "video" ? (
                    <>
                      <video 
                        src={project.src} 
                        preload="metadata" 
                        muted 
                        playsInline
                      />
                      <div className="gallery-play-icon">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </>
                  ) : (
                    <img 
                      src={project.src} 
                      alt={project.title} 
                      loading="lazy"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Pagination */}
        {hasMore && (
          <div className="gallery-load-more-container">
            <button className="gallery-load-more-btn" onClick={loadMore}>
              Load More Works
              <span className="gallery-count-badge">
                {visibleProjects.length} / {filteredProjects.length}
              </span>
            </button>
          </div>
        )}
      </section>

      {/* 03 — LIGHTBOX MODAL OVERLAY */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            className="gallery-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close button */}
            <button 
              className="gallery-modal-close-btn" 
              onClick={() => setLightboxIndex(null)}
              aria-label="Close lightbox"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Modal Box */}
            <motion.div 
              className="gallery-modal-container"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Media Column */}
              <div className="gallery-modal-media-pane">
                {activeProject.type === "video" ? (
                  <video 
                    src={activeProject.src} 
                    controls 
                    autoPlay 
                    loop 
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                ) : (
                  <img 
                    src={activeProject.src} 
                    alt={activeProject.title} 
                  />
                )}
              </div>

              {/* Details Column */}
              <div className="gallery-modal-info-pane">
                <div className="gallery-modal-details">
                  <span className="eyebrow" style={{ marginBottom: "0.5rem" }}>
                    Project Specifications
                  </span>
                  <h2 className="gallery-modal-title">{activeProject.title}</h2>
                  <p className="gallery-modal-desc">{activeProject.desc}</p>

                  <div className="gallery-modal-meta-list">
                    <div className="gallery-modal-meta-item">
                      <span className="gallery-modal-meta-label">Category</span>
                      <span className="gallery-modal-meta-val">{activeProject.category}</span>
                    </div>
                    <div className="gallery-modal-meta-item">
                      <span className="gallery-modal-meta-label">Location</span>
                      <span className="gallery-modal-meta-val">{activeProject.location}</span>
                    </div>
                    <div className="gallery-modal-meta-item">
                      <span className="gallery-modal-meta-label">Weld/Safety Standard</span>
                      <span className="gallery-modal-meta-val">TIG Fully Fused / NTD-IBR</span>
                    </div>
                  </div>
                </div>

                {/* Lightbox Navigation */}
                <div className="gallery-modal-nav-bar">
                  <button 
                    className="gallery-modal-nav-btn"
                    onClick={() => setLightboxIndex(prev => (prev! - 1 + filteredProjects.length) % filteredProjects.length)}
                  >
                    ← Prev
                  </button>
                  <button 
                    className="gallery-modal-nav-btn"
                    onClick={() => setLightboxIndex(prev => (prev! + 1) % filteredProjects.length)}
                  >
                    Next →
                  </button>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginLeft: "auto", fontWeight: "600" }}>
                    {lightboxIndex! + 1} / {filteredProjects.length}
                  </span>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
