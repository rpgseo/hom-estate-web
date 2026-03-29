import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Wifi, Sofa, Shield, Zap, Users, Phone } from 'lucide-react'
import PageHero from '../components/PageHero'
import './pages.css'

const COLIVINGS = {
  '/coliving-zaragoza': {
    name: 'Coliving Zaragoza Centro',
    tagline: 'El mejor coliving en Zaragoza',
    location: 'Centro, Zaragoza',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&fm=webp',
  },
  '/coliving-zaragoza-sagasta': {
    name: 'Coliving Sagasta Premium',
    tagline: 'Coliving Premium en el centro de Zaragoza',
    location: 'Paseo Sagasta, Zaragoza',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&fm=webp',
  },
  '/coliving-zaragoza-tb11': {
    name: 'Coliving Universidad TB11',
    tagline: 'Coliving zona universidad-centro',
    location: 'Zona Universidad, Zaragoza',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&fm=webp',
  },
  '/coliving-zaragoza-jjr5': {
    name: 'Coliving Universidad JJR5',
    tagline: 'Coliving zona centro universitaria',
    location: 'Zona Universidad, Zaragoza',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&fm=webp',
  },
  '/coliving-zaragoza-pc29': {
    name: 'Coliving Pedro Cerbuna',
    tagline: 'Coliving en Pedro Cerbuna',
    location: 'Calle Pedro Cerbuna, Zaragoza',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&fm=webp',
  },
  '/coliving-zaragoza-ca47': {
    name: 'Coliving Universidad CA47',
    tagline: 'Coliving zona universidad-centro',
    location: 'Zona Universidad, Zaragoza',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&fm=webp',
  },
}

const FEATURES = [
  { icon: Wifi, label: 'WiFi de alta velocidad' },
  { icon: Sofa, label: 'Totalmente amueblado' },
  { icon: Shield, label: 'Suministros incluidos' },
  { icon: Zap, label: 'Limpieza semanal' },
  { icon: Users, label: 'Zonas comunes' },
]

const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&fm=webp',
  'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&fm=webp',
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&fm=webp',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&fm=webp',
]

function ColivingDetail() {
  const { pathname } = useLocation()
  const coliving = COLIVINGS[pathname] || COLIVINGS['/coliving-zaragoza']

  return (
    <>
      <PageHero
        title={coliving.name}
        breadcrumbs={[
          { label: 'Colivings', href: '/colivings-zaragoza' },
          { label: coliving.name },
        ]}
        image={coliving.image}
      />

      <section className="page-section">
        <div className="page-container">
          <div className="detail-layout">
            <div className="detail-main">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="detail-tagline">{coliving.tagline}</h2>
                <p className="detail-location">
                  <MapPin size={16} /> {coliving.location}
                </p>
                <p className="detail-description">
                  Disfruta de una experiencia de coliving unica en {coliving.location}.
                  Nuestros espacios estan disenados para ofrecer comodidad, comunidad y
                  flexibilidad. Habitaciones completamente amuebladas con todos los
                  servicios incluidos para que solo tengas que preocuparte de disfrutar.
                </p>
              </motion.div>

              <motion.div
                className="detail-gallery"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {GALLERY_IMAGES.map((img, i) => (
                  <div key={i} className="gallery-item">
                    <img src={img} alt={`${coliving.name} foto ${i + 1}`} width="600" height="400" loading="lazy" />
                  </div>
                ))}
              </motion.div>

              <motion.div
                className="detail-features"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3>Caracteristicas incluidas</h3>
                <ul className="features-list">
                  {FEATURES.map((feat) => (
                    <li key={feat.label}>
                      <feat.icon size={20} />
                      <span>{feat.label}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <aside className="detail-sidebar">
              <motion.div
                className="sidebar-card"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3>Reserva tu habitacion</h3>
                <p>Contacta con nosotros para conocer disponibilidad y precios actualizados.</p>
                <a href="tel:+34636155847" className="btn-primary btn-full">
                  <Phone size={18} /> Llamar ahora
                </a>
                <a href="mailto:info@hom.estate" className="btn-outline btn-full">
                  Enviar email
                </a>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

export default ColivingDetail
