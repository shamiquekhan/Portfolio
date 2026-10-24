import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface CardRevealProps {
  children: ReactNode
  className?: string
  index?: number
}

export default function CardReveal({ children, className = '', index = 0 }: CardRevealProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={prefersReducedMotion ? { duration: 0 } : {
        duration: 0.5,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
