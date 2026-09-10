export const metadata = {
  title: "For You | Kunaris Education & Media Inc.",
  description: "Languages, classes, activities and practical resources for your journey in Canada."
};

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function ForYouPage() {
  return (
    <main className="forYouPage">
      <header className="subHeader">
        <a className="subBrand" href="/">
          <img src="/kunaris-sphere.png" alt="" />
          <span><img className="subWordmark" src="/kunaris-wordmark.png" alt="Kunaris" /><small>Kunaris Education &amp; Media Inc.</small></span>
        </a>
        <nav>
          <a className="active" href="/for-you">For You</a><a href="/#for-business">For Your Business</a>
          <a href="/#projects">Projects</a><a href="/#circle">Kunaris Circle</a><a href="/#about">About</a>
          <a href="mailto:hello@kunaris.ca">Contact</a><a className="signIn" href="/#circle">Sign In <Arrow /></a>
          <button className="lang">EN⌄</button>
        </nav>
      </header>

      <section className="fyHero fyShell">
        <p className="eyebrow">FOR YOU</p>
        <h1>Learn. Explore. Grow.</h1>
        <p className="fyLead">Learning can open a door, spark a new interest, or help you build a life somewhere new. Start with what matters to you.</p>
      </section>

      <section className="fyChoices fyShell">
        <p className="eyebrow">WHAT WOULD YOU LIKE TO EXPLORE?</p>
        <div className="fyGrid">
          <article className="fyCard">
            <div><span className="fyNumber">01</span><h2>Learn a Language</h2>
              <p>Learn for study, work, travel or everyday life — at a pace that works for you.</p>
              <div className="fyTags"><span>French</span><span>English</span><span>Spanish</span><span>Cantonese</span></div>
            </div>
            <a href="mailto:hello@kunaris.ca?subject=Language%20Learning%20Inquiry">Explore language learning <Arrow /></a>
          </article>

          <article className="fyCard activitiesCard">
            <div><span className="fyNumber">02</span><h2>Classes &amp; Activities</h2>
              <p>Discover workshops, interest classes and interactive learning experiences beyond the classroom.</p>
              <div className="fyTags"><span>Workshops</span><span>Interest Classes</span><span>Interactive Learning</span></div>
            </div>
            <a href="mailto:hello@kunaris.ca?subject=Classes%20and%20Activities%20Inquiry">Discover activities <Arrow /></a>
          </article>

          <article className="fyCard journeyCard">
            <div><span className="fyNumber">03</span><h2>Your Journey in Canada</h2>
              <p>Start with clear, practical information and trusted official resources for different stages of life in Canada.</p>
              <div className="journeySteps">
                <span><b>Study</b><small>Learn &amp; prepare</small></span><i>→</i>
                <span><b>Work</b><small>Build experience</small></span><i>→</i>
                <span><b>Build a Life</b><small>Plan your future</small></span>
              </div>
            </div>
            <a href="#journey">Explore your journey <Arrow /></a>
          </article>
        </div>
      </section>

      <section id="journey" className="journeyInfo fyShell">
        <div className="journeyIntro"><p className="eyebrow">YOUR JOURNEY IN CANADA</p>
          <h2>Start with reliable information.</h2>
          <p>We make official information easier to find and understand, so you can explore your options before deciding what kind of support you may need.</p>
        </div>
        <div className="journeyLinks">
          <div><b>Study</b><span>Education, learning and official resources</span></div>
          <div><b>Work</b><span>Working in Canada and practical information</span></div>
          <div><b>Build a Life</b><span>Resources for planning your longer-term future</span></div>
        </div>
        <div className="guidanceBox"><div><h3>Need personalized guidance?</h3>
          <p>Every journey is different. If you need advice based on your individual situation, you can submit a consultation request.</p></div>
          <a href="mailto:hello@kunaris.ca?subject=Consultation%20Request">Request a Consultation <Arrow /></a>
        </div>
      </section>

      <footer className="fyFooter"><div className="fyShell footerInner">
        <div className="footerBrand"><img src="/kunaris-sphere.png" alt="" /><div><b>Kunaris Education &amp; Media Inc.</b><small>Learn. Create. Connect.</small></div></div>
        <a href="/">Back to Home ↑</a>
      </div></footer>
    </main>
  );
}