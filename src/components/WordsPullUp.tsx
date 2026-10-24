import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

interface WordsPullUpProps {
  text: string
  serifIndices?: number[]
  className?: string
  wordClassName?: string
  delay?: number
}

export default function WordsPullUp({ text, serifIndices = [], className = '', wordClassName = '', delay = 0 }: WordsPullUpProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const prefersReducedMotion = useReducedMotion()
  const words = text.split(' ')

  return (
    <div ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className={`inline-block mr-[0.22em] last:mr-0 ${serifIndices.includes(i) ? 'font-display italic' : ''} ${wordClassName}`}
          initial={prefersReducedMotion ? false : { y: 24, opacity: 0 }}
          animate={prefersReducedMotion ? { opacity: 1 } : isInView ? { y: 0, opacity: 1 } : {}}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.5,
            delay: prefersReducedMotion ? 0 : delay + i * 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}
