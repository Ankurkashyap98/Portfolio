import { experience } from '@/data';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Reveal } from '@/components/common/Reveal';

export const ExperienceSection = ({ showHeader = true }) => {
  return (
    <section
      id="experience"
      className={
        showHeader
          ? 'section-padding relative'
          : 'relative px-5 pb-20 pt-4 sm:px-8 md:pb-28 lg:px-12'
      }
    >
      <div className="container-shell">
        {showHeader ? (
          <SectionHeader
            eyebrow={experience.eyebrow}
            title={experience.title}
            subtitle={experience.subtitle}
          />
        ) : null}

        <div className="relative space-y-8 before:absolute before:bottom-0 before:left-[11px] before:top-2 before:w-px before:bg-gradient-to-b before:from-accent/60 before:via-accent/20 before:to-transparent md:before:left-[15px]">
          {experience.items.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.08}>
              <article className="relative pl-10 md:pl-12">
                <span className="absolute left-0 top-3 flex h-6 w-6 items-center justify-center rounded-full border border-accent/40 bg-white shadow-[0_0_18px_rgba(11,154,90,0.28)] md:h-8 md:w-8">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                </span>

                <div className="glow-border glass rounded-3xl p-6 md:p-8">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-accent">{item.type}</p>
                      <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-mist md:text-3xl">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-sm text-muted">
                        {item.company} · {item.location}
                      </p>
                    </div>
                    <p className="rounded-full border border-accent/15 px-3 py-1 text-xs text-muted">
                      {item.duration}
                    </p>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-muted md:text-base">
                    {item.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="mb-3 text-sm font-medium text-mist">Responsibilities</h4>
                      <ul className="space-y-2">
                        {item.responsibilities.map((point) => (
                          <li key={point} className="text-sm leading-relaxed text-muted">
                            • {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 text-sm font-medium text-mist">Achievements</h4>
                      <ul className="space-y-2">
                        {item.achievements.map((point) => (
                          <li key={point} className="text-sm leading-relaxed text-muted">
                            • {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
