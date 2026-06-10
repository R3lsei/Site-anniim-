'use client'

const words = [
  'Design', '·', 'Développement', '·', 'Motion', '·', 'Interface', '·', 'Typographie', '·', 'Interaction', '·',
  'Design', '·', 'Développement', '·', 'Motion', '·', 'Interface', '·', 'Typographie', '·', 'Interaction', '·',
]

export function Marquee() {
  return (
    <div
      style={{
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
        padding: '14px 0',
        overflow: 'hidden',
      }}
    >
      <div className="marquee-track">
        {words.map((w, i) => (
          <span
            key={i}
            style={{
              padding: '0 20px',
              fontSize: '0.7rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: w === '·' ? 'var(--line)' : 'var(--muted)',
              fontWeight: 400,
              whiteSpace: 'nowrap',
            }}
          >
            {w}
          </span>
        ))}
      </div>
    </div>
  )
}
