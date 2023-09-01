import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Specials from './components/Specials'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Footer from './components/Footer'
import {Route, Routes} from 'react-router-dom'
import ReservationForm from './components/ReservationForm'

const Homepage = () => {
  return(
    <>
      <Navbar/>
      <Hero/>
      <Specials/>
      <Testimonials/>
      <About/>
      <Footer/>
    </>
  );
}

const ReservationPage = () => {
  return(
    <div>
      <Navbar/>
      <ReservationForm/>
      <Footer/>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/reservations" element={<ReservationPage/>}/>
      </Routes>
    </div>
  )
}

export default App