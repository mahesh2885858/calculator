import React, { MouseEventHandler, useReducer } from "react";
import Reducer from "../reducer/Reducer";
import State from "../reducer/State";
import "./numpad.scss";
const NumPad = () => {
  const [state, dispatch] = useReducer(Reducer, State);
  const onDigitClick = (digit: number) => {
    dispatch({ type: "DIGIT", data: digit.toString() });
  };
  const onOperatorClick = (operator: string) => {
    dispatch({ type: "OPERATOR", data: operator });
  };
  const onCompute = () => {
    dispatch({ type: "COMPUTE", data: "" });
  };
  const dotClick = () => {
    dispatch({ type: "DOT", data: "." });
  };
  const allClear = () => {
    dispatch({ type: "ALL_CLEAR", data: "" });
  };
  return (
    <>
      <div className="display-container">
        <div className="previous-value">{state.prevValue}</div>
        <div>{state.currentOperator}</div>
        <div className="current-value">{state.currentValue}</div>
      </div>
      <div className="numpad-container">
        <button onClick={allClear}>AC</button>
        <button onClick={() => onOperatorClick("/")}>/</button>
        <button onClick={() => onOperatorClick("*")}>*</button>
        <button onClick={() => onOperatorClick("-")}>-</button>
        <button onClick={() => onDigitClick(7)}>7</button>
        <button onClick={() => onDigitClick(8)}>8</button>
        <button onClick={() => onDigitClick(9)}>9</button>

        <button onClick={() => onOperatorClick("+")}>+</button>
        <button onClick={() => onDigitClick(4)}>4</button>
        <button onClick={() => onDigitClick(5)}>5</button>
        <button onClick={() => onDigitClick(6)}>6</button>
        <button onClick={onCompute}>=</button>
        <button onClick={() => onDigitClick(1)}>1</button>
        <button onClick={() => onDigitClick(2)}>2</button>
        <button onClick={() => onDigitClick(3)}>3</button>
        <button onClick={() => onDigitClick(0)}>0</button>
        <button onClick={() => dotClick()}>.</button>
        <button>C</button>
      </div>
    </>
  );
};

export default NumPad;
