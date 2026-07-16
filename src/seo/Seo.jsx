import { Helmet } from 'react-helmet-async';
import { SEO, SITE } from '@/data';

export const Seo = ({
  title = SEO.title,
  description = SEO.description,
  path = '/',
  image = SEO.ogImage,
}) => {
  const url = `${SITE.siteUrl}${path}`;
  const absoluteImage = image.startsWith('http') ? image : `${SITE.siteUrl}${image}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE.fullName,
    jobTitle: SITE.role,
    url: SITE.siteUrl,
    email: SITE.email,
    description: SEO.description,
    knowsAbout: SEO.keywords,
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={SEO.keywords.join(', ')} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:site_name" content={`${SITE.name} Portfolio`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />
      <meta name="twitter:creator" content={SEO.twitterHandle} />

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};
