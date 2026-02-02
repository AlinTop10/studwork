import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';

export default function Header() {
  return (
    <header>
        <div className='header-top'>
            <span className='logo'>Studwork.ro</span>
            <nav>
              <ul className='nav'>
                  <li><a href='#despre-noi'>Despre noi</a></li>
                  <li><a href='#contacte'>Contacte</a></li>
                  <li className='auth'>
                    <Link to="/login" className="btn login">Log in</Link>
                    {/* <button className='btn login'>Log in</button> */}
                    <button className='btn register'>Reg in</button>
                  </li>
              </ul>
            </nav>
        </div>
    </header>
  )
}
