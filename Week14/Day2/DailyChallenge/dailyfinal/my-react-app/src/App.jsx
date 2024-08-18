import { useState } from 'react'
import './App.css'



function App() {
  const [languages, setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaSript", votes: 0},
    {name: "Java", votes: 0}
  ])

  const updateVote = (index)=>{
  //   //create duplicate of languages array and work only on that:
  //   const newLang = [...languages];
  //   newLang[index].votes++
  //   console.log(newLang);
  //   setLanguages(newLang)
    
  // }

  //other option:
  const newLang = languages.map((language, ind)=>{
return (ind === index)? {...language, votes: ++language.votes}: language;
  });
  setLanguages(newLang);
};

  return (
    <div>
      <h1>Vote Your Language</h1>
      {languages.map((language, index)=>(
        <div key={index}>
          {language.votes} {language.name}
        <button onClick={()=>updateVote(index)}>click me</button>
        </div>
      ))}
    </div>
  )
}

export default App
