import Link from "next/link";
import ContactForm from "./contact-form";
import MailtoLink from "./mailto-link";
import ThemeToggle from "./theme-toggle";
import { Project, projectMockupImages, projectThumbnailClass, whatsapp } from "./data";

export function Header(){return <header className="topbar"><div className="shell navigation"><Link href="/" className="wordmark">Amir<span>.</span></Link><nav className="desktop-nav"><Link href="/portfolio">Portfolio</Link><Link href="/case-studies">Case Studies</Link><Link href="/results">Results</Link></nav><div className="header-actions"><ThemeToggle/><a className="button button-dark button-small" href={whatsapp}>Let’s talk <span>→</span></a><details className="mobile-nav"><summary aria-label="Open navigation menu"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg></summary><nav className="mobile-nav-panel" aria-label="Mobile navigation"><Link href="/portfolio"><span>01</span>Portfolio</Link><Link href="/case-studies"><span>02</span>Case Studies</Link><Link href="/results"><span>03</span>Results</Link></nav></details></div></div></header>}
function SocialIcon({name}:{name:"email"|"linkedin"|"instagram"|"facebook"}){
  if(name==="email") return <span className="social-icon email"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 6.5h17v11h-17zM4 7l8 6 8-6"/></svg></span>;
  if(name==="linkedin") return <span className="social-icon linkedin"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.4 8.4H3.2V21h3.2V8.4ZM4.8 3A1.9 1.9 0 1 0 4.8 6.8 1.9 1.9 0 0 0 4.8 3ZM20.8 13.8c0-3.8-2-5.6-4.7-5.6-2.2 0-3.1 1.2-3.7 2V8.4H9.2V21h3.2v-6.2c0-1.7.3-3.3 2.4-3.3 2 0 2.1 1.9 2.1 3.4V21h3.2l.7-7.2Z"/></svg></span>;
  if(name==="instagram") return <span className="social-icon instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.7"/><circle cx="17.4" cy="6.7" r="1"/></svg></span>;
  return <span className="social-icon facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 21v-8h2.8l.4-3.1H14V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2H7.8V13h2.8v8H14Z"/></svg></span>;
}
export function Footer(){return <><footer className="footer"><div className="shell footer-grid"><div><Link href="/" className="wordmark light">Amir<span>.</span></Link><p>High-converting Shopify stores and performance campaigns engineered for measurable, profitable growth.</p></div><div><b>Explore</b><Link href="/portfolio">Portfolio</Link><Link href="/case-studies">Case Studies</Link><Link href="/results">Results</Link><Link href="/daraz-management">Daraz Management</Link><Link href="/#reviews">Client Reviews</Link><Link href="/#faqs">FAQs</Link></div><div className="footer-connect"><b>Connect</b><MailtoLink email="amirraza960@outlook.com" className="social-link"><SocialIcon name="email"/>Email</MailtoLink><a className="social-link" href="https://www.linkedin.com/in/iamamirraza" target="_blank" rel="noreferrer"><SocialIcon name="linkedin"/>LinkedIn</a><a className="social-link" href="https://www.instagram.com/amirraza.me/" target="_blank" rel="noreferrer"><SocialIcon name="instagram"/>Instagram</a><a className="social-link" href="https://www.facebook.com/amirraza.me/" target="_blank" rel="noreferrer"><SocialIcon name="facebook"/>Facebook</a></div></div><div className="shell footer-bottom"><span>Karachi, Pakistan · Working worldwide</span><span>© 2026 Amir Raza</span></div></footer><a className="mobile-contact" href={whatsapp}>Discuss your project →</a></>}
export function PageShell({children}:{children:React.ReactNode}){return <main><Header/>{children}<Footer/></main>}
export function PageHero({kicker,title,accent,copy}:{kicker:string;title:string;accent:string;copy:string}){return <section className="page-hero"><div className="shell"><span className="eyebrow">{kicker}</span><h1>{title}<br/><em>{accent}</em></h1><p>{copy}</p></div></section>}
export function ProjectMockup({project,imageLoading="lazy"}:{project:Project;imageLoading?:"eager"|"lazy"}){
  const mockup=projectMockupImages(project);
  const thumbnailClass=projectThumbnailClass(project);
  return <div className="project-stage"><div className="project-panel project-panel-left" aria-hidden="true"><img src={mockup.overview} alt="" loading={imageLoading} decoding="async" width="900" height="1600"/></div><div className="project-panel project-panel-right" aria-hidden="true"><img src={mockup.catalogue} alt="" loading={imageLoading} decoding="async" width="900" height="1600"/></div><div className="project-panel project-panel-main"><img className={thumbnailClass} src={mockup.main} alt={`${project.name} website design`} loading={imageLoading} decoding="async" width="1400" height="904"/></div><div className="project-panel project-panel-detail" aria-hidden="true"><img src={mockup.detail} alt="" loading={imageLoading} decoding="async" width="900" height="1600"/></div></div>;
}
export function ProjectCard({project,index=0}:{project:Project;index?:number}){
  const isExternal=!project.caseStudy;
  const href=project.caseStudy?`/case-studies/${project.slug}`:`https://${project.domain}`;
  const imageLoading=project.featured||index<4?"eager":"lazy";
  return <article className="project-card"><Link href={href} className="project-visual" target={isExternal?"_blank":undefined} rel={isExternal?"noreferrer":undefined} aria-label={`View ${project.name} project${isExternal?" in a new tab":""}`}><ProjectMockup project={project} imageLoading={imageLoading}/><span className="project-view-pill">View project ↗</span></Link><div className="project-meta"><div><p>{project.industry}</p><h3>{project.name}</h3><div className="tag-row">{project.tags.map(t=><span key={t}>{t}</span>)}</div></div><strong>{project.result}</strong></div></article>
}
export function HeroGraphic(){
  return <div className="hero-graphic" aria-hidden="true">
    <svg viewBox="0 0 1000 420" preserveAspectRatio="none">
      <defs>
        <linearGradient id="heroLine" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--purple2)"/>
          <stop offset="100%" stopColor="var(--orange)"/>
        </linearGradient>
        <filter id="heroGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="7" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <path className="hero-graphic-path" d="M20,380 C220,370 260,220 420,210 C560,202 620,120 800,70 C860,52 900,44 970,30" fill="none" stroke="url(#heroLine)" strokeWidth="3" strokeLinecap="round" filter="url(#heroGlow)"/>
      <circle className="hero-graphic-dot" cx="420" cy="210" r="6" fill="var(--purple2)"/>
      <circle className="hero-graphic-dot" cx="800" cy="70" r="6" fill="var(--orange)"/>
      <circle className="hero-graphic-dot pulse-dot" cx="970" cy="30" r="7" fill="var(--orange)"/>
    </svg>
  </div>;
}
export function RoasMeter({value,label}:{value:number;label:string}){
  const scaleMax=Math.max(4,Math.ceil((value+1)/2)*2);
  const w=600,trackY=44,trackH=16,pad=2;
  const toX=(v:number)=>pad+(v/scaleMax)*(w-pad*2);
  const fillW=toX(value)-pad;
  const breakevenX=toX(1);
  const gid=`roasFill-${label.replace(/\s+/g,"-")}`;
  return <div className="roas-meter">
    <div className="roas-meter-head"><b>{value}X</b><span>{label}</span></div>
    <svg viewBox={`0 0 ${w} 78`} className="roas-meter-svg" role="img" aria-label={`${value}X ${label}, measured against a 1X breakeven line on a 0 to ${scaleMax}X scale`}>
      <defs><linearGradient id={gid} x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="var(--purple)"/><stop offset="100%" stopColor="var(--purple2)"/></linearGradient></defs>
      <rect x={pad} y={trackY} width={w-pad*2} height={trackH} rx={trackH/2} fill="var(--soft)" stroke="var(--line)"/>
      <rect className="roas-fill" x={pad} y={trackY} width={Math.max(fillW,6)} height={trackH} rx={trackH/2} fill={`url(#${gid})`}/>
      <line className="roas-breakeven-line" x1={breakevenX} y1={trackY-8} x2={breakevenX} y2={trackY+trackH+8} stroke="var(--orange)" strokeWidth="2" strokeDasharray="3 3"/>
      <text x={breakevenX} y={trackY-14} textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--orange)">1X breakeven</text>
      <text x={pad} y={trackY+trackH+26} fontSize="10" fill="var(--muted)">0</text>
      <text x={w-pad} y={trackY+trackH+26} textAnchor="end" fontSize="10" fill="var(--muted)">{scaleMax}X</text>
    </svg>
  </div>;
}
export function CTA(){return <section className="cta"><div className="shell"><div className="cta-panel"><div className="cta-copy"><h2>Chat with a growth expert today.</h2><p>Tell me about your business and I’ll help you identify the next practical growth opportunity.</p></div><a className="button cta-button" href={whatsapp}>Get started <span>→</span></a></div></div></section>}
export function ContactSection(){return <section className="contact-section"><div className="shell contact-grid"><div><span className="eyebrow">Free consultation</span><h2>Tell me about<br/><em>your brand.</em></h2><p>Store, ads or growth problem—send the context and I’ll reply personally.</p></div><ContactForm/></div></section>}
