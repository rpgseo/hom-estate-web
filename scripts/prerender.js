/**
 * Simple prerendering script for SEO.
 * Reads the built index.html and injects meta content
 * so search engines see real content without JS.
 */
import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distPath = resolve(__dirname, '../dist/index.html')

const ROUTES = [
  { path: '/', title: 'HOM.ESTATE - Inversion inmobiliaria inteligente', description: 'Optimizamos el rendimiento de sus activos inmobiliarios en Barcelona, Madrid y Zaragoza.' },
  { path: '/consulting', title: 'Consultoria de Inversion Inmobiliaria | HOM.ESTATE', description: 'Servicios de consultoria inmobiliaria: analisis de mercado, estrategia de inversion, due diligence y optimizacion fiscal.' },
  { path: '/reformas', title: 'Reformas Integrales en Zaragoza | HOM.ESTATE', description: 'Reformas integrales orientadas a maximizar el valor de su propiedad con calidad y rentabilidad.' },
  { path: '/colivings-zaragoza', title: 'Colivings en Zaragoza | HOM.ESTATE', description: 'Descubre nuestros espacios de coliving en las mejores ubicaciones de Zaragoza. Todo incluido.' },
  { path: '/coliving-zaragoza', title: 'El Mejor Coliving en Zaragoza | HOM.ESTATE', description: 'Coliving en el centro de Zaragoza con WiFi, amueblado y todos los servicios incluidos.' },
  { path: '/coliving-zaragoza-sagasta', title: 'Coliving Premium Sagasta Zaragoza | HOM.ESTATE', description: 'Coliving premium en Paseo Sagasta, Zaragoza. Habitaciones con servicios incluidos.' },
  { path: '/coliving-zaragoza-tb11', title: 'Coliving Universidad TB11 Zaragoza | HOM.ESTATE', description: 'Coliving en zona universidad de Zaragoza. Ideal para estudiantes y profesionales.' },
  { path: '/coliving-zaragoza-jjr5', title: 'Coliving Universidad JJR5 Zaragoza | HOM.ESTATE', description: 'Coliving en zona centro universitaria de Zaragoza con todos los servicios incluidos.' },
  { path: '/coliving-zaragoza-pc29', title: 'Coliving Pedro Cerbuna Zaragoza | HOM.ESTATE', description: 'Coliving en Calle Pedro Cerbuna, Zaragoza. Servicios incluidos y zonas comunes.' },
  { path: '/coliving-zaragoza-ca47', title: 'Coliving Universidad CA47 Zaragoza | HOM.ESTATE', description: 'Coliving en zona universidad-centro de Zaragoza. Amueblado y todo incluido.' },
  { path: '/apartamento-bruc', title: 'Apartamento de Lujo en Barcelona | HOM.ESTATE', description: 'Exclusivo apartamento de lujo en Calle Bruc, Eixample, Barcelona. Acabados premium.' },
  { path: '/gestion-alquiler-habitaciones-zaragoza', title: 'Gestion de Alquiler en Zaragoza | HOM.ESTATE', description: 'Servicio profesional de gestion de alquiler de habitaciones en Zaragoza. Maximice su rentabilidad.' },
  { path: '/gestion-alquiler-habitaciones-madrid', title: 'Gestion de Alquiler en Madrid | HOM.ESTATE', description: 'Gestion integral de alquiler de habitaciones en Madrid. Servicio profesional para propietarios.' },
  { path: '/por-que-coliving', title: 'Por Que Coliving | HOM.ESTATE', description: 'Descubre las ventajas del coliving: ahorro, comunidad, flexibilidad y calidad de vida.' },
  { path: '/blog', title: 'Blog de Inversion Inmobiliaria | HOM.ESTATE', description: 'Articulos y guias sobre inversion inmobiliaria, gestion de alquileres y coliving.' },
  { path: '/aviso-legal', title: 'Aviso Legal | HOM.ESTATE', description: 'Aviso legal y condiciones de uso del sitio web HOM.ESTATE.' },
  { path: '/politica-de-privacidad', title: 'Politica de Privacidad | HOM.ESTATE', description: 'Politica de privacidad y proteccion de datos de HOM.ESTATE.' },
]

