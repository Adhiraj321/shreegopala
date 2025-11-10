"use client"

import { X, Mail, MessageCircle, Phone } from "lucide-react"

interface BookingProps {
  onClose: () => void
}

export default function Booking({ onClose }: BookingProps) {
  const phoneNumbers = [
    { number: "+91-9897671442", whatsapp: "919897671442" },
    { number: "+91-7017854020", whatsapp: "917017854020" },
    { number: "+91-8218613982", whatsapp: "918218613982" },
  ]

  const email = "shreegopalaenterprises@gmail.com"

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-card border border-border rounded-xl max-w-lg w-full animate-slide-up">
        {/* Header */}
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
          <button onClick={onClose} className="p-2 hover:bg-background rounded-lg transition-colors">
            <X size={24} className="text-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <p className="text-muted-foreground text-center">
            Choose how you'd like to contact us for your order or inquiry
          </p>

          {/* Email Option */}
          <a
            href={`mailto:${email}?subject=Order Inquiry`}
            className="flex items-center gap-4 p-4 bg-background border border-border rounded-lg hover:border-primary/50 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
          >
            <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Mail className="text-primary" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">Send us an Email</h3>
              <p className="text-sm text-muted-foreground">{email}</p>
            </div>
          </a>

          {/* WhatsApp Option */}
          <a
            href={`https://wa.me/${phoneNumbers[0].whatsapp}?text=Hello, I'm interested in your products`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-background border border-border rounded-lg hover:border-primary/50 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
          >
            <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <MessageCircle className="text-primary" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">Chat on WhatsApp</h3>
              <p className="text-sm text-muted-foreground">Click to start a conversation</p>
            </div>
          </a>

          {/* Phone Numbers */}
          <div className="pt-4 border-t border-border">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Phone size={20} className="text-primary" />
              Call Us Directly
            </h3>
            <div className="space-y-3">
              {phoneNumbers.map((phone, index) => (
                <a
                  key={index}
                  href={`tel:${phone.number.replace(/-/g, "")}`}
                  className="block p-3 bg-background border border-border rounded-lg hover:border-primary/50 transition-all duration-300 text-foreground hover:text-primary cursor-pointer"
                >
                  {phone.number}
                </a>
              ))}
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full px-6 py-3 border-2 border-border text-foreground rounded-lg font-semibold hover:bg-background transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
