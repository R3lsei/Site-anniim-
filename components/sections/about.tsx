'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Palette, Zap, Globe } from 'lucide-react'

const skills = [
  { name: 'React / Next.js', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'UI/UX Design', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Framer Motion', level: 88 },
  { name: 'Tailwind CSS', level: 95 },
]

const traits = [
  { icon: Code2, title: 'Code Propre', desc: 'Architecture soignée, maintenable et scalable.' },
  { icon: Palette, title: 'Design Thinking', desc: 'L\'expérience utilisateur au cœur de chaque décision.' },
  { icon: Zap, title: 'Performance', desc: 'Sites ultra-rapides optimisés pour les Core Web Vitals.' },
  { icon: Globe, title: 'Responsive', desc: 'Parfait sur mobile, tablette et desktop.' },
]

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-green-400 font-mono text-sm tracking-widest uppercase mb-4 block">// À propos</span>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6" style={{ fontFamily: 'Archivo, sans-serif' }}>
            Qui suis-<span className="gradient-text">je ?</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Développeur full-stack avec 5 ans d'expérience, je transforme des idées complexes
            en interfaces élégantes et performantes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Compétences techniques</h3>
            <div className="space-y-5">
              {skills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <span className="text-green-400 font-mono text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.4 + i * 0.1, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(90deg, #22C55E, #3B82F6)' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Traits */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {traits.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="glass glass-hover p-6 cursor-default"
              >
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-green-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">{title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
