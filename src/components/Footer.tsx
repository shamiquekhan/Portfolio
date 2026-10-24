import { motion, useReducedMotion } from 'framer-motion'
import { socialLinks } from '../data/socials'

export default function Footer() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <footer className="bg-canvas-dark relative overflow-hidden py-12 md:py-24">
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-0 flex justify-center overflow-hidden select-none pointer-events-none"
        animate={prefersReducedMotion ? undefined : { x: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <span className="font-condensed font-700 text-[clamp(5rem,18vw,16rem)] leading-[0.72] tracking-[-0.04em] text-paper/[0.1] block whitespace-nowrap">
          SHAMIQUE KHAN
        </span>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-8">
          <div>
            <p className="text-paper-soft text-sm">Based in Etawah, India</p>
            <p className="text-paper-soft text-sm">Open to research collabs & internships</p>
          </div>
          <nav aria-label="Social links" className="flex flex-wrap gap-x-5 gap-y-3 sm:justify-end">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-condensed text-sm text-paper hover:underline underline-offset-4 decoration-hairline"
              >
                {social.label}
              </a>
            ))}
            <a
              href="mailto:shamiquekhan18@gmail.com"
              className="font-condensed text-sm text-paper hover:underline underline-offset-4 decoration-hairline"
            >
              Email
            </a>
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-paper-soft/20 flex flex-col sm:flex-row sm:justify-between gap-3 text-xs text-paper-soft">
          <span>© 2026 Shamique Khan</span>
          <span>Built with React, Vite, Tailwind, Framer Motion</span>
        </div>
      </div>
    </footer>
  )
}
