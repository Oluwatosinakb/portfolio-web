import Hero from '../../components/hero'
import About from '../../components/about'
import Services from '../../components/services'
import Portfolio from '../../components/porfolio'
import Footer from '../../components/footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Footer />
    </main>
  )
}