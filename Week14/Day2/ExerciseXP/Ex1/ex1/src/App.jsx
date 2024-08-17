// import { useState } from 'react'
import './App.css'
import Car from './Components/Car';
import Events from './Components/Events';
import Phone from './Components/Phone';

const carinfo = {name: "Ford", model: "Mustang"};

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
      <Car model={carinfo.model}/>     
      </header>
      <Events/>
      <Phone/>
    </div>
  );
}

export default App
