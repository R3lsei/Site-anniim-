'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function HeroNew() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-end pb-20 px-8 pt-32 overflow-hidden">
      {/* Top label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="absolute top-28 left-8 flex items-center gap-4"
      >
        <span className="w-2 h-2 rounded-full bg-[var(--green)] animate-pulse" />
        <span className="tag">Portfolio 2025 — Disponible</span>
      </motion.div>

      {/* Year, top right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute top-28 right-8 tag"
      >
        Paris, FR
      </motion.div>

      {/* Main headline */}
      <motion.div style={{ y, opacity }}>
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-[clamp(4rem,13vw,14rem)] font-black leading-none tracking-tighter text-[var(--ink)]"
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            Alexandre
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-[clamp(4rem,13vw,14rem)] font-black leading-none tracking-tighter"
            style={{ fontFamily: 'Archivo, sans-serif', WebkitTextStroke: '2px var(--ink)', color: 'transparent' }}
          >
            Dupont.
          </motion.h1>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mt-12 gap-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-[var(--ink-muted)] max-w-sm text-lg leading-relaxed"
          >
            Développeur & designer d'interfaces numériques.
            Je crée des expériences qui marquent les esprits.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col items-start md:items-end gap-2"
          >
            <span className="tag">Développeur Full-Stack</span>
            <span className="tag">UX / Motion Design</span>
            <span className="tag">5 ans d'expérience</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="tag" style={{ fontSize: '0.6rem' }}>Défiler</span>
        <motion.div
          animate={{ height: [16, 32, 16] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-px bg-[var(--ink-muted)]"
          style={{ height: 24 }}
        />
      </motion.div>
    </section>
  )
}
