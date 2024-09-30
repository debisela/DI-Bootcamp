import { useDispatch } from "react-redux";
import { remove } from "./state/slice";

const TaskRemove = ({id})=>{
const removeTask = ()=>{
    dispatch(remove(id))
}

    const dispatch = useDispatch();

    return <button onClick={()=>removeTask()}> X </button>

}

export default TaskRemove;