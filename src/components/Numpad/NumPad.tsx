import { Link } from "react-router-dom";
import State from "../reducer/State";
import "./numpad.scss";

type opearator = (operator: string) => void;
type digit = (digit: number) => void;
const NumPad = (props: {
  onOperatorClick: opearator;
  onDigitClick: digit;
  dotClick: () => void;
  onCompute: () => void;
  allClear: () => void;
  backspace: () => void;
  state: typeof State;
}) => {
  return (
    <>
      <div className="display-container">
        <div className="previous-value">{props.state.prevValue}</div>
        <div>{props.state.currentOperator}</div>
        <div className="current-value">{props.state.currentValue}</div>
      </div>
      <div>
        <Link to={`/history`}>history</Link>
      </div>
      <div className="numpad-container">
        <button onClick={props.allClear}>AC</button>
        <button onClick={() => props.onOperatorClick("/")}>/</button>
        <button onClick={() => props.onOperatorClick("*")}>*</button>
        <button onClick={() => props.onOperatorClick("-")}>-</button>
        <button onClick={() => props.onDigitClick(7)}>7</button>
        <button onClick={() => props.onDigitClick(8)}>8</button>
        <button onClick={() => props.onDigitClick(9)}>9</button>

        <button onClick={() => props.onOperatorClick("+")}>+</button>
        <button onClick={() => props.onDigitClick(4)}>4</button>
        <button onClick={() => props.onDigitClick(5)}>5</button>
        <button onClick={() => props.onDigitClick(6)}>6</button>
        <button onClick={props.backspace}>DEL</button>

        <button onClick={() => props.onDigitClick(1)}>1</button>
        <button onClick={() => props.onDigitClick(2)}>2</button>
        <button onClick={() => props.onDigitClick(3)}>3</button>
        <button onClick={() => props.onDigitClick(0)}>0</button>
        <button onClick={() => props.dotClick()}>.</button>
        <button onClick={props.onCompute}>=</button>
      </div>
    </>
  );
};

export default NumPad;
