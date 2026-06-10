'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function HeroNew() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-end pb-24 px-8 pt-36 overflow-hidden">
      {/* Status */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="absolute top-24 left-8 flex items-center gap-3"
      >
        <span
          className="w-1.5 h-1.5 rounded-full bg-[var(--green)]"
          style={{ boxShadow: '0 0 0 3px rgba(22,163,74,0.18)' }}
        />
        <span className="label">Disponible — 2025</span>
      </motion.div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
        className="label absolute top-24 right-8 hidden md:block"
      >
        Paris, FR
      </motion.span>

      {/* Headline */}
      <motion.div style={{ y, opacity }} className="relative z-10">
        <div className="overflow-hidden mb-1">
          <motion.h1
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-[clamp(3.5rem,11vw,11rem)] font-black leading-none tracking-tighter text-[var(--ink)]"
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            Alexandre
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-20">
          <motion.h1
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
            className="text-[clamp(3.5rem,11vw,11rem)] font-black leading-none tracking-tighter"
            style={{ fontFamily: 'Archivo, sans-serif', WebkitTextStroke: '1.5px var(--ink)', color: 'transparent' }}
          >
            Dupont.
          </motion.h1>
        </div>

        <div className="divider mb-10" />

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-[var(--ink-mid)] text-[1.0625rem] leading-[1.75] max-w-sm"
          >
            Développeur & designer d'interfaces numériques.
            Je crée des expériences qui marquent les esprits.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.8 }}
            className="flex flex-col items-start md:items-end gap-2"
          >
            <span className="label">Développeur Full-Stack</span>
            <span className="label">UX / Motion Design</span>
            <span className="label">5 ans d'expérience</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="label" style={{ fontSize: '0.6rem' }}>Défiler</span>
        <motion.div
          animate={{ scaleY: [0.45, 1, 0.45] }}
          transition={{ repeat: Infinity, duration: 1.9, ease: 'easeInOut' }}
          className="w-px h-8 bg-[var(--ink-muted)] origin-top"
        />
      </motion.div>
    </section>
  )
}
