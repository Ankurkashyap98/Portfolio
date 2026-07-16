import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp } from '@/animations/variants';
import { cn } from '@/utils';

export const Reveal = ({
  children,
  className = '',
  delay = 0,
  as = 'div',
  once = true,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: '-8% 0px' });
  const Comp = motion[as] || motion.div;

  return (
    <Comp
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </Comp>
  );
};
