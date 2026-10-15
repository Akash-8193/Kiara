import Image from "next/image";
import Link from "next/link";

export function StoreFooter() {
  return <footer className="footer">
    <div className="page-wrap footer-top">
      <div><Image src="/brand/kiara-style-logo.png" width={1024} height={448} alt="KIARA STYLE" className="footer-brand" /><p>Everyday T-shirts, with a little more thought.<br />A sample storefront in progress.</p></div>
      <div><h3>Explore</h3><div className="footer-links"><Link href="/shop">Shop all</Link><Link href="/collections/best-sellers">Best sellers</Link><Link href="/collections/new-arrivals">New arrivals</Link><Link href="/size-guide">Size guide</Link></div></div>
      <div><h3>Help & information</h3><div className="footer-links"><Link href="/faq">FAQ</Link><Link href="/contact">Contact</Link><Link href="/shipping-policy">Shipping policy</Link><Link href="/returns-exchanges">Returns & exchanges</Link></div></div>
      <div><h3>KIARA STYLE</h3><div className="footer-links"><Link href="/about">About</Link><Link href="/privacy-policy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/track-order">Track an order</Link></div></div>
    </div>
    <div className="page-wrap footer-bottom"><span>© {new Date().getFullYear()} KIARA STYLE · Men's Fashion</span><span>Prices and product details are sample values pending approval.</span></div>
  </footer>;
}
