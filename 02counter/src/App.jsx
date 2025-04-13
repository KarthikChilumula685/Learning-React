import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)
  
  const addValue = () =>{
    if(counter<20){
      setCounter(counter+1)
    }
    else{
      setCounter(counter)
    }
  }
  const subValue = () =>{
    if(counter>0) {
      setCounter(counter-1)
    }
    else{
      setCounter(counter)
    }
  }
  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={addValue}>ADD value {counter}</button>
      <button onClick={subValue} >SUBTRACT value {counter}</button>
    </>
  )
}

export default App
