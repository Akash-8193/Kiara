import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const launched = process.env.STORE_LAUNCH_ENABLED === "true";
  return {
    rules: {
      userAgent: "*",
      allow: launched ? "/" : undefined,
      disallow: launched ? undefined : "/",
    },
    sitemap: launched && process.env.NEXT_PUBLIC_SITE_URL
      ? new URL("/sitemap.xml", process.env.NEXT_PUBLIC_SITE_URL).toString()
      : undefined,
  };
}
