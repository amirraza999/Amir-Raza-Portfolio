import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({src: [{path: "./fonts/Satoshi-400.woff2", weight: "400"}, {path: "./fonts/Satoshi-500.woff2", weight: "500"}, {path: "./fonts/Satoshi-700.woff2", weight: "700"}, {path: "./fonts/Satoshi-900.woff2", weight: "900"}], display: "swap", variable: "--font-satoshi"});

const siteUrl = "https://amirraza.me";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Amir Raza | Shopify Expert & Meta Ads Specialist in Pakistan", template: "%s | Amir Raza" },
  description: "Shopify expert and Meta Ads specialist in Karachi. 9,314 verified purchases at 4.78X average ROAS, 30 ecommerce stores built. Book a free consultation.",
  applicationName: "Amir Raza",
  category: "Ecommerce marketing",
  formatDetection: { telephone: false, email: false, address: false },
  keywords: ["Amir Raza", "Shopify expert Pakistan", "Shopify developer Karachi", "ecommerce consultant Pakistan", "TikTok ads Pakistan", "Google Ads expert Pakistan", "WooCommerce developer Pakistan", "Meta Ads manager", "performance marketing Karachi", "Shopify store development", "Daraz store management", "ecommerce growth Pakistan", "Facebook Ads agency Pakistan"],
  authors: [{ name: "Amir Raza", url: siteUrl }],
  creator: "Amir Raza",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Amir Raza",
    title: "Amir Raza | Shopify Expert & Meta Ads Specialist",
    description: "9,314 verified purchases at 4.78X average ROAS. Shopify stores, Meta, Google and TikTok ads, CRO. Book a free consultation.",
    images: [{ url: "/images/amir-raza.webp", width: 940, height: 940, alt: "Amir Raza — Shopify Expert & Performance Marketer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amir Raza | Shopify Expert & Meta Ads Specialist",
    description: "9,314 verified purchases at 4.78X average ROAS. Shopify, Meta, Google and TikTok ads.",
    images: ["/images/amir-raza.webp"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/images/amir-raza.webp",
  },
  other: { "geo.region": "PK-SD", "geo.placename": "Karachi", "geo.position": "24.8607;67.0011", ICBM: "24.8607, 67.0011" },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Amir Raza",
  alternateName: ["amirraza.me", "Amir Raza Shopify Expert"],
  description: "Shopify stores, Meta, Google and TikTok ads, CRO and Daraz management for ecommerce brands.",
  inLanguage: "en",
  publisher: { "@id": `${siteUrl}/#business` },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#business`,
  name: "Amir Raza",
  description: "Shopify development, Meta & Google performance marketing, and Daraz store management for ecommerce brands in Pakistan and worldwide.",
  url: siteUrl,
  image: `${siteUrl}/images/amir-raza.webp`,
  logo: `${siteUrl}/images/amir-raza.webp`,
  telephone: "+923116450243",
  email: "amirraza960@outlook.com",
  priceRange: "Price on consultation",
  currenciesAccepted: "PKR, USD",
  knowsLanguage: ["English", "Urdu"],
  knowsAbout: ["Shopify", "WooCommerce", "Meta Ads", "Facebook Ads", "Instagram Ads", "Google Ads", "TikTok Ads", "Conversion Rate Optimization", "Daraz", "Ecommerce strategy"],
  hasOfferCatalog: { "@id": `${siteUrl}/services#catalog` },
  contactPoint: { "@type": "ContactPoint", contactType: "sales", telephone: "+923116450243", email: "amirraza960@outlook.com", availableLanguage: ["English", "Urdu"], url: "https://wa.me/923116450243" },
  geo: { "@type": "GeoCoordinates", latitude: 24.8607, longitude: 67.0011 },
  areaServed: "Worldwide",
  address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
  founder: {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Amir Raza",
    jobTitle: "Shopify CRO & Performance Marketing Specialist",
    image: `${siteUrl}/images/amir-raza.webp`,
    knowsAbout: ["Shopify", "Meta Ads", "Google Ads", "TikTok Ads", "Conversion Rate Optimization", "Ecommerce"],
    url: siteUrl,
    sameAs: [
      "https://www.linkedin.com/in/amirraza.me",
      "https://www.instagram.com/amirraza.me/",
      "https://www.facebook.com/amirraza.me/",
    ],
  },
  sameAs: [
    "https://www.linkedin.com/in/amirraza.me",
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
    <html lang="en" className={satoshi.variable} data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light")document.documentElement.dataset.theme=t}catch(e){}` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
