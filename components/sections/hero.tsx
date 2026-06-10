'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowDown, GitBranch, Link, X } from 'lucide-react'
import { MagneticButton } from '@/components/ui/magnetic-button'

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const words = ['Développeur', 'Designer', 'Créateur']

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #22C55E, transparent)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #A855F7, transparent)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3B82F6, transparent)' }} />

      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-green-400 font-medium">Disponible pour de nouveaux projets</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 leading-none tracking-tight"
          style={{ fontFamily: 'Archivo, sans-serif' }}
        >
          <span className="gradient-text">Alexandre</span>
          <br />
          <span className="text-white">Dupont</span>
        </motion.h1>

        {/* Animated role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px w-12 bg-green-500/50" />
          <div className="flex gap-2 flex-wrap justify-center">
            {words.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.15 }}
                className="text-lg md:text-2xl text-slate-300 font-medium"
              >
                {word}{i < words.length - 1 && <span className="text-green-500 mx-2">/</span>}
              </motion.span>
            ))}
          </div>
          <div className="h-px w-12 bg-green-500/50" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-slate-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Je crée des expériences numériques qui mêlent design audacieux et code élégant.
          Passionné par les interfaces animées et les technologies modernes.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <MagneticButton
            className="cursor-pointer group relative px-8 py-4 rounded-full font-semibold text-black overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #22C55E, #16A34A)' }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Voir mes projets
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
          </MagneticButton>

          <MagneticButton className="cursor-pointer glass glass-hover px-8 py-4 rounded-full font-semibold text-white border border-white/10">
            Me contacter
          </MagneticButton>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="flex justify-center gap-6"
        >
          {[
            { icon: GitBranch, href: '#', label: 'GitHub' },
            { icon: Link, href: '#', label: 'LinkedIn' },
            { icon: X, href: '#', label: 'Twitter' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              aria-label={label}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="glass p-3 rounded-full text-slate-400 hover:text-green-400 transition-colors cursor-pointer"
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <motion.div
            animate={{ height: ['20%', '60%', '20%'] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 bg-green-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
