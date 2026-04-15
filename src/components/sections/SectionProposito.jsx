import { useScrollReveal } from '../../hooks/useScrollReveal';
import './SectionProposito.css';

const stats = [
  { num: '1', label: 'único equipo responsable de principio a fin' },
  { num: '0', label: 'intermediarios entre tu brief y el resultado final' },
  { num: '∞', label: 'puntos de venta con consistencia de marca garantizada' },
];

export default function SectionProposito() {
  const textRef = useScrollReveal({ selector: '[data-reveal]', staggerDelay: 100, duration: 700 });
  const panelRef = useScrollReveal({ selector: '[data-reveal]', staggerDelay: 120, duration: 700 });

  return (
    <section className="sec-proposito">
      <div className="sec-proposito__container">
        {/* Columna izquierda */}
        <div className="sec-proposito__text" ref={textRef}>
          <p className="sec-proposito__eyebrow" data-reveal>Por qué existimos</p>
          <h2 className="sec-proposito__heading" data-reveal>
            Cada local es un momento de verdad para tu marca.
          </h2>
          <div className="sec-proposito__divider" data-reveal />
          <p className="sec-proposito__lead" data-reveal>
            La imagen de una empresa no termina en el logo ni en el manual de identidad. Termina — o se confirma — en el espacio físico donde el consumidor la experimenta por primera vez.
          </p>

        </div>

        {/* Columna derecha — panel de stats */}
        <div className="sec-proposito__panel" ref={panelRef}>
          {stats.map((s, i) => (
            <div key={i} className="sec-proposito__stat" data-reveal>
              <span className="sec-proposito__stat-num">{s.num}</span>
              <span className="sec-proposito__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
