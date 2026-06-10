'use client'

const words = [
  'React', '/', 'Next.js', '/', 'TypeScript', '/', 'Motion Design', '/',
  'Three.js', '/', 'Tailwind CSS', '/', 'Node.js', '/', 'UI · UX', '/',
  'React', '/', 'Next.js', '/', 'TypeScript', '/', 'Motion Design', '/',
  'Three.js', '/', 'Tailwind CSS', '/', 'Node.js', '/', 'UI · UX', '/',
]

export function Marquee() {
  return (
    <section className="py-6 border-y border-[var(--line)] overflow-hidden bg-[var(--bg)]">
      <div className="marquee-track">
        {words.map((w, i) => (
          <span
            key={i}
            className="px-5 label whitespace-nowrap"
            style={{ fontSize: '0.7rem', color: i % 2 === 1 ? 'var(--line)' : 'var(--ink-muted)' }}
          >
            {w}
          </span>
        ))}
      </div>
    </section>
  )
}
