import { useCountUp } from '@/hooks/useCountUp';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const AnimatedCounter = ({ value, suffix = '', label }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const count = useCountUp(value, { enabled: inView });

  return (
    <div ref={ref} className="text-center md:text-left">
      <p className="font-display text-4xl text-gradient md:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
};
