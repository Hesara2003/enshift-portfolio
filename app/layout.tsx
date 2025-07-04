import type React from "react"
import { Orbitron, Rajdhani } from "next/font/google"
import type { Metadata } from "next"
import "./globals.css"

// F1 Turbo alternative - Orbitron has a futuristic, racing feel
const f1Turbo = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-f1-turbo",
  display: "swap",
})

// F1 Torque alternative - Rajdhani has a modern, sporty feel
const f1Torque = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-f1-torque",
  display: "swap",
})

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${f1Turbo.variable} ${f1Torque.variable}`}>
      <body className={f1Turbo.className}>{children}</body>
    </html>
  )
}
