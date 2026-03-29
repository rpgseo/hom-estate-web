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
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Ciudades', href: '#ciudades' },
  { label: 'Flex Living', href: '#flex-living' },
]

const SERVICES_LINKS = [
  { label: 'House Flipping', href: '#servicios' },
  { label: 'Buy to Rent', href: '#servicios' },
  { label: 'Property Management', href: '#servicios' },
  { label: 'Consulting', href: '#servicios' },
]

function Footer() {
  return (
    <footer id="contacto" className="footer" role="contentinfo">
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#inicio" className="logo" aria-label="HOM.ESTATE">
            <Home size={22} strokeWidth={2.5} />
            HOM<span>.</span>ESTATE
          </a>
          <p>
            Nos especializamos en optimizar el rendimiento de sus activos
            inmobiliarios a través de estrategias avanzadas y un enfoque
            integral.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Web">
              <Globe size={18} />
            </a>
            <a href="#" aria-label="Enlace externo">
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4>Enlaces</h4>
          <ul>
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Servicios</h4>
          <ul>
            {SERVICES_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
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
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2024 HOM.ESTATE. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer
