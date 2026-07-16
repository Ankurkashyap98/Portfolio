import { Seo } from '@/seo/Seo';
import { PageHero } from '@/components/layout/PageHero';
import { pagesMeta } from '@/data';
import { FreelanceSection } from '@/components/sections/FreelanceSection';

export const FreelancePage = () => (
  <>
    <Seo title="Freelance | Ankur Kashyap" path="/freelance" />
    <main className="pt-24">
      <PageHero {...pagesMeta.freelance} />
      <FreelanceSection showHeader={false} />
    </main>
  </>
);
