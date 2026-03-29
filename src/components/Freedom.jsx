import { motion } from 'framer-motion'
import './Freedom.css'

function Freedom() {
  return (
    <section className="freedom-section" aria-label="Libertad de movimiento">
      <div className="freedom-bg" role="presentation" />
      <div className="freedom-overlay" />
      <motion.div
        className="freedom-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="freedom-title">
          Libertad de<br />movimiento<span className="dot">.</span>
        </h2>
        <motion.div
          className="freedom-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />
      </motion.div>
    </section>
  )
}

export default Freedom
