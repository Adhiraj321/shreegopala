"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", phone: "", message: "" })
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
        setErrorMessage(data.error || "Failed to send message")
      }
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage("An error occurred. Please try again.")
      console.error("Form submission error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+91-121-4328707 / +91-9897671442 / +91-8218613982" },
    { icon: Mail, label: "Email", value: "info@shreegopala.com" },
    { icon: MapPin, label: "Location", value: "Meerut City, India & International" },
  ]

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Background elements */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          {/* Section header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
              Have questions? We're here to help. Contact us for inquiries, quotes, or partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {/* Contact info cards */}
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 sm:p-8 text-center hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="inline-block p-3 sm:p-4 bg-primary/10 rounded-lg mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-foreground">{info.label}</h3>
                  {info.label === "Phone" ? (
                    <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-base sm:text-lg text-muted-foreground">
                      <a
                        href="https://wa.me/911214328707"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors cursor-pointer whitespace-nowrap"
                      >
                        +91-121-4328707
                      </a>
                      <span className="text-muted-foreground hidden sm:inline">/</span>
                      <a
                        href="https://wa.me/919897671442"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors cursor-pointer whitespace-nowrap"
                      >
                        +91-9897671442
                      </a>
                      <span className="text-muted-foreground hidden sm:inline">/</span>
                      <a
                        href="https://wa.me/918218613982"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors cursor-pointer whitespace-nowrap"
                      >
                        +91-8218613982
                      </a>
                    </div>
                  ) : info.label === "Email" ? (
                    <a
                      href="mailto:info@shreegopala.com"
                      className="text-base sm:text-lg text-muted-foreground hover:text-primary transition-colors cursor-pointer break-words px-2"
                    >
                      {info.value}
                    </a>
                  ) : info.label === "Location" ? (
                    <a
                      href="https://maps.app.goo.gl/wAjZugtPvavoiGwp6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg text-muted-foreground hover:text-primary transition-colors cursor-pointer break-words px-2"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-base sm:text-lg">{info.value}</p>
                  )}
                </div>
              )
            })}
          </div>

          <div className="max-w-2xl mx-auto bg-card border border-border rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Company Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-base">
              <div>
                <p className="text-muted-foreground mb-1">Company Name</p>
                <p className="text-foreground font-semibold">Shree Gopala Enterprises</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">GSTIN</p>
                <p className="text-foreground font-semibold">09ABVPT3316Q1ZL</p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-muted-foreground mb-1">Address</p>
                <p className="text-foreground font-semibold">
                  G-32, New Dev Shree Plaza, T. P. Nagar, Baghpat Road, Meerut City - 250002 (U.P.) India
                </p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Email</p>
                <a
                  href="mailto:info@shreegopala.com"
                  className="text-foreground font-semibold hover:text-primary transition-colors cursor-pointer"
                >
                  info@shreegopala.com
                </a>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Website</p>
                <p className="text-foreground font-semibold">www.shreegopala.com</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Mobile</p>
                <a
                  href="tel:+917017854020"
                  className="text-foreground font-semibold hover:text-primary transition-colors cursor-pointer block mb-1"
                >
                  +91-7017854020
                </a>
                <a
                  href="tel:+918218613982"
                  className="text-foreground font-semibold hover:text-primary transition-colors cursor-pointer block"
                >
                  +91-8218613982
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="max-w-2xl mx-auto bg-card border border-border rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-base font-semibold mb-2 text-foreground">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    required
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <label className="block text-base font-semibold mb-2 text-foreground">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div>
                <label className="block text-base font-semibold mb-2 text-foreground">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXX-XXXX-XXXX"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  disabled={isLoading}
                />
              </div>

              <div>
                <label className="block text-base font-semibold mb-2 text-foreground">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your inquiry or message..."
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  required
                  disabled={isLoading}
                />
              </div>

              {submitStatus === "success" && (
                <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <CheckCircle className="text-green-500" size={20} />
                  <p className="text-green-500 font-semibold">Message sent successfully! We'll get back to you soon.</p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <AlertCircle className="text-red-500" size={20} />
                  <p className="text-red-500 font-semibold">{errorMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
