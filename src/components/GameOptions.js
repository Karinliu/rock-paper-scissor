import React, { Component } from 'react'
import { rock, paper, scissor } from '../assets/';

class GameOptions extends Component {
    constructor() {
        super();

        this.state = {
            item: [],
        }
        this.chooseGame = this.chooseGame.bind(this);
    }

    testMethod = () => {
        console.log('alert')
    }

    chooseGame(e){
        e.preventDefault();
        console.log(this)
        console.log(e.target, "value is")
    }

    render() {
        return <>
            <h2>Choose one</h2>
            <section className="options">
                <button value="rock" className="rock" onClick={this.props.chooseGame} ></button>
                <button value="paper" className="paper" onClick={this.props.chooseGame}></button>
                <button value="scissor" className="scissor" onClick={this.props.chooseGame}></button>
            </section>

            </>
              

    }
}
export default GameOptions