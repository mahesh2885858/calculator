import State from "./State";
import HelpCompute from "../helpers/compute";
export type actiontype = {
  type: string;
  data: string;
};
const Reducer = (state: typeof State, action: actiontype): typeof State => {
  switch (action.type) {
    case "DIGIT":
      return { ...state, currentValue: state.currentValue + action.data };
    case "DOT":
      if (state.currentValue.includes(".")) {
        return state;
      } else {
        return { ...state, currentValue: (state.currentValue += action.data) };
      }
    case "OPERATOR":
      if (!state.currentValue && !state.prevValue) {
        if (action.data === "-") {
          return { ...state, currentValue: action.data };
        } else {
          return state;
        }
      } else if (state.currentValue === "-" && !state.prevValue) {
        return state;
      } else if (!state.currentValue && state.prevValue) {
        return { ...state, currentOperator: action.data };
      } else {
        if (!state.currentOperator) {
          const currentDigit = state.currentValue;
          return {
            ...state,
            prevValue: currentDigit,
            currentValue: "",
            currentOperator: action.data,
          };
        } else {
          switch (state.currentOperator) {
            case "+":
              return HelpCompute(state, action, "+");

            case "-":
              return HelpCompute(state, action, "-");

            case "*":
              return HelpCompute(state, action, "*");

            case "/":
              return HelpCompute(state, action, "/");
            default:
              return state;
          }
        }
      }
    case "COMPUTE":
      if (state.currentValue && state.prevValue && state.currentOperator) {
        switch (state.currentOperator) {
          case "+":
            return HelpCompute(state, action, "+");

          case "-":
            return HelpCompute(state, action, "-");

          case "*":
            return HelpCompute(state, action, "*");

          case "/":
            return HelpCompute(state, action, "/");

          default:
            return state;
        }
      } else {
        return state;
      }
    case "ALL_CLEAR":
      return {
        ...state,
        currentOperator: "",
        currentValue: "",
        prevValue: "",
      };
    case "HISTORY":
      const result = state.history.filter((item) => item.id === action.data);
      return {
        ...state,
        prevValue: result[0].prevValue,
        currentValue: result[0].currentValue,
        currentOperator: result[0].currentOperator,
      };
    case "BACK_SPACE":
      if (state.currentValue) {
        const newCurrentValue = state.currentValue.slice(
          0,
          state.currentValue.length - 1
        );
        return { ...state, currentValue: newCurrentValue };
      } else if (!state.currentValue && state.currentOperator) {
        return {
          ...state,
          currentValue: state.currentOperator,
          currentOperator: "",
        };
      } else if (
        !state.currentValue &&
        !state.currentOperator &&
        state.prevValue
      ) {
        return { ...state, currentValue: state.prevValue, prevValue: "" };
      } else {
        return state;
      }
    case "CLEAR_ENTRY":
      const newHistory = state.history.filter(
        (item) => item.id !== action.data
      );
      return { ...state, history: newHistory };
    default:
      return state;
  }
};

export default Reducer;
