'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function HeroNew() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-between px-8 pt-32 pb-12 overflow-hidden">
      {/* Availability */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="flex items-center gap-2.5 self-start"
        style={{ marginTop: '2rem' }}
      >
        <span
          style={{
            display: 'inline-block',
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: '#16A34A',
          }}
        />
        <span style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 400 }}>
          Disponible
        </span>
      </motion.div>

      {/* Headline */}
      <motion.div style={{ y, opacity }}>
        <div style={{ overflow: 'hidden', marginBottom: 2 }}>
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            style={{
              fontFamily: 'Archivo, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(3.5rem, 10vw, 10rem)',
              lineHeight: 1,
              letterSpacing: '-0.04em',
              color: 'var(--ink)',
            }}
          >
            Hugo
          </motion.h1>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '3.5rem' }}>
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
            style={{
              fontFamily: 'Archivo, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(3.5rem, 10vw, 10rem)',
              lineHeight: 1,
              letterSpacing: '-0.04em',
              color: 'transparent',
              WebkitTextStroke: '1px var(--ink)',
            }}
          >
            Seiler.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          style={{
            fontSize: '1rem',
            color: 'var(--muted)',
            maxWidth: '28rem',
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          Designer & développeur d'interfaces numériques.
          Je construis des produits qui durent.
        </motion.p>
      </motion.div>

      {/* Bottom row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}
      >
        <span style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          Paris, France
        </span>
        <span style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          2025
        </span>
      </motion.div>
    </section>
  )
}
