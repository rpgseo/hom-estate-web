import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import './pages.css'

const POSTS_DATA = {
  'proceso-administracion-inmobiliaria': {
    title: 'Proceso administracion inmobiliaria: guia propietarios',
    date: '2024-11-15',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&fm=webp',
  },
  'gestion-patrimonial-inmobiliaria': {
    title: 'Gestion Patrimonial Inmobiliaria: Guia Completa 2024',
    date: '2024-10-28',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&fm=webp',
  },
  'gestionar-alquileres-digitalmente': {
    title: 'Por Que Gestionar Alquileres Digitalmente',
    date: '2024-10-10',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&fm=webp',
  },
  'rol-gestor-inmobiliario': {
    title: 'Rol del Gestor Inmobiliario: Guia Completa',
    date: '2024-09-22',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&fm=webp',
  },
  'gestion-eficiente-alquileres': {
    title: 'Guia de gestion eficiente de alquileres',
    date: '2024-09-05',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&fm=webp',
  },
  'ventajas-coliving-propietarios': {
    title: '7 ventajas del coliving para propietarios',
    date: '2024-08-18',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&fm=webp',
  },
  'rentabilidad-inmobiliaria': {
    title: 'Rentabilidad Inmobiliaria: Guia Completa',
    date: '2024-07-30',
    image: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=1200&fm=webp',
  },
  'invertir-en-zaragoza': {
    title: 'Por Que Invertir en Zaragoza: Guia 2025',
    date: '2024-07-12',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&fm=webp',
  },
  'invertir-en-vivienda': {
    title: 'Por Que Invertir en Vivienda: Guia Completa',
    date: '2024-06-25',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&fm=webp',
  },
}

const RELATED = [
  { slug: 'rentabilidad-inmobiliaria', title: 'Rentabilidad Inmobiliaria: Guia Completa' },
  { slug: 'invertir-en-zaragoza', title: 'Por Que Invertir en Zaragoza: Guia 2025' },
  { slug: 'ventajas-coliving-propietarios', title: '7 ventajas del coliving para propietarios' },
]

function BlogPost() {
  const { slug } = useParams()
  const post = POSTS_DATA[slug] || {
    title: 'Articulo no encontrado',
    date: '2024-01-01',
    image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=1200&fm=webp',
  }

  return (
    <>
      <PageHero
        title={post.title}
        breadcrumbs={[
          { label: 'Blog', href: '/blog' },
          { label: post.title },
        ]}
        image={post.image}
      />

      <section className="page-section">
        <div className="page-container">
          <div className="blog-post-layout">
            <motion.article
              className="blog-post-main"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="blog-post-date">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString('es-ES', {
                  year: 'numeric', month: 'long', day: 'numeric',
                })}
              </span>

              <div className="blog-post-content">
                <p>
                  En el sector inmobiliario actual, contar con informacion actualizada y
                  estrategias bien definidas es fundamental para maximizar la rentabilidad
                  de cualquier inversion. En este articulo analizamos los aspectos clave
                  que todo inversor y propietario debe conocer.
                </p>
                <h2>Contexto del mercado</h2>
                <p>
                  El mercado inmobiliario espanol continua mostrando senales positivas,
                  especialmente en ciudades como Zaragoza, Madrid y Barcelona. La demanda
                  de vivienda en alquiler sigue creciendo, impulsada por cambios en los
                  habitos de vida y trabajo.
                </p>
                <h2>Estrategias clave</h2>
                <p>
                  La diversificacion de la cartera, la gestion profesional de los activos
                  y la apuesta por modelos innovadores como el coliving son algunas de las
                  estrategias que estan demostrando mejores resultados en el contexto actual.
                </p>
                <h2>Conclusiones</h2>
                <p>
                  Invertir en inmobiliaria sigue siendo una de las opciones mas seguras y
                  rentables, siempre y cuando se cuente con el asesoramiento adecuado y se
                  apliquen estrategias adaptadas a cada situacion particular.
                </p>
              </div>

              <div className="blog-post-nav">
                <Link to="/blog" className="blog-back-link">
                  <ArrowLeft size={16} /> Volver al blog
                </Link>
              </div>
            </motion.article>

            <aside className="blog-post-sidebar">
              <motion.div
                className="sidebar-card"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3>Articulos relacionados</h3>
                <ul className="related-posts">
                  {RELATED.filter((r) => r.slug !== slug).map((r) => (
                    <li key={r.slug}>
                      <Link to={`/post/${r.slug}`}>
                        {r.title}
                        <ArrowRight size={12} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="sidebar-card"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3>Contacto</h3>
                <p>Necesitas asesoramiento personalizado para tu inversion inmobiliaria.</p>
                <a href="tel:+34636155847" className="btn-primary btn-full">
                  Contactar
                </a>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPost
