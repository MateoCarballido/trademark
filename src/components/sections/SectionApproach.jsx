import { useScrollReveal } from '../../hooks/useScrollReveal';
import './SectionApproach.css';

const cards = [
  {
    num: '01',
    title: 'Interpretamos tu brief',
    desc: 'Tomamos cualquier lineamiento — global o local, simple o complejo — y lo traducimos a la realidad física del espacio.',
  },
  {
    num: '02',
    title: 'Producción propia',
    desc: 'Conocimiento de materiales, formatos y posibilidades que no se improvisa. Producción propia que garantiza que lo que se diseña es lo que se instala.',
  },
  {
    num: '03',
    title: 'Nos hacemos cargo del resultado',
    desc:  'Un solo equipo, una sola responsabilidad — desde el primer boceto hasta la foto de entrega.',
  },
];

export default function SectionApproach() {
  const headerRef = useScrollReveal({ selector: '[data-reveal]', staggerDelay: 100, duration: 700 });
  const gridRef = useScrollReveal({ selector: '[data-reveal]', staggerDelay: 120, duration: 700 });

  return (
    <section className="sec-approach">
      <div className="sec-approach__container">
        <div className="sec-approach__header" ref={headerRef}>
          <p className="sec-approach__eyebrow" data-reveal>Nuestro approach</p>
          <h2 className="sec-approach__heading" data-reveal>
            Ejecutamos ideas.
          </h2>
          <div className="sec-approach__divider" data-reveal />
          <p className="sec-approach__lead" data-reveal>
            Hay una diferencia entre un diseño aprobado y un local que queda bien. Esa diferencia es operativa: materiales, espacios, tiempos, logística.
          </p>
        </div>

        <div className="sec-approach__grid" ref={gridRef}>
          {cards.map((card) => (
            <div key={card.num} className="sec-approach__card" data-reveal>
              <span className="sec-approach__card-num">{card.num}</span>
              <h3 className="sec-approach__card-title">{card.title}</h3>
              <p className="sec-approach__card-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
