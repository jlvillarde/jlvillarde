import { useState, useEffect } from 'react';

/**
 * A custom React hook that detects the scroll direction.
 * @param {number} threshold - The minimum scroll distance to trigger a direction change.
 * @returns {'up' | 'down'} - The current scroll direction.
 */
export function useScrollDirection(threshold = 10) {
  const [scrollDir, setScrollDir] = useState<'up' | 'down'>('up');

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrollDir;
}
