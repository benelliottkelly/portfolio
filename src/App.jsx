import { useState, useRef } from 'react'
import { Element } from 'react-scroll'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  
  const heroRef = useRef()

  console.log(heroRef.current)

  return (
    <>
      <Nav />
      <main>
      <Element id='hero' ref={heroRef}>
        <Hero />
      </Element>
      <Element id='about-me'>
        <AboutMe />
      </Element>
      <Element id='projects'>
        <Projects />
      </Element>
      <Element id='contact'>
        <Contact />
      </Element>
      <Footer />
      </main>
    </>
  )
}

export default App
