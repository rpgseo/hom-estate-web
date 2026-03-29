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

const seoContent = `
    <!-- Prerendered SEO content (hidden, for crawlers) -->
    <noscript>
      <div>
        <h1>HOM.ESTATE - Inversión inmobiliaria inteligente</h1>
        <p>En Hom Estate, nos especializamos en optimizar el rendimiento de sus activos inmobiliarios a través de estrategias avanzadas y un enfoque integral.</p>
        <h2>Nuestros Servicios</h2>
        <ul>
          <li>House Flipping - Adquisición, reforma y venta de propiedades para maximizar el retorno de inversión.</li>
          <li>Buy to Rent - Gestión experta en alquileres, incluyendo opciones de alquiler turístico y temporal.</li>
          <li>Rent to Rent - Subarrendamiento de propiedades para maximizar ingresos pasivos.</li>
          <li>Property Management - Administración completa de propiedades en Zaragoza, Madrid y Barcelona.</li>
          <li>Flex Living - Estilo de vida flexible adaptado a las necesidades cambiantes.</li>
          <li>Consulting - Asesoramiento personalizado en inversión inmobiliaria.</li>
        </ul>
        <h2>Nuestras Ciudades</h2>
        <p>Barcelona - La ciudad más cosmopolita de España.</p>
        <p>Madrid - La capital, ciudad llena de energía y vitalidad.</p>
        <p>Zaragoza - La cuarta ciudad más grande de España con gran calidad de vida.</p>
        <h2>Flex Living</h2>
        <p>Un estilo de vida flexible que se adapta a las necesidades cambiantes de las personas en cuanto a vivienda y trabajo.</p>
        <h2>Contacto</h2>
        <p>7 Calle Tomas Breton, Zaragoza 50005, ES</p>
        <p>Teléfono: +34 636 155 847</p>
        <p>Email: info@hom.estate</p>
      </div>
    </noscript>`

const structuredData = `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": "HOM.ESTATE",
      "url": "https://www.hom.estate",
      "description": "Inversión inmobiliaria inteligente. Optimizamos el rendimiento de sus activos inmobiliarios en Barcelona, Madrid y Zaragoza.",
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
      "serviceType": ["House Flipping", "Buy to Rent", "Rent to Rent", "Property Management", "Flex Living", "Consulting"]
    }
    </script>`

try {
  let html = readFileSync(distPath, 'utf-8')

  // Inject structured data before </head>
  html = html.replace('</head>', `${structuredData}\n  </head>`)

  // Inject noscript SEO content after <div id="root">
  html = html.replace('<div id="root"></div>', `<div id="root"></div>${seoContent}`)

  writeFileSync(distPath, html)
  console.log('✅ Prerendering complete: SEO content + structured data injected')
} catch (err) {
  console.error('❌ Prerendering failed:', err.message)
  process.exit(1)
}
