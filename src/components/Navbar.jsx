import { useEffect, useState } from 'react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Contact', href: '#footer' },
];

export function Logo() {
  return (
    <a href="#home" className="group flex items-center gap-2.5">
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-neon-purple to-neon-cyan shadow-glow transition-transform duration-500 group-hover:rotate-12">
        <span className="text-lg font-bold text-white">✦</span>
      </span>
      <span className="text-xl font-bold tracking-tight text-white">Nova</span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={'fixed inset-x-0 top-0 z-50 px-4 transition-all duration-500 ' + (scrolled ? 'pt-3' : 'pt-5')}>
      <nav
        className={
          'mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 sm:px-6 ' +
          (scrolled || open ? 'glass shadow-lg shadow-black/30' : 'border border-transparent')
        }
      >
        <Logo />

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-slate-300 transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-neon-purple after:to-neon-cyan after:transition-all after:duration-300 hover:text-white hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href="#features" className="btn-primary !px-5 !py-2 text-sm">
            Get Started
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-xl text-white transition-colors hover:bg-white/10 md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={
          'mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl transition-all duration-500 md:hidden ' +
          (open ? 'glass max-h-80 opacity-100' : 'max-h-0 opacity-0')
        }
      >
        <ul className="flex flex-col gap-1 p-4">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a href="#features" onClick={() => setOpen(false)} className="btn-primary w-full">
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
