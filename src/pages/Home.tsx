import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import WordsPullUp from '../components/WordsPullUp'
import TypewriterEffect from '../components/TypewriterEffect'
import AnimatedLetter from '../components/AnimatedLetter'
import CardReveal from '../components/CardReveal'
import SectionReveal from '../components/SectionReveal'
import TimelineEntry from '../components/TimelineEntry'
import { featuredProjects } from '../data/projects'
import { experienceData } from '../data/experience'

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: pageRef })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -60])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { damping: 30, stiffness: 150 })
  const springY = useSpring(mouseY, { damping: 30, stiffness: 150 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * 0.02
    const y = (e.clientY - rect.top - rect.height / 2) * 0.02
    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section
        className="min-h-screen bg-canvas flex flex-col justify-end pb-20 px-6 md:px-12 pt-32"
        onMouseMove={handleMouseMove}
      >
        <div className="max-w-7xl mx-auto w-full">
          <TypewriterEffect
            text="Quant ML Founder — Etawah, India"
            className="font-condensed text-xs uppercase tracking-[0.15em] text-ink-soft mb-4"
            speed={0.03}
            delay={0.2}
          />

          <motion.div style={{ x: springX, y: springY }}>
            <WordsPullUp
              text="I build systems that prove themselves."
              serifIndices={[3, 4]}
              className="mb-6"
              wordClassName="text-[11vw] md:text-[7vw] leading-[0.92] tracking-[-0.01em] text-ink font-condensed font-600"
            />
          </motion.div>

          <motion.p
            className="max-w-md ml-auto text-sm md:text-base text-ink-soft leading-relaxed text-right mb-8"
            style={{ y: heroY }}
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Quant ML Founder | Shipping RAG, LLMs & Agentic AI to production. 40+ AI/ML projects. IBM Certified. ML Engineering Intern @ FlyRank AI. Published researcher in mechanistic interpretability — I don&apos;t just study AI, I build it.
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Link
              to="/work"
              className="bg-ink text-paper rounded-full px-6 py-3 font-condensed text-sm uppercase tracking-wide hover:bg-transparent hover:border hover:border-ink hover:text-ink transition-all duration-200"
            >
              View the work
            </Link>
            <Link
              to="/research"
              className="text-ink border-b border-ink/30 hover:border-ink transition-colors font-condensed text-sm uppercase tracking-wide py-3 inline-flex items-center gap-1"
            >
              Read the research <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        </div>

        <div className="fixed bottom-8 right-8 hidden md:block">
          <span className="font-condensed text-xs text-ink-soft [writing-mode:vertical-rl] flex items-center gap-2">
            Scroll <ArrowDown size={12} />
          </span>
        </div>
      </section>

      {/* About snippet */}
      <SectionReveal className="bg-canvas py-24 md:py-32 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-4">
            <img
              src="/photo.jpg"
              alt="Shamique Khan"
              className="w-full grayscale contrast-[1.05] brightness-[1.02] rounded-sm"
            />
            <p className="font-condensed text-xs uppercase tracking-widest text-ink-soft mt-3">
              Bhopal, India
            </p>
          </div>

          <div className="md:col-span-8">
            <p className="font-condensed text-xs uppercase tracking-widest text-ink-soft mb-8">
              Proof statement
            </p>

            <AnimatedLetter
              text="I don't have years of industry experience. What I have is a habit of shipping working systems — a 10-model AI Council for quant trading, a PINN-GNN for battery materials, an open-source diagnostics library on PyPI, four research publications, and being honest about what's still unfinished in each of them."
              className="text-2xl md:text-3xl leading-snug text-ink"
            />

            <div className="mt-16 flex gap-10 md:gap-16 border-t border-hairline pt-12">
              <div>
                <p className="font-condensed font-700 text-4xl text-ink">40+</p>
                <p className="font-condensed text-xs uppercase tracking-widest text-ink-soft mt-1">Projects shipped</p>
              </div>
              <div>
                <p className="font-condensed font-700 text-4xl text-ink">4</p>
                <p className="font-condensed text-xs uppercase tracking-widest text-ink-soft mt-1">Research publications</p>
              </div>
              <div>
                <p className="font-condensed font-700 text-4xl text-ink">100K</p>
                <p className="font-condensed text-xs uppercase tracking-widest text-ink-soft mt-1">LinkedIn impressions</p>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Experience Timeline */}
      <SectionReveal className="bg-canvas py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <p className="font-condensed text-xs uppercase tracking-widest text-ink-soft mb-4">Experience</p>
          <p className="font-display italic text-3xl md:text-4xl text-ink mb-16">
            What I&apos;ve been doing while learning.
          </p>

          <div className="border-l-2 border-hairline pl-8 md:pl-12 space-y-0">
            {experienceData.map((entry, i) => (
              <TimelineEntry key={i} entry={entry} />
            ))}
          </div>

          <a
            href="https://linkedin.com/in/shamique-khan"
            target="_blank"
            rel="noopener noreferrer"
            className="font-condensed text-xs uppercase tracking-widest text-ink-soft hover:text-ink transition-colors mt-4 inline-block border-b border-ink/30 hover:border-ink"
          >
            View full experience on LinkedIn →
          </a>
        </div>
      </SectionReveal>

      {/* Featured work */}
      <SectionReveal className="bg-canvas py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-16">
            <p className="font-condensed text-xs uppercase tracking-widest text-ink-soft">Selected work</p>
            <Link to="/work" className="font-condensed text-xs uppercase tracking-widest text-ink border-b border-ink/30 hover:border-ink transition-colors">
              View all →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {featuredProjects.map((project, i) => (
              <CardReveal key={project.id} index={i} className="border-t border-hairline pt-6 group">
                <p className="font-display italic text-ink-soft text-lg mb-2 transition-colors duration-300 group-hover:text-ink">
                  {String(project.id).padStart(2, '0')}
                </p>
                <h3 className="font-condensed font-600 text-2xl text-ink mb-2 transition-transform duration-300 group-hover:translate-x-2">
                  {project.title}
                </h3>
                <p className="text-sm text-ink-soft">{project.subtitle}</p>
              </CardReveal>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* Contact CTA strip */}
      <section className="bg-canvas-dark py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-display italic text-4xl md:text-5xl text-paper mb-4">Let&apos;s talk.</p>
          <a
            href="mailto:shamiquekhan18@gmail.com"
            className="text-paper border-b border-paper-soft hover:border-paper transition-colors text-lg md:text-xl inline-block"
          >
            shamiquekhan18@gmail.com
          </a>
        </div>
      </section>
    </div>
  )
}
