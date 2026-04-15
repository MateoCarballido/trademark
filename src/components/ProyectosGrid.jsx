import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './ProyectosGrid.css';

function ProjectCard({ project, index }) {
  const [slide, setSlide] = useState(0);
  const { images } = project;
  const hasMany = images.length > 1;
  const cardRef = useScrollReveal({
    delay: Math.min(index * 60, 360),
    duration: 600,
  });

  const prev = (e) => {
    e.stopPropagation();
    setSlide((s) => (s - 1 + images.length) % images.length);
  };

  const next = (e) => {
    e.stopPropagation();
    setSlide((s) => (s + 1) % images.length);
  };

  const goTo = (e, i) => {
    e.stopPropagation();
    setSlide(i);
  };

  return (
    <article className="pgrid-card" ref={cardRef}>
      <div className="pgrid-image-wrap">
        <Link to={`/proyectos/${project.slug}`} className="pgrid-link" aria-label={`Ver ${project.client} — ${project.project}`}>
          <div className="pgrid-slides">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${project.client} ${project.project} — ${i + 1}`}
                loading={i === 0 ? 'eager' : 'lazy'}
                className={`pgrid-slide${i === slide ? ' active' : ''}`}
              />
            ))}
          </div>
        </Link>

        {hasMany && (
          <>
            <button className="pgrid-btn pgrid-btn-prev" onClick={prev} aria-label="Anterior">
              <ChevronLeft size={18} strokeWidth={1.5} aria-hidden="true" />
            </button>
            <button className="pgrid-btn pgrid-btn-next" onClick={next} aria-label="Siguiente">
              <ChevronRight size={18} strokeWidth={1.5} aria-hidden="true" />
            </button>

            <div className="pgrid-counter">{slide + 1} / {images.length}</div>

            <div className="pgrid-dots" role="tablist">
              {images.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === slide}
                  aria-label={`Imagen ${i + 1}`}
                  className={`pgrid-dot${i === slide ? ' active' : ''}`}
                  onClick={(e) => goTo(e, i)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <Link to={`/proyectos/${project.slug}`} className="pgrid-meta">
        <span className="pgrid-type">{project.type}</span>
        <h3 className="pgrid-client">{project.client}</h3>
        <p className="pgrid-project">{project.project}</p>
      </Link>
    </article>
  );
}

export default function ProyectosGrid({ projects }) {
  return (
    <section className="pgrid-section">
      <div className="container">
        <div className="pgrid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
