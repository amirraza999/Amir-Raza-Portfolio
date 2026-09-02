"use client";

import type { FormEvent } from "react";

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const name = String(values.get("name") ?? "").trim();
    const service = String(values.get("service") ?? "").trim();
    const details = String(values.get("details") ?? "").trim();
    const message = `Hi Amir! I’m ${name}.\n\nI’m interested in: ${service}\n\nAbout my project: ${details}`;
    window.location.href = `https://wa.me/923116450243?text=${encodeURIComponent(message)}`;
  }

  return <form className="contact-form" onSubmit={handleSubmit}>
    <label htmlFor="contact-name">Your name</label>
    <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="What should I call you?" required />
    <label htmlFor="contact-service">What do you need?</label>
    <select id="contact-service" name="service" defaultValue="" required><option value="" disabled>Select a service</option><option>Shopify or e-commerce store</option><option>Meta or Google Ads</option><option>Brand and creative design</option><option>AI and WhatsApp automation</option><option>A complete growth strategy</option><option>I’m not sure yet</option></select>
    <label htmlFor="contact-details">Tell me a little more</label>
    <textarea id="contact-details" name="details" rows={4} placeholder="Your brand, your goals, or just an idea…" required />
    <button className="button button-primary form-button" type="submit">Send via WhatsApp <span aria-hidden="true">→</span></button>
    <span className="form-note">No commitment. Just a useful conversation.</span>
  </form>;
}
