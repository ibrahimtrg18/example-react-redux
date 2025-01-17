import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions";


function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Counter = {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button>-</button>

      {isLogged ? <h3>valueable Information I shouln't see</h3> : ""}
    </div>
  );
}

export default App;
