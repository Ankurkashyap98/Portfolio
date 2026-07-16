import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '@/data';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Reveal } from '@/components/common/Reveal';
import { Icon } from '@/components/common/Icon';
import { TiltCard } from '@/components/animations/TiltCard';

const SkillBar = ({ name, level, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <div ref={ref}>
      <div className="mb-1.5 flex items-center justify-between text-xs">
        <span className="text-mist">{name}</span>
        <span className="tabular-nums text-muted">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-black/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent-deep via-accent to-accent-soft"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
};

export const SkillsSection = ({ showHeader = true }) => {
  return (
    <section
      id="skills"
      className={
        showHeader
          ? 'section-padding relative'
          : 'relative px-5 pb-20 pt-4 sm:px-8 md:pb-28 lg:px-12'
      }
    >
      <div className="container-shell">
        {showHeader ? (
          <SectionHeader
            eyebrow={skills.eyebrow}
            title={skills.title}
            subtitle={skills.subtitle}
          />
        ) : null}

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.categories.map((category, index) => (
            <Reveal key={category.id} delay={index * 0.05}>
              <TiltCard className="h-full" intensity={8}>
                <article className="glow-border glass group h-full rounded-3xl p-6 transition duration-300 hover:shadow-[0_16px_40px_rgba(11,154,90,0.1)]">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition group-hover:shadow-[0_8px_20px_rgba(11,154,90,0.22)]">
                      <Icon name={category.icon} />
                    </span>
                    <h3 className="text-lg font-medium text-mist">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.items.map((item, i) => (
                      <SkillBar
                        key={item.id}
                        name={item.name}
                        level={item.level}
                        delay={i * 0.05}
                      />
                    ))}
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
