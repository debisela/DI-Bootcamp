import React from "react";
import { connect } from "react-redux";
import { toggleTask, removeTask } from "../redux/action";

const TodoList = ({tasks,toggleTask, removeTask})=>{
return(
<ul>
    {tasks.map(item=>(
        <li key={item.id}>
            {item.text}
            <button onClick={()=>toggleTask(item.id)}>Toggle</button>
            <button onClick={()=>removeTask(item.id)}>Delete</button>
        </li>
    ))}
</ul>
)
}

const mapStateToProps = (state)=>({
    tasks:state.tasks,
})

const mapDispatchToProps = {
    toggleTask,
    removeTask
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)