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
        <div className='nav-logo'>
          <img className='logo-img' src={logo} alt="logo rick and morty" />
        </div>
        <ul className='nav-ul'>
          
            <li className='ul-li'><FaUsers /> Personajes</li>
      
          <li className='ul-li'><FaGlobeAmericas /> Lugares</li>
          <li className='ul-li'><BsFillCollectionPlayFill /> Episodios</li>
        </ul>
      </nav>
    </header>
  )
}

export default Menu