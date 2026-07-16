import { motion } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { prefersReducedMotion } from '@/utils';

export const ParticleField = () => {
  const reduced = prefersReducedMotion();
  const isFine = useMediaQuery('(pointer: fine)');
  const { x, y } = useMousePosition(isFine && !reduced);

  const particles = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    left: `${(i * 17) % 100}%`,
    top: `${(i * 29) % 100}%`,
    size: 2 + (i % 4),
    delay: i * 0.2,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        animate={{
          x: isFine ? x * 0.03 : 0,
          y: isFine ? y * 0.03 : 0,
        }}
        transition={{ type: 'spring', stiffness: 40, damping: 20 }}
        style={{ left: '15%', top: '18%' }}
      />
      <motion.div
        className="absolute h-80 w-80 rounded-full bg-accent-deep/10 blur-3xl"
        animate={{
          x: isFine ? -x * 0.02 : 0,
          y: isFine ? y * 0.02 : 0,
        }}
        transition={{ type: 'spring', stiffness: 35, damping: 18 }}
        style={{ right: '8%', bottom: '12%' }}
      />
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-accent/40"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          animate={
            reduced
              ? undefined
              : {
                  y: [0, -14, 0],
                  opacity: [0.15, 0.55, 0.15],
                }
          }
          transition={{ duration: 4 + (p.id % 3), repeat: Infinity, delay: p.delay }}
        />
      ))}
    </div>
  );
};
