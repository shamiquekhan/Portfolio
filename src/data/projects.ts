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
    title: 'Suproc — Local Agentic Search System',
    subtitle: 'LLM-Parsed, Deterministic-Retrieval Supplier Matching',
    description:
      'A local AI agent that matches natural-language business requirements against a SQLite dataset of suppliers, professionals, and opportunities. Built as a technical assignment for an AI Engineer Internship application. LLM (Ollama/Qwen3) handles only the parsing step — all retrieval, scoring, and validation run in deterministic Python with a mandatory human approval gate before any outreach is drafted.',
    highlights: [
      'Five-dimension transparent match scoring with full audit trail',
      'Nine deterministic validation checks with auto-correction (up to 3 attempts)',
      'Mandatory human approval gate before any outreach is drafted',
    ],
    stack: ['Python', 'Ollama', 'Qwen3', 'SQLite', 'Streamlit'],
    links: [
      { label: 'Repository', url: 'https://github.com/shamiquekhan/Suproc-Local-Agentic-Search-System' },
      { label: 'Live Demo', url: 'https://suproc-local-agentic-search-system.streamlit.app/' },
    ],
  },
  {
    id: 3,
    title: 'ARAMS — Autonomous Research & Multi-Agent System',
    subtitle: 'Graph-Based Multi-Agent Research Assistant',
    description:
      'An intelligent research assistant that decomposes complex queries into subtasks, searches multiple sources (ArXiv, DuckDuckGo, Wikipedia), evaluates relevance, verifies facts, and generates structured research reports via a graph-based multi-agent pipeline using LangGraph orchestration.',
    highlights: [
      'Multi-source search: ArXiv, DuckDuckGo, and Wikipedia in parallel',
      'Two-stage relevance scoring: fast keyword overlap + LLM-based PRIMARY/SECONDARY/NO classification',
      'Fact verification cross-referencing claims against source URLs with contradiction detection',
      'Dual UI: Next.js frontend with real-time progress streaming + REST API for headless integration',
    ],
    stack: ['Python', 'LangChain', 'LangGraph', 'Ollama', 'Qdrant', 'Next.js', 'FastAPI', 'PostgreSQL', 'Redis'],
    links: [
      { label: 'Repository', url: 'https://github.com/shamiquekhan/ARAMS' },
    ],
  },
  {
    id: 4,
    title: 'AI Guest Messaging Automation System',
    subtitle: '6-Class LLM Message Triage for Hospitality',
    description:
      'A webhook server sitting between hotel guest-messaging channels (WhatsApp, Booking.com, Airbnb, Instagram, website) and the operations team — normalizes incoming messages, classifies query type, drafts a reply via the Claude API, and returns a confidence score with a recommended action. Complaints always escalate; refund promises are blocked at the prompt layer.',
    highlights: [
      '6-class intent classification with confidence-based auto_send / agent_review / escalate routing',
      'Adversarial security guardrails preventing prompt injection and refund promise leakage',
      '14 automated tests with full CI/CD pipeline',
    ],
    stack: ['Python', 'FastAPI', 'Claude API', 'PostgreSQL'],
    links: [
      { label: 'Repository', url: 'https://github.com/shamiquekhan/AI-guest-messaging-automation-system' },
    ],
  },
  {
    id: 5,
    title: 'Legal AI — Indian Legal Assistant',
    subtitle: 'Zero-Hallucination RAG for Indian Judiciary',
    description:
      'A zero-hallucination RAG-based legal research assistant tailored to the Indian legal system, combining dense embeddings, BM25 sparse retrieval, and semantic search with a constitutional verification layer. Features a self-reflective RAG that flags and corrects its own uncertainty, with a Scandinavian-style research UI.',
    highlights: [
      'Hybrid (dense + sparse + semantic) retrieval with multi-step citation/jurisdiction verification',
      'Self-reflective RAG that flags and corrects its own uncertainty',
      'Constitutional verification layer for demographic parity in legal outcomes',
    ],
    stack: ['Python', 'FastAPI', 'React 19', 'TypeScript', 'PostgreSQL', 'OpenAI Embeddings'],
    links: [
      { label: 'Repository', url: 'https://github.com/shamiquekhan/Legal-AI' },
      { label: 'Live Demo', url: 'https://the-legal-ai.vercel.app/' },
    ],
  },
  {
    id: 6,
    title: 'Neuromorphic Sleep Staging Pipeline',
    subtitle: 'Teacher-Student Distillation for Embedded Sleep Classification',
    description:
      'End-to-end deep learning pipeline for automatic sleep stage classification from polysomnography (PSG) signals. Classifies 30-second EEG/EOG/EMG epochs into 5 AASM sleep stages using a Teacher-Student Knowledge Distillation approach — distilling a complex CNN + Transformer model (κ = 0.636) into a lightweight 1D-ResNet for ARM Cortex-M7 microcontrollers.',
    highlights: [
      'Dual-domain inputs: raw time-domain signals + FFT amplitude spectrums',
      'Subject-level splits preventing patient EEG signature memorization',
      'Weighted cross-entropy (1.5× boost for N1) addressing class imbalance',
      'TFLite deployment targeting ARM Cortex-M7 for real-time clinical monitoring',
    ],
    stack: ['Python', 'PyTorch', 'CNNs', 'Transformers', 'TFLite', 'C++'],
    links: [
      { label: 'Repository', url: 'https://github.com/shamiquekhan/neuromorphic-sleep-staging-pipeline-project' },
    ],
  },
  {
    id: 7,
    title: 'SK-AutoD — ML Training Curve Auto-Diagnostician',
    subtitle: 'Open-Source ML Pathology Detection Library (PyPI)',
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
      { label: 'Docs', url: 'https://shamiquekhan.github.io/SK-AutoD-ML-Library-for-Training-Curve-Auto-Diagnostician/' },
    ],
  },
  {
    id: 8,
    title: 'Structural Fingerprints of Label Memorization',
    subtitle: '4-Phase Study on How Memorization Distorts Network Geometry',
    description:
      'A systematic 4-phase research study on how label memorization leaves structural fingerprints in shallow ReLU networks — covering CKA representation drift, spectral geometry, circuit sparsity, influence functions, and rank-one model editing (ROME). Primary experiments on MNIST, validated on CIFAR-10, with width scaling from 16 to 1024 hidden units.',
    highlights: [
      'FC2 spectral norm collapse (5.00 → 2.76) under label corruption',
      'CKA similarity drop of 0.160 localized to the ReLU activation function',
      'ROME causal edits recover 10–22% of source-class accuracy; all comparisons p < 0.0001 across 10 seeds × 10 classes',
      'CIFAR-10 replicates ROME finding (1.84× ratio, all classes p < 0.05)',
    ],
    stack: ['Python', 'PyTorch', 'CKA', 'ROME', 'LaTeX'],
    links: [
      { label: 'Repository', url: 'https://github.com/shamiquekhan/Four-Phase-Memorization-Analysis' },
    ],
  },
  {
    id: 9,
    title: 'Scandium Labs — PIGNet V2 Model',
    subtitle: 'Physics-Informed GNN for Crystal Property Prediction',
    description:
      'Production-grade physics-informed Graph Neural Network (PIGNet V2) architecture for predicting crystal material properties (band gap, formation energy, energy above hull) using a 56-dimensional 3-body angular featurization. Designed for high-performance training on NVIDIA A100/RTX 4090-class hardware with 150k-structure dataset ingestion from the Materials Project.',
    highlights: [
      '56-dimensional 3-body angular edge features capturing bond geometry information',
      'Zero physically impossible predictions across all test configurations',
      'Trained on 125,000+ structures from the Materials Project',
    ],
    stack: ['Python', 'PyTorch', 'PyTorch Geometric', 'FastAPI', 'TypeScript', 'Docker'],
    links: [
      { label: 'Repository', url: 'https://github.com/shamiquekhan/Scandium-Lab-Model' },
    ],
  },
  {
    id: 10,
    title: 'Market Regime Detection System',
    subtitle: 'HMM/GMM Framework for Indian Equity Markets',
    description:
      'Production-grade Hidden Markov Model (HMM) framework for real-time market regime identification in Indian equity markets (NSE NIFTY50, SENSEX, NIFTY Bank/IT). Deployed live via Streamlit. Architecture: NSE data → 22 technical features → HMM/GMM modeling → regime backtesting → automated quality gates.',
    highlights: [
      'NIFTY50 2017–2024: HMM-4 delivers Sharpe 1.35, Calmar 0.62, Max DD -18.5% vs Buy & Hold Sharpe 0.72',
      '22 features: multi-period returns, Parkinson/Garman-Klass volatility, RSI-14, MACD(12,26,9)',
      'Automated deployment gates flag underperforming configurations preventing live deployment',
    ],
    stack: ['Python', 'HMM', 'scikit-learn', 'Streamlit', 'yfinance'],
    links: [
      { label: 'Repository', url: 'https://github.com/shamiquekhan/Market-Regime-Detection-System' },
      { label: 'Live Demo', url: 'https://market-regime-detection-system-dwjk7sdsnhgisgkrn3csxz.streamlit.app/' },
    ],
  },
  {
    id: 11,
    title: 'RoadSense',
    subtitle: 'AI-Powered Road Safety Analytics Platform',
    description:
      'Built for the ADB "AI for Safer Roads 2026" challenge. Computes segment-level Speed Safety Scores from GPS probe data, OpenStreetMap road networks, and street-level imagery, layered with schools, markets, and population-density context. Blends how far posted limits deviate from observed operating speed, road-user exposure, and contextual risk into one transparent, policy-actionable score.',
    highlights: [
      'Segment-level Speed Safety Scores integrating GPS probe data with OSM road networks',
      'Contextual risk layering: schools, markets, and population density as risk multipliers',
      'Built for the ADB "AI for Safer Roads 2026" challenge',
    ],
    stack: ['Python', 'OpenStreetMap', 'GeoPandas', 'Folium', 'HTML'],
    links: [
      { label: 'Repository', url: 'https://github.com/shamiquekhan/RoadSense' },
      { label: 'Live Demo', url: 'https://shamiquekhan.github.io/RoadSense/' },
    ],
  },
  {
    id: 12,
    title: 'NIFTY50 AI Trading Pipeline',
    subtitle: 'LSTM + FinBERT Sentiment with Kelly-Criterion Sizing',
    description:
      'Production-grade algorithmic trading system combining Bi-Directional LSTM price prediction, FinBERT-India sentiment analysis processing 189+ news articles daily from 6 RSS feeds, and multi-agent consensus (Technical + Sentiment + LSTM) reducing false signals through 3-way voting. Kelly Criterion optimal position sizing with 5 safety layers.',
    highlights: [
      '61 backtested trades, 32.8% win rate, zero infrastructure cost',
      'Bi-Directional LSTM using 14 technical features trained on 2 years of data',
      'Kelly Criterion sizing with 5 safety layers: 25% max, 60% confidence threshold, volatility scaling',
    ],
    stack: ['Python', 'TensorFlow', 'Keras', 'Streamlit', 'HuggingFace', 'yfinance', 'Plotly'],
    links: [
      { label: 'Repository', url: 'https://github.com/shamiquekhan/nifty50-ai' },
      { label: 'Live Demo', url: 'https://nifty50-ai.streamlit.app' },
    ],
  },
  {
    id: 13,
    title: 'Financial Sentiment Radar',
    subtitle: 'Domain-Aware Financial News Classifier',
    description:
      'A domain-aware financial news sentiment classifier (positive/neutral/negative) built with transformer models, designed to correctly interpret finance-specific phrasing that generic sentiment models misread (e.g. "cuts debt" reads as negative generically but is actually a positive signal). Built as an evaluated AI/ML course project at VIT Bhopal.',
    highlights: [
      'Correctly interprets finance-specific phrasing that generic models misread',
      'Built with transformer-based NLP pipeline fine-tuned on financial corpus',
      'Interactive Streamlit dashboard with batch classification and explainability',
    ],
    stack: ['Python', 'Transformers', 'HuggingFace', 'Streamlit', 'Jupyter'],
    links: [
      { label: 'Repository', url: 'https://github.com/shamiquekhan/Financial-Sentiment-Radar' },
      { label: 'Live Demo', url: 'https://financial-sentiment-radar.streamlit.app/' },
    ],
  },
  {
    id: 14,
    title: 'AI Investment Advisor Agent',
    subtitle: 'Multi-Agent Stock Analysis & Portfolio Engine',
    description:
      'Streamlit-based AI agent helping retail investors analyze stocks using real-time market data, financial news sentiment, and a transparent scoring engine. Connects to Yahoo Finance, Finnhub, and Alpha Vantage with smart caching for free-tier rate limits. Computes a 0–10 AI score with STRONG BUY/BUY/HOLD labels and generates sample portfolio allocations.',
    highlights: [
      'FinBERT-based NLP pipeline quantifying sentiment on latest financial headlines',
      'AI score 0–10 mapped to STRONG BUY / BUY / HOLD with explainable reasoning',
      'Portfolio allocation with expected return, risk profile, stop-loss and rebalance guidance',
    ],
    stack: ['Python', 'FinBERT', 'Streamlit', 'yfinance', 'scikit-learn'],
    links: [
      { label: 'Repository', url: 'https://github.com/shamiquekhan/ai-investment-advisor-agent' },
      { label: 'Live Demo', url: 'https://ai-investment-advisor-agent.streamlit.app/' },
    ],
  },
  {
    id: 15,
    title: 'Falcon Landing Analytics — ML Pipeline',
    subtitle: 'Predicting Falcon 9 First-Stage Landing Success',
    description:
      'Engineered a complete ML pipeline achieving 85.19% accuracy predicting Falcon 9 first-stage landing success using XGBoost, SQL analytics, and Streamlit dashboards. Analyzes 90 SpaceX launches across 187 API records — reveals operational experience (flight number) shows a +0.95 correlation with landing success.',
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
]

