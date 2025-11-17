import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_20%_10%,rgba(37,99,235,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_80%_10%,rgba(99,102,241,0.12),transparent_60%)]" />
      <div className="relative">
        <Navbar />
        <Hero />
        <Work />
        <About />
        <Skills />
        <Contact />
        <footer className="px-6 md:px-10 lg:px-16 py-10 border-t border-white/10 text-blue-200/70">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Paris Quashie</p>
            <div className="text-sm">Designed with care • Built for the web</div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
