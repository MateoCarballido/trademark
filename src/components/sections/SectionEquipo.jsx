import { Printer, Wrench, Package, Pen, HardHat, Globe } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './SectionEquipo.css';

const capacidades = [
  {
    icon: <Printer size={20} strokeWidth={1.5} />,
    title: 'Impresión Gran Formato',
    desc: 'Digital de alta resolución para interiores y exteriores',
  },
  {
    icon: <Wrench size={20} strokeWidth={1.5} />,
    title: 'Taller de Herrería',
    desc: 'Estructuras metálicas y soporte para montajes',
  },
  {
    icon: <Package size={20} strokeWidth={1.5} />,
    title: 'Carpintería & Mobiliario',
    desc: 'Fabricación de muebles y elementos de display',
  },
  {
    icon: <Pen size={20} strokeWidth={1.5} />,
    title: 'Diseño Gráfico & Industrial',
    desc: 'Diseñadores propios en ambas disciplinas',
  },
  {
    icon: <HardHat size={20} strokeWidth={1.5} />,
    title: 'Instaladores Propios',
    desc: 'Equipo de campo con experiencia en retail',
  },
  {
    icon: <Globe size={20} strokeWidth={1.5} />,
    title: 'Red Nacional',
    desc: 'Instaladores en cada provincia del país',
  },
];

export default function SectionEquipo() {
  const gridRef = useScrollReveal({ selector: '[data-reveal]', staggerDelay: 80, duration: 650 });
  const textRef = useScrollReveal({ selector: '[data-reveal]', staggerDelay: 100, duration: 700 });

  return (
    <section className="sec-equipo">
      <div className="sec-equipo__container">
        {/* Columna izquierda — grilla de capacidades */}
        <div className="sec-equipo__grid" ref={gridRef}>
          {capacidades.map((cap) => (
            <div key={cap.title} className="sec-equipo__cell" data-reveal>
              <div className="sec-equipo__cell-icon">{cap.icon}</div>
              <h4 className="sec-equipo__cell-title">{cap.title}</h4>
              <p className="sec-equipo__cell-desc">{cap.desc}</p>
            </div>
          ))}
        </div>

        {/* Columna derecha — texto */}
        <div className="sec-equipo__text" ref={textRef}>
          <h2 className="sec-equipo__heading" data-reveal>
            Nuestro equipo.
          </h2>
          <div className="sec-equipo__divider" data-reveal />

          <p className="sec-equipo__p" data-reveal>
            Multidisciplinario y especializado, base de nuestra capacidad para ofrecer campañas integrales a nuestros clientes.
          </p>

        </div>
      </div>
    </section>
  );
}
