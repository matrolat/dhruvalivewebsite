import React, { Component, button } from 'react'
import './QuizCard.css'

export default class QuizCard extends Component {
    

  



    componentDidMount() {
        fetch("https://dyplibmaster.000webhostapp.com/Dhruva/GetQuestions.php")
          .then(res => res.json())
          .then(
            (result) => {
             console.log("result:")
             console.log(result)
            },
          )
      }
    constructor(props){  
        super(props);  
        this.state = {  
             ques: ['What is your name','Who r u '],
             current: 0,
             last:8
          }
        }
  render() {
      

    const myArray = ['1', '2', '3','4','5','6','7','8'];
    const QuesHandler = (i)=>{
       console.log(i)
       this.setState({current: i})
    }
    const NextHandler = ()=>{
        if((this.state.current+1)!=this.state.last){
            this.setState({current: this.state.current+1})
        }
    }
    const PrevHandler = ()=>{
        if((this.state.current-1)>=0){
            this.setState({current: this.state.current-1})
        }
    }

    const Question= ['What is your name','Who r u ']
    return (
      <div className='quiz-container'>
        <div className="nav-btn-container">
            <button className="nav-btn" onClick={PrevHandler}><span>Previous</span></button>
            <button className="nav-btn" onClick={NextHandler}><span>Next</span></button>
        </div>
        <div className="ques-container">
            <div className="q-no">Question Number : {this.state.current+1}</div>
            <div className="ques">Question : </div>
        </div>
        <div className="opt-container">
            <button className="opt1 opt"><span>OptionA</span></button>
            <button className="opt2 opt"><span>OptionB</span></button>
        </div>
        <div className="opt-container">
            <button className="opt3 opt"><span>OptionC</span></button>
            <button className="opt4 opt"><span>OptionD</span></button>
        </div>
        <div className="bottom">
        <div className="pagi">
            {myArray.map((item,index) => <button className='pag-no' onClick={() => QuesHandler(index)} style={{backgroundColor: (index===this.state.current ? "red" : "transparent")  }}>{item}</button>)}

        </div>
        <button className="opt" id="submit"><span>Submit</span></button>
        </div>
        

      </div>
    )
  }
}
