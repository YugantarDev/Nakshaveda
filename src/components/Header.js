import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header () {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setMenuOpen(false) // close menu when a link is clicked (mobile UX)
  }

  return (
    <header className='hero'>
      <nav>
        <div className='nav-logo'>
          <Link to='/' onClick={handleLinkClick}>
            Nakshaveda
          </Link>
        </div>
        <button
          className='menu-toggle'
          aria-label='Toggle navigation menu'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <ul className={menuOpen ? 'open' : ''}>
          <li>
            <Link to='/' onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about' onClick={handleLinkClick}>
              About Us
            </Link>
          </li>
          <li>
            <a href='#astrologers' onClick={handleLinkClick}>
              Astrologers
            </a>
          </li>
          <li>
            <a href='#blogs' onClick={handleLinkClick}>
              Blogs
            </a>
          </li>
          <li>
            <a href='/subscription' onClick={handleLinkClick}>
              Subscription Packages
            </a>
          </li>
          <li>
            <a href='/contact' onClick={handleLinkClick}>
              Contact Us
            </a>
          </li>
          <li
            style={{
              backgroundColor: '#4275ff',
              padding: '5px 20px',
              borderRadius: '10px'
            }}
          >
            <a href='#login' onClick={handleLinkClick}>
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
