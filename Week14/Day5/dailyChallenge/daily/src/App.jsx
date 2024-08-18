import { useState } from 'react'
import './App.css'

function App() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("")

  const getNumber1 = (e) =>{
    setNumber1(Number(e.target.value));
  }

  const getNumber2 = (e) =>{
    setNumber2(Number(e.target.value));
  }


  const getSum = ()=>{
    setResult(number1+number2)
  }

  return (
    <>
     <input type="number" value={number1} onChange={getNumber1}></input>
     <input type="number" value={number2} onChange={getNumber2}></input>
     <button onClick={getSum}>add me</button>
     <p>{result}</p>
    </>
  )
}

export default App
