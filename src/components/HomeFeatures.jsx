import { useScrollReveal } from '../hooks/useScrollReveal';
import './HomeFeatures.css';
import { clients } from '../data/clients';

export default function HomeFeatures() {
  const headerRef = useScrollReveal({ duration: 700 });
  const featuresRef = useScrollReveal({ selector: '[data-reveal]', staggerDelay: 120, duration: 700 });
  const clientsRef = useScrollReveal({ selector: '[data-reveal]', staggerDelay: 40, duration: 600 });

  const features = [
    {
      id: "01",
      title: "UN SOLO EQUIPO",
      desc: "Del concepto al montaje final. Diseñamos, producimos e instalamos."
    },
    {
      id: "02",
      title: "ATENCIÓN AL DETALLE",
      desc: "Sin sorpresas. Cada gráfica pasa por un control de calidad."
    },
    {
      id: "03",
      title: "SOCIOS ESTRATÉGICOS",
      desc: "Proponemos soluciones que multiplican tu impacto."
    },
    {
      id: "04",
      title: "RAPIDEZ",
      desc: "Plazos cumplidos sin comprometer excelencia."
    }
  ];

  return (
    <div className="home-features">
      {/* POR QUÉ ELEGIRNOS */}
      <section className="section section-dark">
        <div className="container">
          <div className="feature-grid-oversized">
            <div className="feature-grid-header" ref={headerRef}>
              <h2 className="mega-title" style={{ color: 'var(--accent)' }}>POR QUÉ<br />NOSOTROS</h2>
            </div>

            <div className="feature-grid-content" ref={featuresRef}>
              {features.map((f) => (
                <div className="raw-feature-block" key={f.id} data-reveal>
                  <div className="raw-feature-num">{f.id}</div>
                  <div className="raw-feature-text">
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <section className="section bg-light border-y">
        <div className="container">
          <div className="client-typography-block">
            <h2 className="text-outline">CONFIANZA</h2>
            <div className="client-list-inline" ref={clientsRef}>
              {clients.map((c, i) => (
                <span key={c.id} data-reveal>
                  {c.name}{i < clients.length - 1 ? <>&nbsp;&mdash; </> : null}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
