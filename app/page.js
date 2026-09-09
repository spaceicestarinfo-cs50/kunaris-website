const A=()=> <span>↗</span>;
export default function Home(){return <main>
<header><a className="brand" href="#"><b>◒</b> KUNARIS</a><nav><a href="#choose">Explore</a><a href="#why">About</a><a href="#circle">Kunaris Circle</a><a className="contact" href="mailto:hello@kunaris.ca">Contact</a></nav></header>
<section className="hero"><div><p className="eyebrow">EDUCATION · CREATIVE · DIGITAL</p><h1>Learn.<br/>Create.<br/><em>Connect.</em></h1><h3>Learning for you.<br/>Creative & digital solutions for your business.</h3><p className="lead">From language learning and practical skills to websites, apps, interactive learning experiences, videos, branding and more.</p><a className="link" href="#choose">Find what you need <A/></a></div><div className="art"><i className="halo"/><i className="orb big"/><i className="orb small"/><i className="wing w1"/><i className="wing w2"/></div></section>
<section id="choose" className="choose">
<a className="card you" href="/for-you"><div><p className="eyebrow">01 · PERSONAL</p><h2>FOR YOU</h2><h4>I want to learn & grow.</h4></div><div><p className="services">Languages · Practical Skills · Learning Experiences</p><strong>Explore for you <A/></strong></div></a>
<a className="card biz" href="/for-business"><div><p className="eyebrow">02 · BUSINESS</p><h2>FOR YOUR<br/>BUSINESS</h2><h4>I need something created.</h4></div><div><p className="services">Websites · Apps · Learning Games · Videos · Branding · Printing</p><strong>Explore for your business <A/></strong></div></a>
</section>
<section id="why" className="why"><p className="eyebrow">WHY KUNARIS</p><h2>Education gives ideas roots.<br/>Creativity gives them wings.</h2><p>We bring learning, technology and creative work together to make ideas useful in the real world.</p></section>
<section id="circle" className="circle"><div><p className="eyebrow">COMING NEXT</p><h2>Kunaris Circle</h2></div><p>A future space for learning, exclusive content, member benefits and community.</p><span>Coming soon</span></section>
<footer><b>KUNARIS</b><p>Education & Media · Learn. Create. Connect.</p><p>© {new Date().getFullYear()} Kunaris Education & Media Inc.</p></footer>
</main>}