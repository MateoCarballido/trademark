import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { allProjects } from '../data/allProjects';
import PageSEO from '../components/PageSEO';
import './ProyectoDetail.css';

export default function ProyectoDetail() {
  const { slug } = useParams();
  const project = allProjects.find((p) => p.slug === slug);
  const [slide, setSlide] = useState(0);

  if (!project) return <Navigate to="/404" replace />;

  const { images } = project;
  const hasMany = images.length > 1;

  const prev = () => setSlide((s) => (s - 1 + images.length) % images.length);
  const next = () => setSlide((s) => (s + 1) % images.length);

  const seoTitle = `${project.client} — ${project.project}`;
  const seoDescription = `${project.challenge} ${project.result}`.slice(0, 155);

  return (
    <div className="proyecto-detail" style={{ paddingTop: 'var(--nav-height)', background: 'var(--bg-dark)' }}>
      <PageSEO
        title={seoTitle}
        description={seoDescription}
        canonical={`/proyectos/${project.slug}`}
        ogType="article"
        breadcrumbs={[
          { name: 'Inicio', path: '/' },
          { name: 'Proyectos', path: '/proyectos' },
          { name: project.client, path: `/proyectos/${project.slug}` },
        ]}
      />

      {/* Hero carousel */}
      <div className="proyecto-hero-carousel">
        <div className="proyecto-hero-slides">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${project.client} — ${project.project} ${i + 1}`}
              loading={i === 0 ? 'eager' : 'lazy'}
              fetchpriority={i === 0 ? 'high' : undefined}
              decoding={i === 0 ? 'sync' : 'async'}
              className={`proyecto-hero-slide${i === slide ? ' active' : ''}`}
            />
          ))}
        </div>

        {hasMany && (
          <>
            <button className="proyecto-carousel-btn proyecto-carousel-prev" onClick={prev} aria-label="Imagen anterior">
              <ChevronLeft size={24} strokeWidth={1.5} aria-hidden="true" />
            </button>
            <button className="proyecto-carousel-btn proyecto-carousel-next" onClick={next} aria-label="Imagen siguiente">
              <ChevronRight size={24} strokeWidth={1.5} aria-hidden="true" />
            </button>

            <div className="proyecto-carousel-counter">{slide + 1} / {images.length}</div>

            <div className="proyecto-carousel-dots">
              {images.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Imagen ${i + 1}`}
                  className={`proyecto-carousel-dot${i === slide ? ' active' : ''}`}
                  onClick={() => setSlide(i)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="container proyecto-body">
        <Link to="/proyectos" className="proyecto-back">
          <ArrowLeft size={18} aria-hidden="true" /> Volver a proyectos
        </Link>

        <div className="proyecto-header">
          <span className="proyecto-num">{project.id}</span>
          <div>
            <h1>{project.client}</h1>
            <p className="proyecto-project">{project.project}</p>
            <p className="proyecto-type">{project.type}</p>
          </div>
        </div>

        <div className="proyecto-csr-grid">
          <div className="proyecto-csr-block">
            <h3>El desafío</h3>
            <p>{project.challenge}</p>
          </div>
          <div className="proyecto-csr-block">
            <h3>La solución</h3>
            <p>{project.solution}</p>
          </div>
          <div className="proyecto-csr-block">
            <h3>El resultado</h3>
            <p>{project.result}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
