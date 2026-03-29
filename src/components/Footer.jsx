import { Link } from 'react-router-dom'
import {
  Home,
  MapPin,
  Phone,
  Mail,
  Globe,
  ExternalLink,
} from 'lucide-react'
import './Footer.css'

const QUICK_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Colivings Zaragoza', href: '/colivings-zaragoza' },
  { label: 'Por que Coliving', href: '/por-que-coliving' },
  { label: 'Blog', href: '/blog' },
]

const SERVICES_LINKS = [
  { label: 'Consulting', href: '/consulting' },
  { label: 'Reformas', href: '/reformas' },
  { label: 'Gestion Zaragoza', href: '/gestion-alquiler-habitaciones-zaragoza' },
  { label: 'Gestion Madrid', href: '/gestion-alquiler-habitaciones-madrid' },
]

const LEGAL_LINKS = [
  { label: 'Aviso legal', href: '/aviso-legal' },
  { label: 'Politica de privacidad', href: '/politica-de-privacidad' },
]

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo" aria-label="HOM.ESTATE">
            <Home size={22} strokeWidth={2.5} />
            HOM<span>.</span>ESTATE
          </Link>
          <p>
            Nos especializamos en optimizar el rendimiento de sus activos
            inmobiliarios a traves de estrategias avanzadas y un enfoque
            integral.
          </p>
          <div className="footer-social">
            <a href="https://www.hom.estate" aria-label="Web" target="_blank" rel="noopener noreferrer">
              <Globe size={18} />
            </a>
            <a href="https://www.hom.estate" aria-label="Enlace externo" target="_blank" rel="noopener noreferrer">
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4>Enlaces</h4>
          <ul>
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Servicios</h4>
          <ul>
            {SERVICES_LINKS.map((link) => (
              <li key={link.label}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contacto</h4>
          <ul className="footer-contact">
            <li>
              <MapPin size={16} className="footer-contact-icon" />
              <span>7 Calle Tomas Breton, Zaragoza 50005, ES</span>
            </li>
            <li>
              <Phone size={16} className="footer-contact-icon" />
              <a href="tel:+34636155847">636 155 847</a>
            </li>
            <li>
              <Mail size={16} className="footer-contact-icon" />
              <a href="mailto:info@hom.estate">info@hom.estate</a>
            </li>
          </ul>
          <ul className="footer-legal">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2024 HOM.ESTATE. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer
