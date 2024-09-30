import { useRef } from "react";
import { add } from "./state/slice";
import { useDispatch } from "react-redux";

const TaskInput = (props)=>{

    const inputRef = useRef();
    const dateRef = useRef();
    const dispatch = useDispatch();

    const addTask = ()=>{
        const value = inputRef.current?.value.trim();
        const date = dateRef.current?.value;
        console.log(date);
        
        if(value === "") return;
        dispatch(add(value, date));
        inputRef.current.value = ""
    }

    return (
        <>
        <input ref={inputRef} placeholder="add task..."></input>
        <input ref={dateRef} type="datetime-local"></input>
        <button onClick={()=> addTask()}>Add Task</button>
        </>
    )
}

export default TaskInput