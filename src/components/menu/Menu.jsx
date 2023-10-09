import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'
import '../../styles/Menu.css'
import { FaUsers } from 'react-icons/fa';
import { FaGlobeAmericas } from 'react-icons/fa';
import { BsFillCollectionPlayFill } from 'react-icons/bs';


const Menu = () => {
  return (
    <header className='menu-header'>
      <nav className='header-nav'>
        <ul className='nav-ul'>
        <li className='nav-logo'>
          <img className='logo-img' src={logo} alt="logo rick and morty" />
        </li>
          <Link to="/" className='ul-link'>
             <li className='link-li'><FaUsers /> Personajes</li> 
          </Link>
          <Link to="/places" className='ul-link'>
            <li className='link-li'><FaGlobeAmericas /> Lugares</li> 
          </Link>
          <Link to="/episodes" className='ul-link'>
            <li className='link-li'><BsFillCollectionPlayFill /> Episodios</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Menu