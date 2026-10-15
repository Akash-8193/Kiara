import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { StoreHeader } from "../components/store-header";
import { StoreFooter } from "../components/site-shell";

export const metadata: Metadata = {
  title: { default: "KIARA STYLE — Men's Fashion", template: "%s | KIARA STYLE" },
  description: "Everyday T-shirts, with a little more thought. Browse the KIARA STYLE sample collection.",
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
  robots: { index: false, follow: false },
  icons: { icon: "/favicon.svg" },
  openGraph: { title: "KIARA STYLE — Men's Fashion", description: "Everyday T-shirts, with a little more thought.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en-IN"><body><StoreHeader /><main>{children}</main><StoreFooter /></body></html>;
}
