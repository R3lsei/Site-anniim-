'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    num: '01',
    title: 'NeoBank Dashboard',
    role: 'Design & Développement',
    year: '2025',
    tags: ['Next.js', 'Framer Motion'],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    num: '02',
    title: 'Aurora UI System',
    role: 'Design Système',
    year: '2024',
    tags: ['React', 'Storybook'],
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
  },
  {
    num: '03',
    title: 'Particle Engine 3D',
    role: 'Développement WebGL',
    year: '2024',
    tags: ['Three.js', 'GLSL'],
    img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
  },
  {
    num: '04',
    title: 'AI Content Studio',
    role: 'Produit SaaS',
    year: '2023',
    tags: ['Next.js', 'OpenAI'],
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
  },
]

export function Work() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [hovered, setHovered] = useState<number | null>(null)
  const [imgPos, setImgPos] = useState({ x: 0, y: 0 })

  const onMouseMove = (e: React.MouseEvent) => {
    setImgPos({ x: e.clientX, y: e.clientY })
  }

  return (
    <section id="travaux" ref={ref} className="py-32 px-8" onMouseMove={onMouseMove}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="tag block mb-4">02 — Travaux sélectionnés</span>
            <h2
              className="text-[clamp(3rem,8vw,7rem)] font-black tracking-tighter text-[var(--ink)] leading-none"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              Projets
            </h2>
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="tag hidden md:block"
          >
            {projects.length} projets
          </motion.span>
        </div>

        {/* List */}
        <div className="divide-y divide-[var(--line)]">
          {projects.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group flex items-center justify-between py-8 gap-6 transition-all duration-300"
              style={{ opacity: hovered !== null && hovered !== i ? 0.35 : 1 }}
              data-hover
            >
              <div className="flex items-center gap-8 flex-1 min-w-0">
                <span className="tag shrink-0">{p.num}</span>
                <div className="min-w-0">
                  <h3
                    className="text-2xl md:text-4xl font-black tracking-tight text-[var(--ink)] leading-none truncate group-hover:translate-x-2 transition-transform duration-300"
                    style={{ fontFamily: 'Archivo, sans-serif' }}
                  >
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="tag">{p.role}</span>
                    {p.tags.map(t => (
                      <span key={t} className="tag px-2 py-0.5 border border-[var(--line)]">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <span className="tag hidden md:block">{p.year}</span>
                <motion.div
                  whileHover={{ rotate: 45 }}
                  className="w-10 h-10 rounded-full border border-[var(--line)] flex items-center justify-center group-hover:bg-[var(--ink)] group-hover:border-[var(--ink)] transition-all duration-300"
                >
                  <ArrowUpRight className="w-4 h-4 group-hover:text-[var(--bg)] transition-colors" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hover image preview */}
      <motion.div
        className="fixed pointer-events-none z-40 w-72 h-48 rounded-2xl overflow-hidden shadow-2xl"
        animate={{
          x: imgPos.x + 20,
          y: imgPos.y - 96,
          opacity: hovered !== null ? 1 : 0,
          scale: hovered !== null ? 1 : 0.8,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        style={{ top: 0, left: 0 }}
      >
        {hovered !== null && (
          <img
            src={projects[hovered].img}
            alt={projects[hovered].title}
            className="w-full h-full object-cover"
          />
        )}
      </motion.div>
    </section>
  )
}
