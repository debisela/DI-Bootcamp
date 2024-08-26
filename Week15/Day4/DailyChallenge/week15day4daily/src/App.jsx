import { useReducer, useRef, createContext } from 'react'
import Taskslist from './Components/Taskslist'

import './App.css'
import {v4 as uuid4} from "uuid"

export const TasksContext = createContext()

const initialState = {
  tasks: [],
  active: true
}
//action constant types
const ADD_TASK = "add_task";
export const REMOVE_TASK = "remove_task"

const taskReducer = (state, action)=>{
  console.log(action);
  
  if (action.type===ADD_TASK){
    const newTasks = [...state.tasks];
    newTasks.push({id: uuid4(), name: action.payload, active: true})
    return {...state, tasks: newTasks};
  }

  else if(action.type === REMOVE_TASK){
    const filteredTasks = state.tasks.filter(item=>item.id !== action.id);
    return {...state, tasks: filteredTasks};
  }
  return state
}

function App() {
  const [state, dispatch]= useReducer(taskReducer, initialState)

  const taskInputRef = useRef();

  const addTask = () =>{
    const value = taskInputRef.current.value;
    dispatch({type: ADD_TASK, payload: value})
  }

  return (
    <TasksContext.Provider value={{state, dispatch}}>
    <h2>Tasks Manager</h2>
    <input placeholder='add Task' ref={taskInputRef}></input>
    <button onClick={()=>addTask()}>Add Task</button>
    <Taskslist />
    </TasksContext.Provider>
  );
}

export default App
