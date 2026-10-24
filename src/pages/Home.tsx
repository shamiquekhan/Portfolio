import { useRef } from 'react'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import AnimatedLetter from '../components/AnimatedLetter'
import CardReveal from '../components/CardReveal'
import SectionReveal from '../components/SectionReveal'
import TimelineEntry from '../components/TimelineEntry'
import TypewriterEffect from '../components/TypewriterEffect'
import WordsPullUp from '../components/WordsPullUp'
import { featuredProjects } from '../data/projects'
import { experienceData } from '../data/experience'
import { socialLinks } from '../data/socials'

const proofPoints = [
  { value: '30+', label: 'public projects' },
  { value: '4', label: 'research publications' },
  { value: '6', label: 'industry engagements' },
  { value: '118', label: 'LeetCode problems' },
]

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: pageRef })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { damping: 30, stiffness: 150 })
  const springY = useSpring(mouseY, { damping: 30, stiffness: 150 })

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect()
    mouseX.set((event.clientX - rect.left - rect.width / 2) * 0.02)
    mouseY.set((event.clientY - rect.top - rect.height / 2) * 0.02)
  }

  return (
    <div ref={pageRef}>
      <section
        className="min-h-[calc(100svh-4rem)] bg-canvas flex items-end px-6 md:px-12 py-16 md:py-20"
        onMouseMove={handleMouseMove}
      >
        <div className="max-w-7xl mx-auto w-full">
          <TypewriterEffect
            text="AI engineer · agentic AI · machine learning · research"
            className="font-condensed text-sm text-ink-soft mb-8"
            speed={0.03}
            delay={0.2}
          />

          <div className="grid lg:grid-cols-[minmax(0,1fr)_24rem] gap-10 lg:gap-20 items-end">
            <motion.div style={{ x: springX, y: springY }}>
              <WordsPullUp
                text="AI systems you can inspect."
                className="max-w-5xl"
                wordClassName="text-[clamp(3.5rem,9vw,8.5rem)] leading-[0.9] tracking-[-0.045em] text-ink font-condensed font-600"
              />
            </motion.div>

            <motion.div
              className="max-w-md lg:pb-2"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.p className="text-base md:text-lg text-ink-soft leading-relaxed" style={{ y: heroY }}>
                I build agentic AI, retrieval systems, machine-learning pipelines, and research software from raw data to a result someone else can verify.
              </motion.p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
                <Link
                  to="/work"
                  className="border border-ink bg-ink text-paper px-6 py-3 text-center font-condensed text-sm hover:bg-transparent hover:text-ink transition-colors duration-200"
                >
                  See the work
                </Link>
                <Link
                  to="/research"
                  className="text-ink border-b border-ink/30 hover:border-ink transition-colors font-condensed text-sm py-3 inline-flex items-center gap-1"
                >
                  Read the research <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 pt-5 border-t border-hairline flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-soft">
            <span>Based in Etawah, India</span>
            <span>Open to remote work</span>
            <span>Building in public</span>
          </div>
        </div>
      </section>

      <SectionReveal className="bg-canvas py-24 md:py-32 px-6 md:px-12 border-t border-hairline">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-4">
            <img
              src="/photo.jpg"
              alt="Shamique Khan"
              width="1199"
              height="1600"
              loading="lazy"
              decoding="async"
              className="w-full grayscale contrast-[1.05] brightness-[1.02] rounded-sm"
            />
            <p className="font-condensed text-sm text-ink-soft mt-3">Etawah, India</p>
          </div>

          <div className="md:col-span-8">
            <p className="font-condensed text-sm text-ink-soft mb-8">What the work is for</p>
            <AnimatedLetter
              text="I use projects to make claims testable: an agent should show its sources, a model should expose its failure modes, and an interface should make the next action obvious."
              className="max-w-3xl text-2xl md:text-4xl leading-[1.08] tracking-[-0.02em] text-ink"
            />

            <div className="mt-16 flex flex-wrap gap-x-8 gap-y-8 md:gap-x-16 border-t border-hairline pt-12">
              {proofPoints.map((point) => (
                <div key={point.label}>
                  <p className="tabular-nums font-condensed font-700 text-4xl text-ink">{point.value}</p>
                  <p className="font-condensed text-sm text-ink-soft mt-1">{point.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="bg-canvas py-24 px-6 md:px-12 border-t border-hairline">
        <div className="max-w-3xl mx-auto">
          <p className="font-condensed text-sm text-ink-soft mb-4">Experience</p>
          <h2 className="font-display text-3xl md:text-5xl text-ink mb-16">
            Recent work, while learning in public.
          </h2>

          <div className="border-l-2 border-hairline pl-8 md:pl-12">
            {experienceData.map((entry) => (
              <TimelineEntry key={`${entry.org}-${entry.role}`} entry={entry} />
            ))}
          </div>

          <a
            href="https://linkedin.com/in/shamique-khan"
            target="_blank"
            rel="noopener noreferrer"
            className="font-condensed text-sm text-ink-soft hover:text-ink transition-colors mt-4 inline-block border-b border-ink/30 hover:border-ink"
          >
            Full experience on LinkedIn
          </a>
        </div>
      </SectionReveal>

      <SectionReveal className="bg-canvas py-24 px-6 md:px-12 border-t border-hairline">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-16">
            <div>
              <p className="font-condensed text-sm text-ink-soft mb-3">Selected work</p>
              <h2 className="font-display text-3xl md:text-5xl text-ink">Proof, not placeholders.</h2>
            </div>
            <Link to="/work" className="font-condensed text-sm text-ink border-b border-ink/30 hover:border-ink transition-colors">
              Browse all 40 projects
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {featuredProjects.map((project) => (
              <CardReveal key={project.id} index={project.id} className="border-t border-hairline pt-6">
                <p className="font-condensed text-sm text-ink-soft mb-3">{project.category}</p>
                <h3 className="font-condensed font-600 text-2xl text-ink mb-2">{project.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{project.subtitle}</p>
              </CardReveal>
            ))}
          </div>
        </div>
      </SectionReveal>

      <section className="bg-canvas-dark py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_auto] gap-8 items-end">
          <div>
            <p className="font-condensed text-sm text-paper-soft mb-3">Contact</p>
            <h2 className="font-display text-4xl md:text-6xl text-paper">Bring a hard problem.</h2>
          </div>
          <div className="md:text-right">
            <a
              href="mailto:shamiquekhan18@gmail.com"
              className="text-paper border-b border-paper-soft hover:border-paper transition-colors text-lg md:text-xl inline-block"
            >
              shamiquekhan18@gmail.com
            </a>
            <div className="mt-5 flex flex-wrap md:justify-end gap-x-5 gap-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-condensed text-sm text-paper-soft hover:text-paper transition-colors border-b border-paper-soft/40 hover:border-paper"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
