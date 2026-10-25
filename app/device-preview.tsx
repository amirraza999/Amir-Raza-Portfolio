"use client";

import { useEffect, useRef } from "react";

type Kind = "desktop" | "phone";

function ScrollDevice({kind, src, title, alt, loading}:{kind:Kind; src:string; title:string; alt:string; loading:"eager"|"lazy"}){
  const deviceRef=useRef<HTMLButtonElement>(null);
  const viewportRef=useRef<HTMLSpanElement>(null);
  const imageRef=useRef<HTMLImageElement>(null);

  useEffect(()=>{
    const device=deviceRef.current, viewport=viewportRef.current, image=imageRef.current;
    if(!device||!viewport||!image) return;
    const hoverQuery=window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)");
    let scrollAnimation:Animation|null=null;
    let returnAnimation:Animation|null=null;
    let playing=false;

    const setPlaying=(value:boolean)=>{playing=value;device.setAttribute("aria-pressed",String(value));};

    const play=()=>{
      if(reducedMotion.matches||!image.complete||!image.naturalWidth||playing) return;
      if(scrollAnimation){
        if(scrollAnimation.playState==="finished") scrollAnimation.currentTime=0;
        scrollAnimation.play();
        setPlaying(true);
        return;
      }
      returnAnimation?.cancel();
      returnAnimation=null;
      const distance=Math.max(0,image.getBoundingClientRect().height-viewport.clientHeight);
      if(distance<=0) return;
      const duration=Math.min(24000,Math.max(7000,distance/65*1000));
      scrollAnimation=image.animate([{transform:"translateY(0)"},{transform:`translateY(-${distance}px)`}],{duration,easing:"linear",fill:"forwards"});
      scrollAnimation.onfinish=()=>setPlaying(false);
      setPlaying(true);
    };

    const pause=()=>{scrollAnimation?.pause();setPlaying(false);};

    const reset=(smooth=true)=>{
      const current=getComputedStyle(image).transform;
      scrollAnimation?.cancel();
      returnAnimation?.cancel();
      scrollAnimation=null;
      returnAnimation=null;
      setPlaying(false);
      if(smooth&&!reducedMotion.matches&&current!=="none"){
        returnAnimation=image.animate([{transform:current},{transform:"translateY(0)"}],{duration:700,easing:"ease-out"});
      }
    };

    const onEnter=()=>{if(hoverQuery.matches) play();};
    const onLeave=()=>{if(hoverQuery.matches) reset();};
    const onClick=(event:MouseEvent)=>{
      if(hoverQuery.matches&&event.detail>0) return;
      if(playing) pause(); else play();
    };
    const onBlur=()=>{if(hoverQuery.matches) reset();};
    const onLoad=()=>reset(false);

    device.addEventListener("pointerenter",onEnter);
    device.addEventListener("pointerleave",onLeave);
    device.addEventListener("click",onClick);
    device.addEventListener("blur",onBlur);
    image.addEventListener("load",onLoad);
    const observer=new ResizeObserver(()=>reset(false));
    observer.observe(viewport);

    return ()=>{
      device.removeEventListener("pointerenter",onEnter);
      device.removeEventListener("pointerleave",onLeave);
      device.removeEventListener("click",onClick);
      device.removeEventListener("blur",onBlur);
      image.removeEventListener("load",onLoad);
      observer.disconnect();
      scrollAnimation?.cancel();
      returnAnimation?.cancel();
    };
  },[]);

  return <button ref={deviceRef} type="button" className={`dp-device dp-${kind}`} aria-label={`Scroll ${title} ${kind==="phone"?"mobile":"desktop"} preview`} aria-pressed="false">
    {kind==="desktop"
      ?<span className="dp-browser-bar"><span className="dp-browser-dots" aria-hidden="true"><i/><i/><i/></span><span className="dp-browser-title">{title}</span></span>
      :<span className="dp-notch" aria-hidden="true"/>}
    <span ref={viewportRef} className="dp-viewport"><img ref={imageRef} src={src} alt={alt} loading={loading} decoding="async"/></span>
    {kind==="phone"&&<span className="dp-home-indicator" aria-hidden="true"/>}
  </button>;
}

export default function DevicePreview({name, desktop, mobile, loading="lazy", size="card"}:{name:string; desktop:string; mobile:string; loading?:"eager"|"lazy"; size?:"card"|"large"}){
  return <div className={`dp-stage dp-size-${size}`}>
    <ScrollDevice kind="desktop" src={desktop} title={name} alt={`${name} desktop website screenshot`} loading={loading}/>
    <ScrollDevice kind="phone" src={mobile} title={name} alt={`${name} mobile website screenshot`} loading={loading}/>
  </div>;
}
