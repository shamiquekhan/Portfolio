export interface ExperienceEntry {
  role: string
  org: string
  dates: string
  description: string
  href?: string
}

export const experienceData: ExperienceEntry[] = [
  {
    role: 'AI Engineer Intern',
    org: 'Suproc',
    dates: 'Jul 2026 – Present · 1 mo',
    description: 'Building and shipping AI systems as part of an engineering team, working with real-world constraints and production-grade ML infrastructure. India · Remote',
  },
  {
    role: 'Machine Learning Engineering Intern',
    org: 'FlyRank AI',
    dates: 'Jul 2026 – Present',
    description: 'Remote ML engineering internship as part of FlyRank\'s structured internship program.',
    href: 'https://flyrank.com',
  },
  {
    role: 'Co-Founder & AI/ML Engineer',
    org: 'Quant ML',
    dates: 'Jan 2026 – Present',
    description: 'Institutional AI trading infrastructure — 10-model AI Council with physics-informed neural networks, ≥99% consensus threshold, targeting $1–5B AUM funds.',
    href: 'https://quantml.tech',
  },
  {
    role: 'Research Associate (Internship)',
    org: 'PredictRAM (SEBI Reg. INH000022400)',
    dates: 'Jan 2026 – Apr 2026',
    description: 'Quantitative equity research and financial modeling; work reviewed by SEBI-registered analysts.',
  },
  {
    role: 'AI Startup School Fellow',
    org: 'Google for Startups × Scaler',
    dates: 'Nov 2025 – Dec 2025',
    description: '2-week intensive bootcamp on AI-first prototyping, Google AI Studio, and generative media tooling; delivered a validated prototype at the Build the Future showcase.',
  },
  {
    role: 'McKinsey Forward Program Trainee',
    org: 'McKinsey & Company',
    dates: 'Sep 2025 – Dec 2025',
    description: 'Self-paced digital leadership programme — problem-solving, communication, adaptability.',
  },
]
