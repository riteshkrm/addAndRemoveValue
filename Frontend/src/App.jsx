import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [score, setScore] = useState(0)
  
  
  const addValue = ()=>{
    setScore(score ++);
    if(score === 21){
      score = 0
    }

  }

  const removerValue = ()=>{
    setScore(score --);
  }

  return (
    <>
     <h2>Add Value And Remove Value</h2>
     <h2>Counter :- {score}</h2>
     <button 
      onClick={addValue}
     >Add Value {score}</button>
     <button 
      onClick={removerValue}
     >Remove Value {score}</button>
    </>
  )
}

export default App
