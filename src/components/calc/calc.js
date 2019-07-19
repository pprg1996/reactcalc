import React from "react";
import style from "./calc.module.css";
import Display from "../display/display";
import Buttons from "../buttons/buttons";

class Calc extends React.Component {

  constructor() {
    super();
    this.state = { firstNumber: "", secondNumber: "", operation: "", print: "" };
  }

  updatePrint = () => {
    this.setState((currentState) => {
      return { print: currentState.firstNumber + " " + currentState.operation + " " + currentState.secondNumber };
    });
  }

  numberClickHandler = (event) => {
    const number = event.target.textContent;

    this.setState((currentState) => {
      if (this.state.operation === "")
        return { firstNumber: currentState.firstNumber + number };
      else return { secondNumber: currentState.secondNumber + number };
    });

    this.updatePrint();
  }

  operationClickHandler = (event) => {
    this.setState({ operation: event.target.textContent });
    this.updatePrint();
  }

  equalsClickHandler = () => {
    this.setState((currentState) => {
      let result = 0;

      if (currentState.operation === "+") result = Number.parseFloat(currentState.firstNumber) + Number.parseFloat(currentState.secondNumber);
      else if (currentState.operation === "-") result = Number.parseFloat(currentState.firstNumber) - Number.parseFloat(currentState.secondNumber);
      else if (currentState.operation === "X") result = Number.parseFloat(currentState.firstNumber) * Number.parseFloat(currentState.secondNumber);
      else if (currentState.operation === "/") result = Number.parseFloat(currentState.firstNumber) / Number.parseFloat(currentState.secondNumber);

      return { print: result, firstNumber: "", operation: "", secondNumber: "" };
    });
  }

  negativeToggleClickHandler = () => {
    this.setState((currentState) => {
      if (currentState.operation === "") {
        if (currentState.firstNumber.indexOf("-") === -1) return { firstNumber: "-" + currentState.firstNumber };
        else return { firstNumber: currentState.firstNumber.substring(1) };
      } else {
        if (currentState.secondNumber.indexOf("-") === -1) return { secondNumber: "-" + currentState.secondNumber };
        else return { secondNumber: currentState.secondNumber.substring(1) };
      }
    });

    this.updatePrint();
  }

  decimalClickHandler = () => {
    this.setState((currentState) => {
      if (currentState.operation === "" && currentState.firstNumber.indexOf(".") === -1) return { firstNumber: currentState.firstNumber + "." };
      else if (currentState.operation !== "" && currentState.secondNumber.indexOf(".") === -1) return { secondNumber: currentState.secondNumber + "." };
    });

    this.updatePrint();
  }

  deleteClickHandler = () => {
    this.setState({ firstNumber: "", secondNumber: "", operation: "", print: "" });
  }

  render() {
    return (
      <div className={style.calcDiv}>
        <Display print={this.state.print} />
        <Buttons numberClickHandler={this.numberClickHandler} operationClickHandler={this.operationClickHandler} equalsClickHandler={this.equalsClickHandler} negativeToggleClickHandler={this.negativeToggleClickHandler} decimalClickHandler={this.decimalClickHandler} deleteClickHandler={this.deleteClickHandler} />
      </div>
    );
  }
}

export default Calc;