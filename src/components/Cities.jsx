import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './Cities.css'

const CITIES = [
  {
    name: 'Barcelona',
    image: '/images/barcelona.webp',
    description:
      'La ciudad más cosmopolita de España, combina a la perfección su icónica arquitectura y su rica historia con magníficas playas.',
  },
  {
    name: 'Madrid',
    image: '/images/madrid.webp',
    description:
      'La capital, ciudad llena de energía y vitalidad, te sentirás como en casa con una gran oferta socio-cultural y un divertidísimo ocio nocturno.',
  },
  {
    name: 'Zaragoza',
    image: '/images/zaragoza.webp',
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

  const imageY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%'])
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 1.15])
  const shadowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.15, 0.4])

  return (
    <motion.div
      ref={ref}
      className="city-window"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
    >
      {/* Outer wall / room context */}
      <div className="window-wall">
        {/* Window opening with depth */}
        <div className="window-opening">
          {/* Window sill depth (3D ledge) */}
          <div className="window-depth-top" />
          <div className="window-depth-left" />
          <div className="window-depth-right" />

          {/* City image with parallax — the "outside" view */}
          <div className="window-glass">
            <motion.div
              className="city-parallax-wrapper"
              style={{ y: imageY, scale: imageScale }}
            >
              <img
                className="city-image"
                src={city.image}
                alt={`Vista de ${city.name} desde la ventana`}
                loading="lazy"
                width="400"
                height="600"
              />
            </motion.div>

            {/* Light reflection on glass */}
            <div className="window-reflection" />

            {/* Atmospheric haze for depth */}
            <motion.div
              className="window-haze"
              style={{ opacity: shadowOpacity }}
            />
          </div>

          {/* Window frame bars */}
          <div className="window-frame-bars">
            <div className="frame-vertical" />
            <div className="frame-horizontal" />
          </div>

          {/* Window arch frame overlay */}
          <svg
            className="window-arch-frame"
            viewBox="0 0 400 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Main arch frame */}
            <path
              d="M 0,560 L 0,200 C 0,89 89,0 200,0 C 311,0 400,89 400,200 L 400,560"
              fill="none"
              stroke="#d4cfc5"
              strokeWidth="24"
            />
            {/* Inner frame border */}
            <path
              d="M 12,558 L 12,200 C 12,96 96,12 200,12 C 304,12 388,96 388,200 L 388,558"
              fill="none"
              stroke="#e8e3d9"
              strokeWidth="4"
            />
            {/* Outer frame border */}
            <path
              d="M -2,560 L -2,200 C -2,88 88,-2 200,-2 C 312,-2 402,88 402,200 L 402,560"
              fill="none"
              stroke="#bfb9ad"
              strokeWidth="3"
            />
            {/* Keystone at top of arch */}
            <path
              d="M 185,2 L 200,-6 L 215,2"
              fill="none"
              stroke="#bfb9ad"
              strokeWidth="4"
            />
          </svg>
        </div>

        {/* Info panel - like a plaque below the window */}
        <div className="city-plaque">
          <h3>{city.name}</h3>
          <p>{city.description}</p>
          <a href="#contacto" className="city-link" aria-label={`Explorar ${city.name}`}>
            <span>Explorar</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
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
