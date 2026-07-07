export interface CaseStudy {
  id: number
  title: string
  subtitle: string
  description: string
  highlights: string[]
  stack: string[]
  links: { label: string; url: string }[]
}

export const featuredProjects: CaseStudy[] = [
  {
    id: 1,
    title: 'Quant ML — AI Council Trading Infrastructure',
    subtitle: '10-Model Agentic Consensus System for Institutional Quant Finance',
    description:
      'Architected a LangGraph-orchestrated 10-model AI Council with structured multi-agent consensus (≥99% threshold before execution). Includes FastAPI backend, Redis caching, PostgreSQL audit trail, and Prometheus/Grafana monitoring — FINRA-compliant, production-ready agentic workflow. Structured output pipelines with Pydantic schemas eliminating silent agent failures.',
    highlights: [
      '300× faster Heston model calibration via neural network surrogate; MSE < 0.001, inference < 50ms',
      'NIFTY50 pipeline: Sharpe Ratio 1.35 vs 0.72 buy-and-hold benchmark',
      'AI Investment Advisor RAG agent: +18.50% vs S&P 500, Sharpe 2.10',
    ],
    stack: ['Python', 'LangGraph', 'FastAPI', 'Redis', 'PostgreSQL', 'FinBERT', 'Prometheus', 'Docker'],
    links: [
      { label: 'Quant ML', url: 'https://quantml.tech' },
      { label: 'AI Advisor Repository', url: 'https://github.com/shamiquekhan/ai-investment-advisor-agent' },
    ],
  },
  {
    id: 2,
    title: 'ARAMS — Autonomous Research & Multi-Agent System',
    subtitle: 'Intelligent Research Assistant with Multi-Source Querying',
    description:
      'Built an agentic research assistant that decomposes complex queries into subtasks and searches ArXiv, DuckDuckGo, and Wikipedia in parallel using LangGraph orchestration and multi-agent coordination. Features multi-agent orchestration with Supervisor, Research, Source Evaluation, Fact-Checking, Synthesis, and Report Writing agents collaborating via a LangGraph state machine.',
    highlights: [
      'Multi-source search: ArXiv (domain-specific routing), DuckDuckGo, and Wikipedia in parallel',
      'Two-stage relevance scoring: fast keyword overlap followed by LLM-based PRIMARY/SECONDARY/NO classification',
      'Fact verification cross-referencing claims against source URLs with contradiction detection',
      'Dual UI: Next.js frontend with real-time progress streaming + REST API for headless integration',
    ],
    stack: ['Python', 'LangChain', 'LangGraph', 'Ollama', 'Qdrant', 'REST APIs', 'Next.js'],
    links: [
      { label: 'Repository', url: 'https://github.com/shamiquekhan/ARAMS' },
    ],
  },
  {
    id: 3,
    title: 'SK-AutoD — ML Training Curve Auto-Diagnostician',
    subtitle: 'Open-Source ML Monitoring & Pathology Detection Library',
    description:
      'Open-source Python library auto-diagnosing 10+ ML training pathologies (overfitting, unstable LR, exploding gradients, early stopping issues) using transparent rule-based detectors with confidence scoring, severity levels, and actionable fix recommendations. Zero-config, fully offline, CI/CD ready. Published on PyPI.',
    highlights: [
      'Diagnoses 10+ pathology types with configurable sensitivity thresholds',
      'Zero-configuration, fully offline — works on any loss curve (pandas, numpy, CSV)',
      'Published to PyPI with full documentation and CI/CD pipeline',
    ],
    stack: ['Python', 'NumPy', 'SciPy', 'PyPI', 'GitHub Actions'],
    links: [
      { label: 'Repository', url: 'https://github.com/shamiquekhan/SK-AutoD-ML-Library-for-Training-Curve-Auto-Diagnostician' },
    ],
  },
  {
    id: 4,
    title: 'Neuromorphic Sleep Staging Pipeline',
    subtitle: 'End-to-End Deep Learning for Automatic Sleep Classification',
    description:
      'End-to-end deep learning pipeline for automatic sleep stage classification from polysomnography (PSG) signals. Classifies 30-second EEG/EOG/EMG epochs into 5 AASM sleep stages using a Teacher-Student Knowledge Distillation approach — distilling a complex CNN + Transformer model (κ=0.636) into a lightweight 1D-ResNet for embedded-device inference on ARM Cortex-M7 microcontrollers.',
    highlights: [
      'Dual-domain inputs: raw time-domain signals + FFT amplitude spectrums',
      'Subject-level splits preventing patient EEG signature memorization',
      'Weighted cross-entropy (1.5× boost for N1) addressing class imbalance',
      'TFLite deployment targeting ARM Cortex-M7 for real-time clinical monitoring',
    ],
    stack: ['Python', 'PyTorch', 'CNNs', 'Transformers', 'TFLite'],
    links: [
      { label: 'Repository', url: 'https://github.com/shamiquekhan/neuromorphic-sleep-staging-pipeline-project' },
    ],
  },
  {
    id: 5,
    title: 'AI Guest Messaging Automation System',
    subtitle: 'Production LLM Workflow for Multi-Channel Message Triage',
    description:
      'Built a 6-class priority classifier agent (auto-send / agent-review / escalate) with structured outputs, adversarial security guardrails, explicit decision boundaries, and 14 automated tests passing. Mirrors real-world agentic workflow patterns end-to-end — webhook server triaging messages from WhatsApp, Booking.com, Airbnb, and Instagram.',
    highlights: [
      '6-class intent classification with confidence-based routing',
      'Adversarial security guardrails preventing prompt injection',
      '14 automated tests with full CI/CD pipeline',
    ],
    stack: ['Python', 'FastAPI', 'Claude API', 'PostgreSQL'],
    links: [
      { label: 'Repository', url: 'https://github.com/shamiquekhan/AI-guest-messaging-automation-system' },
    ],
  },
  {
    id: 6,
    title: 'TensorFlow RAG Q&A Agent',
    subtitle: 'Full Retrieval-Augmented Generation Pipeline',
    description:
      'End-to-end RAG pipeline over 500+ TF documentation pages: automated crawl → chunk → embed → vector-index → GPT-4 answer. Source-cited, syntax-highlighted, evaluatable outputs via Streamlit UI and CLI. Benchmarked across chunking strategies and embedding models.',
    highlights: [
      'Automated crawl-to-answer pipeline over 500+ documentation pages',
      'Source-cited answers with syntax highlighting',
      'Benchmarked across chunking strategies and embedding models',
    ],
    stack: ['LangChain', 'GPT-4', 'FAISS', 'Chroma', 'Supabase', 'Streamlit'],
    links: [
      { label: 'Repository', url: 'https://github.com/shamiquekhan/Tensorflow_rag_Q-A_application' },
    ],
  },
  {
    id: 7,
    title: 'Market Regime Detection System',
    subtitle: 'HMM/GMM Framework for Indian Equity Markets',
    description:
      'Production-grade Hidden Markov Model (HMM) framework for real-time market regime identification in Indian equity markets (NSE NIFTY50, SENSEX, NIFTY Bank/IT). Deployed live via Streamlit. Architecture: NSE data → 22 technical features → HMM/GMM modeling → regime backtesting → automated quality gates.',
    highlights: [
      'NIFTY50 2017-2024: HMM-4 delivers Sharpe 1.35, Calmar 0.62, Max DD -18.5% vs Buy & Hold Sharpe 0.72',
      '22 features: multi-period returns, Parkinson/Garman-Klass volatility, RSI-14, MACD(12,26,9)',
      'Automated deployment gates flag underperforming configurations preventing live deployment',
    ],
    stack: ['Python', 'HMM', 'scikit-learn', 'Streamlit', 'yfinance'],
    links: [
      { label: 'Repository', url: 'https://github.com/shamiquekhan/Market-Regime-Detection-System' },
    ],
  },
  {
    id: 8,
    title: 'NIFTY50 AI Trading Pipeline',
    subtitle: 'Deep Learning + NLP Sentiment for Algorithmic Trading',
    description:
      'Production-grade algorithmic trading system combining Bi-Directional LSTM price prediction, FinBERT-India sentiment analysis processing 189+ news articles daily from 6 RSS feeds, and multi-agent consensus (Technical+Sentiment+LSTM) reducing false signals through 3-way voting. Kelly Criterion optimal position sizing with 5 safety layers.',
    highlights: [
      '61 backtested trades, 32.8% win rate, zero infrastructure cost',
      'Bi-Directional LSTM using 14 technical features trained on 2 years of data',
      'Kelly Criterion sizing with 5 safety layers: 25% max, 60% confidence threshold, volatility scaling',
    ],
    stack: ['Python', 'TensorFlow', 'Keras', 'Streamlit', 'HuggingFace', 'yfinance', 'Plotly'],
    links: [
      { label: 'Repository', url: 'https://github.com/shamiquekhan/nifty50-ai' },
    ],
  },
  {
    id: 9,
    title: 'Falcon Landing Analytics — ML Pipeline',
    subtitle: 'Predictive Intelligence for SpaceX Falcon 9 Landing Success',
    description:
      'Engineered a complete ML pipeline achieving 85.19% accuracy predicting Falcon 9 first-stage landing success using XGBoost, SQL analytics, and Streamlit dashboards. Analyzes 90 SpaceX launches across 187 API records — reveals operational experience (flight number) shows +0.95 correlation with landing success.',
    highlights: [
      '85.19% prediction accuracy using XGBoost with hyperparameter tuning',
      'Identified flight number as strongest predictor (+0.95 correlation with landing success)',
      'End-to-end pipeline: data collection → EDA → modeling → deployment',
    ],
    stack: ['Python', 'XGBoost', 'scikit-learn', 'SQL', 'Streamlit', 'Pandas', 'NumPy'],
    links: [
      { label: 'Repository', url: 'https://github.com/shamiquekhan/Falcon-Landing-Analytics-End-to-End-Machine-Learning-Pipeline' },
    ],
  },
  {
    id: 10,
    title: 'AI Investment Advisor Agent',
    subtitle: 'Research-Grade Financial Intelligence System',
    description:
      'Streamlit-based AI agent helping retail investors analyze stocks using real-time market data, financial news sentiment, and a transparent scoring system. Connects to Yahoo Finance, Finnhub, and Alpha Vantage with smart caching for free-tier rate limits.',
    highlights: [
      'FinBERT-based NLP pipeline quantifying sentiment on latest financial headlines',
      'AI score 0–10 mapped to STRONG BUY / BUY / HOLD with explainable reasoning',
      'Portfolio allocation with expected return, risk profile, stop-loss and rebalance guidance',
    ],
    stack: ['Python', 'FinBERT', 'Streamlit', 'yfinance', 'scikit-learn'],
    links: [
      { label: 'Repository', url: 'https://github.com/shamiquekhan/ai-investment-advisor-agent' },
    ],
  },
]

