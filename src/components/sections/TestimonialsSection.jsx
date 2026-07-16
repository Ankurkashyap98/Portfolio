import { testimonials } from '@/data';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Reveal } from '@/components/common/Reveal';
import { LazyImage } from '@/components/common/LazyImage';

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding relative">
      <div className="container-shell">
        <SectionHeader
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
          subtitle={testimonials.subtitle}
        />

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.items.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.06}>
              <figure className="glow-border glass flex h-full flex-col rounded-3xl p-6">
                <blockquote className="flex-1 text-sm leading-relaxed text-muted md:text-base">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <LazyImage
                    src={item.avatar}
                    alt={`Portrait of ${item.name}`}
                    className="h-11 w-11 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-mist">{item.name}</p>
                    <p className="text-xs text-muted">{item.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
