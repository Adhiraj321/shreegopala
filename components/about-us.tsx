"use client"

import { Award, Globe, Users, Zap } from "lucide-react"

export default function AboutUs() {
  const stats = [
    { icon: Globe, label: "Global Reach", value: "50+ Countries" },
    { icon: Users, label: "Customers", value: "10,000+" },
    { icon: Award, label: "Quality", value: "ISO Certified" },
    { icon: Zap, label: "Experience", value: "25+ Years" },
  ]

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          {/* Section header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              About <span className="text-primary">Gopal ji Auto Parts</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Leading supplier of premium automobile components with a commitment to quality and international
              excellence
            </p>
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left side - Image placeholder */}
            <div className="relative h-96 rounded-xl overflow-hidden border border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <Zap className="text-primary mx-auto mb-4" size={64} />
                  <p className="text-muted-foreground">Premium Auto Parts Facility</p>
                </div>
              </div>
            </div>

            {/* Right side - Text */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide the highest quality automobile parts to customers worldwide, ensuring reliability,
                  durability, and performance in every product we deliver.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Why Choose Us</h3>
                <ul className="space-y-3">
                  {[
                    "Premium quality components meeting international standards",
                    "Competitive pricing with bulk discounts available",
                    "Fast and reliable international shipping",
                    "Expert technical support and consultation",
                    "Customization options for specific requirements",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 transform hover:scale-105 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-block p-3 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <p className="text-muted-foreground text-sm mb-2">{stat.label}</p>
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
