"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface TypewriterEffectProps {
  text: string
  className?: string
  speed?: number
  delay?: number
}

export default function TypewriterEffect({ text, className = "", speed = 0.04, delay = 0 }: TypewriterEffectProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <p ref={ref} className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{
            duration: 0.01,
            delay: delay + i * speed,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </p>
  )
}
