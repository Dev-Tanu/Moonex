import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const neueMachina = localFont({
  src: '../public/fonts/NeueMachina-Regular.woff2',
  variable: '--font-neue-machina',
  display: 'swap',
})

const raleway = localFont({
  src: '../public/fonts/raleway.regular.ttf',
  variable: '--font-raleway',
  display: 'swap',
})

export const metadata = {
  title: 'MoonEX - Trusted Multi-Chain DEX Platform',
  description: 'Trade, earn, and own crypto on the all-in-one multi-chain DEX',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${neueMachina.variable} ${raleway.variable} font-sans min-h-screen bg-[#001219] flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

