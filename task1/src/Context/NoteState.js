import React, { useReducer } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const initialState = 0;

    const reducer = (state, action) => {
      if (action.type === "INCREMENT") {
        return state + 1;
      } else if (action.type === "DECREMENT") {
        return state - 1;
      } else if (action.type === "RESET") {
        return 0;
      }
    };
  
    
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    <NoteContext.Provider value={{state,dispatch}}>
        {props.children}
    </NoteContext.Provider>
    </>
  );
};

export default NoteState;
