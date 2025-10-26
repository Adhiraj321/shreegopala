"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Products from "@/components/products"
import AboutUs from "@/components/about-us"
import Contact from "@/components/contact"
import Booking from "@/components/booking"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"

export default function Home() {
  const [showBooking, setShowBooking] = useState(false)

  return (
    <main className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <Products onBooking={() => setShowBooking(true)} />
      <AboutUs />
      <Contact />
      {showBooking && <Booking onClose={() => setShowBooking(false)} />}
      <Footer />
    </main>
  )
}
