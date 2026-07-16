import { freelance } from '@/data';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Reveal } from '@/components/common/Reveal';
import { LazyImage } from '@/components/common/LazyImage';
import { Button } from '@/components/common/Button';
import { Icon } from '@/components/common/Icon';

export const FreelanceSection = ({ showHeader = true }) => {
  return (
    <section
      id="freelance"
      className={
        showHeader
          ? 'section-padding relative'
          : 'relative px-5 pb-20 pt-4 sm:px-8 md:pb-28 lg:px-12'
      }
    >
      <div className="container-shell">
        {showHeader ? (
          <SectionHeader
            eyebrow={freelance.eyebrow}
            title={freelance.title}
            subtitle={freelance.subtitle}
          />
        ) : null}

        <Reveal>
          <div className="mb-10 rounded-3xl border border-accent/20 bg-accent/5 p-5 md:p-6">
            <p className="text-sm leading-relaxed text-mist md:text-base">{freelance.note}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {freelance.contributions.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-accent/15 bg-white px-3 py-1.5 text-xs text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {freelance.projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.06}>
              <article className="glow-border glass flex h-full flex-col overflow-hidden rounded-3xl">
                <LazyImage
                  src={project.image}
                  alt={`${project.name} cover`}
                  className="aspect-[16/9]"
                  imgClassName="transition duration-700 hover:scale-105"
                />
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-accent">
                      {project.clientIndustry}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-mist">{project.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div>
                    <h4 className="mb-2 text-sm font-medium text-mist">My Contribution</h4>
                    <ul className="space-y-1.5">
                      {project.contribution.map((item) => (
                        <li key={item} className="text-sm text-muted">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <details className="rounded-2xl border border-black/5 bg-ink-soft p-4">
                    <summary className="cursor-pointer text-sm font-medium text-mist">
                      Challenges · Solutions · Results
                    </summary>
                    <div className="mt-3 space-y-3">
                      <div>
                        <h5 className="mb-1 text-xs uppercase tracking-[0.16em] text-accent">
                          Challenges
                        </h5>
                        <ul className="space-y-1">
                          {project.challenges.map((item) => (
                            <li key={item} className="text-sm text-muted">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="mb-1 text-xs uppercase tracking-[0.16em] text-accent">
                          Solutions
                        </h5>
                        <ul className="space-y-1">
                          {project.solutions.map((item) => (
                            <li key={item} className="text-sm text-muted">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="mb-1 text-xs uppercase tracking-[0.16em] text-accent">
                          Results
                        </h5>
                        <ul className="space-y-1">
                          {project.results.map((item) => (
                            <li key={item} className="text-sm text-muted">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </details>

                  {project.liveUrl ? (
                    <div className="mt-auto pt-2">
                      <Button
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        variant="secondary"
                      >
                        Live URL
                        <Icon name="FiExternalLink" className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
