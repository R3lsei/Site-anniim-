'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { n: '50+', l: 'Projets livrés' },
  { n: '5',   l: "Années d'expérience" },
  { n: '12',  l: 'Récompenses' },
]

export function AboutNew() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="profil"
      ref={ref}
      style={{ padding: '120px 0', borderTop: '1px solid var(--line)' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4rem' }}
        >
          À propos
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>
          {/* Left — bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2
              style={{
                fontFamily: 'Archivo, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                color: 'var(--ink)',
                marginBottom: '2rem',
              }}
            >
              Designer<br />
              <span style={{ WebkitTextStroke: '1px var(--ink)', color: 'transparent' }}>& Builder.</span>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, maxWidth: '34rem' }}>
              5 ans à concevoir des interfaces digitales pour des startups et des entreprises globales.
              Je fusionne design systems rigoureux et code performant pour créer des produits qui durent.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, maxWidth: '34rem', marginTop: '1.25rem' }}>
              Basé à Paris. Ouvert aux collaborations freelance et aux projets ambitieux.
            </p>
          </motion.div>

          {/* Right — stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ paddingTop: '0.5rem' }}
          >
            <div style={{ display: 'grid', gap: '3rem' }}>
              {stats.map(({ n, l }, i) => (
                <motion.div
                  key={l}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  style={{ borderTop: '1px solid var(--line)', paddingTop: '1.5rem' }}
                >
                  <div
                    style={{
                      fontFamily: 'Archivo, sans-serif',
                      fontWeight: 900,
                      fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                      letterSpacing: '-0.04em',
                      lineHeight: 1,
                      color: 'var(--ink)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {n}
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{l}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
