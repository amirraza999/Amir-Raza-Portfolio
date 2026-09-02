"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

export default function SelectedWorkCarousel({children}:{children:ReactNode}){
  const trackRef=useRef<HTMLDivElement>(null);
  const [positions,setPositions]=useState<number[]>([0]);
  const [active,setActive]=useState(0);
  const [paused,setPaused]=useState(false);

  useEffect(()=>{
    const track=trackRef.current;
    if(!track) return;

    const getPositions=()=>{
      const cards=Array.from(track.children) as HTMLElement[];
      const first=cards[0]?.offsetLeft??0;
      const max=Math.max(0,track.scrollWidth-track.clientWidth);
      return cards.map(card=>Math.min(max,Math.max(0,card.offsetLeft-first)))
        .filter((value,index,values)=>index===0||Math.abs(value-values[index-1])>4);
    };

    const measure=()=>{
      const next=getPositions();
      const safeNext=next.length?next:[0];
      setPositions(current=>current.length===safeNext.length&&current.every((value,index)=>Math.abs(value-safeNext[index])<1)?current:safeNext);
      setActive(current=>Math.min(current,Math.max(0,next.length-1)));
    };

    const syncActive=()=>{
      const measured=getPositions();
      setActive(current=>{
        let nearest=0;
        let distance=Infinity;
        measured.forEach((position,index)=>{
          const nextDistance=Math.abs(track.scrollLeft-position);
          if(nextDistance<distance){distance=nextDistance;nearest=index;}
        });
        return nearest===current?current:nearest;
      });
    };

    measure();
    const observer=new ResizeObserver(measure);
    observer.observe(track);
    Array.from(track.children).forEach(card=>observer.observe(card));
    track.addEventListener("scroll",syncActive,{passive:true});
    return ()=>{
      observer.disconnect();
      track.removeEventListener("scroll",syncActive);
    };
  },[]);

  const goTo=(index:number)=>{
    const safe=Math.max(0,Math.min(index,positions.length-1));
    trackRef.current?.scrollTo({left:positions[safe],behavior:"smooth"});
    setActive(safe);
  };

  useEffect(()=>{
    if(paused||positions.length<2||window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer=window.setInterval(()=>{
      setActive(current=>{
        const next=(current+1)%positions.length;
        trackRef.current?.scrollTo({left:positions[next],behavior:"smooth"});
        return next;
      });
    },4500);
    return ()=>window.clearInterval(timer);
  },[paused,positions]);

  return <div className="featured-carousel" aria-roledescription="carousel" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} onFocusCapture={()=>setPaused(true)} onBlurCapture={event=>{if(!event.currentTarget.contains(event.relatedTarget as Node)) setPaused(false);}} onTouchStart={()=>setPaused(true)} onTouchEnd={()=>setPaused(false)}>
    <button className="carousel-arrow carousel-arrow-left" type="button" aria-label="Previous projects" onClick={()=>goTo(active-1)} disabled={active===0}>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7"/></svg>
    </button>
    <div ref={trackRef} className="project-grid home-featured-grid" aria-label="Selected portfolio projects" tabIndex={0}>{children}</div>
    <button className="carousel-arrow carousel-arrow-right" type="button" aria-label="Next projects" onClick={()=>goTo(active+1)} disabled={active===positions.length-1}>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg>
    </button>
    <div className="carousel-dots" role="group" aria-label="Choose project group">
      {positions.map((_,index)=><button key={index} type="button" className={index===active?"active":""} aria-label={`Show project group ${index+1}`} aria-current={index===active?"true":undefined} onClick={()=>goTo(index)}/>) }
    </div>
  </div>;
}
