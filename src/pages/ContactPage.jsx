import { Seo } from '@/seo/Seo';
import { PageHero } from '@/components/layout/PageHero';
import { pagesMeta } from '@/data';
import { ContactSection } from '@/components/sections/ContactSection';

export const ContactPage = () => (
  <>
    <Seo title="Contact | Ankur Kashyap" path="/contact" />
    <main className="pt-24">
      <PageHero {...pagesMeta.contact} />
      <ContactSection showHeader={false} />
    </main>
  </>
);
