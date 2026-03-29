import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Shuffle,
  Plane,
  Briefcase,
  PiggyBank,
  Sparkles,
  Users,
  ChevronDown,
} from 'lucide-react'
import './FlexLiving.css'

const ADVANTAGES = [
  {
    icon: Shuffle,
    title: 'Adaptabilidad',
    content:
      'El Flex Living permite adaptarse a las circunstancias cambiantes de la vida. Ya sea un cambio de trabajo, una nueva relación o simplemente el deseo de explorar nuevos entornos, la flexibilidad en la vivienda ofrece la libertad de ajustarse sin los compromisos a largo plazo asociados con la compra de una propiedad.',
  },
  {
    icon: Plane,
    title: 'Mayor movilidad',
    content:
      'Para aquellos que valoran la movilidad geográfica, el Flex Living es ideal. Permite mudarse fácilmente entre ciudades o incluso países, facilitando la exploración de diferentes culturas y oportunidades sin las ataduras de una hipoteca.',
  },
  {
    icon: Briefcase,
    title: 'Flexibilidad laboral',
    content:
      'Con el auge del trabajo remoto y los empleos freelance, muchas personas buscan viviendas que se adapten a su estilo de trabajo flexible. El Flex Living ofrece espacios que pueden funcionar tanto como hogar como oficina.',
  },
  {
    icon: PiggyBank,
    title: 'Reducción de costos',
    content:
      'Al evitar la compra de una propiedad, se eliminan costos como el mantenimiento, impuestos de propiedad y seguros de hogar. Además, los alquileres flexibles suelen incluir servicios y mobiliario, lo que reduce los gastos adicionales.',
  },
  {
    icon: Sparkles,
    title: 'Experiencias enriquecedoras',
    content:
      'Vivir en diferentes lugares permite acumular experiencias diversas y enriquecedoras, conocer gente nueva y desarrollar una perspectiva más amplia del mundo.',
  },
  {
    icon: Users,
    title: 'Red de contactos y comunidad',
    content:
      'Los espacios de Flex Living suelen fomentar la comunidad entre sus residentes, lo que facilita la creación de una red de contactos profesional y personal valiosa.',
  },
]

function AdvantageCard({ advantage, index }) {
  const [isOpen, setIsOpen] = useState(false)
  const Icon = advantage.icon

  return (
    <motion.div
      className="advantage-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div
        className="advantage-header"
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setIsOpen(!isOpen)
          }
        }}
      >
        <div className="advantage-header-left">
          <div className="advantage-icon" aria-hidden="true">
            <Icon size={20} />
          </div>
          <h3>{advantage.title}</h3>
        </div>
        <div className={`advantage-toggle${isOpen ? ' open' : ''}`}>
          <ChevronDown size={20} />
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="advantage-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="advantage-content-inner">
              {advantage.content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function FlexLiving() {
  return (
    <section id="flex-living" className="flex-living-section">
      <div className="container">
        <motion.div
          className="flex-living-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Flex Living</h2>
        </motion.div>
        <motion.p
          className="flex-living-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Un estilo de vida
        </motion.p>
        <motion.p
          className="flex-living-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          El concepto de Flex Living redefine la forma en que vivimos,
          ofreciendo soluciones de vivienda adaptables que se ajustan a tu
          ritmo de vida. Descubre las ventajas de un estilo de vida sin
          ataduras.
        </motion.p>
      </div>

      <div className="advantages-grid">
        {ADVANTAGES.map((advantage, index) => (
          <AdvantageCard
            key={advantage.title}
            advantage={advantage}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

export default FlexLiving
