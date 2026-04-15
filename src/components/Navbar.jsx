import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, X } from 'lucide-react';
import logoLight from '../assets/trademark-logo-light.png';
import logoDark from '../assets/trademark-logo-dark.png';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const usesDarkVariant = location.pathname.startsWith('/proyectos') || location.pathname === '/nosotros';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${usesDarkVariant ? 'navbar-dark-variant' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo" onClick={() => window.scrollTo(0, 0)}>
          <img
            src={usesDarkVariant ? logoDark : logoLight}
            alt="TradeMark BrandCare"
            className="nav-logo-image"
          />
        </Link>

        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/servicios" className={`nav-link${location.pathname === '/servicios' ? ' active' : ''}`} aria-current={location.pathname === '/servicios' ? 'page' : undefined} onClick={() => window.scrollTo(0, 0)}  >Servicios</Link>
          <Link to="/proyectos" className={`nav-link${location.pathname === '/proyectos' ? ' active' : ''}`} aria-current={location.pathname === '/proyectos' ? 'page' : undefined} onClick={() => window.scrollTo(0, 0)}>Proyectos</Link>
          <Link to="/nosotros" className={`nav-link${location.pathname === '/nosotros' ? ' active' : ''}`} aria-current={location.pathname === '/nosotros' ? 'page' : undefined} onClick={() => window.scrollTo(0, 0)}>Nosotros</Link>
          <Link to="/clientes" className={`nav-link${location.pathname === '/clientes' ? ' active' : ''}`} aria-current={location.pathname === '/clientes' ? 'page' : undefined} onClick={() => window.scrollTo(0, 0)}>Clientes</Link>
          <Link to="/contacto" className={`btn btn-primary nav-cta${location.pathname === '/contacto' ? ' active' : ''}`} aria-current={location.pathname === '/contacto' ? 'page' : undefined} onClick={() => window.scrollTo(0, 0)}>
            Contacto
          </Link>
        </div>

        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={28} aria-hidden="true" /> : <List size={28} aria-hidden="true" />}
        </button>
      </div>
    </nav>
  );
}
