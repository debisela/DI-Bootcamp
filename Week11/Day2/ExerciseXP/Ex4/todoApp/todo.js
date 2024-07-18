/*
Create a directory named todoApp.

Inside the todoApp directory, create two files: todo.js and app.js.

In todo.js, define an ES6 module that exports a TodoList class.

The TodoList class should have methods to add tasks, mark tasks as complete, and list all tasks.

Export the TodoList class.

In app.js, import the TodoList class from the todo.js module.

Create an instance of the TodoList class.

Add a few tasks, mark some as complete, and list all tasks.

Run app.js and verify that the todo list operations are working correctly.*/

export class TodoList {
    constructor(){
        this.tasks = [];
    }
    addTask(task){
        this.tasks.push({task, completed: false})
    }
    markTaskComplete(task){
        const taskInd = this.tasks.findIndex(element => element.task === task);
        if (taskInd > -1) {
            this.tasks[taskInd].completed = true
        }
    }
    listTasks(){
        return this.tasks;
    }
}