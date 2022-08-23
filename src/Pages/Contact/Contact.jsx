import React, { Component } from 'react'
import contactus from '../../Assets/IMAGS/contactus.png'
import cf from '../../Assets/IMAGS/cf.png'
import './Contact.css'
export default class Contact extends Component {
  render() {
    return (
      <div className="container1">
          <center>
            <img src={contactus} width="240" height="70" alt=""/>
         </center>
         <div className="row">
            <div className="column">
            <img src={cf} style={{width:"100%"}} />
            </div>
               <div className="column">
           <form action="https://formsubmit.co/astronomy@dypiemr.ac.in" method="POST">
            <label for="fname"><b>Name</b></label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
              <label for="lname"><b>Email</b></label>
              <input type="text" id="lname" name="lastname" placeholder="Your Email.." />

                 <label for="subject"><b/>Message<b/></label>
                  <textarea id="subject" name="subject" placeholder="Write something.."
                    style={{height:"170px"}} ></textarea>
                  <input type="submit" value="Submit"/>
                  </form>
                </div>
         </div>
      </div>
      // < className="container">
      //   <center>
      //     <img src={contactus} width="240" height="70" alt=""/>
      //   </center>

      //   <div className="row">
      //     <div className="column">
      //       <img src={cf} style="width:100%"/>
      //     </div>

      //     <div className="column">
      //       <form action="https://formsubmit.co/astronomy@dypiemr.ac.in" method="POST">
      //         <label for="fname"><b>Name</b></label>
      //         <input type="text" id="fname" name="firstname" placeholder="Your name.." required/>
      //           <label for="lname"><b>Email</b></label>
      //           <input type="text" id="lname" name="lastname" placeholder="Your Email.." required/>

      //             <label for="subject"><b/>Message<b/></label>
      //               <textarea id="subject" name="subject" placeholder="Write something.."
      //                 style="height:170px"></textarea>
      //               <input type="submit" value="Submit"/>
      //               </form>
      //             </div>

      //             </div>
                
                )
  }
}
