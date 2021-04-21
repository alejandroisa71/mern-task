import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";

const TareaState = (props) => {
  const initialState = {
    tareas: [],
  };

  //Crear el dispatch y el state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  return <TareaContext.Provider>{props.children}</TareaContext.Provider>;
};

export default TareaState;
