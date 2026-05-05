import { useEffect, useRef, useCallback } from 'react';

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin: '0px 0px -50px 0px',
    });

    const el = ref.current;
    if (el) {
      const children = el.querySelectorAll('.reveal');
      children.forEach((child) => observer.observe(child));
      if (el.classList.contains('reveal')) {
        observer.observe(el);
      }
    }

    return () => observer.disconnect();
  }, [handleIntersection, threshold]);

  return ref;
}
