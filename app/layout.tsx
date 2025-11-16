import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const exo = localFont({
  src: [
    {
      path: "../public/fonts/EXO350DB.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Exot350D.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-exo",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shreegopala.com"),
  title: "Shree Gopala Enterprises - RED EAGLE Brand Welding & Cutting Products",
  description:
    "Shree Gopala Enterprises - Leading manufacturer and exporter of RED EAGLE BRAND welding and cutting products, industrial & medical gas regulators, cutting tools, and specialty alloys. ISO 9001-2015, CE & WHO-GMP Certified. Serving global markets with premium quality equipment.",
  keywords: [
    "Shree Gopala Enterprises",
    "RED EAGLE welding products",
    "welding and cutting equipment",
    "gas regulators",
    "cutting tools",
    "specialty alloys",
    "welding equipment manufacturer",
    "Meerut welding products",
    "ISO 9001-2015 certified",
    "CE certified welding products",
    "WHO-GMP certified",
    "welding consumables",
    "industrial gas regulators",
    "medical gas regulators",
    "cutting nozzles",
    "welding torches",
    "flashback arrestor",
    "filler wires",
    "brazing products",
    "HSS cutting tools",
    "carbide cutting tools",
    "specialty welding alloys",
    "welding equipment exporter India",
    "international welding products",
  ],
  authors: [{ name: "Shree Gopala Enterprises" }],
  creator: "Shree Gopala Enterprises",
  publisher: "Shree Gopala Enterprises",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Shree Gopala Enterprises - RED EAGLE Brand Welding & Cutting Products",
    description:
      "Leading manufacturer and exporter of RED EAGLE BRAND welding and cutting products, industrial & medical gas regulators, cutting tools, and specialty alloys. ISO 9001-2015, CE & WHO-GMP Certified.",
    url: "https://www.shreegopala.com",
    siteName: "Shree Gopala Enterprises",
    images: [
      {
        url: "/assets/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Shree Gopala Enterprises - RED EAGLE Brand Welding & Cutting Products",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shree Gopala Enterprises - RED EAGLE Brand Welding & Cutting Products",
    description:
      "Leading manufacturer and exporter of RED EAGLE BRAND welding and cutting products. ISO 9001-2015, CE & WHO-GMP Certified.",
    images: ["/assets/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.shreegopala.com",
  },
  verification: {
    // Add Google Search Console verification when available
    // google: "your-google-verification-code",
  },
  category: "Manufacturing",
  classification: "Industrial Equipment",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/assets/logo.jpg", type: "image/jpeg", sizes: "512x512" },
    ],
    apple: [
      { url: "/assets/logo.jpg", sizes: "180x180", type: "image/jpeg" },
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>Shree Gopala Enterprises - RED EAGLE Brand Welding &amp; Cutting Products</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/assets/logo.jpg" type="image/jpeg" sizes="512x512" />
        <link rel="apple-touch-icon" href="/assets/logo.jpg" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Shree Gopala Enterprises",
                "alternateName": "Shree Gopala Enterprise",
                "url": "https://www.shreegopala.com",
                "logo": "https://www.shreegopala.com/assets/logo.jpg",
                "description": "Leading manufacturer and exporter of RED EAGLE BRAND welding and cutting products, industrial & medical gas regulators, cutting tools, and specialty alloys. ISO 9001-2015, CE & WHO-GMP Certified.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "G-32, New Dev Shree Plaza, T. P. Nagar, Baghpat Road",
                  "addressLocality": "Meerut City",
                  "addressRegion": "Uttar Pradesh",
                  "postalCode": "250002",
                  "addressCountry": "IN"
                },
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "telephone": "+91-121-4328707",
                    "contactType": "Customer Service",
                    "email": "info@shreegopala.com",
                    "availableLanguage": ["English", "Hindi"]
                  },
                  {
                    "@type": "ContactPoint",
                    "telephone": "+91-9897671442",
                    "contactType": "Sales",
                    "email": "info@shreegopala.com"
                  }
                ],
                "sameAs": [],
                "brand": {
                  "@type": "Brand",
                  "name": "RED EAGLE"
                },
                "areaServed": "Worldwide",
                "knowsAbout": [
                  "Welding Equipment",
                  "Cutting Tools",
                  "Gas Regulators",
                  "Industrial Equipment",
                  "Medical Gas Regulators",
                  "Specialty Alloys",
                  "Welding Consumables"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://www.shreegopala.com",
                "name": "Shree Gopala Enterprises",
                "image": "https://www.shreegopala.com/assets/logo.jpg",
                "description": "Manufacturer and exporter of RED EAGLE BRAND welding and cutting products, gas regulators, cutting tools, and specialty alloys.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "G-32, New Dev Shree Plaza, T. P. Nagar, Baghpat Road",
                  "addressLocality": "Meerut City",
                  "addressRegion": "Uttar Pradesh",
                  "postalCode": "250002",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "28.971169",
                  "longitude": "77.681234"
                },
                "url": "https://www.shreegopala.com",
                "telephone": "+91-121-4328707",
                "email": "info@shreegopala.com",
                "priceRange": "$$",
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Shree Gopala Enterprises",
                "url": "https://www.shreegopala.com",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://www.shreegopala.com/?s={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              }
            ]),
          }}
        />
      </head>
      <body className={`${geist.variable} ${exo.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
