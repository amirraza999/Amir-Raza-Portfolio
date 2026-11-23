import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components";
import { projects, verifiedPerformance, whatsapp } from "../data";
import MailtoLink from "../mailto-link";
import PrintButton from "./print-button";

const email = "amirraza960@outlook.com";
const linkedin = "https://www.linkedin.com/in/amirraza.me";
const title = "Shopify CRO & Performance Marketing Specialist";

export const metadata: Metadata = {
  title: { absolute: "Amir Raza CV – Shopify CRO & Performance Marketing Specialist, Karachi" },
  description: `Amir Raza CV: Shopify CRO & Meta Ads specialist, Karachi. 3+ years, ${verifiedPerformance.purchases} verified purchases at ${verifiedPerformance.averageRoas} ROAS. Download PDF.`,
  keywords: ["Amir Raza CV", "Amir Raza resume", "Shopify CRO specialist", "performance marketer Pakistan", "Meta Ads specialist Karachi", "Shopify expert Pakistan", "ecommerce growth specialist", "conversion rate optimization Shopify", "Daraz store manager"],
  alternates: { canonical: "/cv" },
  twitter: { card: "summary_large_image", title: "Amir Raza CV – Shopify CRO & Performance Marketing", description: `${verifiedPerformance.purchases} verified purchases · ${verifiedPerformance.averageRoas} average Purchase ROAS · 30 ecommerce stores.`, images: ["/images/amir-raza.webp"] },
  openGraph: { type: "profile", title: "Amir Raza | CV / Resume", description: `${title}. Shopify CRO, Meta Ads, GA4, A/B testing and Daraz.`, url: "/cv", images: [{ url: "/images/amir-raza.webp", width: 940, height: 940, alt: "Amir Raza" }] },
};

const numRe = /(PKR [\d.]+M|US\$[\d,]+|\d[\d,]*(?:\.\d+)?(?:%|X)|\d{1,3}(?:,\d{3})+|\b30(?= ecommerce)|10\+)/g;
function Hl({ text }: { text: string }) {
  return <>{text.split(numRe).map((part, i) => (i % 2 ? <strong className="cv-num" key={i}>{part}</strong> : part))}</>;
}

const faqs = [
  { q: "Who is Amir Raza?", a: `Amir Raza is a ${title} based in Karachi, Pakistan, working with ecommerce brands worldwide. Since April 2023 he has worked as an eCommerce CRO & Conversion Strategist, building and optimising Shopify stores and running Meta, Google and TikTok ads.` },
  { q: "What results has Amir Raza delivered?", a: `In the last 90 days (${verifiedPerformance.period}) his Meta Ads campaigns produced ${verifiedPerformance.purchases} purchases at ${verifiedPerformance.averageRoas} average Purchase ROAS across seven ad accounts for six brands, with a peak of ${verifiedPerformance.highestRoas}, verified in Meta Ads Manager. He has worked on 30 ecommerce stores across 10+ industries, lifting conversion rates by 15% and AOV by 25%.` },
  { q: "What services does Amir Raza offer?", a: "Shopify store development and CRO audits, A/B testing, Meta, Google and TikTok ads management, GA4 and pixel tracking, upsell and bundle setup, and Daraz store management." },
  { q: "Which tools does Amir Raza use?", a: "GA4, Shopify Analytics, Meta Pixel, Hotjar, Microsoft Clarity, Meta Ads Manager, Google Ads, TikTok Ads, Shopify, WooCommerce, Daraz, WordPress, Canva, Photoshop and Illustrator." },
  { q: "How can I hire Amir Raza?", a: "Message him on WhatsApp at +92 311 6450243, email amirraza960@outlook.com, or connect on LinkedIn at linkedin.com/in/amirraza.me. He is open to freelance projects and remote roles." },
];

const highlights = [
  { value: verifiedPerformance.purchases, label: "verified Meta Ads purchases", note: verifiedPerformance.period },
  { value: verifiedPerformance.averageRoas, label: "average Purchase ROAS", note: "7 ad accounts · 6 brands" },
  { value: "30", label: "ecommerce stores built", note: "10+ industries" },
  { value: "3+ yrs", label: "ecommerce growth", note: "since April 2023" },
];

