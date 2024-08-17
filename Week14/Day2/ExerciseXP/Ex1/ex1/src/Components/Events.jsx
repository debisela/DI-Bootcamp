import React, { useState } from 'react';

const Events = ()=>{
const [inputValue, setInputValue] = useState('');
const [isToggleOn, setIsToggleOn] = useState(true)

const ClickMe = ()=>{
alert('I was clicked')
}

const handleKeyDown = (event)=>{
    if (event.key === 'Enter'){
        alert(`The Enter key was pressed, your input is: ${inputValue}`)
        setInputValue(inputValue)
    }
}
const on = ()=>{
    setIsToggleOn(prevState => !prevState)
}

return (
    <>
    <button
    type="button"
    onClick={()=>ClickMe()}
> Click me</button>
<input type="text" 
value={inputValue}
onChange={(e) => setInputValue(e.target.value)}
onKeyDown={handleKeyDown} 
placeholder="Press the ENTER key"></input>
 <button
    type="button"
    onClick={()=>on()}
>{isToggleOn? 'ON':'OFF'}</button>
</>

)
}


export default Events