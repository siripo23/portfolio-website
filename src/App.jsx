import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhatIDo from './components/WhatIDo'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import StarField from './components/StarField'

function App() {
  return (
    <div className="relative">
      <StarField />
      <Navbar />
      <Hero />
      <About />
      <WhatIDo />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
