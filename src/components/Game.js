import React, { Component } from 'react'
import { rock, paper, scissor } from '../assets/';

class Game extends Component {
    testMethod = () => {
        console.log('alert')
    }
    render() {
        return <section className="options">
                   <button onClick={() => this.testMethod()}><img className="rock" src={rock} alt="rock"/></button>
                   <button onClick={() => this.testMethod()}><img className="paper" src={paper} alt="paper"/></button>
                   <button onClick={() => this.testMethod()}><img className="scissor" src={scissor} alt="scissor"/></button>
               </section>
              

    }
}
export default Game