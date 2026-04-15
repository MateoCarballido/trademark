import PageSEO from '../components/PageSEO';
import { useState } from 'react';
import './Contacto.css';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { contact } from '../data/contact';

const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID?.trim();
const FORMSPREE_ENDPOINT = FORMSPREE_FORM_ID
  ? `https://formspree.io/f/${FORMSPREE_FORM_ID}`
  : null;
const WHATSAPP_FALLBACK_MESSAGE = encodeURIComponent(
  'Hola, quiero hablar sobre un proyecto de imagen para mis locales.'
);

export default function Contacto() {
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage('');

    if (!FORMSPREE_ENDPOINT) {
      setStatus('error');
      setErrorMessage('El formulario todavia no esta configurado para recibir consultas.');
      return;
    }

    setStatus('sending');

    try {
      const formData = Object.fromEntries(new FormData(e.target));
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
        setErrorMessage('No pudimos enviar tu consulta en este momento. Por favor intentá nuevamente.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('No pudimos enviar tu consulta en este momento. Por favor intentá nuevamente.');
    }
  }

  const whatsappFallbackHref = `https://wa.me/${contact.whatsappNumber}?text=${WHATSAPP_FALLBACK_MESSAGE}`;

  return (
    <div className="page-contacto" style={{ paddingTop: 'var(--nav-height)' }}>
      <PageSEO
        title="Contacto — Consultanos sobre tu Proyecto"
        description="Consultanos sobre tu proyecto de comunicación visual para locales. Respondemos en 24 horas con una propuesta concreta. Buenos Aires, Argentina."
        canonical="/contacto"
        breadcrumbs={[{ name: 'Inicio', path: '/' }, { name: 'Contacto', path: '/contacto' }]}
      />
      <section className="section bg-light">
        <div className="container">
          <div className="contacto-header">
            <h1>Contacto Consultanos sobre tu Proyecto Visual</h1>
            <p className="subtitle">Contanos qué necesitás y te respondemos en 24 horas con una propuesta concreta.</p>
          </div>

          <div className="contacto-grid">
            <div className="contacto-form-container">
              <form className="contacto-form" onSubmit={handleSubmit}>
                <div className="form-group row">
                  <div className="col">
                    <label>Nombre completo *</label>
                    <input type="text" name="nombre" required placeholder="Tu nombre" />
                  </div>
                  <div className="col">
                    <label>Empresa *</label>
                    <input type="text" name="empresa" required placeholder="Nombre de tu empresa" />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col">
                    <label>Email *</label>
                    <input type="email" name="email" required placeholder="tu@email.com" />
                  </div>
                  <div className="col">
                    <label>Teléfono</label>
                    <input type="tel" name="telefono" placeholder="+54 9 11 0000 0000" />
                  </div>
                </div>

                <div className="form-group">
                  <label>¿Qué servicio te interesa? *</label>
                  <select name="servicio" required>
                    <option value="">Seleccioná un servicio</option>
                    <option value="montajes">Montajes e Instalaciones</option>
                    <option value="carteleria">Cartelería Exterior & Señalética</option>
                    <option value="diseno">Diseño & Branding</option>
                    <option value="comunicacion">Comunicación Visual Integral</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Contanos brevemente sobre tu proyecto *</label>
                  <textarea name="mensaje" rows="4" required placeholder="Detalles del local, tiempos, etc."></textarea>
                </div>

                <div className="form-group">
                  <label>¿Cómo nos conociste?</label>
                  <select name="como_nos_conociste">
                    <option value="">Seleccioná una opción</option>
                    <option value="google">Google / Búsqueda online</option>
                    <option value="instagram">Instagram</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="recomendacion">Recomendación de un colega</option>
                    <option value="ya-cliente">Ya soy cliente</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Enviando…' : 'Enviar consulta'} <Send size={18} />
                </button>

                {!FORMSPREE_ENDPOINT && (
                  <div className="form-feedback warning">
                    Falta configurar Formspree. Cargá <code>VITE_FORMSPREE_FORM_ID</code> para activar este formulario.
                  </div>
                )}

                {status === 'success' && (
                  <div className="form-feedback success">
                    ✓ Mensaje enviado. Te respondemos en menos de 24 horas.
                  </div>
                )}
                {status === 'error' && (
                  <div className="form-feedback error">
                    {errorMessage || 'Hubo un error al enviar. Por favor intentá nuevamente o escribinos directamente.'}
                  </div>
                )}

                <a
                  href={whatsappFallbackHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contacto-whatsapp-fallback"
                >
                  Preferís resolverlo ahora? Escribinos por WhatsApp
                </a>
              </form>
            </div>

            <div className="contacto-info-sidebar">
              <h3>Información de Contacto</h3>
              <p style={{ marginBottom: '2rem', color: 'var(--secondary)' }}>
                También podés comunicarte con nosotros directamente por estos canales.
              </p>

              <ul className="contacto-list">
                <li>
                  <Mail className="info-icon" />
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:info@trademark.com.ar">info@trademark.com.ar</a>
                  </div>
                </li>
                <li>
                  <Phone className="info-icon" />
                  <div>
                    <strong>Teléfono</strong>
                    <a href="tel:+5491151857099">+54 9 11 5185-7099</a>
                  </div>
                </li>
                <li>
                  <MessageCircle className="info-icon" />
                  <div>
                    <strong>WhatsApp</strong>
                    <a href={whatsappFallbackHref} target="_blank" rel="noopener noreferrer">
                      Escribinos por WhatsApp
                    </a>
                  </div>
                </li>
                <li>
                  <MapPin className="info-icon" />
                  <div>
                    <strong>Ubicación</strong>
                    <span>Buenos Aires, Argentina</span>
                  </div>
                </li>
              </ul>

              <div className="contacto-hours">
                <strong>Horario de atención:</strong><br />
                Lunes a viernes de 8:00 a 17:00 hs.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
