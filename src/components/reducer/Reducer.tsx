import State from "./State";
type actiontype = {
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
              const add =
                parseInt(state.prevValue) + parseInt(state.currentValue);
              return {
                ...state,
                prevValue: add.toString(),
                currentValue: "",
                currentOperator: action.data,
              };
            case "-":
              const sub =
                parseInt(state.prevValue) - parseInt(state.currentValue);
              return {
                ...state,
                prevValue: sub.toString(),
                currentValue: "",
                currentOperator: action.data,
              };
            case "*":
              const multi =
                parseInt(state.prevValue) * parseInt(state.currentValue);
              return {
                ...state,
                prevValue: multi.toString(),
                currentValue: "",
                currentOperator: action.data,
              };
            case "/":
              const division =
                parseInt(state.prevValue) / parseInt(state.currentValue);
              return {
                ...state,
                prevValue: division.toString(),
                currentValue: "",
                currentOperator: action.data,
              };
            default:
              return state;
          }
        }
      }
    case "COMPUTE":
      if (state.currentValue && state.prevValue && state.currentOperator) {
        //

        switch (state.currentOperator) {
          case "+":
            const add =
              parseInt(state.prevValue) + parseInt(state.currentValue);
            return {
              ...state,
              prevValue: add.toString(),
              currentValue: "",
              currentOperator: action.data,
            };
          case "-":
            const sub =
              parseInt(state.prevValue) - parseInt(state.currentValue);
            return {
              ...state,
              prevValue: sub.toString(),
              currentValue: "",
              currentOperator: action.data,
            };
          case "*":
            const multi =
              parseInt(state.prevValue) * parseInt(state.currentValue);
            return {
              ...state,
              prevValue: multi.toString(),
              currentValue: "",
              currentOperator: action.data,
            };
          case "/":
            const division =
              parseInt(state.prevValue) / parseInt(state.currentValue);
            return {
              ...state,
              prevValue: division.toString(),
              currentValue: "",
              currentOperator: action.data,
            };
          default:
            return state;
        }

        //
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
    default:
      return state;
  }
};

export default Reducer;
