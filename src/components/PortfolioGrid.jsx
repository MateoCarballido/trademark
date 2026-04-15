import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './PortfolioGrid.css';
import { projects } from '../data/projects';

function PortfolioItem({ project, index }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const metaRef = useScrollReveal({ delay: index * 80, duration: 600 });

  const images = project.images || (project.image ? [project.image] : []);
  const hasCarousel = images.length > 1;

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (e, i) => {
    e.stopPropagation();
    setCurrentSlide(i);
  };

  return (
    <div className={`portfolio-art-card ${index % 2 !== 0 ? 'offset-card' : ''}`}>
      <div className="portfolio-art-image-container">
        <Link to="/proyectos" className="portfolio-art-image-link" aria-label={`Ver proyecto ${project.client}`}>
          <div className="carousel-wrapper">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${project.client} — vista ${i + 1}`}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                width="1000"
                height="625"
                className={`carousel-slide${i === currentSlide ? ' active' : ''}`}
              />
            ))}
          </div>
        </Link>

        {hasCarousel && (
          <>
            <button
              className="carousel-btn carousel-btn-prev"
              onClick={prevSlide}
              aria-label="Imagen anterior"
            >
              <ChevronLeft size={20} strokeWidth={1.5} aria-hidden="true" />
            </button>
            <button
              className="carousel-btn carousel-btn-next"
              onClick={nextSlide}
              aria-label="Imagen siguiente"
            >
              <ChevronRight size={20} strokeWidth={1.5} aria-hidden="true" />
            </button>

            <div className="carousel-dots" role="tablist" aria-label="Seleccionar imagen">
              {images.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === currentSlide}
                  aria-label={`Imagen ${i + 1}`}
                  className={`carousel-dot${i === currentSlide ? ' active' : ''}`}
                  onClick={(e) => goToSlide(e, i)}
                />
              ))}
            </div>

            <div className="carousel-counter" aria-live="polite" aria-atomic="true">
              {currentSlide + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      <div className="portfolio-art-meta" ref={metaRef}>
        <span className="portfolio-art-number">{project.id}</span>
        <div>
          <h3 className="portfolio-art-client">{project.client}</h3>
          <p className="portfolio-art-type">{project.type}</p>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioGrid({ projects: projectsProp }) {
  const headerRef = useScrollReveal({ selector: '[data-reveal]', staggerDelay: 100, duration: 700 });
  const items = projectsProp || projects;

  return (
    <section className="portfolio-section section">
      <div className="container">

        <div className="portfolio-header" ref={headerRef}>
          <h2 className="mega-title" data-reveal>PROYECTOS</h2>
          <div className="portfolio-header-content">
            <p className="subtitle" data-reveal>Del concepto al espacio real. Render y resultado, cara a cara.</p>
            <Link to="/proyectos" className="btn btn-primary d-desktop-only mt-4" data-reveal>
              Ver todos <ArrowRight size={24} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="portfolio-brutalist-grid">
          {items.map((project, idx) => (
            <PortfolioItem key={project.id} project={project} index={idx} />
          ))}
        </div>

        <div className="portfolio-all-cta">
          <Link to="/proyectos" className="portfolio-all-link">
            <span>Ver todos los proyectos</span>
            <ArrowRight size={20} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>

        <div className="portfolio-mobile-action d-mobile-only mt-4">
          <Link to="/proyectos" className="btn btn-primary">
            Ver todos <ArrowRight size={24} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
