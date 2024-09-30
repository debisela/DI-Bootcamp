import {createSlice} from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    tasks:{
        Monday:[],
        Tueday:[],
        Wednesday:[],
        Thursday:[],
        Friday:[],
        Saturday:[],
        Sunday:[]
    }
};

export const dailytaskSlice = createSlice({
    name: "taskmanager",
    initialState:initialState,
    reducers:{
        addTask:(state, action)=>{
            state.tasks.Monday.push({
                id: uuidv4(),
                text: action.payload,
                status: "Mark as done",
            })
        }
    }
})

export const {addTask} = dailytaskSlice.actions;
export default dailytaskSlice.reducer;