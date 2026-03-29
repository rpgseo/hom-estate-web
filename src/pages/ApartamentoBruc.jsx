import { motion } from 'framer-motion'
import { MapPin, Star, Wifi, Sofa, Shield, Phone, Bath, BedDouble } from 'lucide-react'
import PageHero from '../components/PageHero'
import './pages.css'

const FEATURES = [
  { icon: BedDouble, label: '2 Dormitorios' },
  { icon: Bath, label: '1 Bano completo' },
  { icon: Wifi, label: 'WiFi alta velocidad' },
  { icon: Sofa, label: 'Totalmente amueblado' },
  { icon: Shield, label: 'Portero 24h' },
  { icon: Star, label: 'Acabados premium' },
]

const GALLERY = [
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&fm=webp',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&fm=webp',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&fm=webp',
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&fm=webp',
]

function ApartamentoBruc() {
  return (
    <>
      <PageHero
        title="Apartamento de Lujo en Barcelona"
        breadcrumbs={[{ label: 'Apartamento Bruc' }]}
        image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&fm=webp"
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
                <span className="luxury-badge">Premium</span>
                <h2 className="detail-tagline">Apartamento exclusivo en Calle Bruc, Barcelona</h2>
                <p className="detail-location">
                  <MapPin size={16} /> Eixample, Barcelona
                </p>
                <p className="detail-description">
                  Exclusivo apartamento de lujo situado en una de las calles mas
                  emblematicas de Barcelona. Completamente reformado con acabados de
                  alta gama, este espacio combina la elegancia clasica del Eixample con
                  todas las comodidades modernas. Ideal para profesionales que buscan
                  una experiencia residencial premium en el corazon de Barcelona.
                </p>
              </motion.div>

              <motion.div
                className="detail-gallery"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {GALLERY.map((img, i) => (
                  <div key={i} className="gallery-item">
                    <img src={img} alt={`Apartamento Bruc foto ${i + 1}`} width="600" height="400" loading="lazy" />
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
                <h3>Caracteristicas del apartamento</h3>
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
                className="sidebar-card sidebar-card-luxury"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="sidebar-luxury-header">
                  <Star size={20} />
                  <span>Propiedad Premium</span>
                </div>
                <h3>Solicitar informacion</h3>
                <p>Contacte con nosotros para conocer precios y disponibilidad de este exclusivo apartamento.</p>
                <a href="tel:+34636155847" className="btn-primary btn-full">
                  <Phone size={18} /> Llamar ahora
                </a>
                <a href="mailto:info@hom.estate" className="btn-outline btn-full">
                  Solicitar visita
                </a>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

export default ApartamentoBruc
