import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDownRight, ArrowRight } from 'lucide-react';
import { animate, createTimeline, set } from 'animejs';
import './HomeHero.css';

const TITLES = ["PRECISA", "IMAGINA", "MERECE", "EXIGE"];
const INTERVAL = 2500;

export default function HomeHero() {
  const heroRef = useRef(null);
  const primaryCtaIconRef = useRef(null);
  const secondaryCtaIconRef = useRef(null);
  const slotRef = useRef(null);
  const isAnimating = useRef(false);
  const [current, setCurrent] = useState(0);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const hero = heroRef.current;
    if (!hero) return;
    // Set initial state before first paint to prevent flash
    set(hero.querySelectorAll('.hero-title-line'), { opacity: 0, translateY: 30 });
    set(hero.querySelector('.hero-details'), { opacity: 0, translateY: 20 });
    set(hero.querySelector('.hero-image-block'), { opacity: 0, scale: 0.97 });
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const hero = heroRef.current;
    if (!hero) return;

    const titleLines = hero.querySelectorAll('.hero-title-line');
    const details = hero.querySelector('.hero-details');
    const image = hero.querySelector('.hero-image-block');

    createTimeline({ defaults: { ease: 'outQuad' } })
      .add(titleLines, {
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        delay: 0,
      })
      .add(details, {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 700,
      }, '-=600')
      .add(image, {
        opacity: [0, 1],
        scale: [0.97, 1],
        duration: 900,
      }, '<');
  }, []);

  useEffect(() => {
    const el = slotRef.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const tick = () => {
      if (isAnimating.current) return;
      isAnimating.current = true;

      if (reduced) {
        setCurrent((c) => (c + 1) % TITLES.length);
        isAnimating.current = false;
        return;
      }

      animate(el, {
        translateY: [0, -80],
        opacity: [1, 0],
        duration: 380,
        ease: 'inQuad',
        onComplete: () => {
          setCurrent((c) => (c + 1) % TITLES.length);
          set(el, { translateY: 80, opacity: 0 });
          animate(el, {
            translateY: [80, 0],
            opacity: [0, 1],
            duration: 420,
            ease: 'outQuad',
            onComplete: () => { isAnimating.current = false; },
          });
        },
      });
    };

    const id = setInterval(tick, INTERVAL);
    return () => clearInterval(id);
  }, []);

  const animatePrimaryCta = (active) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!primaryCtaIconRef.current) return;

    animate(primaryCtaIconRef.current, {
      translateX: active ? 10 : 0,
      translateY: active ? 10 : 0,
      rotate: active ? -3 : 0,
      duration: active ? 340 : 260,
      ease: 'outQuad',
    });
  };

  const animateSecondaryCta = (active) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!secondaryCtaIconRef.current) return;

    animate(secondaryCtaIconRef.current, {
      translateX: active ? 10 : 0,
      duration: active ? 320 : 240,
      ease: 'outQuad',
    });
  };

  return (
    <section className="home-hero" ref={heroRef}>
      <div className="container hero-container">

        <div className="hero-text-content">
          <h1 className="mega-title">
            <div className="hero-title-line">
              TODO LO QUE<br />TU MARCA{' '}
              <span className="hero-title-slot">
                <span className="hero-title-stroke" ref={slotRef}>
                  {TITLES[current]}.
                </span>
              </span>
            </div>
          </h1>


          <div className="hero-details">
            <p className="hero-subtitle">
              Diseñamos, producimos e implementamos la comunicación visual que transforma tus puntos de venta en verdaderas experiencias de marca.
            </p>
            <div className="hero-actions pt-4">
              <Link
                to="/contacto"
                className="btn btn-primary hero-cta-primary"
                onMouseEnter={() => animatePrimaryCta(true)}
                onMouseLeave={() => animatePrimaryCta(false)}
                onFocus={() => animatePrimaryCta(true)}
                onBlur={() => animatePrimaryCta(false)}
              >
                <span className="hero-cta-primary__label">Hablemos</span>
                <span className="hero-cta-primary__icon" ref={primaryCtaIconRef}>
                  <ArrowDownRight size={24} aria-hidden="true" />
                </span>
              </Link>
              <Link
                to="/proyectos"
                className="btn btn-secondary hero-cta-secondary"
                onMouseEnter={() => animateSecondaryCta(true)}
                onMouseLeave={() => animateSecondaryCta(false)}
                onFocus={() => animateSecondaryCta(true)}
                onBlur={() => animateSecondaryCta(false)}
              >
                <span className="hero-cta-secondary__label">Ver nuestro trabajo</span>
                <span className="hero-cta-secondary__icon" ref={secondaryCtaIconRef}>
                  <ArrowRight size={24} aria-hidden="true" />
                </span>
              </Link>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
