import SiteHeader from "../../components/SiteHeader";
export default function ClassesActivitiesPage(){
 return <main className="activitiesPage">
  <SiteHeader active="you"/>

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
    <div className="activityCopy"><p className="eyebrow">FRENCH CONVERSATION CLUB</p><h2>Speak more. Worry less.</h2><p>A relaxed space for practising French, meeting others and enjoying real conversation. New activities will be announced as the program develops.</p><div className="activityPills"><span>Conversation</span><span>Community</span><span>French practice</span></div></div>
    <aside className="activityAside"><small>STATUS</small><strong>Updates coming soon</strong><p>Future conversation activities and dates will be posted here when confirmed.</p><span className="statusOnly">Updates coming soon</span></aside>
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
   <div className="workshopNote"><small>WHAT'S NEXT?</small><strong>New activities will be announced here.</strong><p>Programs may be offered online or in person depending on the activity.</p><a href="/contact">Ask About Upcoming Activities →</a></div>
  </div></section>

  <section className="activitiesClosing fyShell"><p className="eyebrow">NOT SURE WHAT FITS?</p><h2>Come learn, create and connect.</h2><p>Tell us what you are interested in and we&apos;ll help you find a class or activity that fits.</p><a href="/contact">Contact Us →</a></section>

  <footer className="fyFooter"><div className="fyShell footerInner"><div className="footerBrand"><img src="/kunaris-sphere.png" alt=""/><div><b>Kunaris Education &amp; Media Inc.</b><small>Learn. Create. Connect.</small></div></div><a href="/for-you">Back to For You ↑</a></div></footer>
 </main>
}
