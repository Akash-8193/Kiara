import { Storefront } from "../../components/storefront";
import { notFound } from "next/navigation";
import { products } from "../../lib/products";
import { collectionNames } from "../../lib/products";
import type { Metadata } from "next";

const exactRoutes = new Set([
  "/", "/shop", "/search", "/wishlist", "/cart", "/checkout", "/checkout/payment",
  "/login", "/signup", "/forgot-password", "/account", "/account/profile", "/account/orders",
  "/track-order", "/about", "/contact", "/size-guide", "/faq", "/shipping-policy",
  "/returns-exchanges", "/privacy-policy", "/terms", "/not-found",
]);
const collectionRoutes = new Set([
  "oversized-t-shirts", "regular-fit-t-shirts", "printed-t-shirts", "solid-t-shirts", "best-sellers", "new-arrivals",
]);
const pageDescriptions: Record<string, { title: string; description: string }> = {
  "/": { title: "Men's T-shirts for everyday style", description: "Explore the KIARA STYLE sample edit of everyday men's T-shirts. Product details and sample INR prices are pending approval." },
  "/shop": { title: "Shop men's T-shirts", description: "Browse the KIARA STYLE sample collection of men's oversized, regular-fit, printed and solid T-shirts." },
  "/search": { title: "Search the sample collection", description: "Search the KIARA STYLE sample catalogue by name, fit, style or colour." },
  "/wishlist": { title: "Saved styles", description: "Review styles saved locally in this browser preview." },
  "/cart": { title: "Preview bag", description: "Review sample styles in your local preview bag. Ordering is not connected." },
  "/checkout": { title: "Checkout setup preview", description: "Checkout is not active. No personal or payment information is collected." },
  "/checkout/payment": { title: "Payment setup preview", description: "Payment methods are not connected and no payment can be accepted." },
  "/about": { title: "About KIARA STYLE", description: "Learn about the direction of KIARA STYLE, a men's everyday T-shirt label in development." },
  "/contact": { title: "Contact setup", description: "Customer support details are pending confirmation for the KIARA STYLE storefront." },
  "/size-guide": { title: "Men's T-shirt size guide", description: "Official garment measurements are pending. Review fit notes before choosing a size." },
  "/faq": { title: "Frequently asked questions", description: "Information about the KIARA STYLE sample storefront and its current setup status." },
  "/shipping-policy": { title: "Shipping policy setup", description: "Shipping fees, service regions and delivery estimates have not yet been configured." },
  "/returns-exchanges": { title: "Returns and exchanges setup", description: "Return and exchange terms are pending confirmation and are not yet available." },
  "/privacy-policy": { title: "Privacy information", description: "Learn how this browse-only storefront preview handles local wishlist and bag data." },
  "/terms": { title: "Terms of use", description: "Terms for reviewing the KIARA STYLE sample storefront." },
  "/login": { title: "Account sign in setup", description: "Customer account access is not connected in this storefront preview." },
  "/signup": { title: "Create account setup", description: "Customer account creation is not connected in this storefront preview." },
  "/forgot-password": { title: "Password recovery setup", description: "Password recovery is not connected in this storefront preview." },
  "/account": { title: "Customer account setup", description: "Customer accounts and order history are not connected in this storefront preview." },
  "/account/profile": { title: "Profile setup", description: "Customer profile and saved address features are not connected." },
  "/account/orders": { title: "Order history setup", description: "Customer order history is not connected in this storefront preview." },
  "/track-order": { title: "Order tracking setup", description: "Order tracking is not connected in this storefront preview." },
};

export async function generateMetadata({ params }: { params: Promise<{ segments?: string[] }> }): Promise<Metadata> {
  const { segments = [] } = await params;
  const path = segments.length ? `/${segments.join("/")}` : "/";
  const product = segments[0] === "product" ? products.find(item => item.slug === segments[1]) : undefined;
  const collectionSlug = segments[0] === "collections" ? segments[1] : undefined;
  const base = pageDescriptions[path];
  const title = product?.name ?? (collectionSlug ? collectionNames[collectionSlug] ?? "T-shirt collection" : base?.title ?? "KIARA STYLE");
  const description = product
    ? `${product.description} Sample product listing; specifications and price are pending approval.`
    : base?.description ?? `${title} from KIARA STYLE. Sample storefront; details are pending confirmation.`;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const canonical = siteUrl ? new URL(path, siteUrl).toString() : undefined;
  return {
    title,
    description,
    alternates: canonical ? { canonical } : undefined,
    openGraph: { title: `${title} | KIARA STYLE`, description, type: "website" },
    robots: {
      index: process.env.STORE_LAUNCH_ENABLED === "true",
      follow: process.env.STORE_LAUNCH_ENABLED === "true",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ segments?: string[] }> }) {
  const { segments = [] } = await params;
  const path = `/${segments.join("/")}`;
  const routeTail = segments.at(-1);
  const valid = exactRoutes.has(path)
    || (segments[0] === "collections" && segments.length === 2 && collectionRoutes.has(routeTail || ""))
    || (segments[0] === "product" && segments.length === 2 && products.some(product => product.slug === routeTail))
    || (segments[0] === "order-confirmation" && segments.length === 2)
    || (segments[0] === "account" && segments[1] === "orders" && segments.length === 3);
  if (!valid) notFound();
  return <Storefront path={path} />;
}
