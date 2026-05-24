import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shamique Khan | AI & ML Engineer",
  description:
    "CS (AI & ML) undergraduate specializing in production-grade AI automation systems — webhook-driven agents, LLM pipelines, NLP-powered decision engines, and intelligent routing.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "LLM",
    "Python",
    "FastAPI",
    "Claude API",
    "RAG",
    "NLP",
  ],
  authors: [{ name: "Shamique Khan" }],
  openGraph: {
    title: "Shamique Khan | AI & ML Engineer",
    description:
      "Building production-grade AI automation systems and intelligent agents.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Instrument+Serif:ital@1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
