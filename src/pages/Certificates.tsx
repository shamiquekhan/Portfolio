import { motion } from 'framer-motion'
import { certificates } from '../data/certificates'

const categories = [
  'Generative AI & LLMs',
  'Machine Learning & Data Science',
  'Cloud & Data Tools',
  'Professional Development',
] as const

const education = [
  {
    school: 'Vellore Institute of Technology (VIT), Bhopal',
    credential: 'B.Tech, Computer Science and Engineering (AI & ML)',
    dates: 'Jul 2025 – Jul 2029 · In progress',
  },
  {
    school: 'Aligarh Muslim University',
    credential: 'Senior Secondary, PCM & Computer Science',
    dates: '2022 – 2025 · Distinctions in four subjects',
  },
]

const languages = [
  'English · full professional',
  'Hindi · native',
  'Urdu · native',
  'German · limited working',
]

export default function Certificates() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-canvas">
      <div className="max-w-4xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-condensed text-sm text-ink-soft mb-5">Credentials</p>
          <h1 className="font-condensed font-700 text-5xl sm:text-6xl md:text-8xl text-ink leading-[0.9] tracking-[-0.04em]">
            Certificates and context.
          </h1>
          <p className="text-ink-soft text-sm md:text-base mt-6 max-w-lg">
            Secondary proof for the work: focused coursework, professional credentials, education, and languages.
          </p>
        </motion.header>

        <div className="space-y-12">
          {categories.map((category) => {
            const items = certificates.filter((certificate) => certificate.category === category)
            if (items.length === 0) return null

            return (
              <motion.section
                key={category}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="font-condensed text-sm text-ink-soft mb-4">{category}</h2>
                <div className="border-t border-hairline">
                  {items.map((certificate) => (
                    <div
                      key={certificate.title}
                      className="border-b border-hairline py-4 flex flex-col items-start md:flex-row md:justify-between md:items-center gap-1 md:gap-4"
                    >
                      <span className="font-condensed text-sm md:text-base text-ink">{certificate.title}</span>
                      <span className="font-condensed text-xs text-ink-soft">{certificate.issuer}</span>
                    </div>
                  ))}
                </div>
              </motion.section>
            )
          })}
        </div>

        <section className="border-t border-hairline mt-20 pt-12">
          <h2 className="font-condensed text-sm text-ink-soft mb-4">Education</h2>
          <div className="border-t border-hairline">
            {education.map((entry) => (
              <div key={entry.school} className="border-b border-hairline py-4">
                <div className="flex flex-wrap justify-between gap-2">
                  <span className="font-condensed text-base text-ink">{entry.credential}</span>
                  <span className="font-condensed text-sm text-ink-soft">{entry.dates}</span>
                </div>
                <p className="text-sm text-ink-soft mt-1">{entry.school}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-hairline mt-12 pt-12">
          <h2 className="font-condensed text-sm text-ink-soft mb-4">Languages</h2>
          <div className="flex flex-wrap gap-2">
            {languages.map((language) => (
              <span key={language} className="font-condensed text-sm text-ink border border-hairline px-3 py-2">
                {language}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
