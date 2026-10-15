"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Search, ShoppingBag, UserRound, Heart, X } from "lucide-react";

const navItems = [
  ["Home", "/"], ["Shop all", "/shop"], ["Oversized", "/collections/oversized-t-shirts"], ["Regular fit", "/collections/regular-fit-t-shirts"],
  ["Printed", "/collections/printed-t-shirts"], ["Solid", "/collections/solid-t-shirts"], ["New arrivals", "/collections/new-arrivals"], ["Best sellers", "/collections/best-sellers"],
];

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
  return <header className="site-header">
    <div className="announcement">A considered everyday wardrobe · Sample storefront — ordering not connected</div>
    <div className="page-wrap header-main">
      <button className="mobile-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={19} /> : <Menu size={19} />}</button>
      <Link href="/" aria-label="KIARA STYLE home" className="brand-logo"><Image src="/brand/kiara-style-logo.png" width={1024} height={448} alt="KIARA STYLE — Men's Fashion" priority style={{ width: "100%", height: "auto" }} /></Link>
      <div className="header-tools">
        <Link className="header-action" href="/search" aria-label="Search"><Search size={18} /><span className="word-label">Search</span></Link>
        <Link className="header-action" href="/wishlist" aria-label={`Wishlist${wishCount ? `, ${wishCount} saved` : ""}`}><Heart size={18} /><span className="word-label">Saved</span>{wishCount > 0 && <span className="header-count">{wishCount}</span>}</Link>
        <Link className="header-action" href="/account" aria-label="Account"><UserRound size={18} /><span className="word-label">Account</span></Link>
        <Link className="header-action" href="/cart" aria-label={`Bag${bagCount ? `, ${bagCount} items` : ""}`}><ShoppingBag size={18} /><span className="word-label">Bag</span>{bagCount > 0 && <span className="header-count">{bagCount}</span>}</Link>
      </div>
    </div>
    <nav className={`main-nav page-wrap ${menuOpen ? "mobile-open" : ""}`} aria-label="Main navigation">
      {navItems.map(([label, href]) => <Link key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</Link>)}
    </nav>
  </header>;
}
