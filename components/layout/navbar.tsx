'use client'

import { motion } from 'framer-motion'

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-7"
    >
      <a
        href="#"
        data-hover
        style={{
          fontFamily: 'Archivo, sans-serif',
          fontWeight: 700,
          fontSize: '0.9rem',
          letterSpacing: '-0.01em',
          color: 'var(--ink)',
          textDecoration: 'none',
        }}
      >
        Hugo Seiler
      </a>

      <nav className="flex items-center gap-10">
        {[
          { label: 'Travaux',  href: '#travaux' },
          { label: 'Profil',   href: '#profil' },
          { label: 'Contact',  href: '#contact' },
        ].map((l) => (
          <a
            key={l.label}
            href={l.href}
            data-hover
            style={{
              fontFamily: 'Archivo, sans-serif',
              fontWeight: 400,
              fontSize: '0.8rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ink)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
          >
            {l.label}
          </a>
        ))}
      </nav>
    </motion.header>
  )
}
