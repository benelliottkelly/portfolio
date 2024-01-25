import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Nav />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
