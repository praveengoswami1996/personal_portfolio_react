import './NavBar.css';
import { logolight, logodark } from '../../assets';
import { Toggle } from '../../components';
import { themeContext } from '../../Context/Context';
import { useContext } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { state } = useContext(themeContext); 
  const darkMode = state.darkMode;

  return (
    <nav 
    className="app__navbar"
    style={{ background: darkMode ? '#333': '#fff'}}
    >
        
        <div className='app__navbar-logo'>
            <div className='app__navbar-logo_img'>
              {
                darkMode 
                ? <img src={logodark} alt="Website Logo"/>
                : <img src={logolight} alt="Website Logo"/>
              }
            </div>
            <Toggle />
        </div>

        <div className='app__navbar-navlinks'>
            <ul className='bigdevices_links'>
                <li><a href="#home">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#certifications">Certifications</a></li>
            </ul>
            
            <div className='app__navbar-navlinks_smalldevices'>
              <GiHamburgerMenu size={32} onClick={() => setToggleMenu(true)} />
              {
                toggleMenu &&
                <div className='overlay slide-top' style={{background: darkMode ? 'black': '#fff'}}>
                  <FaTimes size={32} onClick={() => setToggleMenu(false)}/>
                  <ul className='smalldevices-links'>
                    <li onClick={() => setToggleMenu(false)}><a href="#home">Home</a></li>
                    <li onClick={() => setToggleMenu(false)}><a href="#skills">Skills</a></li>
                    <li onClick={() => setToggleMenu(false)}><a href="#portfolio">Portfolio</a></li>
                    <li onClick={() => setToggleMenu(false)}><a href="#certifications">Certifications</a></li>
                  </ul>
                </div>
              }
            </div>

            <a href='#contact' className='nav_cta'>
              <button type="button" className='custom__button'>Contact</button>
            </a>           

        </div>

    </nav>
  )
}

export default NavBar;