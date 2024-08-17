// import { useState } from 'react'
import './App.css'
import Car from './Components/Car';
import Events from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color';

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
      <Color/>
    </div>
  );
}

export default App
