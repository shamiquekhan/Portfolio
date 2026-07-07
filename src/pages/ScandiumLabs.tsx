import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import WordsPullUp from '../components/WordsPullUp'
import SectionReveal from '../components/SectionReveal'

export default function ScandiumLabs() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-canvas">
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="font-condensed text-xs uppercase tracking-[0.15em] text-ink-soft mb-4">
            Independent Research Project — May 2026 – Present
          </p>
          <WordsPullUp
            text="Physics-informed GNNs for battery material discovery."
            className="mb-6"
            wordClassName="font-condensed font-700 text-5xl md:text-7xl leading-[0.92] tracking-[-0.01em] text-ink"
          />
          <p className="text-ink-soft text-base md:text-lg max-w-2xl leading-relaxed">
            Same closed-loop computational-simulation-to-ML-prediction architecture used in AI-driven catalyst discovery — applied to solid-state battery cathodes.
          </p>
        </motion.div>

        {/* The Model */}
        <SectionReveal className="py-20 border-t border-hairline">
          <h2 className="font-condensed font-700 text-3xl md:text-4xl text-ink mb-8">The Model</h2>
          <p className="text-ink-soft max-w-3xl leading-relaxed mb-6">
            ScandiumPINNGNN is a multi-task ALIGNN-based graph neural network predicting formation energy, energy above hull, and band gap for solid-state battery materials. Physics-informed constraints enforce thermodynamic consistency and crystal symmetry directly in the loss function, ensuring physically plausible predictions even outside the training distribution.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-condensed text-sm uppercase tracking-wide text-ink mb-4">Stack</p>
              <ul className="space-y-2">
                {['PyTorch', 'PyTorch Geometric', 'ALIGNN', 'Materials Project API', 'Weights & Biases', 'DVC'].map((item) => (
                  <li key={item} className="font-condensed text-sm text-ink-soft border-b border-hairline py-1">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </SectionReveal>

        {/* What I found and fixed */}
        <SectionReveal className="py-20 border-t border-hairline">
          <h2 className="font-condensed font-700 text-3xl md:text-4xl text-ink mb-8">What I found and fixed</h2>
          <div className="space-y-8 text-ink-soft text-sm md:text-base leading-relaxed">
            <div className="border-l-2 border-ink pl-6">
              <h3 className="font-condensed font-600 text-lg text-ink mb-2">Audited the training corpus</h3>
              <p>
                Found it was only ~0.5% Li-containing, invalidating prior results. Rebuilt the entire data pipeline against a freshly constrained Materials Project query to ensure representative sampling of lithium-based solid-state electrolytes.
              </p>
            </div>
            <div className="border-l-2 border-ink pl-6">
              <h3 className="font-condensed font-600 text-lg text-ink mb-2">Diagnosed a halide-shortcut failure mode</h3>
              <p>
                Identified a failure mode invisible to the existing Isolation Forest OOD detector: the model was learning a halide compositional shortcut rather than genuine crystal structure features. Implemented targeted augmentation to break the spurious correlation.
              </p>
            </div>
            <div className="border-l-2 border-ink pl-6">
              <h3 className="font-condensed font-600 text-lg text-ink mb-2">Scoped a data-collection effort</h3>
              <p>
                Identified a zero-coverage gap in ionic conductivity prediction — the project&apos;s most safety-critical unmodeled property. Scoped a combined SSBD database query and literature mining effort to close the gap.
              </p>
            </div>
          </div>
        </SectionReveal>

        {/* Companion work */}
        <SectionReveal className="py-20 border-t border-hairline">
          <h2 className="font-condensed font-700 text-3xl md:text-4xl text-ink mb-8">Companion work</h2>
          <p className="text-ink-soft max-w-3xl leading-relaxed mb-4">
            PINN-GNN ablation study across 6 architectural variants, comparing force-constrained vs. unconstrained training and loss-scale imbalance effects on formation energy prediction accuracy.
          </p>
        </SectionReveal>

        {/* Publication */}
        <SectionReveal className="py-20 border-t border-hairline">
          <h2 className="font-condensed font-700 text-3xl md:text-4xl text-ink mb-8">Publication</h2>
          <p className="text-ink-soft max-w-2xl leading-relaxed mb-4">
            &ldquo;PIGNet V2: Physics-Informed Graph Neural Networks for High-Throughput Crystalline Material Property Prediction&rdquo; — ChemRxiv, May 2026. DOI: 10.26434/chemrxiv.15003638.v1.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/shamiquekhan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ink text-paper rounded-full px-6 py-3 font-condensed text-sm uppercase tracking-wide hover:bg-transparent hover:border hover:border-ink hover:text-ink transition-all duration-200 inline-flex items-center gap-2"
            >
              View on GitHub <ArrowUpRight size={14} />
            </a>
          </div>
        </SectionReveal>
      </div>
    </div>
  )
}
