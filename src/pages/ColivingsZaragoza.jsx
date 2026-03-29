import { motion } from 'framer-motion'
import { Shield, Users, Zap } from 'lucide-react'
import PageHero from '../components/PageHero'
import PropertyCard from '../components/PropertyCard'
import './pages.css'

const COLIVINGS = [
  {
    name: 'Coliving Zaragoza Centro',
    location: 'Centro, Zaragoza',
    price: 'Desde 450 EUR/mes',
    href: '/coliving-zaragoza',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&fm=webp',
    features: [
      { icon: 'wifi', label: 'WiFi' },
      { icon: 'amueblado', label: 'Amueblado' },
      { icon: 'compartido', label: 'Zonas comunes' },
    ],
  },
  {
    name: 'Coliving Sagasta Premium',
    location: 'Paseo Sagasta, Zaragoza',
    price: 'Desde 550 EUR/mes',
    href: '/coliving-zaragoza-sagasta',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&fm=webp',
    features: [
      { icon: 'wifi', label: 'WiFi' },
      { icon: 'amueblado', label: 'Amueblado' },
      { icon: 'compartido', label: 'Premium' },
    ],
  },
  {
    name: 'Coliving Universidad TB11',
    location: 'Zona Universidad, Zaragoza',
    price: 'Desde 400 EUR/mes',
    href: '/coliving-zaragoza-tb11',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&fm=webp',
    features: [
      { icon: 'wifi', label: 'WiFi' },
      { icon: 'amueblado', label: 'Amueblado' },
      { icon: 'compartido', label: 'Estudiantes' },
    ],
  },
  {
    name: 'Coliving Universidad JJR5',
    location: 'Zona Universidad, Zaragoza',
    price: 'Desde 400 EUR/mes',
    href: '/coliving-zaragoza-jjr5',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&fm=webp',
    features: [
      { icon: 'wifi', label: 'WiFi' },
      { icon: 'amueblado', label: 'Amueblado' },
      { icon: 'compartido', label: 'Zonas comunes' },
    ],
  },
  {
    name: 'Coliving Pedro Cerbuna',
    location: 'Calle Pedro Cerbuna, Zaragoza',
    price: 'Desde 420 EUR/mes',
    href: '/coliving-zaragoza-pc29',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&fm=webp',
    features: [
      { icon: 'wifi', label: 'WiFi' },
      { icon: 'amueblado', label: 'Amueblado' },
      { icon: 'compartido', label: 'Zonas comunes' },
    ],
  },
  {
    name: 'Coliving Universidad CA47',
    location: 'Zona Universidad, Zaragoza',
    price: 'Desde 410 EUR/mes',
    href: '/coliving-zaragoza-ca47',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&fm=webp',
    features: [
      { icon: 'wifi', label: 'WiFi' },
      { icon: 'amueblado', label: 'Amueblado' },
      { icon: 'compartido', label: 'Zonas comunes' },
    ],
  },
]

const BENEFITS = [
  { icon: Shield, title: 'Todo incluido', text: 'Suministros, WiFi, limpieza y mantenimiento incluidos en el precio.' },
  { icon: Users, title: 'Comunidad', text: 'Espacios comunes disenados para fomentar la convivencia y el networking.' },
  { icon: Zap, title: 'Flexibilidad', text: 'Contratos flexibles adaptados a tus necesidades, sin permanencia minima.' },
]

function ColivingsZaragoza() {
  return (
    <>
      <PageHero
        title="Colivings en Zaragoza"
        breadcrumbs={[{ label: 'Colivings Zaragoza' }]}
        image="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&fm=webp"
      />

      <section className="page-section">
        <div className="page-container">
          <motion.div
            className="page-section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Nuestros Colivings</h2>
            <p className="section-subtitle">
              Descubre nuestros espacios de coliving en las mejores ubicaciones de Zaragoza.
            </p>
          </motion.div>

          <div className="property-grid">
            {COLIVINGS.map((coliving) => (
              <PropertyCard key={coliving.href} {...coliving} />
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
            <h2 className="section-title">Ventajas del Coliving</h2>
          </motion.div>

          <div className="benefits-row">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.title}
                className="benefit-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="benefit-icon">
                  <b.icon size={28} />
                </div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ColivingsZaragoza
