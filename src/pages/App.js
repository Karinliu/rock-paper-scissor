import React, { Component } from 'react'
import Start from '../components/Start.js';
import Header from '../components/Header.js';
import GameOptions from '../components/GameOptions.js';
import ShowGame from '../components/ShowGame.js';
import Result from '../components/Result.js';
import '../styles/styles.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            item: [],
            resultGame: "",
            chosenItem: "question",
            randomItems: ["rock", "paper", "scissor"],
            randomChose: "question",
            addAnimation: "game-option",
            textAnimation: ""

        }
        this.playGame = this.playGame.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(e) {
        e.preventDefault();
        console.log("clicked")
    }

    playGame(e) {
        // console.log(e.target.value, "value is")
        let myChoice = e.target.value;

        let computerChoice = this.state.randomItems. [Math.floor(Math.random() * this.state.randomItems.length)]

        // console.log("what is the", randomItem);




        setTimeout(() => {
            this.setState({
                randomChose: computerChoice,
                chosenItem: myChoice,
                addAnimation: "game-option"
            })
        }, 1500);

        this.setState({
            addAnimation: "animation game-option"
        });


        if (myChoice === "rock" && computerChoice === "rock") {
            console.log("tie")

            setTimeout(() => {
                this.setState({
                    resultGame: "tie",
                    textAnimation: "textAnimation",
                    chosenItem: "rock animation",
                    randomChose: "rock animation"
                })
            }, 2000);

            this.setState({
                textAnimation: "",
                
            })

        } else if (myChoice === "paper" && computerChoice === "rock") {
            console.log("win")

            setTimeout(() => {
                this.setState({
                    resultGame: "win",
                    textAnimation: "textAnimation",
                    chosenItem: "paper winAnimation",
                    randomChose: "rock lostAnimation",
                    
                    
                })
            }, 2000);

            this.setState({
                textAnimation: "",
                chosenItem: "paper",
                randomChose: "rock"
            })

        } else if (myChoice === "scissor" && computerChoice === "rock") {
            console.log("lost")

            setTimeout(() => {
                this.setState({
                    resultGame: "lost",
                    textAnimation: "textAnimation",
                    chosenItem: "scissor lostAnimation",
                    randomChose: "rock winAnimation",
                })
            }, 2000);

            this.setState({
                textAnimation: ""
            })

        } else if (myChoice === "rock" && computerChoice === "paper") {
            console.log("lost")

            setTimeout(() => {
                this.setState({
                    resultGame: "lost",
                    textAnimation: "textAnimation",
                    chosenItem: "rock lostAnimation",
                    randomChose: "paper winAnimation",
                })
            }, 2000);

            this.setState({
                textAnimation: ""
            })

        } else if (myChoice === "paper" && computerChoice === "paper") {
            console.log("tie")

            setTimeout(() => {
                this.setState({
                    resultGame: "tie",
                    textAnimation: "textAnimation",
                    chosenItem: "paper winAnimation",
                    randomChose: "paper winAnimation",

                })
            }, 2000);

            this.setState({
                textAnimation: ""
            })

        } else if (myChoice === "scissor" && computerChoice === "paper") {
            console.log("win")

            setTimeout(() => {
                this.setState({
                    resultGame: "win",
                    textAnimation: "textAnimation",
                    chosenItem: "scissor winAnimation",
                    randomChose: "paper lostAnimation",
                })
            }, 2000);

            this.setState({
                textAnimation: ""
            })
        } else if (myChoice === "rock" && computerChoice === "scissor") {
            console.log("win")

            setTimeout(() => {
                this.setState({
                    resultGame: "win",
                    textAnimation: "textAnimation",
                    chosenItem: "rock winAnimation",
                    randomChose: "scissor lostAnimation",
                })
            }, 2000);

            this.setState({
                textAnimation: ""
            })

        } else if (myChoice === "paper" && computerChoice === "scissor") {
            console.log("lost")

            setTimeout(() => {
                this.setState({
                    resultGame: "lost",
                    textAnimation: "textAnimation",
                    chosenItem: "paper lostAnimation",
                    randomChose: "scissor winAnimation",
                })
            }, 2000);

            this.setState({
                textAnimation: ""
            })

        } else if (myChoice === "scissor" && computerChoice === "scissor") {
            console.log("tie")

            setTimeout(() => {
                this.setState({
                    resultGame: "tie",
                    textAnimation: "textAnimation",
                    chosenItem: "scissor winAnimation",
                    randomChose: "scissor winAnimation",
                })
            }, 2000);

            this.setState({
                textAnimation: ""
            })
        }

    }

    render() {
        // console.log("random woord is", this.state.randomChose)
        // console.log("gekozen optie is", this.state.chosenItem)


        return (
            <div className="App-container">
                <Header text="Karin's Rock Paper Scissors"/>

                <Result
                    addClass={this.state.textAnimation}
                    result={this.state.resultGame}/>
                
                <ShowGame
                    text1={this.state.chosenItem}
                    text2={this.state.randomChose}
                    addClass={this.state.addAnimation}
                    
                />

                <GameOptions
                    chooseGame={this.playGame}/>
            </div>
        )
    }
}

export default App;