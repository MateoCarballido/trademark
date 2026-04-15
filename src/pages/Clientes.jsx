import PageSEO from '../components/PageSEO';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';
import { clients } from '../data/clients';
import './Clientes.css';

export default function Clientes() {
  return (
    <div className="page-clientes" style={{ paddingTop: 'var(--nav-height)' }}>
      <PageSEO
        title="Clientes — Marcas que Confían en TradeMark BrandCare"
        description="Empresas de retail, gastronomía, real estate y más confían en TradeMark BrandCare para su comunicación visual en puntos de venta en todo el país."
        canonical="/clientes"
        breadcrumbs={[{ name: 'Inicio', path: '/' }, { name: 'Clientes', path: '/clientes' }]}
      />
      <section className="section bg-white text-center">
        <div className="container">
          <h1 style={{ marginBottom: '1rem' }}>Marcas que eligen cuidar su imagen</h1>
          <p className="subtitle" style={{ fontSize: '1.25rem', margin: '0 auto 4rem auto', maxWidth: '800px', textAlign: 'center' }}>
            Estas son algunas de las empresas que confíaron en TradeMark BrandCare para su comunicación visual.
          </p>

          <div className="client-logos" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem 5rem', marginBottom: '1rem' }}>
            {clients.map((c) => (
              <div key={c.id} className="client-logo-ph" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--secondary)', opacity: 0.5 }}>
                {c.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2 style={{ marginBottom: '3rem' }}>Industrias que atendemos</h2>
          <div className="industrias-grid">
            {[
              { icon: '🏬', name: 'Retail & Fashion' },
              { icon: '🍽', name: 'Gastronomía' },
              { icon: '🏢', name: 'Real Estate' },
              { icon: '💊', name: 'Farmacias & Salud' },
              { icon: '🏋', name: 'Fitness & Bienestar' },
              { icon: '🏦', name: 'Banca & Servicios Financieros' },
            ].map((ind) => (
              <div className="industria-card" key={ind.name}>
                <span className="industria-icon">{ind.icon}</span>
                <span className="industria-name">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white" style={{ paddingTop: '4rem', paddingBottom: '4rem', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <p style={{ fontSize: '1.15rem', margin: 0 }}>
            ¿Querés ver el trabajo detrás de estas marcas?
          </p>
          <Link to="/proyectos" className="btn btn-primary">
            Ver portfolio de proyectos
          </Link>
        </div>
      </section>

      <CTA />
    </div>
  );
}
