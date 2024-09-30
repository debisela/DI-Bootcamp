import TasksList from "./TasksList";
import TaskInput from "./TaskInput";

const DailyTasks = (props)=>{

    return(
        <>
        <h2>Tasks</h2>
        <TasksList/>
        <TaskInput/>
        </>
    )
}

export default DailyTasks;