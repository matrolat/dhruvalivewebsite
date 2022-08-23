import React, { Component } from 'react'
import './Events.css'
import e2 from '../../Assets/IMAGS/EVENTST2.png'
import starg from '../../Assets/IMAGS/stargaz.png'
import scid from '../../Assets/IMAGS/scid.png'
import buzz from '../../Assets/IMAGS/STAR_BUSS__2_-removebg-preview.png'
export default class Events extends Component {
  render() {
    return (
      <div className='e-container'>
               <div id="titlev">
            <center>
                <img src={e2} width="300" height="300" alt=""/>
            </center>
        </div>

        <table id="tablef">
            <tr>
                <td><img src={starg} width="400" height="400"/></td>
                <td><b>STAR GAZING-</b> It is one of main events where we arrange a visite to pollution free zone. A
                    guide
                    with
                    knowlege about the planets and constellation also with a telescope.Camping and many other
                    activites are
                    also arranged.</td>
            </tr>
            <tr>
                <td><b>NATIONAL SCIENCE DAY-</b> National science day is celebrated every year, an project making
                    compitition
                    is
                    arranged. An seminar is arranged in which many geniuses in the field of science are invited to share
                    their
                    knowlege </td>
                <td><img src={scid} width="400" height="400"/></td>
            </tr>
            <tr>
                <td><img src={buzz} width="400" height="400"/></td>
                <td><b>STAR BUZZ-</b>Star buzz is a podcast series which is available on our youtub.In this podcast we
                    invite
                    exerts
                    in the field of astronomy, and many topics are discussed. Check our youtube for all the episodes.
                </td>
            </tr>
        </table>
      </div>
    )
  }
}
