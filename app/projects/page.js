export default function ProjectsPage(){
  return <main className="projectsPage">
    <header className="subHeader">
      <a className="subBrand" href="/">
        <img src="/kunaris-sphere.png" alt="" />
        <span><img className="subWordmark" src="/kunaris-wordmark.png" alt="Kunaris"/><small>Kunaris Education &amp; Media Inc.</small></span>
      </a>
      <nav><a href="/for-you">For You</a><a href="/for-business">For Your Business</a><a className="active" href="/projects">Projects &amp; Community</a><a href="/circle">Kunaris Circle</a><a href="/about">About</a><a href="/contact">Contact</a><a href="/circle">Kunaris Circle</a><button className="lang">EN⌄</button></nav>
    </header>

    <section className="projectsHero fyShell">
      <a className="backLink" href="/">← Back to Kunaris</a>
      <p className="eyebrow">PROJECTS &amp; COMMUNITY</p>
      <h1>Ideas in action.<br/>Stories worth sharing.</h1>
      <p className="projectsLead">We build learning experiences, tell local stories and create projects that connect people, places and communities.</p>
      <div className="projectsHeroLinks"><a href="#learning">Learning &amp; Digital</a><a href="#stories">Stories &amp; Places</a><a href="#community">Community &amp; Collaboration</a></div>
    </section>

    <section id="learning" className="projectSection fyShell">
      <div className="projectSectionHead"><span>01</span><div><p className="eyebrow">LEARNING &amp; DIGITAL PROJECTS</p><h2>Learning can be useful, interactive and fun.</h2><p>Kunaris combines education and digital tools to turn learning ideas into practical experiences people can actually use.</p></div></div>
      <div className="projectFeatureGrid">
        <article className="projectFeature projectTest">
          <small>KUNARIS LEARNING PROJECT</small>
          <h3>French Level Test</h3>
          <p>Short online A1 and A2 level checks designed to help learners understand where to begin before choosing a French learning path.</p>
          <div className="projectPills"><span>Online tool</span><span>French learning</span><span>Quick &amp; free</span></div>
          <div className="projectActions"><a href="https://frenchtest.educationicestar.ca/A1" target="_blank" rel="noreferrer">Try A1 Test ↗</a><a href="https://frenchtest.educationicestar.ca/A2" target="_blank" rel="noreferrer">Try A2 Test ↗</a></div>
        </article>
        <article className="projectFeature projectGame">
          <small>KUNARIS DIGITAL LEARNING PROJECT</small>
          <h3>French Travel Adventure</h3>
          <p>Practice useful French through travel situations, challenges and rewards — a learning experience designed around real-life communication.</p>
          <div className="projectPills"><span>Interactive learning</span><span>Real-life scenarios</span><span>Gamified experience</span></div>
          <div className="projectActions"><a href="/for-you/french#learning-game">Explore the Project →</a></div>
        </article>
      </div>
      <div className="projectBridge"><div><p className="eyebrow">HAVE A LEARNING IDEA?</p><h3>We can help turn it into a digital experience.</h3><p>Educational games, assessment tools, interactive forms and custom learning products can be developed around your audience and goals.</p></div><a href="/for-business#brand-digital">Explore Brand &amp; Digital →</a></div>
    </section>

    <section id="stories" className="storiesBand">
      <div className="fyShell">
        <div className="projectSectionHead"><span>02</span><div><p className="eyebrow">STORIES &amp; PLACES</p><h2>Discover local places. Meet the people behind them.</h2><p>We are starting with restaurants, cafés and everyday discoveries — creating short-form stories around food, people, places and experiences.</p></div></div>
        <div className="storyProjectGrid">
          <article><small>KUNARIS ORIGINAL · STARTING SOON</small><h3>Restaurant &amp; Café Stories</h3><p>Food, atmosphere and the people behind local businesses — told through approachable short-form video and creative content.</p><span>Food · People · Places · Stories</span></article>
          <article><small>KUNARIS ORIGINAL</small><h3>Local Finds</h3><p>Interesting shops, neighbourhood discoveries and experiences worth sharing with the people around us.</p><span>Explore · Discover · Share</span></article>
          <article><small>KUNARIS ORIGINAL</small><h3>Places &amp; Experiences</h3><p>Day trips, activities, city experiences and places we genuinely enjoy discovering along the way.</p><span>Go somewhere · Try something</span></article>
          <article className="nbStoryCard"><small>NEW BRUNSWICK · GROWING SERIES</small><h3>Discover New Brunswick</h3><p>Local businesses, communities, destinations and experiences across New Brunswick — a space that will grow as Kunaris builds deeper roots in the province.</p><a href="/for-you/journey">Explore the NB Resource Hub →</a></article>
        </div>
        <div className="clientProjectNote"><span>CLIENT PROJECT</span><p>As commissioned business projects are completed, they will be clearly identified separately from Kunaris Original content.</p><a href="/for-business#video-media">Need a story for your business? →</a></div>
      </div>
    </section>

    <section id="community" className="projectSection fyShell communityProjects">
      <div className="projectSectionHead"><span>03</span><div><p className="eyebrow">COMMUNITY &amp; COLLABORATION</p><h2>Learning and creativity work better when people connect.</h2><p>From conversation sessions to future community, education and regional collaborations, we want Kunaris projects to create useful connections.</p></div></div>
      <div className="communityProjectGrid">
        <a href="/for-you/classes-activities#conversation-club"><small>LANGUAGE &amp; COMMUNITY</small><h3>French Conversation Club</h3><p>Online and in-person opportunities to practise French in a relaxed, social setting.</p><b>Explore the Conversation Club →</b></a>
        <article><small>COMMUNITY PROJECTS</small><h3>Activities &amp; Local Collaboration</h3><p>Workshops, community activities and creative collaborations can grow here as new projects take shape.</p><b>More projects coming soon</b></article>
        <article><small>NEW BRUNSWICK</small><h3>Future Partnerships</h3><p>We are building toward education, community, local business and destination projects that can contribute to New Brunswick.</p><b>Growing with the community</b></article>
      </div>
    </section>

    <section className="projectsClosing fyShell"><div><p className="eyebrow">CREATE WITH KUNARIS</p><h2>Have an idea, a place or a story worth bringing to life?</h2><p>We are open to business, education, community and creative collaborations.</p></div><a href="mailto:hello@kunaris.ca?subject=Project%20or%20Collaboration%20Inquiry">Start a Conversation →</a></section>

    <footer className="subFooter"><div className="footerInner fyShell"><a href="/">← Kunaris Home</a><span>Projects &amp; Community</span><small>© {new Date().getFullYear()} Kunaris Education &amp; Media Inc.</small></div></footer>
  </main>
}
