import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedLetterProps {
  text: string
  className?: string
}

function CharSpan({
  progress,
  range,
  children,
}: {
  progress: MotionValue<number>
  range: [number, number]
  children: string
}) {
  const opacity = useTransform(progress, range, [0.15, 1])
  return <motion.span style={{ opacity }}>{children}</motion.span>
}

export default function AnimatedLetter({ text, className = '' }: AnimatedLetterProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.3'],
  })

  const chars = text.split('')
  const total = chars.length

  return (
    <p ref={ref} className={`flex flex-wrap ${className}`}>
      {chars.map((char, i) => (
        <CharSpan
          key={i}
          progress={scrollYProgress}
          range={[i / total, (i + 1) / total]}
        >
          {char === ' ' ? '\u00A0' : char}
        </CharSpan>
      ))}
    </p>
  )
}
