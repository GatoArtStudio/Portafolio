"use client"

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

export default function PageWrapper() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Navbar />
      <main className="pt-14">
        <Hero />
        <BlueprintDivider />
        <About />
        <BlueprintDivider />
        <Experience />
        <BlueprintDivider />
        <Projects />
        <BlueprintDivider />
        <HowIWork />
        <BlueprintDivider />
        <Principles />
        <BlueprintDivider />
        <Technologies />
        <BlueprintDivider />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
