import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-canvas-dark relative overflow-hidden pt-24 pb-8">
      <motion.div
        className="absolute bottom-[-4vw] left-1/2 -translate-x-1/2 whitespace-nowrap select-none pointer-events-none"
        animate={{ x: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <span className="font-condensed font-700 text-[18vw] md:text-[18vw] leading-none tracking-[-0.02em] text-paper/[0.06] block">
          SHAMIQUE KHAN
        </span>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between flex-wrap gap-8">
          <div>
            <p className="text-paper-soft text-sm">Based in Etawah, India</p>
            <p className="text-paper-soft text-sm">Open to research collabs & internships</p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/shamiquekhan"
              target="_blank"
              rel="noopener noreferrer"
              className="font-condensed uppercase text-sm text-paper hover:underline underline-offset-4 decoration-hairline"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/shamique-khan"
              target="_blank"
              rel="noopener noreferrer"
              className="font-condensed uppercase text-sm text-paper hover:underline underline-offset-4 decoration-hairline"
            >
              LinkedIn
            </a>
            <a
              href="mailto:shamiquekhan18@gmail.com"
              className="font-condensed uppercase text-sm text-paper hover:underline underline-offset-4 decoration-hairline"
            >
              Email
            </a>
            <a
              href="https://quantml.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="font-condensed uppercase text-sm text-paper hover:underline underline-offset-4 decoration-hairline"
            >
              quantml.tech
            </a>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-paper-soft/20 flex justify-between text-xs text-paper-soft">
          <span>© 2026 Shamique Khan</span>
          <span>Built with React, Vite, Tailwind, Framer Motion</span>
        </div>
      </div>
    </footer>
  )
}
