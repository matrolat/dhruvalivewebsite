import React, { Component } from 'react'
import './Home.css'
import banner from '../../Assets/imagebods/DHRUVA BANNER.jpg'
import intro from '../../Assets/IMAGS/club intro.jpg'
export default class Home extends Component {
  render() {
    return (
      <div>
         <img id="banner" src={banner} alt="error"/>
  <br/>
  <h2 id="us">About us</h2>
  <br/>


  <div id="us">
    <center>
      <img id="abu" source src={intro} width="600"
        height="300"/>
      <p id="abus"><b> There has always been a quest to explore the world beyond this planet. There are thousands of
          unanswered questions
          regarding the universe. As a curiosity to explore universe and answer these unending list of questions we came
          up
          with an idea to form Astronomy Club. The key objective of this club is to motivate the students and to
          understand
          the basic concepts related to astronomy and astrophysics. Astronomy club was formed and inaugurated on 12th
          March
          2018 and under the guidance of Dr. Vishwajeet Khot (Assistant professor, Engineering Physics) and Mr. Pravin
          Gorde
          (Assistant professor, Engineering Civil). We would like to thank campus director Dr.Neeraj Vyawahare and
          Dr.
          (Mrs.) A.V.Patil for their support and guideline in foundation of the club. Recently the club got its identity
          and
          emerged with a name ‘DHRUVA’, with a philosophy related to ancient Indian history of star Dhruva which guides
          mankind
          in night to find right path.</b></p>
    </center><br/><br/><br/><br/>
      </div>
      </div>
    )
  }
}
