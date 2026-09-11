"use client";

import { useState } from "react";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/icestarlanguages@gmail.com";

const COURSE_OPTIONS = [
  "4-Person Small Group Online",
  "TEF / TCF Exam Preparation",
  "Full-Time Online French",
  "In-Person Group French",
  "From Scratch to B1 — Intensive French Pathway",
  "From Scratch to B2 — Intensive French Pathway",
  "Not sure yet"
];

export default function FrenchPage(){
 const [formOpen,setFormOpen]=useState(false);
 const [formType,setFormType]=useState("Course Inquiry");
 const [course,setCourse]=useState("Not sure yet");
 const [status,setStatus]=useState("idle");
 const [error,setError]=useState("");

 const openForm=(type,selectedCourse="Not sure yet")=>{
  setFormType(type);
  setCourse(selectedCourse);
  setStatus("idle");
  setError("");
  setFormOpen(true);
 };

 const closeForm=()=>{
  if(status!=="sending") setFormOpen(false);
 };

 const submitForm=async(e)=>{
  e.preventDefault();
  setStatus("sending");
  setError("");
  const data=new FormData(e.currentTarget);
  data.set("Inquiry Type",formType);
  data.set("Course / Program",course);
  data.set("_subject",`[Kunaris French Inquiry] ${formType} — ${course}`);
  data.set("_template","table");
  data.set("_captcha","false");
  try{
   const res=await fetch(FORM_ENDPOINT,{method:"POST",body:data,headers:{Accept:"application/json"}});
   const json=await res.json().catch(()=>({}));
   if(!res.ok || json.success===false) throw new Error(json.message || "Submission failed");
   setStatus("sent");
   e.currentTarget.reset();
  }catch(err){
   setStatus("error");
   setError("We couldn't send your request right now. Please try again or email icestarlanguages@gmail.com.");
  }
 };

 return <main className="frenchPage">
  <header className="subHeader frenchHeader">
   <a className="subBrand" href="/"><img src="/kunaris-sphere.png" alt=""/><span><img className="subWordmark" src="/kunaris-wordmark.png" alt="Kunaris"/><small>Kunaris Education &amp; Media Inc.</small></span></a>
   <nav><a href="/for-you">For You</a><a href="/for-business">For Your Business</a><a href="/projects">Projects</a><a href="/#circle">Kunaris Circle</a><a href="/#about">About</a><a href="mailto:hello@kunaris.ca">Contact</a><a className="signIn" href="/#circle">Sign In ↗</a><button className="lang">EN⌄</button></nav>
  </header>

  <section className="frenchHero fyShell">
   <a className="backLink" href="/for-you">← Learn a Language</a>
   <p className="eyebrow">FRENCH</p><h1>Learn French your way.</h1>
   <p>Start from zero, strengthen your skills, or prepare for TEF / TCF. Choose the learning format that fits your goal and schedule.</p>
  </section>

  <section className="testBand">
   <div className="fyShell testInner"><div className="testIntro"><p className="eyebrow">NOT SURE WHERE TO START?</p><h2>Check your French level first.</h2><p>Try a short level test, or ask us to help you choose the right starting point.</p><button className="textCta" onClick={()=>openForm("Free Assessment","Not sure yet")}>Request a free assessment →</button></div>
    <div className="testChoices">
     <a className="testCard a1Test" href="https://frenchtest.educationicestar.ca/A1" target="_blank" rel="noreferrer"><span>A1</span><div><em>QUICK &amp; FREE</em><b>A1 Level Test</b><small>Start here if you are a beginner.</small></div><i>→</i></a>
     <a className="testCard a2Test" href="https://frenchtest.educationicestar.ca/A2" target="_blank" rel="noreferrer"><span>A2</span><div><em>QUICK &amp; FREE</em><b>A2 Level Test</b><small>Check your elementary French level.</small></div><i>→</i></a>
    </div>
   </div>
  </section>

  <section className="courseSection fyShell">
   <div className="courseIntro"><p className="eyebrow">FRENCH CLASSES</p><h2>Choose how you want to learn.</h2><p>Small-group attention, focused exam preparation, or flexible group schedules — find the format that works for you.</p></div>
   <div className="courseGrid">
    <article className="courseCard featured"><span className="courseNo">01</span><small className="courseTag">4 LEARNERS · ZERO TO B2</small><h3>4-Person Small Group Online</h3><p>Designed for Chinese-speaking learners who want a structured path from beginner French to B2. Grammar is explained clearly, French-speaking teachers guide pronunciation and speaking, and every class includes interaction and homework.</p><div className="courseFacts"><span>4 learners maximum</span><span>Interactive learning</span><span>Classes arranged within 2 weeks after registration &amp; payment</span></div><button className="courseButton" onClick={()=>openForm("Course Inquiry","4-Person Small Group Online")}>Ask about this course <b>→</b></button></article>
    <article className="courseCard"><span className="courseNo">02</span><small className="courseTag">TEF / TCF · A2+ RECOMMENDED</small><h3>Exam Preparation Online</h3><p>Focused preparation for TEF and TCF. Listening is taught in a 4-person small group with question-type breakdowns, authentic practice and exam strategy. Speaking is offered as targeted 1-on-1 training based on scoring criteria.</p><div className="courseFacts"><span>Listening · 4-person group</span><span>Speaking · 1-on-1</span><span>Single-skill enrolment available</span></div><button className="courseButton" onClick={()=>openForm("Free Assessment","TEF / TCF Exam Preparation")}>Request a free assessment <b>→</b></button></article>
    <article className="courseCard"><span className="courseNo">03</span><small className="courseTag">GROUP ONLINE · A1 TO B2</small><h3>Full-Time Online French</h3><p>A structured group-learning path from A1 through B2. Each level is approximately 8 weeks, with new classes starting every Monday.</p><div className="courseFacts"><span>Multiple schedules available</span><span>Regular · Intensive · Super Intensive · Evening</span><span>New classes every Monday</span></div><button className="courseButton" onClick={()=>openForm("Check Current Schedules","Full-Time Online French")}>Check current schedules <b>→</b></button></article>
    <article className="courseCard"><span className="courseNo">04</span><small className="courseTag">IN PERSON · MONTRÉAL</small><h3>In-Person Group French</h3><p>Face-to-face group learning for students who prefer a classroom environment, regular study rhythm and direct interaction.</p><div className="courseFacts"><span>Multiple schedules available</span><span>Regular · Intensive · Super Intensive · Evening</span><span>New classes every Monday</span></div><button className="courseButton" onClick={()=>openForm("Check Current Schedules","In-Person Group French")}>Check current schedules <b>→</b></button></article>
   </div>
  </section>

  <section className="pathwayBand"><div className="fyShell pathwayWrap">
   <div className="pathwayHeading"><p className="eyebrow">INTENSIVE FRENCH PATHWAYS</p><h2>Start from scratch. Build French fast.</h2><p>High-intensity programs combining weekday group classes, 4-person small-group learning and personalized 1-on-1 support.</p></div>
   <div className="pathwayGrid">
    <article className="intensivePath b1Path"><small className="pathBadge">24 WEEKS · B1 PATHWAY</small><h3>From Scratch to B1</h3><h4>Intensive French Pathway</h4><p className="pathLead">Start from zero. Build fast. Reach B1 with confidence.</p><div className="pathComponents"><span><b>Intensive Group Class</b><small>Mon–Thu 9:00 AM–2:00 PM<br/>Fri 9:00 AM–12:00 PM<br/>24 weeks</small></span><i>+</i><span><b>4-Person Small Group Core</b><small>Focused learning, interaction and feedback</small></span><i>+</i><span><b>1-on-1 Training</b><small>Personalized support for targeted progress</small></span></div><div className="pathActions"><button onClick={()=>openForm("Course Inquiry","From Scratch to B1 — Intensive French Pathway")}>Ask About This Program →</button><button onClick={()=>openForm("Free Assessment","From Scratch to B1 — Intensive French Pathway")}>Free Assessment →</button><button onClick={()=>openForm("Check Current Schedules","From Scratch to B1 — Intensive French Pathway")}>Check Schedules →</button></div></article>
    <article className="intensivePath b2Path"><small className="pathBadge">32 WEEKS · B2 PATHWAY</small><h3>From Scratch to B2</h3><h4>Intensive French Pathway</h4><p className="pathLead">Go further with 8 additional weeks of intensive learning and build toward B2.</p><div className="pathComponents"><span><b>Intensive Group Class</b><small>Mon–Thu 9:00 AM–2:00 PM<br/>Fri 9:00 AM–12:00 PM<br/>32 weeks</small></span><i>+</i><span><b>4-Person Small Group Core</b><small>Structured practice from beginner through advanced skills</small></span><i>+</i><span><b>1-on-1 Training</b><small>Personalized support for your goals</small></span></div><div className="pathActions"><button onClick={()=>openForm("Course Inquiry","From Scratch to B2 — Intensive French Pathway")}>Ask About This Program →</button><button onClick={()=>openForm("Free Assessment","From Scratch to B2 — Intensive French Pathway")}>Free Assessment →</button><button onClick={()=>openForm("Check Current Schedules","From Scratch to B2 — Intensive French Pathway")}>Check Schedules →</button></div></article>
   </div>
  </div></section>

  <section className="conversationStrip fyShell"><div><p className="eyebrow">PRACTICE TOGETHER</p><h2>French Conversation Club</h2><p>Practice speaking in a relaxed setting through online or in-person sessions available throughout the year.</p></div><a href="/for-you/classes-activities#conversation-club">Explore conversation sessions →</a></section>

  <section id="learning-game" className="playBand fyShell"><div><p className="eyebrow">LEARN BY PLAYING</p><h2>Practice French through real-life adventures.</h2><p>Explore interactive travel scenarios and put useful French into practice. Our French learning game is also part of Kunaris&apos; digital learning projects.</p></div><a href="/projects">Explore the learning project →</a></section>

  <footer className="fyFooter"><div className="fyShell footerInner"><div className="footerBrand frenchFooterBrand"><img className="footerSphere" src="/kunaris-sphere.png" alt=""/><span><img className="footerWordmark" src="/kunaris-wordmark.png" alt="Kunaris"/><b>Kunaris Education &amp; Media Inc.</b><small>People · Ideas · A Brighter Tomorrow</small></span></div><a href="/">Back to Home ↑</a></div></footer>

  {formOpen && <div className="inquiryOverlay" role="presentation" onMouseDown={(e)=>{if(e.target===e.currentTarget) closeForm()}}>
   <section className="inquiryModal" role="dialog" aria-modal="true" aria-labelledby="inquiry-title">
    <button className="modalClose" type="button" onClick={closeForm} aria-label="Close">×</button>
    {status==="sent" ? <div className="inquirySuccess"><span>✓</span><p className="eyebrow">REQUEST SENT</p><h2>Thank you.</h2><p>We&apos;ve received your request and will get back to you shortly.</p><button type="button" onClick={()=>setFormOpen(false)}>Done</button></div> : <>
     <div className="modalIntro"><p className="eyebrow">FRENCH · {formType.toUpperCase()}</p><h2 id="inquiry-title">Tell us what you need.</h2><p>We&apos;ll use this information to help you find the right course, assessment or schedule.</p></div>
     <form className="inquiryForm" onSubmit={submitForm}>
      <input type="text" name="_honey" className="honeyField" tabIndex="-1" autoComplete="off" />
      <div className="formGrid">
       <label><span>Name *</span><input name="Name" required autoComplete="name" placeholder="Your name" /></label>
       <label><span>Email *</span><input type="email" name="Email" required autoComplete="email" placeholder="you@example.com" /></label>
       <label><span>Phone / WeChat <em>optional</em></span><input name="Phone / WeChat" placeholder="Phone number or WeChat ID" /></label>
       <label><span>Current French level</span><select name="Current French Level" defaultValue="Not sure"><option>Beginner / Zero</option><option>A1</option><option>A2</option><option>B1</option><option>B2</option><option>Not sure</option></select></label>
       <label><span>Inquiry type</span><select value={formType} onChange={(e)=>setFormType(e.target.value)}><option>Course Inquiry</option><option>Free Assessment</option><option>Check Current Schedules</option></select></label>
       <label><span>Course / Program</span><select value={course} onChange={(e)=>setCourse(e.target.value)}>{COURSE_OPTIONS.map(x=><option key={x}>{x}</option>)}</select></label>
       <label className="fullField"><span>Preferred schedule</span><select name="Preferred Schedule" defaultValue="Flexible"><option>Morning</option><option>Daytime</option><option>Evening</option><option>Weekend</option><option>Flexible</option></select></label>
       <label className="fullField"><span>Message <em>optional</em></span><textarea name="Message" rows="4" placeholder="Tell us your goal, preferred start date, exam date, or anything else that may help."></textarea></label>
      </div>
      {status==="error" && <p className="formError">{error}</p>}
      <div className="formActions"><small>Your information will be used only to respond to this request.</small><button type="submit" disabled={status==="sending"}>{status==="sending"?"Sending…":"Send Request →"}</button></div>
     </form>
    </>}
   </section>
  </div>}
 </main>
}
