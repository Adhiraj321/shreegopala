"use client"

import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, CheckCircle } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const certifications = ["ISO 9001-2015", "CE Certified", "WHO-GMP Certified"]

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">G</span>
              </div>
              <div>
                <h3 className="font-bold text-foreground">Shree Gopala</h3>
                <p className="text-xs text-muted-foreground">Auto Parts</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              ISO 9001-2015 & CE & WHO-GMP Certified - Premium automobile parts supplier serving global markets with
              quality and reliability.
            </p>
            <div className="space-y-2">
              {certifications.map((cert, i) => (
                <div key={i} className="flex items-center gap-2 text-xs">
                  <CheckCircle size={14} className="text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Products", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-2">
              {["Engine Components", "Transmission Parts", "Brake Systems", "Suspension Parts"].map((product) => (
                <li key={product}>
                  <a href="#products" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Phone size={16} className="text-primary mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <a
                    href="tel:+91-121-4328707"
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer block"
                  >
                    +91-121-4328707
                  </a>
                  <a
                    href="tel:+91-9897671442"
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer block"
                  >
                    +91-9897671442
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} className="text-primary mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <a
                    href="mailto:shreegopalaenterprises@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer block"
                  >
                    shreegopalaenterprises@gmail.com
                  </a>
                  <a
                    href="mailto:info@shreegopala.com"
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer block"
                  >
                    info@shreegopala.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">Meerut City, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Shree Gopala Enterprises. All rights reserved. GSTIN: 09ABVPT3316Q1ZL
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Facebook, label: "Facebook", href: "https://facebook.com/shreegopala" },
              { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/shreegopala" },
              { icon: Twitter, label: "Twitter", href: "https://twitter.com/shreegopala" },
            ].map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background border border-border rounded-lg hover:border-primary hover:text-primary transition-all duration-300 transform hover:scale-110 cursor-pointer"
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
