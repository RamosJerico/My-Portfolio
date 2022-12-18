import React, {useState} from 'react'
import './styles/Navbar.css'
import { Link } from 'react-router-dom';
import {FaTimes, FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{color: '#fff'}}>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='nav-link-logo' onClick={closeMobileMenu}>
              <img src='JRLogowhite.png' alt='logo' className='img-logo'/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes/> : <FaBars/>}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/gallery' className='nav-link' onClick={closeMobileMenu}>Gallery</Link>
              </li>
              <li className='nav-item'>
                <Link to='/portfolio' className='nav-link' onClick={closeMobileMenu}>Portfolio</Link>
              </li>
              <li className='nav-item'>
                <Link to='/education' className='nav-link' onClick={closeMobileMenu}>Education</Link>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  )
}
export default Navbar;