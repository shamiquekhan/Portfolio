"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    title: "Research Associate",
    company: "PredictRAM",
    location: "Remote",
    period: "Jan – Apr 2026",
    description:
      "Automated end-to-end institutional equity signal pipelines — replacing manual analyst workflows with Python automation (Pandas, yfinance, NumPy). Received formal Letter of Recommendation for analyst-ready output quality.",
    icon: Briefcase,
  },
  {
    title: "AI Startup School Fellow",
    company: "Google for Startups",
    location: "Remote",
    period: "Nov – Dec 2025",
    description:
      "Built and validated an AI automation prototype in 2 weeks using prompt engineering, Gemini, Google AI Studio, and NotebookLM.",
    icon: Award,
  },
  {
    title: "Open Source Contributor",
    company: "GirlScript Summer of Code (GSSoC) & OSCI",
    location: "Remote",
    period: "Jul – Nov 2025",
    description:
      "Shipped production-ready Python/ML modules and frontend fixes across multiple open-source repositories.",
    icon: Briefcase,
  },
];

const education = [
  {
    degree: "B.Tech, CS & Engineering (AI & ML)",
    institution: "VIT Bhopal University",
    period: "Jul 2025 – Jul 2029",
    icon: GraduationCap,
  },
  {
    degree: "Senior Secondary, PCM & CS",
    institution: "Aligarh Muslim University",
    period: "80% | Distinction in 4 Subjects | Apr 2025",
    icon: GraduationCap,
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="bg-black py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-4 block">
            Experience & Education
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-foreground">
            {"My journey so far"}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience Column */}
          <div className="space-y-6">
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl font-medium text-foreground mb-6"
            >
              Work Experience
            </motion.h3>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={
                  isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
                }
                transition={{
                  delay: 0.2 + index * 0.1,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-card rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                    <exp.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-medium">{exp.title}</h4>
                    <p className="text-primary text-sm">{exp.company}</p>
                    <p className="text-muted-foreground text-xs mt-1">
                      {exp.period} · {exp.location}
                    </p>
                    <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Column */}
          <div className="space-y-6">
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl font-medium text-foreground mb-6"
            >
              Education
            </motion.h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={
                  isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
                }
                transition={{
                  delay: 0.2 + index * 0.1,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-card rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                    <edu.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-medium">{edu.degree}</h4>
                    <p className="text-primary text-sm">{edu.institution}</p>
                    <p className="text-muted-foreground text-xs mt-1">
                      {edu.period}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Publications */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card rounded-2xl p-6"
            >
              <h4 className="text-foreground font-medium mb-4">Publications</h4>
              <ul className="space-y-3">
                <li className="text-muted-foreground text-sm">
                  <span className="text-primary">•</span> {"\"Mechanistic Transparency of Neural Networks\""} — ROME causal intervention, 87.5% monosemantic neurons, ResearchGate 2026
                </li>
                <li className="text-muted-foreground text-sm">
                  <span className="text-primary">•</span> {"\"Liberating Justice: Fighting Judicial Waithood with AI\""} — RAG magistrate system, ResearchGate 2025
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
