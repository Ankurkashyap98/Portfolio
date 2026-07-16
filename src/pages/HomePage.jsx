import { lazy, Suspense } from 'react';
import { Seo } from '@/seo/Seo';
import { HeroSection } from '@/components/sections/HeroSection';

const AboutSection = lazy(() =>
  import('@/components/sections/AboutSection').then((m) => ({ default: m.AboutSection }))
);
const ExperienceSection = lazy(() =>
  import('@/components/sections/ExperienceSection').then((m) => ({
    default: m.ExperienceSection,
  }))
);
const SkillsSection = lazy(() =>
  import('@/components/sections/SkillsSection').then((m) => ({ default: m.SkillsSection }))
);
const ProjectsSection = lazy(() =>
  import('@/components/sections/ProjectsSection').then((m) => ({ default: m.ProjectsSection }))
);
const FreelanceSection = lazy(() =>
  import('@/components/sections/FreelanceSection').then((m) => ({
    default: m.FreelanceSection,
  }))
);
const ServicesSection = lazy(() =>
  import('@/components/sections/ServicesSection').then((m) => ({ default: m.ServicesSection }))
);
const TestimonialsSection = lazy(() =>
  import('@/components/sections/TestimonialsSection').then((m) => ({
    default: m.TestimonialsSection,
  }))
);
const ContactSection = lazy(() =>
  import('@/components/sections/ContactSection').then((m) => ({ default: m.ContactSection }))
);

const SectionFallback = () => (
  <div className="section-padding container-shell" aria-hidden="true">
    <div className="h-40 animate-pulse rounded-3xl bg-accent/10" />
  </div>
);

export const HomePage = () => {
  return (
    <>
      <Seo />
      <main>
        <HeroSection />
        <Suspense fallback={<SectionFallback />}>
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <FreelanceSection />
          <ServicesSection />
          <TestimonialsSection />
          <ContactSection />
        </Suspense>
      </main>
    </>
  );
};
