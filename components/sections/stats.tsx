'use client'

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useRef, useEffect } from 'react'

const stats = [
  { value: 50, suffix: '+', label: 'Projets livrés' },
  { value: 5, suffix: ' ans', label: 'D\'expérience' },
  { value: 98, suffix: '%', label: 'Clients satisfaits' },
  { value: 12, suffix: 'k+', label: 'Lignes de code' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const count = useMotionValue(0)
  const rounded = useTransform(count, v => Math.round(v))
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2, ease: 'easeOut' })
    }
  }, [isInView, count, value])

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  )
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="glass p-2 rounded-3xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="bg-black/60 p-8 text-center hover:bg-white/5 transition-colors"
              >
                <div className="text-4xl md:text-5xl font-black mb-2 gradient-text" style={{ fontFamily: 'Archivo, sans-serif' }}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
