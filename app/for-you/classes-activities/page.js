export default function ClassesActivitiesPage(){
 return <main className="activitiesPage">
  <header className="subHeader activitiesHeader">
   <a className="subBrand" href="/"><img src="/kunaris-sphere.png" alt=""/><span><img className="subWordmark" src="/kunaris-wordmark.png" alt="Kunaris"/><small>Kunaris Education &amp; Media Inc.</small></span></a>
   <nav><a className="active" href="/for-you">For You</a><a href="/#for-business">For Your Business</a><a href="/#projects">Projects</a><a href="/#circle">Kunaris Circle</a><a href="/#about">About</a><a href="mailto:hello@kunaris.ca">Contact</a><a className="signIn" href="/#circle">Sign In ↗</a><button className="lang">EN⌄</button></nav>
  </header>

  <section className="activitiesHero fyShell">
   <a className="backLink" href="/for-you">← For You</a>
   <p className="eyebrow">CLASSES &amp; ACTIVITIES</p>
   <h1>Learn something new.<br/>Enjoy the experience.</h1>
   <p>Try something different, build a skill you enjoy, and meet people along the way — online or in person.</p>
  </section>

  <section className="activitiesOverview fyShell">
   <a href="#conversation-club"><span>01</span><b>French Conversation Club</b><small>Speak · Connect · Build confidence</small><i>↓</i></a>
   <a href="#music"><span>02</span><b>Music Classes</b><small>Piano · Singing</small><i>↓</i></a>
   <a href="#workshops"><span>03</span><b>Activities &amp; Workshops</b><small>Seasonal · Creative · Community</small><i>↓</i></a>
  </section>

  <section id="conversation-club" className="activityFeature conversationFeature">
   <div className="fyShell activityFeatureInner">
    <div className="activityNumber">01</div>
    <div className="activityCopy"><p className="eyebrow">FRENCH CONVERSATION CLUB</p><h2>Speak more. Worry less.</h2><p>Practice French in a relaxed and friendly setting. Our conversation sessions give learners more chances to speak, interact with others and build confidence through real communication.</p><div className="activityPills"><span>Online sessions</span><span>In-person sessions</span><span>Real conversation</span></div></div>
    <aside className="activityAside"><small>SESSIONS</small><strong>Available throughout the year</strong><p>New session dates are announced as they become available.</p><a href="mailto:icestarlanguages@gmail.com?subject=French%20Conversation%20Club%20-%20Upcoming%20Sessions">See Upcoming Sessions →</a></aside>
   </div>
  </section>

  <section id="music" className="musicSection fyShell">
   <div className="sectionLead"><p className="eyebrow">MUSIC CLASSES</p><h2>Learn music at your own pace.</h2><p>Whether you are starting for the first time or returning to something you love, our music classes are designed to make learning enjoyable and personal.</p></div>
   <div className="musicGrid">
    <article><span>PIANO</span><h3>Piano Lessons</h3><p>Build musical foundations, technique and confidence through guided learning adapted to your level and pace.</p><a href="mailto:icestarlanguages@gmail.com?subject=Kunaris%20Piano%20Lessons%20Inquiry">Ask About Piano Lessons →</a></article>
    <article><span>SINGING</span><h3>Singing Lessons</h3><p>Explore your voice, develop technique and enjoy expressing yourself through music in a supportive learning environment.</p><a href="mailto:icestarlanguages@gmail.com?subject=Kunaris%20Singing%20Lessons%20Inquiry">Ask About Singing Lessons →</a></article>
   </div>
  </section>

  <section id="workshops" className="workshopBand"><div className="fyShell workshopInner">
   <div><p className="eyebrow">ACTIVITIES &amp; WORKSHOPS</p><h2>There is always something new to explore.</h2><p>From language and culture to creative and community experiences, Kunaris offers occasional activities and workshops throughout the year.</p></div>
   <div className="workshopNote"><small>WHAT'S NEXT?</small><strong>New activities will be announced here.</strong><p>Programs may be offered online or in person depending on the activity.</p><a href="mailto:hello@kunaris.ca?subject=Kunaris%20Activities%20and%20Workshops">Ask About Upcoming Activities →</a></div>
  </div></section>

  <section className="activitiesClosing fyShell"><p className="eyebrow">NOT SURE WHAT FITS?</p><h2>Come learn, create and connect.</h2><p>Tell us what you are interested in and we&apos;ll help you find a class or activity that fits.</p><a href="mailto:hello@kunaris.ca?subject=Classes%20and%20Activities%20Inquiry">Contact Us →</a></section>

  <footer className="fyFooter"><div className="fyShell footerInner"><div className="footerBrand"><img src="/kunaris-sphere.png" alt=""/><div><b>Kunaris Education &amp; Media Inc.</b><small>Learn. Create. Connect.</small></div></div><a href="/for-you">Back to For You ↑</a></div></footer>
 </main>
}
