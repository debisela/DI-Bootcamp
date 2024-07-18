import {TodoList}  from './todo.js';
const todoList = new TodoList();

todoList.addTask('Buy food');
todoList.addTask('Cook Dinner');
todoList.addTask('Clean House');
todoList.markTaskComplete('Clean House')
const taskList = todoList.listTasks();
taskList.forEach(element => {
    if (element.completed) {
        console.log(`${element.task} - completed`)
    } else {
        
    }
    console.log(`${element.task} - not completed`);
});

