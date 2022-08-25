import React, { Component } from 'react'
import './QuizCard.css'
export default class QuizEnd extends Component {
    constructor(props){  
        super(props);  
        this.state = {  
             name: "",
             email: "",
          }
        }


        render() {
    return (
      <div className='quiz-container' style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:'column'}}>
        <h1 id='thanku'>
THANK YOU !        
</h1>
<div style={{display:"flex",justifyContent:"center",flexDirection:"column",textAlign:"center"}}>

       <h3 id='subtext'> FOR PARTICIPATING</h3>
       <h3 id='subtext'>SCORES WILL BE SENT TO YOUR EMAIL ID</h3>
</div>
      </div>
    )
  }
}
