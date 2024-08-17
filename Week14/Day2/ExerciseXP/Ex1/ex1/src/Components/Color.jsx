import React, { useEffect, useState } from 'react';

const Color = () =>{
const [favoriteColor, setFavoriteColor] = useState('red')

useEffect(() => {
    alert('useEffect reached');
});

const changeColor= ()=>{
    setFavoriteColor("blue")
}


return(
    <>
    <h1>My favorite color is {favoriteColor}</h1>
    <button
    type="button"
    onClick={()=>changeColor()}
>Change color</button>
    </>
)


}

export default Color