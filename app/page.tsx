import { ThreeScene } from '@/components/three/scene'
import { CustomCursor } from '@/components/ui/custom-cursor'
import { Navbar } from '@/components/layout/navbar'
import { HeroNew } from '@/components/sections/hero-new'
import { Marquee } from '@/components/sections/marquee'
import { Work } from '@/components/sections/work'
import { AboutNew } from '@/components/sections/about-new'
import { ContactNew } from '@/components/sections/contact-new'

export default function Home() {
  return (
    <>
      <ThreeScene />
      <CustomCursor />
      <Navbar />
      <main>
        <HeroNew />
        <Marquee />
        <Work />
        <AboutNew />
        <ContactNew />
      </main>
    </>
  )
}
