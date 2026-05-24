"use client";

import { WordsPullUpMultiStyle } from "@/components/animations/words-pull-up";
import { AnimatedParagraph } from "@/components/animations/animated-paragraph";

export function AboutSection() {
  return (
    <section id="about" className="bg-black py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-card rounded-3xl p-8 md:p-12 lg:p-16 text-center">
          {/* Label */}
          <span className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-6 block">
            AI & Machine Learning
          </span>

          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto leading-[0.95] sm:leading-[0.9] mb-8 md:mb-12">
            <WordsPullUpMultiStyle
              segments={[
                { text: "I am Shamique Khan,", className: "font-normal" },
                {
                  text: "an AI engineer.",
                  className: "italic font-serif",
                },
                {
                  text: "I build production-grade AI automation systems, LLM pipelines, and intelligent agents.",
                  className: "font-normal",
                },
              ]}
            />
          </h2>

          {/* Scroll-animated paragraph */}
          <div className="max-w-3xl mx-auto">
            <AnimatedParagraph
              text="Over the past years, I have worked with PredictRAM as a Research Associate automating institutional equity signal pipelines, and participated in Google's AI Startup School building AI automation prototypes. My work spans from webhook-driven messaging systems to RAG pipelines and neuromorphic computing, always focused on delivering real-world value through intelligent automation."
              className="text-foreground text-xs sm:text-sm md:text-base leading-relaxed"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
