import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Key, BarChart3, FileText, Headphones, Phone, CheckCircle, ArrowRight } from 'lucide-react'
import './GestionZaragoza.css'

const COLIVINGS = [
  {
    name: 'Coliving CA53.1',
    img: '/images/colivings-zaragoza/coliving-01.webp',
    desc: 'Coliving en el centro de Zaragoza, zona residencial-universitaria, ideal para estudiantes o trabajadores del hospital ya que ambos están a 5 minutos.',
  },
  {
    name: 'Coliving PSA31',
    img: '/images/colivings-zaragoza/coliving-02.webp',
    desc: 'Coliving premium en Paseo de Sagasta, zona residencial-comercial, una de las calles más importantes de la ciudad, con todo lo que necesitas a 5 minutos.',
  },
  {
    name: 'Coliving TB11',
    img: '/images/colivings-zaragoza/coliving-03.webp',
    desc: 'Coliving en zona centro-universidad en Zaragoza, perfecto para trabajadores de hospital, temporales o estudiantes. Todos los servicios en menos de 5 min.',
  },
  {
    name: 'Coliving CA47-49',
    img: '/images/colivings-zaragoza/coliving-04.webp',
    desc: 'Coliving en el centro de Zaragoza, zona residencial-universitaria, ideal para estudiantes o trabajadores del hospital ya que ambos están a 5 minutos.',
  },
  {
    name: 'Coliving JJR5',
    img: '/images/colivings-zaragoza/coliving-05.webp',
    desc: 'Exclusivo coliving de solo tres habitaciones en Zona centro - universidad muy próximo a hospitales.',
  },
  {
    name: 'Coliving PC29',
    img: '/images/colivings-zaragoza/coliving-06.webp',
    desc: 'Coliving en la mejor calle universitaria de Zaragoza, Pedro Cerbuna, una calle llena de ambiente y vida universitaria con todo tipo de recursos.',
  },
  {
    name: 'Coliving STDJ20',
    img: '/images/colivings-zaragoza/coliving-07.webp',
    desc: 'Coliving en zona residencial, zona universitaria. Ideal para estudiantes o trabajadores del hospital ya que ambos están a 7 minutos andando.',
  },
  {
    name: 'Coliving CA53.P',
    img: '/images/colivings-zaragoza/coliving-08.webp',
    desc: 'Coliving en el centro de Zaragoza, zona residencial-universitaria, ideal para estudiantes o trabajadores del hospital ya que ambos están a 5 minutos.',
  },
  {
    name: 'LOFT CA12',
    img: '/images/colivings-zaragoza/coliving-09.webp',
    desc: 'Acogedor loft en plena zona residencial-universitaria de Zaragoza, un concepto independiente y único decorado hasta el mínimo detalle.',
  },
]

const SERVICES = [
  { icon: Key, title: 'Gestión integral', desc: 'Desde la búsqueda de inquilinos hasta el mantenimiento, nos encargamos de todo el proceso.' },
  { icon: BarChart3, title: 'Maximización de renta', desc: 'Análisis continuo del mercado para asegurar que su propiedad esté al precio óptimo.' },
  { icon: FileText, title: 'Gestión documental', desc: 'Contratos, facturas, seguros y documentación legal gestionada por profesionales.' },
  { icon: Headphones, title: 'Atención 24/7', desc: 'Servicio de atención permanente para resolver cualquier incidencia de forma rápida.' },
]

const STATS = [
  { value: '+50', label: 'Propiedades gestionadas' },
  { value: '98%', label: 'Tasa de ocupación' },
  { value: '+15%', label: 'Rentabilidad media' },
  { value: '24/7', label: 'Soporte al inquilino' },
]

const VENTAJAS = [
  'Selección rigurosa de inquilinos',
  'Gestión de incidencias incluida',
  'Informes de rentabilidad mensuales',
  'Optimización fiscal de sus ingresos',
  'Sin preocupaciones para el propietario',
  'Contratos y documentación legal',
]

