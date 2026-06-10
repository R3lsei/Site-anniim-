'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, GitBranch, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'NeoBank Dashboard',
    desc: 'Dashboard financier avec visualisations temps réel, dark mode et animations fluides.',
    tags: ['Next.js', 'TypeScript', 'Framer Motion', 'Recharts'],
    color: '#22C55E',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    featured: true,
  },
  {
    title: 'Aurora UI Kit',
    desc: 'Bibliothèque de composants glassmorphism avec 50+ éléments et thèmes personnalisables.',
    tags: ['React', 'Tailwind CSS', 'Storybook'],
    color: '#A855F7',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80',
    featured: true,
  },
  {
    title: 'Particle Engine',
    desc: 'Moteur de particules WebGL pour créer des effets visuels interactifs en temps réel.',
    tags: ['WebGL', 'GLSL', 'Canvas API'],
    color: '#3B82F6',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80',
    featured: false,
  },
  {
    title: 'AI Content Studio',
    desc: 'Plateforme SaaS pour générer et éditer du contenu avec l\'IA. Interface minimaliste et intuitive.',
    tags: ['Next.js', 'OpenAI', 'Prisma'],
    color: '#06B6D4',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
    featured: false,
  },
  {
    title: 'Motion Design System',
    desc: 'Système de design axé sur le mouvement avec des guidelines d\'animation pour les équipes.',
    tags: ['Framer', 'Figma', 'React'],
    color: '#F59E0B',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=600&q=80',
    featured: false,
  },
  {
    title: 'Crypto Tracker',
    desc: 'Application de suivi crypto avec alertes en temps réel et analyse technique avancée.',
    tags: ['React', 'WebSockets', 'D3.js'],
    color: '#EC4899',
    image: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=600&q=80',
    featured: false,
  },
]

export function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section ref={ref} id="projects" className="relative py-40 px-8">
      {/* Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[160px] opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #A855F7, transparent)' }} />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <span className="text-green-400 font-mono text-sm tracking-widest uppercase mb-4 block">// Projets</span>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6" style={{ fontFamily: 'Archivo, sans-serif' }}>
            Mes <span className="gradient-text">réalisations</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Une sélection de projets qui reflètent ma passion pour les interfaces modernes et l'innovation.
          </p>
        </motion.div>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {projects.filter(p => p.featured).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="glass glass-hover cursor-pointer relative overflow-hidden group"
              style={{ minHeight: 320 }}
            >
              {/* Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${project.color}15, transparent 60%, #000000aa)` }} />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col h-full" style={{ minHeight: 320 }}>
                <div className="flex justify-between items-start mb-auto">
                  <div className="w-3 h-3 rounded-full" style={{ background: project.color, boxShadow: `0 0 12px ${project.color}` }} />
                  <motion.div
                    animate={{ x: hovered === i ? 0 : 8, opacity: hovered === i ? 1 : 0 }}
                    className="flex gap-2"
                  >
                    <button aria-label="GitHub" className="glass p-2 rounded-full cursor-pointer hover:text-white text-slate-400 transition-colors">
                      <GitBranch className="w-4 h-4" />
                    </button>
                    <button aria-label="Live" className="glass p-2 rounded-full cursor-pointer hover:text-white text-slate-400 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </motion.div>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Archivo, sans-serif' }}>
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full font-mono"
                        style={{ background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30` }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="glass glass-hover cursor-pointer p-8 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl transition-all duration-300 group-hover:h-2"
                style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                style={{ background: `${project.color}15` }}>
                <div className="w-3 h-3 rounded-full" style={{ background: project.color }} />
              </div>

              <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Archivo, sans-serif' }}>
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.desc}</p>

              <div className="flex flex-wrap gap-1 mb-4">
                {project.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-full font-mono text-slate-400 border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>

              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-center gap-1 text-sm font-medium cursor-pointer"
                style={{ color: project.color }}
              >
                Voir le projet <ArrowUpRight className="w-3 h-3" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
