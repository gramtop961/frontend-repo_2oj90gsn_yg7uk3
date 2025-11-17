import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="relative py-20 px-6 md:px-10 lg:px-16">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-xs uppercase tracking-[0.2em] text-blue-200/70">About</h2>
          <h3 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
            I SOLVE PROBLEMS BY UNDERSTANDING PEOPLE.
          </h3>

          <div className="mt-6 space-y-4 text-blue-200/85 leading-relaxed">
            <p>
              For years, I did this without calling it UX. At Howdens, in financial services, across hospitality—every day was user research. Discovery conversations with trade customers to understand workflow pain points. Mapping processes to find where they break. Watching people struggle with confusing systems and building workarounds because the official process failed them.
            </p>
            <p>
              I learned to read hesitation. The moment someone stops trusting a product. The question they don't ask because they think they should already know. The gap between what people say they want and what they actually need. Most junior designers learn these skills in case studies. I learned them through thousands of real conversations, where getting it wrong meant losing the sale—or worse, sending someone down the wrong path.
            </p>
            <p>
              That's the foundation I bring to UX design. I see products through the eyes of people who have to use them under pressure, without training, with competing priorities. I understand business constraints because I've lived them. I know how to balance user needs with commercial reality because that was my job.
            </p>
            <p>
              Now I'm formalizing what I've always done naturally. Through Nielsen Norman Group certification and portfolio projects—LocalConnect, MedTrack, FlowSpace—I'm translating years of frontline insight into structured design practice. I'm building the technical skills to match the strategic thinking I already have.
            </p>
            <p>
              What I offer isn't typical for a junior designer: genuine user empathy from the field, business fluency from the trenches, and the thick skin that comes from sales. I ask hard questions, handle feedback without ego, and understand that great design solves the right problems—not just solves problems beautifully.
            </p>
            <p>
              I'm looking for junior UX roles in London and Brighton where teams value someone who thinks like a designer and communicates like a human. Where commercial awareness isn't a nice-to-have, it's essential. Where someone who understands both sides of the table can make something genuinely worth using.
            </p>
          </div>

          <div className="mt-8">
            <a href="mailto:parisajq@gmail.com" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors">
              Reach out: parisajq@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
          <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.25),transparent_60%)] ring-1 ring-white/10" />
        </motion.div>
      </div>
    </section>
  )
}

export default About
