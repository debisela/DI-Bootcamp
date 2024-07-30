const fs = require('fs')

const tasksFile = './config/tasks.json';
const readTask = () => {
    try {
        const data = fs.readFileSync(tasksFile, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.log(error);
    }
};

const writeTask = (tasks) => {
    try {
        fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2));
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    readTask,
    writeTask
}