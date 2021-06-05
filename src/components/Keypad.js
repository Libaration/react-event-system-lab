import React, { Component } from "react";

class Keypad extends Component {
  render() {
    return <input type="password" onKeyUp={this.handleKeyup}></input>;
  }

  handleKeyup = (event) => {
    console.log("Entering password...");
  };
}

export default Keypad;
