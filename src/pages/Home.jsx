import PageSEO from '../components/PageSEO';
import SchemaOrg from '../components/SchemaOrg';
import HomeHero from '../components/HomeHero';
import ServiceGrid from '../components/ServiceGrid';
import PortfolioGrid from '../components/PortfolioGrid';
import HomeFeatures from '../components/HomeFeatures';
import SectionCTA from '../components/sections/SectionCTA';

export default function Home() {
  return (
    <div className="page-home">
      <PageSEO
        title="Comunicación Visual para Puntos de Venta"
        description="Diseñamos, producimos e instalamos señalética, cartelería y montajes para tus locales. Un equipo, cero intermediarios. Buenos Aires y todo el país."
        canonical="/"
      />
      <SchemaOrg />
      <HomeHero />
      <ServiceGrid />
      
      <PortfolioGrid />
      <HomeFeatures />
      <SectionCTA />
    </div>
  );
}
