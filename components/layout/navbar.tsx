'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function Navbar() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6"
    >
      {/* Logo */}
      <a href="#" className="tag text-sm font-black tracking-tight text-[var(--ink)]" style={{ fontFamily: 'Archivo, sans-serif', letterSpacing: '-0.02em', fontSize: '1rem' }}>
        AD—
      </a>

      {/* Nav links */}
      <nav className="hidden md:flex items-center gap-10">
        {['Travaux', 'Profil', 'Contact'].map((item, i) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="tag hover:text-[var(--ink)] transition-colors"
            whileHover={{ y: -1 }}
          >
            {String(i + 1).padStart(2, '0')} {item}
          </motion.a>
        ))}
      </nav>

      {/* Clock */}
      <span className="tag hidden md:block font-mono">{time} CET</span>
    </motion.header>
  )
}
