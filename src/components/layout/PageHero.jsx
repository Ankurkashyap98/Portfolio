import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/animations/variants';

export const PageHero = ({ eyebrow, title, subtitle }) => {
  return (
    <section className="container-shell px-5 pb-6 pt-8 sm:px-8 lg:px-12">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-3xl"
      >
        {eyebrow ? (
          <motion.p
            variants={fadeUp}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent"
          >
            {eyebrow}
          </motion.p>
        ) : null}
        <motion.h1
          variants={fadeUp}
          className="font-display text-4xl font-semibold tracking-tight text-mist md:text-6xl"
        >
          {title}
        </motion.h1>
        {subtitle ? (
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
          >
            {subtitle}
          </motion.p>
        ) : null}
      </motion.div>
    </section>
  );
};
