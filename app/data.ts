export const whatsapp = "https://wa.me/923116450243?text=Hi%20Amir%2C%20I%27d%20like%20to%20discuss%20my%20project.";

// Purchase-only rollup from the six supplied Meta Ads Manager records.
// Messaging and lead campaigns are intentionally excluded.
export const verifiedPerformance = {
  spend: "PKR 6.69M + US$289",
  purchases: "7,644",
  averageRoas: "5.96X",
  highestRoas: "10.85X",
  period: "1 May–28 Aug 2026",
} as const;

export type Project = {
  slug: string; name: string; domain: string; industry: string; image: string;
  tags: string[]; result: string; category: string; featured?: boolean; caseStudy?: boolean;
};

const liveBrowserShots: Record<string,string> = {
  hairagain:"/images/live-browser/hairagain.jpg",
  broscenz:"/images/live-browser/broscenz.jpg",
  sheikh:"/images/live-browser/sheikh.jpg",
  infinitemart:"/images/live-browser/infinitemart.jpg",
};

export function projectThumbnail(project:Project){
  return liveBrowserShots[project.slug] || `/images/thumbs-hq/${project.image}`;
}

export type ProjectMockupImages = {
  main:string;
  overview:string;
  catalogue:string;
  detail:string;
};

/**
 * The mockup deliberately mixes a clean live/home viewport with different
 * regions of the project's full-page capture. This prevents the four screens
 * from repeating the same hero and lets each card show the wider site journey.
 */
export function projectMockupImages(project:Project):ProjectMockupImages{
  const main=projectThumbnail(project);
  const fullPage=`/images/portfolio/${project.image}`;
  return {main,overview:fullPage,catalogue:fullPage,detail:fullPage};
}

export function projectThumbnailClass(project:Project){
  return "reference-ready-shot";
}

