"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, Heart, ShoppingBag, SlidersHorizontal, CircleAlert, Search as SearchIcon, X, ZoomIn, Ruler, Truck, RotateCcw, MessageCircle, ChevronDown, Award, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { collectionNames, inr, products, type Product } from "../lib/products";

type BagItem = { product: Product; size: string; color: string; quantity: number };
type AddPreview = (product: Product, size?: string, color?: string) => void;
const BAG_KEY = "kiara-preview-bag";
const WISH_KEY = "kiara-preview-wishlist";
const PREVIEW_EVENT = "kiara-preview-state";
const sizes = ["S", "M", "L", "XL", "XXL"];

function readBag(): BagItem[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem(BAG_KEY) || "[]") as BagItem[]; } catch { return []; }
}
function readWish(): string[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem(WISH_KEY) || "[]") as string[]; } catch { return []; }
}
function saveBag(value: BagItem[]) {
  localStorage.setItem(BAG_KEY, JSON.stringify(value));
  window.dispatchEvent(new Event(PREVIEW_EVENT));
}
function saveWish(value: string[]) {
  localStorage.setItem(WISH_KEY, JSON.stringify(value));
  window.dispatchEvent(new Event(PREVIEW_EVENT));
}

function PageIntro({ kicker, title, description }: { kicker: string; title: string; description?: string }) {
  return <div className="page-wrap page-title reveal"><span className="eyebrow">{kicker}</span><h1 className="display">{title}</h1>{description && <p>{description}</p>}</div>;
}

function ProductCard({ product, wished, onWish, onAdd }: { product: Product; wished: boolean; onWish: (id: string) => void; onAdd: AddPreview }) {
  const [size, setSize] = useState("");
  return <article className="product-card reveal">
    <div className="product-image-wrap">
      <Link className="product-image-link" href={`/product/${product.slug}`} aria-label={`View ${product.name}`}><img src={product.image} alt={`${product.name} — editorial styling`} loading="lazy" /></Link>
      {product.tag && <span className="product-tag">{product.tag}</span>}
      <button type="button" className={`wish-button ${wished ? "active" : ""}`} aria-label={wished ? `Remove ${product.name} from wishlist` : `Save ${product.name}`} onClick={() => onWish(product.id)}><Heart size={16} fill={wished ? "currentColor" : "none"} /></button>
      <Link className="product-quick" href={`/product/${product.slug}`}><span className="button button-small">View style <ArrowRight size={13} /></span></Link>
    </div>
    <div className="product-meta">
      <div className="product-name"><Link href={`/product/${product.slug}`}>{product.name}</Link><span className="product-price">{inr(product.price)}</span></div>
      <div className="product-sub">{product.fit} · {product.tone}<span className="sample-label">Sample price</span></div>
      <div className="product-actions-row">
        <div className="quick-add-row">
          <label className="sr-only" htmlFor={`size-${product.id}`}>Choose size for {product.name}</label>
          <select id={`size-${product.id}`} className="select-control quick-size" value={size} onChange={event => setSize(event.target.value)}>
            <option value="">Choose size</option>
            {sizes.map(option => <option key={option} value={option}>{option}</option>)}
          </select>
          <button type="button" className="quiet-link" disabled={!size} onClick={() => onAdd(product, size)}>Add preview item</button>
        </div>
        <button type="button" className={`quiet-link ${wished ? "wish-text-active" : ""}`} onClick={() => onWish(product.id)}>{wished ? "Saved" : "Save"} <Heart size={12} fill={wished ? "currentColor" : "none"} /></button>
      </div>
    </div>
  </article>;
}

function ProductGrid({ items, wished, onWish, onAdd }: { items: Product[]; wished: string[]; onWish: (id: string) => void; onAdd: AddPreview }) {
  if (!items.length) return <div className="empty-state"><CircleAlert size={24} /><h2>Nothing in this edit yet</h2><p>Try another fit or category. Product data shown here is a sample catalogue.</p><Link className="button button-outline" href="/shop">Explore all styles</Link></div>;
  return <div className="product-grid">{items.map(p => <ProductCard key={p.id} product={p} wished={wished.includes(p.id)} onWish={onWish} onAdd={onAdd} />)}</div>;
}

