'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

const socials = [
  { label: 'GitHub',   href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Dribbble', href: '#' },
]

export function ContactNew() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} className="py-40 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="divider mb-24" />

        <motion.span
          className="label block mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          04 — Contact
        </motion.span>

        {/* Big email CTA */}
        <motion.a
          href="mailto:alexandre@dupont.fr"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="group flex items-center justify-between border-b border-[var(--line)] pb-10 mb-6 gap-6"
          data-hover
        >
          <h2
            className="text-[clamp(1.75rem,6vw,5.5rem)] font-black tracking-tighter text-[var(--ink)] leading-none"
            style={{
              fontFamily: 'Archivo, sans-serif',
              transition: 'transform 0.3s ease',
            }}
          >
            alexandre@dupont.fr
          </h2>
          <div
            className="w-14 h-14 rounded-full border border-[var(--line)] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[var(--ink)] group-hover:border-[var(--ink)]"
          >
            <ArrowUpRight className="w-5 h-5 text-[var(--ink-muted)] group-hover:text-[var(--bg)] transition-colors duration-300" />
          </div>
        </motion.a>

        <motion.p
          className="text-[var(--ink-muted)] text-[1.0625rem] leading-relaxed mb-20 max-w-md"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          Vous avez un projet en tête ? Discutons-en — je suis toujours partant pour des défis créatifs.
        </motion.p>

        {/* Footer row */}
        <div className="flex items-center justify-between flex-wrap gap-6">
          <div className="flex items-center gap-8">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.08 }}
                className="label hover:text-[var(--ink)] transition-colors duration-200"
                data-hover
              >
                {s.label}
              </motion.a>
            ))}
          </div>
          <motion.span
            className="label"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            © 2025 — Alexandre Dupont
          </motion.span>
        </div>

        <div className="divider mt-16" />
      </div>
    </section>
  )
}
