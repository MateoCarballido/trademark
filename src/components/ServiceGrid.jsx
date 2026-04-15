import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import LetterSwapPingPong from './LetterSwap';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './ServiceGrid.css';

export default function ServiceGrid() {
  const headerRef = useScrollReveal({ selector: '[data-reveal]', staggerDelay: 100, duration: 700 });
  const listRef = useScrollReveal({ selector: '[data-reveal]', staggerDelay: 80, translateY: 24, duration: 600 });

  const services = [
    {
      id: "01",
      title: "Diseño & Branding",
      desc: "Sistemas visuales reconocibles, consistentes y memorables.",
      link: "/servicios"
    },

    {
      id: "02",
      title: "Montajes Comerciales",
      desc: "Transformamos locales vacíos en experiencias completas.",
      link: "/servicios"
    },
    {
      id: "03",
      title: "Estrategia Visual",
      desc: "Garantizamos que tu marca se vea impecable siempre.",
      link: "/servicios"
    }
  ];

  return (
    <section className="service-section section section-dark">
      <div className="container">
        <div className="service-header" ref={headerRef}>
          <h2 className="mega-title" data-reveal>SERVICIOS</h2>
          <p className="subtitle" data-reveal>Tres capacidades, un solo equipo.<br />Del concepto a la instalación.</p>
        </div>

        <div className="service-list" ref={listRef}>
          {services.map(service => (
            <Link to={service.link} className="service-list-item hover-underline" key={service.id} data-reveal>
              <div className="service-list-number">{service.id}</div>
              <LetterSwapPingPong
                label={service.title}
                className="service-list-title"
                staggerFrom="first"
              />
              <p className="service-list-desc">{service.desc}</p>
              <div className="service-list-arrow" aria-hidden="true"><ArrowRight size={32} /></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
