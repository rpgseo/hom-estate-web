import { motion } from 'framer-motion'
import { ClipboardList, Paintbrush, Hammer, CheckCircle } from 'lucide-react'
import PageHero from '../components/PageHero'
import './pages.css'

const STEPS = [
  {
    icon: ClipboardList,
    number: '01',
    title: 'Analisis',
    description: 'Evaluamos el inmueble, identificamos necesidades y definimos el alcance del proyecto con un presupuesto detallado.',
  },
  {
    icon: Paintbrush,
    number: '02',
    title: 'Diseno',
    description: 'Nuestro equipo de diseno crea propuestas personalizadas que maximizan el valor y la funcionalidad del espacio.',
  },
  {
    icon: Hammer,
    number: '03',
    title: 'Ejecucion',
    description: 'Gestion integral de la obra con supervision constante, cumpliendo plazos y estandares de calidad.',
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Entrega',
    description: 'Entrega llave en mano con revision final, documentacion completa y garantia de satisfaccion.',
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

function Reformas() {
  return (
    <>
      <PageHero
        title="Reformas Integrales"
        breadcrumbs={[{ label: 'Reformas' }]}
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&fm=webp"
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
            <h2 className="section-title">Transformamos espacios</h2>
            <p className="section-subtitle">
              Reformas integrales orientadas a maximizar el valor de su propiedad,
              con un enfoque en calidad, funcionalidad y rentabilidad.
            </p>
          </motion.div>

          <div className="reformas-before-after">
            <motion.div
              className="ba-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&fm=webp"
                alt="Antes de la reforma"
                width="600"
                height="400"
                loading="lazy"
              />
              <span className="ba-label">Antes</span>
            </motion.div>
            <motion.div
              className="ba-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&fm=webp"
                alt="Despues de la reforma"
                width="600"
                height="400"
                loading="lazy"
              />
              <span className="ba-label">Despues</span>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="page-section page-section-light">
        <div className="page-container">
          <motion.div
            className="page-section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Nuestro Proceso</h2>
          </motion.div>

          <div className="steps-grid">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                className="step-card"
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className="step-number">{step.number}</span>
                <div className="step-icon">
                  <step.icon size={24} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
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
          >
            Solicite su presupuesto sin compromiso
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Nuestro equipo evaluara su proyecto y le proporcionara un presupuesto detallado.
          </motion.p>
          <motion.a
            href="tel:+34636155847"
            className="btn-primary"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contactar ahora
          </motion.a>
        </div>
      </section>
    </>
  )
}

export default Reformas
