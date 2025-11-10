"use client"

import { Award, Globe, Users, Zap, CheckCircle, Wrench, Package } from "lucide-react"

export default function AboutUs() {
  const stats = [
    { icon: Globe, label: "Global Reach", value: "50+ Countries" },
    { icon: Users, label: "Customers", value: "10,000+" },
    { icon: Award, label: "Quality", value: "ISO Certified" },
    { icon: Zap, label: "Experience", value: "25+ Years" },
  ]

  const certifications = ["ISO 9001-2015", "CE Certified", "WHO-GMP Certified"]

  const productCategories = [
    {
      title: "Welding & Cutting Equipment",
      items: ["Gas Cutting & Welding Torch", "Flashback Arrestor", "Gas Cutting Nozzle", "CO2 Pre-heater"],
    },
    {
      title: "Gas Regulators & Flow Meters",
      items: ["Industrial Gas Regulators", "Medical Gas Regulators", "Argon Flow Meter", "Medical Flow Meter"],
    },
    {
      title: "Filler Wires & Brazing",
      items: [
        "ER-4043, ER-4047, ER-5356 MIG/TIG Filler Wire",
        "Silver Brazing Rod & Foils",
        "Copper Phosphorus Brazing Rod",
        "Soldering Alloys",
      ],
    },
    {
      title: "Specialty Alloys",
      items: ["Aluminium Bronze", "Silica Bronze", "Phosphor Bronze", "Inconel 625", "ER NiFe55"],
    },
    {
      title: "Cutting Tools & Components",
      items: [
        "HSS & Carbide Cutting Tools",
        "Carbide Bits & Diamond Cutting Tools",
        "Tungsten Rod (Round & Square)",
        "Stellite-Gr 6 TIG Wire",
      ],
    },
    {
      title: "Electrical & Hardware",
      items: [
        "Copper & Aluminum Cable Terminal & Lugs",
        "Cobalt Bushes, Rings & Sleeves",
        "Nickel Forged Components",
        "Generator Welding Machine Spares",
      ],
    },
  ]

  const brands = ["NORTH", "FRONTLINE", "BLACK WOLF", "WELD CRAFT"]

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          {/* Section header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              About{" "}
              <span className="text-red-600">Shree</span>{" "}
              <span className="text-blue-600">Gopala</span>{" "}
              <span className="text-red-600">Enterprises</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              ISO 9001-2015 & CE & WHO-GMP Certified - Manufacturers & Exporters of RED EAGLE BRAND Welding and Cutting
              Equipment, Industrial & Medical Gas Regulators, Cutting Tools, and Specialty Alloys
            </p>
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left side - Video */}
            <div className="relative h-96 rounded-xl overflow-hidden border border-border">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              >
                <source src="/assets/about_us.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Right side - Text */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Our Business</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We are leading manufacturers and exporters of<br />
                  <span className="font-semibold">RED EAGLE BRAND</span> welding and cutting equipment,
                  accessories, and consumables. We specialize in brazing products, HSS and carbide cutting tools,
                  industrial and medical gas regulators, and a comprehensive range of specialty alloys for welding
                  applications.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide the highest quality welding, cutting, and industrial equipment to customers worldwide,
                  ensuring reliability, durability, and performance in every product we deliver. We are committed to
                  international excellence and customer satisfaction.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Why Choose Us</h3>
                <ul className="space-y-3">
                  {[
                    "Premium quality products meeting international standards",
                    "Comprehensive range of welding and cutting solutions",
                    "Competitive pricing with bulk discounts available",
                    "Fast and reliable international shipping",
                    "Expert technical support and consultation",
                    "Authorized distributor of world-class brands",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Certifications</h3>
                <div className="flex flex-wrap gap-3">
                  {certifications.map((cert, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg border border-primary/20"
                    >
                      <CheckCircle size={18} className="text-primary" />
                      <span className="text-foreground font-semibold">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
              <Package size={28} className="text-primary" />
              Authorized Distributor of World-Class Brands
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {brands.map((brand, i) => (
                <div
                  key={i}
                  className="bg-background border border-border rounded-lg p-4 text-center hover:border-primary/50 transition-all duration-300"
                >
                  <p className="font-semibold text-foreground">{brand}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-2">
              <Wrench size={28} className="text-primary" />
              Our Product Range
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productCategories.map((category, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 transform hover:scale-105"
                >
                  <h4 className="font-bold text-foreground mb-4 text-lg">{category.title}</h4>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
