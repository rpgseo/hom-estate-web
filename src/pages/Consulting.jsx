import { motion } from 'framer-motion'
import { TrendingUp, Search, FileCheck, Calculator } from 'lucide-react'
import PageHero from '../components/PageHero'
import '../pages/pages.css'

const SERVICES = [
  {
    icon: Search,
    title: 'Analisis de Mercado',
    description: 'Estudio exhaustivo del mercado inmobiliario para identificar las mejores oportunidades de inversion en cada zona.',
  },
  {
    icon: TrendingUp,
    title: 'Estrategia de Inversion',
    description: 'Diseno de estrategias personalizadas para maximizar la rentabilidad de su cartera inmobiliaria.',
  },
  {
    icon: FileCheck,
    title: 'Due Diligence',
    description: 'Analisis detallado de cada activo: estado legal, tecnico y financiero antes de la adquisicion.',
  },
  {
    icon: Calculator,
    title: 'Optimizacion Fiscal',
    description: 'Estructuracion fiscal eficiente para maximizar el retorno neto de sus inversiones inmobiliarias.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
}

function Consulting() {
  return (
    <>
      <PageHero
        title="Consultoria de Inversion Inmobiliaria"
        breadcrumbs={[{ label: 'Consulting' }]}
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&fm=webp"
      />

      <section className="page-section">
        <div className="page-container">
          <motion.div
            className="page-section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Nuestros Servicios de Consultoria</h2>
            <p className="section-subtitle">
              Acompanamos a inversores y propietarios en cada fase del proceso inmobiliario,
              desde el analisis inicial hasta la optimizacion de la rentabilidad.
            </p>
          </motion.div>

          <div className="services-grid-4">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                className="service-card"
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="service-card-icon">
                  <service.icon size={28} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section-dark">
        <div className="page-container page-cta-block">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Maximice su rentabilidad inmobiliaria
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Contacte con nuestro equipo de expertos para una consulta personalizada sin compromiso.
          </motion.p>
          <motion.a
            href="tel:+34636155847"
            className="btn-primary"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar consulta
          </motion.a>
        </div>
      </section>
    </>
  )
}

export default Consulting
