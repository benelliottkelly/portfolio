import { Link, animateScroll as scroll } from 'react-scroll'
import { slide as Menu } from 'react-burger-menu' 
import logo from '../assets/images/osprey-logo.png'

export default function Nav() {

  function handleSidebarLink() {
    // When burger menu link is clicked also click the sidebar close button
    document.getElementById('react-burger-cross-btn').click()
  }

  return (
    <header>
      <div className='scroll-buttons'>
        <Link to='hero' offset={-150} spy={true} smooth={true} duration={500} className='scroll-link' id='home-link'>Ben Kelly</Link>
        <Link to='hero' offset={-150} spy={true} smooth={true} duration={500} id='home-icon'><img src={logo} /></Link>
      </div>
      <div>
        <div className='scroll-buttons' id='nav-right'>
          <Link to='about-me' offset={-150} spy={true} smooth={true} duration={300} className='scroll-link'>About Me</Link>
          <Link to='projects' offset={-150} spy={true} smooth={true} duration={300} className='scroll-link'>Projects</Link>
          <Link to='contact' offset={-150} spy={true} smooth={true} duration={300} className='scroll-link'>Contact</Link>
        </div>
        <Menu right>
          <Link to='about-me' onClick={handleSidebarLink} offset={-150} spy={true} smooth={true} duration={300} className='menu-link'>About Me</Link>
          <Link to='projects' onClick={handleSidebarLink} offset={-150} spy={true} smooth={true} duration={300} className='menu-link'>Projects</Link>
          <Link to='contact' onClick={handleSidebarLink} offset={-150} spy={true} smooth={true} duration={300} className='menu-link'>Contact</Link>
        </Menu>
      </div>
    </header>
  )
}