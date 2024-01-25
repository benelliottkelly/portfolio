import { Link, Element, animateScroll as scroll } from 'react-scroll';

export default function Nav() {
  return (
    <header>
      <Link to='#'>Scroll to top</Link>
      <div className='scroll-buttons'>
        <Link to='#'>About Me</Link>
        <Link to='#'>Projects</Link>
        <Link to='#'>Contact</Link>
      </div>
    </header>
  )
}