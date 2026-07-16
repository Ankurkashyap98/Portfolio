import { projects } from '@/data';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Reveal } from '@/components/common/Reveal';
import { LazyImage } from '@/components/common/LazyImage';
import { Button } from '@/components/common/Button';
import { Icon } from '@/components/common/Icon';

export const ProjectCard = ({ project, index = 0 }) => {
  return (
    <Reveal delay={index * 0.06}>
      <article className="glow-border group overflow-hidden rounded-3xl border border-accent/10 bg-white transition duration-500 hover:shadow-[0_18px_50px_rgba(11,154,90,0.12)]">
        <div className="relative overflow-hidden">
          <LazyImage
            src={project.image}
            alt={`${project.name} preview`}
            className="aspect-[16/10]"
            imgClassName="transition duration-700 ease-out group-hover:scale-110"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-shade via-shade/20 to-transparent opacity-80" />
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-white/25 bg-shade/70 px-3 py-1 text-xs text-white backdrop-blur">
              {project.type}
            </span>
            {project.featured ? (
              <span className="rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs text-white backdrop-blur">
                Featured
              </span>
            ) : null}
          </div>
        </div>

        <div className="space-y-5 p-6 md:p-8">
          <div>
            <h3 className="font-display text-3xl text-mist">{project.name}</h3>
            <p className="mt-2 text-sm italic text-accent/90">{project.ownership}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
              {project.overview}
            </p>
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

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <h4 className="mb-2 text-sm font-medium text-mist">My Contribution</h4>
              <ul className="space-y-1.5">
                {project.contribution.slice(0, 6).map((item) => (
                  <li key={item} className="text-sm text-muted">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-medium text-mist">Key Features</h4>
              <ul className="space-y-1.5">
                {project.features.map((item) => (
                  <li key={item} className="text-sm text-muted">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <details className="rounded-2xl border border-black/5 bg-ink-soft p-4">
            <summary className="cursor-pointer text-sm font-medium text-mist">
              Challenges, solutions & results
            </summary>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div>
                <h5 className="mb-2 text-xs uppercase tracking-[0.18em] text-accent">Challenges</h5>
                <ul className="space-y-1.5">
                  {project.challenges.map((item) => (
                    <li key={item} className="text-sm text-muted">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="mb-2 text-xs uppercase tracking-[0.18em] text-accent">Solutions</h5>
                <ul className="space-y-1.5">
                  {project.solutions.map((item) => (
                    <li key={item} className="text-sm text-muted">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="mb-2 text-xs uppercase tracking-[0.18em] text-accent">Results</h5>
                <ul className="space-y-1.5">
                  {project.results.map((item) => (
                    <li key={item} className="text-sm text-muted">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <h5 className="mb-2 text-xs uppercase tracking-[0.18em] text-accent">
                Future Improvements
              </h5>
              <ul className="space-y-1.5">
                {project.futureImprovements.map((item) => (
                  <li key={item} className="text-sm text-muted">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </details>

          {project.gallery?.length ? (
            <div className="grid grid-cols-2 gap-3">
              {project.gallery.map((src) => (
                <LazyImage
                  key={src}
                  src={src}
                  alt={`${project.name} screenshot`}
                  className="aspect-video rounded-xl"
                />
              ))}
            </div>
          ) : null}

          <div className="flex flex-wrap gap-3 pt-1">
            {project.liveUrl ? (
              <Button
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Open live project ${project.name}`}
              >
                Live Project
                <Icon name="FiExternalLink" className="h-4 w-4" />
              </Button>
            ) : null}
            {project.githubUrl ? (
              <Button
                href={project.githubUrl}
                variant="ghost"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
                <Icon name="FiGithub" className="h-4 w-4" />
              </Button>
            ) : null}
          </div>
        </div>
      </article>
    </Reveal>
  );
};

export const ProjectsSection = ({ showHeader = true }) => {
  return (
    <section
      id="projects"
      className={
        showHeader
          ? 'section-padding relative'
          : 'relative px-5 pb-20 pt-4 sm:px-8 md:pb-28 lg:px-12'
      }
    >
      <div className="container-shell">
        {showHeader ? (
          <SectionHeader
            eyebrow={projects.eyebrow}
            title={projects.title}
            subtitle={projects.subtitle}
          />
        ) : null}
        <div className="grid gap-8">
          {projects.items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
