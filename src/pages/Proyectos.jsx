import PageSEO from '../components/PageSEO';
import { useState } from 'react';
import ProyectosGrid from '../components/ProyectosGrid';
import CTA from '../components/CTA';
import { allProjects } from '../data/allProjects';
import './Proyectos.css';

export default function Proyectos() {
  const types = ['Todos', ...new Set(allProjects.map((p) => p.type))];
  const [active, setActive] = useState('Todos');
  const filtered = active === 'Todos' ? allProjects : allProjects.filter((p) => p.type === active);

  return (
    <div className="page-proyectos" style={{ paddingTop: 'var(--nav-height)', backgroundColor: 'var(--bg-dark)' }}>
      <PageSEO
        title="Proyectos de Comunicación Visual y Cartelería"
        description="Casos reales de cartelería exterior, montajes en locales y señalética para marcas líderes. Del brief al resultado final, con coherencia de imagen garantizada."
        canonical="/proyectos"
        breadcrumbs={[{ name: 'Inicio', path: '/' }, { name: 'Proyectos', path: '/proyectos' }]}
      />
      <section className="section section-dark" style={{ paddingBottom: '0' }}>
        <div className="container">
          <h1 style={{ color: 'var(--bg-light)' }}>Proyectos de Comunicación Visual y Cartelería</h1>
          <p className="subtitle" style={{ color: 'var(--text-on-dark)', fontSize: '1.25rem', marginTop: '1rem', maxWidth: '800px' }}>
            Cada proyecto es una marca que decidió confiar en nosotros. Estos son los resultados.
          </p>

          <div className="proyectos-filters">
            {types.map((t) => (
              <button
                key={t}
                className={`filter-btn${active === t ? ' active' : ''}`}
                onClick={() => setActive(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      <ProyectosGrid projects={filtered} />
      <CTA />
    </div>
  );
}