function HomeView({ wished, onWish, onAdd }: { wished: string[]; onWish: (id: string) => void; onAdd: AddPreview }) {
  return <>
    {/* EXACT KIARA EDITORIAL HERO SECTION */}
    <section className="gazu-hero-stage">
      {/* DESKTOP HERO (Untouched - vector typography & model layering) */}
      <div className="gazu-hero-viewport gazu-desktop-only">

        {/* 1. Colossal Vector Brand Typography (Behind Model) */}
        <div className="gazu-letters-layer" aria-hidden="true">
          <span>K</span>
          <span>I</span>
          <span>A</span>
          <span>R</span>
          <span>A</span>
        </div>

        {/* 2. Isolated High-Fashion Cutout Model (In Front of Letters) */}
        <div className="gazu-model-layer">
          <img
            src="/images/kiara-model-cutout.png"
            alt="KIARA Fashion Model"
            className="gazu-model-img"
          />
          <div className="gazu-ground-shadow" />
        </div>

        {/* 3. Top-Left Tagline */}
        <div className="gazu-tagline-pos">
          <div className="gazu-tagline-text">
            <span>FASHION</span>
            <span>THAT MOVES</span>
            <span className="tagline-underline">WITH YOU.</span>
          </div>
        </div>

        {/* 4. Bottom-Left Actions */}
        <div className="gazu-actions-pos">
          <Link href="/shop" className="gazu-solid-btn">
            SHOP NOW
          </Link>
          <Link href="/collections/new-arrivals" className="gazu-link-btn">
            EXPLORE NEW IN
          </Link>
        </div>

        {/* 5. Bottom-Right Collection Badge */}
        <div className="gazu-collection-pos">
          <div className="gazu-badge-text">
            <span>NEW</span>
            <span>COLLECTION</span>
            <span className="badge-underline">2024</span>
          </div>
        </div>

      </div>

      {/* MOBILE HERO (Starting composition, clean, proportionate, no blank space!) */}
      <div className="gazu-mobile-hero gazu-mobile-only">
        <div className="gazu-mobile-card">
          <img
            src="/images/kiara-hero-exact.jpg"
            alt="KIARA — Fashion that moves with you · New Collection 2024"
            className="gazu-mobile-img"
          />
          {/* Interactive touch hotspots over buttons */}
          <Link
            href="/shop"
            className="gazu-mobile-hotspot-shop"
            aria-label="Shop Now"
          />
          <Link
            href="/collections/new-arrivals"
            className="gazu-mobile-hotspot-explore"
            aria-label="Explore New In"
          />
        </div>
      </div>
    </section>

    {/* Editorial Feature Banner: NEW SEASON / NEW VIBES (Matching reference) */}
    <section className="kiara-vibes-section">
      <div className="kiara-vibes-container">
        {/* Left Copy Block */}
        <div className="kiara-vibes-content">
          <span className="vibes-eyebrow">NEW SEASON</span>
          <h2 className="vibes-title">
            NEW<br />VIBES
          </h2>
          <p className="vibes-description">
            Discover everything<br className="vibes-desc-br" /> new and now.
          </p>
          <div className="vibes-cta-wrap">
            <Link href="/collections/new-arrivals" className="vibes-cta-btn">
              EXPLORE COLLECTION
            </Link>
          </div>
        </div>

        {/* Right Model Photo */}
        <div className="kiara-vibes-media">
          <img
            src="/images/vibes-bw-mobile.jpg"
            alt="KIARA Men's New Season New Vibes Collection"
            className="vibes-model-img"
          />
        </div>
      </div>
    </section>

    {/* Trust & Guarantee Strip */}
    <section className="kiara-trust-strip">
      <div className="kiara-trust-container">
        <div className="trust-item">
          <div className="trust-icon-wrap">
            <Truck size={26} strokeWidth={1.6} />
          </div>
          <div className="trust-info">
            <h3 className="trust-heading">FAST DELIVERY</h3>
            <p className="trust-sub">Quick & safe delivery</p>
          </div>
        </div>

        <div className="trust-item">
          <div className="trust-icon-wrap">
            <RotateCcw size={24} strokeWidth={1.6} />
          </div>
          <div className="trust-info">
            <h3 className="trust-heading">EASY RETURNS</h3>
            <p className="trust-sub">Within 15 days</p>
          </div>
        </div>

        <div className="trust-item">
          <div className="trust-icon-wrap">
            <Award size={26} strokeWidth={1.6} />
          </div>
          <div className="trust-info">
            <h3 className="trust-heading">QUALITY ASSURED</h3>
            <p className="trust-sub">Best fashion, best quality</p>
          </div>
        </div>

        <div className="trust-item">
          <div className="trust-icon-wrap">
            <Lock size={24} strokeWidth={1.6} />
          </div>
          <div className="trust-info">
            <h3 className="trust-heading">SECURE PAYMENT</h3>
            <p className="trust-sub">100% secure checkout</p>
          </div>
        </div>
      </div>
    </section>

    <section className="page-wrap section">
      <div className="section-heading"><div><span className="eyebrow">A first look</span><h2 className="display">The everyday edit</h2></div><p>Sample styles, made to help shape the collection. Prices and product details are pending approval.</p></div>
      <ProductGrid items={products.slice(0, 4)} wished={wished} onWish={onWish} onAdd={onAdd} />
      <div style={{ textAlign: "center", marginTop: 34 }}><Link className="button button-outline" href="/shop">View all sample styles <ArrowRight size={14} /></Link></div>
    </section>
    <section className="page-wrap section" style={{ paddingTop: 16 }}>
      <div className="section-heading"><div><span className="eyebrow">Find your fit</span><h2 className="display">A shape for every pace.</h2></div><Link className="quiet-link" href="/shop">Shop all <ArrowRight size={13} /></Link></div>
      <div className="category-tiles">
        <Link className="category-tile" href="/collections/oversized-t-shirts"><img src="/images/editorial-hero.jpg" alt="Oversized T-shirt styling" /><div><span>Relaxed and room to move</span><h3>Oversized</h3><span>Explore fit <ArrowDownRight size={13} /></span></div></Link>
        <Link className="category-tile" href="/collections/regular-fit-t-shirts"><img src="/images/editorial-everyday.jpg" alt="Everyday regular-fit styling" /><div><span>Easy, familiar proportions</span><h3>Regular fit</h3><span>Explore fit <ArrowDownRight size={13} /></span></div></Link>
        <Link className="category-tile" href="/collections/printed-t-shirts"><img src="/images/editorial-studio.jpg" alt="Muted printed T-shirt styling" /><div><span>A little more expression</span><h3>Print & graphic</h3><span>Explore styles <ArrowDownRight size={13} /></span></div></Link>
        <Link className="category-tile" href="/collections/solid-t-shirts"><img src="/images/editorial-everyday.jpg" alt="Understated solid T-shirt styling" /><div><span>Simple, versatile layers</span><h3>Solid</h3><span>Explore styles <ArrowDownRight size={13} /></span></div></Link>
      </div>
    </section>
    <section className="manifesto"><div className="page-wrap manifesto-inner"><div><span className="eyebrow">The KIARA STYLE point of view</span><h2 className="display">Less noise.<br /><span className="editorial">More style.</span></h2><p>We’re building a line of men’s T-shirts for the in-between moments: the commute, the long lunch, the plan that wasn’t planned. Simple pieces with room for your own way of wearing them.</p><Link className="quiet-link" href="/about">A little about us <ArrowRight size={13} /></Link></div><img className="manifesto-image" src="/images/editorial-studio.jpg" alt="A relaxed studio portrait in a muted everyday tee" /></div></section>
    <section className="page-wrap section"><div className="section-heading"><div><span className="eyebrow">In the first collection</span><h2 className="display">A few more to meet.</h2></div><p>Browse the full sample edit, from clean solids to graphics in progress.</p></div><ProductGrid items={products.slice(4, 8)} wished={wished} onWish={onWish} onAdd={onAdd} /></section>
    <section className="newsletter"><div className="page-wrap newsletter-inner"><div><span className="eyebrow">Stay in the loop</span><h2 className="display">Good things, occasionally.</h2><p>Sign-up is a visual preview only. No email list is connected.</p></div><NewsletterForm /></div></section>
  </>;
}

