import type { MetadataRoute } from "next";

const publicPaths = [
  "/",
  "/shop",
  "/collections/oversized-t-shirts",
  "/collections/regular-fit-t-shirts",
  "/collections/printed-t-shirts",
  "/collections/solid-t-shirts",
  "/about",
  "/size-guide",
  "/faq",
  "/contact",
  "/shipping-policy",
  "/returns-exchanges",
  "/privacy-policy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  if (process.env.STORE_LAUNCH_ENABLED !== "true" || !process.env.NEXT_PUBLIC_SITE_URL) return [];
  const base = new URL(process.env.NEXT_PUBLIC_SITE_URL);
  return publicPaths.map(path => ({ url: new URL(path, base).toString() }));
}
