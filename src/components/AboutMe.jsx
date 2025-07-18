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
import awsCloudwatchLogo from '../assets/images/Logos/aws_cloudwatch.png'
import awsEC2Logo from '../assets/images/Logos/aws_ec2.png'
import awsECSLogo from '../assets/images/Logos/aws_ecs.png'
import awsS3Logo from '../assets/images/Logos/aws_s3.jpg'
import awsLambdaLogo from '../assets/images/Logos/aws_lambda.png'
import awsStepFunctionLogo from '../assets/images/Logos/aws_step_function.jpg'
import awsDynamoDBLogo from '../assets/images/Logos/aws_dynamodb.png'
import dockerLogo from '../assets/images/Logos/docker.png'
import gitlabLogo from '../assets/images/Logos/gitlab.png'
import golangLogo from '../assets/images/Logos/golang.png'
import groovyLogo from '../assets/images/Logos/groovy.png'
import jiraLogo from '../assets/images/Logos/jira.png'
import splunkLogo from '../assets/images/Logos/splunk.png'
import svelteLogo from '../assets/images/Logos/svelte.png'
import terraformLogo from '../assets/images/Logos/terraform.png'
import typescriptLogo from '../assets/images/Logos/typescript.png'
import yamlLogo from '../assets/images/Logos/yaml.png'

// hobbies photos
import beholder from '../assets/images/Hobbies/beholder.jpg'
import cheetah from '../assets/images/Hobbies/cheetah.jpg'
import kobold from '../assets/images/Hobbies/kobold.jpg'
import osprey from '../assets/images/Hobbies/osprey.jpg'
import phade from '../assets/images/Hobbies/phade.jpg'
import redPandas from '../assets/images/Hobbies/red_pandas.jpg'

import { FaInstagramSquare } from "react-icons/fa";

