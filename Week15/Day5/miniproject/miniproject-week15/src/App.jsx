import { useState } from 'react'
import './App.css'
import Tasks from './components/Tasks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Todo's</h1>
     <Tasks/>
    </>
  )
}

export default App
