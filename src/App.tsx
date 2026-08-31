import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ExternalLink,
  Linkedin,
  Mail,
  Menu,
  Sparkles,
  X,
} from 'lucide-react';
import avatarImg from '@/assets/images/avatar.png';
import certBadgeImg from '@/assets/images/cert-badge.png';
import stcScreenshotImg from '@/assets/images/stc-screenshot.png';
import bankingVisualImg from '@/assets/images/banking-visual.png';

const expertise = [
  'UX Strategy',
  'Product Design',
  'User Research',
  'Information Architecture',
  'Interaction Design',
  'Design Systems',
  'Prototyping',
  'Usability Testing',
  'UX Leadership',
];

const approach = [
  ['01', 'DISCOVER', 'Understand users, business goals and constraints.'],
  ['02', 'DEFINE', 'Frame problems, journeys and opportunities.'],
  ['03', 'DESIGN', 'Translate insights into intuitive, scalable experiences.'],
  ['04', 'DELIVER', 'Validate, collaborate and bring designs into production.'],
];

const clients = ['STC', 'GOSI', 'Infosys Finacle', 'Jotun', 'Citi', '3M', 'SAP'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? 'site-header-scrolled' : ''}`}>
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Suresh Kumar Munuswamy home">
          <span className="brand-mark">SK</span>
          <span className="brand-name">SURESH KUMAR<span>MUNUSWAMY</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={`main-nav ${menuOpen ? 'main-nav-open' : ''}`} aria-label="Primary navigation">
          {['About', 'Work', 'Approach', 'Experience', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-cta" href="mailto:sureshcegcse@gmail.com?subject=Let's%20connect" onClick={closeMenu}>Let's Connect <ArrowUpRight size={16} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-frame">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> LEAD PRODUCT DESIGNER</div>
            <h1>Designing intuitive experiences.<br /><em>Solving complex</em> enterprise problems.</h1>
            <p className="hero-summary">Lead Product Designer with 11+ years of UX experience (15+ years in IT), driving enterprise digital transformation across Telecom, Banking, Insurance, and Manufacturing.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">View My Work <ArrowUpRight size={18} /></a>
              <a className="button button-quiet" href="mailto:sureshcegcse@gmail.com?subject=Resume%20request">Request Resume <ArrowDown size={16} /></a>
            </div>
            <div className="hero-note"><span className="scribble-arrow">↗</span><span>Designing with empathy.</span></div>
          </div>
          <div className="hero-visual" aria-label="3D avatar of Suresh Kumar Munuswamy">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="hero-glow" />
            <div className="hero-tag tag-top"><Sparkles size={14} /> Human-centered by default</div>
            <img className="avatar" src={avatarImg} alt="3D avatar representing Suresh Kumar Munuswamy" />
            <img className="cert-badge" src={certBadgeImg} alt="HFI Certified User Experience Analyst CXA certification badge" />
            <div className="hero-tag tag-bottom">From insight <span>→</span> impact</div>
          </div>
        </section>

        <section className="metrics section-frame" aria-label="Selected impact metrics">
          <div className="section-kicker">A TRACK RECORD OF SIMPLIFYING COMPLEXITY</div>
          <div className="metric-grid">
            <article className="metric-card metric-large"><span className="metric-index">01 / IMPACT</span><strong>20<span>+</span></strong><h3>Enterprise Products &amp; Modules</h3><p>Across 4+ Industry Domains</p><div className="metric-corner" /></article>
            <article className="metric-card"><span className="metric-index">02 / EFFICIENCY</span><strong>35<span>%</span></strong><h3>Reduced Order Creation Time</h3><p>ROI · Saved 15 SAR / Agent</p><div className="metric-corner" /></article>
            <article className="metric-card"><span className="metric-index">03 / TRANSFORMATION</span><strong>4<span>+</span> <small>Years</small></strong><h3>Leading STC B2C Digital Transformation</h3><p>300+ Screens Delivered</p><div className="metric-corner" /></article>
          </div>
        </section>

        <section id="about" className="about section-frame content-section">
          <div className="section-heading"><span className="section-number">01</span><div><div className="section-kicker">THE PERSON BEHIND THE WORK</div><h2>About me</h2></div></div>
          <div className="about-grid">
            <div className="about-copy"><p className="display-copy">I help enterprises simplify complex workflows and turn business requirements into intuitive, scalable digital experiences.</p><p>My work spans UX strategy, product design, user research, interaction design, design systems, and usability testing—working closely with product, engineering, and business teams from discovery through delivery.</p><a className="text-link" href="#approach">How I approach problems <ArrowUpRight size={17} /></a></div>
            <div className="expertise-panel"><div className="panel-label"><Sparkles size={15} /> CORE EXPERTISE</div><div className="expertise-list">{expertise.map((item, index) => <span key={item} className={index === 0 ? 'expertise-chip chip-highlight' : 'expertise-chip'}>{index === 0 && <Check size={13} />}{item}</span>)}</div></div>
          </div>
        </section>

        <section id="work" className="work section-frame content-section">
          <div className="section-heading section-heading-spread"><div><span className="section-number">02</span><div className="section-kicker">SELECTED CASEWORK</div><h2>Selected work</h2></div><p className="section-intro">A selection of enterprise experiences where strategy, systems thinking and craft meet.</p></div>
          <div className="project-grid">
            <article className="project-card project-featured"><div className="project-image project-image-stc"><img src={stcScreenshotImg} alt="STC B2C digital transformation project screens" loading="lazy" /></div><div className="project-content"><div className="project-meta"><span>01</span><span>Telecom · Enterprise UX · Digital Transformation</span></div><h3>STC B2C Digital Transformation</h3><p>Redesigning complex B2C order management experiences across Prepaid, Postpaid, and Landline services.</p><div className="project-footer"><span>35% reduction in order creation time · 300+ screens</span><a href="#contact" aria-label="View STC case study placeholder">View Case Study <ArrowUpRight size={17} /></a></div></div></article>
            <article className="project-card project-secondary"><div className="project-image"><img src={bankingVisualImg} alt="Corporate banking companion app concept visual" loading="lazy" /></div><div className="project-content"><div className="project-meta"><span>02</span><span>Banking · Enterprise UX · Interaction Design</span></div><h3>Corporate Banking Platform</h3><p>Designing intuitive experiences for complex corporate banking workflows across enterprise platforms.</p><div className="project-footer"><span>Research · Usability Testing</span><a href="#contact" aria-label="View corporate banking case study placeholder">View Case Study <ArrowUpRight size={17} /></a></div></div></article>
            <article className="project-card project-secondary project-money"><div className="project-image"><img src={avatarImg} alt="Money Manager project visual" loading="lazy" /></div><div className="project-content"><div className="project-meta"><span>03</span><span>FinTech · Product Design · User Research</span></div><h3>Money Manager</h3><p>An exploration grounded in the supplied portfolio visual and project material.</p><div className="project-footer"><span>Project details available in case study</span><a href="#contact" aria-label="View Money Manager case study placeholder">View Case Study <ArrowUpRight size={17} /></a></div></div></article>
          </div>
        </section>

        <section id="approach" className="approach section-frame content-section"><div className="section-heading"><span className="section-number">03</span><div><div className="section-kicker">A PRACTICAL POINT OF VIEW</div><h2>How I approach<br /><em>complex problems</em></h2></div></div><div className="approach-grid">{approach.map(([number, title, copy]) => <article className="approach-item" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p><div className="approach-line" /></article>)}</div></section>

        <section id="experience" className="experience section-frame content-section"><div className="experience-intro"><div className="section-kicker">THE JOURNEY SO FAR</div><h2>Experience</h2><p>15+ years in IT, with 11+ years focused on UX and product design.</p><div className="experience-icon"><BriefcaseBusiness size={25} /></div></div><div className="timeline"><div className="timeline-row"><div className="timeline-year">2021 — PRESENT</div><div><h3>Tata Consultancy Services</h3><p>Assistant Consultant · Lead UX Designer</p></div></div><div className="timeline-row"><div className="timeline-year">2018 — 2021</div><div><h3>Infosys</h3><p>Senior UX Lead</p></div></div><div className="timeline-row"><div className="timeline-year">2010 — 2018</div><div><h3>Accenture</h3><p>UX Designer</p></div></div></div></section>

        <section className="clients section-frame content-section"><div className="section-kicker">SELECTED CLIENTS &amp; PROJECTS</div><div className="client-list">{clients.map((client, index) => <span key={client} className={index === 0 ? 'client client-stc' : 'client'}>{client}</span>)}</div></section>

        <section id="contact" className="contact section-frame content-section"><div className="contact-panel"><div className="contact-orb" /><div className="section-kicker">START A CONVERSATION</div><h2>Let's build meaningful<br /><em>experiences together.</em></h2><p>Open to Lead Product Design, Lead UX, and UX Leadership opportunities.</p><a className="button button-primary" href="mailto:sureshcegcse@gmail.com?subject=Let's%20build%20meaningful%20experiences">Let's Connect <ArrowUpRight size={18} /></a><div className="contact-annotation"><span>↘</span> Good work starts with a good question.</div></div></section>
      </main>

      <footer className="site-footer section-frame"><div className="footer-top"><a className="brand" href="#top"><span className="brand-mark">SK</span><span className="brand-name">SURESH KUMAR<span>MUNUSWAMY</span></span></a><div className="footer-links"><a href="mailto:sureshcegcse@gmail.com"><Mail size={16} /> sureshcegcse@gmail.com</a><a href="https://www.linkedin.com/in/sureshkumar-munuswamy" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ExternalLink size={13} /></a></div></div><div className="footer-bottom"><span>© 2026 Suresh Kumar Munuswamy</span><span>Lead Product Designer · UX Strategist</span><a href="#top" aria-label="Back to top"><ArrowUpRight size={16} /></a></div></footer>
    </div>
  );
}

export default App;
