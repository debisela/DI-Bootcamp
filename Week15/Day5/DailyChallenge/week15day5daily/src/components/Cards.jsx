import { useState } from "react";

const Cards = (props)=>{
    const [superheroes, setSuperheroes]=useState(props.data.superheroes)
    const [currentScore, setCurrentScore] = useState(0)
    const [topScore, setTopScore] = useState(0)
    const [lastClickedId, setLastClickedId]=useState(null)

    console.log(props);

    const shuffleCards=(id)=>{
        const newScore = currentScore + 1;
        if(id!==lastClickedId) {
        setCurrentScore(newScore)
        if(newScore>topScore){
            setTopScore(newScore)
        }
        }
        else {
        setCurrentScore(0)
        }
        setLastClickedId(id)
        
        const shuffledSuperheroes = [...superheroes].sort(()=>Math.random()-0.5)
        setSuperheroes(shuffledSuperheroes)
    }

    return(

        <><div>{currentScore}</div>
        <div>{topScore}</div>
        <div>{superheroes.map((item)=>(
            <div key={item.id} 
            style={{width:"250px", border:"1px solid black", padding:"20px"}}
            onClick={()=>shuffleCards(item.id)}>
            <img src={item.image} style={{width:"200px"}}/>
            <div><span style={{fontWeight:"bold"}}>Name: </span>{item.name}</div>
            <div><span style={{fontWeight:"bold"}}>Occupation:</span> {item.occupation}</div>
            </div>
        ))}</div>
        </>
    )
}

export default Cards;