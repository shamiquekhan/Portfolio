"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight, ExternalLink } from "lucide-react";

// GitHub icon component since lucide doesn't export "Github"
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const projects = [
  {
    id: "01",
    title: "AI Guest Messaging System",
    icon: "🤖",
    features: [
      "Webhook server for WhatsApp, Booking.com, Airbnb",
      "Claude API for intelligent reply drafting",
      "Confidence-based routing system",
      "Security guardrails & prompt injection protection",
    ],
    github: "https://github.com/shamiquekhan",
  },
  {
    id: "02",
    title: "AI Investment Advisor",
    icon: "📈",
    features: [
      "Outperformed S&P 500 by 3.72%",
      "FinBERT NLP sentiment analysis",
      "Multi-source API failover system",
    ],
    github: "https://github.com/shamiquekhan",
    live: true,
  },
  {
    id: "03",
    title: "RAG TensorFlow Q&A Agent",
    icon: "🔍",
    features: [
      "500+ TensorFlow docs indexed",
      "GPT-4 + FAISS/Chroma/Supabase",
      "Semantic caching & top-K tuning",
    ],
    github: "https://github.com/shamiquekhan",
  },
];

interface ProjectCardProps {
  project: (typeof projects)[number];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{
        delay: index * 0.15,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="bg-muted rounded-2xl p-6 flex flex-col h-full"
    >
      {/* Icon */}
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-black/50 flex items-center justify-center text-2xl mb-4">
        {project.icon}
      </div>

      {/* Title with number */}
      <div className="flex items-baseline gap-2 mb-4">
        <h3 className="text-foreground text-lg sm:text-xl font-medium">
          {project.title}
        </h3>
        <span className="text-muted-foreground text-sm">({project.id})</span>
      </div>

      {/* Features */}
      <ul className="space-y-2 flex-grow mb-6">
        {project.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Links */}
      <div className="flex items-center gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-primary text-sm hover:underline"
        >
          <GithubIcon className="w-4 h-4" />
          <span>Code</span>
        </a>
        {project.live && (
          <a
            href="#"
            className="flex items-center gap-1 text-primary text-sm hover:underline"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="min-h-screen bg-black py-20 md:py-32 px-4 md:px-8 relative">
      {/* Noise overlay */}
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            ref={ref}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-foreground mb-2"
          >
            Production-grade AI systems for real-world impact.
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-muted-foreground"
          >
            Built with passion. Powered by innovation.
          </motion.p>
        </div>

        {/* Video card + Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
          {/* Video Card */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl overflow-hidden h-[300px] md:h-full"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-foreground text-lg font-medium">
                Your AI automation canvas.
              </p>
            </div>
          </motion.div>

          {/* Project Cards */}
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index + 1} />
          ))}
        </div>

        {/* View all projects link */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-8"
        >
          <a
            href="https://github.com/shamiquekhan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <span>View all projects on GitHub</span>
            <ArrowRight className="w-4 h-4 -rotate-45" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
