import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    //always have super so we can access default methods from component
    super();

    this.state = {
      employees: [
        {
          name: "Jimmy Joe",
          title: "Hack0r",
          age: 12
        },
        {
          name: "Jeremy Schrader",
          age: 24,
          hairColor: "brown"
        },
        {
          name: "Carly Armstrong",
          title: "CEO"
        }
      ],
      userInput: "",
      filteredEmployees: []
    };
  }

  onChange(val) {
    this.setState({ userInput: val });
  }

  filteredEmployees(prop) {
    const employees = this.state.employees;
    const filteredEmployees = [];

    for (let i = 0; i < employees.length; i++) {
      if (employees[i].hasOwnProperty(prop)) {
        filteredEmployees.push(employees[i]);
      }
    }
    this.setState({ filteredEmployees: filteredEmployees });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText">
          {" "}
          Original: {(this.state.employees, null, 10)}{" "}
        </span>
        <input
          className="inputLine"
          onChange={e => this.onChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filteredEmployees(this.state.userInput)}
        >
          {" "}
          Filter{" "}
        </button>
        <span className="resultsBox filterObjectRB">
          {" "}
          Filtered: {JSON.stringify(
            this.state.filteredEmployees,
            null,
            10
          )}{" "}
        </span>
      </div>
    );
  }
}

export default FilterObject;
