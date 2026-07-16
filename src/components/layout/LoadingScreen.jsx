import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { loading } from '@/data';
import { useApp } from '@/context/AppContext';

export const LoadingScreen = () => {
  const { isLoading, setIsLoading } = useApp();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame;
    const start = performance.now();
    const duration = 1800;

    const tick = (now) => {
      const ratio = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - ratio, 3);
      setProgress(Math.round(eased * 100));
      if (ratio < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setIsLoading(false), 280);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [setIsLoading]);

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/15 blur-[90px]" />
            <div className="absolute bottom-1/4 right-1/4 h-56 w-56 rounded-full bg-accent-soft/12 blur-[80px]" />
          </div>

          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-accent/25 bg-white shadow-[0_12px_40px_rgba(11,154,90,0.18)]"
            >
              <span className="font-display text-4xl font-bold text-gradient">A.</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="font-display text-4xl font-semibold tracking-tight text-mist md:text-5xl"
            >
              {loading.brand}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.6 }}
              className="mt-2 text-sm uppercase tracking-[0.28em] text-muted"
            >
              {loading.subtitle}
            </motion.p>

            <div className="mt-10 w-56">
              <div className="mb-3 flex items-center justify-between text-xs text-muted">
                <span>{progress < 100 ? 'Loading' : loading.readyLabel}</span>
                <span className="tabular-nums text-accent">{progress}%</span>
              </div>
              <div className="h-[2px] overflow-hidden rounded-full bg-black/10">
                <motion.div
                  className="h-full origin-left bg-gradient-to-r from-accent-deep via-accent to-accent-soft"
                  style={{ scaleX: progress / 100 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
