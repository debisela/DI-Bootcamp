import { useContext } from "react"
import { TasksContext } from "../App"
import TaskRemove from "./TaskRemove"


const Taskslist = (props)=>{
    const {state} = useContext(TasksContext)

return(
<>
{
    state.tasks.map(item=>{
        return(
            <div key={item.id}>
                {item.name}
                <TaskRemove id={item.id}/>
            </div>
        )
    })
}
</>
)


}

export default Taskslist