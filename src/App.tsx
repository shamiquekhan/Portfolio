import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollRail from './components/ScrollRail'
import Home from './pages/Home'
import Work from './pages/Work'
import Research from './pages/Research'
import QuantML from './pages/QuantML'
import ScandiumLabs from './pages/ScandiumLabs'
import Certificates from './pages/Certificates'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <ScrollRail />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/research" element={<Research />} />
          <Route path="/startups/quantml" element={<QuantML />} />
          <Route path="/startups/scandium-labs" element={<ScandiumLabs />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
