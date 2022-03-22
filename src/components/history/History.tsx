import { Link } from "react-router-dom";
import State from "../reducer/State";
import "./history.scss";
import { MdDelete } from "react-icons/md";
const History = (props: {
  state: typeof State;
  clearEntry: (id: string) => void;
  historyEntry: (id: string) => void;
}) => {
  return (
    <div className="history-container">
      <h1>History</h1>
      <Link to={`/`}>Home</Link>
      <div className="entry-container">
        {props.state.history.map((item) => {
          return (
            <div className="entry" key={item.id}>
              <MdDelete
                className="icon"
                onClick={() => props.clearEntry(item.id)}
              />

              <div onClick={() => props.historyEntry(item.id)}>
                <span>{item.prevValue}</span>
                <span>{item.currentOperator}</span>
                <span>{item.currentValue}</span>
                <p>total:{item.total}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default History;
