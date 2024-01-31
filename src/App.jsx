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
  
  function scrollEvent(e) {
    console.log(e)
  }

  return (
    <>
      <Nav />
      <main>
      <Element className='pseudo-page' id='hero'>
        <Hero />
      </Element>
      <Element className='pseudo-page' id='about-me'>
        <AboutMe />
      </Element>
      <Element className='pseudo-page' id='projects'>
        <Projects />
      </Element>
      <Element className='pseudo-page' id='contact'>
        <Contact />
      </Element>
      <Footer />
      </main>
    </>
  )
}

export default App
