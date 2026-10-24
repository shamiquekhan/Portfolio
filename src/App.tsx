import { Navigate, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollRail from './components/ScrollRail'
import Home from './pages/Home'
import Work from './pages/Work'
import Research from './pages/Research'
import Certificates from './pages/Certificates'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-skip focus:bg-ink focus:px-4 focus:py-3 focus:text-paper"
      >
        Skip to content
      </a>
      <ScrollRail />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/research" element={<Research />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/work" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
