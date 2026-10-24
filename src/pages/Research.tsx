import { motion } from 'framer-motion'
import WordsPullUp from '../components/WordsPullUp'

interface Publication {
  title: string
  venue: string
  date: string
  abstract: string
  findings: string[]
  publicationUrl: string
  githubUrl: string
}

const publications: Publication[] = [
  {
    title: 'PIGNet V2: Physics-Informed Graph Neural Networks for High-Throughput Crystalline Material Property Prediction',
    venue: 'ChemRxiv · ResearchGate',
    date: 'May 2026',
    abstract:
      'A physics-informed graph neural network pipeline for predicting crystalline material properties and screening battery candidates. The work combines graph message passing, 3-body angular features, multi-task prediction, and physical constraints to keep outputs plausible while scaling discovery beyond conventional first-principles workflows.',
    findings: [
      'Trained on 125,000+ crystal structures and screened 104,934 candidate cathode materials.',
      'Identified an Ir/Ru co-doping strategy that lifted theoretical energy density from 752.4 to 1104.5 Wh/kg.',
      'Released harmonized materials and solid-electrolyte transport datasets with source-traced conductivity labels.',
    ],
    publicationUrl:
      'https://www.researchgate.net/publication/405104948_PIGNet_V2_Physics-Informed_Graph_Neural_Networks_for_High-Throughput_Crystalline_Material_Property_Prediction',
    githubUrl: 'https://github.com/shamiquekhan/Scandium-Lab-Model',
  },
  {
    title: 'Structural Fingerprints of Label Memorization in Shallow Neural Networks',
    venue: 'arXiv · submission pending',
    date: '2026',
    abstract:
      'A four-phase diagnostic study of how label memorization changes shallow-network geometry and representations. The pipeline combines spectral geometry, CKA, influence functions, and ROME editing to separate surface-level accuracy from structural damage caused by corrupted labels.',
    findings: [
      'Measured FC2 spectral norm collapse from 5.00 to 2.76 under label corruption.',
      'Localized a 0.160 CKA similarity drop to the ReLU activation function.',
      'Recovered 10–22% of source-class accuracy with ROME causal edits across corruption configurations.',
    ],
    publicationUrl: 'https://github.com/shamiquekhan/Four-Phase-Memorization-Analysis',
    githubUrl: 'https://github.com/shamiquekhan/Four-Phase-Memorization-Analysis',
  },
  {
    title: 'Mechanistic Transparency of Neural Networks: A Four-Layer Framework',
    venue: 'ResearchGate',
    date: 'Jan 2026',
    abstract:
      'A four-layer framework for studying neural networks through geometric, representational, algorithmic, and causal transparency. Experiments on a compact MNIST network connect internal structure to behavior and show how targeted causal editing can repair a specific failure without broadly rewriting the model.',
    findings: [
      'Observed a 3× improvement in class separability across network layers and 87.5% monosemantic hidden neurons.',
      'Found sparse modular circuits averaging 3.1 ± 1.2 neurons per class.',
      'Restored targeted class accuracy from 0% to 97.86% while modifying only 0.28% of weights.',
    ],
    publicationUrl:
      'https://www.researchgate.net/publication/404699629_Mechanistic_Transparency_of_Neural_Networks_A_Four-Layer_Framework_for_Demystifying_the_Black_Box',
    githubUrl: 'https://github.com/shamiquekhan/Mechanistic-Transparency',
  },
  {
    title: 'Liberating Justice: Fighting Judicial Waithood with AI',
    venue: 'ResearchGate',
    date: 'Dec 2025',
    abstract:
      'An essay on the gap between India’s judicial capacity and its case backlog, proposing a retrieval-augmented “First-Layer Magistrate” for low-complexity procedural decisions. The proposal keeps verified retrieval, human sign-off, constitutional fairness, and an audit trail at the center of any system used around justice.',
    findings: [
      'Frames retrieval-locked legal assistance as a way to reduce procedural decision latency while preserving human responsibility.',
      'Proposes constitutional-AI fairness checks and a “Show Your Work” audit trail for judge review.',
      'Connects the research argument to a working legal-research assistant built around hybrid retrieval.',
    ],
    publicationUrl: 'https://www.researchgate.net/publication/399084752_Liberating_Justice_Fighting_Judicial_Waithood_with_AI',
    githubUrl: 'https://github.com/shamiquekhan/Legal-AI',
  },
]

export default function Research() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-canvas">
      <div className="max-w-5xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="font-condensed text-sm text-ink-soft mb-5">Research / papers and working notes</p>
          <WordsPullUp
            text="Questions made testable."
            className="max-w-4xl mb-8"
            wordClassName="font-condensed font-700 text-5xl sm:text-6xl md:text-8xl leading-[0.9] tracking-[-0.04em] text-ink"
          />
          <p className="text-ink-soft text-base md:text-lg max-w-2xl leading-relaxed">
            Publications and working repositories across interpretability, scientific ML, legal AI, and reliable retrieval.
          </p>
        </motion.header>

        {publications.map((publication, index) => (
          <motion.article
            key={publication.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-t border-hairline py-14 md:py-16"
          >
            <p className="font-condensed text-sm text-ink-soft mb-3">
              {publication.venue} · {publication.date}
            </p>
            <h2 className="max-w-4xl font-condensed font-700 text-2xl sm:text-3xl md:text-5xl leading-tight text-ink mb-6">
              {publication.title}
            </h2>
            <p className="text-ink-soft max-w-3xl leading-relaxed mb-8">{publication.abstract}</p>
            <ul className="space-y-3 mb-8 max-w-3xl">
              {publication.findings.map((finding) => (
                <li key={finding} className="flex items-start gap-3 text-sm text-ink-soft">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-ink/50" />
                  <span>{finding}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a
                href={publication.publicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center font-condensed text-sm text-ink border-b border-ink/30 hover:border-ink transition-colors"
              >
                Read publication
              </a>
              <a
                href={publication.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center font-condensed text-sm text-ink border-b border-ink/30 hover:border-ink transition-colors"
              >
                GitHub source
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
