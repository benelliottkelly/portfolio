import { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact(){

  const [ onScreen, setOnScreen ] = useState(false)
  const { ref: contactRef, inView: contactInView } = useInView()

  useEffect(()=> {
    if (contactInView) {
      setOnScreen(true)
    }
  }, [contactInView])

  return (
    <section ref={contactRef} className="screen" id='contact-screen'>
      <h2>Contact</h2>
      <div className={`contact-details ${onScreen ? 'animate-contact' : ''}`}>
        <h3 id='email-link'><span id='email-icon'><MdOutlineEmail /></span>: <a href="mailto:benelliottkelly@gmail.com">benelliottkelly@gmail.com</a></h3>
        <h3 id='linkedin-link'><span id='linkedin-icon'><FaLinkedin /></span>: <a href='https://www.linkedin.com/in/benelliottkelly/' target='_blank'>LinkedIn </a></h3>
        <h3 id='github-link'><span id='github-icon'><FaGithub /></span>: <a href='https://github.com/benelliottkelly' target='_blank'>GitHub </a></h3>
      </div>
    </section>
  )
}