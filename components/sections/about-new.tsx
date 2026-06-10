'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stack = ['Next.js', 'TypeScript', 'React', 'Three.js', 'Framer Motion', 'Figma', 'Node.js', 'Tailwind CSS']

export function AboutNew() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="profil" ref={ref} className="py-32 px-8 bg-[var(--bg-alt)]">
      <div className="max-w-6xl mx-auto">
        <div className="divider mb-20" />

        <div className="grid md:grid-cols-2 gap-24 items-start">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="tag block mb-8">03 — À propos</span>
              <h2
                className="text-[clamp(3rem,7vw,6rem)] font-black tracking-tighter text-[var(--ink)] leading-none mb-12"
                style={{ fontFamily: 'Archivo, sans-serif' }}
              >
                Designer
                <br />
                <span style={{ WebkitTextStroke: '2px var(--ink)', color: 'transparent' }}>& Builder</span>
              </h2>
              <p className="text-[var(--ink-muted)] text-lg leading-relaxed mb-6 max-w-md">
                5 ans à concevoir des interfaces digitales pour des startups et des entreprises globales.
                Je fusionne design systems rigoureux et code performant pour créer des produits qui durent.
              </p>
              <p className="text-[var(--ink-muted)] text-lg leading-relaxed max-w-md">
                Basé à Paris. Actuellement ouvert à des collaborations freelance et aux projets ambitieux.
              </p>
            </motion.div>
          </div>

          {/* Right */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="tag block mb-8">Stack technique</span>
              <div className="flex flex-wrap gap-3 mb-16">
                {stack.map((s, i) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.06 }}
                    whileHover={{ y: -2, backgroundColor: 'var(--ink)', color: 'var(--bg)' }}
                    className="px-4 py-2 border border-[var(--line)] text-sm font-medium text-[var(--ink)] transition-all duration-200 rounded-sm"
                    data-hover
                  >
                    {s}
                  </motion.span>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8">
                {[
                  { n: '50+', l: 'Projets livrés' },
                  { n: '5', l: 'Années d\'expérience' },
                  { n: '98%', l: 'Clients satisfaits' },
                  { n: '12', l: 'Prix & reconnaissances' },
                ].map(({ n, l }, i) => (
                  <motion.div
                    key={l}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <div
                      className="text-4xl font-black tracking-tighter text-[var(--ink)] mb-1"
                      style={{ fontFamily: 'Archivo, sans-serif' }}
                    >
                      {n}
                    </div>
                    <div className="tag">{l}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="divider mt-20" />
      </div>
    </section>
  )
}
