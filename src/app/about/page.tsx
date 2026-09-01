"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  const directoryClients = [
    {
      name: "SRM Hospital",
      location: "Trichy",
      logo: "/images/clients/srm.png",
      quote: "Banu Engineering delivered top-tier stainless steel safety rails and handrails. Fully compliant with hospital hygiene protocols, safety regulations, and structural loads.",
      author: "Facilities Director"
    },
    {
      name: "Trichy Sarathas",
      location: "Trichy",
      logo: "/images/clients/sarathas.png",
      quote: "The structural brushed spiral staircase is a work of art. Flawless welding joinery and a gorgeous satin finish that matches our premium retail showroom design.",
      author: "Managing Director"
    },
    {
      name: "Taila Silks",
      location: "Trichy",
      logo: "/images/clients/taila.png",
      quote: "Their frameless spigot glass balcony railings and architectural glazed facades transformed our showroom frontage. Clean execution and finished on schedule.",
      author: "General Manager"
    },
    {
      name: "Dov Chem",
      location: "Trichy",
      logo: "/images/clients/dov.jpeg",
      quote: "Excellent fabrication. The custom ACP exterior cladding and steel subframes were installed with perfect alignment and weatherproof expansion joints.",
      author: "Operations Head"
    },
    {
      name: "Rane",
      location: "Pudukkottai",
      logo: "/images/clients/rane.png",
      quote: "Heavy-duty steel structural platforms and handrails fabricated to international engineering standards. Zero weld defects and high load capacities.",
      author: "Plant Manager"
    }
  ];

  const count = directoryClients.length;
  // Triple array for seamless infinite looping
  const extendedClients = [...directoryClients, ...directoryClients, ...directoryClients];

  // Start in middle set (index 5)
  const [trackIndex, setTrackIndex] = useState(count);
  const [withTransition, setWithTransition] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null);

  // Active original item index for UI dots
  const activeDotIndex = trackIndex % count;

  // Seamless jump re-enable transition after reset
  useEffect(() => {
    if (!withTransition) {
      const timer = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setWithTransition(true);
        });
      });
      return () => cancelAnimationFrame(timer);
    }
  }, [withTransition]);

  // Autoplay functionality
  useEffect(() => {
    if (!isPlaying) {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
      return;
    }

    autoplayTimer.current = setInterval(() => {
      setWithTransition(true);
      setTrackIndex((prev) => prev + 1);
    }, 5000);

    return () => {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    };
  }, [isPlaying]);

  const handlePrev = () => {
    setIsPlaying(false);
    setWithTransition(true);
    setTrackIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setIsPlaying(false);
    setWithTransition(true);
    setTrackIndex((prev) => prev + 1);
  };

  const handleDotClick = (index: number) => {
    setIsPlaying(false);
    setWithTransition(true);
    setTrackIndex(count + index);
  };

  const handleTransitionEnd = () => {
    if (trackIndex >= count * 2) {
      setWithTransition(false);
      setTrackIndex(trackIndex - count);
    } else if (trackIndex < count) {
      setWithTransition(false);
      setTrackIndex(trackIndex + count);
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
    <div className="about-page-wrapper">
      {/* SECTION 1 — HISTORY & REPUTATION */}
      <section className="section-padding container" style={{ paddingTop: '6rem' }} aria-label="About the Company">
        <div className="about-journal-grid">
          <motion.div
            className="about-journal-left"
            variants={scrollReveal}
            initial="hidden"
            animate="visible"
          >
            <span className="eyebrow">History & Reputation</span>
            <h1 className="heading-display" style={{ fontSize: '3.75rem', marginBottom: '2rem' }}>
              Built in Trichy.<br />
              Experienced across Tamil Nadu.
            </h1>
            <p className="about-body-lead">
              Banu Engineering was established in 2015 and specializes in custom stainless steel staircases, glass railings, canopies, and Aluminium Composite Panel (ACP) facades. By enforcing strict material standards and certified weld joinery, we ensure the structural safety of residential complexes and commercial frontages.
            </p>
          </motion.div>

          <motion.div
            className="about-journal-right"
            variants={scrollReveal}
            initial="hidden"
            animate="visible"
          >
            <Image
              src="/images/steel-staircase.png"
              alt="Custom steel fabrication details by Banu Engineering"
              width={500}
              height={460}
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — CLIENT TESTIMONIAL CAROUSEL */}
      <section className="section-padding container" style={{ borderTop: '1px solid var(--border-color)', paddingBottom: '10rem' }} aria-label="Clients We Served">
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="eyebrow">Partnerships</span>
          <h2 className="heading-display" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Clients We Served</h2>
          <p style={{ color: 'var(--text-secondary)', margin: '0 auto', maxWidth: '600px', fontSize: '0.95rem', lineHeight: '1.7' }}>
            We collaborate with premier healthcare institutions, textile retail showrooms, and chemical plants. Read what they say about their custom architectural fabrications:
          </p>
        </motion.div>

        {/* Carousel Outer Frame */}
        <div
          className="testimonial-carousel-container"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {/* Left Nav Button */}
          <button className="carousel-nav-btn prev" onClick={handlePrev} aria-label="Previous testimony">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          {/* Track Wrapper */}
          <div className="testimonial-track-wrapper">
            <div
              className="testimonial-track"
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translateX(calc(50vw - (var(--card-width) / 2) - ${trackIndex} * (var(--card-width) + var(--card-gap))))`,
                transition: withTransition ? 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' : 'none'
              }}
            >
              {extendedClients.map((client, idx) => {
                const isActive = idx === trackIndex;
                return (
                  <div
                    key={`${client.name}-${idx}`}
                    className={`testimonial-slide ${isActive ? "active" : ""}`}
                    onClick={() => {
                      if (!isActive) {
                        setIsPlaying(false);
                        setWithTransition(true);
                        setTrackIndex(idx);
                      }
                    }}
                  >
                    <div className="testimonial-body-card">
                      {/* Quotes Background Symbol */}
                      <div className="quote-mark-icon">
                        <svg viewBox="0 0 24 24" width="80" height="80" fill="currentColor">
                          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                        </svg>
                      </div>

                      <p className="testimonial-quote-text">
                        "{client.quote}"
                      </p>

                      <div className="testimonial-client-meta">
                        <div className="testimonial-logo-box">
                          <Image
                            src={client.logo}
                            alt={`${client.name} Logo`}
                            fill
                            style={{ objectFit: 'contain' }}
                          />
                        </div>
                        <div className="testimonial-details">
                          <h4 className="testimonial-client-name">{client.name}</h4>
                          <span className="testimonial-client-role">{client.author} — {client.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Nav Button */}
          <button className="carousel-nav-btn next" onClick={handleNext} aria-label="Next testimony">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </button>

          {/* Dots Indicators */}
          <div className="carousel-dots-list">
            {directoryClients.map((_, idx) => (
              <button
                key={idx}
                className={`carousel-dot ${activeDotIndex === idx ? "active" : ""}`}
                onClick={() => handleDotClick(idx)}
                aria-label={`Jump to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