export const projects: Project[] = [
  {slug:"hairagain",name:"HairAgain International",domain:"hairagaininternational.com",industry:"Hair replacement · Beauty",image:"hairagain.webp",tags:["Shopify","Meta Ads","CRO"],result:"1,962 message conversations",category:"beauty",featured:true,caseStudy:true},
  {slug:"toupee",name:"Toupee Trends",domain:"toupeetrends.com",industry:"Hair patches · International",image:"toupee.webp",tags:["Shopify","International","USD"],result:"4.2X ROAS",category:"beauty",featured:true,caseStudy:true},
  {slug:"broscenz",name:"Broscenz",domain:"broscenz.com",industry:"Footwear · Fashion",image:"broscenz.webp",tags:["Shopify","Meta Ads","Fashion"],result:"5.47X ROAS · 80 purchases",category:"fashion",caseStudy:true},
  {slug:"jaji",name:"Jaji Electronics",domain:"jajielectronics.com",industry:"Electronics · Appliances",image:"jaji.webp",tags:["Shopify","SEO","100+ Products"],result:"35% organic growth",category:"electronics",caseStudy:true},
  {slug:"sheikh",name:"Sheikh Marketplace UAE",domain:"sheikhmarketplace.store",industry:"Health, beauty & home · UAE",image:"sheikh.webp",tags:["Shopify","UAE","Multi-category"],result:"5+ departments · UAE market",category:"general",featured:true,caseStudy:true},
  {slug:"uniqo",name:"Uniqo",domain:"uniqo.com.pk",industry:"General e-commerce",image:"uniqo.webp",tags:["Shopify","Meta Ads","Pakistan"],result:"4.75X ROAS · 110 purchases",category:"general",caseStudy:true},
  {slug:"pikzy",name:"PikzyStore",domain:"pikzystore.com",industry:"General e-commerce",image:"pikzy.webp",tags:["Shopify","Meta Ads","Scale"],result:"5.28X ROAS · 1,171 purchases",category:"general",featured:true,caseStudy:true},
  {slug:"infinitemart",name:"Infinite Mart PK",domain:"infinitemartpk.store",industry:"Multi-category · COD",image:"infinitemart.webp",tags:["Shopify","Meta Ads","CRO"],result:"6.08X ROAS · 2,861 purchases",category:"general",featured:true,caseStudy:true},
  {slug:"autocrafte",name:"AutoCrafte",domain:"autocrafte.com",industry:"Automotive accessories",image:"autocrafte.webp",tags:["Shopify","Meta Ads","CRO"],result:"6.17X ROAS · 1,216 purchases",category:"niche",caseStudy:true},
  {slug:"scentsby",name:"Scents by Scenterio",domain:"scentsbyscenterio.com",industry:"Perfumes · Fragrance",image:"scentsby.webp",tags:["Shopify","Luxury","Branding"],result:"55% sales growth",category:"beauty",caseStudy:true},
  {slug:"awei",name:"Awei Pakistan",domain:"aweipakistan.com",industry:"Audio electronics",image:"awei.webp",tags:["Shopify","Meta Ads","Authority"],result:"2.8X ROAS · 3X audience",category:"electronics",featured:true,caseStudy:true},
  {slug:"reflete",name:"RefletePK",domain:"refletepk.com",industry:"Beauty · Fragrance · Stationery",image:"reflete.webp",tags:["Shopify","Meta Ads","CRO"],result:"8.02X ROAS · 2,206 purchases",category:"beauty",featured:true,caseStudy:true},
  {slug:"barakahnaturals",name:"Barakah Naturals",domain:"barakahnaturals.com",industry:"Organic skincare · Health",image:"barakahnaturals.webp",tags:["Shopify","Organic","PCSIR"],result:"60% sales growth",category:"beauty"},
  {slug:"selfcaress",name:"Selfcaress",domain:"selfcaress.store",industry:"Skincare · Beauty",image:"selfcaress.webp",tags:["Shopify","Skincare","Natural"],result:"45% CVR growth",category:"beauty"},
  {slug:"pehrahan",name:"Pehrahan",domain:"pehrahan.pk",industry:"Women’s fashion",image:"pehrahan.webp",tags:["Shopify","Fashion","Luxury"],result:"45% order growth",category:"fashion"},
  {slug:"nmjewels",name:"NM Jewels",domain:"nmjewels.pk",industry:"Jewelry",image:"nmjewels.webp",tags:["Shopify","Jewelry","Premium"],result:"50% revenue growth",category:"fashion"},
  {slug:"gentlook",name:"Gentlook",domain:"gentlook.com",industry:"Men’s accessories",image:"gentlook.webp",tags:["Shopify","Niche","CRO"],result:"40% CVR growth",category:"fashion"},
  {slug:"mee10",name:"Mee10",domain:"mee10.com",industry:"Men’s accessories",image:"mee10.webp",tags:["Shopify","Video Ads","COD"],result:"10K+ customers",category:"fashion"},
  {slug:"gen1x",name:"Gen1x",domain:"gen1x.com",industry:"Smartwatches · Tech",image:"gen1x.webp",tags:["Shopify","Dark UI","Tech"],result:"48% sales growth",category:"electronics"},
  {slug:"maxesso",name:"Maxesso",domain:"maxesso.com",industry:"Luxury perfumes",image:"maxesso.webp",tags:["Shopify","Luxury","Black/Gold"],result:"65% AOV growth",category:"beauty"},
  {slug:"bbcbazaar",name:"BBC Bazaar",domain:"bbcbazaar.com",industry:"General store",image:"bbcbazaar.webp",tags:["Shopify","Multi-category","COD"],result:"42% sales growth",category:"general"},
  {slug:"zakhira47",name:"Zakhira47",domain:"zakhira47.com",industry:"General store",image:"zakhira47.webp",tags:["Shopify","Pakistan","COD"],result:"35% revenue growth",category:"general"},
  {slug:"mysbarshop",name:"MyBar Shop",domain:"mysbarshop.com",industry:"Sports merchandise",image:"mysbarshop.webp",tags:["Shopify","Cricket","Football"],result:"52% sales growth",category:"sports"},
  {slug:"rabbitsplanet",name:"Rabbits Planet",domain:"rabbitsplanet.com",industry:"Animal farming · Food",image:"rabbitsplanet.webp",tags:["WooCommerce","Elementor","Export"],result:"Global niche launch",category:"food"},
];