export interface ArchiveProject {
  name: string
  url: string
}

export const archiveProjects: ArchiveProject[] = [
  { name: 'FinCheck — Real-Time Scam & Phishing Detector', url: 'https://github.com/shamiquekhan/FinCheck' },
  { name: 'GreenMagic — AI Air Writing Tool', url: 'https://github.com/shamiquekhan/GreenMagic' },
  { name: 'Patient Risk Assessment System', url: 'https://github.com/shamiquekhan/Patient_Risk_Assessment_System' },
  { name: 'MediArchive', url: 'https://github.com/shamiquekhan/mediarchive' },
  { name: 'Sensex Heston ML Calibration', url: 'https://github.com/shamiquekhan/Sensex-Heston-ML-Calibration-Tool' },
  { name: 'Constitutional AI', url: 'https://github.com/shamiquekhan/Constitutional-AI' },
  { name: 'Legal AI', url: 'https://github.com/shamiquekhan/Legal-AI' },
  { name: 'Quantum Mechanics Computation & Visualization', url: 'https://github.com/shamiquekhan/Quantum_System_Solver_Project_streamlit' },
  { name: 'Real Estate Price Prediction Model', url: 'https://github.com/shamiquekhan/Machince_Learning_Projects' },
  { name: 'Weather Trend Forecasting', url: 'https://github.com/shamiquekhan/Weather-Trend-Forecasting' },
  { name: 'Transfer Learning Food Vision', url: 'https://github.com/shamiquekhan/transfer_learning_food_vision' },
  { name: 'MLP Classifier Project', url: 'https://github.com/shamiquekhan/mlp-classifier-project' },
]
