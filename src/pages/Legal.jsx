import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import './pages.css'

const PAGES = {
  '/aviso-legal': {
    title: 'Aviso Legal',
    content: [
      {
        heading: 'Datos identificativos',
        text: 'En cumplimiento con el deber de informacion recogido en el articulo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Informacion y del Comercio Electronico, a continuacion se reflejan los datos: HOM.ESTATE, con domicilio en 7 Calle Tomas Breton, Zaragoza 50005, Espana. Email: info@hom.estate. Telefono: +34 636 155 847.',
      },
      {
        heading: 'Propiedad intelectual e industrial',
        text: 'El sitio web, incluyendo a titulo enunciativo pero no limitativo su programacion, edicion, compilacion y demas elementos necesarios para su funcionamiento, los disenos, logotipos, texto y/o graficos son propiedad del prestador o en su caso dispone de licencia o autorizacion expresa por parte de los autores.',
      },
      {
        heading: 'Condiciones de uso',
        text: 'El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que HOM.ESTATE ofrece a traves de su sitio web y con caracter enunciativo pero no limitativo, a no emplearlos para incurrir en actividades ilicitas, ilegales o contrarias a la buena fe y al orden publico.',
      },
      {
        heading: 'Legislacion aplicable',
        text: 'Para la resolucion de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en el desarrolladas, sera de aplicacion la legislacion espanola, a la que se someten expresamente las partes.',
      },
    ],
  },
  '/politica-de-privacidad': {
    title: 'Politica de Privacidad',
    content: [
      {
        heading: 'Responsable del tratamiento',
        text: 'HOM.ESTATE es el responsable del tratamiento de los datos personales del usuario y le informa que estos datos seran tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679 (RGPD) y la Ley Organica 3/2018 (LOPDGDD).',
      },
      {
        heading: 'Finalidad del tratamiento',
        text: 'Los datos personales se tratan con la finalidad de gestionar la relacion comercial, atender consultas, enviar informacion comercial sobre nuestros servicios inmobiliarios y mantener la comunicacion con los usuarios interesados.',
      },
      {
        heading: 'Derechos del usuario',
        text: 'El usuario puede ejercer sus derechos de acceso, rectificacion, supresion, oposicion, limitacion del tratamiento y portabilidad de los datos enviando una solicitud a info@hom.estate junto con una copia de su documento de identidad.',
      },
      {
        heading: 'Conservacion de datos',
        text: 'Los datos personales se conservaran mientras se mantenga la relacion comercial o durante los anos necesarios para cumplir con las obligaciones legales. Se procedera a la supresion de los datos una vez que dejen de ser necesarios para la finalidad para la que fueron recabados.',
      },
    ],
  },
}

function Legal() {
  const { pathname } = useLocation()
  const page = PAGES[pathname] || PAGES['/aviso-legal']

  return (
    <>
      <PageHero
        title={page.title}
        breadcrumbs={[{ label: page.title }]}
      />

      <section className="page-section">
        <div className="page-container">
          <motion.div
            className="legal-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {page.content.map((section) => (
              <div key={section.heading} className="legal-section">
                <h2>{section.heading}</h2>
                <p>{section.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Legal
