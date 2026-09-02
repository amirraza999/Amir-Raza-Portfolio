import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTA, PageShell, ProjectMockup, RoasMeter } from "../../components";
import { caseDetails, projectThumbnail, projects } from "../../data";
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const project=projects.find(p=>p.slug===slug&&p.caseStudy);const detail=caseDetails[slug];if(!project||!detail)return{title:"Case Study"};const title=`${project.name} Case Study`;const image=projectThumbnail(project);return{title,description:detail.intro,alternates:{canonical:`/case-studies/${slug}`},openGraph:{title:`${title} | Amir Raza`,description:detail.intro,url:`/case-studies/${slug}`,images:[{url:image,alt:`${project.name} website design`}]},twitter:{card:"summary_large_image",title:`${title} | Amir Raza`,description:detail.intro,images:[image]}};}
export default async function CaseStudy({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const project=projects.find(p=>p.slug===slug&&p.caseStudy);
  const detail=caseDetails[slug];
  if(!project||!detail)notFound();
  const roasMetric=detail.metrics.find(m=>/roas/i.test(m.label));
  const roasValue=roasMetric?parseFloat(roasMetric.value):null;
  const breadcrumbSchema={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[
    {"@type":"ListItem",position:1,name:"Home",item:"https://amirraza.me/"},
    {"@type":"ListItem",position:2,name:"Case Studies",item:"https://amirraza.me/case-studies"},
    {"@type":"ListItem",position:3,name:project.name,item:`https://amirraza.me/case-studies/${slug}`},
  ]};
  return <PageShell>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbSchema)}}/>
    <section className="case-hero"><div className="shell"><span className="eyebrow">{detail.eyebrow}</span><h1>{project.name}</h1><p>{detail.intro}</p><div className="case-metrics">{detail.metrics.map(m=><div key={m.label}><b>{m.value}</b><span>{m.label}</span></div>)}</div>{roasValue&&!Number.isNaN(roasValue)&&<RoasMeter value={roasValue} label={roasMetric!.label}/>}</div></section>
    <section className="case-showcase"><div className="shell"><div className="case-showcase-copy"><span className="eyebrow">Complete storefront experience</span><h2>Designed across<br/><em>every key view.</em></h2><p>Homepage, product discovery and lower-page details presented together in one complete website showcase.</p></div><div className="case-mockup" role="img" aria-label={`${project.name} website shown across multiple page views`}><ProjectMockup project={project} imageLoading="eager"/></div></div></section>
    {detail.proof&&<section className="case-proof"><div className="shell"><div className="case-proof-head"><div><span className="eyebrow">Verified campaign proof</span><h2>Results backed by<br/><em>Ads Manager.</em></h2></div><p>Store design shows what was built. This campaign record shows the measurable performance delivered after launch.</p></div><figure className="case-proof-frame"><img src={detail.proof.image} alt={detail.proof.alt} decoding="async"/><figcaption>{detail.proof.caption}</figcaption></figure></div></section>}
    <section className="section case-study-content"><div className="shell study-grid"><div><span className="eyebrow">The challenge</span><h2>What had to change.</h2><p>{detail.challenge}</p></div><div><span className="eyebrow">The strategy</span><h2>Focused moves.</h2><ol>{detail.strategy.map((s,i)=><li key={s}><span>0{i+1}</span>{s}</li>)}</ol></div></div></section>
    <CTA/>
  </PageShell>
}
