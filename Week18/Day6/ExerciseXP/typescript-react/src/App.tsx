import Greeting from './components/Greeting'
import Counter from './components/Counter'
import UserCard from './components/UserCard'
import Fetch from './components/Fetch'
import './App.css'

function App() {
  
  return (
    <>
     <Greeting name='John'/>
     <Counter/>
     <UserCard name='John' age={20}/>
     <UserCard name='John'/>
     <UserCard age={20}/>
     <Fetch/>
    </>
  )
}

export default App
