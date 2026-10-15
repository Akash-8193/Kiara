import Link from "next/link";

export default function NotFound() {
  return <div className="page-wrap"><div className="empty-state" style={{ margin: "70px 0" }}><span className="eyebrow">404 · Page not found</span><h1 className="display">This page has wandered off.</h1><p>The link may be outdated, or this part of the storefront is still being prepared.</p><Link className="button" href="/">Back to the home edit</Link></div></div>;
}
