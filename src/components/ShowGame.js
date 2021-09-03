import React, { Component } from 'react'
import { rock, paper, scissor } from '../assets/';

class ShowGame extends Component {

    render() {
        return <section className="game-show">
                   <div className={this.props.addClass}> 
                        <div className={this.props.text1} ></div>
                        <p>Your choice</p> 
                   </div>
                   <div className={this.props.addClass}>
                        <div className={this.props.text2}></div>
                        <p>Computer choice</p> 
                   </div>
               </section>
              

    }
}
export default ShowGame