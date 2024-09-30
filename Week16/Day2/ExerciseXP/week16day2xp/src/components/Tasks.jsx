import React, {useState} from "react";
import { connect } from "react-redux";
import { addTask } from "../redux/action";

const Tasks = ({addTask})=>{
    const [todo,setTodo]=useState('')


    const handleSubmit = (e)=>{
        e.preventDefault();
        if(todo.trim()){
            addTask(todo);
            setTodo("");
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder="add a todo"></input>
            <button type="submit">add todo</button>

        </form>
    )
}

const mapDispatchToProps = {
    addTask
}

export default connect(null, mapDispatchToProps)(Tasks)