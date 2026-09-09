import { ArrowDown, ArrowLeft, ArrowUpRight, Check, CircleDot, Mail, MoveRight, Search, Users, Workflow } from 'lucide-react';
import stcScreenshotImg from '@/assets/images/stc-screenshot.png';
import stcDetailImg from '@/assets/images/stc1.png';

type ProcessStep = { number: string; title: string; description: string };

const processSteps: ProcessStep[] = [
  { number: '01', title: 'OBSERVE', description: 'Contextual inquiry' },
  { number: '02', title: 'LISTEN', description: 'User interviews' },
  { number: '03', title: 'CO-CREATE', description: '1-month workshop · 15 stakeholders' },
  { number: '04', title: 'DESIGN', description: 'Prototypes + iterations' },
  { number: '05', title: 'VALIDATE', description: 'Usability testing with real agents' },
  { number: '06', title: 'SCALE', description: 'Design system + UX QA' },
];

const roleItems = ['UX STRATEGY', 'USER RESEARCH', 'CONTEXTUAL INQUIRY', 'INTERACTION DESIGN', 'PROTOTYPING', 'USABILITY TESTING', 'DESIGN SYSTEM', 'UX QA'];

function EvidencePlaceholder({ label }: { label: string }) {
  return <div className="case-placeholder"><span><CircleDot size={15} /> {label}</span><small>Project evidence placeholder</small></div>;
}

