import { useEffect, useLayoutEffect, useRef } from 'react';
import { animate, stagger, set } from 'animejs';

const reduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Scroll-triggered reveal using Anime.js + IntersectionObserver.
 *
 * @param {object}  [opts]
 * @param {string}  [opts.selector]         CSS selector for child targets (omit to animate the container itself)
 * @param {number}  [opts.staggerDelay=80]  ms between each element
 * @param {number}  [opts.delay=0]          initial delay before animation starts
 * @param {number}  [opts.translateY=40]    starting Y offset in px
 * @param {number}  [opts.duration=700]     animation duration in ms
 * @param {number}  [opts.threshold=0.15]   IntersectionObserver threshold
 * @returns {React.RefObject}
 */
export function useScrollReveal({
  selector,
  staggerDelay = 80,
  delay = 0,
  translateY = 40,
  duration = 700,
  threshold = 0.15,
} = {}) {
  const ref = useRef(null);

  // Hide elements before first paint to prevent flash
  useLayoutEffect(() => {
    const container = ref.current;
    if (!container || reduced()) return;
    const targets = selector
      ? Array.from(container.querySelectorAll(selector))
      : [container];
    if (targets.length) set(targets, { opacity: 0, translateY });
  }, [selector, translateY]);

  useEffect(() => {
    const container = ref.current;
    if (!container || reduced()) return;

    const targets = selector
      ? Array.from(container.querySelectorAll(selector))
      : [container];
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animate(targets, {
            opacity: [0, 1],
            translateY: [translateY, 0],
            duration,
            ease: 'outQuad',
            delay: stagger(staggerDelay, { start: delay }),
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [selector, staggerDelay, delay, translateY, duration, threshold]);

  return ref;
}
