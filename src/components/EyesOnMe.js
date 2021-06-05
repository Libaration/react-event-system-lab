import React, { Component } from "react";

class EyesOnMe extends Component {
  render() {
    return (
      <button onFocus={this.handleFocus} onBlur={this.handleBlur}>
        Submit
      </button>
    );
  }

  handleFocus = () => {
    console.log("Good!");
  };
  handleBlur = () => {
    console.log("Hey! Eyes on me!");
  };
}
export default EyesOnMe;
