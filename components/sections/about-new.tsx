'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stack = ['Next.js', 'TypeScript', 'React', 'Three.js', 'Framer Motion', 'Figma', 'Node.js', 'Tailwind CSS']

const stats = [
  { n: '50+', l: 'Projets livrés' },
  { n: '5',   l: "Années d'expérience" },
  { n: '98%', l: 'Clients satisfaits' },
  { n: '12',  l: 'Prix & reconnaissances' },
]

export function AboutNew() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="profil" ref={ref} className="py-40 px-8 bg-[var(--bg-alt)]">
      <div className="max-w-6xl mx-auto">
        <div className="divider mb-24" />

        <div className="grid md:grid-cols-2 gap-24 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="label block mb-8">03 — À propos</span>
            <h2
              className="text-[clamp(2.5rem,6vw,5.5rem)] font-black tracking-tighter text-[var(--ink)] leading-none mb-4"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              Designer
            </h2>
            <h2
              className="text-[clamp(2.5rem,6vw,5.5rem)] font-black tracking-tighter leading-none mb-12"
              style={{ fontFamily: 'Archivo, sans-serif', WebkitTextStroke: '1.5px var(--ink)', color: 'transparent' }}
            >
              & Builder.
            </h2>
            <p className="text-[var(--ink-mid)] text-[1.0625rem] leading-[1.8] mb-5 max-w-md">
              5 ans à concevoir des interfaces digitales pour des startups et des entreprises globales.
              Je fusionne design systems rigoureux et code performant pour créer des produits qui durent.
            </p>
            <p className="text-[var(--ink-mid)] text-[1.0625rem] leading-[1.8] max-w-md">
              Basé à Paris. Actuellement ouvert à des collaborations freelance et aux projets ambitieux.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <span className="label block mb-6">Stack technique</span>
            <div className="flex flex-wrap gap-2.5 mb-16">
              {stack.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, y: 8 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.05 }}
                  whileHover={{ backgroundColor: 'var(--ink)', color: 'var(--bg)', borderColor: 'var(--ink)' }}
                  className="px-4 py-2 border border-[var(--line)] label text-[var(--ink-mid)] transition-all duration-200 rounded-sm cursor-pointer"
                  data-hover
                >
                  {s}
                </motion.span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-10">
              {stats.map(({ n, l }, i) => (
                <motion.div
                  key={l}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.45 + i * 0.08 }}
                >
                  <div
                    className="text-[2.75rem] font-black tracking-tighter text-[var(--ink)] leading-none mb-1.5"
                    style={{ fontFamily: 'Archivo, sans-serif' }}
                  >
                    {n}
                  </div>
                  <span className="label">{l}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="divider mt-24" />
      </div>
    </section>
  )
}
