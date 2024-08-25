import { useState } from "react";

const Cards = (props)=>{

    console.log(props);
    


    return(

        <>
        <div>{props.data.superheroes.map((item)=>(
            <div key={item.id} style={{width:"250px", border:"1px solid black", padding:"20px"}}>
            <img src={item.image} style={{width:"200px"}}/>
            <div><span style={{fontWeight:"bold"}}>Name: </span>{item.name}</div>
            <div><span style={{fontWeight:"bold"}}>Occupation:</span> {item.occupation}</div>
            </div>
        ))}</div>
        </>
    )
}

export default Cards;