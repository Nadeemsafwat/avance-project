import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-primary/95 backdrop-blur-sm shadow-2xl py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none group">
            <span className="font-display text-2xl font-light text-white tracking-wider group-hover:text-gold transition-colors duration-300">
              Avance
            </span>
            <span className="font-mono text-[9px] tracking-[0.5em] text-gold uppercase mt-0.5">
              Designs
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 border border-gold/60 text-gold font-body font-light text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-gold hover:text-primary transition-all duration-500"
          >
            Get In Touch
          </Link>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-white transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-px bg-white transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-4 h-px bg-white transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2 w-6' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-primary transition-all duration-700 md:hidden flex flex-col justify-center items-center gap-10 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="gold-line mx-auto mb-4" />
        {navItems.map((item, i) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `font-display text-4xl font-light tracking-wide transition-all duration-300 ${
                isActive ? 'text-gold' : 'text-white hover:text-gold'
              }`
            }
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            {item.label}
          </NavLink>
        ))}
        <div className="gold-line mx-auto mt-4" />
      </div>
    </>
  )
}
