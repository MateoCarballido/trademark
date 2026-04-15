import PageSEO from '../components/PageSEO';
import TextMarquee from '../components/TextMarquee';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';
import SectionProposito from '../components/sections/SectionProposito';
import SectionApproach from '../components/sections/SectionApproach';
import SectionMetodologia from '../components/sections/SectionMetodologia';
import SectionEquipo from '../components/sections/SectionEquipo';
import './Nosotros.css';

export default function Nosotros() {
  return (
    <div className="page-nosotros" style={{ background: 'var(--bg-dark)' }}>
      <PageSEO
        title="Quiénes Somos — 30 Años en Comunicación Visual"
        description="Somos el equipo de comunicación visual y gráfica para puntos de venta detrás de TradeMark BrandCare — antes Trademark Gráfica. Más de 30 años y 20.000 proyectos en Argentina."
        canonical="/nosotros"
        breadcrumbs={[{ name: 'Inicio', path: '/' }, { name: 'Nosotros', path: '/nosotros' }]}
      />

      {/* High impact spatial text block with embedded physical marquee */}
      <section className="nosotros-hero">
        <h1 className="sr-only">Quiénes Somos — TradeMark BrandCare, Comunicación Visual Argentina</h1>
        <div className="nosotros-marquee-wrap" aria-hidden="true">
          <TextMarquee baseVelocity={-3} scrollDependent={false}>
            <p className="nosotros-marquee-title">TRADEMARK&nbsp;</p>
          </TextMarquee>

        </div>

        <div className="nosotros-hero-text">
          <h2>DETRÁS DE CADA PROYECTO.</h2>
          <p>
            Somos la fuerza operativa y creativa que garantiza que la identidad de tu marca se traslade perfectamente del manual al mundo físico.
          </p>
        </div>
      </section>

      <SectionProposito />
      <SectionApproach />
      <SectionMetodologia />
      <SectionEquipo />

      {/* Track Record Block */}
      <section className="section section-dark nosotros-track">
        <div className="container">
          <div className="nosotros-track-list">
            <div className="nosotros-track-row">
              <span className="nosotros-track-num">30+</span>
              <div className="nosotros-track-body">
                <h3 className="nosotros-track-label">Años acompañando marcas en su comunicación visual</h3>
                <p className="nosotros-track-detail">Una evolución natural de nuestra trayectoria en gráfica e impresión, aplicada hoy a cada punto de venta.</p>
              </div>
            </div>
            <div className="nosotros-track-row">
              <span className="nosotros-track-num">20k+</span>
              <div className="nosotros-track-body">
                <h3 className="nosotros-track-label">Proyectos completados</h3>
                <p className="nosotros-track-detail">Del brief al montaje final. Cada uno entregado en tiempo, con el mismo nivel de exigencia.</p>
              </div>
            </div>
            <div className="nosotros-track-row">
              <span className="nosotros-track-num">15+</span>
              <div className="nosotros-track-body">
                <h3 className="nosotros-track-label">Ciudades</h3>
                <p className="nosotros-track-detail">Un solo equipo coordinando rollouts nacionales sin fricción, desde Buenos Aires al interior.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <p style={{ fontSize: '1.15rem', margin: 0 }}>
            Conocé en detalle todo lo que hacemos.
          </p>
          <Link to="/servicios" className="btn btn-primary">
            Ver nuestros servicios
          </Link>
        </div>
      </section>

      <CTA />
    </div>
  );
}
