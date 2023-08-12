import React from 'react'
import './header.css'


const Header = () => {
  return (
    <div className='header-container'>
      <div className='header'>
          <div className='header-logo'>Xpensr
          <i className="fi-rr-credit-card absolute-center"></i>
          </div>
      
          <div className='header-button absolute-center'>
            <a href='https://github.com' target='_blank' rel='noopener noreferrer'>
            <i className="devicon-github-original"></i>Star
            </a>
          </div>
      </div>
    </div>
  )
}

export default Header
