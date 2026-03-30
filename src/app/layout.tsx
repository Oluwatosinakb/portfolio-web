import './globals.css'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import Navbar from '../../components/navbar'
import Hero from '../../components/hero'
import About from '../../components/about'
import Services from '../../components/services'
import Portfolio from '../../components/porfolio'
import Footer from '../../components/footer'
import SmoothScroll from '../../components/smooth-scroll'

const jetBrains_Mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400'], 
})

export const metadata: Metadata = {
  title: 'Oluwatosin | Frontend Developer Portfolio',
  description: 'Portfolio website of Oluwatosin, a passionate frontend developer.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body
        className={`${jetBrains_Mono.className}
          bg-white text-black
          transition-colors duration-300`}
      >
        <SmoothScroll>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Footer />
          {children}
        </main>
        </SmoothScroll>
      </body>
    </html>
  )
}