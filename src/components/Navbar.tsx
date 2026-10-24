import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/research', label: 'Research' },
  { to: '/certificates', label: 'Certificates' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const menuPanelRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (open) {
      previousFocusRef.current = document.activeElement as HTMLElement
      menuPanelRef.current?.querySelector<HTMLElement>('a[href]')?.focus()
      return
    }

    previousFocusRef.current?.focus()
    previousFocusRef.current = null
  }, [open])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)

      if (event.key === 'Tab' && open && menuPanelRef.current) {
        const focusable = Array.from(menuPanelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'))
        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (!first || !last) return
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <nav
      aria-label="Primary navigation"
      className={`site-nav fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-canvas/90 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <Link
          to="/"
          aria-label="Shamique Khan home"
          className="font-condensed font-700 text-lg tracking-tight text-ink"
        >
          SK
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                aria-current={isActive ? 'page' : undefined}
                className="font-condensed text-sm transition-colors duration-200 relative"
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

        </div>

        <button
          ref={menuButtonRef}
          className={`relative z-menu md:hidden min-h-11 min-w-11 p-2 inline-flex items-center justify-center transition-colors ${
            open ? 'text-paper' : 'text-ink'
          }`}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id="mobile-navigation"
            ref={menuPanelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="mobile-nav-panel fixed inset-0 bg-canvas-dark z-50 flex flex-col items-center justify-center gap-6 px-6"
          >
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                aria-current={pathname === link.to ? 'page' : undefined}
                className="font-condensed text-3xl text-paper hover:text-paper-soft transition-colors px-4 py-2"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
