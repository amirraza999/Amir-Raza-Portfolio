import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "./components";

export const metadata: Metadata = { title: "Page not found", robots: { index: false, follow: true } };

export default function NotFound() {
  return <PageShell>
    <section className="notfound"><div className="shell">
      <b aria-hidden="true">404</b>
      <h1>This page doesn’t exist.</h1>
      <p>The link may be old or mistyped. Everything else is still here: the portfolio, case studies and verified results.</p>
      <div className="notfound-actions">
        <Link className="button button-primary" href="/" prefetch={false}>Back to home</Link>
        <Link className="button button-dark" href="/portfolio" prefetch={false}>View portfolio</Link>
      </div>
      <nav className="notfound-links" aria-label="Popular pages">
        <Link href="/case-studies" prefetch={false}>Case studies</Link>
        <Link href="/results" prefetch={false}>Verified results</Link>
        <Link href="/daraz-management" prefetch={false}>Daraz management</Link>
        <Link href="/#contact" prefetch={false}>Contact</Link>
      </nav>
    </div></section>
  </PageShell>;
}
