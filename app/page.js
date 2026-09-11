"use client";
import SiteHeader from "./components/SiteHeader";


const Arrow=()=> <span className="menuArrow" aria-hidden="true">→</span>;
const Item=({icon,title,sub,href})=><a className="menuItem" href={href}><span className="menuIcon">{icon}</span><span><strong>{title}</strong><small>{sub}</small></span><Arrow/></a>;

export default function Home(){
 return <main>
<SiteHeader />

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
    <a className="menuItem" href="/for-you"><span className="menuIcon">◇</span><span><strong>Learn a language</strong><small>French · English · Spanish · Cantonese</small></span></a>
    <Item icon="▱" title="Classes & Activities" sub="Workshops · Interest Classes · Interactive Learning" href="/for-you/classes-activities"/>
    <Item icon="◎" title="Your Journey in Canada" sub="Study · Work · Build a Life" href="/for-you/journey"/>
   </div>
   <a className="cardCta" href="/for-you">Explore for You</a>
  </div>
 </article>

 <article id="for-business" className="serviceCard business">
  <div className="cardWash washBusiness"></div>
  <div className="cardContent">
   <div className="serviceHeading"><h2>For Your Business</h2><span className="bow">🏹</span></div>
   <p className="serviceDescriptor">DIGITAL SOLUTIONS · CREATIVE MEDIA · BUSINESS GROWTH</p>
   <div className="items businessItems">
    <a className="menuItem" href="/for-business#brand-digital"><span className="menuIcon">◇</span><span><strong>Brand &amp; Digital</strong><small>Logo · Website · App · Digital Tools · Educational Games</small></span></a>
    <a className="menuItem" href="/for-business#video-media"><span className="menuIcon">▷</span><span><strong>Video &amp; Media</strong><small>Promotional Video · Social Content · Local &amp; Destination Stories</small></span></a>
    <a className="menuItem" href="/for-business#print-promotion"><span className="menuIcon">▥</span><span><strong>Printing &amp; Branded Products</strong><small>Apparel · Workwear · Event Materials · Custom Printing</small></span></a>
    <a className="menuItem" href="/for-business#training"><span className="menuIcon">◎</span><span><strong>Training for Your Team</strong><small>Language · Digital Skills · AI Skills · Customized Training</small></span></a>
   </div>
   <a className="cardCta" href="/for-business">Explore for Your Business</a>
  </div>
 </article>
</section>
</div>

<section id="about" className="storyFinal">
  <img
    className="storyArtwork"
    src="/our-story-final.png"
    alt="Our Story — Education gives us roots. Creativity gives us wings. 以教育扎根，以创意展翅。 From a deeper world to a brighter tomorrow."
  />
  <span className="storySphereCover" aria-hidden="true">
    <img src="/kunaris-sphere.png" alt="" />
  </span>
</section>

<section className="values shell">
 <div><b>Education</b><span>Build knowledge, open minds</span></div>
 <div><b>Creativity</b><span>Turn ideas into real impact</span></div>
 <div><b>Community</b><span>Connect people, create opportunities</span></div>
 <div><b>A Brighter Tomorrow</b><span>For a more open and inclusive world</span></div>
</section>

<section id="circle" className="circle shell"><div><p className="eyebrow">COMING NEXT</p><h2>Kunaris Circle</h2></div><p>A future space for learning, exclusive content, member benefits and community.</p><span>Coming soon</span></section>

<footer>
 <div className="footerBrand"><img className="footerSphere" src="/kunaris-sphere.png" alt=""/><span><img className="footerWordmark" src="/kunaris-wordmark.png" alt="Kunaris"/><b>Kunaris Education &amp; Media Inc.</b><small>People · Ideas · A Brighter Tomorrow</small></span></div>
 <div className="footerLinks"><a href="/for-you">For You</a><a href="/for-business">For Your Business</a><a href="/projects">Projects &amp; Community</a><a href="/circle">Kunaris Circle</a></div>
 <div className="footerLinks"><a href="/about">About</a><a href="/contact">Contact</a></div>
 <div className="legal"><b>EN⌄</b><small>Privacy Policy &nbsp;|&nbsp; Terms of Use</small><small>© {new Date().getFullYear()} Kunaris Education &amp; Media Inc.</small></div>
</footer>
</main>}