function NewsletterForm() {
  const [done, setDone] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); setDone(true); };
  return done ? <div className="inline-success">Thanks for your interest. Newsletter sign-up is not connected yet.</div> : <form className="newsletter-form" onSubmit={submit}><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" type="email" required placeholder="Your email address" /><button type="submit">Count me in <ArrowRight size={13} /></button></form>;
}

function CollectionView({ path, wished, onWish, onAdd }: { path: string; wished: string[]; onWish: (id: string) => void; onAdd: AddPreview }) {
  const slug = path.split("/").pop() || "";
  const title = slug === "best-sellers" ? "Best sellers · sample edit" : collectionNames[slug] || "Shop all";
  const [fit, setFit] = useState("All fits");
  const [category, setCategory] = useState("All styles");
  const [sort, setSort] = useState("Featured");
  const [filterOpen, setFilterOpen] = useState(false);
  const subset = useMemo(() => {
    let list = [...products];
    if (slug === "oversized-t-shirts") list = list.filter(p => p.fit === "Oversized");
    else if (slug === "regular-fit-t-shirts") list = list.filter(p => p.fit === "Regular fit");
    else if (slug === "printed-t-shirts") list = list.filter(p => p.category === "Printed" || p.category === "Graphic");
    else if (slug === "solid-t-shirts") list = list.filter(p => p.category === "Solid");
    else if (slug === "new-arrivals" || slug === "best-sellers") list = [];
    if (fit !== "All fits") list = list.filter(p => p.fit === fit);
    if (category !== "All styles") list = list.filter(p => p.category === category);
    if (sort === "Price: low to high") list.sort((a,b) => a.price - b.price);
    if (sort === "Price: high to low") list.sort((a,b) => b.price - a.price);
    if (sort === "Name") list.sort((a,b) => a.name.localeCompare(b.name));
    return list;
  }, [slug, fit, category, sort]);
  return <div className="page-wrap">
    <PageIntro kicker="KIARA STYLE / THE SHOP" title={title} description={slug === "best-sellers" ? "A sample edit for browsing only. There is no sales history or verified popularity data behind this selection." : "An evolving line-up of everyday T-shirts. Every listing and INR price is a sample pending final product and business approval."} />
    <div className="collection-toolbar"><span>{subset.length} sample styles</span><div className="toolbar-controls"><button className="filter-chip" type="button" onClick={() => setFilterOpen(!filterOpen)}><SlidersHorizontal size={13} /> {filterOpen ? "Hide filters" : "Filters"}</button><label htmlFor="sort-order" className="eyebrow">Sort</label><select className="select-control" id="sort-order" value={sort} onChange={e => setSort(e.target.value)}><option>Featured</option><option>Price: low to high</option><option>Price: high to low</option><option>Name</option></select></div></div>
    {filterOpen && <div className="filter-row"><select className="select-control" aria-label="Filter by fit" value={fit} onChange={e => setFit(e.target.value)}><option>All fits</option><option>Oversized</option><option>Regular fit</option></select><select className="select-control" aria-label="Filter by style" value={category} onChange={e => setCategory(e.target.value)}><option>All styles</option><option>Solid</option><option>Printed</option><option>Graphic</option></select><button className="filter-chip" type="button" onClick={() => { setFit("All fits"); setCategory("All styles"); }}>Clear filters</button></div>}
    <ProductGrid items={subset} wished={wished} onWish={onWish} onAdd={onAdd} />
    <div className="notice"><strong>Sample catalogue:</strong> product names, prices, fit descriptions and imagery are illustrative. Confirmed product data is pending; no inventory or order availability is connected.{slug === "best-sellers" ? " Verified sales history is not available, so no best sellers are shown." : slug === "new-arrivals" ? " Verified product release dates are not available, so no new arrivals are shown." : ""}</div>
  </div>;
}

