'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function ContactNew() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="contact"
      ref={ref}
      style={{ padding: '120px 0 80px', borderTop: '1px solid var(--line)' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4rem' }}
        >
          Contact
        </motion.p>

        {/* Big CTA */}
        <motion.a
          href="mailto:hugo@seiler.fr"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          data-hover
          style={{
            display: 'block',
            fontFamily: 'Archivo, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(2rem, 7vw, 6.5rem)',
            letterSpacing: '-0.04em',
            lineHeight: 1,
            color: 'var(--ink)',
            textDecoration: 'none',
            borderBottom: '1px solid var(--line)',
            paddingBottom: '2.5rem',
            marginBottom: '3rem',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.4')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          hugo@seiler.fr
        </motion.a>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.35 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}
        >
          <div style={{ display: 'flex', gap: '2.5rem' }}>
            {['GitHub', 'LinkedIn', 'Dribbble'].map((s) => (
              <a
                key={s}
                href="#"
                data-hover
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ink)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
              >
                {s}
              </a>
            ))}
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.04em' }}>
            © 2025 Hugo Seiler
          </span>
        </motion.div>
      </div>
    </section>
  )
}
