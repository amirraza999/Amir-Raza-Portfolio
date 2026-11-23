import type { Metadata } from "next";
import Link from "next/link";
import { CTA, PageShell } from "../components";
import { verifiedPerformance, whatsapp } from "../data";
import { PageSchema, pageMeta } from "../seo";

export const metadata: Metadata = pageMeta({
  title: "Shopify, WooCommerce, Meta, Google & TikTok Ads Services | Amir Raza",
  description: "Shopify & WooCommerce stores, Meta, Google and TikTok ads, CRO, ad creatives and ecommerce strategy. Price discussed on a free consultation.",
  path: "/services",
  image: { url: "/images/services/shopify.webp", width: 800, height: 800, alt: "Shopify Store Design & Development by Amir Raza" },
  keywords: ["Shopify store development Pakistan", "WooCommerce developer Pakistan", "Facebook ads manager Pakistan", "Instagram ads management", "Google Ads management Pakistan", "TikTok ads management Pakistan", "conversion rate optimization", "ecommerce consultant Karachi", "ad creatives design", "Amir Raza services"],
});

type Service = { id: string; title: string; image: string; kicker: string; summary: string; includes: string[]; bestFor: string; proof?: { text: string; href: string; link: string } };

const services: Service[] = [
  { id: "shopify", title: "Shopify Store Design & Development", image: "shopify", kicker: "Store development",
    summary: "A fast, mobile-first Shopify store designed to convert from day one, not redesigned six months later.",
    includes: ["Custom theme setup and design", "Product, collection and cart page optimisation", "Payment, shipping and COD setup", "Apps, reviews, upsells and bundles", "Speed and mobile optimisation", "GA4 and Meta Pixel tracking"],
    bestFor: "New brands launching online and stores that need a conversion-focused rebuild.",
    proof: { text: "30 ecommerce stores built across 10+ industries.", href: "/portfolio", link: "See the portfolio" } },
  { id: "woocommerce", title: "WooCommerce Website Development", image: "woocommerce", kicker: "Store development",
    summary: "A WordPress + WooCommerce store you fully own, with clean design, smooth checkout and room to grow.",
    includes: ["WordPress and WooCommerce setup", "Theme design and customisation", "Product catalogue and categories", "Payment gateways and shipping rules", "Speed, security and SEO basics", "Training to manage your store"],
    bestFor: "Businesses that want full ownership and flexibility on WordPress." },
  { id: "meta-ads", title: "Facebook & Instagram Ads Management", image: "meta-ads", kicker: "Performance marketing",
    summary: "Meta campaigns managed around profitable purchases, not likes or cheap clicks.",
    includes: ["Account, Pixel and Conversions API audit", "Campaign structure and audience strategy", "Creative and copy testing", "Retargeting and catalogue ads", "Budget scaling based on ROAS", "Clear weekly performance reports"],
    bestFor: "Ecommerce brands that want consistent, measurable sales from Facebook and Instagram.",
    proof: { text: `${verifiedPerformance.purchases} purchases at ${verifiedPerformance.averageRoas} average Purchase ROAS in the last 90 days, verified in Ads Manager.`, href: "/results", link: "See verified results" } },
  { id: "google-ads", title: "Google Ads Management", image: "google-ads", kicker: "Performance marketing",
    summary: "Search, Shopping and Performance Max campaigns that reach customers when they are ready to buy.",
    includes: ["Keyword and competitor research", "Search, Shopping and Performance Max setup", "Merchant Center and product feed", "Conversion tracking with GA4", "Negative keywords and bid optimisation", "Monthly reporting and next steps"],
    bestFor: "Stores with search demand that want high-intent buyers." },
  { id: "tiktok-ads", title: "TikTok Ads Management", image: "tiktok-ads", kicker: "Performance marketing",
    summary: "Native-feeling TikTok ads that stop the scroll and turn attention into orders.",
    includes: ["TikTok Pixel and events setup", "Campaign and audience structure", "Hook-first creative direction", "Spark Ads and UGC-style testing", "Scaling winning ads", "Performance tracking and reports"],
    bestFor: "Brands targeting younger audiences or products that sell well on video." },
  { id: "cro", title: "Landing Page & Conversion Optimization", image: "landing-page-cro", kicker: "CRO",
    summary: "Find where visitors drop off, fix it, and earn more from the traffic you already pay for.",
    includes: ["Full funnel and CRO audit", "Heatmaps and session recordings (Hotjar, Clarity)", "A/B testing roadmap", "Landing page design and copy", "Checkout and mobile friction fixes", "Upsell, cross-sell and bundle flows"],
    bestFor: "Stores with traffic but low conversion rate or low order value.",
    proof: { text: "Conversion rates up 15% and AOV up 25% on the stores where this work was implemented.", href: "/cv", link: "Read the CV" } },
  { id: "creatives", title: "Ad Creatives & Brand Design", image: "ad-creatives", kicker: "Creative",
    summary: "Scroll-stopping ad creatives and a consistent brand look that builds trust.",
    includes: ["Static and carousel ad creatives", "Product and offer banners", "Social media post designs", "Brand colours, fonts and style guide", "Logo refresh and visual identity", "Creative variations for A/B testing"],
    bestFor: "Brands whose ads or store look inconsistent or fail to stand out." },
  { id: "strategy", title: "E-commerce Strategy & Consultation", image: "ecommerce-strategy", kicker: "Strategy",
    summary: "A clear, practical growth roadmap for your store, from setup to scaling.",
    includes: ["Business and store audit", "Product, pricing and offer review", "Marketing channel plan", "90-day growth roadmap", "KPI and tracking setup", "One-to-one strategy calls"],
    bestFor: "Founders who need direction before investing in a store or ads." },
];

