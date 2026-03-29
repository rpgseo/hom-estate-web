import { useState, useEffect } from 'react'
import { Home } from 'lucide-react'
import './Header.css'

const NAV_ITEMS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Ciudades', href: '#ciudades' },
  { label: 'Flex Living', href: '#flex-living' },
  { label: 'Contacto', href: '#contacto' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`} role="banner">
      <div className="header-inner">
        <a href="#inicio" className="logo" aria-label="HOM.ESTATE inicio">
          <Home strokeWidth={2.5} />
          HOM<span>.</span>ESTATE
        </a>

        <nav className="nav-links" aria-label="Navegación principal">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <button
          className={`hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`mobile-menu${menuOpen ? ' open' : ''}`}
          aria-label="Navegación móvil"
        >
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={handleNavClick}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
