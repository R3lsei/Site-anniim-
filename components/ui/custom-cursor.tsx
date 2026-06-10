'use client'

import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const trail = trailRef.current
    if (!dot || !trail) return

    let mx = 0, my = 0
    let tx = 0, ty = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      dot.style.left = mx + 'px'
      dot.style.top = my + 'px'
    }

    const raf = () => {
      tx += (mx - tx) * 0.12
      ty += (my - ty) * 0.12
      trail.style.left = tx + 'px'
      trail.style.top = ty + 'px'
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    const onEnter = () => dot.classList.add('big')
    const onLeave = () => dot.classList.remove('big')

    const links = document.querySelectorAll('a, button, [data-hover]')
    links.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor" />
      <div ref={trailRef} className="cursor-trail" />
    </>
  )
}
