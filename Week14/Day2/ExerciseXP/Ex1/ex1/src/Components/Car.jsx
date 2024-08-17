import React, { useState } from 'react';
import Garage from './Garage';

const Car = (props) =>{
    console.log(props);
    const [color, setColor] = useState("red");
    
    return(
        <>
        <h1>This car is a {color} {props.model}</h1>
        <Garage size="small" />
        </>
    )
}

export default Car;
