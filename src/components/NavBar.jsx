import React from 'react';
import { useNavigate } from 'react-router';

import './Navbar.css';
export default function NavBar() {
  const navigate=useNavigate();
  return (
    <header className='header'>
       
        <div className='logo'>F<span> &</span> B Recipe</div>
        
        <div className='navLink'>
          <ul className='links'>
            <li onClick={()=>navigate("/")}>Home</li>
            <li onClick={()=>navigate("/blog")}>Blog</li>
            <li onClick={()=>navigate("/contact")}>Contact</li>
            <li onClick={()=>navigate("/signin")}>Sign-In</li>
          </ul>
        </div>
    </header>
  )
}
