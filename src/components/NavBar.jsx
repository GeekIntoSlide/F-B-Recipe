import React from 'react';

import './Navbar.css';
export default function NavBar() {
  return (
    <header className='header'>
       
        <div className='logo'>F<span> &</span> B Recipe</div>
        
        <div className='navLink'>
          <ul className='links'>
            <li>Home</li>
            <li>Profile</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
    </header>
  )
}
