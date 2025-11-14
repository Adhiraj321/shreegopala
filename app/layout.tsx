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
  title: "Shree Gopala Enterprise",
  description:
    "Premium welding and cutting products manufacturer and exporter - RED EAGLE BRAND welding equipment, industrial & medical gas regulators, cutting tools, and specialty alloys. ISO 9001-2015, CE & WHO-GMP Certified.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
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
      </head>
      <body className={`${geist.variable} ${exo.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
