import React, { useState } from 'react';

const Tasks = ()=>{
    const [task, setTask]=useState([])
    const [hoverIndex, setHoverIndex]=useState(null)

    const handleKeyDown = (e)=>{
        if (e.key === 'Enter'){
            e.preventDefault();
            let newTaskArr = [...task, e.target.value]
           setTask(newTaskArr);
           console.log(newTaskArr);
           
           e.target.value = "";
        }
    }

    const handleDelete = (index)=>{
        let remainTask = task.filter((item, ind)=>(
            ind !== index
        ))
        console.log(remainTask);
        setTask(remainTask)
    }

    const handleMouseEnter = (index)=>{
        setHoverIndex(index)
    }

    const handleMouseLeave = ()=>{
        setHoverIndex(null)
    }


    return(
        <>
        <div>
            {task.map((item, index)=>(
                <div key={index} 
                onClick={()=>handleDelete(index)} 
                onMouseEnter={()=>handleMouseEnter(index)}
                onMouseLeave={()=>handleMouseLeave()}
                style={{textDecoration:hoverIndex===index?'line-through': 'none'}}>{item}</div>
        
            ))}

        </div>
        <div>Add a new todo:</div>
        <form>
            <div><input type="text" onKeyDown={handleKeyDown}></input></div>
        </form>
        
        </>
    )
}

export default Tasks;