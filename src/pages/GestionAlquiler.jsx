import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BarChart3, Key, FileText, Headphones, Phone } from 'lucide-react'
import PageHero from '../components/PageHero'
import './pages.css'

const CITIES = {
  '/gestion-alquiler-habitaciones-zaragoza': {
    city: 'Zaragoza',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&fm=webp',
    description: 'Gestionamos sus propiedades en Zaragoza con un enfoque integral que maximiza la rentabilidad y minimiza las preocupaciones del propietario.',
    stats: [
      { value: '+50', label: 'Propiedades gestionadas' },
      { value: '98%', label: 'Tasa de ocupacion' },
      { value: '+15%', label: 'Rentabilidad media' },
      { value: '24/7', label: 'Soporte al inquilino' },
    ],
  },
  '/gestion-alquiler-habitaciones-madrid': {
    city: 'Madrid',
    heroImage: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&fm=webp',
    description: 'Servicio profesional de gestion de alquiler en Madrid. Nos encargamos de todo para que usted disfrute de los beneficios sin preocupaciones.',
    stats: [
      { value: '+30', label: 'Propiedades gestionadas' },
      { value: '97%', label: 'Tasa de ocupacion' },
      { value: '+12%', label: 'Rentabilidad media' },
      { value: '24/7', label: 'Soporte al inquilino' },
    ],
  },
}

const SERVICES = [
  {
    icon: Key,
    title: 'Gestion integral',
    description: 'Desde la busqueda de inquilinos hasta el mantenimiento, nos encargamos de todo el proceso.',
  },
  {
    icon: BarChart3,
    title: 'Maximizacion de renta',
    description: 'Analisis continuo del mercado para asegurar que su propiedad esta al precio optimo.',
  },
  {
    icon: FileText,
    title: 'Gestion documental',
    description: 'Contratos, facturas, seguros y toda la documentacion legal gestionada por profesionales.',
  },
  {
    icon: Headphones,
    title: 'Atencion al inquilino',
    description: 'Servicio de atencion 24/7 para resolver cualquier incidencia de forma rapida y eficaz.',
  },
]

function GestionAlquiler() {
  const { pathname } = useLocation()
  const data = CITIES[pathname] || CITIES['/gestion-alquiler-habitaciones-zaragoza']

  return (
    <>
      <PageHero
        title={`Gestion de Alquiler en ${data.city}`}
        breadcrumbs={[{ label: `Gestion ${data.city}` }]}
        image={data.heroImage}
      />

      <section className="page-section">
        <div className="page-container">
          <motion.div
            className="page-section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Gestion profesional en {data.city}</h2>
            <p className="section-subtitle">{data.description}</p>
          </motion.div>

          <div className="stats-row">
            {data.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
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
          >
            <h2 className="section-title">Nuestros Servicios</h2>
          </motion.div>

          <div className="services-grid-4">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
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
          >
            Confienos la gestion de su propiedad en {data.city}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Solicite una valoracion gratuita y descubra cuanto puede rendir su propiedad.
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
            <Phone size={18} /> Contactar
          </motion.a>
        </div>
      </section>
    </>
  )
}

export default GestionAlquiler
