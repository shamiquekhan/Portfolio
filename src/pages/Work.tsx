import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { ContainerScroll } from '../components/ContainerScroll'
import { featuredProjects, archiveProjects } from '../data/projects'

export default function Work() {
  return (
    <div className="bg-canvas">
      {/* Scroll-driven hero */}
      <ContainerScroll
        titleComponent={
          <>
            <p className="font-condensed text-xs uppercase tracking-[0.15em] text-ink-soft mb-4">Work</p>
            <h1 className="font-condensed font-700 text-5xl md:text-7xl text-ink leading-[0.92] tracking-[-0.01em] mb-4">
              Featured protocols
            </h1>
            <p className="text-ink-soft text-sm md:text-base max-w-lg mx-auto leading-relaxed">
              Production-grade agentic systems and ML pipelines. Every project shipped, not tutorial-followed.
            </p>
          </>
        }
      >
        <div className="flex items-center justify-center h-full">
          <p className="font-display italic text-2xl md:text-4xl text-ink/40 max-w-md text-center leading-relaxed">
            {featuredProjects.length} systems, one standard: it has to work.
          </p>
        </div>
      </ContainerScroll>

      {/* Project list */}
      <div className="px-6 md:px-12 pb-24">
        <div className="max-w-5xl mx-auto">
          {featuredProjects.map((project, i) => (
            <motion.section
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="py-16 border-t border-hairline"
            >
              <h2 className="font-condensed font-700 text-3xl md:text-4xl text-ink mb-1">
                {project.title}
              </h2>
              <p className="font-condensed text-sm text-ink-soft italic mb-6">
                {project.subtitle}
              </p>

              <p className="text-ink-soft text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
                {project.description}
              </p>

              {project.highlights.length > 0 && (
                <div className="mb-6">
                  <p className="font-condensed text-xs uppercase tracking-widest text-ink mb-3">Highlights</p>
                  <ul className="space-y-1.5">
                    {project.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-ink-soft">
                        <span className="text-ink mt-0.5 shrink-0">→</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mb-6">
                <p className="font-condensed text-xs uppercase tracking-widest text-ink mb-2">Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="font-condensed text-xs text-ink-soft border border-hairline px-2.5 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-condensed text-sm uppercase tracking-wide text-ink border-b border-ink/30 hover:border-ink transition-colors"
                  >
                    {link.label} <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>
            </motion.section>
          ))}

          <div className="border-t border-hairline pt-12 mt-8">
            <details className="group">
              <summary className="font-condensed text-xs uppercase tracking-widest text-ink-soft cursor-pointer hover:text-ink transition-colors list-none flex items-center gap-2">
                <span className="inline-block transition-transform duration-200 group-open:rotate-90">→</span>
                Full project archive ({archiveProjects.length} more)
              </summary>
              <ul className="mt-6 space-y-2">
                {archiveProjects.map((p) => (
                  <li key={p.name}>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-condensed text-sm text-ink-soft hover:text-ink transition-colors border-b border-hairline py-2 block"
                    >
                      {p.name}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </div>
      </div>
    </div>
  )
}
