"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface ProductsProps {
  onBooking: () => void
}

interface Product {
  id: number
  name: string
  image: string
}

interface ProductCategory {
  title: string
  thumbnail: string
  subtitle: string
  products: Product[]
}

export default function Products({ onBooking }: ProductsProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const categories: ProductCategory[] = [
    {
      title: "Regulators & Valves",
      thumbnail: "/products/meter_thumbnail.jpeg",
      subtitle: "High-precision welding & cutting regulators",
      products: [
        { id: 1, name: "Oxygen Regulator Single Stage Two Meter", image: "/products/oxygen-regulator-double-meter.jpg" },
        { id: 2, name: "Acetylene Regulator Double Stage Two Meter", image: "/products/acetylene-regulator-double-meter.jpg" },
        { id: 3, name: "CO2 Regulator Single Stage Two Meter with Flow Meter", image: "/products/co2-regulator-flow-meter.jpg" },
        { id: 4, name: "Argon Regulator Single Stage Two Meter", image: "/products/argon-regulator.jpg" },
        { id: 5, name: "Acetylene Regulator Single Stage Two Meter", image: "/products/acetylene-regulator-single-meter.jpg" },
        { id: 6, name: "CO2 Regulator Single Stage Two Meter", image: "/products/co2-regulator.jpg" },
        { id: 7, name: "FA Valve with Flow Meter", image: "/products/fa-valve-flow-meter.jpg" },
        { id: 8, name: "High Pressure Industrial Regulator", image: "/products/high-pressure-regulator-single.jpg" },
        { id: 9, name: "MOX Regulator Single Stage Double Gauge", image: "/products/mox-regulator.jpg" },
        { id: 10, name: "Nitrogen Regulator Single Stage Two Meter", image: "/products/nitrogen-regulator.jpg" },
        { id: 11, name: "Oxygen Regulator Single Stage One Meter", image: "/products/oxygen-regulator-single-meter.jpg" },
        { id: 12, name: "High Pressure Industrial Regulator (Double Meter)", image: "/products/high-pressure-regulator-double.jpg" },
      ],
    },
    {
      title: "Silver Brazing & Copper Phos",
      thumbnail: "/silver brazing and copper phos ingot/metal_thumbnail.jpeg",
      subtitle: "Brazing alloys, rods, wires & foils",
      products: [
        { id: 101, name: "Silver Brazing & Copper Phos Ingot", image: "/silver brazing and copper phos ingot/SILVER BRAZING AND COPPER PHOS INGOT..jpeg" },
        { id: 102, name: "Silver Brazing Rod", image: "/silver brazing and copper phos ingot/silver brazing rod.JPEG" },
        { id: 103, name: "Flux Coated Silver Solder", image: "/silver brazing and copper phos ingot/flux coated silver solder.JPEG" },
        { id: 104, name: "Silver & Copper Brazing Foil", image: "/silver brazing and copper phos ingot/silver and copper brazing foil.JPEG" },
        { id: 105, name: "Copper Brazing Wire – 0% AG, Grade: BCuP-2, Dia 0.8mm Spool", image: "/silver brazing and copper phos ingot/Copper Brazing wire.JPEG" },
        { id: 106, name: "Copper Brazing Rod", image: "/silver brazing and copper phos ingot/copper brazing rod.PNG" },
        { id: 107, name: "Copper Brazing Rings", image: "/silver brazing and copper phos ingot/copper brazing rings.JPEG" },
        { id: 108, name: "Brass Brazing Wire – Grade: RBCuZn-C, Dia 0.8mm", image: "/silver brazing and copper phos ingot/Brass brazing wire.JPEG" },
        { id: 109, name: "Aluminium Alloy TIG Wire – Grade ER-5356, Premium Quality, Oxygen Free, German Technology, Bright Finish", image: "/silver brazing and copper phos ingot/Aluminium Alloy Tig Wire.PNG" },
      ],
    },
  ]

  // Lock body scroll when gallery is open
  useEffect(() => {
    if (activeCategory) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [activeCategory])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedProduct) {
          setSelectedProduct(null)
        } else if (activeCategory) {
          setActiveCategory(null)
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activeCategory, selectedProduct])

  return (
    <section id="products" className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-slide-up">
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

        {/* Side-by-side Thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group relative cursor-pointer"
              onClick={() => setActiveCategory(category)}
            >
              {/* Hover glow */}
              <div className="absolute -inset-1 bg-gradient-to-b from-primary/30 to-accent/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative h-full bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                {/* Image */}
                <div className="relative aspect-square w-full overflow-hidden">
                  <img
                    src={category.thumbnail}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                    <div className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold text-base shadow-lg shadow-primary/25 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                      <span>View {category.products.length} Products</span>
                    </div>
                  </div>
                </div>

                {/* Caption */}
                <div className="p-5 sm:p-6 text-center bg-gradient-to-b from-card to-background border-t border-white/5">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">
                    {category.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {category.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Gallery Overlay ── */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm overflow-y-auto"
          >
            {/* Header bar */}
            <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 py-4">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  {activeCategory.title}
                  <span className="ml-2 text-sm sm:text-base font-normal text-white/60">({activeCategory.products.length} items)</span>
                </h2>
                <button
                  onClick={() => setActiveCategory(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close gallery"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Products grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.05 } },
                }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
              >
                {activeCategory.products.map((product) => (
                  <motion.div
                    key={product.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="group relative"
                  >
                    {/* Hover glow */}
                    <div className="absolute -inset-0.5 bg-gradient-to-b from-primary/30 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

                    <div className="relative h-full bg-card/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                      {/* Image */}
                      <div
                        className="relative h-56 sm:h-64 w-full overflow-hidden bg-white cursor-zoom-in"
                        onClick={() => setSelectedProduct(product)}
                      >
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          loading="lazy"
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            if (e.currentTarget.src !== "/placeholder.svg") {
                              e.currentTarget.src = "/placeholder.svg"
                            }
                          }}
                        />
                      </div>

                      {/* Content */}
                      <div className="p-3 sm:p-5 flex flex-col flex-1 bg-gradient-to-b from-card to-background border-t border-white/5">
                        <h3 className="text-sm sm:text-base font-bold text-foreground mb-3 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem] leading-tight group-hover:text-white transition-colors">
                          {product.name}
                        </h3>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            onBooking()
                          }}
                          className="w-full mt-auto px-3 py-2 sm:py-2.5 rounded-lg bg-secondary hover:bg-primary text-secondary-foreground hover:text-black text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-primary/25 flex items-center justify-center gap-2 group/btn"
                        >
                          <span>Details & Booking</span>
                          <svg
                            className="w-3.5 h-3.5 opacity-50 group-hover/btn:opacity-100 transition-opacity"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Zoomed Image Lightbox ── */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/85 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-3xl max-h-[90vh] w-full bg-white rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedProduct.image || "/placeholder.svg"}
                alt={selectedProduct.name}
                width={800}
                height={600}
                className="w-full h-full object-contain"
                priority
              />
              <button
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                onClick={() => setSelectedProduct(null)}
              >
                <X size={24} />
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