function StcCaseStudy() {
  return (
    <div className="case-study-shell">
      <header className="case-header">
        <a className="case-brand" href="#top" aria-label="Back to portfolio home"><span>SKM</span><small>Suresh Kumar</small></a>
        <nav aria-label="Case study navigation"><a href="#case-challenge">About</a><a href="#case-design">Work</a><a href="#case-approach">Approach</a><a href="mailto:sureshcegcse@gmail.com">Contact</a><a className="case-talk" href="mailto:sureshcegcse@gmail.com?subject=Let's%20talk">Let's Talk <ArrowUpRight size={15} /></a></nav>
      </header>

      <main>
        <div className="case-frame case-back"><a href="#top"><ArrowLeft size={15} /> Back to Work</a></div>
        <section className="case-hero case-frame">
          <div className="case-hero-copy"><div className="case-eyebrow">B2C DIGITAL TRANSFORMATION</div><h1>Reimagining a 15-year-old <em>B2C sales experience</em></h1><p>Transforming a complex legacy application into a simpler, faster and scalable digital experience for frontline agents.</p><div className="case-meta"><span><b>ROLE</b>Lead UX Designer</span><span><b>DURATION</b>4+ Years</span><span><b>SCOPE</b>1000+ Screens</span></div></div>
          <div className="case-hero-visual"><div className="case-purple-field" /><img className="case-hero-screen screen-back" src={stcDetailImg} alt="Provided STC order management screen" /><img className="case-hero-screen screen-front" src={stcScreenshotImg} alt="Provided STC B2C service management screen" /><div className="case-hero-label">STC · B2C SALES EXPERIENCE</div></div>
        </section>
        <section className="case-hero-metrics case-frame"><div><strong>45 sec</strong><span>Time saved per order</span></div><div><strong>22 → 14</strong><span>Clicks per order</span></div><div><strong>2m 50s → 1m 55s</strong><span>Average completion time</span></div><div><strong>870 → ~1,260</strong><span>Potential orders / hour</span></div></section>

        <section id="case-challenge" className="case-section case-frame"><div className="case-section-head"><span>01 / THE CHALLENGE</span><h2>Transform the experience <em>without disrupting the business</em></h2><p>A 15-year-old application had evolved into a complex ecosystem of workflows, screens and interactions.</p></div><div className="challenge-grid"><article><Workflow size={22} /><h3>COMPLEX WORKFLOWS</h3><p>Multiple screens and unnecessary interactions.</p></article><article><Check size={22} /><h3>BUSINESS CONTINUITY</h3><p>The new UI initially worked with the existing legacy backend to keep the business running.</p></article><article><MoveRight size={22} /><h3>DIGITAL TRANSITION</h3><p>The experience progressively moved to the new digital backend as the transformation evolved.</p></article><article><Users size={22} /><h3>SCALE</h3><p>Maintain consistency across products, workflows and teams.</p></article></div></section>

        <section id="case-research" className="case-section case-section-tint"><div className="case-frame research-layout"><div><div className="case-section-head"><span>02 / RESEARCH &amp; DISCOVERY</span><h2>Real agents.<br /><em>Real workflows.</em></h2><p>Visited customer-care locations, observed agents using the existing system and conducted interviews to understand real workflows, pain points and workarounds.</p></div><div className="research-methods"><div><Search size={17} /><span>CONTEXTUAL INQUIRY</span><p>Observed agents in their real working environment.</p></div><div><Users size={17} /><span>USER INTERVIEWS</span><p>Spoke directly with frontline agents.</p></div><div><Workflow size={17} /><span>REQUIREMENT REVIEW</span><p>Understood existing functionality and business rules.</p></div></div></div><div className="research-visuals"><EvidencePlaceholder label="Agent workplace photograph" /><EvidencePlaceholder label="Existing application evidence" /><EvidencePlaceholder label="Research / Miro findings" /><small>From system requirements to real-world behavior.</small></div></div></section>

        <section id="case-approach" className="case-section case-frame"><div className="case-section-head"><span>03 / DESIGN APPROACH</span><h2>From insights to <em>simpler journeys</em></h2></div><div className="process-line">{processSteps.map((step, index) => <article key={step.number}><span className="process-number">{step.number}</span><div className="process-dot" /><h3>{step.title}</h3><p>{step.description}</p>{index < processSteps.length - 1 && <div className="process-connector" />}</article>)}</div></section>

        <section className="case-section case-section-tint"><div className="case-frame workshop-layout"><div className="case-section-head"><span>04 / CO-CREATE</span><h2>Turning business needs into <em>usable solutions</em></h2><p>A one-month collaborative workshop with 15 business stakeholders to identify enhancement opportunities, explore solutions and align on design implementation.</p></div><div className="workshop-artifact"><div className="workshop-topline"><span>WORKSHOP TIMELINE</span><span>01 MONTH · 15 STAKEHOLDERS</span></div><div className="workshop-steps"><span>DISCOVER<small>Enhancement opportunities</small></span><ArrowUpRight size={16} /><span>EXPLORE<small>UX concepts and workflows</small></span><ArrowUpRight size={16} /><span>ALIGN<small>Business + UX review</small></span><ArrowUpRight size={16} /><span>SIGN-OFF<small>Design approval</small></span></div><EvidencePlaceholder label="Workshop artifacts / screenshots" /></div></div></section>

        <section id="case-design" className="case-section case-frame"><div className="case-section-head"><span>05 / DESIGN HIGHLIGHTS</span><h2>Simpler workflows.<br /><em>Better guidance.</em></h2><p>Redesigned complex workflows to reduce unnecessary interactions, improve hierarchy and help agents complete tasks with less effort.</p></div><div className="principles"><div><b>REDUCE</b><span>Reduce unnecessary clicks and cognitive load.</span></div><div><b>CLARIFY</b><span>Surface the right information at the right time.</span></div><div><b>CONSISTENCY</b><span>Use reusable interaction patterns across workflows.</span></div></div><div className="before-after"><div><span>BEFORE · PROVIDED SCREEN</span><img src={stcDetailImg} alt="Provided STC order detail screen" /></div><MoveRight className="comparison-arrow" size={28} /><div><span>AFTER · PROVIDED SCREEN</span><img src={stcScreenshotImg} alt="Provided STC redesigned service screen" /></div></div></section>

        <section className="case-section case-section-tint"><div className="case-frame validation-layout"><div className="case-section-head"><span>06 / VALIDATE</span><h2>Test before <em>development</em></h2><p>Interactive prototypes were tested with real agents before development to identify usability issues early and refine the experience before implementation.</p></div><div className="validation-flow"><span>PROTOTYPE</span><ArrowDown size={16} /><span>REAL AGENT</span><ArrowDown size={16} /><span>OBSERVE</span><ArrowDown size={16} /><span>ITERATE</span><ArrowDown size={16} /><span>DEVELOP</span></div><div className="validation-evidence"><EvidencePlaceholder label="Usability-testing photograph" /><b>REAL AGENTS<br />BEFORE DEVELOPMENT</b><small>Validate the experience before writing the code.</small></div></div></section>

        <section className="case-section case-frame"><div className="scale-layout"><div className="case-section-head"><span>07 / SCALE &amp; DELIVERY</span><h2>1000+ screens.<br />4+ years. <em>One transformation.</em></h2><p>Designed and delivered 1000+ screens across a large-scale B2C digital transformation covering multiple products, workflows and business scenarios.</p><div className="scale-capabilities">{['REUSABLE COMPONENTS', 'CONSISTENT INTERACTIONS', 'DESIGN SYSTEM', 'UX QA + IMPLEMENTATION SUPPORT'].map((item) => <span key={item}><Check size={14} />{item}</span>)}</div></div><div className="screen-stack"><img src={stcScreenshotImg} alt="Provided STC screen composition" /><img src={stcDetailImg} alt="Provided STC detail screen composition" /></div></div></section>

        <section className="case-section case-section-tint"><div className="case-frame transition-layout"><div className="case-section-head"><span>08 / TECHNOLOGY TRANSITION</span><h2>From legacy <em>to digital</em></h2><p>UX moved ahead while technology transitioned underneath. The transformation was phased to maintain business continuity.</p></div><div className="transition-flow"><span>LEGACY EXPERIENCE</span><ArrowDown size={18} /><span>NEW UX + LEGACY BACKEND</span><ArrowDown size={18} /><span>BUSINESS CONTINUITY</span><ArrowDown size={18} /><span>NEW DIGITAL BACKEND</span><ArrowDown size={18} /><span>SCALABLE DIGITAL EXPERIENCE</span></div></div></section>

        <section className="case-section case-frame outcome-section"><div className="case-section-head"><span>09 / OUTCOME</span><h2>Fewer clicks. Faster orders.<br /><em>Better agent experience.</em></h2></div><div className="outcome-metrics"><div className="outcome-primary"><strong>45 sec</strong><span>saved per order</span></div><div><strong>22 → 14</strong><span>clicks per order</span></div><div><strong>2m 50s → 1m 55s</strong><span>average completion time</span></div><div><strong>870 → ~1,260</strong><span>potential orders / hour</span></div></div><div className="outcome-chain"><span>LESS INTERACTION</span><MoveRight size={19} /><span>FASTER TRANSACTIONS</span><MoveRight size={19} /><span>HIGHER SALES CAPACITY</span></div></section>

        <section className="case-section case-frame"><div className="case-section-head"><span>10 / MY ROLE</span><h2>End-to-end <em>UX ownership</em></h2></div><div className="role-grid">{roleItems.map((item) => <span key={item}><Check size={15} />{item}</span>)}</div></section>

        <section className="case-takeaway"><div className="case-frame"><div className="case-eyebrow">FINAL TAKEAWAY</div><h2>I didn’t just redesign screens.</h2><p>I transformed the experience around how agents actually work.</p><span>Less friction. · Faster transactions. · A scalable digital experience.</span></div></section>
      </main>

      <footer className="case-footer case-frame"><a href="#top">Back to Work</a><nav><a href="#top">About</a><a href="#top">Work</a><a href="#case-approach">Approach</a><a href="mailto:sureshcegcse@gmail.com">Contact</a><a href="mailto:sureshcegcse@gmail.com">Let's Talk <Mail size={14} /></a></nav></footer>
    </div>
  );
}

export default StcCaseStudy;
