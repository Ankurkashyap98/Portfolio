import { motion } from 'framer-motion';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useMousePosition } from '@/hooks/useMousePosition';
import { prefersReducedMotion } from '@/utils';

export const MagneticButton = ({ children, className = '', strength = 18, ...props }) => {
  const isFine = useMediaQuery('(pointer: fine)');
  const reduced = prefersReducedMotion();
  const enabled = isFine && !reduced;
  const { x, y } = useMousePosition(enabled);

  return (
    <motion.div
      className={className}
      animate={
        enabled
          ? {
              x: (x / window.innerWidth - 0.5) * strength,
              y: (y / window.innerHeight - 0.5) * strength,
            }
          : { x: 0, y: 0 }
      }
      transition={{ type: 'spring', stiffness: 120, damping: 18, mass: 0.4 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
