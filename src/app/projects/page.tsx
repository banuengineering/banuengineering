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
  const categories = ["All", "Stainless Steel", "Toughened Glass", "Sloping Roofings", "Custom Works"];

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
    <div className="projects-page-wrapper" style={{ paddingTop: '6rem' }}>

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
                        src={encodeURI(project.src)}
                        preload="metadata"
                        muted
                        playsInline
                      />
                      <div className="gallery-play-icon">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </>
                  ) : (
                    <img
                      src={encodeURI(project.src)}
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
                    src={encodeURI(activeProject.src)}
                    controls
                    autoPlay
                    loop
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                ) : (
                  <img
                    src={encodeURI(activeProject.src)}
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
