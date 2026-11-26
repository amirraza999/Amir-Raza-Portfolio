"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Review } from "../reviews-data";

type Filter = "all" | "video" | "image" | "text";

function Stars({ rating }: { rating: number }) {
  return <div className="rw-stars" role="img" aria-label={`${rating} out of 5 stars`}>{"★★★★★".slice(0, rating)}<span aria-hidden="true">{"★★★★★".slice(rating)}</span></div>;
}

function Video({ media, name }: { media: Extract<NonNullable<Review["media"]>, { type: "video" }>; name: string }) {
  const [playing, setPlaying] = useState(false);
  const poster = media.poster ?? (media.youtube ? `https://i.ytimg.com/vi/${media.youtube}/hqdefault.jpg` : undefined);
  const label = media.title ?? `${name} video review`;
  if (playing) {
    return <div className="rw-video">{media.youtube
      ? <iframe src={`https://www.youtube-nocookie.com/embed/${media.youtube}?autoplay=1&rel=0`} title={label} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
      : <video src={media.src} poster={poster} controls autoPlay playsInline />}</div>;
  }
  return <button type="button" className="rw-video rw-video-poster" onClick={() => setPlaying(true)} aria-label={`Play ${label}`}>
    {poster ? <img src={poster} alt="" loading="lazy" decoding="async" /> : <span className="rw-video-fallback" />}
    <span className="rw-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg></span>
    <span className="rw-badge">Video review</span>
  </button>;
}

function Card({ review }: { review: Review }) {
  const m = review.media;
  return <article className={`rw-card${m ? ` rw-has-${m.type}` : ""}`}>
    {m?.type === "video" && <Video media={m} name={review.name} />}
    {m?.type === "image" && <figure className="rw-photo"><img src={m.src} alt={m.alt} loading="lazy" decoding="async" /></figure>}
    <div className="rw-body">
      <div className="rw-top"><Stars rating={review.rating} />{review.source && <span className="rw-source">{review.source}</span>}</div>
      <blockquote>“{review.quote}”</blockquote>
      <div className="rw-client">
        <span className="review-avatar" aria-hidden="true">{review.initials}</span>
        <div><h3>{review.name}</h3><p>{review.role}</p></div>
      </div>
      {review.caseStudy && <Link prefetch={false} className="rw-case" href={`/case-studies/${review.caseStudy}`}>Read the case study →</Link>}
    </div>
  </article>;
}

export default function ReviewWall({ reviews }: { reviews: Review[] }) {
  const counts = useMemo(() => ({
    all: reviews.length,
    video: reviews.filter((r) => r.media?.type === "video").length,
    image: reviews.filter((r) => r.media?.type === "image").length,
    text: reviews.filter((r) => !r.media).length,
  }), [reviews]);
  const [filter, setFilter] = useState<Filter>("all");
  const shown = filter === "all" ? reviews : reviews.filter((r) => (filter === "text" ? !r.media : r.media?.type === filter));
  const tabs: [Filter, string][] = [["all", "All"], ["video", "Video"], ["image", "Photo"], ["text", "Written"]];
  const visibleTabs = tabs.filter(([k]) => k === "all" || counts[k] > 0);

  return <div>
    {visibleTabs.length > 2 && <div className="filter-row rw-filters" role="group" aria-label="Filter reviews">
      {visibleTabs.map(([k, label]) => <button key={k} type="button" className={filter === k ? "active" : ""} aria-pressed={filter === k} onClick={() => setFilter(k)}>{label} <span>{counts[k]}</span></button>)}
    </div>}
    <div className="rw-grid">{shown.map((r) => <Card key={r.name + r.quote.slice(0, 12)} review={r} />)}</div>
  </div>;
}
