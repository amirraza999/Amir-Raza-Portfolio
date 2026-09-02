import type { Metadata } from "next";

export const metadata:Metadata={
  title:"Portfolio",
  description:"Explore 24 Shopify and ecommerce storefront projects across beauty, fashion, electronics and retail.",
  alternates:{canonical:"/portfolio"},
};

export default function PortfolioLayout({children}:{children:React.ReactNode}){
  return children;
}