function ProductView({ path, wished, onWish, onAdd }: { path: string; wished: string[]; onWish: (id: string) => void; onAdd: (p: Product, size?: string, color?: string) => void }) {
  const slug = path.split("/").pop();
  const product = products.find(p => p.slug === slug);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [added, setAdded] = useState(false);
  const [sizeError, setSizeError] = useState(false);
  const [dialog, setDialog] = useState<"size" | "image" | null>(null);
  const router = useRouter();
  useEffect(() => {
    if (!dialog) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDialog(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [dialog]);
  if (!product) return <NotFoundView />;
  const selectedColor = color || product.colors[0];
  const add = () => {
    if (!size) { setSizeError(true); document.getElementById("product-size-options")?.focus(); return false; }
    onAdd(product, size, selectedColor);
    setAdded(true);
    setSizeError(false);
    return true;
  };
  const buyNow = () => {
    if (add()) router.push("/checkout");
  };
  const galleryImages = [product.image];
  return <div className="page-wrap">
    <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true"> / </span><Link href={`/collections/${product.fit === "Oversized" ? "oversized-t-shirts" : "regular-fit-t-shirts"}`}>{product.fit}</Link><span aria-hidden="true"> / </span><span aria-current="page">{product.name}</span></nav>
    <div className="product-detail kiara-product-layout">
      <section className="product-gallery" aria-label="Product images">
        <button className="gallery-main" type="button" onClick={() => setDialog("image")} aria-label={`Open larger image of ${product.name}`}>
          <img src={galleryImages[0]} alt={`${product.name} — sample product image`} />
          <span className="gallery-zoom"><ZoomIn size={16} /> View image</span>
        </button>
        <div className="gallery-thumbnails" aria-label="Image thumbnails">
          {galleryImages.map((image, index) => <button className="gallery-thumb selected" key={image} type="button" aria-label={`Show product image ${index + 1}`} aria-pressed="true" onClick={() => setDialog("image")}><img src={image} alt="" /></button>)}
        </div>
        <p className="gallery-note">More product photography is pending. This preview uses the single image attached to this product record.</p>
      </section>
      <section className="detail-copy kiara-detail-copy" aria-label="Product information">
        <span className="eyebrow">{product.category} · {product.fit} · sample style</span>
        <h1 className="display">{product.name}</h1>
        <div className="detail-price">{inr(product.price)}</div>
        <div className="detail-sample">Sample INR price · pending approval</div>
        <p className="detail-description">{product.description}</p>
        <div className="preview-note"><span className="preview-mark">KS</span><p><strong>Design preview only</strong><br />This item cannot be purchased. Prices and product details are sample values; live inventory and ordering are not connected.</p></div>

        <div className="choice-label"><span>Colour <small>Preview options</small></span><span>{selectedColor}</span></div>
        <div className="color-options" role="group" aria-label="Colour preview options">
          {product.colors.map((c, index) => <button type="button" className={`color-option ${selectedColor === c ? "selected" : ""}`} key={c} onClick={() => { setColor(c); setAdded(false); }} aria-pressed={selectedColor === c} aria-label={`Select ${c}, preview colour`}><span className={`color-swatch swatch-${index % 5}`} aria-hidden="true" />{c}</button>)}
        </div>
        <div className="choice-label size-choice-label"><span>Choose a size <small>Preview options</small></span><button type="button" className="size-chart-trigger" onClick={() => setDialog("size")}><Ruler size={14} /> Size chart</button></div>
        <div className={`size-row kiara-size-row ${sizeError ? "has-error" : ""}`} id="product-size-options" role="group" aria-label="Size preview options" tabIndex={-1}>
          {sizes.map(s => <button type="button" className={`size-choice ${size === s ? "selected" : ""}`} key={s} onClick={() => { setSize(s); setAdded(false); setSizeError(false); }} aria-pressed={size === s}>{s}</button>)}
        </div>
        {sizeError && <p className="size-validation" role="alert">Choose a size preview option before continuing.</p>}
        <p className="variant-caption">Size and colour selections are visual preview options only; availability is not configured.</p>
        {added && <p className="inline-success" role="status">Added to your local preview bag. Checkout is not connected.</p>}
        <div className="detail-actions kiara-detail-actions">
          <button className="button" type="button" onClick={add}>Add to preview bag <ShoppingBag size={15} /></button>
          <button className="button button-outline" type="button" onClick={buyNow}>Buy now · preview checkout <ArrowRight size={15} /></button>
        </div>
        <button className={`product-wishlist-link ${wished.includes(product.id) ? "saved" : ""}`} type="button" onClick={() => onWish(product.id)} aria-pressed={wished.includes(product.id)}><Heart size={15} fill={wished.includes(product.id) ? "currentColor" : "none"} />{wished.includes(product.id) ? "Saved to wishlist" : "Save to wishlist"}</button>
        <p className="checkout-disclaimer">Both actions are local previews. Buy now opens the existing preview checkout; no order or payment is made.</p>
      </section>
    </div>

    <section className="product-information" aria-label="Product details">
      <div className="product-information-heading"><span className="eyebrow">The finer details</span><h2 className="display">Good to know.</h2></div>
      <div className="product-accordions">
        {[
          ["Product description", <><p>{product.description}</p><p><strong>Fit:</strong> {product.fit} · <strong>Colour direction:</strong> {product.tone}.</p><p>Fabric composition, garment measurements, care instructions, print details and additional specifications are pending confirmation.</p></>],
          ["Fabric & care", <p>Fabric composition, washing instructions and care guidance have not been supplied yet. Details are pending and will be added after confirmation.</p>],
          ["Shipping information", <p>Shipping fees, delivery estimates, serviceable locations and fulfilment arrangements are pending. This preview cannot confirm shipping availability.</p>],
          ["Returns & exchanges", <p>Return, exchange, refund and cancellation terms are not yet configured. No returns or exchanges can be promised through this preview.</p>],
        ].map(([heading, content]) => <details className="product-accordion" key={heading as string}><summary>{heading as string}<ChevronDown size={17} aria-hidden="true" /></summary><div className="accordion-content">{content}</div></details>)}
      </div>
    </section>

    <section className="reviews-section" aria-labelledby="reviews-title">
      <div className="reviews-intro"><span className="eyebrow">Community notes</span><h2 className="display" id="reviews-title">Customer reviews</h2><p>There are no reviews for this sample product yet.</p></div>
      <div className="review-empty"><div className="review-empty-icon"><MessageCircle size={20} /></div><div><h3>Be the first to review</h3><p>Ratings, customer stories and customer media will appear here only when real review services are available.</p></div><div className="review-submit-wrap"><button className="button button-outline" type="button" disabled aria-disabled="true">Write a review</button><span>Review submission is disabled because sign-in and review persistence are not configured.</span></div></div>
      <p className="review-count-note">0 reviews · No rating data available</p>
    </section>

    <section className="section related-section"><div className="section-heading"><div><span className="eyebrow">Continue browsing</span><h2 className="display">More from the edit</h2></div><Link className="quiet-link" href="/shop">Shop all <ArrowRight size={13} /></Link></div><ProductGrid items={products.filter(p => p.id !== product.id).slice(0,4)} wished={wished} onWish={onWish} onAdd={onAdd} /></section>

    <section className="product-service-strip" aria-label="Preview service information">
      <article><span className="service-icon"><Truck size={18} /></span><div><h3>Shipping details</h3><p>Rates and delivery information are pending confirmation.</p></div></article>
      <article><span className="service-icon"><RotateCcw size={18} /></span><div><h3>Returns & exchanges</h3><p>Policy terms are not yet configured or promised.</p></div></article>
      <article><span className="service-icon"><MessageCircle size={18} /></span><div><h3>Customer support</h3><p>Support channels are still being set up.</p></div></article>
    </section>
    <div className="mobile-preview-add"><span>{inr(product.price)} <small>Sample price</small></span><button type="button" className="button" onClick={add}>Add to preview bag <ShoppingBag size={15} /></button></div>
    {dialog && <div className={`kiara-modal-backdrop ${dialog === "image" ? "image-lightbox-backdrop" : ""}`} onMouseDown={event => { if (event.target === event.currentTarget) setDialog(null); }}>
      <section className={`kiara-modal ${dialog === "image" ? "lightbox-modal" : ""}`} role="dialog" aria-modal="true" aria-labelledby="product-modal-title" tabIndex={-1}>
        <button className="modal-close" type="button" onClick={() => setDialog(null)} aria-label="Close dialog"><X size={19} /></button>
        {dialog === "size" ? <><span className="eyebrow">Fit reference</span><h2 id="product-modal-title" className="display">Size chart</h2><div className="size-chart-pending"><Ruler size={22} /><h3>Measurements are pending</h3><p>Official garment measurements have not been provided. We won’t guess at chest, length, shoulder or sleeve dimensions.</p><p>Size labels shown on the product page are preview options only. A verified chart will be added once the sample and grading are confirmed.</p></div><button type="button" className="button button-outline modal-done" onClick={() => setDialog(null)}>Back to product</button></> : <><h2 id="product-modal-title" className="sr-only">{product.name} sample image</h2><img className="lightbox-image" src={galleryImages[0]} alt={`${product.name} — sample product image, enlarged`} /><p className="lightbox-caption">Sample image · additional product photography pending</p></>}
      </section>
    </div>}
  </div>;
}

const policies: Record<string, { title: string; kicker: string; intro: string; sections: [string,string][] }> = {
  "/about": { title: "A wardrobe in progress.", kicker: "About KIARA STYLE", intro: "KIARA STYLE is being shaped around men's everyday, casual and streetwear-inspired T-shirts. This storefront is an early visual and catalogue preview.", sections: [["What this is", "An editorial first look at a proposed collection and the experience being designed around it."], ["What is not live", "Brand history, sourcing, production, fabric specifications and launch information have not been verified or approved."]]},
  "/contact": { title: "We’re not connected yet.", kicker: "Contact", intro: "Customer support channels are pending setup. We don't publish a phone number, email, address or social profile until those details are confirmed.", sections: [["For now", "Please treat this storefront as a visual preview. No message submitted here would reach a support team."], ["Before launch", "Official contact details and service availability will be added once confirmed."]]},
  "/size-guide": { title: "Find your fit.", kicker: "Size guide", intro: "Official garment measurements and size specifications are pending. We won't guess at measurements.", sections: [["How to choose", "Use the fit descriptions as general style direction only. For a confident size choice, wait for approved garment measurements."], ["Coming into view", "A verified size chart will be published once the product samples and grading are confirmed."]]},
  "/shipping-policy": { title: "Shipping, when ready.", kicker: "Shipping policy", intro: "Shipping fees, delivery estimates, serviceable PIN codes and fulfilment arrangements are not yet configured.", sections: [["Not currently available", "This preview cannot accept orders or confirm whether delivery is available to a location."], ["Before launch", "Shipping terms will be published after the fulfilment setup and service information are verified."]]},
  "/returns-exchanges": { title: "Returns & exchanges.", kicker: "Returns and exchanges", intro: "No return, exchange, refund or cancellation promise is made on this preview storefront.", sections: [["Pending details", "Eligibility, time windows, product condition requirements and refund methods have not been confirmed."], ["No orders yet", "The store is not connected to an order or payment system, so purchases cannot currently be placed."]]},
  "/privacy-policy": { title: "Privacy, by design.", kicker: "Privacy policy", intro: "This storefront is a browse-only preview. Account and checkout services are not connected.", sections: [["Local preview", "Guest wishlist and cart contents can be stored in this browser for preview purposes. They are not customer orders."], ["Sensitive details", "Do not enter or store payment details or personal address information. No customer account data is collected through this preview."]]},
  "/terms": { title: "Terms of use.", kicker: "Terms", intro: "This site is a sample storefront for review. Products, prices and product details shown are illustrative and are not an offer to sell.", sections: [["Catalogue", "All sample listings, images, names, INR prices and fit descriptions may change and require approval."], ["Commerce services", "Products, inventory, accounts, hosted checkout, payments, order status and tracking are not connected. No purchase is available through this site."]]},
};

function PolicyPage({ path }: { path: string }) {
  const data = policies[path];
  if (data) return <div className="page-wrap"><PageIntro kicker={data.kicker} title={data.title} description={data.intro} /><div className="utility-layout"><div><span className="eyebrow">A note on this preview</span><p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: 13 }}>Service details and commercial terms will be added only when they are verified and ready.</p></div><div>{data.sections.map(([h,p]) => <section className="faq-item" key={h}><h2 style={{ fontSize: 16 }}>{h}</h2><p>{p}</p></section>)}</div></div></div>;
  if (path === "/faq") return <div className="page-wrap"><PageIntro kicker="Help" title="A few things to know." description="Useful answers for browsing the KIARA STYLE preview." /><div className="content-panel">{[
    ["Can I place an order?", "Not yet. Hosted checkout, payments, products and inventory are not connected. Cart and checkout are preview-only."],
    ["Are these final product details?", "No. Listings, style names, descriptions and prices are sample values pending approval."],
    ["Are sizes and fabric confirmed?", "No. Verified fabric composition and official size measurements are pending."],
    ["Can I track a current order?", "No. Order status and tracking are not connected. The tracking page explains what will be needed."],
    ["Are account and payment details saved?", "Account services are not connected. Please do not enter sensitive address or payment information."],
  ].map(([q,a]) => <details className="faq-item" key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div>;
  return <NotFoundView />;
}

function NotFoundView() {
  return <div className="page-wrap"><div className="empty-state" style={{ margin: "70px 0" }}><span className="eyebrow">404 · Page not found</span><h2 className="display">This page has wandered off.</h2><p>The link may be outdated, or this part of the storefront is still being prepared.</p><Link className="button" href="/">Back to the home edit <ArrowRight size={14} /></Link></div></div>;
}

function CartPage({ bag, setBag }: { bag: BagItem[]; setBag: (items: BagItem[]) => void }) {
  const total = bag.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const updateQuantity = (index: number, change: number) => {
    const next = bag.map((item, itemIndex) => itemIndex === index
      ? { ...item, quantity: Math.max(1, item.quantity + change) }
      : item);
    setBag(next);
    saveBag(next);
  };
  if (!bag.length) return <div className="page-wrap"><PageIntro kicker="Your bag" title="Nothing in the bag." description="You can add sample styles to a local preview bag while you browse." /><div className="empty-state"><ShoppingBag size={24} /><h2>Start with an everyday favourite.</h2><p>Your preview bag is empty. There is no live inventory or ordering behind these sample listings.</p><Link href="/shop" className="button">Browse the edit <ArrowRight size={14} /></Link></div></div>;
  return <div className="page-wrap"><PageIntro kicker="Your bag · local preview" title="A few good picks." description="Preview items live only in this browser. No order can be placed from this storefront." /><div className="utility-layout"><div>{bag.map((item, index) => <div className="cart-row" key={`${item.product.id}-${item.size}-${item.color}`}><Link href={`/product/${item.product.slug}`}><img src={item.product.image} alt={item.product.name} /></Link><div><h3>{item.product.name}</h3><p>{item.color} · Size {item.size}</p><p>{inr(item.product.price)} sample price</p><div className="quantity-control"><button type="button" aria-label={`Decrease ${item.product.name} quantity`} onClick={() => updateQuantity(index, -1)}>−</button><span>{item.quantity}</span><button type="button" aria-label={`Increase ${item.product.name} quantity`} onClick={() => updateQuantity(index, 1)}>+</button><button type="button" className="remove-item" onClick={() => { const next = bag.filter((_,i) => i !== index); setBag(next); saveBag(next); }}>Remove</button></div></div><div>{inr(item.product.price * item.quantity)}</div></div>)}</div><aside className="cart-summary"><div><span>Sample subtotal</span><span>{inr(total)}</span></div><div><span>Shipping</span><span>Not calculated</span></div><div className="total"><span>Estimated total</span><span>{inr(total)}</span></div><p style={{ fontSize: 10, lineHeight: 1.7, color: "var(--muted)" }}>Total uses sample catalogue prices only. Taxes, shipping, offers and inventory are not configured.</p><Link className="button" href="/checkout" style={{ width: "100%" }}>Continue to preview checkout <ArrowRight size={14} /></Link></aside></div><div className="notice">Preview only: the cart is stored locally in your browser. Shopify, accounts, hosted checkout and payments are not connected. No purchase will be made.</div></div>;
}

function CheckoutPage({ payment = false }: { payment?: boolean }) {
  return <div className="page-wrap"><PageIntro kicker={payment ? "Checkout preview / payment" : "Checkout preview"} title={payment ? "Payment isn't connected." : "One step before the connection."} description="This checkout is a design preview, not an active purchase flow. Please do not enter personal or payment information." /><div className="notice"><strong>No real checkout:</strong> hosted checkout, payments and order creation are disconnected. No payment information is requested or stored.</div>
    <div className="utility-layout"><div><h2 className="display">{payment ? "Payment setup pending." : "Delivery details preview"}</h2><p style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.8 }}>This screen demonstrates the intended step only. No personal details, payment information, or order data can be entered or saved.</p><div className="content-panel"><h2>Before this can go live</h2><p>A commerce connection is required for products, live prices, inventory, secure checkout, payment processing and order status.</p></div></div><div className="content-panel"><h2>{payment ? "Payment methods unavailable" : "Address collection is disabled"}</h2><p>There is no commerce connection configured. This preview cannot collect delivery information, check serviceability, accept payment, or create an order.</p><button className="button" type="button" disabled aria-disabled="true">{payment ? "Payment setup required" : "Checkout setup required"}</button><p className="form-error">This control is disabled until a real commerce provider is connected.</p></div></div>
  </div>;
}