const competencies = [
  ["CRO strategy", "Funnel audits, testing roadmaps, bottleneck analysis"],
  ["A/B testing", "Hypothesis design, variant testing, result analysis"],
  ["Shopify optimization", "Themes, apps, checkout, product pages"],
  ["Data & analytics", "GA4, Shopify Analytics, Meta (Facebook) Pixel"],
  ["UX & funnel optimization", "Mobile-first layouts, friction removal"],
  ["Behavioral analysis", "Heatmaps and session recordings (Hotjar, Microsoft Clarity)"],
  ["Revenue growth", "AOV, upsells, cross-sells, bundles"],
  ["Paid advertising", "Meta Ads, Google Ads, TikTok Ads"],
  ["Marketplaces", "Daraz store management, listing SEO, campaigns"],
];

const experience = [
  { heading: "Shopify CRO & funnel optimization", items: [
    "Ran end-to-end CRO audits on Shopify stores, walking each page as a customer would and cross-referencing analytics to find real drop-off points. Overall conversion rates improved by 15% across the stores I worked on.",
    "Built A/B testing roadmaps from scratch for several clients, prioritising pages and elements by traffic volume and potential gain so results were usable, not just interesting.",
    "Used Hotjar and Microsoft Clarity session recordings to find layout and CTA issues; the fixes lifted add-to-cart rates by 20%.",
    "Rebuilt underperforming mobile experiences: simpler navigation, cleaner checkout steps and less load friction, which noticeably improved checkout completion.",
    "Set up upsell, cross-sell and bundle flows on product and cart pages; AOV grew by around 25% where they were implemented properly.",
    "Tracked conversion rate, AOV, add-to-cart rate and checkout completion in GA4 and Shopify Analytics, and reported them so the next step was obvious.",
  ] },
  { heading: "Data analysis & performance tracking", items: [
    "Combined GA4, Shopify Analytics and Meta Pixel data into one clear picture of store performance to pinpoint where the funnel was leaking.",
    "Turned analytics into action plans (what to test next and why) shared with clients and developers so everyone worked from the same priorities.",
    "Segmented performance by device, traffic source and audience; landing pages that worked for paid traffic were adjusted for organic visitors.",
  ] },
  { heading: "Digital advertising & campaign optimization", items: [
    `Managed Meta Ads for six ecommerce brands across seven ad accounts: ${verifiedPerformance.purchases} purchases at ${verifiedPerformance.averageRoas} average Purchase ROAS (peak ${verifiedPerformance.highestRoas}) on ${verifiedPerformance.spend} spend, ${verifiedPerformance.period}.`,
    "Ran creative, copy and audience tests across Meta, Google and TikTok to separate what drove conversions from what only looked good; ROI improved by 30% over time.",
    "Rewrote ad copy iteratively to match the landing page message end to end, which lifted CTR by 25%.",
    "Managed budgets across platforms, using pixel and conversion data to move spend toward what worked.",
  ] },
  { heading: "Store development & UX", items: [
    "Built and optimised 30 ecommerce stores, mostly on Shopify, across 10+ industries, designed for conversion from the first layout decision, with mobile responsiveness and page speed as requirements.",
    "Handled theme customisation, app setup, product listings and promotional campaigns so clients had one owner for a coherent store experience.",
    "Reduced friction across the customer journey with cleaner navigation, faster flows and more relevant recommendations; customer retention rose by 20% where this work was most thorough.",
  ] },
];

const achievements = [
  `${verifiedPerformance.purchases} purchases and ${verifiedPerformance.averageRoas} average Purchase ROAS from Meta Ads in 90 days, verified in Ads Manager (peak account ROAS ${verifiedPerformance.highestRoas}).`,
  "Lifted overall conversion rates by 15% across Shopify stores through structured audits, targeted A/B tests and behaviour-led product page redesigns.",
  "Grew average order value by 25% with upsell and cross-sell flows tested for placement, timing and offer relevance.",
  "Improved paid-campaign ROI by 30% through disciplined creative and audience testing.",
  "Increased organic traffic by 35% through SEO-focused content and listing improvements on Shopify and Daraz.",
];

const tools = [
  ["Analytics", "GA4, Shopify Analytics, Meta Pixel"],
  ["Behavioral tools", "Hotjar, Microsoft Clarity"],
  ["Testing", "A/B testing frameworks, ad-level split testing"],
  ["Ecommerce", "Shopify, WooCommerce, Daraz"],
  ["Advertising", "Meta Ads Manager, Google Ads, TikTok Ads"],
  ["Design", "Adobe Illustrator, Photoshop, Canva"],
  ["CMS", "WordPress"],
  ["Reporting", "Custom KPI dashboards, performance reports"],
];

