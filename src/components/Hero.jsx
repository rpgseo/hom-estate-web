import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import './Hero.css'

function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-bg">
        <img
          className="hero-bg-image"
          src="/images/hero-bg.webp"
          alt=""
          aria-hidden="true"
          width="1920"
          height="932"
        />
        <div className="hero-overlay" />
        <div className="hero-gradient-1" />
        <div className="hero-gradient-2" />
        <div className="hero-grid" />
      </div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.span
          className="hero-tag"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Real Estate Investment
        </motion.span>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Inversión inmobiliaria{' '}
          <span className="highlight">inteligente</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          En Hom Estate, nos especializamos en optimizar el rendimiento de sus
          activos inmobiliarios a través de estrategias avanzadas y un enfoque
          integral.
        </motion.p>

        <motion.a
          href="#servicios"
          className="hero-cta"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Descubre más
          <ArrowDown size={18} />
        </motion.a>
      </motion.div>

      <div className="hero-scroll-indicator" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}

export default Hero
