import { ADDTASK, TOGGLETASK, REMOVETASK } from "./action";

const initialState = {
    tasks: []
};

const taskReducer = (state = initialState, action) =>{
    switch (action.type){
        case ADDTASK:
           return{...state, 
            tasks: [...state.tasks, {id: Date.now(), text:action.payload, completed: false}]
        };
    
    case TOGGLETASK:
        return{
            ...state,
            tasks: state.tasks.map(item=> 
                item.id === action.payload?{...item, completed:!item.completed}:item)
        }

    case REMOVETASK:
        return{
            ...state,
            tasks: state.tasks.filter(item=> item.id !==action.payload),
        }
    default:
        return state;
}
}

export default taskReducer