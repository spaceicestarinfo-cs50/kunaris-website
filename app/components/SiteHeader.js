"use client";
import {useRef,useState} from "react";
import {usePathname} from "next/navigation";

export default function SiteHeader({active="",locale="en"}){
  const [open,setOpen]=useState("");
  const [mobileOpen,setMobileOpen]=useState(false);
  const closeTimer=useRef(null);
  const pathname=usePathname()||"/";
  const zh=locale==="zh";
  const fr=locale==="fr";
  const prefix=zh?"/zh":fr?"/fr":"";
  const close=()=>setOpen("");
  const cancelClose=()=>{
    if(closeTimer.current){ clearTimeout(closeTimer.current); closeTimer.current=null; }
  };
  const openMenu=(name)=>{ cancelClose(); setOpen(name); };
  const scheduleClose=()=>{
    cancelClose();
    closeTimer.current=setTimeout(()=>setOpen(""),220);
  };
  const localPath=pathname.replace(/^\/(fr|zh)(?=\/|$)/,"")||"/";
  const localeHref=(target)=>{
    if(target==="en") return localPath;
    const base=target==="fr"?"/fr":"/zh";
    return localPath==="/"?base:`${base}${localPath}`;
  };
  const switchLocale=(target,e)=>{
    const href=localeHref(target);
    setMobileOpen(false);
    setOpen("");
    // Force a normal navigation. This is more reliable in mobile in-app browsers.
    if(typeof window!=="undefined"){
      e?.preventDefault?.();
      window.location.assign(href);
    }
  };
  const labels=zh?{
    you:"个人服务",business:"企业服务",projects:"项目与社区",circle:"Kunaris Circle",about:"关于我们",contact:"联系我们",
    learn:"语言学习",classes:"课程与活动",journey:"加拿大生活指南",
    brand:"品牌与数字服务",video:"视频与媒体",print:"品牌印刷",training:"企业培训",
    learning:"学习与数字项目",stories:"故事与地方",community:"社区",collab:"合作共创"
  }:fr?{you:"Pour vous",business:"Pour les entreprises",projects:"Projets & communauté",circle:"Kunaris Circle",about:"À propos",contact:"Contact",learn:"Langues",classes:"Cours & activités",journey:"Votre vie au Canada",brand:"Image de marque & numérique",video:"Vidéo & médias",print:"Impression & objets de marque",training:"Formation d’équipe",learning:"Apprentissage & numérique",stories:"Histoires & lieux",community:"Communauté",collab:"Collaborer"}:{you:"For You",business:"For Your Business",projects:"Projects & Community",circle:"Kunaris Circle",about:"About",contact:"Contact",learn:"Learn a Language",classes:"Classes & Activities",journey:"Your Journey in Canada",brand:"Brand & Digital",video:"Video & Media",print:"Printing & Branded Products",training:"Training for Your Team",learning:"Learning & Digital",stories:"Stories & Places",community:"Community & Collaboration",collab:"Collaborate"};
  return <header className="siteHeader unifiedHeader" onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
    <a className="headerBrand" href={prefix||"/"}>
      <img className="headerSphere" src="/kunaris-sphere.png" alt=""/>
      <span className="wordmarkWrap"><img src="/kunaris-wordmark.png" alt="Kunaris"/><small>Kunaris Education &amp; Media Inc.</small></span>
    </a>
    <button className="mobileMenuButton" type="button" aria-label={mobileOpen?(zh?"关闭菜单":fr?"Fermer le menu":"Close menu"):(zh?"打开菜单":fr?"Ouvrir le menu":"Open menu")} aria-expanded={mobileOpen} onClick={()=>setMobileOpen(!mobileOpen)}><span></span><span></span><span></span></button>
    <nav className="mainNav">
      <div className={"navDrop "+(open==="you"?"isOpen":"")} onMouseEnter={()=>openMenu("you")} onMouseLeave={scheduleClose}>
        <a className={"navTop "+(active==="you"?"active":"")} href={`${prefix}/for-you`}>{labels.you}</a>
        <div className="navMenu" onMouseEnter={cancelClose}><a href={`${prefix}/for-you#languages`}>{labels.learn}</a><a href={`${prefix}/for-you/classes-activities`}>{labels.classes}</a><a href={`${prefix}/for-you/journey`}>{labels.journey}</a></div>
      </div>
      <div className={"navDrop "+(open==="business"?"isOpen":"")} onMouseEnter={()=>openMenu("business")} onMouseLeave={scheduleClose}>
        <a className={"navTop "+(active==="business"?"active":"")} href={`${prefix}/for-business`}>{labels.business}</a>
        <div className="navMenu businessMenu" onMouseEnter={cancelClose}><a href={`${prefix}/for-business#brand-digital`}>{labels.brand}</a><a href={`${prefix}/for-business#video-media`}>{labels.video}</a><a href={`${prefix}/for-business#print-promotion`}>{labels.print}</a><a href={`${prefix}/for-business#training`}>{labels.training}</a></div>
      </div>
      <div className={"navDrop "+(open==="projects"?"isOpen":"")} onMouseEnter={()=>openMenu("projects")} onMouseLeave={scheduleClose}>
        <a className={"navTop "+(active==="projects"?"active":"")} href={`${prefix}/projects`}>{labels.projects}</a>
        <div className="navMenu" onMouseEnter={cancelClose}><a href={`${prefix}/projects#learning`}>{labels.learning}</a><a href={`${prefix}/projects#stories`}>{labels.stories}</a><a href={`${prefix}/projects#community`}>{labels.community}</a><a href={`${prefix}/projects#collaborate`}>{labels.collab}</a></div>
      </div>
      <a className={active==="circle"?"active":""} href={`${prefix}/circle`}>{labels.circle}</a>
      <a className={active==="about"?"active":""} href={`${prefix}/about`}>{labels.about}</a>
      <a className={active==="contact"?"active":""} href={`${prefix}/contact`}>{labels.contact}</a>
      <div className={"langDrop "+(open==="lang"?"isOpen":"")} onMouseEnter={()=>openMenu("lang")} onMouseLeave={scheduleClose}>
        <button className="lang" onClick={()=>setOpen(open==="lang"?"":"lang")}>{zh?"中文":fr?"FR":"EN"}⌄</button>
        <div className="langMenu" onMouseEnter={cancelClose}><a className={!zh&&!fr?"current":""} href={localeHref("en")} onClick={(e)=>switchLocale("en",e)}>EN <small>English</small></a><a className={fr?"current":""} href={localeHref("fr")} onClick={(e)=>switchLocale("fr",e)}>FR <small>Français</small></a><a className={zh?"current":""} href={localeHref("zh")} onClick={(e)=>switchLocale("zh",e)}>中文 <small>简体中文</small></a></div>
      </div>
    </nav>
    <div className={"mobileNavPanel "+(mobileOpen?"isOpen":"")} aria-hidden={!mobileOpen}>
      <a href={`${prefix}/for-you`} onClick={()=>setMobileOpen(false)}>{labels.you}</a>
      <a href={`${prefix}/for-business`} onClick={()=>setMobileOpen(false)}>{labels.business}</a>
      <a href={`${prefix}/projects`} onClick={()=>setMobileOpen(false)}>{labels.projects}</a>
      <a href={`${prefix}/circle`} onClick={()=>setMobileOpen(false)}>{labels.circle}</a>
      <a href={`${prefix}/about`} onClick={()=>setMobileOpen(false)}>{labels.about}</a>
      <a href={`${prefix}/contact`} onClick={()=>setMobileOpen(false)}>{labels.contact}</a>
      <div className="mobileLang" aria-label={zh?"语言切换":fr?"Changer de langue":"Language switcher"}><a className={!zh&&!fr?"current":""} href={localeHref("en")} onClick={(e)=>switchLocale("en",e)}>EN</a><a className={fr?"current":""} href={localeHref("fr")} onClick={(e)=>switchLocale("fr",e)}>FR</a><a className={zh?"current":""} href={localeHref("zh")} onClick={(e)=>switchLocale("zh",e)}>中文</a></div>
    </div>
  </header>
}