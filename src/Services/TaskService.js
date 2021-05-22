const tasks = {
    name: 'PlazMax CNC-2060',
    id: 'PlazMax CNC-2060',
    equipment: 'PlazMax CNC-2060',
    authorId: 1
}

export const emptyTask = {
    name: '',
    code: '',
    equipment: '',
    authorId: 1
}

export function createTask(task) {
    const taskList = getTasks();
    for (const taskField in task) {
        if (!task[taskField])
            return false;
    }

    taskList.push(task);
    localStorage.setItem('taskList', JSON.stringify(taskList))
    return true;
}

export function getTasks() {
    return JSON.parse(localStorage.getItem('taskList') || '[]');
}