export const caseDetails: Record<string,{eyebrow:string;intro:string;challenge:string;strategy:string[];metrics:{value:string;label:string}[];proof?:{image:string;alt:string;caption:string}}> = {
  infinitemart:{eyebrow:"Multi-product purchase growth",intro:"A multi-category COD store scaled through disciplined product testing, creative iteration and purchase-led budget decisions.",challenge:"A broad catalogue needed a repeatable way to identify profitable products while keeping blended acquisition costs controlled.",strategy:["Test products and creatives in structured batches","Optimize around completed website purchases","Scale stronger campaigns while protecting blended ROAS and cost per purchase"],metrics:[{value:"PKR 2.51M",label:"ad spend"},{value:"2,861",label:"website purchases"},{value:"PKR 876.66",label:"cost per purchase"},{value:"6.08X",label:"average purchase ROAS"}],proof:{image:"/images/case-studies/infinitemart-meta-ads-proof.png",alt:"Infinite Mart PK Meta Ads Manager purchase campaigns from 1 May to 28 August 2026",caption:"Meta Ads Manager · Purchase campaigns · 1 May 2026–28 Aug 2026 · PKR 2,508,117.27 spent · 2,861 website purchases · PKR 876.66 cost per purchase · 6.08X average Purchase ROAS · PKR 15,243,157.64 purchase conversion value"}},
  reflete:{eyebrow:"Store architecture + paid growth",intro:"A trust-led Shopify rebuild made a catalogue of 1,100+ products easier to shop and easier to scale.",challenge:"The large catalogue created friction, while weak trust signals limited conversion from paid traffic.",strategy:["Restructure navigation around customer intent","Strengthen product-page proof and purchase confidence","Connect Meta campaigns to category-level landing experiences"],metrics:[{value:"PKR 1.81M",label:"ad spend"},{value:"2,206",label:"website purchases"},{value:"PKR 14.53M",label:"purchase value"},{value:"8.02X",label:"average purchase ROAS"}],proof:{image:"/images/case-studies/reflete-meta-ads-proof.png",alt:"RefletePK Meta Ads Manager campaign performance from 1 May to 28 August 2026",caption:"Meta Ads Manager · Purchase campaigns · 1 May 2026–28 Aug 2026 · PKR 1.81M spent · 2,206 website purchases · PKR 14.53M purchase value · 8.02X average Purchase ROAS"}},
  broscenz:{eyebrow:"Storefront + purchase growth",intro:"A focused footwear storefront paired with purchase-led Meta campaigns to turn paid traffic into measurable ecommerce revenue.",challenge:"The brand needed to convert footwear shoppers efficiently while keeping acquisition costs controlled as purchase volume grew.",strategy:["Match paid traffic with focused product and category journeys","Optimize campaigns around completed website purchases rather than clicks","Scale only after cost per purchase and ROAS remain stable"],metrics:[{value:"PKR 67.56K",label:"ad spend"},{value:"80",label:"website purchases"},{value:"PKR 844.48",label:"cost per purchase"},{value:"5.47X",label:"average purchase ROAS"}],proof:{image:"/images/case-studies/broscenz-meta-ads-proof.png",alt:"Broscenz Meta Ads Manager purchase campaigns from 1 May to 28 August 2026",caption:"Meta Ads Manager · Purchase campaigns · 1 May 2026–28 Aug 2026 · PKR 67,558.24 spent · 80 website purchases · 5.47X average Purchase ROAS · PKR 369,250 purchase conversion value"}},
  autocrafte:{eyebrow:"Automotive commerce + paid growth",intro:"A conversion-focused automotive accessories store supported by purchase-led Meta campaigns and disciplined performance scaling.",challenge:"The store needed to turn product discovery into profitable purchases across campaigns with different acquisition costs and returns.",strategy:["Connect campaign traffic to clear automotive product journeys","Optimize around completed website purchases and cost per result","Scale stronger campaigns while monitoring blended purchase ROAS"],metrics:[{value:"PKR 955.74K",label:"ad spend"},{value:"1,216",label:"website purchases"},{value:"PKR 785.97",label:"weighted cost per purchase"},{value:"6.17X",label:"average purchase ROAS"}],proof:{image:"/images/case-studies/autocrafte-meta-ads-proof.png",alt:"AutoCrafte Meta Ads Manager purchase campaigns from 1 May to 28 August 2026",caption:"Meta Ads Manager · Purchase campaigns · 1 May 2026–28 Aug 2026 · PKR 955,743.96 spent · 1,216 website purchases · PKR 785.97 weighted cost per purchase · 6.17X average Purchase ROAS · PKR 5,895,956.75 purchase conversion value"}},
  hairagain:{eyebrow:"Consultation-first funnel",intro:"A sensitive hair-replacement offer turned into qualified conversations through a consultation-led journey.",challenge:"Customers needed privacy, trust and expert guidance before they were ready to buy.",strategy:["Lead with education instead of hard selling","Route intent to personal WhatsApp consultation","Optimize campaigns for qualified conversations"],metrics:[{value:"1,962",label:"active message conversations"},{value:"PKR 29.18",label:"weighted cost per conversation"},{value:"PKR 111.4K",label:"total campaign spend"}],proof:{image:"/images/case-studies/hairagain-meta-ads-proof.png",alt:"HairAgain International Meta Ads Manager messaging conversion campaigns from 1 May to 28 August 2026",caption:"Meta Ads Manager · Messaging conversion campaigns · 1 May 2026–28 Aug 2026 · 1,962 conversations from the two active campaigns · PKR 29.18 weighted cost per conversation"}},
  pikzy:{eyebrow:"Validate small. Scale winners hard.",intro:"A performance system that used controlled tests to identify profitable products, then scaled campaigns around verified purchase data.",challenge:"A broad general-store catalogue needed disciplined budget allocation so product testing could grow without losing purchase efficiency.",strategy:["Run controlled product and audience tests","Optimize around completed website purchases","Move budget toward campaigns with stable purchase ROAS"],metrics:[{value:"PKR 1.35M",label:"ad spend"},{value:"1,171",label:"website purchases"},{value:"5.28X",label:"average purchase ROAS"},{value:"PKR 4,087.77",label:"average purchase value"}],proof:{image:"/images/case-studies/pikzy-meta-ads-proof.png",alt:"PikzyStore Meta Ads Manager purchase campaigns from 1 May to 28 August 2026",caption:"Meta Ads Manager · Purchase campaigns · 1 May 2026–28 Aug 2026 · PKR 1,347,252.58 spent · 1,171 website purchases across the reported campaigns · 5.28X average Purchase ROAS · PKR 4,087.77 average purchase value"}},
  awei:{eyebrow:"Global brand, local growth",intro:"Awei’s Pakistan presence was built from zero with local positioning, a conversion-ready store and Meta acquisition.",challenge:"The global audio brand needed local trust, market relevance and a measurable launch path.",strategy:["Localize brand authority and product presentation","Build the acquisition journey around hero products","Use 60 days of structured creative and audience testing"],metrics:[{value:"60 days",label:"timeline"},{value:"2.8X",label:"ROAS"},{value:"3X",label:"audience growth"}]},
  uniqo:{eyebrow:"Efficient purchase acquisition",intro:"Focused Meta purchase campaigns generated measurable ecommerce sales while maintaining disciplined acquisition costs.",challenge:"The store needed a scalable way to acquire online customers without losing control of cost per purchase and return on ad spend.",strategy:["Structure campaigns around completed website purchases","Test product and audience combinations with controlled budgets","Scale only when cost per purchase and Purchase ROAS remain stable"],metrics:[{value:"US$289.22",label:"ad spend"},{value:"110",label:"website purchases"},{value:"US$2.63",label:"cost per purchase"},{value:"4.75X",label:"average purchase ROAS"}],proof:{image:"/images/case-studies/uniqo-meta-ads-proof.png",alt:"Uniqo Meta Ads Manager purchase campaigns from 1 May to 28 August 2026",caption:"Meta Ads Manager · Purchase campaigns · 1 May 2026–28 Aug 2026 · US$289.22 spent · 110 website purchases · US$2.63 cost per purchase · 4.75X average Purchase ROAS"}},
  sheikh:{eyebrow:"UAE multi-category storefront",intro:"A bright, mobile-friendly Shopify shopping experience for health, beauty, home, kitchen and lifestyle products in the UAE.",challenge:"A broad catalogue needed clearer departments, stronger product discovery and a consistent visual system that could make very different categories feel like one trusted store.",strategy:["Lead with a focused promotional hero and immediate purchase action","Organize discovery around visual department tiles","Use best-seller and category-led merchandising to reduce browsing friction","Reinforce UAE shopping confidence with delivery, payment and support signals"],metrics:[{value:"UAE",label:"primary market"},{value:"5+",label:"visible departments"},{value:"24/7",label:"customer support"}]},
  toupee:{eyebrow:"Global hair replacement",intro:"An international USD hair-replacement store built for trust, education and profitable acquisition.",challenge:"A personal, high-consideration product needed confidence-building content for global buyers.",strategy:["Explain fit, care and selection clearly","Use trust-led product pages","Match ads to customer concerns and intent"],metrics:[{value:"4.2X",label:"ROAS"},{value:"USD",label:"global pricing"},{value:"Global",label:"market"}]},
};

for (const p of projects.filter(p=>p.caseStudy)) if (!caseDetails[p.slug]) caseDetails[p.slug]={eyebrow:"Commerce experience",intro:`A focused ${p.industry.toLowerCase()} experience built around clearer discovery, trust and conversion.`,challenge:"The brand needed a more credible storefront and a simpler path from interest to purchase.",strategy:["Clarify the offer and visual hierarchy","Reduce friction across mobile shopping","Connect acquisition traffic to focused landing paths"],metrics:[{value:p.result.split(" · ")[0],label:"documented result"},{value:"Shopify",label:"commerce platform"}]};
