import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTA, PageShell, ProjectPreview, RoasMeter } from "../../components";
import { caseDetails, projectThumbnail, projects } from "../../data";
import { JsonLd, PageSchema, lastUpdated, pageMeta } from "../../seo";
export const dynamicParams=false;
export function generateStaticParams(){return projects.filter(p=>p.caseStudy&&caseDetails[p.slug]).map(p=>({slug:p.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const project=projects.find(p=>p.slug===slug&&p.caseStudy);const detail=caseDetails[slug];if(!project||!detail)return{title:"Case Study"};const image=projectThumbnail(project);return pageMeta({title:`${project.name} Case Study: ${project.result} | Amir Raza`,description:`${detail.intro} ${project.industry} · ${project.tags.join(", ")}.`.slice(0,158),path:`/case-studies/${slug}`,type:"article",image:{url:image,alt:`${project.name} website design`},keywords:[`${project.name} case study`,project.name,...project.tags]});}
export default async function CaseStudy({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const project=projects.find(p=>p.slug===slug&&p.caseStudy);
  const detail=caseDetails[slug];
  if(!project||!detail)notFound();
  const roasMetric=detail.metrics.find(m=>/roas/i.test(m.label));
  const roasValue=roasMetric?parseFloat(roasMetric.value):null;
  return <PageShell>
    <PageSchema path={`/case-studies/${slug}`} name={`${project.name} case study`} description={detail.intro} crumbs={[["Case Studies","/case-studies"],[project.name,`/case-studies/${slug}`]]} speakable={[".case-hero h1",".case-hero p",".case-metrics"]}/>
    <JsonLd data={{"@context":"https://schema.org","@type":"Article","@id":`https://amirraza.me/case-studies/${slug}#article`,headline:`${project.name} case study`,description:detail.intro,image:`https://amirraza.me${projectThumbnail(project)}`,dateModified:lastUpdated,inLanguage:"en",author:{"@id":"https://amirraza.me/#person"},publisher:{"@id":"https://amirraza.me/#business"},mainEntityOfPage:`https://amirraza.me/case-studies/${slug}`,about:{"@type":"Organization",name:project.name,url:`https://${project.domain}`},keywords:project.tags.join(", "),articleSection:project.industry}}/>
    <section className="case-hero"><div className="shell"><span className="eyebrow">{detail.eyebrow}</span><h1>{project.name}</h1><p>{detail.intro}</p>{!project.offline&&<a className="case-live-link" href={`https://${project.domain}/`} target="_blank" rel="noopener noreferrer">Visit live store <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>}<div className="case-metrics">{detail.metrics.map(m=><div key={m.label}><b>{m.value}</b><span>{m.label}</span></div>)}</div>{detail.metricsPeriod&&<p className="case-period">Source: Meta Ads Manager · {detail.metricsPeriod}</p>}{roasValue&&!Number.isNaN(roasValue)&&<RoasMeter value={roasValue} label={roasMetric!.label} display={roasMetric!.value}/>}</div></section>
    <section className="case-showcase"><div className="shell"><div className="case-showcase-copy"><span className="eyebrow">Complete storefront experience</span><h2>Designed across<br/><em>every key view.</em></h2><p>Homepage, product discovery and lower-page details presented together in one complete website showcase.</p></div><div className="case-preview"><ProjectPreview project={project} loading="eager" size="large"/></div></div></section>
    {detail.proof&&<section className="case-proof"><div className="shell"><div className="case-proof-head"><div><span className="eyebrow">{detail.proof.earlier?"Earlier campaign proof":"Verified campaign proof"}</span><h2>Results backed by<br/><em>Ads Manager.</em></h2></div><p>{detail.proof.earlier?"Store design shows what was built. This Ads Manager record is an earlier snapshot (its caption lists the dates); the figures above cover the more recent period.":"Store design shows what was built. This campaign record shows the measurable performance delivered after launch."}</p></div><figure className="case-proof-frame"><img src={detail.proof.image} alt={detail.proof.alt} decoding="async"/><figcaption>{detail.proof.caption}</figcaption></figure></div></section>}
    <section className="section case-study-content"><div className="shell study-grid"><div><span className="eyebrow">The challenge</span><h2>What had to change.</h2><p>{detail.challenge}</p></div><div><span className="eyebrow">The strategy</span><h2>Focused moves.</h2><ol>{detail.strategy.map((s,i)=><li key={s}><span>0{i+1}</span>{s}</li>)}</ol></div></div></section>
    <CTA/>
  </PageShell>
}
