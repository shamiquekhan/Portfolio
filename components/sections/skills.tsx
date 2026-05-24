"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "AI Automation / Agents",
    skills: [
      "Claude API",
      "LangChain",
      "RAG Pipelines",
      "Agentic Workflows",
      "Prompt Engineering",
      "Webhook Systems",
      "Confidence-based Routing",
    ],
  },
  {
    title: "NLP / ML",
    skills: [
      "HuggingFace Transformers",
      "FinBERT",
      "BERT",
      "spaCy",
      "NLTK",
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "LSTM",
    ],
  },
  {
    title: "Backend / MLOps",
    skills: [
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Redis",
      "Streamlit",
      "Pydantic",
      "Git",
      "CI/CD (GitHub Actions)",
    ],
  },
  {
    title: "Languages / Data",
    skills: [
      "Python",
      "SQL",
      "JavaScript",
      "Pandas",
      "NumPy",
      "SciPy",
      "Plotly",
      "Matplotlib",
      "OpenCV",
    ],
  },
];

const certifications = [
  "WorldQuant Deep Learning Fundamentals Lab",
  "WorldQuant Applied AI Lab: Computer Vision",
  "Harvard CS50 AI",
  "Oracle Generative AI Professional",
  "IBM Data Science Professional",
  "DeepLearning.AI NLP in TensorFlow",
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="bg-black py-20 md:py-32 px-4 md:px-8 relative">
      <div className="bg-noise absolute inset-0 opacity-[0.1] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-4 block">
            Technical Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-foreground">
            Skills & Certifications
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-card rounded-2xl p-6"
            >
              <h3 className="text-foreground font-medium mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-muted rounded-full text-muted-foreground text-xs hover:bg-primary hover:text-black transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-card rounded-2xl p-6 md:p-8"
        >
          <h3 className="text-foreground font-medium mb-6 text-center">
            Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="px-4 py-2 bg-muted rounded-full text-muted-foreground text-xs sm:text-sm hover:bg-primary/20 hover:text-primary transition-colors"
              >
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
