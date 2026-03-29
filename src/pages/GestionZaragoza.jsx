import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Key, BarChart3, FileText, Headphones, Phone, CheckCircle } from 'lucide-react'
import './GestionZaragoza.css'

const WINDOWS = [
  { img: '/images/colivings-zaragoza/coliving-01.webp', alt: 'Habitación coliving Zaragoza' },
  { img: '/images/colivings-zaragoza/coliving-02.webp', alt: 'Salón coliving Zaragoza' },
  { img: '/images/colivings-zaragoza/coliving-03.webp', alt: 'Cocina coliving Zaragoza' },
  { img: '/images/colivings-zaragoza/coliving-04.webp', alt: 'Baño coliving Zaragoza' },
  { img: '/images/colivings-zaragoza/coliving-05.webp', alt: 'Zona común coliving Zaragoza' },
  { img: '/images/colivings-zaragoza/coliving-06.webp', alt: 'Dormitorio coliving Zaragoza' },
]

const PORTAL_IMGS = [
  { img: '/images/colivings-zaragoza/coliving-07.webp', alt: 'Coliving Zaragoza' },
  { img: '/images/colivings-zaragoza/coliving-08.webp', alt: 'Espacio coliving' },
  { img: '/images/colivings-zaragoza/coliving-09.webp', alt: 'Interior coliving' },
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

function BuildingWindow({ img, alt, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-40%', '40%'])

  return (
    <motion.div
      ref={ref}
      className="building-window"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      <div className="bw-opening">
        <div className="bw-glass">
          <motion.img src={img} alt={alt} loading="lazy" style={{ y }} />
          <div className="bw-reflection" />
        </div>
        <div className="bw-frame-v" />
        <div className="bw-frame-h" />
        <svg className="bw-arch" viewBox="0 0 280 380" fill="none" aria-hidden="true">
          <path d="M 0,380 L 0,140 C 0,62 62,0 140,0 C 218,0 280,62 280,140 L 280,380"
            stroke="#c8c2b6" strokeWidth="18" fill="none" />
          <path d="M 9,380 L 9,140 C 9,67 67,9 140,9 C 213,9 271,67 271,140 L 271,380"
            stroke="#e0dbd2" strokeWidth="3" fill="none" />
        </svg>
      </div>
    </motion.div>
  )
}

function PortalImage({ img, alt, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-30%', '30%'])

  return (
    <motion.div
      ref={ref}
      className="portal-img-wrap"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="portal-img-inner">
        <motion.img src={img} alt={alt} loading="lazy" style={{ y }} />
        <div className="portal-img-overlay" />
      </div>
    </motion.div>
  )
}

function GestionZaragoza() {
  return (
    <main className="gz-page">

      {/* ── HERO ── */}
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

      {/* ── STATS ── */}
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

      {/* ── BUILDING FACADE ── */}
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

        {/* Facade wall texture */}
        <div className="gz-facade">
          {/* Cornice top */}
          <div className="gz-cornice" />

          {/* Row of windows */}
          <div className="gz-windows-row">
            {WINDOWS.map((w, i) => (
              <BuildingWindow key={i} img={w.img} alt={w.alt} index={i} />
            ))}
          </div>

          {/* Middle band */}
          <div className="gz-band">
            <div className="gz-band-line" />
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              HOM.ESTATE · Colivings Zaragoza
            </motion.span>
            <div className="gz-band-line" />
          </div>

          {/* Portal row */}
          <div className="gz-portal-row">
            {/* Side images */}
            <PortalImage img={PORTAL_IMGS[0].img} alt={PORTAL_IMGS[0].alt} index={0} />

            {/* Central portal arch */}
            <motion.div
              className="gz-portal"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="gz-portal-inner">
                <div className="gz-portal-arch-img">
                  <PortalImage img={PORTAL_IMGS[1].img} alt={PORTAL_IMGS[1].alt} index={1} />
                </div>
                <svg className="gz-portal-arch-frame" viewBox="0 0 320 460" fill="none" aria-hidden="true">
                  <path d="M 0,460 L 0,160 C 0,71 71,0 160,0 C 249,0 320,71 320,160 L 320,460"
                    stroke="#c8c2b6" strokeWidth="22" fill="none" />
                  <path d="M 11,460 L 11,160 C 11,77 77,11 160,11 C 243,11 309,77 309,160 L 309,460"
                    stroke="#e0dbd2" strokeWidth="4" fill="none" />
                </svg>
                <div className="gz-portal-frame-v" />
                <div className="gz-portal-plaque">
                  <span>ENTRADA</span>
                </div>
              </div>
            </motion.div>

            <PortalImage img={PORTAL_IMGS[2].img} alt={PORTAL_IMGS[2].alt} index={2} />
          </div>

          {/* Base / socle */}
          <div className="gz-socle">
            <div className="gz-socle-inner" />
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
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

      {/* ── VENTAJAS ── */}
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

      {/* ── CTA ── */}
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
