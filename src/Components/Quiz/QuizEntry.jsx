import React, { Component } from 'react'
import './QuizCard.css'
export default class QuizEntry extends Component {
    constructor(props){  
        super(props);  
        this.state = {  
             name: "",
             email: "",
          }
        }


        render() {
    return (
      <div className='quiz-container' style={{display:"flex",justifyContent:"center"}}>
        <h1>
            Astronomy Quiz
        </h1>
        <form onSubmit={(e) => this.props.StartHandler(e,this.state.name,this.state.email)}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={(e) =>  this.setState({name: e.target.value})} />
        </label>
        <label>
          Email:
          <input type="text" value={this.state.email} onChange={(e) =>  this.setState({email: e.target.value})} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    )
  }
}
