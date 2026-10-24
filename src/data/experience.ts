export interface ExperienceEntry {
  role: string
  org: string
  dates: string
  description: string
  href?: string
}

export const experienceData: ExperienceEntry[] = [
  {
    role: 'Junior Machine Learning Engineer',
    org: 'Omdena',
    dates: 'Oct 2026 – Present · New York, NY (Remote)',
    description:
      'Prepare large-scale geospatial training datasets for GeoData Scout in partnership with the Humanitarian OpenStreetMap Team, auditing 10+ open-data sources for geospatial foundation models used in humanitarian mapping and disaster response. Designed GeoBench to evaluate spatial foundation models across data quality, coverage, and evaluation reliability.',
  },
  {
    role: 'Lead Engineer',
    org: 'ShopAgent.ai — Product Manager Accelerator',
    dates: 'Oct 2026 – Present · Boston, MA (Remote)',
    description:
      'Own system architecture and a prioritized roadmap across three workstreams, delivering five-week sprint milestones on schedule. Defined staging-to-production CI/CD and Git/GitHub standards while unblocking 100% of intern-reported technical blockers through weekly mentoring.',
  },
  {
    role: 'AI Engineer Intern',
    org: 'Product Manager Accelerator',
    dates: 'Aug 2026 – Oct 2026 · North America (Remote)',
    description:
      'Cut manual job-application time by 80% and scaled outreach 3× by architecting an autonomous LangGraph and GPT-4o platform for JD parsing, fit scoring, and approval-gated ATS submission. Achieved zero fabricated application content by enforcing DeBERTa-v3 NLI claim verification and confidence-scored human escalation.',
  },
  {
    role: 'AI Engineer Intern',
    org: 'Suproc',
    dates: 'Jul 2026 – Oct 2026 · India (Remote)',
    description:
      'Shipped 5+ production multi-agent workflows using LangGraph, Gemini, Groq, and Ollama for financial operations, supplier comparison, and business automation, gating 100% of LLM outputs behind deterministic validation and human approval. Reduced lead-analysis turnaround to under 15 seconds with OSINT and ChromaDB risk-scoring systems plus RAG backends in FastAPI, Streamlit, and Next.js.',
  },
  {
    role: 'Machine Learning Engineering Intern',
    org: 'FlyRank AI',
    dates: 'Jul 2026 – Sep 2026 · Remote',
    description:
      'Improved search page-prioritization accuracy by 15% by training an XGBoost ranking model on search-performance data with pandas feature engineering. Clustered 100% of tracked queries and pages with sentence-transformers and HDBSCAN to expose content gaps and site-wide cannibalization.',
    href: 'https://flyrank.com',
  },
  {
    role: 'Research Associate',
    org: 'PredictRAM (SEBI-Registered)',
    dates: 'Jan 2026 – Apr 2026 · Remote',
    description:
      'Reduced market-data availability time by 20% by building Python ETL pipelines over live high-frequency feeds, cutting analyst brief turnaround accordingly.',
  },
  {
    role: 'AI Startup School Fellow',
    org: 'Google for Startups × Scaler',
    dates: 'Nov 2025 – Dec 2025',
    description:
      'Completed an intensive program on AI-first prototyping, Google AI Studio, and generative media tooling, delivering a validated prototype at the Build the Future showcase.',
  },
  {
    role: 'McKinsey Forward Program Trainee',
    org: 'McKinsey & Company',
    dates: 'Sep 2025 – Dec 2025',
    description:
      'Completed a self-paced digital leadership program focused on structured problem-solving, communication, and adaptability.',
  },
]
