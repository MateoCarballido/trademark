import { Helmet } from 'react-helmet-async';

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'TradeMark BrandCare',
  description:
    'Diseñamos, producimos e instalamos la comunicación visual de marcas en puntos de venta — cartelería exterior, montajes en tiendas, señalética y branding aplicado.',
  url: 'https://trademark.com.ar',
  logo: 'https://trademark.com.ar/trademark-logo-dark.png',
  image: 'https://trademark.com.ar/og-image.jpg',
  telephone: '+5491147993002',
  email: 'info@trademark.com.ar',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ramón B. Castro 1565',
    addressLocality: 'Olivos',
    addressRegion: 'Provincia de Buenos Aires',
    postalCode: 'B1636EUA',
    addressCountry: 'AR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -34.5119,
    longitude: -58.4958,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  areaServed: {
    '@type': 'Country',
    name: 'Argentina',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Comunicación Visual',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Montajes e Instalaciones en Locales Comerciales' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cartelería Exterior y Señalética' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Diseño y Branding para Puntos de Venta' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Comunicación Visual Integral' } },
    ],
  },
  sameAs: [
    'https://www.instagram.com/trademarkgrafica/"',
  ],
};

const webSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'TradeMark BrandCare',
  url: 'https://trademark.com.ar',
};

export default function SchemaOrg() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(localBusiness)}</script>
      <script type="application/ld+json">{JSON.stringify(webSite)}</script>
    </Helmet>
  );
}
