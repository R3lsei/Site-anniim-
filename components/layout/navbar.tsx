'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useEffect, useState } from 'react'

const links = [
  { label: 'Travaux', href: '#travaux' },
  { label: 'Profil',  href: '#profil' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [time, setTime] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 40))

  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-5"
      style={{
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        backgroundColor: scrolled ? 'rgba(250,250,250,0.9)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
        transition: 'background-color 0.4s, border-color 0.4s',
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a
          href="#"
          className="label hover:opacity-50 transition-opacity"
          style={{ fontSize: '0.9rem', letterSpacing: '-0.01em', fontWeight: 800, textTransform: 'none', fontFamily: 'Archivo, sans-serif', color: 'var(--ink)' }}
          data-hover
        >
          AD—
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="label hover:text-[var(--ink)] transition-colors duration-200"
              data-hover
            >
              {l.label}
            </a>
          ))}
        </nav>

        <span className="label font-mono hidden md:block">
          {time} CET
        </span>
      </div>
    </motion.header>
  )
}
