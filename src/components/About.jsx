import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="relative py-20 px-6 md:px-10 lg:px-16">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">About</h2>
          <p className="mt-4 text-blue-200/85 leading-relaxed">
            I’m Paris Quashie — a junior UX/UI designer passionate about blending usability with personality. I enjoy shaping end-to-end journeys: exploring user needs, mapping flows, and translating them into clean, energetic interfaces.
          </p>
          <p className="mt-4 text-blue-200/85 leading-relaxed">
            Curious by nature, I prototype fast, test early, and iterate often. I love systems, micro-interactions, and visual polish that feels effortless.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
          <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.25),transparent_60%)] ring-1 ring-white/10" />
        </motion.div>
      </div>
    </section>
  )
}

export default About
