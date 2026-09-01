"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    const handleResize = () => {
      if (window.innerWidth > 950) {
        setIsOpen(false);
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
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`nav-link ${isLinkActive(link.href) ? 'active-link' : ''}`}
              >
                {link.name}
              </Link>
            ))}

            {/* Minimal Services dropdown */}
            <div className="dropdown-wrapper" style={{ position: 'relative' }}>
              <span className={`nav-link ${pathname.startsWith('/services') ? 'active-link' : ''}`} style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                Services
                <svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor">
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </span>
              <div className="dropdown-menu">
                <Link href="/services/stainless-steel" className={`dropdown-item ${pathname === '/services/stainless-steel' ? 'active-sublink' : ''}`}>Stainless Steel Works</Link>
                <Link href="/services/glass" className={`dropdown-item ${pathname === '/services/glass' ? 'active-sublink' : ''}`}>Toughened Glass Works</Link>
                <Link href="/services/acp" className={`dropdown-item ${pathname === '/services/acp' ? 'active-sublink' : ''}`}>ACP Elevation Cladding</Link>
              </div>
            </div>
          </nav>

          {/* Right side quote CTA link */}
          <Link href="/contact?quote=true" className="nav-cta-link">
            Request a Quote
          </Link>

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

      {/* Mobile Menu Drawer (Sibling of header, outside of backdrop-filter stacking context) */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <nav className="mobile-nav" aria-label="Mobile Navigation">
          <Link href="/" className={`mobile-nav-link ${isLinkActive('/') ? 'active-link' : ''}`} onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/projects" className={`mobile-nav-link ${isLinkActive('/projects') ? 'active-link' : ''}`} onClick={() => setIsOpen(false)}>Projects</Link>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', paddingLeft: '0.5rem' }}>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: '700' }}>Services</span>
            <Link href="/services/stainless-steel" className={`mobile-nav-link ${isLinkActive('/services/stainless-steel') ? 'active-link' : ''}`} style={{ fontSize: '1.25rem', textTransform: 'none' }} onClick={() => setIsOpen(false)}>Stainless Steel Works</Link>
            <Link href="/services/glass" className={`mobile-nav-link ${isLinkActive('/services/glass') ? 'active-link' : ''}`} style={{ fontSize: '1.25rem', textTransform: 'none' }} onClick={() => setIsOpen(false)}>Toughened Glass Works</Link>
            <Link href="/services/acp" className={`mobile-nav-link ${isLinkActive('/services/acp') ? 'active-link' : ''}`} style={{ fontSize: '1.25rem', textTransform: 'none' }} onClick={() => setIsOpen(false)}>ACP Elevation Cladding</Link>
          </div>
          <Link href="/about" className={`mobile-nav-link ${isLinkActive('/about') ? 'active-link' : ''}`} onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" className={`mobile-nav-link ${isLinkActive('/contact') ? 'active-link' : ''}`} onClick={() => setIsOpen(false)}>Contact</Link>
          <div className="mobile-drawer-cta">
            <Link href="/contact?quote=true" className="btn-primary" style={{ width: '100%', textAlign: 'center' }} onClick={() => setIsOpen(false)}>
              Request Quotation
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
