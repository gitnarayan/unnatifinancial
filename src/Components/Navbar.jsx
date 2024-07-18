import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header className>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <img src="assets/images/site-logo.png" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="Home">
                    Home
                    <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="Aboutus">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="Ourservices">
                    Our Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="Loancalculator">
                    Loan Calculator
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="Contactus">
                    Contact Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="Addmember">
                    Add Member
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

   
    </div>
  );
}

export default Navbar
