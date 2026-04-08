import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

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
      <div className="bld-window-frame">
        <a href={coliving.href || '#contacto'} className="bld-window-hole" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
          <div className="bld-window-glass">
            <motion.img src={coliving.img} alt={coliving.name} loading="lazy" style={{ y }} />
          </div>
          <div className="bld-window-overlay">
            <h3>{coliving.name}</h3>
            <p>{coliving.desc}</p>
            <span className="bld-window-arrow" aria-label={`Ver ${coliving.name}`}>
              <ArrowRight size={16} />
            </span>
          </div>
        </a>
      </div>
      <div className="bld-window-sill" />
      <div className="bld-balcony">
        <div className="bld-balcony-railing" />
        <div className="bld-balcony-platform" />
      </div>
    </motion.div>
  )
}

export default function BuildingFacade({ colivings }) {
  return (
    <div className="bld-edificio">
      {/* Terracotta Roof */}
      <div className="bld-roof">
        <div className="bld-roof-ridge" />
        <div className="bld-roof-tiles" />
        <div className="bld-roof-eave" />
        <div className="bld-roof-corbels" />
      </div>

      {/* Top cornice */}
      <div className="bld-cornice bld-cornice--top" />

      {/* Main wall */}
      <div className="bld-wall">
        {/* Floor 3 */}
        <div className="bld-floor bld-floor--top">
          <div className="bld-floor-label">3ª</div>
          <div className="bld-windows-row">
            {colivings.slice(0, 3).map((c, i) => (
              <WindowCard key={c.name} coliving={c} index={i} floor="top" />
            ))}
          </div>
        </div>

        <div className="bld-cornice bld-cornice--mid" />

        {/* Floor 2 */}
        <div className="bld-floor bld-floor--mid">
          <div className="bld-floor-label">2ª</div>
          <div className="bld-windows-row">
            {colivings.slice(3, 6).map((c, i) => (
              <WindowCard key={c.name} coliving={c} index={i + 3} floor="mid" />
            ))}
          </div>
        </div>

        <div className="bld-cornice bld-cornice--mid" />

        {/* Floor 1 */}
        <div className="bld-floor bld-floor--bot">
          <div className="bld-floor-label">1ª</div>
          <div className="bld-windows-row">
            {colivings.slice(6, 9).map((c, i) => (
              <WindowCard key={c.name} coliving={c} index={i + 6} floor="bot" />
            ))}
          </div>
        </div>
      </div>

      {/* Ground cornice */}
      <div className="bld-cornice bld-cornice--ground" />

      {/* Band */}
      <div className="bld-band">
        <span>HOM.ESTATE · Colivings Zaragoza</span>
      </div>

      {/* Ground floor with portal */}
      <div className="bld-ground">
        <div className="bld-ground-side">
          <div className="bld-ground-slats" />
        </div>
        <div className="bld-portal">
          <div className="bld-portal-arch">
            <svg viewBox="0 0 200 300" fill="none" aria-hidden="true" className="bld-portal-svg">
              <path d="M -2,300 L -2,100 A 102 102 0 0 1 202,100 L 202,300" stroke="#c8c2b6" strokeWidth="12" fill="none" />
              <path d="M 6,300 L 6,100 A 94 94 0 0 1 194,100 L 194,300" fill="#3d2a1a" stroke="#5a3e2b" strokeWidth="4" />
              <path d="M 10,100 A 90 90 0 0 1 190,100" fill="none" stroke="#2a4a3a" strokeWidth="1" opacity="0.3" />
              <line x1="100" y1="12" x2="12" y2="118" stroke="#5a3e2b" strokeWidth="2" />
              <line x1="100" y1="12" x2="42" y2="116" stroke="#5a3e2b" strokeWidth="1.5" />
              <line x1="100" y1="12" x2="72" y2="112" stroke="#5a3e2b" strokeWidth="1.5" />
              <line x1="100" y1="12" x2="128" y2="112" stroke="#5a3e2b" strokeWidth="1.5" />
              <line x1="100" y1="12" x2="158" y2="116" stroke="#5a3e2b" strokeWidth="1.5" />
              <line x1="100" y1="12" x2="188" y2="118" stroke="#5a3e2b" strokeWidth="2" />
              <line x1="10" y1="120" x2="190" y2="120" stroke="#5a3e2b" strokeWidth="3" />
              <line x1="100" y1="120" x2="100" y2="300" stroke="#5a3e2b" strokeWidth="4" />
              <rect x="16" y="130" width="78" height="62" rx="4" stroke="#6b4c30" strokeWidth="2" fill="#4d3520" />
              <rect x="16" y="204" width="78" height="86" rx="4" stroke="#6b4c30" strokeWidth="2" fill="#4d3520" />
              <rect x="106" y="130" width="78" height="62" rx="4" stroke="#6b4c30" strokeWidth="2" fill="#4d3520" />
              <rect x="106" y="204" width="78" height="86" rx="4" stroke="#6b4c30" strokeWidth="2" fill="#4d3520" />
              <circle cx="92" cy="210" r="4" fill="#c9a84c" />
              <line x1="92" y1="204" x2="92" y2="220" stroke="#c9a84c" strokeWidth="1.5" />
              <circle cx="108" cy="210" r="4" fill="#c9a84c" />
              <line x1="108" y1="204" x2="108" y2="220" stroke="#c9a84c" strokeWidth="1.5" />
              <polygon points="92,4 100,0 108,4 106,14 94,14" fill="#c8c2b6" stroke="#b5a999" strokeWidth="1" />
            </svg>
          </div>
        </div>
        <div className="bld-ground-side">
          <div className="bld-ground-slats" />
        </div>
      </div>

      {/* Base */}
      <div className="bld-socle" />
      <div className="bld-street" />
    </div>
  )
}
