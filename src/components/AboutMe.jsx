import { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import profileImg from '../assets/images/BenProfile.jpg'
import arcgisLogo from '../assets/images/Logos/arcgis.png'
import axiosLogo from '../assets/images/Logos/axios.png'
import bcryptLogo from '../assets/images/Logos/bcrypt.png'
import bootstrapLogo from '../assets/images/Logos/bootstrap.png'
import cloudinaryLogo from '../assets/images/Logos/cloudinary.png'
import cssLogo from '../assets/images/Logos/css.png'
import djangoRestLogo from '../assets/images/Logos/django-rest-framework.png'
import djangoLogo from '../assets/images/Logos/django.png'
import expressLogo from '../assets/images/Logos/express.png'
import githubLogo from '../assets/images/Logos/github.png'
import herokuLogo from '../assets/images/Logos/heroku.png'
import htmlLogo from '../assets/images/Logos/html.png'
import inkscapeLogo from '../assets/images/Logos/inkscape.png'
import insomniaLogo from '../assets/images/Logos/insomnia.png'
import javascriptLogo from '../assets/images/Logos/javascript.png'
import jsonwebtokenLogo from '../assets/images/Logos/jsonwebtoken.png'
import lightroomLogo from '../assets/images/Logos/lightroom.png'
import mongodbLogo from '../assets/images/Logos/mongodb.png'
import mongooseLogo from '../assets/images/Logos/mongoose.png'
import neonLogo from '../assets/images/Logos/neon.png'
import netlifyLogo from '../assets/images/Logos/netlify.png'
import nodejsLogo from '../assets/images/Logos/nodejs.png'
import photoshopLogo from '../assets/images/Logos/photoshop.png'
import pipenvLogo from '../assets/images/Logos/pipenv.jpg'
import postgresqlLogo from '../assets/images/Logos/postgresql.png'
import pythonLogo from '../assets/images/Logos/python.png'
import qgisLogo from '../assets/images/Logos/qgis.png'
import reactLogo from '../assets/images/Logos/react.png'
import sassLogo from '../assets/images/Logos/sass.png'
import viteLogo from '../assets/images/Logos/vite.png'

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
            <h3>Listen along to the music I code to...</h3>
            <iframe style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/playlist/3PMblW80YDdbgh6bbfq9vC?utm_source=generator" width="100%" height="152" frameBorder="0"  allowfullscreen='' allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        </div>
        <div className='statement-skills'>
          <p>As a former senior environmental consultant, I discovered my passion for software development while observing my partner code. This led to me pursuing a software engineering bootcamp at General Assembly, determined to learn the skills!</p>
          <p>A board games enthusiast, I find joy in problem-solving, strategy and social interaction, drawing parallels between interpreting complex game rules and coding concepts. A natural team player and mentor in previous roles, I'm eager to develop my skills further, embrace new challenges, and contribute positively to a collaborative team environment.</p>
          <article>
            <ul>
              <li className='single-skill' style={{ backgroundImage: `url(${htmlLogo})`, '--i': 1 }}><p className='skill-text'>HTML</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${cssLogo})`, '--i': 2 }}><p className='skill-text'>CSS</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${javascriptLogo})`, '--i': 3 }}><p className='skill-text'>JavaScript</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${sassLogo})`, '--i': 4}}><p className='skill-text'>Sass</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${reactLogo})`, '--i': 5 }}><p className='skill-text'>React</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${bootstrapLogo})`, '--i': 6 }}><p className='skill-text'>Bootstrap</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${viteLogo})`, '--i': 7 }}><p className='skill-text'>Vite</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${pythonLogo})`, '--i': 8 }}><p className='skill-text'>Python</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${djangoLogo})`, '--i': 9 }}><p className='skill-text'>Django</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${djangoRestLogo})`, '--i': 10 }}><p className='skill-text'>Django REST Framework</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${postgresqlLogo})`, '--i': 11 }}><p className='skill-text'>PostgreSQL</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${mongodbLogo})`, '--i': 12 }}><p className='skill-text'>MongoDB</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${mongooseLogo})` , '--i': 13}}><p className='skill-text'>Mongoose</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${expressLogo})` , '--i': 14}}><p className='skill-text'>Express</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${nodejsLogo})`, '--i': 15 }}><p className='skill-text'>Node.js</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${jsonwebtokenLogo})`, '--i': 16 }}><p className='skill-text'>JSON Web Token</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${bcryptLogo})`, '--i': 17 }}><p className='skill-text'>bcrypt</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${githubLogo})`, '--i': 18 }}><p className='skill-text'>GitHub</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${neonLogo})`, '--i': 19 }}><p className='skill-text'>Neon</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${cloudinaryLogo})`, '--i': 20 }}><p className='skill-text'>Cloudinary</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${netlifyLogo})`, '--i': 21 }}><p className='skill-text'>Netlify</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${herokuLogo})`, '--i': 22 }}><p className='skill-text'>Heroku</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${insomniaLogo})`, '--i': 23 }}><p className='skill-text'>Insomnia</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${pipenvLogo})`, '--i': 24 }}><p className='skill-text'>Pipenv</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${axiosLogo})`, '--i': 25 }}><p className='skill-text'>Axios</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${photoshopLogo})`, '--i': 26 }}><p className='skill-text'>Photoshop</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${inkscapeLogo})`, '--i': 27 }}><p className='skill-text'>Inkscape</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${lightroomLogo})`, '--i': 28 }}><p className='skill-text'>Lightroom</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${arcgisLogo})`, '--i': 29 }}><p className='skill-text'>ArcGIS</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${qgisLogo})`, '--i': 30 }}><p className='skill-text'>QGIS</p></li>
            </ul>
          </article>
          <p>Personal hobbies etc</p>
        </div>
      </div>
    </section>
  )
}