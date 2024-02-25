import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Skills from './Component/Skills/Skills'
import Services from './Component/Services/Services'

function App() {
 

  return (
    <>
      <Header />
      
      <main className='main'>
          <Home />
          <About />
          <Skills />
          <Services />
      </main>
    </>
  )
}

export default App
