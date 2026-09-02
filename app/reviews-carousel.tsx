"use client";

import { Children, ReactNode, useEffect, useRef, useState } from "react";

export default function ReviewsCarousel({children}:{children:ReactNode}){
  const trackRef=useRef<HTMLDivElement>(null);
  const count=Children.count(children);
  const [active,setActive]=useState(0);
  const positionsRef=useRef<number[]>([]);

  useEffect(()=>{
    const track=trackRef.current;
    if(!track) return;

    const measure=()=>{
      const cards=Array.from(track.children) as HTMLElement[];
      const first=cards[0]?.offsetLeft??0;
      const max=Math.max(0,track.scrollWidth-track.clientWidth);
      positionsRef.current=cards.map(card=>Math.min(max,Math.max(0,card.offsetLeft-first)));
    };

    const syncActive=()=>{
      if(!positionsRef.current.length) measure();
      let nearest=0;
      let distance=Infinity;
      positionsRef.current.forEach((position,index)=>{
        const nextDistance=Math.abs(track.scrollLeft-position);
        if(nextDistance<distance){distance=nextDistance;nearest=index;}
      });
      setActive(current=>current===nearest?current:nearest);
    };

    measure();
    const observer=new ResizeObserver(()=>{measure();syncActive();});
    observer.observe(track);
    Array.from(track.children).forEach(card=>observer.observe(card));
    track.addEventListener("scroll",syncActive,{passive:true});
    syncActive();
    return ()=>{observer.disconnect();track.removeEventListener("scroll",syncActive);};
  },[]);

  const goTo=(index:number)=>{
    const track=trackRef.current;
    if(!track) return;
    const position=positionsRef.current[index];
    if(position===undefined) return;
    track.scrollTo({left:position,behavior:"smooth"});
    setActive(index);
  };

  return <div className="reviews-carousel" aria-roledescription="carousel">
    <div ref={trackRef} className="testimonial-grid" aria-label="Client reviews">{children}</div>
    <div className="review-dots" role="group" aria-label="Choose client review">
      {Array.from({length:count},(_,index)=><button key={index} type="button" className={index===active?"active":""} aria-label={`Show review ${index+1}`} aria-current={index===active?"true":undefined} onClick={()=>goTo(index)}/>) }
    </div>
  </div>;
}
