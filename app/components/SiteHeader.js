"use client";
import {useState} from "react";

export default function SiteHeader({active="",locale="en"}){
  const [open,setOpen]=useState("");
  const zh=locale==="zh";
  const prefix=zh?"/zh":"";
  const close=()=>setOpen("");
  const labels=zh?{
    you:"个人服务",business:"企业服务",projects:"项目与社区",circle:"Kunaris Circle",about:"关于我们",contact:"联系我们",
    learn:"语言学习",classes:"课程与活动",journey:"加拿大生活指南",
    brand:"品牌与数字服务",video:"视频与媒体",print:"品牌印刷",training:"企业培训",
    learning:"学习与数字项目",stories:"故事与地方",community:"社区",collab:"合作共创"
  }:{you:"For You",business:"For Your Business",projects:"Projects & Community",circle:"Kunaris Circle",about:"About",contact:"Contact",learn:"Learn a Language",classes:"Classes & Activities",journey:"Your Journey in Canada",brand:"Brand & Digital",video:"Video & Media",print:"Printing & Branded Products",training:"Training for Your Team",learning:"Learning & Digital",stories:"Stories & Places",community:"Community & Collaboration",collab:"Collaborate"};
  return <header className="siteHeader unifiedHeader" onMouseLeave={close}>
    <a className="headerBrand" href={prefix||"/"}>
      <img className="headerSphere" src="/kunaris-sphere.png" alt=""/>
      <span className="wordmarkWrap"><img src="/kunaris-wordmark.png" alt="Kunaris"/><small>Kunaris Education &amp; Media Inc.</small></span>
    </a>
    <nav className="mainNav">
      <div className={"navDrop "+(open==="you"?"isOpen":"")} onMouseEnter={()=>setOpen("you")}>
        <a className={"navTop "+(active==="you"?"active":"")} href={`${prefix}/for-you`}>{labels.you}</a>
        <div className="navMenu"><a href={`${prefix}/for-you#languages`}>{labels.learn}</a><a href={`${prefix}/for-you/classes-activities`}>{labels.classes}</a><a href={`${prefix}/for-you/journey`}>{labels.journey}</a></div>
      </div>
      <div className={"navDrop "+(open==="business"?"isOpen":"")} onMouseEnter={()=>setOpen("business")}>
        <a className={"navTop "+(active==="business"?"active":"")} href={`${prefix}/for-business`}>{labels.business}</a>
        <div className="navMenu businessMenu"><a href={`${prefix}/for-business#brand-digital`}>{labels.brand}</a><a href={`${prefix}/for-business#video-media`}>{labels.video}</a><a href={`${prefix}/for-business#print-promotion`}>{labels.print}</a><a href={`${prefix}/for-business#training`}>{labels.training}</a></div>
      </div>
      <div className={"navDrop "+(open==="projects"?"isOpen":"")} onMouseEnter={()=>setOpen("projects")}>
        <a className={"navTop "+(active==="projects"?"active":"")} href={`${prefix}/projects`}>{labels.projects}</a>
        <div className="navMenu"><a href={`${prefix}/projects#learning`}>{labels.learning}</a><a href={`${prefix}/projects#stories`}>{labels.stories}</a><a href={`${prefix}/projects#community`}>{labels.community}</a><a href={`${prefix}/projects#collaborate`}>{labels.collab}</a></div>
      </div>
      <a className={active==="circle"?"active":""} href={`${prefix}/circle`}>{labels.circle}</a>
      <a className={active==="about"?"active":""} href={`${prefix}/about`}>{labels.about}</a>
      <a className={active==="contact"?"active":""} href={`${prefix}/contact`}>{labels.contact}</a>
      <div className={"langDrop "+(open==="lang"?"isOpen":"")} onMouseEnter={()=>setOpen("lang")}>
        <button className="lang" onClick={()=>setOpen(open==="lang"?"":"lang")}>{zh?"中文":"EN"}⌄</button>
        <div className="langMenu"><a className={!zh?"current":""} href="/">EN <small>English</small></a><a href="/fr">FR <small>Français</small></a><a className={zh?"current":""} href="/zh">中文 <small>简体中文</small></a></div>
      </div>
    </nav>
  </header>
}