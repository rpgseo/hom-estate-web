import { motion } from 'framer-motion'
import './CtaBanner.css'

function CtaBanner() {
  return (
    <section className="cta-banner" aria-label="Llamada a la acción">
      <motion.h2
        className="cta-text"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Únete al cambio<span className="dot">.</span>
      </motion.h2>
    </section>
  )
}

export default CtaBanner
