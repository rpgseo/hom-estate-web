import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import './pages.css'

const POSTS = [
  {
    slug: 'proceso-administracion-inmobiliaria',
    title: 'Proceso administracion inmobiliaria: guia propietarios',
    excerpt: 'Todo lo que necesitas saber sobre la administracion profesional de tus propiedades inmobiliarias.',
    date: '2024-11-15',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&fm=webp',
  },
  {
    slug: 'gestion-patrimonial-inmobiliaria',
    title: 'Gestion Patrimonial Inmobiliaria: Guia Completa 2024',
    excerpt: 'Estrategias avanzadas para la gestion eficiente de tu patrimonio inmobiliario.',
    date: '2024-10-28',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&fm=webp',
  },
  {
    slug: 'gestionar-alquileres-digitalmente',
    title: 'Por Que Gestionar Alquileres Digitalmente',
    excerpt: 'Las ventajas de la digitalizacion en la gestion de alquileres y como implementarla.',
    date: '2024-10-10',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&fm=webp',
  },
  {
    slug: 'rol-gestor-inmobiliario',
    title: 'Rol del Gestor Inmobiliario: Guia Completa',
    excerpt: 'Descubre las funciones clave del gestor inmobiliario y como puede ayudarte a maximizar tu inversion.',
    date: '2024-09-22',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&fm=webp',
  },
  {
    slug: 'gestion-eficiente-alquileres',
    title: 'Guia de gestion eficiente de alquileres',
    excerpt: 'Herramientas y estrategias para optimizar la gestion de tus propiedades en alquiler.',
    date: '2024-09-05',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&fm=webp',
  },
  {
    slug: 'ventajas-coliving-propietarios',
    title: '7 ventajas del coliving para propietarios',
    excerpt: 'Conoce por que el modelo de coliving se esta convirtiendo en la opcion preferida de los inversores.',
    date: '2024-08-18',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&fm=webp',
  },
  {
    slug: 'rentabilidad-inmobiliaria',
    title: 'Rentabilidad Inmobiliaria: Guia Completa',
    excerpt: 'Analisis completo de las diferentes formas de obtener rentabilidad en el sector inmobiliario.',
    date: '2024-07-30',
    image: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=600&fm=webp',
  },
  {
    slug: 'invertir-en-zaragoza',
    title: 'Por Que Invertir en Zaragoza: Guia 2025',
    excerpt: 'Zaragoza se posiciona como una de las ciudades mas rentables para la inversion inmobiliaria en Espana.',
    date: '2024-07-12',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&fm=webp',
  },
  {
    slug: 'invertir-en-vivienda',
    title: 'Por Que Invertir en Vivienda: Guia Completa',
    excerpt: 'Todo lo que debes saber antes de dar el paso hacia la inversion en el sector residencial.',
    date: '2024-06-25',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&fm=webp',
  },
]

function Blog() {
  return (
    <>
      <PageHero
        title="Blog"
        breadcrumbs={[{ label: 'Blog' }]}
        image="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=1200&fm=webp"
      />

      <section className="page-section">
        <div className="page-container">
          <div className="blog-grid">
            {POSTS.map((post, i) => (
              <motion.article
                key={post.slug}
                className="blog-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
              >
                <Link to={`/post/${post.slug}`} className="blog-card-link">
                  <div className="blog-card-image">
                    <img src={post.image} alt={post.title} width="600" height="400" loading="lazy" />
                  </div>
                  <div className="blog-card-body">
                    <span className="blog-card-date">
                      <Calendar size={12} /> {new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <span className="blog-card-cta">
                      Leer mas <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
