import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, Phone, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './Header.css'

const NAV_DROPDOWNS = [
  {
    label: 'HOMs',
    items: [
      { label: 'Barcelona', href: '/apartamento-bruc' },
      { label: 'Madrid', href: '/gestion-alquiler-habitaciones-madrid' },
      { label: 'Zaragoza', href: '/gestion-alquiler-habitaciones-zaragoza' },
    ],
  },
  {
    label: 'Inversores',
    items: [
      { label: 'Gestión de activos', href: '/gestion-alquiler-habitaciones-zaragoza' },
      { label: 'Consulting', href: '/consulting' },
      { label: 'Reformas', href: '/reformas' },
      { label: 'Proyectos', href: '/por-que-coliving' },
    ],
  },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [openMobileSub, setOpenMobileSub] = useState(null)
  const dropdownTimeout = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setOpenMobileSub(null)
  }, [location.pathname])

  const handleDropdownEnter = (idx) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setOpenDropdown(idx)
  }

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150)
  }

  const toggleMobileSub = (idx) => {
    setOpenMobileSub(openMobileSub === idx ? null : idx)
  }

  const dropdownVariants = {
    hidden: { opacity: 0, y: -8, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
    exit: { opacity: 0, y: -8, scale: 0.96, transition: { duration: 0.15, ease: 'easeIn' } },
  }

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`} role="banner">
      <div className="header-inner">
        <Link to="/" className="logo" aria-label="HOM.ESTATE inicio">
          <Home strokeWidth={2.5} />
          HOM<span>.</span>ESTATE
        </Link>

        <nav className="nav-links" aria-label="Navegacion principal">
          {NAV_DROPDOWNS.map((dropdown, idx) => (
            <div
              key={dropdown.label}
              className="nav-dropdown-wrapper"
              onMouseEnter={() => handleDropdownEnter(idx)}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="nav-dropdown-trigger" aria-expanded={openDropdown === idx}>
                {dropdown.label}
                <ChevronDown size={14} className={`chevron${openDropdown === idx ? ' rotated' : ''}`} />
              </button>
              <AnimatePresence>
                {openDropdown === idx && (
                  <motion.div
                    className="nav-dropdown-menu"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {dropdown.items.map((item) => (
                      <Link key={item.href} to={item.href} className="nav-dropdown-item">
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <a href="tel:+34636155847" className="nav-phone" aria-label="Llamar">
            <Phone size={18} />
          </a>
        </nav>

        <button
          className={`hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              className="mobile-menu"
              aria-label="Navegacion movil"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Link to="/" className="mobile-menu-link">Inicio</Link>
              {NAV_DROPDOWNS.map((dropdown, idx) => (
                <div key={dropdown.label} className="mobile-submenu-group">
                  <button
                    className="mobile-submenu-trigger"
                    onClick={() => toggleMobileSub(idx)}
                  >
                    {dropdown.label}
                    <ChevronDown
                      size={16}
                      className={`chevron${openMobileSub === idx ? ' rotated' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {openMobileSub === idx && (
                      <motion.div
                        className="mobile-submenu-items"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        {dropdown.items.map((item) => (
                          <Link key={item.href} to={item.href} className="mobile-submenu-link">
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <a href="tel:+34636155847" className="mobile-menu-link mobile-phone">
                <Phone size={18} /> Llamar
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header
