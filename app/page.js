
const Arrow=()=> <span aria-hidden="true">→</span>;
const Item=({icon,title,sub})=><a className="menuItem" href="#"><span className="menuIcon">{icon}</span><span><strong>{title}</strong><small>{sub}</small></span><Arrow/></a>;

export default function Home(){return <main>
<header className="siteHeader">
 <a className="headerBrand" href="#">
  <img className="headerSphere" src="/kunaris-sphere.png" alt=""/>
  <span className="wordmarkWrap"><img src="/kunaris-wordmark.png" alt="Kunaris"/><small>Kunaris Education &amp; Media Inc.</small></span>
 </a>
 <nav>
  <a href="#for-you">For You</a><a href="#for-business">For Your Business</a><a href="#projects">Projects</a>
  <a href="#circle">Kunaris Circle</a><a href="#about">About</a><a href="mailto:hello@kunaris.ca">Contact</a>
  <a className="signIn" href="#circle">Sign In <Arrow/></a><button className="lang">EN⌄</button>
 </nav>
</header>

<div className="shell">
<section className="hero">
 <div className="heroCopy">
  <p className="eyebrow">PEOPLE · IDEAS · A BRIGHTER TOMORROW</p>
  <h1>Learn. Create.<br/><em>Connect.</em></h1>
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
   <p className="eyebrow">FOR YOU</p><h2>Learn. Explore. Grow.</h2><p className="intro">Languages, skills and knowledge for a richer life.</p>
   <div className="items">
    <Item icon="◇" title="Learn a language" sub="French · English · Spanish · Cantonese"/>
    <Item icon="▱" title="Build practical skills" sub="AI & Digital Skills · Personal Development"/>
    <Item icon="◎" title="Join a workshop or program" sub="Interactive Learning · Educational Projects"/>
   </div>
   <a className="cardCta" href="#">Explore for You <Arrow/></a>
  </div>
 </article>

 <article id="for-business" className="serviceCard business">
  <div className="cardWash washBusiness"></div>
  <div className="cardContent">
   <p className="eyebrow">FOR YOUR BUSINESS</p><h2>Create. Build. Be Seen.</h2><p className="intro">From ideas to digital products, we help your business grow.</p>
   <div className="items businessItems">
    <Item icon="▭" title="A new website?" sub="Design & development for your business"/>
    <Item icon="▯" title="An app or digital tool?" sub="Turn your idea into a working product"/>
    <Item icon="⌘" title="An educational game?" sub="Interactive learning experiences"/>
    <Item icon="▷" title="A promotional video?" sub="Business · Recruitment · Events · Short videos"/>
    <Item icon="✎" title="A logo or brand identity?" sub="Visual identity · Graphic design"/>
    <Item icon="▥" title="Printing or branded products?" sub="Business materials · Merchandise · Custom apparel"/>
   </div>
   <a className="cardCta" href="#">Explore for Your Business <Arrow/></a>
  </div>
 </article>
</section>
</div>

<section id="about" className="story">
 <div className="storyArt" aria-hidden="true"></div>
 <div className="storyShade"></div>
 <div className="storyInner">
  <div className="storyCopy">
   <p className="eyebrow">OUR STORY</p>
   <h2>Education gives us roots.<br/><em>Creativity gives us wings.</em></h2>
   <p className="chinese">以教育扎根，以创意展翅。</p>
   <p className="storyBody">At Kunaris Education &amp; Media Inc., we believe in the power of learning and creativity to bring people closer together and to create a more open, connected and meaningful world.</p>
   <a className="storyButton" href="#">Our Story <Arrow/></a>
  </div>
  <div className="storyQuote">From a deeper world<br/>to a brighter tomorrow.</div>
 </div>
</section>

<section className="values shell">
 <div><b>Education</b><span>Build knowledge, open minds</span></div>
 <div><b>Creativity</b><span>Turn ideas into real impact</span></div>
 <div><b>Community</b><span>Connect people, create opportunities</span></div>
 <div><b>A Brighter Tomorrow</b><span>For a more open and inclusive world</span></div>
</section>

<section id="circle" className="circle shell"><div><p className="eyebrow">COMING NEXT</p><h2>Kunaris Circle</h2></div><p>A future space for learning, exclusive content, member benefits and community.</p><span>Coming soon</span></section>

<footer>
 <div className="footerBrand"><img src="/kunaris-sphere.png" alt=""/><span><img src="/kunaris-wordmark.png" alt="Kunaris"/><b>Kunaris Education &amp; Media Inc.</b><small>People · Ideas · A Brighter Tomorrow</small></span></div>
 <div className="footerLinks"><a href="#for-you">For You</a><a href="#for-business">For Your Business</a><a href="#projects">Projects</a><a href="#circle">Kunaris Circle</a></div>
 <div className="footerLinks"><a href="#about">About</a><a href="mailto:hello@kunaris.ca">Contact</a></div>
 <div className="legal"><b>EN⌄</b><small>Privacy Policy &nbsp;|&nbsp; Terms of Use</small><small>© {new Date().getFullYear()} Kunaris Education &amp; Media Inc.</small></div>
</footer>
</main>}
