import React, { Component, button,alert } from 'react'
import './QuizCard.css'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from 'axios';


export default class QuizCard extends Component {
    

    
    

    componentDidMount() {
        fetch("https://dyplibmaster.000webhostapp.com/Dhruva/GetQuestions.php")
          .then(res => res.json())
          .then(
            (result) => {
              let quesID = [];
              let ques = [];
              let optionA = [];
              let optionB = [];
              let optionC = [];
              let optionD = [];
              let Ans = [];
              for(let i=0;i<result.length;i++)
              {
                quesID.push(result[i].QuestionId);
                ques.push(result[i].Question);
                optionA.push(result[i].OptionA);
                optionB.push(result[i].OptionB);
                optionC.push(result[i].OptionC);
                optionD.push(result[i].OptionD);
                Ans.push(result[i].Answer);
              }
              this.setState({
                  quesId: quesID,
                ques: ques,
                optionA: optionA,
                optionB: optionB,
                optionC: optionC,
                optionD: optionD,
                ans: Ans,
                data:""
              });
              
            },
            )
            // Modal.setAppElement('#Quiz');
            //================Timer=================
    var sec         = 1800,
    countDiv    = document.getElementById("timer"),
    secpass,
    countDown   = setInterval(function () {
        'use strict';
        
        secpass();
    }, 1000);

function secpass() {
    'use strict';
    
    var min     = Math.floor(sec / 60),
        remSec  = sec % 60;
    
    if (remSec < 10) {
        
        remSec = '0' + remSec;
    
    }
    if (min < 10) {
        
        min = '0' + min;
    
    }
    countDiv.innerHTML = min + ":" + remSec;
    
    if (sec > 0) {
        
        sec = sec - 1;
        
    } else {
        
        clearInterval(countDown);
        // toast("Times Up!");
        toast.success('Times Up', {
            toastId: 'success1',
        })
        countDiv.innerHTML = 'countdown done';
        document.getElementById("submit").click();
        
    }
}
    //======================================
      }
    constructor(props){  
        super(props);  
        this.state = {  
             current: 0,
             last:20,
             result:[],
             quesId:[],
             ques:[],
             optionA:[],
             optionB:[],
             optionC:[],
             optionD:[],
             ans:[],
             SelectedA:false,
             SelectedB:false,
             SelectedC:false,
             SelectedD:false,
             Arr:['','','','','','','','','','','','','','','','','','','',''],
             Open:false,
          }
        }
  render() {
      

    const myArray = ['1', '2', '3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'];
    var Selected = new Array(this.state.last);
    const QuesHandler = (i)=>{
        console.log(i)
        console.log(this.state.Arr[i])
        this.setState({current: i})
        this.setState({
         SelectedA: false,
         SelectedB: false,
         SelectedC: false,
         SelectedD: false,
 
     })
        if( this.state.Arr[i] =='A') {
         this.setState({
             SelectedA: true,
             SelectedB: false,
             SelectedC: false,
             SelectedD: false,
     
         })
        }
        if(this.state.Arr[i]=='B') {
         this.setState({
             SelectedA: false,
             SelectedB: true,
             SelectedC: false,
             SelectedD: false,
     
         })
        }
        if(this.state.Arr[i]=='C') {
         this.setState({
             SelectedA: false,
             SelectedB: false,
             SelectedC: true,
             SelectedD: false,
     
         })
        }
        if(this.state.Arr[i] =='D') {
         this.setState({
             SelectedA: false,
             SelectedB: false,
             SelectedC: false,
             SelectedD: true,
     
         })
        }
 
         // console.log(Selected[0])
 
     }
    const AnsHandler = (ans,i)=>{

        let temp = [];
        temp = this.state.Arr;
        temp[i]= ans;
        this.setState({
            Arr:temp,
        })
        console.log( "check:"+ i + this.state.Arr[i])
        if(ans==='A')
        {
            this.setState({ 
                SelectedA: true,
                SelectedB: false,
                SelectedC: false,
                SelectedD: false,

            })
        }
        if(ans==='B')
        {
            this.setState({
                SelectedA: false,
                SelectedB: true,
                SelectedC: false,
                SelectedD: false,

            })
        }
        if(ans==='C')
        {
            this.setState({
                SelectedA: false,
                SelectedB: false,
                SelectedC: true,
                SelectedD: false,

            })
        }
        if(ans==='D')
        {
            this.setState({
                SelectedA: false,
                SelectedB: false,
                SelectedC: false,
                SelectedD: true,

            })
        }
        // console.log(Selected[0])

    }
    const NextHandler = ()=>{
        if((this.state.current+1)!=this.state.last){
            this.setState({current: this.state.current+1})
        }
        let div = document.getElementById('scl');       
        div.scrollLeft += 20;
        let i =this.state.current + 1;
        this.setState({
            SelectedA: false,
            SelectedB: false,
            SelectedC: false,
            SelectedD: false,

        })
        if( this.state.Arr[i] =='A') {
            this.setState({
                SelectedA: true,
                SelectedB: false,
                SelectedC: false,
                SelectedD: false,
        
            })
           }
           if(this.state.Arr[i]=='B') {
            this.setState({
                SelectedA: false,
                SelectedB: true,
                SelectedC: false,
                SelectedD: false,
        
            })
           }
           if(this.state.Arr[i]=='C') {
            this.setState({
                SelectedA: false,
                SelectedB: false,
                SelectedC: true,
                SelectedD: false,
        
            })
           }
           if(this.state.Arr[i] =='D') {
            this.setState({
                SelectedA: false,
                SelectedB: false,
                SelectedC: false,
                SelectedD: true,
        
            })
           }
    }
    const PrevHandler = ()=>{
        if((this.state.current-1)>=0){
            this.setState({current: this.state.current-1})
        }
        let div = document.getElementById('scl');       
        div.scrollLeft-= 20;
        let i =this.state.current - 1;
        this.setState({
            SelectedA: false,
            SelectedB: false,
            SelectedC: false,
            SelectedD: false,

        })
        if( this.state.Arr[i] =='A') {
            this.setState({
                SelectedA: true,
                SelectedB: false,
                SelectedC: false,
                SelectedD: false,
        
            })
           }
           if(this.state.Arr[i]=='B') {
            this.setState({
                SelectedA: false,
                SelectedB: true,
                SelectedC: false,
                SelectedD: false,
        
            })
           }
           if(this.state.Arr[i]=='C') {
            this.setState({
                SelectedA: false,
                SelectedB: false,
                SelectedC: true,
                SelectedD: false,
        
            })
           }
           if(this.state.Arr[i] =='D') {
            this.setState({
                SelectedA: false,
                SelectedB: false,
                SelectedC: false,
                SelectedD: true,
        
            })
           }
    }
    const SubmitHandler = ()=>{
        let Ans = this.state.ans;
        let Check = this.state.Arr;
        console.log(Check);
        console.log(Ans);
        let score=0;
        for(let x=0;x<Check.length;x++)
        {
            if(Ans[x]==Check[x])
            {
                score++;
            }
        }
        var Data2={
            "name":this.props.name,
            "email":this.props.email,
            "score":score,

        };
        console.log(JSON.stringify(Data2))
        // axios.post('https://dyplibmaster.000webhostapp.com/Dhruva/InsertScore.php',Data2);
        const headers = {
            'Content-Type': 'text/plain'
        };
    
        axios.post(
            'https://dyplibmaster.000webhostapp.com/Dhruva/InsertScore.php',
            JSON.stringify(Data2),
            {headers}
            ).then(response => {
                console.log("Success ========>", response);
            })
            .catch(error => {
                console.log("Error ========>", error);
            }
        )
  



        this.props.EndHandler();
        console.log("score:"+ score)
    }
    let current = this.state.current;

    function myFunction() {
        var txt;
        if (window.confirm("Do u want to submit the Quiz ?")) {
          SubmitHandler();
        }
      }


    return (
      <div className='quiz-container'>
        <p id="demo"></p>
        <div className="nav-btn-container">
            <button className="nav-btn" onClick={PrevHandler}><span>Previous</span></button>
            <button className="nav-btn" onClick={NextHandler}><span>Next</span></button>
        </div>
        <div className="ques-container">
        <div class="count">
         <div className="q-no">Time Left :-&nbsp;</div> <div id="timer" className='q-no'></div>
         </div>
            <div className="q-no">Question Number : {this.state.current+1}</div>
            <div className="ques">Question : {this.state.ques[current]}</div>
        </div>
        <div className="opt-container">
            <button className="opt1 opt" style={{backgroundColor: (this.state.SelectedA===true ? '#fbb03b' :'') }} onClick={() => AnsHandler('A',current)}><span> {this.state.optionA[current]}</span></button>
            <button className="opt2 opt" style={{backgroundColor: (this.state.SelectedB===true ? '#fbb03b' :'') }} onClick={() => AnsHandler('B',current)}><span> {this.state.optionB[current]}</span></button>
        </div>
        <div className="opt-container">
            <button className="opt3 opt" style={{backgroundColor: (this.state.SelectedC===true ? '#fbb03b' :'') }} onClick={() => AnsHandler('C',current)}><span> {this.state.optionC[current]}</span></button>
            <button className="opt4 opt" style={{backgroundColor: (this.state.SelectedD===true ? '#fbb03b' :'') }} onClick={() => AnsHandler('D',current)}><span> {this.state.optionD[current]}</span></button>
        </div>
        <div className="bottom">
        <div className="pagi" id='scl'>
            {myArray.map((item,index) => <button className='pag-no' onClick={() => QuesHandler(index)} style={{backgroundColor: (index===this.state.current ? "blueviolet" : "transparent")  }}>{item}</button>)}

        </div>
        <div className='submit-container'>

        <button className="bn632-hover bn27" id="submit" onClick={myFunction}><span>Submit</span></button>
        </div>
        </div>
        






      </div>
    )
  }
}
