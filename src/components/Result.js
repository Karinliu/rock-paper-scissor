import React, { Component } from 'react'
import { rock, paper, scissor } from '../assets/';

class Result extends Component {

    render() {
        return <section className="result">
                  <p>Result:</p> <p className={this.props.addClass}> {this.props.result}</p>
               </section>
              

    }
}
export default Result