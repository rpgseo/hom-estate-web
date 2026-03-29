import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Cities from './components/Cities'
import CtaBanner from './components/CtaBanner'
import FlexLiving from './components/FlexLiving'
import Freedom from './components/Freedom'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Cities />
        <CtaBanner />
        <FlexLiving />
        <Freedom />
      </main>
      <Footer />
    </>
  )
}

export default App
