import type { Metadata } from "next";
import Link from "next/link";
import { CTA, PageShell } from "../components";
import { waLink } from "../data";
import { googleProfileUrl, googleReviewUrl, reviews } from "../reviews-data";
import { PageSchema, pageMeta } from "../seo";
import ReviewWall from "./review-wall";

export const metadata: Metadata = pageMeta({
  title: "Client Reviews & Testimonials | Amir Raza",
  description: "Video, photo and written reviews from ecommerce brands Amir Raza has worked with on Shopify stores, Meta Ads and creative. Leave your own Google review.",
  path: "/reviews",
  keywords: ["Amir Raza reviews", "Shopify expert reviews Pakistan", "Meta Ads specialist testimonials", "client testimonials ecommerce"],
});

const videoReviewText = "Hi Amir, here is my video review for your website. (Please attach a short video, 30–60 seconds: who you are, what we worked on, and the result.)";

export default function ReviewsPage() {
  return <PageShell>
    <PageSchema path="/reviews" name="Client reviews for Amir Raza" description="Video, photo and written reviews from ecommerce clients." crumbs={[["Reviews", "/reviews"]]} speakable={[".page-hero h1", ".page-hero p", ".rw-card blockquote"]} />
    <section className="page-hero rv-hero"><div className="shell">
      <span className="eyebrow">Client reviews</span>
      <h1>Real brands.<br /><em>Real words.</em></h1>
      <p>What ecommerce founders say after working together on their stores, ads and creative. Every review comes from a real client.</p>
      <div className="rv-proof">
        <div><b>★★★★★</b><span>{reviews.length} client reviews</span></div>
        <div><b>30</b><span>stores built</span></div>
        <div><b>4.78X</b><span>average ROAS</span></div>
      </div>
    </div></section>

    <section className="section rv-wall"><div className="shell"><h2 className="sr-only">All reviews</h2><ReviewWall reviews={reviews} /></div></section>

    <section className="section soft rv-leave" id="leave-a-review"><div className="shell">
      <div className="section-head"><div><span className="eyebrow">Worked together?</span><h2>Share your<br /><em>experience.</em></h2></div><p className="head-copy">Your review helps other brands decide with confidence. It takes less than two minutes.</p></div>
      <div className="rv-options">
        <article className="rv-option rv-option-main">
          <span className="rv-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" /></svg></span>
          <h3>Write a Google review</h3>
          <p>The most helpful option. Rate your experience and write a few lines on Google. It appears on Google Search and Maps.</p>
          <a className="button button-primary" href={googleReviewUrl} target="_blank" rel="noopener noreferrer">Leave a Google review <span aria-hidden="true">↗</span></a>
          <small>Needs a Google account · <a href={googleProfileUrl} target="_blank" rel="noopener noreferrer">View Google profile</a></small>
        </article>
        <article className="rv-option">
          <span className="rv-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 6.5h11v11H4zM15 10.5l5-3v9l-5-3" /></svg></span>
          <h3>Send a video review</h3>
          <p>Record 30–60 seconds on your phone: who you are, what we worked on and the result. Send it on WhatsApp and it is added here.</p>
          <a className="button button-light button-outline" href={waLink(videoReviewText)}>Send on WhatsApp <span aria-hidden="true">→</span></a>
        </article>
        <article className="rv-option">
          <span className="rv-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 5.5h16v13H4zM4 15l4.5-4.5 3.5 3.5 2.5-2.5L20 17" /><circle cx="15.5" cy="9" r="1.5" /></svg></span>
          <h3>Share a photo or screenshot</h3>
          <p>A photo of your team, your store or a results screenshot with a short written review. Send it on WhatsApp.</p>
          <a className="button button-light button-outline" href={waLink("Hi Amir, here is my review with a photo for your website:")}>Send on WhatsApp <span aria-hidden="true">→</span></a>
        </article>
      </div>
      <ol className="rv-steps">
        <li><b>1</b><span>Choose Google, video or photo above.</span></li>
        <li><b>2</b><span>Share your honest experience and results.</span></li>
        <li><b>3</b><span>Your review is checked and published here with your permission.</span></li>
      </ol>
      <p className="data-note">Reviews are published only with the client’s permission. Video and photo reviews are shown exactly as sent, without edits to what was said. See the work behind them in the <Link prefetch={false} href="/case-studies">case studies</Link>.</p>
    </div></section>
    <CTA />
  </PageShell>;
}
