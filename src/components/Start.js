import React, { Component } from 'react'

class Start extends Component {
  constructor(props) {
        super(props);
        this.state = {

        };
    }

  render() {
    return <button className="start-btn" name={this.props.dataButton} value={this.props.dataButton} onClick={this.props.handleClick}>
                  Start</button>
  }
}
export default Start