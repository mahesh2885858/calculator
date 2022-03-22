import NumPad from "./components/Numpad/NumPad";
import "./app.scss";
import { Route, Routes, useNavigate } from "react-router";
import History from "./components/history/History";
import { useReducer } from "react";
import Reducer from "./components/reducer/Reducer";
import State from "./components/reducer/State";

function App() {
  const [state, dispatch] = useReducer(Reducer, State);
  const navigate = useNavigate();
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
  const historyEntry = (id: string) => {
    dispatch({ type: "HISTORY", data: id });
    navigate("/");
  };
  const clearEntry = (id: string) => {
    dispatch({ type: "CLEAR_ENTRY", data: id });
  };
  const backspace = () => {
    dispatch({ type: "BACK_SPACE", data: "" });
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <NumPad
              onOperatorClick={onOperatorClick}
              onDigitClick={onDigitClick}
              dotClick={dotClick}
              onCompute={onCompute}
              allClear={allClear}
              state={state}
              backspace={backspace}
            />
          }
        />
        <Route
          path="/history"
          element={
            <History
              clearEntry={clearEntry}
              historyEntry={historyEntry}
              state={state}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
