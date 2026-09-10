export default function FrenchPage(){
 const courses=[
  {tag:"4 LEARNERS",title:"4-Person Small Group Online",desc:"A focused online class with more speaking time, closer interaction and a small-group learning experience."},
  {tag:"EXAM PREPARATION",title:"Exam Preparation Online",desc:"Targeted online preparation for learners working toward a French-language exam or a specific score goal."},
  {tag:"GROUP ONLINE",title:"Group Online Classes",desc:"Structured online learning with a fixed class schedule and a clear learning progression."},
  {tag:"IN PERSON",title:"In-Person Group Classes",desc:"Face-to-face group learning for learners who prefer a classroom environment and regular study rhythm."}
 ];
 return <main className="frenchPage">
  <header className="subHeader frenchHeader">
   <a className="subBrand" href="/"><img src="/kunaris-sphere.png" alt=""/><span><img className="subWordmark" src="/kunaris-wordmark.png" alt="Kunaris"/><small>Kunaris Education &amp; Media Inc.</small></span></a>
   <nav><a href="/for-you">For You</a><a href="/#for-business">For Your Business</a><a href="/#projects">Projects</a><a href="/#circle">Kunaris Circle</a><a href="/#about">About</a><a href="mailto:hello@kunaris.ca">Contact</a><a className="signIn" href="/#circle">Sign In ↗</a><button className="lang">EN⌄</button></nav>
  </header>

  <section className="frenchHero fyShell">
   <a className="backLink" href="/for-you">← Learn a Language</a>
   <p className="eyebrow">FRENCH</p><h1>Learn French your way.</h1>
   <p>Whether you are starting from the beginning, building confidence, or preparing for an exam, choose the learning format that fits your goal.</p>
  </section>

  <section className="testBand">
   <div className="fyShell testInner"><div className="testIntro"><p className="eyebrow">NOT SURE WHERE TO START?</p><h2>Check your French level first.</h2><p>Try a short level test before choosing your next step.</p></div>
    <div className="testChoices">
     <a href="https://frenchtest.educationicestar.ca/A1" target="_blank" rel="noreferrer"><span>A1</span><div><b>A1 Level Test</b><small>Start here if you are a beginner.</small></div><i>↗</i></a>
     <a href="https://frenchtest.educationicestar.ca/A2" target="_blank" rel="noreferrer"><span>A2</span><div><b>A2 Level Test</b><small>Check your elementary French level.</small></div><i>↗</i></a>
    </div>
   </div>
  </section>

  <section className="courseSection fyShell"><div className="courseIntro"><p className="eyebrow">FRENCH CLASSES</p><h2>How would you like to learn French?</h2><p>Choose a format to explore current class options and schedules.</p></div>
   <div className="courseGrid">{courses.map((c,i)=><article className={i===0?"courseCard featured":"courseCard"} key={c.title}><span className="courseNo">0{i+1}</span><small className="courseTag">{c.tag}</small><h3>{c.title}</h3><p>{c.desc}</p><a href={`mailto:hello@kunaris.ca?subject=${encodeURIComponent(c.title+' Inquiry')}`}>Ask about current classes <b>→</b></a></article>)}</div>
  </section>

  <footer className="fyFooter"><div className="fyShell footerInner"><div className="footerBrand frenchFooterBrand"><img className="footerSphere" src="/kunaris-sphere.png" alt=""/><span><img className="footerWordmark" src="/kunaris-wordmark.png" alt="Kunaris"/><b>Kunaris Education &amp; Media Inc.</b><small>People · Ideas · A Brighter Tomorrow</small></span></div><a href="/">Back to Home ↑</a></div></footer>
 </main>
}