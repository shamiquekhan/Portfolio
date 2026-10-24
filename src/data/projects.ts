export interface CaseStudy {
  id: number
  category: string
  title: string
  subtitle: string
  summary: string
  bullets: string[]
  stack: string[]
  links: { label: string; url: string }[]
  featured?: boolean
}

const projects: CaseStudy[] = [
  {
    id: 1,
    category: 'Geospatial AI & spatial data',
    title: 'RoadSense — AI Road Safety Analytics Platform',
    subtitle: 'Policy-ready road risk scoring for transport analysis',
    summary:
      'A five-stage geospatial pipeline that turns GPS probe data and OpenStreetMap context into transparent road-segment risk scores for Thailand and Maharashtra.',
    bullets: [
      'Scored every road segment into Critical, High, Moderate, or Low risk tiers by combining cleaning, safety scoring, tier classification, and export over Asian Development Bank GPS probe datasets.',
      'Delivered policy-ready CSV, GeoJSON, GeoPackage, and Folium outputs with OSM contextual layers, a four-page policy brief, and licence checks for ADB NDA terms and ODbL 1.0.',
    ],
    stack: ['Python', 'GPS probe data', 'OSMnx / pyrosm', 'Overpass API', 'Folium', 'GeoPandas'],
    links: [
      { label: 'GitHub repository', url: 'https://github.com/shamiquekhan/RoadSense' },
      { label: 'Live map', url: 'https://shamiquekhan.github.io/RoadSense/speed_safety_scores_map.html' },
    ],
    featured: true,
  },
  {
    id: 2,
    category: 'AI agents & automation',
    title: 'ApplyJin — Autonomous Job Application Platform',
    subtitle: 'Evidence-grounded job search automation with approval gates',
    summary:
      'An end-to-end application workflow covering job scraping, fit scoring, tailored documents, verification, and human-approved ATS submission.',
    bullets: [
      'Cut manual application time by 80% and scaled candidate outreach 3× by automating JD parsing, fit scoring, 20–30% targeted resume edits, cover-letter generation, and approval-gated ATS submission.',
      'Blocked fabricated application content by enforcing NLP guardrails, DeBERTa-v3 NLI claim entailment against verified profile data, and confidence-scored escalation to human review.',
    ],
    stack: ['Gemini API', 'FastAPI', 'React', 'LaTeX', 'DeBERTa-v3 NLI'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/ApplyJin' }],
    featured: true,
  },
  {
    id: 3,
    category: 'AI agents & automation',
    title: 'ARAMS — Autonomous Research & Multi-Agent System',
    subtitle: 'Cited research reports from parallel retrieval',
    summary:
      'A LangGraph state machine that decomposes research questions, retrieves evidence in parallel, verifies claims, and returns cited reports.',
    bullets: [
      'Delivered fact-verified, cited research reports by orchestrating six agents with parallel retrieval across ArXiv, DuckDuckGo, and Wikipedia, including routing and retry logic.',
      'Raised research reliability by re-searching until a confidence threshold was met, keeping reports grounded in retrieved sources rather than model memory.',
    ],
    stack: ['Python', 'LangGraph', 'ArXiv API', 'DuckDuckGo API', 'Wikipedia API', 'Parallel retrieval'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/ARAMS' }],
    featured: true,
  },
  {
    id: 4,
    category: 'LLM & RAG systems',
    title: 'Legal-AI — Indian Legal Research Assistant',
    subtitle: 'Hybrid retrieval with constitutional verification',
    summary:
      'A legal research assistant combining dense retrieval, BM25, semantic matching, and a constitutional verification layer to keep answers citation-accurate.',
    bullets: [
      'Built a zero-hallucination legal research workflow by constraining responses to retrieved, citation-accurate sources across dense, sparse, and semantic retrieval paths.',
      'Connected the system to a published essay proposing an AI “First-Layer Magistrate” for India’s judicial backlog and procedural decision latency.',
    ],
    stack: ['Python', 'Dense retrieval', 'BM25', 'Semantic matching', 'LLMs', 'Constitutional verification'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/Legal-AI' }],
    featured: true,
  },
  {
    id: 5,
    category: 'Computer vision & signal ML',
    title: 'Neuromorphic Sleep-Staging Pipeline',
    subtitle: 'Distilled sleep classification for microcontrollers',
    summary:
      'A teacher–student pipeline that compresses a Transformer sleep-stage classifier into a deployable 1D-ResNet for ARM Cortex-M7 hardware.',
    bullets: [
      "Achieved Cohen's kappa of 0.636 on five-stage AASM sleep classification while compressing a Transformer teacher into a sub-100K-parameter 1D-ResNet student.",
      'Enabled real-time on-device inference by optimizing and quantizing the student model for TFLite deployment on ARM Cortex-M7 microcontrollers.',
    ],
    stack: ['Python', 'PyTorch', 'TFLite', 'Streamlit', 'Knowledge distillation', 'Hugging Face'],
    links: [
      { label: 'GitHub repository', url: 'https://github.com/shamiquekhan/neuromorphic-sleep-staging-pipeline' },
      { label: 'Live demo', url: 'https://huggingface.co/spaces/shamique-khan/Sleep_Staging_App' },
    ],
    featured: true,
  },
  {
    id: 6,
    category: 'Finance & quantitative ML',
    title: 'AI Investment Advisor Agent',
    subtitle: 'Explainable multi-engine market analysis',
    summary:
      'A finance workflow combining factor analysis, market segmentation, anomaly detection, backtesting, and FinBERT sentiment into auditable recommendations.',
    bullets: [
      'Outperformed SPY by 3.72 percentage points (+18.50% vs +14.78%) over a one-year backtest with Sharpe 2.10 and maximum drawdown of −2.49%.',
      'Made every recommendation auditable by attaching explainable statistical confidence scores through a Chrome extension and Python backend.',
    ],
    stack: ['Python', 'scikit-learn', 'FinBERT', 'Isolation Forest', 'Backtesting'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/ai-investment-advisor-agent' }],
    featured: true,
  },
  {
    id: 7,
    category: 'Machine learning research & interpretability',
    title: 'SK-AutoD — ML Training Diagnostics Library',
    subtitle: 'Open-source, zero-config training pathology detection',
    summary:
      'A PyPI library that uses transparent rule-based detectors to identify common ML training failures during a run.',
    bullets: [
      'Shipped a three-star open-source PyPI library detecting 10+ training pathologies, including overfitting, dead layers, and label noise, with zero-config checks.',
      'Reduced model-debugging time by packaging actionable detectors as a documented import that can run alongside any training loop.',
    ],
    stack: ['Python', 'PyPI packaging', 'Rule-based ML diagnostics'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/SK-AutoD' }],
    featured: true,
  },
  {
    id: 8,
    category: 'Machine learning research & interpretability',
    title: 'PIGNet V2 — Physics-Informed ML for Battery Materials',
    subtitle: 'High-throughput crystal property prediction',
    summary:
      'A physics-informed graph neural network pipeline for screening crystal structures and jointly predicting thermodynamic and transport properties.',
    bullets: [
      'Screened 104,934 candidate cathode materials after training on 125,000+ crystal structures, identifying an Ir/Ru co-doping strategy that lifted theoretical energy density from 752.4 to 1104.5 Wh/kg.',
      'Accelerated solid-state electrolyte discovery by jointly predicting thermodynamic and transport properties and releasing harmonized materials and conductivity datasets.',
    ],
    stack: ['Python', 'PyTorch', 'Physics-informed GNNs', 'Materials data', 'Graph learning'],
    links: [{ label: 'GitHub source', url: 'https://github.com/shamiquekhan/Scandium-Lab-Model' }],
    featured: true,
  },
  {
    id: 9,
    category: 'AI agents & automation',
    title: 'ClearLedger-AI — Agentic Financial Operations Pipeline',
    subtitle: 'Validated invoice-to-ledger automation',
    summary:
      'A LangGraph workflow for invoice extraction, validation, categorization, and auditing with deterministic checks before ledger writes.',
    bullets: [
      'Automated end-to-end invoice extraction, validation, categorization, and auditing through a multi-agent workflow, removing manual ledger processing.',
      'Protected financial records from hallucinated output by gating every LLM extraction behind deterministic validation before any ledger write.',
    ],
    stack: ['Python', 'LangGraph', 'Multi-agent workflow', 'Deterministic validation'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/ClearLedger-AI---Financial-Operations-Agent' }],
  },
  {
    id: 10,
    category: 'AI agents & automation',
    title: 'Suproc Local Agentic Search System',
    subtitle: 'Private supplier matching with human approval',
    summary:
      'A fully local agent that matches natural-language business requirements against a SQLite supplier database without external APIs.',
    bullets: [
      'Matched natural-language business requirements against supplier records with deterministic scoring while keeping 100% of data on the machine.',
      'Enforced accountable automation by shipping a mandatory human-approval gate before any agent action executes.',
    ],
    stack: ['Python', 'Ollama', 'Qwen3', 'SQLite', 'Local-first design'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/Suproc-Local-Agentic-Search-System' }],
  },
  {
    id: 11,
    category: 'AI agents & automation',
    title: 'stratplan-ai — Multi-Agent Strategic Planning',
    subtitle: 'Research decomposition for decision-ready plans',
    summary:
      'A multi-agent planning system that breaks complex strategic questions into research subtasks and surfaces the result in Streamlit.',
    bullets: [
      'Converted complex strategic questions into actionable plans by decomposing them into research subtasks routed across specialized agents.',
      'Made multi-agent output accessible to non-technical stakeholders through a focused Streamlit interface.',
    ],
    stack: ['Python', 'Multi-agent orchestration', 'Streamlit'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/stratplan-ai' }],
  },
  {
    id: 12,
    category: 'AI agents & automation',
    title: 'Startup Idea Validator',
    subtitle: 'Structured market research for go/no-go decisions',
    summary:
      'A multi-agent pipeline that evaluates startup ideas across demand, competition, market size, and risk.',
    bullets: [
      'Evaluated startup ideas across demand signals, competitor landscape, market sizing, and risk by converting unstructured descriptions into research subtasks.',
      'Reduced go/no-go decision time by producing scored validation reports with explicit kill criteria.',
    ],
    stack: ['Python', 'Multi-agent pipeline', 'Market research'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/Startup-idea-validator' }],
  },
  {
    id: 13,
    category: 'AI agents & automation',
    title: 'Quote Comparison Agent',
    subtitle: 'Local, explainable procurement ranking',
    summary:
      'A local-LLM procurement assistant that normalizes heterogeneous supplier quotations and ranks them on transparent criteria.',
    bullets: [
      'Ranked supplier quotations on price, terms, and delivery by parsing and normalizing heterogeneous quote formats without API keys or data leakage.',
      'Accelerated procurement decisions with deterministic, explainable ranking logic instead of opaque model scores.',
    ],
    stack: ['Python', 'Local LLM inference', 'Data normalization'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/Quote-Comparison-Agent' }],
  },
  {
    id: 14,
    category: 'AI agents & automation',
    title: 'Lead Gen Qualification Agent',
    subtitle: 'Outcome-oriented lead qualification',
    summary:
      'An OSINT-backed qualification agent that combines external signals with deterministic scoring for explainable sales decisions.',
    bullets: [
      'Qualified sales leads using OSINT API lookups and deterministic scoring, demonstrating an outcome-based marketplace agent paid on verified results.',
      'Improved lead-to-meeting efficiency by returning structured, explainable qualification verdicts.',
    ],
    stack: ['Python', 'OSINT APIs', 'Deterministic scoring'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/Lead-Gen-Qualification-Agent' }],
  },
  {
    id: 15,
    category: 'AI agents & automation',
    title: 'AI Guest Messaging Automation System',
    subtitle: 'Bounded hospitality message triage',
    summary:
      'A FastAPI service that drafts context-aware hospitality replies and routes them to auto-send, agent review, or escalation.',
    bullets: [
      'Triaged guest messages across multiple channels by producing structured replies and routing decisions with explicit operational boundaries.',
      'Prevented regression in production decision logic with 14 automated tests covering decision boundaries and escalation behavior.',
    ],
    stack: ['Python', 'FastAPI', 'Claude API', 'PostgreSQL', 'Automated testing'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/AI-guest-messaging-automation-system' }],
  },
  {
    id: 16,
    category: 'AI agents & automation',
    title: 'Website Scam Risk Detection Agent / FinCheck',
    subtitle: 'Explainable URL risk scoring and browser protection',
    summary:
      'A URL-scoring service that returns an explainable 0–100 scam-risk verdict and a Chrome extension for real-time browsing protection.',
    bullets: [
      'Scored URLs in under 15 seconds with Safe, Caution, High Risk, or Insufficient Data outcomes and signal-by-signal explanations.',
      'Extended protection to real-time browsing by shipping a FinCheck Chrome extension backed by a Python scoring service.',
    ],
    stack: ['Python', 'Streamlit', 'Chrome extension backend', 'Risk scoring'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/Website-Scam-Risk-Detection-Agent' }],
  },
  {
    id: 17,
    category: 'AI agents & automation',
    title: 'ai-agent-skills',
    subtitle: 'Composable agent capability library',
    summary:
      'A curated library of installable agent skills packaged as independent folders with grounded, minimal SKILL.md instructions.',
    bullets: [
      'Published a reusable collection of production-safe agent skills, each with its own focused instruction file and clear operating boundary.',
      'Improved agent capability reuse by emphasizing composable, reviewable skills over prompt-only tricks.',
    ],
    stack: ['Shell', 'Agent skill packaging', 'SKILL.md authoring'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/ai-agent-skills' }],
  },
  {
    id: 18,
    category: 'LLM & RAG systems',
    title: 'TensorFlow RAG Q&A Agent',
    subtitle: 'Documentation-grounded technical Q&A',
    summary:
      'A retrieval evaluation pipeline that crawls, chunks, embeds, indexes, and benchmarks TensorFlow documentation for grounded answers.',
    bullets: [
      'Grounded answers in 500+ TensorFlow documentation pages by building the full crawl → chunk → embed → index → evaluate lifecycle.',
      'Improved source accuracy by benchmarking chunking strategies and embedding models, directly analogous to dataset preparation for foundation-model fine-tuning.',
    ],
    stack: ['Python', 'LangChain', 'FAISS', 'Chroma', 'GPT-4', 'Embedding benchmarking'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/Tensorflow_rag_Q-A' }],
  },
  {
    id: 19,
    category: 'Machine learning research & interpretability',
    title: 'Mechanistic Transparency of Neural Networks',
    subtitle: 'Causal model editing and internal representation analysis',
    summary:
      'A mechanistic-interpretability study using causal model editing to localize and repair a targeted neural-network failure.',
    bullets: [
      'Restored a targeted model failure from 0% to 97.86% accuracy through a single 0.28%-weight ROME causal edit.',
      'Formalized interpretability practice by publishing a four-layer framework spanning geometric, representational, algorithmic, and causal transparency.',
    ],
    stack: ['Python', 'ROME', 'Causal model editing', 'Mechanistic interpretability'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/Mechanistic-Transparency' }],
  },
  {
    id: 20,
    category: 'Machine learning research & interpretability',
    title: 'Four-Phase Memorization Analysis',
    subtitle: 'Structural diagnostics for label memorization',
    summary:
      'A reproducible study combining spectral geometry, CKA, influence functions, and ROME to analyze how label memorization changes network structure.',
    bullets: [
      'Demonstrated that label memorization is structurally localized and partially reversible through a four-phase diagnostic across 10 random seeds.',
      'Provided reproducible evidence for memorization-phase theory by combining representation, influence, geometry, and causal-editing analyses in one pipeline.',
    ],
    stack: ['Python', 'Spectral geometry', 'CKA', 'Influence functions', 'ROME'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/Four-Phase-Memorization-Analysis' }],
  },
  {
    id: 21,
    category: 'Machine learning research & interpretability',
    title: 'PINN-Mechanistic-Interpretability',
    subtitle: 'Causal probes for physics-informed models',
    summary:
      'A GPU-accelerated framework for inspecting and intervening on optimization failure modes in Physics-Informed Neural Networks.',
    bullets: [
      'Analyzed optimization failure modes by combining Sparse Autoencoders, causal counterfactuals, and monitoring probes over PINN activations.',
      'Improved PINN training reliability by exposing what learned physical constraints encode inside network representations.',
    ],
    stack: ['Python', 'PyTorch', 'Sparse Autoencoders', 'Causal counterfactuals'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/PINN-Mechanistic-Interpretability' }],
  },
  {
    id: 22,
    category: 'Computer vision & signal ML',
    title: 'GreenMagic — AI Air-Writing System',
    subtitle: 'Touchless handwriting and generative graphics',
    summary:
      'A real-time computer-vision pipeline that turns fingertip trajectories into OCR-recognized text and generative graphics with voice feedback.',
    bullets: [
      'Converted live fingertip motion into text and graphics through hand detection, gesture classification, trajectory reconstruction, OCR, and rendering.',
      'Enabled touchless human–computer interaction on commodity webcams with no specialized hardware.',
    ],
    stack: ['Python', 'MediaPipe', 'OpenCV', 'OCR', 'Generative graphics'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/GreenMagic' }],
  },
  {
    id: 23,
    category: 'Computer vision & signal ML',
    title: 'My_Coding_Journey — ML Learning Path',
    subtitle: 'A structured progression through applied ML',
    summary:
      'A hands-on learning atlas spanning PyTorch, TensorFlow, and scikit-learn from foundational models through transfer learning.',
    bullets: [
      'Built a structured curriculum of 40+ exercises covering CNNs, MLPs, regularization studies, regression, multi-class classification, and transfer learning.',
      'Documented progressive model-complexity milestones from Fashion-MNIST CNNs to transfer-learning food-vision models.',
    ],
    stack: ['PyTorch', 'TensorFlow', 'scikit-learn'],
    links: [{ label: 'GitHub learning path', url: 'https://github.com/shamiquekhan/My_Coding_Journey/tree/main/learning-paths/ml' }],
  },
  {
    id: 24,
    category: 'Finance & quantitative ML',
    title: 'nifty50-ai',
    subtitle: 'Forecasting, sentiment, and disciplined position sizing',
    summary:
      'An automated NIFTY50 pipeline combining LSTM price forecasts, FinBERT news sentiment, and Kelly-criterion sizing.',
    bullets: [
      'Improved NIFTY50 position-sizing discipline by combining LSTM price forecasting, FinBERT news sentiment, and Kelly-criterion sizing.',
      'Reduced manual data-maintenance overhead with an automated ingestion and retraining workflow.',
    ],
    stack: ['Python', 'LSTM', 'FinBERT', 'Kelly criterion', 'Automated data pipelines'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/nifty50-ai' }],
  },
  {
    id: 25,
    category: 'Finance & quantitative ML',
    title: 'Market Regime Detection System',
    subtitle: 'HMM/GMM classification for Indian equity markets',
    summary:
      'A regime-monitoring research system that classifies NSE/BSE market states and includes evaluation and deployment tooling.',
    bullets: [
      'Detected market regime shifts by evaluating Hidden Markov and Gaussian Mixture model outputs across Indian equity data.',
      'Produced the research precursor to production regime-shift monitoring for quantitative trading workflows.',
    ],
    stack: ['Python', 'HMM', 'GMM', 'Regime classification', 'Evaluation suite'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/Market-Regime-Detection-System' }],
  },
  {
    id: 26,
    category: 'Finance & quantitative ML',
    title: 'Sensex Heston-ML Calibration Tool',
    subtitle: 'Machine-learning calibration for stochastic volatility',
    summary:
      'An ML calibration tool that replaces iterative Heston optimization with learned parameter inference for SENSEX derivatives workflows.',
    bullets: [
      'Accelerated a known derivatives-pricing bottleneck by replacing iterative Heston calibration with ML-based parameter inference.',
      'Reduced calibration latency for SENSEX stochastic-volatility workflows while retaining the model’s pricing context.',
    ],
    stack: ['Python', 'Stochastic volatility', 'ML calibration'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/Sensex-Heston-ML' }],
  },
  {
    id: 27,
    category: 'Finance & quantitative ML',
    title: 'Financial Sentiment Radar',
    subtitle: 'Live market-news sentiment monitoring',
    summary:
      'A Streamlit dashboard that aggregates financial headlines and continuously scores sentiment for market monitoring.',
    bullets: [
      'Aggregated and continuously scored financial headlines into an active-use sentiment radar for market monitoring.',
      'Streamlined daily market research into a single live Streamlit view.',
    ],
    stack: ['Python', 'Streamlit', 'NLP sentiment scoring'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/Financial-Sentiment-Radar' }],
  },
  {
    id: 28,
    category: 'Finance & quantitative ML',
    title: 'flyrank-ml-internship',
    subtitle: 'Search ranking and content opportunity analysis',
    summary:
      'A search-performance analysis project pairing gradient-boosted ranking with semantic clustering of queries and pages.',
    bullets: [
      'Improved search page-prioritization accuracy by 15% by training a gradient-boosted ranking model on real-world search-performance data.',
      'Surfaced content-coverage gaps and site-wide keyword cannibalization through sentence-transformers embeddings and HDBSCAN clustering.',
    ],
    stack: ['Python', 'XGBoost', 'pandas', 'HDBSCAN', 'sentence-transformers'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/flyrank-ml-internship' }],
  },
  {
    id: 29,
    category: 'Finance & quantitative ML',
    title: 'Tesla vs GameStop Stock Analysis',
    subtitle: 'Comparative market-data analysis',
    summary:
      'A comparative data-science study combining scraped GameStop revenue data with Tesla historical prices.',
    bullets: [
      'Completed a reproducible comparative analysis by scraping GameStop revenue data from web sources and pulling Tesla historical prices via yfinance.',
    ],
    stack: ['Python', 'yfinance', 'Web scraping'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/Tesla-GameStop' }],
  },
  {
    id: 30,
    category: 'Data engineering & analytics',
    title: 'Falcon Landing Analytics',
    subtitle: 'End-to-end launch-outcome prediction',
    summary:
      'A complete pipeline from web-data ingestion through SQL storage, feature engineering, modeling, and a Streamlit dashboard for Falcon 9 landing outcomes.',
    bullets: [
      'Predicted Falcon 9 landing outcomes by joining web-data ingestion, SQL analytics, feature engineering, modeling, and dashboard delivery.',
      'Consolidated dispersed launch data into a single queryable analytical store for repeatable analysis.',
    ],
    stack: ['Python', 'SQL', 'Streamlit', 'End-to-end ML pipeline'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/Falcon-Landing-Analytics' }],
  },
  {
    id: 31,
    category: 'Data engineering & analytics',
    title: 'Weather Trend Forecasting',
    subtitle: 'Exploration and forecasting on global weather data',
    summary:
      'A complete data-science study covering data cleaning, exploratory analysis, time-series approaches, and reporting on the Global Weather Repository.',
    bullets: [
      'Delivered a reproducible weather-analysis study by combining cleaning, EDA, multiple time-series forecasting approaches, and reporting.',
    ],
    stack: ['Python', 'pandas', 'EDA', 'Time-series modeling'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/Weather-Trend-Forecasting' }],
  },
  {
    id: 32,
    category: 'Healthcare & life sciences',
    title: 'MediArchive — Unified Digital Health-ID Prototype',
    subtitle: 'A responsive PWA concept for connected health records',
    summary:
      'A React prototype connecting patients, doctors, and records with ABHA and HPR integration support for India’s Digital Health Mission.',
    bullets: [
      'Prototyped a unified digital health identity in a 50KB-gzipped production build with patient, doctor, and records workflows.',
      'Shipped a responsive PWA with 75+ interactive features, zero compilation errors, and Lighthouse scores above 95.',
    ],
    stack: ['React 18', 'React Router', 'Vercel', 'PWA'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/mediarchive' }],
  },
  {
    id: 33,
    category: 'Healthcare & life sciences',
    title: 'Patient Risk Assessment System',
    subtitle: 'Explainable clinical risk stratification',
    summary:
      'A Streamlit clinical-ML prototype that pairs patient risk prediction with explainability tooling.',
    bullets: [
      'Achieved approximately 0.90 AUC/ROC on patient risk stratification while keeping predictions explainable through clinical-insight tooling.',
    ],
    stack: ['Python', 'Streamlit', 'Clinical ML', 'Explainability'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/Patient_Risk_Assessment' }],
  },
  {
    id: 34,
    category: 'Healthcare & life sciences',
    title: 'TBI Assessment Tool',
    subtitle: 'Low-resource traumatic-brain-injury screening',
    summary:
      'A lightweight browser-based assessment tool designed for use without specialized hardware in low-resource settings.',
    bullets: [
      'Delivered a low-resource traumatic-brain-injury assessment workflow that runs without specialized hardware.',
    ],
    stack: ['HTML', 'JavaScript', 'Low-resource healthcare tooling'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/tbi-assesment' }],
  },
  {
    id: 35,
    category: 'Quantum, web & tooling',
    title: 'Quantum System Solver',
    subtitle: 'Interactive one-dimensional quantum mechanics',
    summary:
      'A Streamlit application for exploring particle-in-a-box wavefunctions and energy levels through numerical quantum mechanics.',
    bullets: [
      'Made one-dimensional quantum mechanics interactive by deploying a Streamlit app that simulates wavefunctions and energy levels.',
    ],
    stack: ['Python', 'Streamlit', 'Numerical quantum mechanics'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/Quantum_System_Solver' }],
  },
  {
    id: 36,
    category: 'Quantum, web & tooling',
    title: 'Library Management System',
    subtitle: 'Desktop CRUD with file-backed persistence',
    summary:
      'A Java desktop application for catalog management, user registration, and book issue/return workflows.',
    bullets: [
      'Computerized core library operations in a desktop application with persistent file-backed storage.',
    ],
    stack: ['Java', 'JDK 17+', 'Desktop CRUD', 'File-backed persistence'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/Library-Management-System-Project' }],
  },
  {
    id: 37,
    category: 'Portfolio & sites',
    title: 'Portfolio',
    subtitle: 'This portfolio and its case-study system',
    summary:
      'The React, Vite, TypeScript, Tailwind CSS, and Framer Motion portfolio that organizes the full public project inventory.',
    bullets: [
      'Built a typography-led portfolio with dedicated work, research, certificates, and contact routes for reviewer-friendly navigation.',
    ],
    stack: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/Portfolio' }],
  },
  {
    id: 38,
    category: 'Portfolio & sites',
    title: 'ShamiqueKhan — Profile Repository',
    subtitle: 'GitHub profile and public-facing developer identity',
    summary: 'A profile repository for presenting public work, learning progress, and technical focus areas.',
    bullets: [
      'Maintained a public profile surface that connects the portfolio, repositories, and current technical direction.',
    ],
    stack: ['GitHub', 'Markdown', 'Developer branding'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/ShamiqueKhan' }],
  },
  {
    id: 39,
    category: 'Portfolio & sites',
    title: 'Learning Atlas',
    subtitle: 'Curated free-course collection',
    summary: 'A curated collection of free learning resources organized for practical, self-directed technical study.',
    bullets: [
      'Turned a large set of free courses into a navigable learning collection for consistent skill-building across AI and software engineering.',
    ],
    stack: ['Curation', 'Markdown', 'Information architecture'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/Learning-Atlas' }],
  },
  {
    id: 40,
    category: 'Portfolio & sites',
    title: 'Swapy frontend',
    subtitle: 'JavaScript interface prototype',
    summary: 'A JavaScript frontend project demonstrating interface construction and browser-side interaction patterns.',
    bullets: [
      'Delivered a focused frontend implementation with reusable browser-side interface behavior.',
    ],
    stack: ['JavaScript', 'Frontend development'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/shamiquekhan/Swapy-frontend' }],
  },
]

export const allProjects = projects
export const featuredProjects = projects.filter((project) => project.featured)
export const archiveProjects = projects.filter((project) => !project.featured)
