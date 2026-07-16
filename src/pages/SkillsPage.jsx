import { Seo } from '@/seo/Seo';
import { PageHero } from '@/components/layout/PageHero';
import { pagesMeta } from '@/data';
import { SkillsSection } from '@/components/sections/SkillsSection';

export const SkillsPage = () => (
  <>
    <Seo title="Skills | Ankur Kashyap" path="/skills" />
    <main className="pt-24">
      <PageHero {...pagesMeta.skills} />
      <SkillsSection showHeader={false} />
    </main>
  </>
);
