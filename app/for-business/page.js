import SiteHeader from "../components/SiteHeader";
const services = [
  {
    id:"brand-digital",
    no:"01",
    label:"BRAND & DIGITAL",
    title:"Build your brand from the ground up.",
    text:"From your first idea to a complete digital presence, Kunaris can help shape how your business looks, works and connects with people.",
    items:[
      ["Logo Design & Brand Identity","Logo design · Visual identity · Brand assets"],
      ["Website Design & Development","Business websites · Landing pages · Online forms"],
      ["App & Digital Tool Development","Business apps · Assessment tools · Custom digital solutions"],
      ["Educational Game Development","Interactive learning · Gamified experiences · Learning tools"],
    ],
    cta:"Start a Brand & Digital Project",
    subject:"Brand & Digital Project Inquiry"
  },
  {
    id:"video-media",
    no:"02",
    label:"VIDEO & MEDIA",
    title:"Tell your story. Help people remember it.",
    text:"Create useful, human and engaging content for your business, organization, event or destination — from short-form social content to promotional storytelling.",
    items:[
      ["Promotional Video Production","Business · Recruitment · Events · Campaigns"],
      ["Short-form Video & Social Content","Social media · Reels · Vertical video"],
      ["Business Storytelling","People · Products · Local businesses"],
      ["Tourism & Destination Content","Places · Experiences · Community stories"],
    ],
    cta:"Talk About a Media Project",
    subject:"Video & Media Project Inquiry"
  },
  {
    id:"print-promotion",
    no:"03",
    label:"PRINTING & BRANDED PRODUCTS",
    title:"Bring your brand into the real world.",
    text:"From team apparel to event materials, we help businesses turn their visual identity into practical branded products for work, promotion and community events.",
    items:[
      ["Custom T-shirt & Apparel Printing","T-shirts · Polos · Branded apparel"],
      ["Workwear & Team Apparel","Workwear · Clubs · Teams · Staff apparel"],
      ["Event & Promotional Materials","Business · Events · Community activities"],
      ["Custom Printing Services","Small-batch and custom project inquiries"],
    ],
    cta:"Ask About Branded Products",
    subject:"Printing & Branded Products Inquiry"
  },
  {
    id:"training",
    no:"04",
    label:"TRAINING FOR YOUR TEAM",
    title:"Build skills that move your team forward.",
    text:"Flexible training can be shaped around your organization, team and goals — from communication to practical digital and AI skills.",
    items:[
      ["Corporate Language Training","French · English · Workplace communication"],
      ["Digital Skills Training","Practical tools for everyday work"],
      ["AI Skills Training","Responsible, useful AI workflows for teams"],
      ["Customized Team Training","Programs tailored to your organization"],
    ],
    cta:"Discuss Team Training",
    subject:"Team Training Inquiry"
  },
];

function ServiceSection({service}){
  return <section id={service.id} className="bizServiceSection">
    <div className="bizSectionHead">
      <span className="bizNo">{service.no}</span>
      <div><p className="eyebrow">{service.label}</p><h2>{service.title}</h2><p className="bizIntro">{service.text}</p></div>
    </div>
    <div className="bizCapabilityGrid">
      {service.items.map(([title,text])=><a className="bizCapabilityCard" key={title} href="/contact"><span>↗</span><h3>{title}</h3><p>{text}</p></a>)}
    </div>
    <a className="bizSectionCta" href="/contact">{service.cta} →</a>
  </section>
}

export default function ForBusinessPage(){
 return <main className="businessPage">
  <SiteHeader active="business"/>

  <section className="bizHero fyShell">
   <p className="eyebrow">FOR YOUR BUSINESS</p>
   <h1>You have an idea.<br/>We help you bring it to life.</h1>
   <p>From brand identity and websites to apps, videos, training and branded products, Kunaris brings education, creativity and technology together to help organizations grow.</p>
   <div className="bizHeroActions"><a href="#brand-digital">Explore Services ↓</a><a href="/contact">Tell Us What You Need →</a></div>
  </section>

  <section className="bizOverview fyShell" aria-label="Business services">
   {services.map(s=><a key={s.id} href={`#${s.id}`}><span>{s.no}</span><b>{s.label.replace("BRAND & DIGITAL","Brand & Digital").replace("VIDEO & MEDIA","Video & Media").replace("PRINTING & BRANDED PRODUCTS","Printing & Branded Products").replace("TRAINING FOR YOUR TEAM","Training for Your Team")}</b><small>{s.items.map(x=>x[0]).join(" · ")}</small><i>↓</i></a>)}
  </section>

  <section className="bizServices fyShell">
   {services.map(service=><ServiceSection key={service.id} service={service}/>)}
  </section>

  <section className="bizNbBand bizStoryBackdrop"><div className="bizStoryWash" aria-hidden="true"></div>
   <div className="fyShell bizNbInner">
    <div><p className="eyebrow">LOCAL STORIES · LOCAL GROWTH</p><h2>Built for businesses.<br/>Ready for communities.</h2><p>As Kunaris grows in New Brunswick, we are especially interested in projects that help local businesses, organizations and destinations become easier to discover — online and in the real world.</p></div>
    <div className="bizNbTags"><a href="#video-media">Local Business</a><a href="/projects#community">Community</a><a href="/projects#stories">Tourism &amp; Destination</a><a href="/projects#learning">Education</a><a href="#brand-digital">Digital Projects</a></div>
   </div>
  </section>

  <section className="bizClosing fyShell">
   <div><p className="eyebrow">START WITH THE IDEA</p><h2>Not sure which service you need?</h2><p>Tell us what you are trying to create, improve or promote. We can help you identify a practical starting point and shape the project from there.</p></div>
   <a href="/contact">Start a Conversation →</a>
  </section>

  <footer className="fyFooter"><div className="fyShell footerInner"><div className="footerBrand"><img src="/kunaris-sphere.png" alt=""/><div><b>Kunaris Education &amp; Media Inc.</b><small>Learn. Create. Connect.</small></div></div><a href="/">Back to Home ↑</a></div></footer>
 </main>
}
