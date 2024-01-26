import { useState } from 'react'
import { Element } from 'react-scroll'
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
      <main>
      <Element id='hero'>
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
