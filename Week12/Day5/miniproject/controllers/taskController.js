const {
    readTask,
    writeTask
} = require('../config/data.js')

const _getAllTasks = async (req, res)=>{
    try {
        const result = await readTask();
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(404).json({msg:'cannot read tasks'})
    }
}

const _getOneTask = async (req, res)=>{
    const {id} = req.params;
    try {
        const myTask = await readTask().find(item=>item.id==id);
        res.json(myTask);
    } catch (error) {
        console.log(error);
        res.status(404).json({msg:'task not found'})
    }
}

const _addNewTask = async (req, res)=>{
    const newTask = req.body;
    try {
        const tasks = await readTask()
        const addTask = {...newTask, id: tasks.length+1}
        tasks.push(addTask);
        res.json(tasks);
    } catch (error) {
        console.log(error);
        res.status(404).json({msg:'something wrong'})
    }
}

const _updateOneTask = async (req, res)=>{
    const newTask = req.body;
    const {id} = req.params;
    try {
        let tasks = await readTask()
        const index = tasks.findIndex(item => item.id == id);
        tasks[index]={...tasks[index], ...newTask};
        await writeTask(tasks);
        res.json(tasks);
    } catch (error) {
        console.log(error);
        res.status(404).json({msg:'something wrong'})
    }
}

const _deleteOneTask = async (req, res)=>{
    const {id} = req.params;
    try {
        let tasks = await readTask()
        const index = tasks.findIndex(item => item.id == id);
        tasks.splice(index,1)
        res.json(tasks);
    } catch (error) {
        console.log(error);
        res.status(404).json({msg:'task not found'})
    }
}

module.exports = {
    _getAllTasks,
    _getOneTask,
    _addNewTask,
    _updateOneTask,
    _deleteOneTask
}