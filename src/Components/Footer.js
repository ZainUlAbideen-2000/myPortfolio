import React from 'react'
import '../CSS/footer.css'

function Footer() {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-content text-center">
          <a className="logo" href="/"><img src="/assets/images/logo.svg" alt="Logo" /></a>
          <ul className="footer-menu">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/works">Works</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <p className="copyright">
            © All rights reserved by <span>WordPress River</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer