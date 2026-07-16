import { Seo } from '@/seo/Seo';
import { PageHero } from '@/components/layout/PageHero';
import { pagesMeta } from '@/data';
import { ServicesSection } from '@/components/sections/ServicesSection';

export const ServicesPage = () => (
  <>
    <Seo title="Services | Ankur Kashyap" path="/services" />
    <main className="pt-24">
      <PageHero {...pagesMeta.services} />
      <ServicesSection showHeader={false} />
    </main>
  </>
);
