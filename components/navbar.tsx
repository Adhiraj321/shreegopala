"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "top-4 left-4 right-4 mx-auto max-w-7xl rounded-2xl bg-background/95 backdrop-blur-xl border border-border shadow-2xl"
          : "top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border"
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-background font-bold text-lg">G</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-foreground">Shree Gopala</h1>
              <p className="text-xs text-muted-foreground">Auto Parts</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-foreground hover:text-primary transition-colors duration-300 relative group cursor-pointer"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground group-hover:w-full transition-all duration-500 ease-out" />
              </a>
            ))}
            <button
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector("#contact")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" })
                  setIsOpen(false)
                }
              }}
              className="px-6 py-2 bg-foreground text-background rounded-lg hover:shadow-lg hover:shadow-foreground/50 transition-all duration-300 transform hover:scale-105 font-semibold cursor-pointer"
            >
              Inquiry
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground hover:text-primary transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-slide-down">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-4 py-2 text-foreground hover:text-primary hover:bg-card rounded-lg transition-all duration-300 cursor-pointer"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector("#contact")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" })
                  setIsOpen(false)
                }
              }}
              className="w-full px-4 py-2 bg-foreground text-background rounded-lg hover:shadow-lg hover:shadow-foreground/50 transition-all font-semibold cursor-pointer"
            >
              Inquiry
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
