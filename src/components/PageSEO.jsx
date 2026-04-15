import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'TradeMark BrandCare';
const BASE_URL = 'https://trademark.com.ar';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.svg`;

// breadcrumbs: [{ name: 'Inicio', path: '/' }, { name: 'Servicios', path: '/servicios' }]
function buildBreadcrumbSchema(breadcrumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: `${BASE_URL}${crumb.path}`,
    })),
  };
}

export default function PageSEO({
  title,
  description,
  canonical,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  breadcrumbs,
  robots,
}) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const breadcrumbSchema = breadcrumbs ? buildBreadcrumbSchema(breadcrumbs) : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {robots && <meta name="robots" content={robots} />}
      {canonical && <link rel="canonical" href={`${BASE_URL}${canonical}`} />}

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {canonical && <meta property="og:url" content={`${BASE_URL}${canonical}`} />}

      {/* BreadcrumbList */}
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