export default function AboutMe() {

  const [onScreen, setOnScreen] = useState(false)
  const { ref: aboutMeRef, inView: aboutMeInView } = useInView()
  const [skillsOnScreen, setSkillsOnScreen] = useState(false)
  const { ref: skillsRef, inView: skillsInView } = useInView()
  const [bottomOnScreen, setBottomOnScreen] = useState(false)
  const { ref: aboutMeBottomRef, inView: aboutMeBottomInView } = useInView()

  useEffect(() => {
    if (aboutMeInView) {
      setOnScreen(true)
    }
  }, [aboutMeInView])

  useEffect(() => {
    if (aboutMeBottomInView) {
      setBottomOnScreen(true)
    }
  }, [aboutMeBottomInView])

  useEffect(() => {
    if (skillsInView) {
      setSkillsOnScreen(true)
    }
  }, [skillsInView])

  return (
    <section className="screen" id='about-me-screen'>
      <h2>About Me</h2>
      <div ref={aboutMeRef} className={`about-me-contents ${onScreen ? 'animate-about-me' : ''}`}>
        <div className='about-me-top'>
          <div className='playful'>
            <div className='image-wrap'>
              <img src={profileImg} alt='A picture of me, a handsome devil with a beard and a mohawk'/>
            </div>
            <div className='spotify-container'>
              <h3>Listen along to the music I code to...</h3>
              <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/3PMblW80YDdbgh6bbfq9vC?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen='' allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </div>
          <div className='statement-skills'>
            <div className='brand-statement'>
              <p>As a former senior environmental consultant, I discovered my passion for software engineering while observing my partner code. This led to me landing my first software engineering role with Adarma Security, where I greatly improved on my technical skills, learnt a host of new ones and gained valuable experience of working within the tech industry.</p>
              <p>A board games enthusiast, I find joy in problem-solving, strategy and social interaction, drawing parallels between interpreting complex game rules and coding concepts. A natural team player and mentor in previous roles, I'm eager to develop my skills further, embrace new challenges, and contribute positively to a collaborative team environment.</p>
            </div>
          </div>
        </div>
        <div>
          <article ref={skillsRef} className={`skills-container ${skillsOnScreen ? 'animate-skills-container' : ''}`}>
            <h2 id='skills-header'>Skills</h2>
            <ul>
              <li className='single-skill' style={{ backgroundImage: `url(${htmlLogo})`, '--i': 1 }}><p className='skill-text'>HTML</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${cssLogo})`, '--i': 2 }}><p className='skill-text'>CSS</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${javascriptLogo})`, '--i': 3 }}><p className='skill-text'>JavaScript</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${typescriptLogo})`, '--i': 4 }}><p className='skill-text'>Typescript</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${sassLogo})`, '--i': 5 }}><p className='skill-text'>Sass</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${reactLogo})`, '--i': 6 }}><p className='skill-text'>React</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${svelteLogo})`, '--i': 7 }}><p className='skill-text'>Svelte</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${bootstrapLogo})`, '--i': 8 }}><p className='skill-text'>Bootstrap</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${viteLogo})`, '--i': 9 }}><p className='skill-text'>Vite</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${pythonLogo})`, '--i': 10 }}><p className='skill-text'>Python</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${golangLogo})`, '--i': 11 }}><p className='skill-text'>Go</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${yamlLogo})`, '--i': 12 }}><p className='skill-text'>YAML</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${groovyLogo})`, '--i': 13 }}><p className='skill-text'>Groovy</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${djangoLogo})`, '--i': 14 }}><p className='skill-text'>Django</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${djangoRestLogo})`, '--i': 15 }}><p className='skill-text'>Django REST Framework</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${postgresqlLogo})`, '--i': 16 }}><p className='skill-text'>PostgreSQL</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${mongodbLogo})`, '--i': 17 }}><p className='skill-text'>MongoDB</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${mongooseLogo})`, '--i': 18 }}><p className='skill-text'>Mongoose</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${expressLogo})`, '--i': 19 }}><p className='skill-text'>Express</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${nodejsLogo})`, '--i': 20 }}><p className='skill-text'>Node.js</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${jsonwebtokenLogo})`, '--i': 21 }}><p className='skill-text'>JSON Web Token</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${bcryptLogo})`, '--i': 22 }}><p className='skill-text'>bcrypt</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${githubLogo})`, '--i': 23 }}><p className='skill-text'>GitHub</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${gitlabLogo})`, '--i': 24 }}><p className='skill-text'>GitLab</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${awsLambdaLogo})`, '--i': 25 }}><p className='skill-text'>AWS Lambda</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${awsEC2Logo})`, '--i': 26 }}><p className='skill-text'>AWS EC2</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${awsECSLogo})`, '--i': 27 }}><p className='skill-text'>AWS ECS</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${awsStepFunctionLogo})`, '--i': 28 }}><p className='skill-text'>AWS Step Function</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${awsS3Logo})`, '--i': 29 }}><p className='skill-text'>AWS S3</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${awsEC2Logo})`, '--i': 30 }}><p className='skill-text'>AWS EC2</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${awsDynamoDBLogo})`, '--i': 31 }}><p className='skill-text'>AWS DynamoDB</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${awsCloudwatchLogo})`, '--i': 32 }}><p className='skill-text'>AWS Cloudwatch</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${dockerLogo})`, '--i': 33 }}><p className='skill-text'>Docker</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${terraformLogo})`, '--i': 34 }}><p className='skill-text'>Terraform</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${splunkLogo})`, '--i': 35 }}><p className='skill-text'>Splunk</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${jiraLogo})`, '--i': 36 }}><p className='skill-text'>Jira</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${neonLogo})`, '--i': 37 }}><p className='skill-text'>Neon</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${cloudinaryLogo})`, '--i': 38 }}><p className='skill-text'>Cloudinary</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${netlifyLogo})`, '--i': 39 }}><p className='skill-text'>Netlify</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${herokuLogo})`, '--i': 40 }}><p className='skill-text'>Heroku</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${insomniaLogo})`, '--i': 41 }}><p className='skill-text'>Insomnia</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${pipenvLogo})`, '--i': 42 }}><p className='skill-text'>Pipenv</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${axiosLogo})`, '--i': 43 }}><p className='skill-text'>Axios</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${photoshopLogo})`, '--i': 44 }}><p className='skill-text'>Photoshop</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${inkscapeLogo})`, '--i': 45 }}><p className='skill-text'>Inkscape</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${lightroomLogo})`, '--i': 46 }}><p className='skill-text'>Lightroom</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${arcgisLogo})`, '--i': 47 }}><p className='skill-text'>ArcGIS</p></li>
              <li className='single-skill' style={{ backgroundImage: `url(${qgisLogo})`, '--i': 48 }}><p className='skill-text'>QGIS</p></li>
            </ul>
          </article>
          <div ref={aboutMeBottomRef} className={`hobbies-container ${bottomOnScreen ? 'animate-hobbies-container' : ''}`} >
            <h2>Hobbies</h2>
            <p>I really enjoy playing <span className='bold'>board games</span> and TTRPGs which involve creativity, improvisation and team communication. This has also evolved to include <span className='bold'>miniature painting</span> which has taught me the value of a planned patient approach when taking on a project as well as providing an excellent creative outlet.</p>
            <p>You can find pictures of my miniatures here: <a href='https://www.instagram.com/wee_gerblins?igsh=bDU1Mm93ZWxtb3Nh' target='_blank'><FaInstagramSquare /> wee_gerblins</a></p>
            <div className='minis-pictures'>
              <img className='hobby-picture' src={beholder} alt={`A picture of a miniature beholder that I painted, it's a big scaley circle with one big eye in the center and lots of eye stalks coming off the top`}/>
              <img className='hobby-picture' src={kobold} alt={`A picture of a kobold miniature I painted. It's got fake wings on it's back and is casting a fire ball`}/>
              <img className='hobby-picture' src={phade} alt={`A picture of a tiefling miniature I painted. She has small horns and is holding a staff with a big eye on the top`}/>
            </div>
            <p>I love <span className='bold'>video games</span>, both on console and PC. I tend to lean towards RPGs or strategy games because I either love immersing myself in a story or getting that rewarding feeling of pulling off a complex game plan.</p>
            <p>I am a big outdoors person and have a passion for <span className='bold'>wildlife photography</span> and <span className='bold'>hiking</span>. One of my most recent expedition involved crawling through 1-2 feet of snow in the Scottish mountains to photograph mountain hare.</p>
            <p>You can find some of my wildlife photography here: <a href='https://www.instagram.com/bkellywildlife?igsh=cWZrYjBhMXg5Y2pm' target='_blank'><FaInstagramSquare /> bkellywildlife </a></p>
            <div className='photography-pictures'>
              <img className='hobby-picture' src={redPandas} alt={`A picture of three red pandas all huddled together in the snow`}/>
              <img className='hobby-picture' src={cheetah} alt={`A picture of a baby cheetah, they are super cute`}/>
              <img className='hobby-picture' src={osprey} alt={`A picture of an osprey flying overhead and looking down into the camera`}/>
            </div>
            <p>I am a big <span className='bold'>coffee</span> drinker, I bought a proper coffee machine during the 2020 lockdown and it was one of the best purchases I've made to this day!</p>
            <p>I also dabble in playing <span className='bold'>guitar</span> and am a huge <span className='bold'>metal music</span> enthusiast.</p>
            <p>As a stats nerd I love playing <span className='bold'>fantasy NFL</span> but please don't ask me about my teams unless you want to be bored to death.</p>
            <p>My other hobbies include <span className='bold'>individual and team sports</span> such as snowboarding, kayaking and rugby all of which have taught me the importance of teamwork, overcoming obstacles and challenges, and the perseverance required to reach a competent skill level in each activity.</p>
          </div>
        </div>
      </div>
    </section>
  )
}