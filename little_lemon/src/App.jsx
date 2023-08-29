import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Specials from './components/Specials'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Specials/>
      <Testimonials/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App