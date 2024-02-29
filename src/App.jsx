import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Skills from './Component/Skills/Skills'
import Services from './Component/Services/Services'
import Qualifecation from './Component/Qalifiaction/Qualifecation'
import Testimonial from './Component/Testimonial/Testimonial'
import Contact from './Component/Contact/Contact'
import Foter from './Component/Fotter/Foter'
import Scroleup from './Component/Scrollup/Scroleup'

function App() {
 

  return (
    <>
      <Header />
      
      <main className='main'>
          <Home />
          <About />
          <Skills />
          <Services />
          <Qualifecation />
          <Testimonial />
          <Contact />
      </main>
      <Foter />
      <Scroleup />
    </>
  )
}

export default App
