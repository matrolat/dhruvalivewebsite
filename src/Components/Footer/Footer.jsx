import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'
export default class Footer extends Component {
  render() {
    return (
        <footer>
        <div className="footer-content">
  
          <p><b>ADDRESS-</b>D. Y. Patil Educational Complex, Akurdi, Sector 29, Ravet Village Rd, Gurudwara
            Colony, Nigdi, Pimpri-Chinchwad, Maharashtra 411035. <br/> <b>EMAIL-</b>astronomy@dypiemr.ac.in</p>
          <ul className="socialsf">
            <li><a href="https://www.instagram.com/dhruva.dyp/" target="_blank"><i className="fa fa-instagram"></i></a></li>
  
            <li><a href="https://www.youtube.com/channel/UC1belYBD0ELeUQE8IWG3H1w" target="_blank"><i
                  className="fa fa-youtube"></i></a></li>
            <li><a href="https://www.linkedin.com/company/dhruva-astronomy-club-of-dypiemr/" target="_black"><i
                  className="fa fa-linkedin-square"></i></a></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>copyright &copy; <a href="#">DHRUVA DYPIEMR</a> </p>
          <div className="footer-menu">
            <ul className="f-menu">
            <li><Link to="/">HOME</Link></li>
              <li><Link to="/team">TEAM</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
    
              <li><Link to="/events">EVENTS</Link></li>
              <li><Link to="/merch">MERCH</Link></li>
            </ul>
          </div>
        </div>
  
      </footer>
    )
  }
}
