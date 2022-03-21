import React, { useReducer } from "react";
import Reducer from "../reducer/Reducer";
import State from "../reducer/State";
import "./display.scss";
const DisplayElement = () => {
  const [state, dispatch] = useReducer(Reducer, State);
  console.log(state);
  return (
    <div className="display-container">
      <div className="previous-value">{state.prevValue}</div>
      <div className="current-value">{state.currentValue}</div>
    </div>
  );
};

export default DisplayElement;
