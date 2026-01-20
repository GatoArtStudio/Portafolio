"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Technologies from "@/components/sections/technologies"
import Projects from "@/components/sections/projects"

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Initialize animations
    const ctx = gsap.context(() => {
      // Fade in the main content
      gsap.from("main > section", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      })

      // Set up scroll animations for each section
      const sections = document.querySelectorAll("section")
      sections.forEach((section) => {
        gsap.from(section.querySelectorAll(".animate-on-scroll"), {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 30,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
        })
      })
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main ref={mainRef} className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Technologies />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
