import {useSelector, useDispatch} from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './taskSlice';
import { useRef } from 'react';

const Task = (props)=>{
    const todos = useSelector((state)=>state.todoapp.todos)


    const dispatch = useDispatch()

    const todoRef = useRef()

    const addTODO=()=>{
        dispatch(addTodo(todoRef.current.value))
    } 
    
    return(
        <div>
            <input ref={todoRef}></input>
            <button onClick={()=>addTODO()}>add task</button>
            <div>{todos.map((item, index)=>(
                <div key={index}>{item.text}<button onClick={()=>dispatch(toggleTodo(item.id))}>{item.status}</button><button onClick={()=>dispatch(deleteTodo(item.id))}>Delete</button></div>))}</div>


        </div>
    )
}

export default Task;