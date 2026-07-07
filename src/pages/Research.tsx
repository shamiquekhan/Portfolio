import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import WordsPullUp from '../components/WordsPullUp'

const publications = [
  {
    title: 'PIGNet V2: Physics-Informed Graph Neural Networks for High-Throughput Crystalline Material Property Prediction',
    venue: 'ChemRxiv — Working Paper',
    date: 'May 2026',
    abstract:
      'Predicting the electronic and thermodynamic properties of crystalline solids from atomic structure is a central problem in computational materials science. Density Functional Theory (DFT) provides first-principles accuracy but scales as O(N³) with system size, rendering it computationally intractable for the high-throughput screening of large compositional spaces. Here we present PIGNet V2, a Physics-Informed Graph Network that combines attention-gated message passing, 56-dimensional 3-body angular edge features, and a physics-constrained multi-task prediction head to simultaneously infer band gap, formation energy, and thermodynamic stability from unrelaxed crystal structures. By embedding physical constraints directly into the model architecture — Softplus-bounded non-negative properties, thermodynamic penalty terms in the loss function, and post-prediction conformal calibration — PIGNet V2 guarantees zero physically impossible predictions across all test configurations.',
    findings: [
      'Trained on 125,000 structures from the Materials Project — band gap MAE of 1.24 eV, formation energy MAE of 0.314 eV/atom',
      'Zero physically impossible predictions across all test configurations via embedded physical constraints',
      'BatteryFormer module eliminates DFT geometry optimisation bottleneck, screening 104,934 high-entropy cathode configurations',
      'Identified Ir/Ru co-doping strategy elevating theoretical energy density from 752.4 to 1104.5 Wh/kg in Na₆CoS₄ system',
    ],
    url: 'https://doi.org/10.26434/chemrxiv.15003638.v1',
  },
  {
    title: 'Structural Fingerprints of Label Memorization in Shallow Neural Networks',
    venue: 'arXiv cs.LG — submission pending',
    date: '2026',
    abstract:
      'A four-phase diagnostic pipeline (weight geometry, CKA representation similarity, influence functions, and ROME causal editing) on shallow ReLU networks trained on MNIST with clean vs. 20%-corrupted labels. FC2 spectral norm collapses from 5.00 to 2.76 under corruption; CKA reveals a 0.160 drop localized to the ReLU nonlinearity; ROME rank-1 edits recover 10–22% of source-class accuracy; rank-5 SVD compression yields a 6.1-point accuracy gap between clean and memorizing models. Memorization is a structural, not purely statistical, phenomenon — and it is geometrically localized within the network.',
    findings: [
      'FC2 spectral norm collapse (5.00 → 2.76) under label corruption',
      'CKA similarity drop of 0.160 localized to the ReLU activation function',
      'ROME causal edits recover 10–22% of source-class accuracy across corruption configurations',
      'Rank-5 SVD ablation reveals 6.1-point compression gap: memorization reduces compressibility',
      'Test accuracy nearly unchanged (95.3% vs 93.8%) — the surface hides the structural damage',
    ],
    url: 'https://github.com/shamiquekhan/Mechanistic-Transparency-in-Neural-Networks-A-Four-Layer-Analysis',
  },
  {
    title: 'Mechanistic Transparency of Neural Networks: A Four-Layer Framework for Demystifying the Black Box',
    venue: 'ResearchGate',
    date: 'Jan 2026',
    abstract:
      'Evaluates a 784→16→10 fully connected network (12,730 parameters) on MNIST digit classification across geometric, representational, algorithmic, and causal transparency dimensions. Measured 3× improvement in class separability across layers, 87.5% monosemantic neurons (14/16), sparse modular circuits averaging 3.1 ± 1.2 neurons per class, and successful causal model editing via ROME restoring class-7 accuracy from 0% to 97.86% by modifying only 0.28% of weights with 1.51% average side effects. Demonstrates mechanistically transparent computations where internal structure causally determines behavior, fundamentally challenging the black-box narrative.',
    findings: [
      '3× improvement in class separability across layers',
      '87.5% of hidden neurons exhibited strong class specialization (monosemantic)',
      'Sparse modular circuits: 3.1 ± 1.2 neurons per class, 50% sparsity',
      'ROME causal repair: 0% → 97.86% accuracy on targeted failure, 0.28% weight modification',
    ],
    url: 'https://www.researchgate.net/profile/Shamique-Khan',
  },
  {
    title: 'Liberating Justice: Fighting Judicial Waithood with AI',
    venue: 'ResearchGate',
    date: 'Dec 2025',
    abstract:
      'Proposes a Retrieval-Augmented Generation (RAG)-based "First-Layer Magistrate" AI model designed to automate low-complexity procedural bail decisions in India\'s undertrial backlog. With 50.3 million pending cases and undertrial prisoners comprising 75–77% of all inmates, the system targets reducing decision latency from months to minutes for routine administrative matters. Architecture includes hallucination prevention via locked retrieval from verified government databases, constitutional-AI fairness training to avoid biased historical records, an explainable "Show Your Work" framework for human judge review, and integration with India\'s Aadhaar and UPI digital stacks for streamlined bail-to-release workflow.',
    findings: [
      'Decision latency reduction: months → minutes for routine procedural decisions',
      'Hallucination prevention via RAG with locked retrieval from verified legal databases',
      'Constitutional AI framework for demographic parity in bail decisions',
      'Explainable "Show Your Work" audit trail for human judge sign-off',
    ],
    url: 'https://www.researchgate.net/profile/Shamique-Khan',
  },
]

export default function Research() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-canvas">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="font-condensed text-xs uppercase tracking-[0.15em] text-ink-soft mb-4">Research</p>
          <WordsPullUp
            text="Published work on interpretability and applied ML."
            className="mb-6"
            wordClassName="font-condensed font-700 text-5xl md:text-7xl leading-[0.92] tracking-[-0.01em] text-ink"
          />
        </motion.div>

        {publications.map((pub, i) => (
          <motion.section
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="border-t border-hairline py-16"
          >
            <p className="font-condensed text-xs uppercase tracking-[0.15em] text-ink-soft mb-2">
              {pub.venue} · {pub.date}
            </p>
            <h2 className="font-condensed font-700 text-3xl md:text-5xl leading-tight text-ink mb-6">
              {pub.title}
            </h2>
            <p className="text-ink-soft max-w-3xl leading-relaxed mb-8">
              {pub.abstract}
            </p>
            <ul className="space-y-2 mb-8">
              {pub.findings.map((f, j) => (
                <li key={j} className="flex items-start gap-3 font-condensed text-sm text-ink-soft">
                  <span className="text-ink mt-0.5">→</span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-condensed text-sm uppercase tracking-wide text-ink border-b border-ink/30 hover:border-ink transition-colors"
            >
              Read full paper <ArrowUpRight size={14} />
            </a>
          </motion.section>
        ))}
      </div>
    </div>
  )
}
