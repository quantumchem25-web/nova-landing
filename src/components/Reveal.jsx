import { useEffect, useRef, useState } from 'react';

// Hook: returns a ref + a boolean that flips to true once the element scrolls into view
export function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

// Wrapper: gently fades + slides its children in on scroll
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const [ref, visible] = useReveal();

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: delay + 'ms' }}
      className={'reveal ' + (visible ? 'is-visible ' : '') + className}
    >
      {children}
    </Tag>
  );
}