function FormScreen({ path }: { path: string }) {
  const isSignup = path === "/signup";
  const isForgot = path === "/forgot-password";
  const title = isForgot ? "Reset your password." : isSignup ? "Create an account." : "Welcome back.";
  return <div className="page-wrap"><PageIntro kicker="KIARA STYLE account" title={title} description="Account access is not connected yet. This page is a preview and cannot sign you in, create an account, or send a reset email." /><div className="utility-layout"><div><span className="eyebrow">Not live yet</span><h2 className="display">Your account, when we're ready.</h2><p style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.8 }}>Authentication, customer profiles, saved addresses and order history need a secure account connection before use.</p></div><div className="content-panel"><h2>Account services are unavailable</h2><p>No credentials are requested or stored in this preview. Sign-in and recovery will be enabled only after a secure authentication provider is connected.</p><div className="account-links"><Link href="/shop">Continue browsing</Link>{isSignup && <Link href="/login">Sign in</Link>}{!isSignup && !isForgot && <Link href="/forgot-password">Forgot password?</Link>}{isForgot && <Link href="/login">Back to sign in</Link>}{!isForgot && !isSignup && <Link href="/signup">Create account</Link>}</div></div></div></div>;
}

function MiscPage({ path, wished, onWish, onAdd }: { path: string; wished: string[]; onWish: (id: string) => void; onAdd: AddPreview }) {
  const [query, setQuery] = useState("");
  if (path === "/search") {
    const matches = products.filter(p => `${p.name} ${p.fit} ${p.category} ${p.tone}`.toLowerCase().includes(query.toLowerCase()));
    return <div className="page-wrap"><PageIntro kicker="Search the edit" title="Find your next everyday." description="Search the sample catalogue. Product information and prices are illustrative." /><div className="search-bar"><SearchIcon size={20} /><input autoFocus value={query} onChange={e => setQuery(e.target.value)} placeholder="Try “oversized”, “solid” or “charcoal”" aria-label="Search sample products" />{query && <button className="quiet-link" onClick={() => setQuery("")}>Clear</button>}</div>{query && <p style={{ fontSize: 11, color: "var(--muted)", marginBottom: 20 }}>{matches.length} sample styles for “{query}”</p>}<ProductGrid items={query ? matches : products.slice(0,4)} wished={wished} onWish={onWish} onAdd={onAdd} /></div>;
  }
  if (path.startsWith("/order-confirmation/")) return <div className="page-wrap"><PageIntro kicker="Order status" title="No order to confirm." description="Order creation and payment are not connected to this preview storefront." /><div className="empty-state"><CircleAlert size={24} /><h2>This is not a purchase confirmation.</h2><p>No order has been placed. Orders, payment status and confirmation pages require the commerce connection.</p><Link className="button button-outline" href="/shop">Return to browsing</Link></div></div>;
  if (path === "/track-order") return <div className="page-wrap"><PageIntro kicker="Order tracking" title="Tracking isn't connected." description="There is no order status, tracking number or fulfilment service connected." /><div className="utility-layout"><div><h2 className="display">When tracking is available, it will be here.</h2><p style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.8 }}>No personal information is requested. This preview cannot look up orders.</p></div><div className="content-panel"><h2>Order lookup unavailable</h2><p>Order IDs and contact details are not collected. A commerce connection is required before an order can be verified or tracked.</p><Link className="button button-outline" href="/shop">Browse the sample edit</Link></div></div></div>;
  if (path === "/account" || path.startsWith("/account/")) {
    const section = path.split("/")[2];
    const isOrder = section === "orders";
    const heading = path.includes("/profile") ? "Profile details pending." : path.includes("/orders/") ? "Order details unavailable." : isOrder ? "No order history." : "Account is not connected.";
    return <div className="page-wrap"><PageIntro kicker="Your account" title={heading} description="Sign-in, profile, order history and customer data are not connected." /><div className="account-links"><Link href="/account/profile">Profile</Link><Link href="/account/orders">Orders</Link><Link href="/track-order">Track order</Link></div><div className="content-panel"><h2>Preview state only</h2><p>There is no account session or order data to display. No customer records can be created or accessed here.</p><Link href="/login" className="button button-outline">Account sign-in preview</Link></div></div>;
  }
  if (path === "/checkout") return <CheckoutPage />;
  if (path === "/checkout/payment") return <CheckoutPage payment />;
  if (path === "/login" || path === "/signup" || path === "/forgot-password") return <FormScreen path={path} />;
  return <PolicyPage path={path} />;
}

