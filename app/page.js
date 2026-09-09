
const Arrow=()=> <span aria-hidden="true">→</span>;
export default function Home(){return <main>
<header className="siteHeader">
  <a className="logoLockup" href="#">
    <img className="sphereLogo" src="/kunaris-sphere.png" alt=""/>
    <img className="wordmarkLogo" src="/kunaris-wordmark.png" alt="Kunaris Education & Media"/>
  </a>
  <nav className="mainNav">
    <a href="#for-you">For You</a><a href="#for-business">For Your Business</a>
    <a href="#projects">Projects</a><a href="#circle">Kunaris Circle</a>
    <a href="#about">About</a><a href="mailto:hello@kunaris.ca">Contact</a>
    <a className="signInButton" href="#circle">Sign In <Arrow/></a>
    <button className="languageButton" type="button">◎ EN⌄</button>
  </nav>
</header>

<div className="pageShell">
<section className="hero">
  <div className="heroCopy">
    <p className="eyebrow">PEOPLE · IDEAS · A BRIGHTER TOMORROW</p>
    <h1>Learn. Create.<br/><em>Connect.</em></h1>
    <p className="heroStatement">Education and creative digital solutions for a more open and brighter world.</p>
    <p className="heroDetail">Learning for you. Websites, apps, learning tools, videos, branding and more for your business.</p>
    <a className="discoverLink" href="#pathways">Discover Kunaris <Arrow/></a>
  </div>
  <div className="heroVisual" aria-hidden="true">
    <div className="visualGlow"></div>
    <img src="/kunaris-sphere.png" alt="" className="heroSphere"/>
    <p className="handNote">Ideas<br/>for a brighter<br/>tomorrow</p>
  </div>
</section>

<section id="pathways" className="pathwayGrid">
  <article id="for-you" className="servicePanel forYouPanel">
    <div className="panelHeader"><p className="eyebrow">FOR YOU</p><h2>Learn. Explore. Grow.</h2><p>Languages, skills and knowledge for a richer life.</p></div>
    <div className="menuList">
      <a href="/for-you" className="menuItem"><span className="iconBox">💬</span><span><strong>Learn a language</strong><small>French · English · Spanish · Cantonese</small></span><Arrow/></a>
      <a href="/for-you" className="menuItem"><span className="iconBox">▣</span><span><strong>Build practical skills</strong><small>AI & Digital Skills · Personal Development</small></span><Arrow/></a>
      <a href="/for-you" className="menuItem"><span className="iconBox">◌</span><span><strong>Join a workshop or program</strong><small>Interactive Learning · Educational Projects</small></span><Arrow/></a>
    </div>
    <a className="panelCta" href="/for-you">Explore for you <Arrow/></a>
  </article>

  <article id="for-business" className="servicePanel businessPanel">
    <div className="panelHeader"><p className="eyebrow">FOR YOUR BUSINESS</p><h2>Create. Build. Be Seen.</h2><p>From ideas to digital products, we help your business grow.</p></div>
    <div className="menuList compact">
      <a href="/for-business" className="menuItem"><span className="iconBox">▭</span><span><strong>A new website?</strong><small>Design & development for your business</small></span><Arrow/></a>
      <a href="/for-business" className="menuItem"><span className="iconBox">▯</span><span><strong>An app or digital tool?</strong><small>Turn your idea into a working product</small></span><Arrow/></a>
      <a href="/for-business" className="menuItem"><span className="iconBox">⌘</span><span><strong>An educational game?</strong><small>Interactive learning experiences</small></span><Arrow/></a>
      <a href="/for-business" className="menuItem"><span className="iconBox">▷</span><span><strong>A promotional video?</strong><small>Business · Recruitment · Events · Short videos</small></span><Arrow/></a>
      <a href="/for-business" className="menuItem"><span className="iconBox">✎</span><span><strong>A logo or brand identity?</strong><small>Visual identity · Graphic design</small></span><Arrow/></a>
      <a href="/for-business" className="menuItem"><span className="iconBox">▥</span><span><strong>Printing or branded products?</strong><small>Business materials · Merchandise · Custom apparel</small></span><Arrow/></a>
    </div>
    <a className="panelCta" href="/for-business">Explore for your business <Arrow/></a>
  </article>
</section>

<section id="about" className="statement"><p className="eyebrow">WHY KUNARIS</p><h2>Education gives ideas roots.<br/>Creativity gives them wings.</h2><p>We bring learning, technology and creative work together to make ideas useful in the real world.</p></section>
<section id="circle" className="circle"><div><p className="eyebrow">COMING NEXT</p><h2>Kunaris Circle</h2></div><p>A future space for learning, exclusive content, member benefits and community.</p><span>Coming soon</span></section>
</div>

<footer><div className="footerLogo"><img src="/kunaris-sphere.png" alt=""/><img src="/kunaris-wordmark.png" alt="Kunaris"/></div><p>Education & Media · Learn. Create. Connect.</p><p>© {new Date().getFullYear()} Kunaris Education & Media Inc.</p></footer>
</main>}