const shortNames: Record<string, string> = { shopify: "Shopify Stores", woocommerce: "WooCommerce", "meta-ads": "Facebook & Instagram Ads", "google-ads": "Google Ads", "tiktok-ads": "TikTok Ads", cro: "Landing Page & CRO", creatives: "Ad Creatives & Branding", strategy: "E-commerce Strategy" };

const steps = [
  ["Free consultation", "We talk about your business, goals and current numbers."],
  ["Audit & proposal", "I review your store or ads and send a clear plan with scope and price."],
  ["Build & launch", "The work is delivered in stages, with updates you can follow."],
  ["Measure & scale", "We track results, improve what works and scale it."],
];

const faqs = [
  { q: "How much do your services cost?", a: "Pricing depends on your scope, store size and goals, so it is discussed on a free consultation call. After the call you get a clear proposal with a fixed price or monthly fee before any work starts." },
  { q: "Is the first consultation really free?", a: "Yes. The first call is free and there is no obligation. We discuss your business, and I share practical recommendations either way." },
  { q: "Do you work with clients outside Pakistan?", a: "Yes. I am based in Karachi and work with ecommerce brands worldwide, including stores selling in the UAE and internationally in USD." },
  { q: "Can I hire you for one service only?", a: "Yes. You can hire me for a single service, such as Meta Ads or a Shopify store, or combine services into one growth plan." },
  { q: "How do we get started?", a: "Message me on WhatsApp at +92 303 0786960 or use the contact form. We book a free call, then I send a proposal." },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "@id": "https://amirraza.me/services#catalog",
  name: "Amir Raza ecommerce services",
  url: "https://amirraza.me/services",
  itemListElement: services.map((s) => ({
    "@type": "Offer",
    url: `https://amirraza.me/services#${s.id}`,
    itemOffered: { "@type": "Service", name: s.title, description: s.summary, image: `https://amirraza.me/images/services/${s.image}.webp`, areaServed: "Worldwide", provider: { "@type": "ProfessionalService", "@id": "https://amirraza.me/#business", name: "Amir Raza" } },
  })),
};
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function Services() {
  return <PageShell>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <PageSchema path="/services" name="Ecommerce services by Amir Raza" description="Shopify, WooCommerce, Meta, Google and TikTok ads, CRO, creatives and ecommerce strategy. Pricing discussed on a free consultation." crumbs={[["Services", "/services"]]} speakable={[".page-hero h1", ".svc-price-note", ".svc-summary", ".faq-list details>p"]} />
    <section className="page-hero"><div className="shell">
      <span className="eyebrow">Services</span>
      <h1>Everything your store<br /><em>needs to grow.</em></h1>
      <p>Store development, paid ads, conversion optimisation and creative, delivered by one person who owns the result.</p>
      <div className="svc-price-note"><b>Pricing:</b> discussed on a free consultation call, based on your scope and goals. You get a clear proposal before any work starts.</div>
      <div className="cv-actions"><a className="button button-primary" href={whatsapp}>Book a free consultation <span aria-hidden="true">→</span></a><Link prefetch={false} className="button button-light button-outline" href="/results">See verified results</Link></div>
      <nav className="svc-jump" aria-label="Jump to a service">{services.map((s) => <a key={s.id} href={`#${s.id}`}>{shortNames[s.id]}</a>)}<Link prefetch={false} href="/daraz-management">Daraz Store Management</Link></nav>
    </div></section>

    <section className="section svc-list"><div className="shell">
      {services.map((s, i) => <article className={`svc-item${i % 2 ? " flip" : ""}`} id={s.id} key={s.id}>
        <div className="svc-media"><img src={`/images/services/${s.image}.webp`} alt={`${s.title} by Amir Raza`} width={800} height={800} loading={i < 2 ? "eager" : "lazy"} decoding="async" /></div>
        <div className="svc-copy">
          <span className="eyebrow">{String(i + 1).padStart(2, "0")} · {s.kicker}</span>
          <h2>{s.title}</h2>
          <p className="svc-summary">{s.summary}</p>
          <h3>What’s included</h3>
          <ul className="svc-includes">{s.includes.map((x) => <li key={x}>{x}</li>)}</ul>
          <p className="svc-best"><b>Best for:</b> {s.bestFor}</p>
          {s.proof && <p className="svc-proof"><span>{s.proof.text}</span> <Link prefetch={false} href={s.proof.href}>{s.proof.link} →</Link></p>}
          <div className="svc-foot"><span className="svc-price"><b>Price:</b> discussed on a free call</span><a className="button button-primary button-small" href={whatsapp}>Discuss this service <span aria-hidden="true">→</span></a></div>
        </div>
      </article>)}
      <article className="svc-daraz"><div><span className="eyebrow">09 · Marketplace</span><h2>Daraz Store Management</h2><p>Listings, keyword-optimised titles, campaigns and daily store operations on Daraz.</p></div><Link prefetch={false} className="button button-light button-outline" href="/daraz-management">View Daraz service →</Link></article>
    </div></section>

    <section className="section soft svc-process"><div className="shell">
      <div className="section-head"><div><span className="eyebrow">How it works</span><h2>From first call<br /><em>to growth.</em></h2></div><p className="head-copy">Price is agreed after the free consultation, before work starts.</p></div>
      <ol className="svc-steps">{steps.map(([t, d], i) => <li key={t}><span>0{i + 1}</span><h3>{t}</h3><p>{d}</p></li>)}</ol>
    </div></section>

    <section className="section cv-faq"><div className="shell faq-layout"><div><span className="eyebrow">Questions</span><h2>Pricing &amp;<br /><em>process.</em></h2><p>Straight answers before we talk.</p></div><div className="faq-list">{faqs.map((f, i) => <details key={f.q} open={i === 0}><summary><h3>{f.q}</h3><i aria-hidden="true">+</i></summary><p>{f.a}</p></details>)}</div></div></section>
    <CTA />
  </PageShell>;
}
