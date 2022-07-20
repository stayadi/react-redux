import React, { useContext } from "react";
import NoteContext from "../Context/NoteContext";

const Counter = () => {
    const count = useContext(NoteContext)

  return (
    <>
      <p>{count.state}</p>
      <div className="btn-container">
        <button onClick={() => count.dispatch({ type: "INCREMENT" })}>
          {" "}
          Increment
        </button>
        <button onClick={() => count.dispatch({ type: "DECREMENT" })}>
          {" "}
          Decrement
        </button>
        <button onClick={() => count.dispatch({ type: "RESET" })}> Reset</button>
      </div>
    </>
  );
};

export default Counter;
