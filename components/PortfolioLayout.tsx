'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Sidebar from './Sidebar'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Certifications from './sections/Certifications'

const SECTIONS = ['about', 'experience', 'projects', 'certifications']

export default function PortfolioLayout() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set(['about']))

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }, [])

  useEffect(() => {
    const observers = SECTIONS.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          setVisibleSections((prev) => {
            const next = new Set(prev)
            if (entry.isIntersecting) next.add(id)
            else next.delete(id)
            return next
          })
        },
        { rootMargin: '-30% 0px -30% 0px', threshold: 0 }
      )
      observer.observe(el)
      return observer
    })

    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  const activeSection = SECTIONS.find((id) => visibleSections.has(id)) ?? 'about'

  return (
    <div className="relative" onMouseMove={handleMouseMove}>
      {/* Mouse spotlight overlay — fixed so it follows cursor across scroll */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99,102,241,0.08), transparent 80%)`,
        }}
      />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 md:px-12 lg:flex lg:gap-0 lg:px-24">
        {/* Left: Sticky sidebar */}
        <header className="py-12 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[40%] lg:flex-col lg:py-24">
          <Sidebar activeSection={activeSection} />
        </header>

        {/* Right: Scrollable content */}
        <main className="pb-24 pt-12 lg:w-[60%] lg:py-24">
          <section id="about" className="mb-24 scroll-mt-16 lg:scroll-mt-24">
            <About />
          </section>
          <section id="experience" className="mb-24 scroll-mt-16 lg:scroll-mt-24">
            <Experience />
          </section>
          <section id="projects" className="mb-24 scroll-mt-16 lg:scroll-mt-24">
            <Projects />
          </section>
          <section id="certifications" className="mb-24 scroll-mt-16 lg:scroll-mt-24">
            <Certifications />
          </section>

          <footer className="border-t border-slate-800 pt-8 text-xs text-slate-500">
            Built with Next.js and Tailwind CSS, deployed on AWS Amplify.
          </footer>
        </main>
      </div>
    </div>
  )
}
