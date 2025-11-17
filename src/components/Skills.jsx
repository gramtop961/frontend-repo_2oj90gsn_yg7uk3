import { motion } from 'framer-motion'
import { PenTool, Ruler, Sparkle, Figma, Boxes, Gauge, Palette } from 'lucide-react'

const skills = [
  { icon: PenTool, label: 'Wireframing' },
  { icon: Palette, label: 'Visual Design' },
  { icon: Boxes, label: 'Design Systems' },
  { icon: Gauge, label: 'Prototyping' },
]

function Skills() {
  return (
    <section id="skills" className="relative py-20 px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-8">Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="w-11 h-11 grid place-items-center rounded-xl bg-gradient-to-br from-blue-500/80 to-indigo-500/80 text-white ring-1 ring-white/20 shadow-lg shadow-blue-500/20 mb-4">
                <s.icon className="w-5 h-5" />
              </div>
              <p className="text-white font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
