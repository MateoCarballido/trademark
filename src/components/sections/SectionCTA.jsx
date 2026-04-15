import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './SectionCTA.css';

export default function SectionCTA() {
  const ref = useScrollReveal({ selector: '[data-reveal]', staggerDelay: 120, duration: 700 });

  return (
    <section className="sec-cta">
      <div className="sec-cta__container" ref={ref}>
        <h2 className="sec-cta__heading" data-reveal>
          Hablemos de tu próximo proyecto.
        </h2>
        <p className="sec-cta__lead" data-reveal>
          Contanos en qué estás trabajando y te mostramos cómo lo haríamos.
        </p>
        <div className="sec-cta__actions" data-reveal>
          <a
            href="https://wa.me/5491151857099?text=Hola%2C%20quiero%20hablar%20sobre%20un%20proyecto%20de%20imagen%20para%20mis%20locales."
            className="sec-cta__btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Iniciar conversación
          </a>
          <Link to="/proyectos" className="sec-cta__link-secondary">
            Ver trabajos
          </Link>
        </div>
      </div>
    </section>
  );
}
