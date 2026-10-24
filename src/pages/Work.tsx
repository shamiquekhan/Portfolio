import { motion } from 'framer-motion'
import { ContainerScroll } from '../components/ContainerScroll'
import { allProjects, featuredProjects, archiveProjects } from '../data/projects'

const categorySummary = [...new Set(allProjects.map((project) => project.category))].map((category) => ({
  category,
  count: allProjects.filter((project) => project.category === category).length,
}))

function ProjectDetails({ project }: { project: (typeof allProjects)[number] }) {
  return (
    <>
      <p className="text-ink-soft text-sm md:text-base leading-relaxed mb-6 max-w-3xl">{project.summary}</p>

      <div className="mb-6">
        <p className="font-condensed text-sm text-ink-soft mb-3">What changed</p>
        <ul className="space-y-2">
          {project.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-sm text-ink-soft">
              <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-ink/50" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <p className="font-condensed text-sm text-ink-soft mb-2">Built with</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="font-condensed text-xs text-ink-soft border border-hairline px-2.5 py-1">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-x-5 gap-y-2">
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center font-condensed text-sm text-ink border-b border-ink/30 hover:border-ink transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}

export default function Work() {
  return (
    <div className="bg-canvas">
      <ContainerScroll
        titleComponent={
          <>
            <p className="font-condensed text-sm text-ink-soft mb-5">Work / public inventory</p>
            <h1 className="max-w-4xl mx-auto font-condensed font-700 text-5xl sm:text-6xl md:text-8xl text-ink leading-[0.9] tracking-[-0.04em]">
              Shipped systems and research.
            </h1>
            <p className="text-ink-soft leading-relaxed max-w-2xl mx-auto mt-6">
              Forty public repositories across agentic AI, scientific ML, retrieval, computer vision, finance, and healthcare. The strongest case studies are expanded below; every GitHub link stays available.
            </p>
          </>
        }
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6 sm:px-8">
          <div className="flex items-end gap-3">
            <p className="tabular-nums font-condensed font-700 text-7xl sm:text-8xl leading-none text-ink/20">{allProjects.length}</p>
            <p className="font-condensed text-sm text-ink-soft pb-2">public projects</p>
          </div>
          <div role="list" aria-label="Project categories" className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-w-3xl w-full">
            {categorySummary.map(({ category, count }) => (
              <div key={category} role="listitem" className="border border-ink/25 px-3 py-3 text-left">
                <p className="font-condensed text-sm text-ink leading-tight">{category}</p>
                <p className="tabular-nums font-condensed text-sm text-ink-soft mt-2">
                  {count} {count === 1 ? 'project' : 'projects'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ContainerScroll>

      <main className="px-6 md:px-12 pb-24">
        <div className="max-w-5xl mx-auto">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="py-14 md:py-16 border-b border-hairline"
            >
              <p className="font-condensed text-sm text-ink-soft mb-3">{project.category}</p>
              <h2 className="font-condensed font-700 text-3xl md:text-5xl text-ink leading-tight mb-2">{project.title}</h2>
              <p className="font-condensed text-sm text-ink-soft mb-6">{project.subtitle}</p>
              <ProjectDetails project={project} />
            </motion.article>
          ))}

          <div className="pt-12">
            <details className="group">
              <summary className="min-h-11 font-condensed text-sm text-ink-soft cursor-pointer hover:text-ink transition-colors flex items-center">
                Open the remaining {archiveProjects.length} projects
              </summary>
              <div className="mt-6 space-y-10">
                {archiveProjects.map((project, index) => (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.3) }}
                    className="border-t border-hairline pt-6"
                  >
                    <p className="font-condensed text-sm text-ink-soft mb-2">{project.category}</p>
                    <h3 className="font-condensed font-700 text-2xl text-ink mb-1">{project.title}</h3>
                    <p className="font-condensed text-sm text-ink-soft mb-3">{project.subtitle}</p>
                    <ProjectDetails project={project} />
                  </motion.article>
                ))}
              </div>
            </details>
          </div>
        </div>
      </main>
    </div>
  )
}
