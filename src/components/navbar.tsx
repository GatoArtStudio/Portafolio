"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { gsap } from "gsap"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ROUTES } from "@/lib/routes"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Animate navbar on load
    gsap.from(".navbar", {
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })

    // Animate logo
    gsap.from(".logo", {
      opacity: 0,
      x: -20,
      duration: 1,
      delay: 0.2,
      ease: "back.out(1.7)",
    })

    // Animate nav items
    gsap.from(".nav-item", {
      opacity: 0,
      y: -20,
      stagger: 0.1,
      duration: 0.5,
      delay: 0.5,
      ease: "power2.out",
    })
  }, [])

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const navItems = [
    { name: "Inicio", path: ROUTES.PAGES.HOME.URL },
    { name: "Redes", path: ROUTES.PAGES.REDES.URL },
  ]

  return (
    <header className="navbar fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href={ROUTES.PAGES.HOME.URL} className="logo flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-cyan-300 text-transparent bg-clip-text">
              GatoArtStudio
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className={cn(
                  "nav-item text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.path ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild variant="default" size="sm" className="nav-item">
              <a href="mailto:contact@gatoartstudio.art">Contacto</a>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <span className="sr-only">Toggle menu</span>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className={cn(
                  "block py-2 text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.path ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild variant="default" size="sm" className="w-full">
              <a href="mailto:contact@gatoartstudio.art">Contacto</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