const certifications = [
  ["E-Commerce Management (Shopify, WooCommerce, Daraz)", ""],
  ["Digital Marketing Fundamentals", "Hunarmand Kamyab Jawan Program"],
  ["Amazon Affiliate eCommerce", "Udemy"],
  ["Social Media Marketing", "Learning with Earning (LWE)"],
  ["WordPress Development", "DigiSkills.pk"],
  ["Graphic Design Mastery (Illustrator, Photoshop)", "Jawan Pakistan"],
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://amirraza.me/cv#page",
  url: "https://amirraza.me/cv",
  name: "Amir Raza CV / Resume",
  dateModified: "2026-11-23",
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".cv-hero h1", ".cv-lede", ".faq-list details>p"] },
  breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://amirraza.me/" },
    { "@type": "ListItem", position: 2, name: "CV", item: "https://amirraza.me/cv" },
  ] },
  mainEntity: {
    "@type": "Person",
    "@id": "https://amirraza.me/#person",
    name: "Amir Raza",
    jobTitle: title,
    description: `${title} with 3+ years in ecommerce. ${verifiedPerformance.purchases} verified Meta Ads purchases at ${verifiedPerformance.averageRoas} average Purchase ROAS; 30 ecommerce stores across 10+ industries.`,
    telephone: "+923116450243",
    worksFor: { "@type": "Organization", name: "Amzoner Consulting" },
    hasOccupation: { "@type": "Occupation", name: title, occupationLocation: { "@type": "Country", name: "Pakistan" }, skills: "Conversion rate optimization, Shopify development, Meta Ads, Google Ads, TikTok Ads, GA4, A/B testing, Daraz" },
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "MSc Petroleum Technology", recognizedBy: { "@type": "CollegeOrUniversity", name: "University of Karachi" } },
      { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "BSc (Hons) Petroleum Technology", recognizedBy: { "@type": "CollegeOrUniversity", name: "University of Karachi" } },
    ],
    subjectOf: { "@type": "DigitalDocument", name: "Amir Raza CV (PDF)", url: "https://amirraza.me/Amir-Raza-CV.pdf", encodingFormat: "application/pdf" },
    url: "https://amirraza.me",
    image: "https://amirraza.me/images/amir-raza.webp",
    email: `mailto:${email}`,
    address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "University of Karachi" },
    knowsLanguage: ["English", "Urdu"],
    knowsAbout: ["Conversion Rate Optimization", "Shopify", "Meta Ads", "Google Ads", "TikTok Ads", "GA4", "A/B Testing", "Daraz", "Ecommerce"],
    sameAs: [linkedin, "https://www.instagram.com/amirraza.me/", "https://www.facebook.com/amirraza.me/"],
  },
};

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function CV() {
  const cases = projects.filter((p) => p.caseStudy && !p.offline);
  return <PageShell>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <section className="page-hero cv-hero"><div className="shell">
      <span className="eyebrow">Curriculum vitae</span>
      <h1>Amir Raza<br /><em>{title}.</em></h1>
      <p className="cv-lede"><strong>Amir Raza</strong> is a Karachi-based Shopify CRO and Meta Ads specialist with <strong>3+ years</strong> in ecommerce: <strong>{verifiedPerformance.purchases} verified purchases</strong> at <strong>{verifiedPerformance.averageRoas} average ROAS</strong> and <strong>30 stores</strong> built. Open to freelance projects and remote roles.</p>
      <div className="cv-actions">
        <a className="button button-primary" href="/Amir-Raza-CV.pdf" download>Download CV (PDF) <span aria-hidden="true">↓</span></a>
        <a className="button button-light button-outline" href={whatsapp}>Hire me on WhatsApp <span aria-hidden="true">→</span></a>
        <PrintButton />
      </div>
      <div className="cv-highlights">{highlights.map((h) => <div key={h.label}><b>{h.value}</b><span>{h.label}</span><small>{h.note}</small></div>)}</div>
    </div></section>

    <section className="cv-section"><div className="shell">
      <article className="cv-paper" aria-label="Amir Raza resume">
        <header className="cv-head">
          <div><h2 className="cv-name">Amir Raza</h2><p className="cv-title">{title}</p></div>
          <ul className="cv-contact">
            <li>Karachi, Pakistan · Open to remote work</li>
            <li><a href={whatsapp}>+92 311 6450243</a> (WhatsApp)</li>
            <li><MailtoLink email={email}>{email}</MailtoLink></li>
            <li><a href="https://amirraza.me">amirraza.me</a></li>
            <li><a href={linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/amirraza.me</a></li>
          </ul>
        </header>

        <section className="cv-block"><h3>Professional summary</h3>
          <p>For <strong>3+ years</strong> I have worked inside Shopify stores, not just building them but finding out why visitors leave without buying and fixing it. I read GA4, heatmaps and session recordings, form a hypothesis, test it and scale what wins. On the acquisition side I manage Meta Ads for ecommerce brands: <strong>{verifiedPerformance.purchases} purchases at {verifiedPerformance.averageRoas} average Purchase ROAS</strong> in the last 90 days, verified in Ads Manager. I have worked on <strong>30 ecommerce stores across 10+ industries</strong>, grown conversion rates and AOV, and helped brands earn more from the traffic they already have.</p>
        </section>

        <section className="cv-block"><h3>Core competencies</h3>
          <ul className="cv-skills">{competencies.map(([k, v]) => <li key={k}><strong>{k}:</strong> {v}</li>)}</ul>
        </section>

        <section className="cv-block"><h3>Work experience</h3>
          <div className="cv-role"><h4>eCommerce CRO & Conversion Strategist</h4><p className="cv-meta"><span>Amzoner Consulting, Pakistan</span><span>April 2023 – Present</span></p></div>
          {experience.map((g) => <div className="cv-group" key={g.heading}><h5>{g.heading}</h5><ul>{g.items.map((i) => <li key={i}><Hl text={i} /></li>)}</ul></div>)}
        </section>

        <section className="cv-block"><h3>Key achievements</h3><ul>{achievements.map((a) => <li key={a}><Hl text={a} /></li>)}</ul></section>

        <section className="cv-block"><h3>Selected clients</h3>
          <p className="cv-clients">{cases.map((p, i) => <span key={p.slug}><Link prefetch={false} href={`/case-studies/${p.slug}`}>{p.name}</Link>{i < cases.length - 1 ? " · " : ""}</span>)}</p>
          <p className="cv-note">Case studies and Ads Manager proof: <Link prefetch={false} href="/case-studies">amirraza.me/case-studies</Link> · <Link prefetch={false} href="/results">amirraza.me/results</Link></p>
        </section>

        <section className="cv-block"><h3>Tools & platforms</h3><ul className="cv-skills">{tools.map(([k, v]) => <li key={k}><strong>{k}:</strong> {v}</li>)}</ul></section>

        <section className="cv-block"><h3>Education</h3>
          <div className="cv-edu"><p className="cv-meta"><span><strong>MSc Petroleum Technology</strong>, University of Karachi</span><span>2023 – 2024</span></p><p className="cv-meta"><span><strong>BSc (Hons) Petroleum Technology</strong>, University of Karachi</span><span>2020 – 2023</span></p></div>
        </section>

        <section className="cv-block"><h3>Certifications</h3><ul className="cv-skills">{certifications.map(([c, by]) => <li key={c}><strong>{c}</strong>{by ? `, ${by}` : ""}</li>)}</ul></section>

        <section className="cv-block"><h3>Languages</h3><p>English (fluent) · Urdu (native)</p></section>
      </article>
    </div></section>

    <section className="section cv-faq soft"><div className="shell faq-layout"><div><span className="eyebrow">Quick answers</span><h2>About<br/><em>Amir Raza.</em></h2><p>Short, factual answers for clients, recruiters and search engines.</p></div><div className="faq-list">{faqs.map((f, i) => <details key={f.q} open={i < 2}><summary><h3>{f.q}</h3><i aria-hidden="true">+</i></summary><p>{f.a}</p></details>)}</div></div></section>

    <section className="cta cv-cta"><div className="shell"><div className="cta-panel"><div className="cta-copy"><h2>Like what you read?</h2><p>Send a short brief about your store or role and I’ll reply personally, usually the same day.</p></div><a className="button cta-button" href={whatsapp}>Start a conversation <span>→</span></a></div></div></section>
  </PageShell>;
}
