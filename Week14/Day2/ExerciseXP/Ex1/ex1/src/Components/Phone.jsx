import React, { useState } from 'react';

const Phone = ()=>{
    const [phone, setPhone] = useState(
        {
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        }
    )

    const changeColor= ()=>{
        let newPhone = {...phone};
        newPhone.color = "blue"
        setPhone(newPhone)
    }

    return(
        <>
        <h2>My phone is a {phone.brand}</h2>
        <p>It is a {phone.color} {phone.model} from {phone.year}</p>
        <button
    type="button"
    onClick={()=>changeColor()}
>Change color</button>
        </>
    )
}

export default Phone;