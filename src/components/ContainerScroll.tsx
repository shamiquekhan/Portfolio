import React, { useRef } from "react"
import { useReducedMotion, useScroll, useTransform, motion, type MotionValue } from "framer-motion"

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode
  children: React.ReactNode
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
  })
  const prefersReducedMotion = useReducedMotion()
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const scaleDimensions = () => (prefersReducedMotion ? [1, 1] : isMobile ? [0.86, 0.96] : [1.05, 1])

  const rotate = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : isMobile ? [12, 0] : [20, 0])
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions())
  const translate = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : isMobile ? [0, -48] : [0, -100])

  return (
    <div
      className="h-[46rem] sm:h-[58rem] md:h-[80rem] flex items-center justify-center relative px-2 sm:px-4 md:px-20"
      ref={containerRef}
    >
      <div
        className="py-16 sm:py-24 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  )
}

const Header = ({ translate, titleComponent }: { translate: MotionValue<number>; titleComponent: string | React.ReactNode }) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-5xl mx-auto text-center px-4"
    >
      {titleComponent}
    </motion.div>
  )
}

const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>
  scale: MotionValue<number>
  translate: MotionValue<number>
  children: React.ReactNode
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
      }}
      className="max-w-5xl -mt-8 sm:-mt-12 mx-auto h-[24rem] sm:h-[30rem] md:h-[40rem] w-full border border-hairline p-2 md:p-6 bg-canvas rounded-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-xl bg-canvas md:rounded-xl md:p-4">
        {children}
      </div>
    </motion.div>
  )
}
