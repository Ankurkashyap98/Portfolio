import { Seo } from '@/seo/Seo';
import { PageHero } from '@/components/layout/PageHero';
import { pagesMeta } from '@/data';
import { ExperienceSection } from '@/components/sections/ExperienceSection';

export const ExperiencePage = () => (
  <>
    <Seo title="Experience | Ankur Kashyap" path="/experience" />
    <main className="pt-24">
      <PageHero {...pagesMeta.experience} />
      <ExperienceSection showHeader={false} />
    </main>
  </>
);
