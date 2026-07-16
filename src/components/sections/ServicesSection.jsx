import { services } from '@/data';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Reveal } from '@/components/common/Reveal';
import { Icon } from '@/components/common/Icon';
import { TiltCard } from '@/components/animations/TiltCard';

export const ServicesSection = ({ showHeader = true }) => {
  return (
    <section
      id="services"
      className={
        showHeader
          ? 'section-padding relative'
          : 'relative px-5 pb-20 pt-4 sm:px-8 md:pb-28 lg:px-12'
      }
    >
      <div className="container-shell">
        {showHeader ? (
          <SectionHeader
            eyebrow={services.eyebrow}
            title={services.title}
            subtitle={services.subtitle}
          />
        ) : null}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.04}>
              <TiltCard className="h-full" intensity={7}>
                <article className="glow-border glass group h-full rounded-2xl p-5 transition duration-300 hover:bg-ink-elevated/70">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition group-hover:shadow-[0_8px_22px_rgba(11,154,90,0.2)]">
                    <Icon name={service.icon} />
                  </div>
                  <h3 className="text-lg font-medium text-mist">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
