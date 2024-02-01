import { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import profileImg from '../assets/images/BenProfile.jpg'

export default function AboutMe() {

  const { ref: aboutMeRef, inView: aboutMeInView } = useInView()

  return(
    <section className="screen" id='about-me-container'>
      <h2>About Me</h2>
      <div ref={aboutMeRef} className={`about-me-contents ${aboutMeInView ? 'animate-about-me' : ''}`}>
        <div className='playful'>
          <div className='image-wrap'>
            <img src={profileImg}/>
          </div>
          <div className='spotify-container'>
            <h3>Listen along with my coding playlist...</h3>
            <iframe style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/playlist/3PMblW80YDdbgh6bbfq9vC?utm_source=generator" width="100%" height="152" frameBorder="0"  allowfullscreen='' allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        </div>
        <div className='statement-skills'>
          <p>Brand statement</p>
          <article>
            <ul>
              <li>skills</li>
              <li>skills</li>
              <li>skills</li>
              <li>skills</li>
              <li>skills</li>
              <li>skills</li>
              <li>skills</li>
            </ul>
          </article>
          <p>Personal hobbies etc</p>
        </div>
      </div>
    </section>
  )
}