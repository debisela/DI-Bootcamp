import {createSlice} from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    todos:[],
};

export const taskSlice = createSlice({
    name: "jjjjj",
    initialState: initialState,
    reducers:{
        addTodo:(state, action)=>{
            state.todos.push({
                id: uuidv4(),
                text: action.payload,
                status: "Mark as done",

        })},
        toggleTodo:(state, action)=>{
            const selected = state.todos.find  (item=> item.id === action.payload);
            console.log(selected);
            if(selected.status === "Mark as done"){
                selected.status = "Done"
            } else{
            selected.status = "Mark as done"
            }
        },
        deleteTodo:(state, action)=>{
            state.todos = state.todos.filter(item =>item.id !== action.payload);

        }

        }
    



})
export const {addTodo, toggleTodo, deleteTodo} = taskSlice.actions;
export default taskSlice.reducer;