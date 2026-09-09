const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <header className="header">
        <a className="brand" href="#">
          <span className="brandMark">◒</span>
          <span>KUNARIS</span>
        </a>
        <nav>
          <a href="#pathways">Explore</a>
          <a href="#about">About</a>
          <a href="#circle">Kunaris Circle</a>
          <a className="contactLink" href="mailto:hello@kunaris.ca">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroCopy">
          <p className="eyebrow">EDUCATION · CREATIVE · DIGITAL</p>
          <h1>Learn.<br/>Create.<br/><em>Connect.</em></h1>
          <p className="lead">
            Ideas grow through learning, creativity and connection.
          </p>
          <a className="textLink" href="#pathways">Explore Kunaris <Arrow /></a>
        </div>
        <div className="heroArt" aria-hidden="true">
          <div className="orb orbOne"></div>
          <div className="orb orbTwo"></div>
          <div className="wing wingOne"></div>
          <div className="wing wingTwo"></div>
        </div>
      </section>

      <section id="pathways" className="pathways">
        <a className="pathCard" href="/for-you">
          <p className="eyebrow">01 · PERSONAL LEARNING</p>
          <h2>FOR YOU</h2>
          <p className="tagline">Learn. Explore. Grow.</p>
          <p className="description">
            Language learning, practical skills and educational experiences designed for personal growth.
          </p>
          <span className="cardLink">Discover learning <Arrow /></span>
        </a>

        <a className="pathCard business" href="/for-business">
          <p className="eyebrow">02 · BUSINESS SOLUTIONS</p>
          <h2>FOR YOUR<br/>BUSINESS</h2>
          <p className="tagline">Create. Build. Be Seen.</p>
          <p className="description">
            Creative and digital solutions that help organizations turn ideas into useful, visible experiences.
          </p>
          <span className="cardLink">Explore solutions <Arrow /></span>
        </a>
      </section>

      <section id="about" className="statement">
        <p className="eyebrow">WHY KUNARIS</p>
        <h2>Education gives ideas roots.<br/>Creativity gives them wings.</h2>
        <p>We bring learning, technology and creative work together to make ideas useful in the real world.</p>
      </section>

      <section id="circle" className="circle">
        <div>
          <p className="eyebrow">COMING NEXT</p>
          <h2>Kunaris Circle</h2>
        </div>
        <p>A future space for learning, exclusive content, member benefits and community.</p>
        <span className="quietButton">Coming soon</span>
      </section>

      <footer>
        <div className="brand footerBrand"><span className="brandMark">◒</span><span>KUNARIS</span></div>
        <p>Education & Media · Learn. Create. Connect.</p>
        <p>© {new Date().getFullYear()} Kunaris Education & Media Inc.</p>
      </footer>
    </main>
  );
}