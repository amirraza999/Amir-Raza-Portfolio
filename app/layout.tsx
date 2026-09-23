import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], display: "swap", variable: "--font-montserrat"});

const siteUrl = "https://amirraza.me";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Amir Raza | Shopify & Performance Marketing", template: "%s | Amir Raza" },
  description: "Shopify stores, performance marketing and Daraz management for brands in Pakistan and worldwide. Verified Meta Ads results: 7,644+ purchases, 5.96X average Purchase ROAS.",
  keywords: ["Shopify expert Pakistan", "Meta Ads manager", "performance marketing Karachi", "Shopify store development", "Daraz store management", "ecommerce growth Pakistan", "Facebook Ads agency Pakistan"],
  authors: [{ name: "Amir Raza", url: siteUrl }],
  creator: "Amir Raza",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Amir Raza",
    title: "Amir Raza | Digital Growth & E-commerce",
    description: "Better stores. Smarter growth. Shopify development and performance marketing for ambitious brands.",
    images: [{ url: "/images/amir-raza.webp", width: 940, height: 940, alt: "Amir Raza — Shopify Expert & Performance Marketer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amir Raza | Digital Growth & E-commerce",
    description: "Better stores. Smarter growth.",
    images: ["/images/amir-raza.webp"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#business`,
  name: "Amir Raza",
  description: "Shopify development, Meta & Google performance marketing, and Daraz store management for ecommerce brands in Pakistan and worldwide.",
  url: siteUrl,
  image: `${siteUrl}/images/amir-raza.webp`,
  priceRange: "$$",
  areaServed: "Worldwide",
  address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
  founder: {
    "@type": "Person",
    name: "Amir Raza",
    jobTitle: "Shopify Expert & Performance Marketer",
    url: siteUrl,
    sameAs: [
      "https://www.linkedin.com/in/iamamirraza",
      "https://www.instagram.com/amirraza.me/",
      "https://www.facebook.com/amirraza.me/",
    ],
  },
  sameAs: [
    "https://www.linkedin.com/in/iamamirraza",
    "https://www.instagram.com/amirraza.me/",
    "https://www.facebook.com/amirraza.me/",
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopify & E-commerce Development" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meta & Google Performance Marketing" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Daraz Store Management" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Conversion Rate Optimization" } },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable} data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light")document.documentElement.dataset.theme=t}catch(e){}` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
