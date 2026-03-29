import { motion } from 'framer-motion'
import { Users, Wallet, Shield, Zap, Heart, Globe } from 'lucide-react'
import PageHero from '../components/PageHero'
import './pages.css'

const BENEFITS = [
  { icon: Wallet, title: 'Ahorro economico', text: 'Reduce tus gastos mensuales en vivienda hasta un 40% comparado con el alquiler tradicional.' },
  { icon: Users, title: 'Comunidad', text: 'Vive rodeado de personas con intereses similares. Networking, eventos y convivencia.' },
  { icon: Shield, title: 'Todo incluido', text: 'Suministros, WiFi, limpieza y mantenimiento. Sin sorpresas ni gastos ocultos.' },
  { icon: Zap, title: 'Flexibilidad', text: 'Contratos adaptados a tus necesidades. Sin largas permanencias ni depositos excesivos.' },
  { icon: Heart, title: 'Calidad de vida', text: 'Espacios disenados para el bienestar: zonas de trabajo, descanso y socializacion.' },
  { icon: Globe, title: 'Ubicaciones premium', text: 'Nuestros colivings estan en las mejores zonas de la ciudad, cerca de todo.' },
]

const COMPARISON = [
  { feature: 'Precio mensual medio', coliving: 'Desde 400 EUR', traditional: 'Desde 700 EUR' },
  { feature: 'Suministros incluidos', coliving: 'Si', traditional: 'No' },
  { feature: 'WiFi incluido', coliving: 'Si', traditional: 'No' },
  { feature: 'Amueblado', coliving: 'Si', traditional: 'Normalmente no' },
  { feature: 'Limpieza zonas comunes', coliving: 'Si', traditional: 'No' },
  { feature: 'Deposito', coliving: '1 mes', traditional: '2-3 meses' },
  { feature: 'Permanencia minima', coliving: 'Flexible', traditional: '12 meses' },
  { feature: 'Comunidad', coliving: 'Si', traditional: 'No' },
]

function PorQueColiving() {
  return (
    <>
      <PageHero
        title="Por Que Coliving"
        breadcrumbs={[{ label: 'Por que Coliving' }]}
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&fm=webp"
      />

      <section className="page-section">
        <div className="page-container">
          <motion.div
            className="page-section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Ventajas del Coliving</h2>
            <p className="section-subtitle">
              El coliving es mucho mas que compartir piso. Es una nueva forma de vivir
              disenada para el estilo de vida actual.
            </p>
          </motion.div>

          <div className="benefits-grid-6">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.title}
                className="benefit-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
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

      <section className="page-section page-section-light">
        <div className="page-container">
          <motion.div
            className="page-section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Coliving vs Alquiler Tradicional</h2>
          </motion.div>

          <motion.div
            className="comparison-table-wrapper"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Caracteristica</th>
                  <th className="highlight-col">Coliving</th>
                  <th>Alquiler Tradicional</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.feature}>
                    <td>{row.feature}</td>
                    <td className="highlight-col">{row.coliving}</td>
                    <td>{row.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <motion.div
            className="page-section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Lo que dicen nuestros residentes</h2>
          </motion.div>

          <div className="testimonials-row">
            {[
              { name: 'Maria G.', text: 'El coliving ha cambiado mi forma de vivir. La comunidad es increible y el ahorro notable.' },
              { name: 'Carlos R.', text: 'La flexibilidad del contrato fue clave para mi. Poder mudarme sin complicaciones es un gran plus.' },
              { name: 'Ana P.', text: 'Todo incluido, sin preocupaciones. Llego a casa y solo tengo que disfrutar del espacio.' },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <p>"{t.text}"</p>
                <span className="testimonial-name">{t.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default PorQueColiving
