import React from 'react'
import '../CSS/header.css'
// import logo from '../zain2.png'
import logo from '../Images/zain_name_logo.png'

function Header() {
  return (
    <header className="header-area">
      <div className="container">
        <div className="gx-row d-flex align-items-center justify-content-between">
          <div className="logo-container">
            <div className="logo-text">Zain here</div>
          </div>
          {/* <a className="logo" href="/">
            <img src={logo} alt="Logo" />
          </a> */}
          <nav className="navbar">
            <ul className="menu">
              <li className=""><a href="/">Home</a></li>
              <li className="active"><a href="/about">About</a></li>
              <li className=""><a href="/works">Works</a></li>
              <li className=""><a href="/contact">Contact</a></li>
            </ul>
          </nav>
          <a className="theme-btn" href="/contact">Let's talk</a>

          {/* <nav className="switcher__tab">
            <span className="switcher__btn light-mode">Light</span>
            <span className="switcher__btn dark-mode">Dark</span>
          </nav> */}
          {/* <div className="show-menu">
            <span></span>
            <span></span>
            <span></span>
          </div> */}
        </div>
      </div>
    </header>
  );
}

export default Header