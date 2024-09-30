export const ADDTASK = 'add_task';
export const TOGGLETASK = 'toggle_task'
export const REMOVETASK = 'remove_task'

export const addTask = (text)=>{
    return{
        type: ADDTASK,
        payload: text
    }
}

export const toggleTask = (id) =>{
    return{
        type: TOGGLETASK,
        payload: id,
    }
}

export const removeTask = (id)=>{
    return{
        type: REMOVETASK,
        payload: id
    }
}

