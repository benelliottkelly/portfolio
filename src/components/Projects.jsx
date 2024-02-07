import { v4 as uuidv4 } from 'uuid'
import { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import boardGameImg from '../assets/images/BoardGameLibrary.gif'
import pacManImg from '../assets/images/DnDPacMan.gif'
import gotImg from '../assets/images/GOTFullstack.gif'
import heroesImg from '../assets/images/HeroesandVillains.gif'

export default function Projects() {

  const [onScreen, setOnScreen] = useState(false)
  const { ref: ProjectsRef, inView: ProjectsInView } = useInView()

  useEffect(() => {
    if (ProjectsInView) {
      setOnScreen(true)
    }
  }, [ProjectsInView])

  // List of projects that can be added to using new Project objects
  let listOfProjects = []

  class Project {
    constructor(name, projectLink, readMeLink, picture, description, techUsed) {
      this.name = name
      this.projectLink = projectLink
      this.readMeLink = readMeLink
      this.picture = picture
      this.description = description
      this.techUsed = techUsed
    }
  }

  // * Add new projects under here using the Project class and then push it to listOfProjects

  const boardGames = new Project(
    'The Board Game Library',
    'https://board-games-library-babd93547dd0.herokuapp.com/',
    'https://github.com/benelliottkelly/Board_Games/blob/main/README.md',
    boardGameImg,
    'This was the final project of my software engineering immersive bootcamp with General Assembly. The project is a full stack application where users can create profiles and add/edit or delete board games from a library. The users can also add these existing games to a list of their own personally owned games.',
    ['Python', 'Django', 'React', 'JavaScript', 'Bootstrap']
  )
  listOfProjects.push(boardGames)

  const gameOfThrones = new Project(
    'Game of Thrones Compendium',
    'https://game-of-thrones-fullstack-9f43f1202e82.herokuapp.com/',
    'https://github.com/benelliottkelly/Game_Of_Thrones_Fullstack_Project/blob/main/README.md',
    gotImg,
    'This was a group project for General Assembly in which I worked with a team of two others to create a full stack Game of Thrones Compendium App. My key contributions were an interactive map where users can click on points of the map to navigate to info pages about those places as well as individual pages for characters, places and houses, all of which have internal links to subjects related to them.',
    ['Express', 'MongoDB', 'React', 'JavaScript', 'Bootstrap']
  )
  listOfProjects.push(gameOfThrones)

  const heroesAndVillains = new Project(
    'Heroes and Villains',
    'https://heroesandvillainsapi.netlify.app/',
    'https://github.com/benelliottkelly/Super-Heroes-Search/blob/main/README.md',
    heroesImg,
    'This was a pair project for General Assembly where my partner and I took an extrated and displayed information from an external API. We chose a heroes and villains API and created an index page to look like a comic book and single detailed pages to look like top trump cards.',
    ['HTML', 'SCSS', 'JavaScript', 'React']
  )
  listOfProjects.push(heroesAndVillains)

  const pacman = new Project(
    'DnD Pacman',
    'https://benelliottkelly.github.io/DnD-themed-PacMan/',
    'https://github.com/benelliottkelly/DnD-themed-PacMan/blob/main/README.md',
    pacManImg,
    'This was my first project during my time learning at General Assembly and was undertaken after only 3 weeks of learning to code. The project brief was to create a grid based game. I chose to make a D&D themed Pac-man.',
    ['HTML', 'CSS', 'JavaScript']
  )
  listOfProjects.push(pacman)

  return (
    <section className="screen" id='projects-screen'>
      <h2>Projects</h2>
      <section ref={ProjectsRef} className={`projects-container ${onScreen ? 'animate-projects' : ''}`}>
        {listOfProjects.map((project) => {
          return <div className={`individual-project-container ${onScreen ? 'animate-container' : ''}`} key={uuidv4()}>
              <h3>{project.name}</h3>
              <img className='project-image' src={project.picture} />
              <div className='project-links'>
                <a href={project.projectLink} target='_blank'>Visit site</a>
                <a href={project.readMeLink} target='_blank'>Go to ReadMe</a>
              </div>
              <p>{project.description}</p>
              <h4>Main skills</h4>
              <ul>
                {
                  project.techUsed.map((tech) => {
                    return <li key={uuidv4()}>{tech}</li>
                  })
                }
              </ul>
          </div>
        })}
      </section>
    </section>
  )
}