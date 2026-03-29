import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Wifi, Sofa, Users } from 'lucide-react'
import './PropertyCard.css'

const FEATURE_ICONS = {
  wifi: Wifi,
  amueblado: Sofa,
  compartido: Users,
}

function PropertyCard({ name, location, price, image, href, features = [] }) {
  const cardImage = image || 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&fm=webp'

  return (
    <motion.div
      className="property-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      <Link to={href} className="property-card-link">
        <div className="property-card-image">
          <img src={cardImage} alt={name} width="400" height="260" loading="lazy" />
        </div>
        <div className="property-card-body">
          <h3 className="property-card-name">{name}</h3>
          <p className="property-card-location">
            <MapPin size={14} /> {location}
          </p>
          {price && <p className="property-card-price">{price}</p>}
          {features.length > 0 && (
            <div className="property-card-features">
              {features.map((feat) => {
                const Icon = FEATURE_ICONS[feat.icon]
                return (
                  <span key={feat.label} className="property-chip">
                    {Icon && <Icon size={12} />}
                    {feat.label}
                  </span>
                )
              })}
            </div>
          )}
          <span className="property-card-cta">Ver detalles</span>
        </div>
      </Link>
    </motion.div>
  )
}

export default PropertyCard
