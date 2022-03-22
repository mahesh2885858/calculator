import { actiontype } from "../reducer/Reducer";
import State from "../reducer/State";
import { v4 as uuid } from "uuid";

function HelpCompute(
  state: typeof State,
  action: actiontype,
  operator: string
): typeof State {
  let compute: number | string = "";
  if (operator === "+") {
    compute = parseFloat(state.prevValue) + parseFloat(state.currentValue);
  } else if (operator === "-") {
    compute = parseFloat(state.prevValue) - parseFloat(state.currentValue);
  }
  if (operator === "*") {
    compute = parseFloat(state.prevValue) * parseFloat(state.currentValue);
  }
  if (operator === "/") {
    compute = parseFloat(state.prevValue) / parseFloat(state.currentValue);
  }
  return {
    ...state,
    prevValue: compute.toString(),
    currentValue: "",
    currentOperator: action.data,
    history: [
      ...state.history,
      {
        currentValue: state.currentValue,
        prevValue: state.prevValue,
        currentOperator: state.currentOperator,
        total: compute.toString(),
        id: uuid(),
      },
    ],
  };
}
export default HelpCompute;
