import { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-lg ring-1 ring-white/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="leading-tight">
              <p className="text-white font-semibold tracking-tight">Paris Quashie</p>
              <p className="text-xs text-blue-200/80">UX/UI Designer</p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-blue-100/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors">
              Let’s talk
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg text-white/90 hover:bg-white/10">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 rounded-xl border border-white/10 bg-slate-900/70 p-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg text-blue-100/90 hover:bg-white/10">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg text-white bg-white/10 hover:bg-white/20 text-center">
                Let’s talk
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
