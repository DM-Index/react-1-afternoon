import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor() {
    super();

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  assignEvensAndOdds(userInput) {
    var odds = [];
    var evens = [];
    var arr = userInput.split(",");

    for (let i = 0; i < arr; i++) {
      if (arr[i] % 2 === 0) {
        evens.push(parseInt(arr[i], 10));
      } else {
        odds.push(parseInt(arr[i], 10));
      }
    }
    this.setState = { evenArray: evens, oddArray: odds };
  }
  render() {
    return (
      <div className="puzzleBox evenAndOdd">
        <h4> Evens and Odds</h4>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />{" "}
        <button
          className="confirmationButton"
          onClick={() => {
            this.assignEvensAndOdds(this.state.userInput);
          }}
        >
          {" "}
          Split{" "}
        </button>
        <span className="resultsBox"> Evens: {this.state.evenArray} </span>
        <span className="resultsBox"> Odds: {this.state.oddArray} </span>
      </div>
    );
  }
}

export default EvenAndOdd;
