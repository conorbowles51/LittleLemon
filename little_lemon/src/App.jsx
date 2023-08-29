import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Specials from './components/Specials'
import Testimonials from './components/Testimonials'
import About from './components/About'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Specials/>
      <Testimonials/>
      <About/>
    </div>
  )
}

export default App