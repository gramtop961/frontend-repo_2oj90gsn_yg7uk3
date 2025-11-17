import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] grid lg:grid-cols-2 items-center pt-24">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/50 to-slate-900"></div>
      </div>

      <div className="relative order-2 lg:order-1 px-6 md:px-10 lg:px-16 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-200/80 mb-6">
            <span className="inline-block h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            Available for freelance & internships
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Paris Quashie
          </h1>
          <p className="mt-4 text-lg md:text-xl text-blue-200/90 max-w-xl">
            Junior UX/UI designer crafting playful, modern experiences that feel intuitive and delightful. I blend research, wireframes and motion to bring ideas to life.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#work" className="inline-flex justify-center rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-5 py-3 text-white font-medium shadow-lg shadow-blue-500/20 ring-1 ring-white/10 hover:shadow-blue-500/30 transition">View selected work</a>
            <a href="#contact" className="inline-flex justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/90 font-medium hover:bg-white/10 transition">Get in touch</a>
          </div>
        </motion.div>
      </div>

      <div className="relative order-1 lg:order-2 h-[50vh] sm:h-[60vh] lg:h-[90vh]">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
    </section>
  )
}

export default Hero
