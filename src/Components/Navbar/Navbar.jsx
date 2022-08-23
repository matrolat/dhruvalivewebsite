import React, { Component,img } from 'react'
import {Link}  from 'react-router-dom'
import './Navbar.css';
export default class Navbar extends Component {
  render() {
    return (
        <div id="navf">
        <nav className="navbar">
          {/* <!-- LOGO --> */}
          <div className="logo"><a href="index.html">
            {/* <img id="navlogo"
                src="IMAGS\circle-cropped-removebg-preview-removebg-preview.png" alt="" height="50" width="50"/> */}
                </a>
          </div>
          {/* <!-- NAVIGATION MENU --> */}
          <ul className="nav-links">
            {/* <!-- USING CHECKBOX HACK --> */}
            <input type="checkbox" id="checkbox_toggle" />
            <label for="checkbox_toggle" className="hamburger">&#9776;</label>
            {/* <!-- NAVIGATION MENUS --> */}
            <div className="menu">
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/quiz">QUIZ</Link></li>
              <li><Link to="/team">TEAM</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
              <li><Link to="/events">EVENTS</Link></li>
              <li><Link to="/merch">MERCH</Link></li>
            </div>
          </ul>
        </nav>
      </div>
    )
  }
}
