import { motion } from 'framer-motion'
import { Mail, ExternalLink, Globe } from 'lucide-react'

const links = [
  { label: 'Email', href: 'mailto:shamiquekhan18@gmail.com', icon: Mail },
  { label: 'GitHub', href: 'https://github.com/shamiquekhan', icon: ExternalLink },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/shamique-khan', icon: ExternalLink },
  { label: 'LeetCode', href: 'https://leetcode.com/u/ShamiqueKhan/', icon: ExternalLink },
  { label: 'quantml.tech', href: 'https://quantml.tech', icon: Globe },
]

export default function Contact() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-canvas">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="font-condensed text-xs uppercase tracking-[0.15em] text-ink-soft mb-4">Contact</p>
          <h1 className="font-display italic text-5xl md:text-7xl text-ink leading-[0.92] mb-8">
            Let&apos;s talk.
          </h1>
          <p className="text-ink-soft text-base md:text-lg max-w-lg leading-relaxed">
            Open to research collaborations, internships, and conversations about systems that prove themselves.
            I reply to every email.
          </p>
        </motion.div>

        <div className="space-y-6">
          {links.map((link, i) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-4 py-4 border-b border-hairline group cursor-pointer"
              >
                <Icon size={18} className="text-ink-soft group-hover:text-ink transition-colors" />
                <span className="font-condensed text-lg text-ink group-hover:translate-x-1 transition-transform">
                  {link.label}
                </span>
              </motion.a>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-ink-soft text-sm"
        >
          Based in Etawah, India. Available for remote work worldwide.
        </motion.p>
      </div>
    </div>
  )
}
