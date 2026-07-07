import { useScroll, useTransform } from 'framer-motion'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import type { ExperienceEntry } from '../data/experience'

interface TimelineEntryProps {
  entry: ExperienceEntry
}

export default function TimelineEntry({ entry }: TimelineEntryProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.75', 'start 0.25'],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1.04, 0.92])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.5])
  const markerBg = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['#D9D4C7', '#1A1815', '#D9D4C7']
  )

  return (
    <div ref={ref} className="relative">
      <motion.div
        className="origin-left"
        style={{ scale, opacity }}
      >
        <div className="flex items-start gap-4">
          <motion.div
            className="w-3 h-3 rounded-full mt-1.5 shrink-0 border-2 border-hairline"
            style={{ backgroundColor: markerBg }}
          />
          <div className="pb-12">
            <h3 className="font-condensed font-700 text-xl md:text-2xl text-ink">
              {entry.role}
            </h3>
            <p className="text-sm text-ink-soft font-condensed uppercase tracking-wide">
              {entry.org} · {entry.dates}
            </p>
            <p className="text-sm text-ink-soft leading-relaxed mt-1 max-w-xl">
              {entry.description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
