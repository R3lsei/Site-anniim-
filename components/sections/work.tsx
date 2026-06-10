'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const projects = [
  {
    num: '01',
    title: 'NeoBank Dashboard',
    role: 'Design & Développement',
    year: '2025',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    num: '02',
    title: 'Aurora UI System',
    role: 'Design Système',
    year: '2024',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
  },
  {
    num: '03',
    title: 'Particle Engine 3D',
    role: 'Développement WebGL',
    year: '2024',
    img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
  },
  {
    num: '04',
    title: 'AI Content Studio',
    role: 'Produit SaaS',
    year: '2023',
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
      style={{ padding: '120px 0' }}
      onMouseMove={(e) => setImgPos({ x: e.clientX, y: e.clientY })}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4rem' }}
        >
          Travaux sélectionnés
        </motion.p>

        {/* List */}
        <div>
          {projects.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              data-hover
              style={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                padding: '1.75rem 0',
                borderBottom: '1px solid var(--line)',
                opacity: hovered !== null && hovered !== i ? 0.25 : 1,
                transition: 'opacity 0.2s ease',
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.05em', minWidth: '2rem' }}>{p.num}</span>
                <h3
                  style={{
                    fontFamily: 'Archivo, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(1.4rem, 3vw, 2.5rem)',
                    letterSpacing: '-0.025em',
                    color: 'var(--ink)',
                    lineHeight: 1,
                    transform: hovered === i ? 'translateX(6px)' : 'translateX(0)',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  {p.title}
                </h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '3rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--muted)', display: 'none' }} className="md:inline">{p.role}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.04em' }}>{p.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hover image */}
      <motion.div
        style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 40, width: 260, height: 170, borderRadius: 6, overflow: 'hidden' }}
        animate={{
          x: imgPos.x + 20,
          y: imgPos.y - 85,
          opacity: hovered !== null ? 1 : 0,
          scale: hovered !== null ? 1 : 0.9,
        }}
        transition={{ type: 'spring', stiffness: 240, damping: 24 }}
      >
        {hovered !== null && (
          <img
            src={projects[hovered].img}
            alt={projects[hovered].title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        )}
      </motion.div>
    </section>
  )
}
