"use client"

import { useState } from "react"
import { ShoppingCart, Zap, Shield, Truck } from "lucide-react"
import Image from "next/image"

interface ProductsProps {
  onBooking: () => void
}

export default function Products({ onBooking }: ProductsProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const products = [
    {
      id: 1,
      name: "Engine Components",
      description: "High-performance engine parts for all vehicle types",
      price: "Custom Quote",
      icon: Zap,
      image: "/assets/1.jpeg",
      features: ["Precision engineered", "OEM compatible", "Tested quality"],
    },
    {
      id: 2,
      name: "Transmission Parts",
      description: "Durable transmission systems and components",
      price: "Custom Quote",
      icon: Truck,
      image: "/assets/2.jpeg",
      features: ["Smooth operation", "Long lifespan", "Global standard"],
    },
    {
      id: 3,
      name: "Brake Systems",
      description: "Advanced braking solutions for safety",
      price: "Custom Quote",
      icon: Shield,
      image: "/assets/3.jpeg",
      features: ["Enhanced safety", "Reliable stopping", "Premium quality"],
    },
    {
      id: 4,
      name: "Suspension Parts",
      description: "Complete suspension and steering components",
      price: "Custom Quote",
      icon: ShoppingCart,
      image: "/assets/4.jpeg",
      features: ["Smooth ride", "Durability", "Performance"],
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
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive range of automobile parts meeting international standards
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <div
                key={product.id}
                className="group relative"
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative bg-card border border-border rounded-xl overflow-hidden h-full transform transition-all duration-300 group-hover:scale-105 group-hover:border-primary/50">
                  <div className="relative h-48 w-full overflow-hidden bg-muted">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Icon */}
                    <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="text-primary" size={28} />
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-foreground">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{product.description}</p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Price and button */}
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-semibold">{product.price}</span>
                      <button
                        onClick={onBooking}
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
                      >
                        Book Now
                      </button>
                    </div>
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