export interface ArchiveProject {
  name: string
  url: string
}

export const archiveProjects: ArchiveProject[] = [
  { name: 'FinCheck — Real-Time Scam & Phishing Detector', url: 'https://github.com/shamiquekhan/FinCheck' },
  { name: 'Sensex Heston-ML Calibrator', url: 'https://github.com/shamiquekhan/Sensex-Heston-ML-Calibration-Tool' },
  { name: 'Scandium Labs — Physics-Informed GNNs for Solid-State Electrolytes', url: 'https://github.com/shamiquekhan/Scandium-Labs' },
  { name: 'MediArchive — Unified Health Data Concept', url: 'https://github.com/shamiquekhan/mediarchive' },
  { name: 'Patient Risk Assessment System', url: 'https://github.com/shamiquekhan/Patient_Risk_Assessment_System' },
  { name: 'GreenMagic — AI Air Writing Tool', url: 'https://github.com/shamiquekhan/GreenMagic' },
  { name: 'Quantum System Solver — 1D Quantum-in-a-Box Explorer', url: 'https://github.com/shamiquekhan/Quantum_System_Solver_Project_streamlit' },
  { name: 'Tesla & GameStop Stock Analysis', url: 'https://github.com/shamiquekhan/Tesla-GameStop-Stock-Analysis-Project' },
  { name: 'Swapy — Frontend', url: 'https://github.com/shamiquekhan/Swapy-frontend' },
  { name: 'Weather Trend Forecasting', url: 'https://github.com/shamiquekhan/Weather-Trend-Forecasting' },
  { name: 'Transfer Learning Food Vision', url: 'https://github.com/shamiquekhan/transfer_learning_food_vision' },
]
