import { useState } from 'react'
import './App.css'
// import Quote from './Components/Quote'
import quotes from './Components/QuotesDatabase'

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function App() {
  //start always at first quote:
  const [myquote, setMyquote] = useState(
{quote: quotes[0].quote, 
  author: quotes[0].author}
  )

  const [mycolor, setMycolor] = useState(getRandomColor())

  console.log(quotes.length);
  

  // console.log(myquote);

  const getRandomQuote =()=>{
    let randomIndex;
    let newQuote;
    //avoid same quote multiple times in a row:
    do {
    randomIndex = Math.floor(Math.random()* quotes.length);
    newQuote = quotes[randomIndex];
    } while (newQuote.quote === myquote.quote);
   
    setMyquote(newQuote);
    setMycolor(getRandomColor());
}


  return (
    <div style={{backgroundColor:mycolor, height:"100vh", width:"100vw"}}>
      <div style={{backgroundColor:"white",border:"1px solid black", padding:"20px"}}>
        <h1 style={{color:mycolor}}>{myquote.quote}</h1>
        <p>{myquote.author}</p>
        <button style={{backgroundColor:mycolor}} onClick={()=>getRandomQuote()}>new quote</button>
      </div>
    </div>
  )
}

export default App
