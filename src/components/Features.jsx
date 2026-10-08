import Reveal from './Reveal';

const features = [
  {
    tag: 'Performance',
    title: 'Lightning-Fast Engine',
    description: 'An edge-first architecture that renders your experiences in milliseconds, anywhere on the planet.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    alt: 'Close-up of a glowing circuit board',
  },
  {
    tag: 'Insights',
    title: 'Real-Time Analytics',
    description: 'Beautiful dashboards that turn raw data into clear, actionable insights the moment things happen.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    alt: 'Analytics dashboard with charts on a screen',
  },
  {
    tag: 'Security',
    title: 'Enterprise-Grade Security',
    description: 'End-to-end encryption, SSO and audit logs keep your team and your data protected by default.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Abstract digital security visual with neon lights',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative px-4 py-24 sm:px-6 md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-neon-violet/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-neon-cyan">Features</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Everything you need to <span className="text-gradient">ship brilliance</span>
          </h2>
          <p className="mt-5 text-base text-slate-400 sm:text-lg">
            Powerful building blocks wrapped in a beautiful interface, so you can focus on what matters most.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3 lg:gap-8">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 150} className="h-full">
              <article className="group glass relative flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-500 ease-out hover:-translate-y-3 hover:border-neon-purple/40 hover:shadow-[0_25px_60px_-15px_rgba(168,85,247,0.45)]">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={f.image}
                    alt={f.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
                  <span className="glass absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-medium text-white">
                    {f.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-xl font-semibold text-white">{f.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400 sm:text-base">{f.description}</p>
                  <a
                    href="#features"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-neon-cyan transition-all duration-300 hover:text-white group-hover:gap-3"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
