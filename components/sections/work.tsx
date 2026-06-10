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

  return (
    <section
      id="travaux"
      ref={ref}
      className="py-40 px-8"
      onMouseMove={(e) => setImgPos({ x: e.clientX, y: e.clientY })}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="label block mb-5">02 — Travaux sélectionnés</span>
            <h2
              className="text-[clamp(2.5rem,7vw,6rem)] font-black tracking-tighter text-[var(--ink)] leading-none"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              Projets
            </h2>
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="label hidden md:block"
          >
            {projects.length} projets
          </motion.span>
        </div>

        {/* Project list */}
        <div className="divide-y divide-[var(--line)]">
          {projects.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.09, duration: 0.6 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group flex items-center justify-between py-9 gap-6 cursor-pointer"
              style={{
                opacity: hovered !== null && hovered !== i ? 0.3 : 1,
                transition: 'opacity 0.25s ease',
              }}
              data-hover
            >
              <div className="flex items-center gap-8 flex-1 min-w-0">
                <span className="label shrink-0 w-8">{p.num}</span>
                <div className="min-w-0">
                  <h3
                    className="text-2xl md:text-[2.25rem] font-black tracking-tight text-[var(--ink)] leading-none truncate"
                    style={{
                      fontFamily: 'Archivo, sans-serif',
                      transform: hovered === i ? 'translateX(6px)' : 'translateX(0)',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-2.5 flex-wrap">
                    <span className="label">{p.role}</span>
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="label px-2 py-1 border border-[var(--line)] rounded-sm"
                        style={{ lineHeight: 1 }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-5 shrink-0">
                <span className="label hidden md:block">{p.year}</span>
                <div
                  className="w-10 h-10 rounded-full border border-[var(--line)] flex items-center justify-center transition-all duration-300"
                  style={{
                    backgroundColor: hovered === i ? 'var(--ink)' : 'transparent',
                    borderColor: hovered === i ? 'var(--ink)' : 'var(--line)',
                  }}
                >
                  <ArrowUpRight
                    className="w-4 h-4 transition-colors duration-300"
                    style={{ color: hovered === i ? 'var(--bg)' : 'var(--ink-muted)' }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating image preview */}
      <motion.div
        className="fixed pointer-events-none z-40 w-64 h-44 rounded-xl overflow-hidden shadow-2xl"
        animate={{
          x: imgPos.x + 24,
          y: imgPos.y - 88,
          opacity: hovered !== null ? 1 : 0,
          scale: hovered !== null ? 1 : 0.88,
        }}
        transition={{ type: 'spring', stiffness: 220, damping: 22 }}
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
