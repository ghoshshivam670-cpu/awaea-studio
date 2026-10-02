import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Premium scroll-reveal wrapper.
 * Wraps any section with smooth GSAP-powered entrance animation.
 *
 * Props:
 *   - children: content to animate
 *   - direction: 'up' | 'down' | 'left' | 'right' (default: 'up')
 *   - delay: stagger delay in seconds (default: 0)
 *   - duration: animation duration (default: 0.9)
 *   - distance: px to travel (default: 60)
 *   - className: extra className for the wrapper
 *   - stagger: if true, animates direct children with stagger (default: false)
 *   - staggerAmount: delay between children (default: 0.12)
 */
export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.9,
  distance = 60,
  className = '',
  stagger = false,
  staggerAmount = 0.12,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const directionMap = {
      up: { y: distance, x: 0 },
      down: { y: -distance, x: 0 },
      left: { x: distance, y: 0 },
      right: { x: -distance, y: 0 },
    };

    const { x, y } = directionMap[direction] || directionMap.up;

    if (stagger) {
      // Animate direct children with stagger
      const children = el.children;
      gsap.set(children, { opacity: 0, y, x });
      gsap.to(children, {
        opacity: 1,
        y: 0,
        x: 0,
        duration,
        delay,
        stagger: staggerAmount,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    } else {
      // Animate the wrapper itself
      gsap.set(el, { opacity: 0, y, x });
      gsap.to(el, {
        opacity: 1,
        y: 0,
        x: 0,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [direction, delay, duration, distance, stagger, staggerAmount]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
