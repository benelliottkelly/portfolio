import { Link, Element, animateScroll as scroll } from 'react-scroll'
import Contact from './Contact'

export default function Nav() {
  return (
    <header>
      <Link to='hero' spy={true} smooth={true} duration={500} className='scroll-link' activeClass='active-scroll-link'>Scroll to top</Link>
      <div className='scroll-buttons'>
        <Link to='about-me' spy={true} smooth={true} duration={500} className='scroll-link' activeClass='active-scroll-link'>About Me</Link>
        <Link to='projects' spy={true} smooth={true} duration={500} className='scroll-link' activeClass='active-scroll-link'>Projects</Link>
        <Link to='contact' spy={true} smooth={true} duration={500} className='scroll-link' activeClass='active-scroll-link'>Contact</Link>
      </div>
    </header>
  )
}