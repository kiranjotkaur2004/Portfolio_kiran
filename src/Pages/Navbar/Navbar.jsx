import React, { useState,useEffect } from 'react'
import './Navbar.css'
import '../../Components/steve assets/data'

import { links } from '../../Components/steve assets/data'
import {NavLink} from 'react-router-dom'




const Navbar = () => {
  const[showMenu,setShowMenu] = useState(false);

// const toggleMenu=()=>{
//   setShowMenu(prev=>!prev);
// }

useEffect(() => {
  if (showMenu) {
    document.body.classList.add('menu-open');
  } else {
    document.body.classList.remove('menu-open');
  }
}, [showMenu]);


  return (
   <nav className="nav">
    <div className={`${showMenu ? 'nav-menu show-menu': 'nav-menu'}`}>
      <ul className='nav-list'>
       {links.map(({name,icon,path},index)=>{
        return(
          <li className='nav-icon' key={index}>
            <NavLink to={path} className={({isActive}) => isActive ? 'nav-link active-nav': 'nav-link'} onClick={()=>setShowMenu(!showMenu)}>
            {icon}
             <h3 className='nav-name'>{name}</h3>
            </NavLink>
          </li>
        )
       })}
      </ul>
    </div>
    <div className={`nav-toggle ${showMenu ? 'animate-toggle' : ''}`} onClick={() => setShowMenu(!showMenu)}>

      <span></span>
      <span></span>
      <span></span>
    
    </div>
   </nav>
  )
}

export default Navbar