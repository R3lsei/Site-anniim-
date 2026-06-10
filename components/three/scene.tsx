'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function ThreeScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 8

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)

    // Materials
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x09090B,
      wireframe: true,
      transparent: true,
      opacity: 0.1,
    })
    const lineMat = new THREE.LineBasicMaterial({ color: 0x09090B, transparent: true, opacity: 0.18 })
    const solidMat = new THREE.MeshBasicMaterial({ color: 0x09090B, transparent: true, opacity: 0.02 })

    // Objects
    const objects: Array<{
      mesh: THREE.Mesh | THREE.LineSegments
      initialY: number
      targetY: number
      rotSpeed: THREE.Vector3
      scrollFactor: number
      phase: number
    }> = []

    const geometries = [
      new THREE.IcosahedronGeometry(1.2, 0),
      new THREE.TorusGeometry(0.8, 0.25, 8, 16),
      new THREE.OctahedronGeometry(1),
      new THREE.TetrahedronGeometry(0.9),
      new THREE.TorusKnotGeometry(0.6, 0.2, 64, 8),
      new THREE.BoxGeometry(1.2, 1.2, 1.2),
      new THREE.ConeGeometry(0.8, 1.6, 6),
      new THREE.IcosahedronGeometry(0.6, 0),
    ]

    const positions = [
      { x: -4, y: 2, z: -2, scrollF: 1.2 },
      { x: 4.5, y: 1, z: -3, scrollF: 0.8 },
      { x: -3, y: -3, z: -1, scrollF: 1.5 },
      { x: 3.5, y: -2, z: -2, scrollF: 1.0 },
      { x: 0.5, y: 4, z: -4, scrollF: 2.0 },
      { x: -5, y: 0, z: -3, scrollF: 0.6 },
      { x: 5, y: 3, z: -2, scrollF: 1.3 },
      { x: 1.5, y: -4.5, z: -1, scrollF: 0.9 },
    ]

    geometries.forEach((geo, i) => {
      const pos = positions[i]

      // Wire mesh
      const mesh = new THREE.Mesh(geo, wireMat.clone())
      mesh.position.set(pos.x, pos.y + 12, pos.z) // start above viewport
      scene.add(mesh)

      // Solid inside
      const solid = new THREE.Mesh(geo, solidMat.clone())
      solid.position.copy(mesh.position)
      scene.add(solid)

      objects.push({
        mesh,
        initialY: pos.y + 12,
        targetY: pos.y,
        rotSpeed: new THREE.Vector3(
          (Math.random() - 0.5) * 0.008,
          (Math.random() - 0.5) * 0.012,
          (Math.random() - 0.5) * 0.005,
        ),
        scrollFactor: pos.scrollF,
        phase: Math.random() * Math.PI * 2,
      })
    })

    // Scroll state
    let scrollY = 0
    let targetScrollY = 0
    const maxScroll = () => document.documentElement.scrollHeight - window.innerHeight

    const onScroll = () => {
      targetScrollY = window.scrollY
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // Animation
    let raf: number
    const clock = new THREE.Clock()

    const animate = () => {
      raf = requestAnimationFrame(animate)
      const elapsed = clock.getElapsedTime()

      // Smooth scroll
      scrollY += (targetScrollY - scrollY) * 0.06
      const progress = Math.min(scrollY / Math.max(maxScroll(), 1), 1)

      objects.forEach((obj, i) => {
        const { mesh, initialY, targetY, rotSpeed, scrollFactor, phase } = obj

        // Fall on scroll + float
        const fallProgress = Math.min(progress * scrollFactor * 1.5, 1)
        const eased = 1 - Math.pow(1 - fallProgress, 3) // ease out cubic
        const floatY = Math.sin(elapsed * 0.5 + phase) * 0.15

        mesh.position.y = initialY + (targetY - initialY) * eased + floatY

        // Rotation - always spinning + accelerates on scroll
        const scrollSpin = 1 + progress * 2
        mesh.rotation.x += rotSpeed.x * scrollSpin
        mesh.rotation.y += rotSpeed.y * scrollSpin
        mesh.rotation.z += rotSpeed.z * scrollSpin

        // Fade in as they fall
        const mat = mesh.material as THREE.MeshBasicMaterial
        mat.opacity = 0.06 + eased * 0.1
      })

      // Subtle camera drift
      camera.position.x = Math.sin(elapsed * 0.08) * 0.3
      camera.position.y = -progress * 2 + Math.cos(elapsed * 0.06) * 0.2

      renderer.render(scene, camera)
    }

    animate()

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      geometries.forEach(g => g.dispose())
    }
  }, [])

  return <canvas id="three-canvas" ref={canvasRef} />
}
