import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import WordsPullUp from '../components/WordsPullUp'
import SectionReveal from '../components/SectionReveal'

export default function QuantML() {
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
            Startup — Founded Jan 2026
          </p>
          <WordsPullUp
            text="Institutional AI infrastructure for regime-aware trading."
            className="mb-6"
            wordClassName="font-condensed font-700 text-5xl md:text-7xl leading-[0.92] tracking-[-0.01em] text-ink"
          />
          <p className="text-ink-soft text-base md:text-lg max-w-2xl leading-relaxed mb-12">
            Single models lose 40–60% accuracy during regime shifts every 18–24 months. Quant ML&apos;s AI Council is built to survive them.
          </p>

          <div className="flex gap-12 md:gap-20 border-t border-hairline pt-10">
            <div>
              <p className="font-condensed font-700 text-4xl text-ink">10</p>
              <p className="font-condensed text-xs uppercase tracking-widest text-ink-soft mt-1">Models in consensus</p>
            </div>
            <div>
              <p className="font-condensed font-700 text-4xl text-ink">≥99%</p>
              <p className="font-condensed text-xs uppercase tracking-widest text-ink-soft mt-1">Agreement threshold</p>
            </div>
            <div>
              <p className="font-condensed font-700 text-4xl text-ink">300×</p>
              <p className="font-condensed text-xs uppercase tracking-widest text-ink-soft mt-1">Faster Heston calibration</p>
            </div>
          </div>
        </motion.div>

        {/* The System */}
        <SectionReveal className="py-20 border-t border-hairline">
          <h2 className="font-condensed font-700 text-3xl md:text-4xl text-ink mb-8">The System</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 text-ink-soft text-sm md:text-base leading-relaxed">
              <p>
                The Quant ML AI Council is a 10-model multi-agent system where each LLM agent specializes in a distinct market dimension — technical analysis, sentiment, fundamentals, macro, volatility, and liquidity. Agents deliberate via LangGraph orchestration, and the system only executes when consensus exceeds 99%.
              </p>
              <p>
                Physics-informed neural networks (PINNs) embed no-arbitrage constraints directly into the loss function — put-call parity, volatility surface bounds, and calendar spread limits. Neural SDEs model regime-aware dynamics, allowing the system to detect and adapt to structural market shifts.
              </p>
            </div>
            <div>
              <p className="font-condensed text-sm uppercase tracking-wide text-ink mb-4">Stack</p>
              <ul className="space-y-2">
                {['LangGraph orchestration', 'FastAPI', 'Redis caching', 'PostgreSQL audit trail', 'Prometheus / Grafana', 'FINRA-compliant logging'].map((item) => (
                  <li key={item} className="font-condensed text-sm text-ink-soft border-b border-hairline py-1">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </SectionReveal>

        {/* Proof Points */}
        <SectionReveal className="py-20 border-t border-hairline">
          <h2 className="font-condensed font-700 text-3xl md:text-4xl text-ink mb-8">Proof points</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-hairline p-8">
              <p className="font-condensed font-700 text-2xl text-ink mb-2">Heston-ML Calibrator</p>
              <p className="font-condensed text-sm uppercase tracking-wide text-ink-soft mb-2">300× speedup, MSE &lt; 0.001</p>
              <p className="text-sm text-ink-soft leading-relaxed">
                Neural network surrogate for Heston model calibration on BSE Sensex options data. Reduces calibration time from minutes to milliseconds while maintaining precision within market bid-ask spreads.
              </p>
            </div>
            <div className="border border-hairline p-8">
              <p className="font-condensed font-700 text-2xl text-ink mb-2">AI Investment Advisor</p>
              <p className="font-condensed text-sm uppercase tracking-wide text-ink-soft mb-2">+18.50% vs S&P 500 · Sharpe 2.10</p>
              <p className="text-sm text-ink-soft leading-relaxed">
                RAG-based equity research agent combining FinBERT sentiment analysis, fundamental scoring, and technical indicators. Max drawdown of −2.49% with full explainability on every recommendation.
              </p>
            </div>
          </div>
        </SectionReveal>

        {/* Team */}
        <SectionReveal className="py-20 border-t border-hairline">
          <h2 className="font-condensed font-700 text-3xl md:text-4xl text-ink mb-8">Team</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-condensed font-600 text-xl text-ink">Shamique Khan</h3>
              <p className="font-condensed text-xs uppercase tracking-wide text-ink-soft">Founder & AI/ML Engineer</p>
              <p className="text-sm text-ink-soft mt-2 leading-relaxed">
                CS (AI & ML) at VIT Bhopal. Mechanistic interpretability research, PINN-GNN development, multi-agent systems. Building Quant ML&apos;s core AI Council architecture and Heston calibration pipeline.
              </p>
            </div>
            <div>
              <h3 className="font-condensed font-600 text-xl text-ink">M. Jashwant</h3>
              <p className="font-condensed text-xs uppercase tracking-wide text-ink-soft">Co-Founder</p>
              <p className="text-sm text-ink-soft mt-2 leading-relaxed">
                CSE AI/ML BTech at Auburn University. Developed the Heston-ML calibrator and AI Investment Advisor agent. Expertise in stochastic calculus, options pricing, and quantitative model validation.
              </p>
            </div>
          </div>
        </SectionReveal>

        {/* Status */}
        <SectionReveal className="py-20 border-t border-hairline">
          <h2 className="font-condensed font-700 text-3xl md:text-4xl text-ink mb-8">Status</h2>
          <p className="text-ink-soft max-w-2xl leading-relaxed mb-6">
            Targeting $1–5B AUM hedge funds and prop shops with a $5–10K/month SaaS pricing model. Seeking design partners ahead of Series A Q4 2026.
          </p>
          <div className="flex gap-4">
            <a
              href="https://quantml.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ink text-paper rounded-full px-6 py-3 font-condensed text-sm uppercase tracking-wide hover:bg-transparent hover:border hover:border-ink hover:text-ink transition-all duration-200 inline-flex items-center gap-2"
            >
              quantml.tech <ArrowUpRight size={14} />
            </a>
            <Link
              to="/contact"
              className="text-ink border-b border-ink/30 hover:border-ink transition-colors font-condensed text-sm uppercase tracking-wide py-3 inline-flex items-center gap-1"
            >
              Get in touch <ArrowRight size={14} />
            </Link>
          </div>
        </SectionReveal>
      </div>
    </div>
  )
}
