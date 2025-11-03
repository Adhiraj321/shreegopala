"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="https://adsparkx.com/wp-content/uploads/2021/11/20211126-235211-381.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Animated circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main heading */}
        <div
          className={`transform transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance text-white">
            <span className="text-white">Premium </span>
            <span className="text-white">Automobile Parts</span>
          </h1>
        </div>

        {/* Subheading */}
        <div
          className={`transform transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Serving the global market with premium quality components, expert service, and international reliability
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transform transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <button
            onClick={(e) => {
              e.preventDefault()
              const element = document.querySelector("#products")
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            }}
            className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:shadow-lg hover:shadow-white/50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Explore Products
          </button>
          <button
            onClick={(e) => {
              e.preventDefault()
              const element = document.querySelector("#contact")
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            }}
            className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 cursor-pointer"
          >
            Request Quote
          </button>
        </div>

        {/* Scroll indicator */}
        <div className={`flex justify-center animate-bounce ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <ChevronDown className="text-white" size={32} />
        </div>
      </div>
    </section>
  )
}