const seoContent = `
    <!-- Prerendered SEO content (hidden, for crawlers) -->
    <noscript>
      <div>
        <h1>HOM.ESTATE - Inversion inmobiliaria inteligente</h1>
        <p>En Hom Estate, nos especializamos en optimizar el rendimiento de sus activos inmobiliarios a traves de estrategias avanzadas y un enfoque integral.</p>
        <h2>Nuestros Servicios</h2>
        <ul>
          <li>Consultoria de inversion inmobiliaria - Analisis de mercado, estrategia y optimizacion fiscal.</li>
          <li>Reformas integrales - Transformacion de espacios para maximizar el valor.</li>
          <li>Gestion de alquiler - Administracion completa de propiedades.</li>
          <li>Coliving - Espacios de vida compartida en las mejores ubicaciones.</li>
        </ul>
        <h2>Colivings en Zaragoza</h2>
        <ul>
          <li><a href="/coliving-zaragoza">Coliving Zaragoza Centro</a></li>
          <li><a href="/coliving-zaragoza-sagasta">Coliving Sagasta Premium</a></li>
          <li><a href="/coliving-zaragoza-tb11">Coliving Universidad TB11</a></li>
          <li><a href="/coliving-zaragoza-jjr5">Coliving Universidad JJR5</a></li>
          <li><a href="/coliving-zaragoza-pc29">Coliving Pedro Cerbuna</a></li>
          <li><a href="/coliving-zaragoza-ca47">Coliving Universidad CA47</a></li>
        </ul>
        <h2>Nuestras Ciudades</h2>
        <p><a href="/apartamento-bruc">Barcelona</a> - Apartamento de lujo en el Eixample.</p>
        <p><a href="/gestion-alquiler-habitaciones-madrid">Madrid</a> - Gestion profesional de alquileres.</p>
        <p><a href="/gestion-alquiler-habitaciones-zaragoza">Zaragoza</a> - Colivings y gestion de propiedades.</p>
        <h2>Servicios</h2>
        <p><a href="/consulting">Consultoria</a> | <a href="/reformas">Reformas</a> | <a href="/por-que-coliving">Coliving</a></p>
        <h2>Blog</h2>
        <p><a href="/blog">Articulos sobre inversion inmobiliaria, gestion de alquileres y coliving.</a></p>
        <h2>Contacto</h2>
        <p>7 Calle Tomas Breton, Zaragoza 50005, ES</p>
        <p>Telefono: +34 636 155 847</p>
        <p>Email: info@hom.estate</p>
        <p><a href="/aviso-legal">Aviso legal</a> | <a href="/politica-de-privacidad">Politica de privacidad</a></p>
      </div>
    </noscript>`

const structuredData = `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": "HOM.ESTATE",
      "url": "https://www.hom.estate",
      "description": "Inversion inmobiliaria inteligente. Optimizamos el rendimiento de sus activos inmobiliarios en Barcelona, Madrid y Zaragoza.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "7 Calle Tomas Breton",
        "addressLocality": "Zaragoza",
        "addressRegion": "AR",
        "postalCode": "50005",
        "addressCountry": "ES"
      },
      "telephone": "+34636155847",
      "areaServed": [
        { "@type": "City", "name": "Barcelona" },
        { "@type": "City", "name": "Madrid" },
        { "@type": "City", "name": "Zaragoza" }
      ],
      "serviceType": ["Consulting", "Reformas", "Property Management", "Coliving", "Gestion de Alquiler"]
    }
    </script>`

try {
  let html = readFileSync(distPath, 'utf-8')

  // Inject structured data before </head>
  html = html.replace('</head>', `${structuredData}\n  </head>`)

  // Inject noscript SEO content after <div id="root">
  html = html.replace('<div id="root"></div>', `<div id="root"></div>${seoContent}`)

  writeFileSync(distPath, html)
  console.log('Prerendering complete: SEO content + structured data injected')
  console.log(`Registered ${ROUTES.length} routes for SEO`)
} catch (err) {
  console.error('Prerendering failed:', err.message)
  process.exit(1)
}
