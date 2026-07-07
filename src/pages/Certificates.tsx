import { motion } from 'framer-motion'
import { certificates } from '../data/certificates'

const categories = [
  'Research',
  'Generative AI & LLMs',
  'Machine Learning & Data Science',
  'Python & Development',
  'Cloud & Data Tools',
  'Professional Development',
] as const

export default function Certificates() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-canvas">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-condensed text-xs uppercase tracking-[0.15em] text-ink-soft mb-4">Credentials</p>
          <h1 className="font-condensed font-700 text-5xl md:text-7xl text-ink leading-[0.92] tracking-[-0.01em]">
            Certificates
          </h1>
          <p className="text-ink-soft text-sm md:text-base mt-4 max-w-lg">
            Research publications, coursework, and professional credentials. Secondary proof — the work itself comes first.
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category) => {
            const items = certificates.filter((c) => c.category === category)
            if (items.length === 0) return null
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="font-condensed text-xs uppercase tracking-widest text-ink-soft mb-4">{category}</h2>
                <div className="border-t border-hairline">
                  {items.map((cert) => (
                    <div
                      key={cert.title}
                      className="border-b border-hairline py-3 flex justify-between items-center gap-4"
                    >
                      <span className="font-condensed text-sm md:text-base text-ink">{cert.title}</span>
                      <span className="font-condensed text-[10px] md:text-xs text-ink-soft uppercase tracking-wide shrink-0">{cert.issuer}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
