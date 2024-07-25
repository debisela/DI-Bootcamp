const todoTasks = [
    {
      id: 1,
      description: 'Buy groceries',
      completed: false
    },
    {
      id: 2,
      description: 'Complete project report',
      completed: false
    },
    {
      id: 3,
      description: 'Schedule doctor appointment',
      completed: true
    },
    {
      id: 4,
      description: 'Attend team meeting',
      completed: false
    },
    {
      id: 5,
      description: 'Exercise for 30 minutes',
      completed: true
    }
  ];
  
  console.log(todoTasks);

  const getAllItems = (req, res)=>{
     res.json(todoTasks);
}

const addItems = (req, res)=>{
    console.log(req.body);
    const newItem = {...req.body, id: todoTasks.length +1};
    todoTasks.push(newItem);
    res.json(todoTasks)
}

const updateItem = (req, res)=>{
    const {id} = req.params;
    const {description,completed} = req.body

    const index = todoTasks.findIndex(item => item.id == id);

    if(index=== -1){
        return res.status(404).json({msg:'task not found'})
    }

    todoTasks[index]={...todoTasks[index], description, completed};
    res.json(todoTasks);

}

const deleteItem = (req, res)=>{

    const {id} = req.params;

    const index = todoTasks.findIndex(item => item.id == id);

    if(index=== -1){
        return res.status(404).json({msg:'task not found'})
    }

    todoTasks.splice(index,1)
    res.json(todoTasks);

    }

    module.exports = {
        getAllItems,
        addItems,
        updateItem,
        deleteItem
    }