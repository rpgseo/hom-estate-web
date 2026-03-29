import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Key, BarChart3, FileText, Headphones, Phone, CheckCircle, ArrowRight } from 'lucide-react'
import './GestionZaragoza.css'

const COLIVINGS = [
  {
    name: 'Coliving CA53.1',
    img: '/images/colivings-zaragoza/coliving-01.webp',
    desc: 'Centro de Zaragoza, zona residencial-universitaria, a 5 min del hospital.',
  },
  {
    name: 'Coliving PSA31',
    img: '/images/colivings-zaragoza/coliving-02.webp',
    desc: 'Premium en Paseo de Sagasta, zona residencial-comercial.',
  },
  {
    name: 'Coliving TB11',
    img: '/images/colivings-zaragoza/coliving-03.webp',
    desc: 'Zona centro-universidad, perfecto para trabajadores y estudiantes.',
  },
  {
    name: 'Coliving CA47-49',
    img: '/images/colivings-zaragoza/coliving-04.webp',
    desc: 'Centro de Zaragoza, ideal para estudiantes o trabajadores del hospital.',
  },
  {
    name: 'Coliving JJR5',
    img: '/images/colivings-zaragoza/coliving-05.webp',
    desc: 'Exclusivo coliving de tres habitaciones, zona centro-universidad.',
  },
  {
    name: 'Coliving PC29',
    img: '/images/colivings-zaragoza/coliving-06.webp',
    desc: 'Calle Pedro Cerbuna, ambiente y vida universitaria.',
  },
  {
    name: 'Coliving STDJ20',
    img: '/images/colivings-zaragoza/coliving-07.webp',
    desc: 'Zona residencial-universitaria, a 7 min andando del hospital.',
  },
  {
    name: 'Coliving CA53.P',
    img: '/images/colivings-zaragoza/coliving-08.webp',
    desc: 'Centro de Zaragoza, zona residencial-universitaria.',
  },
  {
    name: 'LOFT CA12',
    img: '/images/colivings-zaragoza/coliving-09.webp',
    desc: 'Loft independiente con decoración cuidada al detalle.',
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

function WindowCard({ coliving, index, floor }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-25%', '25%'])

  return (
    <motion.div
      ref={ref}
      className={`bld-window bld-window--${floor}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      {/* Stone frame surround */}
      <div className="bld-window-frame">
        <div className="bld-window-hole">
          <div className="bld-window-glass">
            <motion.img src={coliving.img} alt={coliving.name} loading="lazy" style={{ y }} />
          </div>
          {/* Info overlay */}
          <div className="bld-window-overlay">
            <h3>{coliving.name}</h3>
            <p>{coliving.desc}</p>
            <a href="#contacto" className="bld-window-arrow" aria-label={`Ver ${coliving.name}`}>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
      {/* Window sill */}
      <div className="bld-window-sill" />
      {/* Balcony (shown via CSS only for mid/bot) */}
      <div className="bld-balcony">
        <div className="bld-balcony-railing" />
        <div className="bld-balcony-platform" />
      </div>
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

      {/* BUILDING FACADE */}
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

        <div className="bld-edificio">

          {/* ── Terracotta Roof ── */}
          <div className="bld-roof">
            <div className="bld-roof-ridge" />
            <div className="bld-roof-tiles" />
            <div className="bld-roof-eave" />
            <div className="bld-roof-corbels" />
          </div>

          {/* ── Top heavy cornice ── */}
          <div className="bld-cornice bld-cornice--top" />

          {/* ── Main wall with pilasters ── */}
          <div className="bld-wall">

            {/* Floor 3 — top (shorter windows, persianas, planters) */}
            <div className="bld-floor bld-floor--top">
              <div className="bld-floor-label">3ª</div>
              <div className="bld-windows-row">
                {COLIVINGS.slice(0, 3).map((c, i) => (
                  <WindowCard key={c.name} coliving={c} index={i} floor="top" />
                ))}
              </div>
            </div>

            {/* Cornice with brackets */}
            <div className="bld-cornice bld-cornice--mid" />

            {/* Floor 2 — middle (tall windows, individual balconies) */}
            <div className="bld-floor bld-floor--mid">
              <div className="bld-floor-label">2ª</div>
              <div className="bld-windows-row">
                {COLIVINGS.slice(3, 6).map((c, i) => (
                  <WindowCard key={c.name} coliving={c} index={i + 3} floor="mid" />
                ))}
              </div>
            </div>

            {/* Cornice with brackets */}
            <div className="bld-cornice bld-cornice--mid" />

            {/* Floor 1 — bottom (tallest windows, ornate balconies) */}
            <div className="bld-floor bld-floor--bot">
              <div className="bld-floor-label">1ª</div>
              <div className="bld-windows-row">
                {COLIVINGS.slice(6, 9).map((c, i) => (
                  <WindowCard key={c.name} coliving={c} index={i + 6} floor="bot" />
                ))}
              </div>
            </div>
          </div>

          {/* ── Cornice above ground ── */}
          <div className="bld-cornice bld-cornice--ground" />

          {/* ── Band ── */}
          <div className="bld-band">
            <span>HOM.ESTATE · Colivings Zaragoza</span>
          </div>

          {/* ── Ground floor with portal ── */}
          <div className="bld-ground">
            <div className="bld-ground-side">
              <div className="bld-ground-slats" />
            </div>
            <div className="bld-portal">
              <div className="bld-portal-arch">
                <svg viewBox="0 0 200 300" fill="none" aria-hidden="true" className="bld-portal-svg">
                  {/* Stone arch surround */}
                  <path d="M -2,300 L -2,100 A 102 102 0 0 1 202,100 L 202,300"
                    stroke="#c8c2b6" strokeWidth="12" fill="none" />
                  {/* Wooden arch frame */}
                  <path d="M 6,300 L 6,100 A 94 94 0 0 1 194,100 L 194,300"
                    fill="#3d2a1a" stroke="#5a3e2b" strokeWidth="4" />
                  {/* Fanlight glass area */}
                  <path d="M 10,100 A 90 90 0 0 1 190,100" fill="none" stroke="#2a4a3a" strokeWidth="1" opacity="0.3" />
                  {/* Fanlight radials */}
                  <line x1="100" y1="12" x2="12" y2="118" stroke="#5a3e2b" strokeWidth="2" />
                  <line x1="100" y1="12" x2="42" y2="116" stroke="#5a3e2b" strokeWidth="1.5" />
                  <line x1="100" y1="12" x2="72" y2="112" stroke="#5a3e2b" strokeWidth="1.5" />
                  <line x1="100" y1="12" x2="128" y2="112" stroke="#5a3e2b" strokeWidth="1.5" />
                  <line x1="100" y1="12" x2="158" y2="116" stroke="#5a3e2b" strokeWidth="1.5" />
                  <line x1="100" y1="12" x2="188" y2="118" stroke="#5a3e2b" strokeWidth="2" />
                  {/* Transom bar */}
                  <line x1="10" y1="120" x2="190" y2="120" stroke="#5a3e2b" strokeWidth="3" />
                  {/* Door division */}
                  <line x1="100" y1="120" x2="100" y2="300" stroke="#5a3e2b" strokeWidth="4" />
                  {/* Left door panels */}
                  <rect x="16" y="130" width="78" height="62" rx="4" stroke="#6b4c30" strokeWidth="2" fill="#4d3520" />
                  <rect x="16" y="204" width="78" height="86" rx="4" stroke="#6b4c30" strokeWidth="2" fill="#4d3520" />
                  {/* Right door panels */}
                  <rect x="106" y="130" width="78" height="62" rx="4" stroke="#6b4c30" strokeWidth="2" fill="#4d3520" />
                  <rect x="106" y="204" width="78" height="86" rx="4" stroke="#6b4c30" strokeWidth="2" fill="#4d3520" />
                  {/* Brass door handles */}
                  <circle cx="92" cy="210" r="4" fill="#c9a84c" />
                  <line x1="92" y1="204" x2="92" y2="220" stroke="#c9a84c" strokeWidth="1.5" />
                  <circle cx="108" cy="210" r="4" fill="#c9a84c" />
                  <line x1="108" y1="204" x2="108" y2="220" stroke="#c9a84c" strokeWidth="1.5" />
                  {/* Keystone */}
                  <polygon points="92,4 100,0 108,4 106,14 94,14" fill="#c8c2b6" stroke="#b5a999" strokeWidth="1" />
                </svg>
              </div>
            </div>
            <div className="bld-ground-side">
              <div className="bld-ground-slats" />
            </div>
          </div>

          {/* ── Socle / base ── */}
          <div className="bld-socle" />

          {/* ── Street / sidewalk ── */}
          <div className="bld-street" />
        </div>
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
