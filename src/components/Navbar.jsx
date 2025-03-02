import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {


    

  return (
    <>

    <nav>

    <div className='navbar' id='navdiv'>

    <div className='logo'>
    
    </div>

    <ul>

    <li>
    <NavLink to='/' className= {({isActive}) => isActive ? "activelink" : ""}>
        Home
    </NavLink>
    </li>

    <li>
    <NavLink to='/productions' className= {({isActive}) => isActive ? "activelink" : ""}>
        Productions
    </NavLink>
    </li>

   <li>
    <NavLink to='/about' className= {({isActive}) => isActive ? "activelink" : ""}>
        About
    </NavLink>
    </li>

   <li>
    <NavLink to='/contact' className={({isActive}) => isActive ? "activelink" : ""}>
        Contact
    </NavLink>
    </li>

    </ul>

    </div>

    </nav>

</>
  
  )
}

export default Navbar