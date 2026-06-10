'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

const links = [
  { label: 'GitHub', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Dribbble', href: '#' },
]

export function ContactNew() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} className="py-32 px-8 bg-[var(--bg-alt)]">
      <div className="max-w-6xl mx-auto">
        <div className="divider mb-20" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="tag block mb-8">04 — Contact</span>
        </motion.div>

        <motion.a
          href="mailto:alexandre@dupont.fr"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          whileHover={{ x: 8 }}
          className="group flex items-end justify-between border-b border-[var(--line)] pb-8 mb-16 transition-all duration-300"
          data-hover
        >
          <h2
            className="text-[clamp(2.5rem,8vw,7rem)] font-black tracking-tighter text-[var(--ink)] leading-none"
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            alexandre@dupont.fr
          </h2>
          <motion.div
            whileHover={{ rotate: 45 }}
            className="w-16 h-16 rounded-full border border-[var(--line)] flex items-center justify-center shrink-0 ml-8 group-hover:bg-[var(--ink)] group-hover:border-[var(--ink)] transition-all duration-300"
          >
            <ArrowUpRight className="w-6 h-6 group-hover:text-[var(--bg)] transition-colors" />
          </motion.div>
        </motion.a>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -2 }}
                className="tag hover:text-[var(--ink)] transition-colors"
                data-hover
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="tag"
          >
            © 2025
          </motion.span>
        </div>

        <div className="divider mt-20" />
      </div>
    </section>
  )
}
