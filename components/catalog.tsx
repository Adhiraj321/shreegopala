"use client"

import { Download, FileText, ExternalLink } from "lucide-react"

export default function Catalog() {
  const catalogs = [
    {
      id: 1,
      name: "Welding Products Catalog",
      file: "/catalog/weilding_products.pdf",
      description: "Complete catalog of our welding and cutting products",
    },
    {
      id: 2,
      name: "Gas and Plasma Catalog",
      file: "/catalog/gas_and_plasma.pdf",
      description: "Comprehensive catalog of gas and plasma cutting products",
    },
    {
      id: 3,
      name: "Wire Brush Catalog",
      file: "/catalog/Wire_Brush_RED_EAGLE.pdf",
      description: "Complete catalog of wire brush products and accessories",
    },
  ]

  const handleView = (file: string) => {
    window.open(file, "_blank")
  }

  const handleDownload = (file: string, name: string) => {
    const link = document.createElement("a")
    link.href = file
    link.download = name
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="catalog" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Product <span className="text-primary">Catalogs</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Download or view our comprehensive product catalogs
          </p>
        </div>

        {/* Catalog cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {catalogs.map((catalog, index) => (
            <div
              key={catalog.id}
              className="bg-card border border-border rounded-xl p-6 sm:p-8 hover:border-primary/50 transition-all duration-300 transform hover:scale-105 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <FileText className="text-primary" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{catalog.name}</h3>
                  <p className="text-sm text-muted-foreground">{catalog.description}</p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleView(catalog.file)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-background border border-border rounded-lg hover:border-primary hover:text-primary transition-all duration-300 font-semibold"
                >
                  <ExternalLink size={18} />
                  View PDF
                </button>
                <button
                  onClick={() => handleDownload(catalog.file, catalog.name)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  <Download size={18} />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

