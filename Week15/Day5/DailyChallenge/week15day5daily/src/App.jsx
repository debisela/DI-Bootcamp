import { useState } from 'react'
import superheroes from './components/superheroes.json'
import Cards from './components/Cards'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Superheroes Memory Game</h1>
     <h2>Get points by clicking on an image but don't click on any more tha once</h2>
     <div><Cards data={superheroes}/></div>
    </>
  )
}

export default App
