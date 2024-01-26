import { Link, Element, animateScroll as scroll } from 'react-scroll'
import Contact from './Contact'

export default function Nav() {
  return (
    <header>
      <div className='scroll-buttons'>
        <Link to='hero' offset={-150} spy={true} smooth={true} duration={500} className='scroll-link' id='home-link' activeClass='active-scroll-link'>Scroll to top</Link>
      </div>
      <div className='scroll-buttons'>
        <Link to='about-me' offset={-150} spy={true} smooth={true} duration={300} className='scroll-link' activeClass='active-scroll-link'>About Me</Link>
        <Link to='projects' offset={-150} spy={true} smooth={true} duration={300} className='scroll-link' activeClass='active-scroll-link'>Projects</Link>
        <Link to='contact' offset={-150} spy={true} smooth={true} duration={300} className='scroll-link' activeClass='active-scroll-link'>Contact</Link>
      </div>
    </header>
  )
}