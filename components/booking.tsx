"use client"

import type React from "react"

import { useState } from "react"
import { X, Calendar, Package, User } from "lucide-react"

interface BookingProps {
  onClose: () => void
}

export default function Booking({ onClose }: BookingProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    productType: "",
    quantity: "",
    deliveryDate: "",
    specifications: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Booking submitted:", formData)
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      productType: "",
      quantity: "",
      deliveryDate: "",
      specifications: "",
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-card border border-border rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-up">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Package className="text-primary" size={28} />
            <h2 className="text-2xl font-bold text-foreground">Book Your Order</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-background rounded-lg transition-colors">
            <X size={24} className="text-foreground" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Personal Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
              <User size={20} className="text-primary" />
              Personal Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                required
              />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
                className="px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          {/* Order Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
              <Package size={20} className="text-primary" />
              Order Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <select
                name="productType"
                value={formData.productType}
                onChange={handleChange}
                className="px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                required
              >
                <option value="">Select Product Type</option>
                <option value="engine">Engine Components</option>
                <option value="transmission">Transmission Parts</option>
                <option value="brake">Brake Systems</option>
                <option value="suspension">Suspension Parts</option>
                <option value="other">Other</option>
              </select>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="Quantity"
                className="px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>
          </div>

          {/* Delivery Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
              <Calendar size={20} className="text-primary" />
              Delivery Details
            </h3>
            <input
              type="date"
              name="deliveryDate"
              value={formData.deliveryDate}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
              required
            />
          </div>

          {/* Specifications */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-foreground">Special Specifications</label>
            <textarea
              name="specifications"
              value={formData.specifications}
              onChange={handleChange}
              placeholder="Any special requirements or specifications..."
              rows={4}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-border text-foreground rounded-lg font-semibold hover:bg-background transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
