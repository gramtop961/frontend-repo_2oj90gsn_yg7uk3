import { useState } from 'react'
import { motion } from 'framer-motion'

function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    // Placeholder: in a real setup, post to your backend or use Formspree
    setTimeout(() => setStatus('Thanks! I will get back to you soon.'), 800)
  }

  return (
    <section id="contact" className="relative py-20 px-6 md:px-10 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Let’s build something</h2>
          <p className="mt-2 text-blue-200/85">Have a project, internship, or collaboration in mind? Say hello.</p>
        </div>

        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
          <input required name="name" placeholder="Your name" className="rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
          <input required name="email" type="email" placeholder="Email" className="rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
          <input name="company" placeholder="Company / Organization" className="md:col-span-2 rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
          <textarea required name="message" placeholder="Tell me about your idea..." rows="5" className="md:col-span-2 rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
          <div className="md:col-span-2 flex items-center gap-3">
            <button type="submit" className="inline-flex justify-center rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-5 py-3 text-white font-medium shadow-lg shadow-blue-500/20 ring-1 ring-white/10 hover:shadow-blue-500/30 transition">Send message</button>
            <span className="text-sm text-blue-200/80">{status}</span>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
