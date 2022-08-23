import React, { Component } from 'react'
import './Merch.css'
import bg from '../../Assets/IMAGS/Add_a_heading__4_-removebg-preview2.png'
import dis from '../../Assets/IMAGS/MEMBERS SPECIAL DISCOUNT (1).jpg'
import batch from '../../Assets/IMAGS/batchf.png'
import shirt from '../../Assets/IMAGS/stshirtf.jpg'
export default class

    extends Component {
    render() {
        return (
            <div className='merch-container'>
                <div id="titlrm">
                    <center>
                        <img src={bg} width="200" height="90" alt="" />
                    </center>
                </div>
                <center><img id="dis" src={dis} alt="" /></center>
                <div class="card">
                    <table>
                        <div id="m-colm">
                            <td>
                                <div id="m-row">
                                    <img src={batch} alt="Denim Jeans" style={{width:"100%"}} />
                                    <h1>Dhruva Batch</h1>
                                    <p class="price">30₹</p>
                                    <p>limited edition club batch</p>
                                    </div>
                            </td>
                            <td>
                                <div id="m-row">
                                    <img src={shirt} alt="Denim Jeans" style={{width:"100%"}} />
                                    <br /><br />
                                    <h1>Dhruva Tshirt</h1>
                                    <p class="price">300₹</p>
                                    <p>limited edition club tshirt</p>
                                </div>
                            </td>
                </div>
                    </table>


            </div>
</div>
  
    )
    }
}
