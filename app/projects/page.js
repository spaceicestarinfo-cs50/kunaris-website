import SiteHeader from "../components/SiteHeader";

function BrowserMock({kind}){
  if(kind === "game") return <div className="projectMock gameMock" aria-hidden="true">
    <div className="mockTop"><i></i><i></i><i></i><span>French Travel Adventure</span></div>
    <div className="gameScene"><small>TRAVEL FRENCH</small><b>Where will your French take you?</b><div className="sceneChoices"><span>Airport</span><span>Café</span><span>Hotel</span></div><em>★ ★ ★</em></div>
  </div>;
  return <div className="projectMock testMock" aria-hidden="true">
    <div className="mockTop"><i></i><i></i><i></i><span>French Level Test</span></div>
    <div className="testScene"><small>QUICK LEVEL CHECK</small><b>Find your starting point.</b><div className="testLine"><span></span><span></span><span></span></div><div className="levelBtns"><span>A1</span><span>A2</span></div></div>
  </div>;
}

export default function ProjectsPage(){
  return <main className="projectsPage projectsEditorial">
    <SiteHeader active="projects"/>

    <section className="projectsHero fyShell">
      <a className="backLink" href="/">← Back to Kunaris</a>
      <p className="eyebrow">PROJECTS &amp; COMMUNITY</p>
      <h1>Ideas in action.<br/>Stories worth sharing.</h1>
      <p className="projectsLead">A growing collection of learning experiences, local stories and community projects created by Kunaris.</p>
      <nav className="editorialNav" aria-label="Project sections"><a href="#learning">Learning &amp; Digital</a><span>·</span><a href="#stories">Stories &amp; Places</a><span>·</span><a href="#community">Community</a></nav>
    </section>

    <section id="learning" className="editorialSection fyShell">
      <header className="editorialSectionTitle"><span>01</span><div><p className="eyebrow">LEARNING &amp; DIGITAL</p><h2>Digital learning, made practical.</h2><p>Experiments and tools that turn learning ideas into experiences people can actually use.</p></div></header>

      <article className="editorialFeature">
        <div className="featureVisual"><BrowserMock kind="game"/></div>
        <div className="featureCopy"><p className="featureNo">FEATURE 01 · DIGITAL LEARNING</p><h3>French Travel Adventure</h3><p>Practice useful French through travel situations, challenges and rewards — designed around real-life communication rather than memorization alone.</p><div className="featureMeta"><span>Interactive Learning</span><span>French</span><span>Gamified Experience</span></div><span className="comingSoonPill">Coming soon</span></div>
      </article>

      <article className="levelTestFeature">
        <div className="levelTestIntro"><p className="featureNo">FEATURE 02 · ONLINE TOOL</p><h3>French Level Test</h3><p>Take a short test to check your current level and find a clearer starting point for your next step in French.</p><div className="levelTestBenefits"><span>About 10 minutes</span><span>Instant result</span><span>Learning guidance</span></div></div>
        <div className="levelTestChoices"><a className="levelCard a1" href="https://frenchtest.educationicestar.ca/A1" target="_blank" rel="noreferrer"><i>A1</i><div><strong>Take the A1 Test</strong><small>Beginner · Start here</small></div><b>→</b></a><a className="levelCard a2" href="https://frenchtest.educationicestar.ca/A2" target="_blank" rel="noreferrer"><i>A2</i><div><strong>Take the A2 Test</strong><small>Elementary · Keep going</small></div><b>→</b></a></div>
      </article>

      <div className="editorialBridge"><span>Have a learning idea?</span><p>We also create educational games, assessment tools and custom digital learning experiences.</p><a href="/for-business#brand-digital">Explore what we can build →</a></div>
    </section>

    <section id="stories" className="editorialStories">
      <div className="fyShell">
        <header className="editorialSectionTitle"><span>02</span><div><p className="eyebrow">STORIES &amp; PLACES</p><h2>Places worth discovering. Stories worth telling.</h2><p>Food, people, neighbourhoods and destinations — seen through a curious local lens.</p></div></header>
        <div className="storyMagazine">
          <article className="storyLead"><div className="storyArt restaurantArt"><span>COMING SOON</span></div><div><small>KUNARIS ORIGINAL</small><h3>Restaurant &amp; Café Stories</h3><p>Food, atmosphere and the people behind local businesses, told through approachable short-form stories.</p><b>Food · People · Places</b></div></article>
          <article><div className="storyArt localArt"></div><small>KUNARIS ORIGINAL</small><h3>Local Finds</h3><p>Shops, neighbourhood discoveries and everyday experiences worth sharing.</p><b>Explore · Discover · Share</b></article>
          <article><div className="storyArt nbArt"></div><small>NEW BRUNSWICK · GROWING SERIES</small><h3>Discover New Brunswick</h3><p>Communities, destinations and experiences as Kunaris builds deeper roots in the province.</p><a href="/for-you/journey">Explore New Brunswick →</a></article>
        </div>
        <div className="editorialNote"><b>Kunaris Original</b><p>Our own editorial and exploration content is shown separately from commissioned client work. Client projects will be clearly identified as they are added.</p></div>
      </div>
    </section>

    <section id="community" className="editorialSection fyShell communityEditorial">
      <header className="editorialSectionTitle"><span>03</span><div><p className="eyebrow">COMMUNITY</p><h2>Better when people connect.</h2><p>Learning, activities and collaborations that create useful connections around us.</p></div></header>
      <div className="communityLines">
        <div><span>01</span><div><small>LANGUAGE &amp; COMMUNITY</small><h3>French Conversation Club</h3><p>A relaxed space for French conversation and community. New activities will be announced as they are confirmed.</p></div><b>Updates coming soon</b></div>
        <div><span>02</span><div><small>COMMUNITY PROJECTS</small><h3>Activities &amp; Local Collaboration</h3><p>Workshops, activities and creative collaborations as new projects take shape.</p></div><b>Growing</b></div>
        <div><span>03</span><div><small>NEW BRUNSWICK</small><h3>Future Partnerships</h3><p>Education, community, local business and destination projects we hope to grow into.</p></div><b>Looking ahead</b></div>
      </div>
    </section>

    <section className="editorialClosing"><div className="fyShell"><p className="eyebrow">WORK WITH KUNARIS</p><h2>Like what you see?</h2><p>Let’s create something useful, memorable or worth sharing.</p><div><a href="/for-business">Explore Business Services →</a><a href="/contact">Start a Conversation →</a></div></div></section>

    <footer className="subFooter"><div className="footerInner fyShell"><a href="/">← Kunaris Home</a><span>Projects &amp; Community</span><small>© {new Date().getFullYear()} Kunaris Education &amp; Media Inc.</small></div></footer>
  </main>
}
