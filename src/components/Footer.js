import React from 'react'
import './Footer.css';

export default function Footer() {
  return (
    <footer id='contacte' className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='footer-col'>
            <h4>Studwork</h4>
            <ul>
              <li><a href='#despre-noi'>Despre noi</a></li>
              <li><a href='#'>Cum funcționează</a></li>
              <li><a href='#'>Termeni și condiții</a></li>
            </ul>
          </div>
          <div className='footer-col'>
            <h4>Pentru studenți</h4>
            <ul>
              <li><a href='#'>Găsește cereri</a></li>
              <li><a href='#'>Cum aplici</a></li> 
              <li><a href='#'>Reguli & comportament</a></li>
            </ul>
          </div>
          <div className='footer-col'>
            <h4>Contact</h4>
            <ul>
              <li><a href='#'>Email: support@studwork.ro</a></li>
              <li><a href='#'>Program: L–V 09:00–18:00</a></li>
              <li><a href='#'>Orașe: Galați</a></li>
            </ul>
          </div>
          <div className='footer-col'>
            <h4>follow us</h4>
            <div className='social-links'>
              <a href='#'><i className='fab fa-linkedin-in'></i></a>
              <a href='#'><i className='fab fa-telegram-plane'></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Studwork.ro — Toate datele sunt securizate.</p>
        </div>
      </div>
        {/* Toate datele sunt securizate &copy; */}
    </footer>
  )
}