function ColivingCard({ coliving, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-30%', '30%'])

  return (
    <motion.div
      ref={ref}
      className="coliving-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <div className="coliving-card-img">
        <div className="coliving-card-img-inner">
          <motion.img src={coliving.img} alt={coliving.name} loading="lazy" style={{ y }} />
        </div>
      </div>
      <div className="coliving-card-info">
        <h3>{coliving.name}</h3>
        <p>{coliving.desc}</p>
        <a href="#contacto" className="coliving-card-link" aria-label={`Ver ${coliving.name}`}>
          <ArrowRight size={18} />
        </a>
      </div>
    </motion.div>
  )
}

function PortalSVG() {
  return (
    <motion.div
      className="gz-portal-illustration"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
    >
      <svg
        className="gz-portal-svg"
        viewBox="0 0 500 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Portal edificio HOM.ESTATE"
      >
        {/* Building outline */}
        <rect x="50" y="40" width="400" height="660" rx="4" stroke="#1B2A4A" strokeWidth="3" fill="none" />

        {/* Top cornice decoration */}
        <line x1="40" y1="40" x2="460" y2="40" stroke="#1B2A4A" strokeWidth="4" />
        <line x1="45" y1="32" x2="455" y2="32" stroke="#1B2A4A" strokeWidth="2" />

        {/* Decorative top element */}
        <path d="M 220,32 L 250,10 L 280,32" stroke="#1B2A4A" strokeWidth="2.5" fill="none" />
        <circle cx="250" cy="10" r="5" stroke="#1B2A4A" strokeWidth="1.5" fill="none" />

        {/* Upper floor windows - row of 3 small arched windows */}
        {[130, 250, 370].map((cx) => (
          <g key={`upper-${cx}`}>
            <path
              d={`M ${cx - 35},160 L ${cx - 35},100 A 35 35 0 0 1 ${cx + 35},100 L ${cx + 35},160`}
              stroke="#1B2A4A" strokeWidth="2.5" fill="none"
            />
            <line x1={cx} y1="100" x2={cx} y2="160" stroke="#1B2A4A" strokeWidth="1.2" />
            <line x1={cx - 35} y1="130" x2={cx + 35} y2="130" stroke="#1B2A4A" strokeWidth="1.2" />
          </g>
        ))}

        {/* Horizontal band between floors */}
        <line x1="50" y1="185" x2="450" y2="185" stroke="#1B2A4A" strokeWidth="2" />
        <line x1="50" y1="192" x2="450" y2="192" stroke="#1B2A4A" strokeWidth="1" />

        {/* Middle floor windows - 2 arched windows */}
        {[175, 325].map((cx) => (
          <g key={`mid-${cx}`}>
            <path
              d={`M ${cx - 45},310 L ${cx - 45},240 A 45 45 0 0 1 ${cx + 45},240 L ${cx + 45},310`}
              stroke="#1B2A4A" strokeWidth="2.5" fill="none"
            />
            <line x1={cx} y1="240" x2={cx} y2="310" stroke="#1B2A4A" strokeWidth="1.2" />
            <line x1={cx - 45} y1="275" x2={cx + 45} y2="275" stroke="#1B2A4A" strokeWidth="1.2" />
            {/* Window sill */}
            <line x1={cx - 50} y1="312" x2={cx + 50} y2="312" stroke="#1B2A4A" strokeWidth="2" />
          </g>
        ))}

        {/* Second horizontal band */}
        <line x1="50" y1="340" x2="450" y2="340" stroke="#1B2A4A" strokeWidth="2" />
        <line x1="50" y1="347" x2="450" y2="347" stroke="#1B2A4A" strokeWidth="1" />

        {/* Logo area */}
        <g className="gz-portal-logo-group">
          {/* Shield / crest shape */}
          <path
            d="M 210,380 L 210,400 C 210,430 230,450 250,460 C 270,450 290,430 290,400 L 290,380 Z"
            stroke="#1B2A4A" strokeWidth="2" fill="none"
          />
          <text x="250" y="425" textAnchor="middle" fill="#1B2A4A" fontSize="14" fontWeight="700" fontFamily="Poppins, sans-serif">
            HOM
          </text>
          {/* HOM.ESTATE text below crest */}
          <text x="250" y="490" textAnchor="middle" fill="#1B2A4A" fontSize="22" fontWeight="800" fontFamily="Poppins, sans-serif" letterSpacing="3">
            HOM.ESTATE
          </text>
        </g>

        {/* Main portal arch */}
        <path
          d="M 150,700 L 150,560 A 100 100 0 0 1 350,560 L 350,700"
          stroke="#1B2A4A" strokeWidth="3.5" fill="none"
        />
        {/* Inner arch line */}
        <path
          d="M 160,700 L 160,565 A 90 90 0 0 1 340,565 L 340,700"
          stroke="#1B2A4A" strokeWidth="1.5" fill="none"
        />

        {/* Portal doors */}
        <line x1="250" y1="560" x2="250" y2="700" stroke="#1B2A4A" strokeWidth="2" />

        {/* Left door panels */}
        <rect x="170" y="580" width="70" height="50" rx="3" stroke="#1B2A4A" strokeWidth="1.2" fill="none" />
        <rect x="170" y="640" width="70" height="50" rx="3" stroke="#1B2A4A" strokeWidth="1.2" fill="none" />

        {/* Right door panels */}
        <rect x="260" y="580" width="70" height="50" rx="3" stroke="#1B2A4A" strokeWidth="1.2" fill="none" />
        <rect x="260" y="640" width="70" height="50" rx="3" stroke="#1B2A4A" strokeWidth="1.2" fill="none" />

        {/* Door handles */}
        <circle cx="235" cy="635" r="3" fill="#1B2A4A" />
        <circle cx="265" cy="635" r="3" fill="#1B2A4A" />

        {/* Transom window above doors (semi-circle divided) */}
        <path
          d="M 165,560 A 85 50 0 0 1 335,560"
          stroke="#1B2A4A" strokeWidth="1.2" fill="none"
        />
        <line x1="250" y1="515" x2="250" y2="560" stroke="#1B2A4A" strokeWidth="1" />
        <line x1="200" y1="525" x2="200" y2="560" stroke="#1B2A4A" strokeWidth="0.8" />
        <line x1="300" y1="525" x2="300" y2="560" stroke="#1B2A4A" strokeWidth="0.8" />

        {/* Pilasters on sides of portal */}
        <rect x="130" y="510" width="20" height="190" stroke="#1B2A4A" strokeWidth="2" fill="none" />
        <rect x="350" y="510" width="20" height="190" stroke="#1B2A4A" strokeWidth="2" fill="none" />

        {/* Pilaster capitals */}
        <rect x="126" y="505" width="28" height="8" rx="2" stroke="#1B2A4A" strokeWidth="1.5" fill="none" />
        <rect x="346" y="505" width="28" height="8" rx="2" stroke="#1B2A4A" strokeWidth="1.5" fill="none" />

        {/* Base plinth */}
        <line x1="50" y1="700" x2="450" y2="700" stroke="#1B2A4A" strokeWidth="4" />
      </svg>
    </motion.div>
  )
}

function GestionZaragoza() {
  return (
    <main className="gz-page">

      {/* HERO */}
      <section className="gz-hero">
        <div className="gz-hero-bg">
          <img src="/images/colivings-zaragoza/coliving-01.webp" alt="" aria-hidden="true" />
          <div className="gz-hero-overlay" />
        </div>
        <motion.div
          className="gz-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="gz-hero-tag">Zaragoza</span>
          <h1>Gestión integral de<br /><span className="gz-yellow">alquiler de habitaciones</span></h1>
          <p>Especialistas en gestión integral y alquiler de habitaciones en Zaragoza. Aumentamos su rentabilidad sin preocupaciones.</p>
          <a href="tel:+34636155847" className="gz-btn-primary">
            <Phone size={18} /> Solicitar valoración gratuita
          </a>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="gz-stats">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            className="gz-stat"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </motion.div>
        ))}
      </section>

      {/* COLIVINGS GRID */}
      <section className="gz-building">
        <motion.div
          className="gz-building-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Nuestros colivings en Zaragoza</h2>
          <p>Vive en los mejores espacios del centro de la ciudad</p>
        </motion.div>

        <div className="gz-colivings-grid">
          {COLIVINGS.map((c, i) => (
            <ColivingCard key={c.name} coliving={c} index={i} />
          ))}
        </div>

        {/* Portal illustration */}
        <PortalSVG />
      </section>

      {/* SERVICES */}
      <section className="gz-services">
        <div className="gz-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Nuestros Servicios
          </motion.h2>
          <div className="gz-services-grid">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                className="gz-service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="gz-service-icon"><s.icon size={26} /></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VENTAJAS */}
      <section className="gz-ventajas">
        <div className="gz-container gz-ventajas-inner">
          <motion.div
            className="gz-ventajas-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2>¿Por qué elegir HOM.ESTATE en Zaragoza?</h2>
            <p>Somos especialistas en la gestión de habitaciones y colivings en Zaragoza. Nuestro equipo se encarga de todo para que usted obtenga la máxima rentabilidad sin ninguna preocupación.</p>
            <ul className="gz-ventajas-list">
              {VENTAJAS.map((v, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <CheckCircle size={18} /> {v}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="gz-ventajas-img"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src="/images/colivings-zaragoza/coliving-04.webp" alt="Coliving Zaragoza interior" loading="lazy" />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="gz-cta">
        <motion.div
          className="gz-cta-inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Confíenos la gestión de su propiedad en Zaragoza</h2>
          <p>Solicite una valoración gratuita y descubra cuánto puede rendir su propiedad.</p>
          <a href="tel:+34636155847" className="gz-btn-primary">
            <Phone size={18} /> +34 636 155 847
          </a>
        </motion.div>
      </section>

    </main>
  )
}

export default GestionZaragoza
