import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Specials from './components/Specials'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Specials/>
      <Testimonials/>
    </div>
  )
}

export default App