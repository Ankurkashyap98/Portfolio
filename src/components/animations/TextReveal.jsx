import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from '@/utils';

gsap.registerPlugin(ScrollTrigger);

export const TextReveal = ({ text, className = '', as: Comp = 'p' }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return undefined;

    const words = text.split(' ');
    el.innerHTML = words
      .map(
        (word) =>
          `<span class="inline-block overflow-hidden mr-[0.28em] align-bottom"><span class="word-inner inline-block translate-y-full">${word}</span></span>`
      )
      .join('');

    const targets = el.querySelectorAll('.word-inner');
    const tween = gsap.to(targets, {
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.035,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === el) trigger.kill();
      });
    };
  }, [text]);

  return (
    <Comp ref={ref} className={className}>
      {text}
    </Comp>
  );
};
