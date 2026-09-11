"use client";

import { useState } from "react";

const Arrow = ({open=false}) => <span className={"menuArrow " + (open ? "open" : "")} aria-hidden="true">➜</span>;

export default function ForYouPage() {
  const [open, setOpen] = useState("language");
  const toggle = (name) => setOpen(open === name ? "" : name);

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
          <a href="mailto:hello@kunaris.ca">Contact</a><a className="signIn" href="/#circle">Sign In ↗</a>
          <button className="lang">EN⌄</button>
        </nav>
      </header>

      <section className="fyHero fyShell">
        <p className="eyebrow">FOR YOU</p>
        <h1>Learn. Explore. Grow.</h1>
        <p className="fyLead">Learning can open a door, spark a new interest, or help you build a life somewhere new. Start with what matters to you.</p>
      </section>

      <section className="choiceMenu fyShell">
        <p className="eyebrow">WHAT WOULD YOU LIKE TO EXPLORE?</p>

        <article className={"accordion languageAccordion "+(open==="language"?"expanded":"")}>
          <button className="accordionHead" onClick={()=>toggle("language")} aria-expanded={open==="language"}>
            <span className="choiceNo">01</span>
            <span className="choiceText"><b>Learn a Language</b><small>Practical language skills for study, work, travel and everyday life.</small></span>
            <Arrow open={open==="language"}/>
          </button>
          {open==="language" && <div className="accordionBody">
            <p className="chooseHint">Choose a language to explore</p>
            <div className="languageOptions">
              {["French","English","Spanish","Cantonese"].map((x,i)=>
                <a key={x} href={`/for-you/${x.toLowerCase()}`}>
                  <span className="languageIndex">0{i+1}</span><b>{x}</b><span className="smallArrow">→</span>
                </a>
              )}
            </div>
          </div>}
        </article>

        <article className={"accordion activityAccordion "+(open==="activities"?"expanded":"")}>
          <button className="accordionHead" onClick={()=>toggle("activities")} aria-expanded={open==="activities"}>
            <span className="choiceNo">02</span>
            <span className="choiceText"><b>Classes &amp; Activities</b><small>Workshops, interest classes and interactive learning experiences.</small></span>
            <Arrow open={open==="activities"}/>
          </button>
          {open==="activities" && <div className="accordionBody">
            <p className="chooseHint">Choose what you would like to explore</p>
            <div className="languageOptions threeOptions">
              {["Workshops","Interest Classes","Interactive Learning"].map((x,i)=>
                <a key={x} href="/for-you/classes-activities">
                  <span className="languageIndex">0{i+1}</span><b>{x}</b><span className="smallArrow">→</span>
                </a>
              )}
            </div>
          </div>}
        </article>

        <article className={"accordion journeyAccordion "+(open==="journey"?"expanded":"")}>
          <button className="accordionHead" onClick={()=>toggle("journey")} aria-expanded={open==="journey"}>
            <span className="choiceNo">03</span>
            <span className="choiceText"><b>Your Journey in Canada</b><small>Clear information and trusted official resources for different stages of life in Canada.</small></span>
            <Arrow open={open==="journey"}/>
          </button>
          {open==="journey" && <div className="accordionBody journeyQuick">
            <a href="/for-you/journey#study"><b>Study</b><small>Learn &amp; prepare</small><span>→</span></a>
            <a href="/for-you/journey#work"><b>Work</b><small>Build experience</small><span>→</span></a>
            <a href="/for-you/journey#live"><b>Build a Life</b><small>Plan your future</small><span>→</span></a>
          </div>}
        </article>
      </section>

      <section id="journey" className="journeyBackdrop">
        <div className="journeyWash" aria-hidden="true"></div>
        <div className="journeyInfo fyShell">
          <div className="journeyIntro"><p className="eyebrow">YOUR JOURNEY IN CANADA</p>
            <h2>Start with reliable information.</h2>
            <p>We make official information easier to find and understand, so you can explore your options before deciding what kind of support you may need.</p>
          </div>
          <div className="journeyLinks">
            <a href="/for-you/journey#study"><b>Study</b><span>New Brunswick education and official resources</span><i>→</i></a>
            <a href="/for-you/journey#work"><b>Work</b><span>New Brunswick jobs and workplace resources</span><i>→</i></a>
            <a href="/for-you/journey#live"><b>Build a Life</b><span>Communities, settlement and everyday resources</span><i>→</i></a>
          </div>
          <div className="guidanceBox"><div><h3>Need personalized guidance?</h3>
            <p>Every journey is different. If you need advice based on your individual situation, you can submit a consultation request.</p></div>
            <a href="mailto:hello@kunaris.ca?subject=Consultation%20Request">Request a Consultation ↗</a>
          </div>
        </div>
      </section>

      <footer className="fyFooter"><div className="fyShell footerInner">
        <div className="footerBrand"><img src="/kunaris-sphere.png" alt="" /><div><b>Kunaris Education &amp; Media Inc.</b><small>Learn. Create. Connect.</small></div></div>
        <a href="/">Back to Home ↑</a>
      </div></footer>
    </main>
  );
}