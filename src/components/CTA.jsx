import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './CTA.css';

export default function CTA() {
  const ref = useScrollReveal({ selector: '[data-reveal]', staggerDelay: 120, duration: 700 });

  return (
    <section className="cta-section section section-dark">
      <div className="container">
        <div className="cta-content" ref={ref}>
          <h2 data-reveal>Tu próximo proyecto empieza con una conversación.</h2>
          <p data-reveal>Contanos qué necesitás y en 24hs te respondemos con una propuesta concreta.</p>
          <Link to="/contacto" className="btn btn-primary cta-btn" data-reveal>
            Iniciar mi proyecto <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
