import { motion } from 'framer-motion';

export const Atmosphere = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-atmosphere" />
      <div className="absolute inset-0 bg-noise opacity-[0.35] mix-blend-soft-light" />
      <div className="absolute inset-0 bg-grid-soft opacity-40" />

      <motion.div
        className="absolute -left-24 top-10 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-[110px]"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-16 top-1/4 h-[24rem] w-[24rem] rounded-full bg-emerald-300/25 blur-[100px]"
        animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-teal-200/30 blur-[120px]"
        animate={{ x: [0, 25, 0], y: [0, -35, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-emerald-50/80 to-transparent" />
    </div>
  );
};
