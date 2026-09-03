"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isDropdownClosed, setIsDropdownClosed] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const handleDropdownLinkClick = () => {
    setIsOpen(false);
    setIsDropdownClosed(true);
    if (typeof document !== "undefined") {
      (document.activeElement as HTMLElement)?.blur();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    const handleResize = () => {
      if (window.innerWidth > 950) {
        setIsOpen(false);
        setMobileServicesOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  const isLinkActive = (href: string) => {
    return pathname === href;
  };

  return (
    <>
      <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="header-container">
          {/* Brand logo block */}
          <Link href="/" className="logo-area" aria-label="Banu Engineering Home">
            <Image
              src="/images/logo.png"
              alt="Banu Engineering Logo"
              width={70}
              height={70}
              priority
              style={{ objectFit: 'contain' }}
            />
            <div className="logo-text-block">
              <span className="logo-title">BANU ENGINEERING</span>
              <span className="logo-subtitle">EST. 2015 / TRICHY</span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {/* 1. Home */}
            <Link
              href="/"
              className={`nav-link ${isLinkActive('/') ? 'active-link' : ''}`}
            >
              Home
            </Link>

            {/* 2. Services (Clickable Link + Mega Dropdown on Hover) */}
            <div
              className={`dropdown-wrapper ${isDropdownClosed ? 'is-closed' : ''}`}
              onMouseEnter={() => setIsDropdownClosed(false)}
              onMouseLeave={() => setIsDropdownClosed(false)}
              tabIndex={0}
              role="region"
              aria-label="Services Menu"
            >
              <Link
                href="/services"
                className={`nav-link ${pathname.startsWith('/services') ? 'active-link' : ''}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
                onClick={handleDropdownLinkClick}
              >
                Services
                <svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor">
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </Link>

              <div className="mega-dropdown-menu">
                <div className="mega-dropdown-grid">

                  {/* Category Card 1: Stainless Steel Systems */}
                  <Link href="/services/stainless-steel" className="mega-category-card" onClick={handleDropdownLinkClick}>
                    <div>
                      <div className="mega-card-header">
                        <div className="mega-card-title-row">
                          <span className="mega-card-badge">01</span>
                          <h4 className="mega-card-title">Stainless Steel</h4>
                        </div>
                        <span className="mega-card-arrow">→</span>
                      </div>
                      <p className="mega-card-desc">
                        SS 304/316 Handrails, Spiral Steps, SS & Glass Staircases & Safety CNC Gates.
                      </p>
                    </div>
                    <div className="mega-card-tags">
                      <span>SS Handrails</span>
                      <span>Spiral Steps</span>
                      <span>CNC Gates</span>
                    </div>
                  </Link>

                  {/* Category Card 2: Toughened Glass Works */}
                  <Link href="/services/glass" className="mega-category-card" onClick={handleDropdownLinkClick}>
                    <div>
                      <div className="mega-card-header">
                        <div className="mega-card-title-row">
                          <span className="mega-card-badge">02</span>
                          <h4 className="mega-card-title">Toughened Glass</h4>
                        </div>
                        <span className="mega-card-arrow">→</span>
                      </div>
                      <p className="mega-card-desc">
                        Saint-Gobain Glass Railings, Spider Facades, Canopies, Enclosures & Jally Glass.
                      </p>
                    </div>
                    <div className="mega-card-tags">
                      <span>Glass Railings</span>
                      <span>Spider Glass</span>
                      <span>Canopies</span>
                    </div>
                  </Link>

                  {/* Category Card 3: Roofings & Structural Sheds */}
                  <Link href="/services/acp" className="mega-category-card" onClick={handleDropdownLinkClick}>
                    <div>
                      <div className="mega-card-header">
                        <div className="mega-card-title-row">
                          <span className="mega-card-badge">03</span>
                          <h4 className="mega-card-title">Roofings & Sheds</h4>
                        </div>
                        <span className="mega-card-arrow">→</span>
                      </div>
                      <p className="mega-card-desc">
                        Sloping Roofs, JSW Color Tile Roofings, Industrial Structural Sheds & Car Porches.
                      </p>
                    </div>
                    <div className="mega-card-tags">
                      <span>Sloping Roofs</span>
                      <span>JSW Tile Sheds</span>
                      <span>Structural Trusses</span>
                    </div>
                  </Link>

                </div>

                <div className="mega-dropdown-footer">
                  <Link href="/services" className="mega-footer-link" onClick={handleDropdownLinkClick}>
                    Explore All 14 Services & Capability Matrix →
                  </Link>
                </div>
              </div>
            </div>

            {/* 3. Projects */}
            <Link
              href="/projects"
              className={`nav-link ${isLinkActive('/projects') ? 'active-link' : ''}`}
            >
              Projects
            </Link>

            {/* 4. About */}
            <Link
              href="/about"
              className={`nav-link ${isLinkActive('/about') ? 'active-link' : ''}`}
            >
              About
            </Link>

            {/* 5. Contact */}
            <Link
              href="/contact"
              className={`nav-link ${isLinkActive('/contact') ? 'active-link' : ''}`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className={`mobile-toggle ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <nav className="mobile-nav" aria-label="Mobile Navigation">
          {/* 1. Home */}
          <Link href="/" className={`mobile-nav-link ${isLinkActive('/') ? 'active-link' : ''}`} onClick={() => setIsOpen(false)}>Home</Link>

          {/* 2. Services (Accordion + Direct Link) */}
          <div style={{ width: '100%', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <Link href="/services" className={`mobile-nav-link ${isLinkActive('/services') ? 'active-link' : ''}`} style={{ border: 'none', flex: 1 }} onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-primary)',
                  padding: '0.75rem',
                  cursor: 'pointer'
                }}
                aria-label="Toggle Services Category Cards"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                  style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                >
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </button>
            </div>

            {mobileServicesOpen && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>

                {/* Category Card 1: Stainless Steel Systems */}
                <Link href="/services/stainless-steel" className="mega-category-card" onClick={() => setIsOpen(false)}>
                  <div className="mega-card-header">
                    <div className="mega-card-title-row">
                      <span className="mega-card-badge">01</span>
                      <h4 className="mega-card-title">Stainless Steel</h4>
                    </div>
                    <span className="mega-card-arrow">→</span>
                  </div>
                  <p className="mega-card-desc" style={{ fontSize: '0.75rem', margin: 0 }}>
                    SS 304/316 Handrails, Spiral Steps, Staircases & Safety CNC Gates.
                  </p>
                </Link>

                {/* Category Card 2: Toughened Glass Works */}
                <Link href="/services/glass" className="mega-category-card" onClick={() => setIsOpen(false)}>
                  <div className="mega-card-header">
                    <div className="mega-card-title-row">
                      <span className="mega-card-badge">02</span>
                      <h4 className="mega-card-title">Toughened Glass</h4>
                    </div>
                    <span className="mega-card-arrow">→</span>
                  </div>
                  <p className="mega-card-desc" style={{ fontSize: '0.75rem', margin: 0 }}>
                    Saint-Gobain Glass Railings, Spider Facades, Canopies & Shower Enclosures.
                  </p>
                </Link>

                {/* Category Card 3: Roofings & Structural Sheds */}
                <Link href="/services/acp" className="mega-category-card" onClick={() => setIsOpen(false)}>
                  <div className="mega-card-header">
                    <div className="mega-card-title-row">
                      <span className="mega-card-badge">03</span>
                      <h4 className="mega-card-title">Roofings & Sheds</h4>
                    </div>
                    <span className="mega-card-arrow">→</span>
                  </div>
                  <p className="mega-card-desc" style={{ fontSize: '0.75rem', margin: 0 }}>
                    Sloping Roofs, JSW Color Tile Roofings & Structural Industrial Sheds.
                  </p>
                </Link>

                <Link href="/services" className="mobile-nav-link" style={{ fontSize: '0.85rem', color: 'var(--accent-brand)', fontWeight: '700', textAlign: 'center', padding: '0.5rem 0', textTransform: 'none' }} onClick={() => setIsOpen(false)}>
                  Explore All 14 Services Matrix →
                </Link>
              </div>
            )}
          </div>

          {/* 3. Projects */}
          <Link href="/projects" className={`mobile-nav-link ${isLinkActive('/projects') ? 'active-link' : ''}`} onClick={() => setIsOpen(false)}>Projects</Link>

          {/* 4. About */}
          <Link href="/about" className={`mobile-nav-link ${isLinkActive('/about') ? 'active-link' : ''}`} onClick={() => setIsOpen(false)}>About</Link>

          {/* 5. Contact */}
          <Link href="/contact" className={`mobile-nav-link ${isLinkActive('/contact') ? 'active-link' : ''}`} onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
      </div>
    </>
  );
}
