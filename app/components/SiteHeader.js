"use client";
import {useState} from "react";

export default function SiteHeader({active=""}){
  const [open,setOpen]=useState("");
  const toggle=(x)=>setOpen(open===x?"":x);
  return <header className="siteHeader unifiedHeader">
    <a className="headerBrand" href="/">
      <img className="headerSphere" src="/kunaris-sphere.png" alt=""/>
      <span className="wordmarkWrap"><img src="/kunaris-wordmark.png" alt="Kunaris"/><small>Kunaris Education &amp; Media Inc.</small></span>
    </a>
    <nav className="mainNav">
      <div className={"navDrop "+(open==="you"?"isOpen":"")}>
        <a className={"navTop "+(active==="you"?"active":"")} href="/for-you" onMouseEnter={()=>setOpen("you")}>For You</a>
        <div className="navMenu">
          <a href="/for-you#languages">Learn a Language</a>
          <a href="/for-you/classes-activities">Classes &amp; Activities</a>
          <a href="/for-you/journey">Your Journey in Canada</a>
        </div>
      </div>
      <div className={"navDrop "+(open==="business"?"isOpen":"")}>
        <a className={"navTop "+(active==="business"?"active":"")} href="/for-business" onMouseEnter={()=>setOpen("business")}>For Your Business</a>
        <div className="navMenu businessMenu">
          <a href="/for-business#brand-digital">Brand &amp; Digital</a>
          <a href="/for-business#video-media">Video &amp; Media</a>
          <a href="/for-business#print-promotion">Printing &amp; Branded Products</a>
          <a href="/for-business#training">Training for Your Team</a>
        </div>
      </div>
      <div className={"navDrop "+(open==="projects"?"isOpen":"")}>
        <a className={"navTop "+(active==="projects"?"active":"")} href="/projects" onMouseEnter={()=>setOpen("projects")}>Projects &amp; Community</a>
        <div className="navMenu">
          <a href="/projects#learning">Learning &amp; Digital</a>
          <a href="/projects#stories">Stories &amp; Places</a>
          <a href="/projects#community">Community &amp; Collaboration</a>
        </div>
      </div>
      <a className={active==="circle"?"active":""} href="/circle">Kunaris Circle</a>
      <a className={active==="about"?"active":""} href="/about">About</a>
      <a className={active==="contact"?"active":""} href="/contact">Contact</a>
      <div className={"langDrop "+(open==="lang"?"isOpen":"")}>
        <button className="lang" onClick={()=>toggle("lang")}>EN⌄</button>
        <div className="langMenu">
          <a className="current" href="/">EN <small>English</small></a>
          <a href="/fr">FR <small>Français</small></a>
          <a href="/zh">中文 <small>Chinese</small></a>
        </div>
      </div>
    </nav>
  </header>
}
