import { motion } from 'framer-motion'
import {
  TrendingUp,
  Key,
  Repeat,
  Settings,
  Zap,
  MessageSquare,
} from 'lucide-react'
import './Services.css'

const SERVICES = [
  {
    icon: TrendingUp,
    title: 'House Flipping',
    description:
      'Adquisición, reforma y venta de propiedades para maximizar el retorno de inversión.',
  },
  {
    icon: Key,
    title: 'Buy to Rent',
    description:
      'Gestión experta en alquileres, incluyendo opciones de alquiler turístico, alquiler temporal (Flex Living) y alquiler habitual.',
  },
  {
    icon: Repeat,
    title: 'Rent to Rent',
    description:
      'Subarrendamiento de propiedades para maximizar ingresos pasivos.',
  },
  {
    icon: Settings,
    title: 'Property Management',
    description:
      'Administración completa de propiedades, garantizando eficiencia y rentabilidad.',
  },
  {
    icon: Zap,
    title: 'Flex Living',
    description:
      'Estilo de vida flexible adaptado a las necesidades cambiantes.',
  },
  {
    icon: MessageSquare,
    title: 'Consulting',
    description:
      'Asesoramiento personalizado en inversión inmobiliaria.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

function Services() {
  return (
    <section id="servicios" className="services-section">
      <div className="container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">
            Soluciones integrales para maximizar el rendimiento de su inversión
            inmobiliaria.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {SERVICES.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.article
              key={service.title}
              className="service-card"
              variants={cardVariants}
            >
              <span className="service-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="service-icon" aria-hidden="true">
                <Icon size={24} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-accent" />
            </motion.article>
          )
        })}
      </motion.div>
    </section>
  )
}

export default Services
