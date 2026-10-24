import { motion } from 'framer-motion'
import { socialLinks } from '../data/socials'

const links = [
  { label: 'Email', href: 'mailto:shamiquekhan18@gmail.com', detail: 'shamiquekhan18@gmail.com' },
  ...socialLinks.map((social) => ({ ...social, detail: social.href.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '') })),
]

export default function Contact() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-canvas">
      <div className="max-w-4xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="font-condensed text-sm text-ink-soft mb-5">Contact / profiles</p>
          <h1 className="font-display text-5xl md:text-7xl text-ink leading-[0.92] mb-8">Let&apos;s talk.</h1>
          <p className="text-ink-soft text-base md:text-lg max-w-xl leading-relaxed">
            Open to research collaborations, engineering roles, and conversations about systems that need to work outside a demo.
          </p>
        </motion.header>

        <nav aria-label="Contact and social profiles" className="grid sm:grid-cols-2 border-t border-hairline">
          {links.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="group min-h-28 border-b border-hairline sm:odd:border-r sm:odd:pr-8 sm:even:pl-8 py-6 flex flex-col justify-between"
            >
              <span className="font-condensed text-lg text-ink group-hover:text-ink-soft transition-colors">{link.label}</span>
              <span className="break-words font-condensed text-sm text-ink-soft group-hover:text-ink transition-colors">{link.detail}</span>
            </motion.a>
          ))}
        </nav>

        <p className="mt-16 text-ink-soft text-sm">Based in Etawah, India. Available for remote work worldwide.</p>
      </div>
    </div>
  )
}
