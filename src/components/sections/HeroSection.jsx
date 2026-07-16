import { motion } from 'framer-motion';
import { hero, socialLinks } from '@/data';
import { Button } from '@/components/common/Button';
import { Icon } from '@/components/common/Icon';
import { TypingText } from '@/components/animations/TypingText';
import { ParticleField } from '@/components/animations/ParticleField';
import { fadeUp, staggerContainer } from '@/animations/variants';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { scrollToId } from '@/utils';

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(11,154,90,0.12),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(11,154,90,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(11,154,90,0.06)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <ParticleField />

      <div className="container-shell relative z-10 section-padding !py-0">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-sm uppercase tracking-[0.28em] text-accent"
          >
            {hero.greeting}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-mist sm:text-6xl md:text-7xl"
          >
            <span className="text-gradient">{hero.name}</span>
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-5 min-h-[2.5rem] text-xl text-mist md:text-2xl">
            <TypingText words={hero.roles} className="font-medium" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
          >
            {hero.description}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
            {hero.ctas.map((cta) => (
              <MagneticButton key={cta.id} strength={cta.variant === 'primary' ? 14 : 8}>
                <Button
                  href={cta.href}
                  variant={cta.variant}
                  download={cta.download}
                  onClick={
                    cta.href.startsWith('#')
                      ? (e) => {
                          e.preventDefault();
                          scrollToId(cta.href);
                        }
                      : undefined
                  }
                >
                  {cta.label}
                  {cta.id === 'projects' ? (
                    <Icon name="FiArrowUpRight" className="h-4 w-4" />
                  ) : null}
                </Button>
              </MagneticButton>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={link.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent/20 text-muted transition hover:border-accent/50 hover:text-accent hover:shadow-[0_8px_24px_rgba(11,154,90,0.16)]"
              >
                <Icon name={link.icon} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToId('#about');
          }}
          className="absolute bottom-2 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.24em] text-muted"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span>{hero.scrollHint}</span>
          <span className="h-10 w-px bg-gradient-to-b from-accent to-transparent" />
        </motion.a>
      </div>
    </section>
  );
};
