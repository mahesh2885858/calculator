type history = {
  currentValue: string;
  prevValue: string;
  currentOperator: string;
  total: string;
  id: string;
};
type state = {
  currentValue: string;
  prevValue: string;
  currentOperator: string;
  prevOperator: string;
  total: string;
  history: history[];
};
const State: state = {
  currentValue: "",
  prevValue: "",
  currentOperator: "",
  prevOperator: "",
  total: "",
  history: [],
};
export default State;
