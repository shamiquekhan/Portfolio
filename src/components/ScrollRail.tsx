import { useScroll, useTransform } from 'framer-motion'
import { motion } from 'framer-motion'

export default function ScrollRail() {
  const { scrollYProgress } = useScroll()
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div className="fixed left-6 top-0 bottom-0 w-[2px] bg-hairline hidden md:block z-40 pointer-events-none">
      <motion.div
        className="w-full bg-ink origin-top"
        style={{ scaleY, height: '100%' }}
      />
    </div>
  )
}
