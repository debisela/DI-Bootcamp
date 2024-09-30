import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {
    tasks:[]
};

export const taskSlice = createSlice({
    name: "tasks",
    initialState:initialState,
    reducers:{
        //add task
        add: (state, action)=>{
            state.tasks.push({
                id: nanoid(),
                task: action.payload,
                active: true,
                createddate: Date.now(),
                //planneddate:action.payload,
            });
        },
        //remove task:
        remove: (state, action)=>{
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        //remove all tasks:
        clear: (state)=>{
            state.tasks = [];
        },
        //set active to true or false:
        active: (state, action)=>{
            const task = state.tasks.find(task => task.id === action.payload)
            if (task){
                task.active = !task.active;
            }
        },
        //edit:
        edit: (state, action)=>{
            //..
        }

    }
})

export const {add, clear, remove, active, edit}= taskSlice.actions;
export default taskSlice.reducer;