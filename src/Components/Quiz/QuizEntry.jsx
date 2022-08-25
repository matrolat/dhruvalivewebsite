import React, { Component } from 'react'
import './QuizCard.css'
export default class QuizEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
        }
    }


    render() {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: 'column' }} className='quiz-container'>
                <h1 id='thanku'>
                    Astronomy Quiz
                </h1>
                <form onSubmit={(e) => this.props.StartHandler(e, this.state.name, this.state.email)}>
                    <label>
                        Name:
                        <input type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                    </label>
                    <label>
                        Email:
                        <input type="text" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                    </label>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <input className='s' type="submit" value="Start Quiz" />
                    </div>
                </form>
            </div>
        )
    }
}
