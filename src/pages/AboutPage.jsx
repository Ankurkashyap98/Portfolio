import { Seo } from '@/seo/Seo';
import { PageHero } from '@/components/layout/PageHero';
import { pagesMeta } from '@/data';
import { AboutSection } from '@/components/sections/AboutSection';

export const AboutPage = () => (
  <>
    <Seo title="About | Ankur Kashyap" path="/about" />
    <main className="pt-24">
      <PageHero {...pagesMeta.about} />
      <AboutSection showHeader={false} />
    </main>
  </>
);
