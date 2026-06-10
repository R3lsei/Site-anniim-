import { Particles } from '@/components/ui/particles'
import { Navbar } from '@/components/sections/navbar'
import { Hero } from '@/components/sections/hero'
import { Stats } from '@/components/sections/stats'
import { About } from '@/components/sections/about'
import { Projects } from '@/components/sections/projects'
import { Contact } from '@/components/sections/contact'

export default function Home() {
  return (
    <div className="noise relative min-h-screen bg-black">
      <Particles />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Stats />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="relative z-10 text-center py-8 border-t border-white/5">
        <p className="text-slate-600 text-sm font-mono">
          © 2025 Alexandre Dupont — Fait avec <span className="text-green-500">♥</span> et Next.js
        </p>
      </footer>
    </div>
  )
}
