import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import './PageHero.css'

function PageHero({ title, breadcrumbs = [], image }) {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const onScroll = () => setOffsetY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const bgImage = image || 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&fm=webp'

  return (
    <section className="page-hero">
      <div
        className="page-hero-bg"
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}
      >
        <img src={bgImage} alt="" aria-hidden="true" width="1920" height="600" />
      </div>
      <div className="page-hero-overlay" />
      <motion.div
        className="page-hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <nav className="page-breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Inicio</Link>
          {breadcrumbs.map((crumb, i) => (
            <span key={i}>
              <ChevronRight size={14} />
              {crumb.href ? (
                <Link to={crumb.href}>{crumb.label}</Link>
              ) : (
                <span className="breadcrumb-current">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="page-hero-title">{title}</h1>
      </motion.div>
    </section>
  )
}

export default PageHero
