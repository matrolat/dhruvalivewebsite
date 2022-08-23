import React, { Component } from 'react'
import QuizCard from '../../Components/Quiz/QuizCard'
import './Quiz.css'
export default class Quiz extends Component {
  render() {
    return (
      <div>
        <div className="quiz-page">
        <QuizCard/>
        </div>
      </div>
    )
  }
}
