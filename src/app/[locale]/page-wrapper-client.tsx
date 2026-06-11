"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Experience from "@/components/sections/experience"
import Projects from "@/components/sections/projects"
import HowIWork from "@/components/sections/how-i-work"
import Principles from "@/components/sections/principles"
import Technologies from "@/components/sections/technologies"
import CTA from "@/components/sections/cta"
import BlueprintDivider from "@/components/blueprint-divider"
import BackgroundGlow from "@/components/background-glow"
import BackToTop from "@/components/back-to-top"

export default function PageWrapper() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    )

    const elements = document.querySelectorAll(".reveal")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-bg text-fg relative">
      <BackgroundGlow />
      <Navbar />
      <main className="pt-14 relative z-10">
        <Hero />
        <BlueprintDivider />
        <div className="reveal"><About /></div>
        <BlueprintDivider />
        <div className="reveal"><Experience /></div>
        <div className="reveal"><Projects /></div>
        <div className="reveal"><HowIWork /></div>
        <div className="reveal"><Principles /></div>
        <div className="reveal"><Technologies /></div>
        <BlueprintDivider />
        <div className="reveal"><CTA /></div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
