import React, {useState} from "react";
import List from "./List";

interface Todo {
    id:number,
    text:string
}

const TodoApp:React.FC = ()=>{
const [todos, setTodos] = useState<Todo[]>([
    {id:1, text: "do laundry"},
    {id:2, text: "go groceries shopping"},
])

const addTodo = ()=>{
    const newTodo:Todo = {
        id: todos.length +1,
    text: `New todo at ${new Date().toLocaleDateString()}`
    };
    setTodos((prevTodos) =>[...prevTodos, newTodo])
};

return(
<>
<h2>Todo list:</h2>
<button onClick={()=>addTodo()}>Add todo</button>
<List
items={todos}/>
</>

)


}

export default TodoApp;
