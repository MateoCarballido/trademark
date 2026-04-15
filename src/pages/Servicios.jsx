import PageSEO from '../components/PageSEO';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';
import './Servicios.css';

export default function Servicios() {
  return (
    <div className="page-servicios">
      <PageSEO
        title="Cartelería, Montajes y Diseño para Locales Comerciales"
        description="Servicios de comunicación visual integral: cartelería exterior, montajes en tiendas, señalética y branding aplicado para puntos de venta en todo el país."
        canonical="/servicios"
        breadcrumbs={[{ name: 'Inicio', path: '/' }, { name: 'Servicios', path: '/servicios' }]}
      />
      <h1 className="sr-only">Servicios de Comunicación Visual — TradeMark BrandCare</h1>

      {/* Grid Breaking Elements */}
      <section className="section bg-light servicios-section-body">
        <div className="container">

          <div className="servicios-grid reversed">
            <h2>IMPRESIÓN<br />GRAN FORMATO</h2>
            <div className="servicios-grid-body">
              <p>Producción gráfica sobre distintos materiales, con tecnología de impresión de alta calidad y terminaciones precisas para cada proyecto.</p>
              <ul className="servicios-detail-list">
                <li>Vinilo, lona, PVC, telas y otros sustratos</li>
                <li>Tecnología látex ecológica</li>
                <li>Corte y routeado a medida</li>
              </ul>
            </div>
          </div>

          <div className="servicios-grid">
            <h2>MONTAJES &<br />INSTALACIONES</h2>
            <div className="servicios-grid-body">
              <p>Equipos capacitados. Especialistas en vinilos, corpóreos, tensado de lonas y armado de exhibidores.</p>
              <ul className="servicios-detail-list">
                <li>Vidrieras & Pop-Up Stores</li>
                <li>Montajes aéreos y estructurales</li>
                <li>Mantenimiento preventivo</li>
              </ul>
            </div>
          </div>
          <div className="servicios-grid reversed">
            <h2>COMUNICACIÓN<br />VISUAL</h2>
            <div className="servicios-grid-body">
              <p>Planificación y ejecución integral de la comunicación visual en el punto de venta: desde el concepto hasta la instalación final.</p>
              <ul className="servicios-detail-list">
                <li>Campañas de temporada y vidrieras</li>
                <li>Sistemas de exhibición y display</li>
                <li>Coordinación multi-local e implementación nacional</li>
              </ul>
            </div>
          </div>

          <div className="servicios-grid">
            <h2>DISEÑO &<br />BRANDING</h2>
            <div className="servicios-grid-body">
              <p>Desde el manual de marca hasta el punto de venta.</p>
              <ul className="servicios-detail-list">
                <li>Interpretación de briefs</li>
                <li>Identidad de marca</li>
                <li>Material P.O.P. y merchandising</li>
              </ul>
            </div>
          </div>


        </div>
      </section>

      <section className="section bg-dark" style={{ paddingTop: '4rem', paddingBottom: '4rem', borderTop: '1px solid var(--border-inverse)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <p style={{ color: 'var(--text-on-dark)', fontSize: '1.15rem', margin: 0 }}>
            ¿Querés ver cómo quedaron nuestros trabajos?
          </p>
          <Link to="/proyectos" className="btn btn-primary">
            Ver proyectos reales
          </Link>
        </div>
      </section>

      <CTA />
    </div>
  );
}
