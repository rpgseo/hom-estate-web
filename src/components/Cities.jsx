import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './Cities.css'

const CITIES = [
  {
    name: 'Barcelona',
    image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1200',
    description:
      'La ciudad más cosmopolita de España, combina a la perfección su icónica arquitectura y su rica historia con magníficas playas.',
  },
  {
    name: 'Madrid',
    image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200',
    description:
      'La capital, ciudad llena de energía y vitalidad, te sentirás como en casa con una gran oferta socio-cultural y un divertidísimo ocio nocturno.',
  },
  {
    name: 'Zaragoza',
    image: 'https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?w=1200',
    description:
      'La cuarta ciudad más grande de España. Con una ubicación perfecta y una gran calidad de vida. La calidez de su gente la hace inigualable.',
  },
]

function CityWindow({ city, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  const clipId = `windowClip-${index}`

  return (
    <motion.div
      ref={ref}
      className="city-window"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* SVG clip for arch shape */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path d="M 0.03,1 L 0.03,0.38 C 0.03,0.15 0.2,0.02 0.5,0.02 C 0.8,0.02 0.97,0.15 0.97,0.38 L 0.97,1 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Window frame drawn with SVG */}
      <svg
        className="window-frame-svg"
        viewBox="0 0 360 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none' }}
        aria-hidden="true"
      >
        {/* Outer frame */}
        <path
          d="M 8,480 L 8,180 C 8,75 80,8 180,8 C 280,8 352,75 352,180 L 352,480"
          stroke="#1B2A4A"
          strokeWidth="16"
          fill="none"
          strokeLinecap="round"
        />
        {/* Inner shadow line */}
        <path
          d="M 18,478 L 18,182 C 18,82 86,18 180,18 C 274,18 342,82 342,182 L 342,478"
          stroke="rgba(27,42,74,0.15)"
          strokeWidth="2"
          fill="none"
        />
        {/* Center mullion */}
        <line x1="180" y1="8" x2="180" y2="480" stroke="#1B2A4A" strokeWidth="6" />
        {/* Horizontal transom */}
        <line x1="8" y1="240" x2="352" y2="240" stroke="#1B2A4A" strokeWidth="6" />
      </svg>

      {/* City image with parallax */}
      <div
        className="city-image-container"
        style={{ clipPath: `url(#${clipId})` }}
      >
        <motion.img
          className="city-image"
          src={city.image}
          alt={`Vista de ${city.name}`}
          loading="lazy"
          style={{ y }}
        />
      </div>

      {/* Info panel */}
      <div className="city-info" style={{ clipPath: `url(#${clipId})` }}>
        <h3>{city.name}</h3>
        <p>{city.description}</p>
      </div>
    </motion.div>
  )
}

function Cities() {
  return (
    <section id="ciudades" className="cities-section">
      <div className="container">
        <motion.div
          className="cities-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Nuestras Homs</h2>
          <p className="section-subtitle">
            Descubre las ciudades donde transformamos el mercado inmobiliario
          </p>
        </motion.div>
      </div>

      <div className="cities-windows">
        {CITIES.map((city, index) => (
          <CityWindow key={city.name} city={city} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Cities
