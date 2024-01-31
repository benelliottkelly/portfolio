import { useState } from 'react'
import profileImg from '../assets/images/BenProfile.jpg'

export default function AboutMe() {

  // const [ onScreen, setOnScreen ] = useState(false)

  // function isInViewPort() {
  //   const aboutMeScreen = document.querySelector('section#about-me')
  //   const rect = aboutMeScreen.getBoundingClientRect()
  //   // console.log(rect)
  //   console.log('innerwidth', window.innerWidth)
  //   console.log('innerheight', window.innerHeight)
  //   if (
  //     parseInt(rect.top) >= 0 &&
  //     // parseInt(rect.left) >= 0 &&
  //     parseInt(rect.bottom) <= (parseInt(window.innerHeight) || parseInt(document.documentElement.clientHeight)) // &&
  //     // parseInt(rect.right) <= (parseInt(window.innerWidth) || parseInt(document.documentElement.clientWidth))
  //   ) {
  //     setOnScreen(true)
  //   } else {
  //     setOnScreen(false)
  //   }
  // }

  // document.addEventListener('scroll', isInViewPort)

  return(
    <section className="screen" id='about-me'>
      <h2>About Me</h2>
      <div className="about-me-contents">
        <div className='playful'>
          <img src={profileImg} />
          <div className='spotify-container'>
            <h3>Listen along with my coding playlist...</h3>
            <iframe style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/playlist/3PMblW80YDdbgh6bbfq9vC?utm_source=generator" width="100%" height="152" frameBorder="0"  allowfullscreen='' allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        </div>
        <div>
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