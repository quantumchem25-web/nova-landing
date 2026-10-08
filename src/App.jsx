import { useEffect, useRef, useState } from 'react';

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, className = '' }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const close = () => setOpen(false);
  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="logo">Nova<span>.</span></a>
        <button
          className={`nav__toggle ${open ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          <a href="#features" onClick={close}>Features</a>
          <a href="#features" onClick={close}>Showcase</a>
          <a href="#footer" onClick={close}>Contact</a>
          <a href="#features" className="btn btn--primary btn--sm" onClick={close}>Get Started</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="orb orb--purple" />
      <div className="orb orb--cyan" />
      <div className="grid-overlay" />
      <div className="container hero__content">
        <Reveal>
          <span className="badge"><span className="badge__dot" /> Now in public beta</span>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="hero__title">
            Build the future, <br />
            <span className="gradient-text">beautifully.</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="hero__subtitle">
            Nova gives your team a stunning, lightning-fast platform to design,
            launch and scale digital experiences people remember.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="hero__ctas">
            <a href="#features" className="btn btn--primary">Start for free <span className="arrow">→</span></a>
            <a href="#features" className="btn btn--secondary">Watch demo</a>
          </div>
        </Reveal>
        <Reveal delay={400}>
          <div className="hero__stats glass">
            <div><strong>99.9%</strong><span>Uptime</span></div>
            <div><strong>12k+</strong><span>Teams</span></div>
            <div><strong>4.9★</strong><span>Rating</span></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const features = [
  {
    title: 'Global Edge Network',
    text: 'Deliver content from servers worldwide with near-zero latency for every user.',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    tag: 'Performance',
  },
  {
    title: 'Powerful Engine',
    text: 'A finely tuned core that handles millions of requests without breaking a sweat.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    tag: 'Infrastructure',
  },
  {
    title: 'Bank-Grade Security',
    text: 'End-to-end encryption and continuous monitoring keep your data safe, always.',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    tag: 'Security',
  },
];

function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Showcase</span>
          <h2>Everything you need to <span className="gradient-text">shine</span></h2>
          <p>Crafted with care, built for speed, designed to impress.</p>
        </Reveal>
        <div className="cards">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 120}>
              <article className="card glass">
                <div className="card__media">
                  <img src={f.img} alt={f.title} loading="lazy" />
                  <span className="card__tag">{f.tag}</span>
                </div>
                <div className="card__body">
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                  <a href="#features" className="card__link">Learn more <span className="arrow">→</span></a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const socials = [
    { name: 'GitHub', href: 'https://github.com' },
    { name: 'X', href: 'https://x.com' },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'Instagram', href: 'https://instagram.com' },
  ];
  return (
    <footer className="footer" id="footer">
      <div className="container footer__inner">
        <a href="#top" className="logo">Nova<span>.</span></a>
        <p className="footer__copy">© {new Date().getFullYear()} Nova Inc. All rights reserved.</p>
        <div className="footer__socials">
          {socials.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className="social">{s.name}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
}
