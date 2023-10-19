import { useState } from "react";
import "./App.css";

function App() {
  let [score, setScore] = useState(0);


  const addValue = () => {
    if (score < 21) {
      setScore(score ++);
    }
  };

  const removeValue = () => {
    if (score > -1) {
      setScore(score --);
    }
  };
  return (
    <>
      <h2>Add Value And Remove Value</h2>
      <h2>Min Value :- 0 || Max Value :- 20</h2>
      <h2>Counter :- {score}</h2>
      <button onClick={addValue}>Add Value {score}</button>
      <button onClick={removeValue}>Remove Value {score}</button>
    </>
  );
}

export default App;