export function Storefront({ path }: { path: string }) {
  const [bag, setBag] = useState<BagItem[]>([]);
  const [wished, setWished] = useState<string[]>([]);
  const [toast, setToast] = useState("");
  useEffect(() => { setBag(readBag()); setWished(readWish()); }, []);
  const add = (product: Product, size = "M", color?: string) => {
    const selectedColor = color || product.colors[0];
    const existing = bag.find(item => item.product.id === product.id && item.size === size && item.color === selectedColor);
    const next = existing
      ? bag.map(item => item === existing ? { ...item, quantity: item.quantity + 1 } : item)
      : [...bag, { product, size, color: selectedColor, quantity: 1 }];
    setBag(next); saveBag(next); setToast(`${product.name} · size ${size} added to preview bag`);
    window.setTimeout(() => setToast(""), 2800);
  };
  const toggleWish = (id: string) => { const next = wished.includes(id) ? wished.filter(x => x !== id) : [...wished, id]; setWished(next); saveWish(next); };
  if (path === "/") return <><HomeView wished={wished} onWish={toggleWish} onAdd={add} />{toast && <div className="toast">{toast} · <Link href="/cart">View bag</Link></div>}</>;
  if (path === "/shop" || path.startsWith("/collections/")) return <><CollectionView path={path} wished={wished} onWish={toggleWish} onAdd={add} />{toast && <div className="toast">{toast} · <Link href="/cart">View bag</Link></div>}</>;
  if (path.startsWith("/product/")) return <><ProductView path={path} wished={wished} onWish={toggleWish} onAdd={add} />{toast && <div className="toast">{toast} · <Link href="/cart">View bag</Link></div>}</>;
  if (path === "/cart") return <CartPage bag={bag} setBag={setBag} />;
  if (path === "/wishlist") return <WishlistPage wished={wished} onWish={toggleWish} onAdd={add} />;
  return <MiscPage path={path} wished={wished} onWish={toggleWish} onAdd={add} />;
}

function WishlistPage({ wished, onWish, onAdd }: { wished: string[]; onWish: (id: string) => void; onAdd: AddPreview }) {
  const items = products.filter(p => wished.includes(p.id));
  return <div className="page-wrap"><PageIntro kicker="Saved styles · local preview" title="Keep the ones you like." description="Your wishlist is stored locally in this browser for preview. It is not connected to a customer account." />{items.length ? <ProductGrid items={items} wished={wished} onWish={onWish} onAdd={onAdd} /> : <div className="empty-state"><Heart size={24} /><h2>Your saved edit starts here.</h2><p>Save styles while browsing and they will appear here in this browser.</p><Link className="button" href="/shop">Browse styles <ArrowRight size={14} /></Link></div>}</div>;
}
