"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface ProductsProps {
  onBooking: () => void
}

interface Product {
  id: number
  name: string
  image: string
}

export default function Products({ onBooking }: ProductsProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)


  const products = [
    {
      id: 1,
      name: "Oxygen Regulator Single Stage Two Meter",
      image: "/products/oxygen-regulator-double-meter.jpg",
    },
    {
      id: 2,
      name: "Acetylene Regulator Double Stage Two Meter",
      image: "/products/acetylene-regulator-double-meter.jpg",
    },
    {
      id: 3,
      name: "CO2 Regulator Single Stage Two Meter with Flow Meter",
      image: "/products/co2-regulator-flow-meter.jpg",
    },
    {
      id: 4,
      name: "Argon Regulator Single Stage Two Meter",
      image: "/products/argon-regulator.jpg",
    },
    {
      id: 5,
      name: "Acetylene Regulator Single Stage Two Meter",
      image: "/products/acetylene-regulator-single-meter.jpg",
    },
    {
      id: 6,
      name: "CO2 Regulator Single Stage Two Meter",
      image: "/products/co2-regulator.jpg",
    },
    {
      id: 7,
      name: "FA Valve with Flow Meter",
      image: "/products/fa-valve-flow-meter.jpg",
    },
    {
      id: 8,
      name: "High Pressure Industrial Regulator",
      image: "/products/high-pressure-regulator-single.jpg",
    },
    {
      id: 9,
      name: "MOX Regulator Single Stage Double Gauge",
      image: "/products/mox-regulator.jpg",
    },
    {
      id: 10,
      name: "Nitrogen Regulator Single Stage Two Meter",
      image: "/products/nitrogen-regulator.jpg",
    },
    {
      id: 11,
      name: "Oxygen Regulator Single Stage One Meter",
      image: "/products/oxygen-regulator-single-meter.jpg",
    },
    {
      id: 12,
      name: "High Pressure Industrial Regulator (Double Meter)",
      image: "/products/high-pressure-regulator-double.jpg",
    },
  ]

  return (
    <section id="products" className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-20 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Premium Products</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Discover our comprehensive range of high-precision welding and cutting equipment, engineered to meet rigorous international standards.
          </p>
          <a
            href="#catalog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-all font-semibold group"
          >
            <span>View Complete Catalogs</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {products.map((product, index) => {
            return (
              <div
                key={product.id}
                className="group relative"
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Hover Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-b from-primary/30 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Card Container */}
                <div className="relative h-full bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col">

                  {/* Image Container - Enlarged, white background to match JPEGs, no padding */}
                  <div
                    className="relative h-80 w-full overflow-hidden bg-white cursor-zoom-in"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      loading={index < 4 ? "eager" : "lazy"}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        console.error(`Image failed to load: ${product.image}`)
                        if (e.currentTarget.src !== "/placeholder.svg") {
                          e.currentTarget.src = "/placeholder.svg"
                        }
                      }}
                    />

                  </div>

                  {/* Content Area */}
                  <div className="p-4 sm:p-6 flex flex-col flex-1 bg-gradient-to-b from-card to-background border-t border-white/5">
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-4 line-clamp-2 min-h-[3rem] sm:min-h-[3.5rem] leading-tight group-hover:text-white transition-colors">
                      {product.name}
                    </h3>

                    <button
                      onClick={onBooking}
                      className="w-full mt-auto px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-secondary hover:bg-primary text-secondary-foreground hover:text-black text-sm sm:text-base font-semibold transition-all duration-300 shadow-sm hover:shadow-primary/25 flex items-center justify-center gap-2 group/btn"
                    >
                      <span>Details & Booking</span>
                      <svg
                        className="w-4 h-4 opacity-50 group-hover/btn:opacity-100 transition-opacity"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              layoutId={`product-image-${selectedProduct.id}`}
              className="relative max-w-3xl max-h-[90vh] w-full bg-white rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the image container
            >
              <Image
                src={selectedProduct.image || "/placeholder.svg"}
                alt={selectedProduct.name}
                width={800} // Adjust as needed for desired lightbox size
                height={600} // Adjust as needed
                objectFit="contain"
                className="w-full h-full"
                priority
              />
              <button
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                onClick={() => setSelectedProduct(null)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white text-center">
                <h3 className="text-xl font-semibold">{selectedProduct.name}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

