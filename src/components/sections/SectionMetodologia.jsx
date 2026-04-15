import { CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './SectionMetodologia.css';

const fases = [
  {
    label: 'FASE 01',
    title: 'Brief & Estrategia',
    desc: 'Analizamos antes de proponer. Entendemos el objetivo de negocio detrás de cada campaña y nos reunimos con el equipo de marketing para alinear antes de diseñar.',
  },
  {
    label: 'FASE 02',
    title: 'Diseño & Producción integrada',
    desc: 'Diseñadores, jefe de taller e instaladores trabajan en conjunto desde el inicio — no al final. Así se resuelven los problemas antes de que lleguen al local.',
  },
  {
    label: 'FASE 03',
    title: 'Adaptación & Instalación',
    desc: 'Cada espacio tiene sus propias variables. Las relevamos, las resolvemos y adaptamos cada pieza antes de la implementación. Supervisión en sitio en cada punto de venta.',
  },
  {
    label: 'FASE 04',
    title: 'Control & Entrega',
    desc: 'Registro fotográfico de cada implementación. Coordinación con el equipo del cliente. Y respuesta rápida ante cualquier requerimiento urgente.',
  },
];

export default function SectionMetodologia() {
  const headerRef = useScrollReveal({ selector: '[data-reveal]', staggerDelay: 100, duration: 700 });
  const gridRef = useScrollReveal({ selector: '[data-reveal]', staggerDelay: 120, duration: 700 });
  const bannerRef = useScrollReveal({ duration: 700 });

  return (
    <section className="sec-met">
      <div className="sec-met__container">
        {/* Header */}
        <div className="sec-met__header" ref={headerRef}>
          <p className="sec-met__eyebrow" data-reveal>Cómo trabajamos</p>
          <h2 className="sec-met__heading" data-reveal>
            Un proceso que elimina la incertidumbre. {/*cambiar*/}
          </h2>
          <div className="sec-met__divider" data-reveal />
          <p className="sec-met__lead" data-reveal>
            Cada proyecto atraviesa cuatro fases de control y colaboración, diseñadas para que no haya sorpresas entre lo que se aprueba y lo que se instala.
          </p>
        </div>

        {/* Fases grid */}
        <div className="sec-met__grid" ref={gridRef}>
          {fases.map((fase, i) => (
            <div
              key={fase.label}
              className={`sec-met__fase${i < fases.length - 1 ? ' sec-met__fase--bordered' : ''}`}
              data-reveal
            >
              <span className="sec-met__fase-label">{fase.label}</span>
              <h3 className="sec-met__fase-title">{fase.title}</h3>
              <p className="sec-met__fase-desc">{fase.desc}</p>
            </div>
          ))}
        </div>

  

      </div>
    </section>
  );
}
