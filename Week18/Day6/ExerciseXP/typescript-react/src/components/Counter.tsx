import React, {useState} from "react";

const Counter: React.FC = ()=>{
    const [count, setCount] = useState<number>(0);

    const increment = ()=>{
        setCount(prev=>prev+1)
    }

    const decrement = ()=>{
        setCount(prev=>prev-1)
    }

    return(
        <>
        <button onClick={()=>decrement()}>-</button>
        <h2>{count}</h2>
        <button onClick={()=>increment()}>+</button>
        </>
    )
}
export default Counter