import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem',
      background: 'var(--bg-dark)',
      paddingTop: 'var(--nav-height)'
    }}>
      <span style={{ fontFamily: 'var(--font-heading)', fontSize: '10rem', lineHeight: 1, color: 'transparent', WebkitTextStroke: '2px var(--accent)', display: 'block' }}>404</span>
      <h1 style={{ color: 'var(--bg-light)', marginBottom: '1rem' }}>Página no encontrada</h1>
      <p style={{ color: 'var(--text-on-dark)', marginBottom: '2rem', maxWidth: '400px' }}>
        Esta URL no existe. Puede que el enlace esté roto o que la página haya sido movida.
      </p>
      <Link to="/" className="btn btn-primary">
        Volver al inicio <ArrowRight size={20} aria-hidden="true" />
      </Link>
    </div>
  );
}
