import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Mobile Banking Redesign',
    tags: ['UX Research', 'Wireframes', 'UI Design'],
    desc: 'A frictionless flow that simplifies payments and budgeting for Gen Z users.',
  },
  {
    title: 'E-learning Dashboard',
    tags: ['Design System', 'Prototyping'],
    desc: 'A vibrant dashboard focusing on progress, rewards and motivation loops.',
  },
  {
    title: 'Food Delivery Onboarding',
    tags: ['User Flows', 'Animation'],
    desc: 'Playful onboarding with subtle motion that builds trust and delight.',
  },
]

function Work() {
  return (
    <section id="work" className="relative py-20 px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Selected Work</h2>
          <p className="mt-2 text-blue-200/80">A snapshot of projects that reflect my process and personality.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-5 hover:bg-white/10 transition overflow-hidden"
            >
              <div className="h-40 rounded-xl bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.25),transparent_60%)] ring-1 ring-white/10 mb-4" />
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-blue-200/80">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs text-blue-200/80 bg-white/5 border border-white/10 px-2 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
