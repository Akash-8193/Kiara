"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, UserRound, Heart, Menu, X } from "lucide-react";

export function StoreHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bagCount, setBagCount] = useState(0);
  const [wishCount, setWishCount] = useState(0);

  useEffect(() => {
    const syncCounts = () => {
      try {
        const bag = JSON.parse(localStorage.getItem("kiara-preview-bag") || "[]") as { quantity?: number }[];
        const wish = JSON.parse(localStorage.getItem("kiara-preview-wishlist") || "[]") as unknown[];
        setBagCount(bag.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0));
        setWishCount(wish.length);
      } catch {
        setBagCount(0);
        setWishCount(0);
      }
    };
    syncCounts();
    window.addEventListener("kiara-preview-state", syncCounts);
    window.addEventListener("storage", syncCounts);
    return () => {
      window.removeEventListener("kiara-preview-state", syncCounts);
      window.removeEventListener("storage", syncCounts);
    };
  }, []);

  return (
    <header className="gazu-header-wrap">
      {/* Top Black Announcement Bar */}
      <div className="gazu-announcement-bar">
        <div className="gazu-announcement-inner">
          <div className="announcement-left">
            <span>FREE DELIVERY ON ORDERS ABOVE ₹999</span>
          </div>
          <div className="announcement-right">
            <Link href="/app" className="announcement-link">DOWNLOAD APP</Link>
            <span className="announcement-sep">|</span>
            <Link href="/track" className="announcement-link">TRACK ORDER</Link>
            <span className="announcement-sep">|</span>
            <Link href="/help" className="announcement-link">HELP</Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="gazu-main-nav">
        <div className="gazu-nav-inner">
          {/* Mobile hamburger button */}
          <button
            className="gazu-mobile-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Left Category Links */}
          <nav className="gazu-left-nav" aria-label="Department navigation">
            <Link href="/shop" className="gazu-nav-item active">MEN</Link>
            <Link href="/shop" className="gazu-nav-item">WOMEN</Link>
            <Link href="/shop" className="gazu-nav-item">KIDS</Link>
            <Link href="/shop" className="gazu-nav-item">BEAUTY</Link>
          </nav>

          {/* Center Brand Name KIARA */}
          <div className="gazu-center-brand">
            <Link href="/" className="gazu-brand-text" aria-label="KIARA Home">
              KIARA
            </Link>
          </div>

          {/* Right Action Icons & Labels */}
          <div className="gazu-right-actions">
            <Link className="gazu-action-btn" href="/search" aria-label="Search">
              <Search size={16} strokeWidth={1.8} />
              <span className="action-label">SEARCH</span>
            </Link>
            <Link className="gazu-action-btn" href="/account" aria-label="Login">
              <UserRound size={16} strokeWidth={1.8} />
              <span className="action-label">LOGIN</span>
            </Link>
            <Link className="gazu-action-btn" href="/wishlist" aria-label="Wishlist">
              <Heart size={16} strokeWidth={1.8} />
              <span className="action-label">WISHLIST</span>
              {wishCount > 0 && <span className="action-count-pill">{wishCount}</span>}
            </Link>
            <Link className="gazu-action-btn" href="/cart" aria-label="Cart">
              <ShoppingBag size={16} strokeWidth={1.8} />
              <span className="action-label">CART ({bagCount})</span>
            </Link>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {menuOpen && (
          <div className="gazu-mobile-menu">
            <Link href="/shop" onClick={() => setMenuOpen(false)}>MEN</Link>
            <Link href="/shop" onClick={() => setMenuOpen(false)}>WOMEN</Link>
            <Link href="/shop" onClick={() => setMenuOpen(false)}>KIDS</Link>
            <Link href="/shop" onClick={() => setMenuOpen(false)}>BEAUTY</Link>
            <hr />
            <Link href="/collections/oversized-t-shirts" onClick={() => setMenuOpen(false)}>Oversized T-Shirts</Link>
            <Link href="/collections/regular-fit-t-shirts" onClick={() => setMenuOpen(false)}>Regular Fit T-Shirts</Link>
            <Link href="/collections/printed-t-shirts" onClick={() => setMenuOpen(false)}>Printed T-Shirts</Link>
            <Link href="/collections/new-arrivals" onClick={() => setMenuOpen(false)}>New Arrivals</Link>
          </div>
        )}
      </div>
    </header>
  );
}
