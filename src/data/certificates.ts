export interface Certificate {
  title: string
  issuer: string
  category: 'Generative AI & LLMs' | 'Machine Learning & Data Science' | 'Cloud & Data Tools' | 'Professional Development'
}

export const certificates: Certificate[] = [
  { title: 'OCI Generative AI Professional', issuer: 'Oracle', category: 'Generative AI & LLMs' },
  { title: 'CS50 AI', issuer: 'Harvard University', category: 'Generative AI & LLMs' },
  { title: 'RAG with Embeddings & Vector Databases', issuer: 'Professional training', category: 'Generative AI & LLMs' },
  { title: 'IBM Data Science Professional Certificate', issuer: 'IBM', category: 'Machine Learning & Data Science' },
  { title: 'Machine Learning with Python', issuer: 'IBM', category: 'Machine Learning & Data Science' },
  { title: 'NLP in TensorFlow', issuer: 'DeepLearning.AI', category: 'Machine Learning & Data Science' },
  { title: 'Deep Learning Fundamentals', issuer: 'WorldQuant', category: 'Machine Learning & Data Science' },
  { title: 'Applied AI Lab: Computer Vision', issuer: 'WorldQuant', category: 'Machine Learning & Data Science' },
  { title: 'ML Algorithms', issuer: 'Amii', category: 'Machine Learning & Data Science' },
  { title: 'AI Infrastructure & Operations', issuer: 'NVIDIA', category: 'Cloud & Data Tools' },
  { title: 'Data-for-ML Skill Badge', issuer: 'Google Cloud', category: 'Cloud & Data Tools' },
  { title: 'AI Startup School Fellow', issuer: 'Google for Startups × Scaler', category: 'Professional Development' },
  { title: 'Forward Program', issuer: 'McKinsey & Company', category: 'Professional Development' },
]
