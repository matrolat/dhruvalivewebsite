import React, { Component } from 'react'
import QuizCard from '../../Components/Quiz/QuizCard'
import QuizEntry from '../../Components/Quiz/QuizEntry';
import QuizEnd from '../../Components/Quiz/QuizEnd'
import './Quiz.css'
export default class Quiz extends Component {
  constructor(props){  
    super(props);  
    this.state = {  
      name: "",
      email: "",
         start: false,
         end:false
      }
    }
    render() {
    const StartHandler = (e,name,email)=>{
      e.preventDefault();
      this.setState({start: true, name: name,email: email});
      console.log(name + " " + email)
    }
    const EndHandler = (e)=>{

      this.setState({start: false,end:true});

    }
    return (
      <div>
        <div className="quiz-page">
          {
           ((this.state.start==false)&&(this.state.end==false))
           ?   <QuizEntry StartHandler={StartHandler} />
           : null
          }
          {
           ((this.state.start==true)&&(this.state.end==false))
           ?    <QuizCard name={this.state.name} email={this.state.email} EndHandler={EndHandler}/>
           : null
          }
          {
           ((this.state.start==false)&&(this.state.end==true))
           ?    <QuizEnd />
           : null
          }
        </div>
      </div>
    )
  }
}
