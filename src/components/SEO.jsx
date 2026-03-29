import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { BASE_URL, SEO_CONFIG } from '../seo-config'

function setMeta(name, content, attr = 'name') {
  if (!content) return
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href) {
  if (!href) return
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setJsonLd(id, data) {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

function SEO() {
  const { pathname } = useLocation()

  useEffect(() => {
    const config = SEO_CONFIG[pathname]
    if (!config) return

    const url = `${BASE_URL}${pathname === '/' ? '' : pathname}`

    document.title = config.title

    setMeta('description', config.description)
    setMeta('keywords', config.keywords)
    setMeta('robots', 'noindex, nofollow')
    setMeta('googlebot', 'noindex, nofollow')

    setLink('canonical', url)

    setMeta('og:title', config.title, 'property')
    setMeta('og:description', config.description, 'property')
    setMeta('og:url', url, 'property')
    setMeta('og:type', 'website', 'property')
    setMeta('og:site_name', 'HOM.ESTATE', 'property')
    setMeta('og:locale', 'es_ES', 'property')
    setMeta('og:image', `${BASE_URL}/images/og-default.jpg`, 'property')

    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', config.title)
    setMeta('twitter:description', config.description)
    setMeta('twitter:image', `${BASE_URL}/images/og-default.jpg`)

    setJsonLd('ld-webpage', {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: config.title,
      description: config.description,
      url,
      inLanguage: 'es',
      isPartOf: {
        '@type': 'WebSite',
        name: 'HOM.ESTATE',
        url: BASE_URL,
      },
    })
  }, [pathname])

  return null
}

export default SEO
