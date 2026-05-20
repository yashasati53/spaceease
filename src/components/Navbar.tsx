"use client";

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const { cartCount } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        Free Delivery on Orders Above ₹999 — Shop Now
      </div>

      <nav className="navbar">
        <div className="nav-content">
          {/* Hamburger (mobile only) */}
          <button
            className="hamburger-btn"
            aria-label="Open menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Logo */}
          <Link href="/" className="logo">
            SpaceEase
          </Link>

          {/* Center Nav Links (desktop) */}
          <div className="nav-links">
            <Link href="/products" className="nav-link">Shop</Link>
            <Link href="/new-arrivals" className="nav-link">New Arrivals</Link>
            <Link href="/collections" className="nav-link">Collections</Link>
            <Link href="/about" className="nav-link">About Us</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </div>

          {/* Right Actions */}
          <div className="nav-actions">
            {/* Search */}
            <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
              {isSearchOpen && (
                <form onSubmit={handleSearchSubmit} style={{ position: "absolute", right: "100%", marginRight: "0.5rem", zIndex: 10 }}>
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    style={{
                      padding: "0.4rem 0.8rem",
                      borderRadius: "20px",
                      border: "1px solid #e8e8e8",
                      outline: "none",
                      fontSize: "0.85rem",
                      width: "180px",
                      whiteSpace: "nowrap",
                    }}
                  />
                </form>
              )}
              <button
                className="icon-btn"
                aria-label="Search"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                style={{ background: "none", border: "none", cursor: "pointer", display: "flex", padding: 0 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </button>
            </div>
            {/* Account */}
            <Link href="/login" className="icon-btn" aria-label="Account">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </Link>
            {/* Cart */}
            <Link href="/cart" className="icon-btn" aria-label="Cart" style={{ position: "relative" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              {cartCount > 0 && (
                <span style={{
                  position: "absolute",
                  top: "-4px",
                  right: "-4px",
                  backgroundColor: "#000",
                  color: "#fff",
                  fontSize: "0.62rem",
                  fontWeight: 600,
                  width: "15px",
                  height: "15px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <span className="logo" style={{ fontSize: "1.1rem" }}>SpaceEase</span>
          <button className="mobile-nav-close" onClick={closeMobileMenu} aria-label="Close menu">✕</button>
        </div>
        <nav className="mobile-nav-links">
          <Link href="/products" className="mobile-nav-link" onClick={closeMobileMenu}>Shop</Link>
          <Link href="/new-arrivals" className="mobile-nav-link" onClick={closeMobileMenu}>New Arrivals</Link>
          <Link href="/collections" className="mobile-nav-link" onClick={closeMobileMenu}>Collections</Link>
          <Link href="/about" className="mobile-nav-link" onClick={closeMobileMenu}>About Us</Link>
          <Link href="/contact" className="mobile-nav-link" onClick={closeMobileMenu}>Contact</Link>
          <Link href="/return-policy" className="mobile-nav-link" onClick={closeMobileMenu}>Return Policy</Link>
        </nav>
      </div>
    </>
  );
}
