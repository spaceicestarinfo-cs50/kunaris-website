"use client";
import { useState } from "react";


const Arrow=()=> <span aria-hidden="true">→</span>;
const Item=({icon,title,sub})=><a className="menuItem" href="#"><span className="menuIcon">{icon}</span><span><strong>{title}</strong><small>{sub}</small></span><Arrow/></a>;

export default function Home(){
 const [navOpen,setNavOpen]=useState("");
 const toggleNav=(name)=>setNavOpen(navOpen===name?"":name);
 return <main>
<header className="siteHeader">
 <a className="headerBrand" href="#">
  <span className="wordmarkWrap"><img src="/kunaris-wordmark.png" alt="Kunaris"/><small>Kunaris Education &amp; Media Inc.</small></span>
 </a>
 <nav className="mainNav">
  <div className={"navDrop "+(navOpen==="you"?"isOpen":"")}>
    <button className="navTop" onClick={()=>toggleNav("you")}>For You</button>
    <div className="navMenu">
      <a href="/for-you">Learn a Language</a>
      <a href="/for-you">Classes &amp; Activities</a>
      <a href="/for-you">Your Journey in Canada</a>
    </div>
  </div>
  <div className={"navDrop "+(navOpen==="business"?"isOpen":"")}>
    <button className="navTop" onClick={()=>toggleNav("business")}>For Your Business</button>
    <div className="navMenu businessMenu">
      <a href="#for-business">Website &amp; Digital</a>
      <a href="#for-business">Video &amp; Media</a>
      <a href="#for-business">Brand &amp; Visual</a>
      <a href="#for-business">Printing &amp; Branded Products</a>
    </div>
  </div>
  <a href="#projects">Projects</a>
  <a href="#circle">Kunaris Circle</a>
  <a href="#about">About</a>
  <a href="mailto:hello@kunaris.ca">Contact</a>
  <a className="signIn" href="#circle">Sign In →</a>
  <div className={"langDrop "+(navOpen==="lang"?"isOpen":"")}>
    <button className="lang" onClick={()=>toggleNav("lang")}>EN⌄</button>
    <div className="langMenu">
      <button className="current">EN <small>English</small></button>
      <button>FR <small>Français</small></button>
      <button>中文 <small>Chinese</small></button>
    </div>
  </div>
</nav>
</header>

<div className="shell">
<section className="hero">
 <div className="heroCopy">
  <p className="eyebrow">PEOPLE · IDEAS · A BRIGHTER TOMORROW</p>
  <h1><span>Learn.</span><span>Create.</span><em>Connect.</em></h1>
  <h2>Education and creative digital solutions for a more open and brighter world.</h2>
  <p>Learning for you. Websites, apps, learning tools, videos, branding and more for your business.</p>
  <a className="cta" href="#services">Discover Kunaris <Arrow/></a>
 </div>
 <div className="heroVisual"><span className="glow"></span><img src="/kunaris-sphere.png" alt="Kunaris sphere"/><i>Ideas for a<br/>brighter tomorrow</i></div>
</section>

<section id="services" className="serviceGrid">
 <article id="for-you" className="serviceCard forYou">
  <div className="cardWash washLearning"></div>
  <div className="cardContent">
   <div className="serviceHeading"><h2>For You</h2><span className="bow">🏹</span></div>
   <p className="serviceDescriptor">LANGUAGES · ACTIVITIES · YOUR JOURNEY</p>
   <div className="items">
    <Item icon="◇" title="Learn a language" sub="French · English · Spanish · Cantonese"/>
    <Item icon="▱" title="Classes & Activities" sub="Workshops · Interest Classes · Interactive Learning"/>
    <Item icon="◎" title="Your Journey in Canada" sub="Study · Work · Build a Life"/>
   </div>
   <a className="cardCta" href="#">Explore for You</a>
  </div>
 </article>

 <article id="for-business" className="serviceCard business">
  <div className="cardWash washBusiness"></div>
  <div className="cardContent">
   <div className="serviceHeading"><h2>For Your Business</h2><span className="bow">🏹</span></div>
   <p className="serviceDescriptor">DIGITAL SOLUTIONS · CREATIVE MEDIA · BUSINESS GROWTH</p>
   <div className="items businessItems">
    <Item icon="▭" title="A new website?" sub="Design & development for your business"/>
    <Item icon="▯" title="An app or digital tool?" sub="Turn your idea into a working product"/>
    <Item icon="⌘" title="An educational game?" sub="Interactive learning experiences"/>
    <Item icon="▷" title="A promotional video?" sub="Business · Recruitment · Events · Short videos"/>
    <Item icon="✎" title="A logo or brand identity?" sub="Visual identity · Graphic design"/>
    <Item icon="▥" title="Printing or branded products?" sub="Business materials · Merchandise · Custom apparel"/>
   </div>
   <a className="cardCta" href="#">Explore for Your Business</a>
  </div>
 </article>
</section>
</div>

<section id="about" className="storyFinal">
  <img
    src="/our-story-final.png"
    alt="Our Story — Education gives us roots. Creativity gives us wings. 以教育扎根，以创意展翅。 From a deeper world to a brighter tomorrow."
  />
</section>

<section className="values shell">
 <div><b>Education</b><span>Build knowledge, open minds</span></div>
 <div><b>Creativity</b><span>Turn ideas into real impact</span></div>
 <div><b>Community</b><span>Connect people, create opportunities</span></div>
 <div><b>A Brighter Tomorrow</b><span>For a more open and inclusive world</span></div>
</section>

<section id="circle" className="circle shell"><div><p className="eyebrow">COMING NEXT</p><h2>Kunaris Circle</h2></div><p>A future space for learning, exclusive content, member benefits and community.</p><span>Coming soon</span></section>

<footer>
 <div className="footerBrand"><span><img src="/kunaris-wordmark.png" alt="Kunaris"/><b>Kunaris Education &amp; Media Inc.</b><small>People · Ideas · A Brighter Tomorrow</small></span></div>
 <div className="footerLinks"><a href="/for-you">For You</a><a href="#for-business">For Your Business</a><a href="#projects">Projects</a><a href="#circle">Kunaris Circle</a></div>
 <div className="footerLinks"><a href="#about">About</a><a href="mailto:hello@kunaris.ca">Contact</a></div>
 <div className="legal"><b>EN⌄</b><small>Privacy Policy &nbsp;|&nbsp; Terms of Use</small><small>© {new Date().getFullYear()} Kunaris Education &amp; Media Inc.</small></div>
</footer>
</main>}
