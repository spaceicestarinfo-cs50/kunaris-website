const inquiry=(subject)=>`mailto:hello@kunaris.ca?subject=${encodeURIComponent(subject)}`;

export default function FrenchPage(){
 return <main className="frenchPage">
  <header className="subHeader frenchHeader">
   <a className="subBrand" href="/"><img src="/kunaris-sphere.png" alt=""/><span><img className="subWordmark" src="/kunaris-wordmark.png" alt="Kunaris"/><small>Kunaris Education &amp; Media Inc.</small></span></a>
   <nav><a href="/for-you">For You</a><a href="/#for-business">For Your Business</a><a href="/#projects">Projects</a><a href="/#circle">Kunaris Circle</a><a href="/#about">About</a><a href="mailto:hello@kunaris.ca">Contact</a><a className="signIn" href="/#circle">Sign In ↗</a><button className="lang">EN⌄</button></nav>
  </header>

  <section className="frenchHero fyShell">
   <a className="backLink" href="/for-you">← Learn a Language</a>
   <p className="eyebrow">FRENCH</p><h1>Learn French your way.</h1>
   <p>Start from zero, strengthen your skills, or prepare for TEF / TCF. Choose the learning format that fits your goal and schedule.</p>
  </section>

  <section className="testBand">
   <div className="fyShell testInner"><div className="testIntro"><p className="eyebrow">NOT SURE WHERE TO START?</p><h2>Check your French level first.</h2><p>Try a short level test before choosing your next step.</p></div>
    <div className="testChoices">
     <a href="https://frenchtest.educationicestar.ca/A1" target="_blank" rel="noreferrer"><span>A1</span><div><b>A1 Level Test</b><small>Start here if you are a beginner.</small></div><i>↗</i></a>
     <a href="https://frenchtest.educationicestar.ca/A2" target="_blank" rel="noreferrer"><span>A2</span><div><b>A2 Level Test</b><small>Check your elementary French level.</small></div><i>↗</i></a>
    </div>
   </div>
  </section>

  <section className="courseSection fyShell">
   <div className="courseIntro"><p className="eyebrow">FRENCH CLASSES</p><h2>Choose how you want to learn.</h2><p>Small-group attention, focused exam preparation, or flexible group schedules — find the format that works for you.</p></div>
   <div className="courseGrid">
    <article className="courseCard featured"><span className="courseNo">01</span><small className="courseTag">4 LEARNERS · ZERO TO B2</small><h3>4-Person Small Group Online</h3><p>Designed for Chinese-speaking learners who want a structured path from beginner French to B2. Grammar is explained clearly, French-speaking teachers guide pronunciation and speaking, and every class includes interaction and homework.</p><div className="courseFacts"><span>4 learners maximum</span><span>Interactive learning</span><span>Classes arranged within 2 weeks after registration &amp; payment</span></div><a href={inquiry('4-Person Small Group French Inquiry')}>Ask about this course <b>→</b></a></article>
    <article className="courseCard"><span className="courseNo">02</span><small className="courseTag">TEF / TCF · A2+ RECOMMENDED</small><h3>Exam Preparation Online</h3><p>Focused preparation for TEF and TCF. Listening is taught in a 4-person small group with question-type breakdowns, authentic practice and exam strategy. Speaking is offered as targeted 1-on-1 training based on scoring criteria.</p><div className="courseFacts"><span>Listening · 4-person group</span><span>Speaking · 1-on-1</span><span>Single-skill enrolment available</span></div><a href={inquiry('TEF / TCF Exam Preparation Assessment')}>Request a free assessment <b>→</b></a></article>
    <article className="courseCard"><span className="courseNo">03</span><small className="courseTag">GROUP ONLINE · A1 TO B2</small><h3>Full-Time Online French</h3><p>A structured group-learning path from A1 through B2. Each level is approximately 8 weeks, with new classes starting every Monday.</p><div className="courseFacts"><span>Multiple schedules available</span><span>Regular · Intensive · Super Intensive · Evening</span><span>New classes every Monday</span></div><a href={inquiry('Online Group French - Current Schedule')}>Check current schedules <b>→</b></a></article>
    <article className="courseCard"><span className="courseNo">04</span><small className="courseTag">IN PERSON · MONTRÉAL</small><h3>In-Person Group French</h3><p>Face-to-face group learning for students who prefer a classroom environment, regular study rhythm and direct interaction.</p><div className="courseFacts"><span>Multiple schedules available</span><span>Regular · Intensive · Super Intensive · Evening</span><span>New classes every Monday</span></div><a href={inquiry('In-Person Group French - Current Schedule')}>Check current schedules <b>→</b></a></article>
   </div>
  </section>

  <section className="pathwayBand"><div className="fyShell pathwayInner"><div><p className="eyebrow">STRUCTURED PATHWAY</p><h2>French to B1 Pathway</h2><p>A complete learning path combining foundation French, focused skills training and additional online practice to help you build toward a solid B1 level.</p></div><div className="pathwayStats"><span><b>238</b><small>hours of core learning<br/>including 1-on-1 training</small></span><i>+</i><span><b>150</b><small>hours of additional<br/>online group learning</small></span></div><a href={inquiry('French to B1 Pathway Inquiry')}>Ask about the B1 Pathway →</a></div></section>

  <section className="playBand fyShell"><div><p className="eyebrow">LEARN BY PLAYING</p><h2>Practice French through real-life adventures.</h2><p>Explore interactive travel scenarios and put useful French into practice. Our French learning game is also part of Kunaris&apos; digital learning projects.</p></div><a href="/#projects">Explore the learning project →</a></section>

  <footer className="fyFooter"><div className="fyShell footerInner"><div className="footerBrand frenchFooterBrand"><img className="footerSphere" src="/kunaris-sphere.png" alt=""/><span><img className="footerWordmark" src="/kunaris-wordmark.png" alt="Kunaris"/><b>Kunaris Education &amp; Media Inc.</b><small>People · Ideas · A Brighter Tomorrow</small></span></div><a href="/">Back to Home ↑</a></div></footer>
 </main>
}
