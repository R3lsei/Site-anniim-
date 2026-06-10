'use client'

import { motion } from 'framer-motion'

const words = [
  'React', '—', 'Next.js', '—', 'TypeScript', '—', 'Motion Design', '—',
  'Three.js', '—', 'Tailwind', '—', 'Node.js', '—', 'UI / UX', '—',
  'React', '—', 'Next.js', '—', 'TypeScript', '—', 'Motion Design', '—',
  'Three.js', '—', 'Tailwind', '—', 'Node.js', '—', 'UI / UX', '—',
]

export function Marquee() {
  return (
    <section className="py-10 border-y border-[var(--line)] overflow-hidden bg-[var(--ink)]">
      <div className="marquee-inner">
        {words.map((w, i) => (
          <span
            key={i}
            className="px-6 text-[var(--bg)] font-black tracking-tight whitespace-nowrap"
            style={{ fontFamily: 'Archivo, sans-serif', fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}
          >
            {w}
          </span>
        ))}
      </div>
    </section>
  )
}
