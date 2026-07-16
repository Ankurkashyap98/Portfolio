import { about } from '@/data';
import { SectionHeader } from '@/components/common/SectionHeader';
import { AnimatedCounter } from '@/components/common/AnimatedCounter';
import { Icon } from '@/components/common/Icon';
import { Reveal } from '@/components/common/Reveal';
import { TiltCard } from '@/components/animations/TiltCard';
import { TextReveal } from '@/components/animations/TextReveal';

export const AboutSection = ({ showHeader = true }) => {
  return (
    <section
      id="about"
      className={
        showHeader
          ? 'section-padding relative'
          : 'relative px-5 pb-20 pt-4 sm:px-8 md:pb-28 lg:px-12'
      }
    >
      <div className="container-shell">
        {showHeader ? (
          <SectionHeader
            eyebrow={about.eyebrow}
            title={about.title}
            subtitle={about.subtitle}
          />
        ) : null}

        <Reveal>
          <TextReveal
            text={about.introduction}
            className="mb-12 max-w-3xl text-base leading-relaxed text-muted md:text-lg"
          />
        </Reveal>

        {about.education?.length ? (
          <div className="mb-14 space-y-4">
            <Reveal>
              <h3 className="text-sm uppercase tracking-[0.22em] text-accent">Education</h3>
            </Reveal>
            {about.education.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.05}>
                <article className="glow-border glass rounded-2xl p-5 md:p-6">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h4 className="font-display text-xl font-semibold tracking-tight text-mist">
                        {item.school}
                      </h4>
                      <p className="mt-1 text-sm text-muted">
                        {item.degree}
                        {item.gpa ? ` · GPA: ${item.gpa}` : ''}
                      </p>
                    </div>
                    <div className="text-left md:text-right">
                      <p className="rounded-full border border-accent/15 px-3 py-1 text-xs text-muted inline-block">
                        {item.duration}
                      </p>
                      <p className="mt-2 text-xs text-muted">{item.location}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : null}

        <div className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {about.highlights.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.05}>
              <TiltCard className="h-full">
                <article className="glow-border glass group h-full rounded-2xl p-5 transition duration-300 hover:bg-ink-elevated/80">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition group-hover:shadow-[0_8px_24px_rgba(11,154,90,0.2)]">
                    <Icon name={item.icon} />
                  </div>
                  <h3 className="text-lg font-medium text-mist">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mb-12 flex flex-wrap gap-2">
            {about.principles.map((item) => (
              <span
                key={item}
                className="rounded-full border border-accent/15 bg-accent/5 px-3 py-1.5 text-xs text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-8 rounded-3xl border border-accent/10 bg-ink-elevated/50 p-8 md:grid-cols-4">
          {about.counters.map((counter) => (
            <AnimatedCounter
              key={counter.id}
              value={counter.value}
              suffix={counter.suffix}
              label={counter.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
