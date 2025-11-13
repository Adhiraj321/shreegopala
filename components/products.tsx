"use client"

import { useState } from "react"

interface ProductsProps {
  onBooking: () => void
}

export default function Products({ onBooking }: ProductsProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const products = [
    {
      id: 1,
      name: "Engine Components",
      image: "/assets/1.jpeg",
    },
    {
      id: 2,
      name: "Transmission Parts",
      image: "/assets/2.jpeg",
    },
    {
      id: 3,
      name: "Brake Systems",
      image: "/assets/3.jpeg",
    },
    {
      id: 4,
      name: "Suspension Parts",
      image: "/assets/4.jpeg",
    },
  ]

  return (
    <section id="products" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="text-primary">Premium Products</span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-6">
            Comprehensive range of welding and cutting products meeting international standards
          </p>
          <a
            href="#catalog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
          >
            View Product Catalogs
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => {
            return (
              <div
                key={product.id}
                className="group relative"
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative bg-card border border-border rounded-xl overflow-hidden h-full transform transition-all duration-300 group-hover:border-primary/50 flex flex-col">
                  <div className="relative h-80 w-full overflow-hidden bg-muted flex-1">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      loading={index < 2 ? "eager" : "lazy"}
                      fetchPriority={index === 0 ? "high" : "auto"}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        console.error(`Image failed to load: ${product.image}`)
                        if (e.currentTarget.src !== "/placeholder.svg") {
                          e.currentTarget.src = "/placeholder.svg"
                        }
                      }}
                    />
                  </div>

                  {/* Button */}
                  <div className="p-6">
                    <button
                      onClick={onBooking}
                      className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg text-base font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
