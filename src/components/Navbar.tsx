import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/research', label: 'Research' },
  { to: '/certificates', label: 'Certificates' },
  { to: '/contact', label: 'Contact' },
]

const startupLinks = [
  { to: '/startups/quantml', label: 'QuantML' },
  { to: '/startups/scandium-labs', label: 'Scandium Labs' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [startupsOpen, setStartupsOpen] = useState(false)
  const { pathname } = useLocation()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setStartupsOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setStartupsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const isStartupActive = pathname.startsWith('/startups/')

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-canvas/90 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <Link to="/" className="font-condensed font-700 text-lg tracking-tight text-ink">
          SK
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                className="font-condensed text-sm uppercase tracking-[0.08em] transition-colors duration-200 relative"
                style={{ color: isActive ? 'var(--color-ink)' : 'var(--color-ink-soft)' }}
              >
                {link.label}
                <span
                  className="absolute bottom-[-2px] left-0 h-[1px] bg-ink transition-transform duration-300 origin-left"
                  style={{ transform: isActive ? 'scaleX(1)' : 'scaleX(0)', width: '100%' }}
                />
              </Link>
            )
          })}

          {/* Startups dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setStartupsOpen(!startupsOpen)}
              className="font-condensed text-sm uppercase tracking-[0.08em] transition-colors duration-200 flex items-center gap-1"
              style={{ color: isStartupActive ? 'var(--color-ink)' : 'var(--color-ink-soft)' }}
            >
              Startups
              <motion.span
                animate={{ rotate: startupsOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="inline-flex"
              >
                <ChevronDown size={12} />
              </motion.span>
            </button>
            <AnimatePresence>
              {startupsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full right-0 mt-2 bg-canvas border border-hairline min-w-[180px]"
                >
                  {startupLinks.map((sl) => {
                    const isSlActive = pathname === sl.to
                    return (
                      <Link
                        key={sl.to}
                        to={sl.to}
                        className="block px-4 py-3 font-condensed text-sm uppercase tracking-[0.04em] transition-colors hover:bg-hairline/30"
                        style={{ color: isSlActive ? 'var(--color-ink)' : 'var(--color-ink-soft)' }}
                        onClick={() => setStartupsOpen(false)}
                      >
                        {sl.label}
                      </Link>
                    )
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-canvas-dark z-40 flex flex-col items-center justify-center gap-8"
          >
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-display italic text-4xl text-paper hover:text-paper-soft transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <p className="font-condensed text-xs uppercase tracking-[0.08em] text-paper-soft mt-4">
              Startups
            </p>
            {startupLinks.map((sl) => (
              <Link
                key={sl.to}
                to={sl.to}
                className="font-condensed text-2xl text-paper hover:text-paper-soft transition-colors"
                onClick={() => setOpen(false)}
              >
                {sl.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
