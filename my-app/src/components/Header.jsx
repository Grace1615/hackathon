import React from 'react'
import Timer from './Timer';

const Header = () => {
    return (
    
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
          <li className="nav-item"><a className="nav-link" href="/About">Tour Guide</a></li>
          <li className="nav-item"><a className="nav-link" href="#portfolio">Related News</a></li>
          <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
          <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
        <header className="masthead">
          <div className="container">
            <div className="masthead-subheading">Welcome To Our Studio!</div>

            <div className="masthead-heading text-uppercase">
             <Timer />
            </div>

            <a className="btn btn-primary btn-xl text-uppercase" href="/gamestart">
              GameStart
            </a>
          </div>
        </header>
<footer className="footer py-4">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4 text-lg-start">Copyright © Your Website 2022</div>
        <div className="col-lg-4 my-3 my-lg-0">
          <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i className="fab fa-twitter" /></a>
          <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
          <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
        </div>
        <div className="col-lg-4 text-lg-end">
          <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
          <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
        </div>
      </div>
    </div>
  </footer>
      </div>
    );
};

export default Header
