import { Seo } from '@/seo/Seo';
import { PageHero } from '@/components/layout/PageHero';
import { pagesMeta } from '@/data';
import { ProjectsSection } from '@/components/sections/ProjectsSection';

export const ProjectsPage = () => (
  <>
    <Seo title="Projects | Ankur Kashyap" path="/projects" />
    <main className="pt-24">
      <PageHero {...pagesMeta.projects} />
      <ProjectsSection showHeader={false} />
    </main>
  </>
);
