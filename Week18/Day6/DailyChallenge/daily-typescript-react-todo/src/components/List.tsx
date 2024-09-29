import React, { ReactNode } from "react";



interface ListProps{
    items: {id:number; text:string}[]
}

function List({items}:ListProps){
    return(
        <>
        <h2>my todos:</h2>
        {
            items.map((item, index) =>{
return <div key={index}>{item.text}</div>
            })
        }
        </>
    )
}
export default List;