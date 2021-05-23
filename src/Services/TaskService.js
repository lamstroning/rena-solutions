export const emptyTask = {
    name: '',
    code: '',
    equipment: '',
    authorId: 1
}
const baseDate = new Date(Date.now())

function getOffsetDate(day, hour, minutes) {
    const tmpDate = baseDate
    tmpDate.setDate(tmpDate.getDate() - day);
    tmpDate.setHours(tmpDate.getHours() - hour);
    tmpDate.setMinutes(tmpDate.getMinutes() - minutes);
    return tmpDate.toLocaleString().replace(',', ' ');
}

const tasksDB = [
    {
        id: 1,
        status: 'finish',
        number: '000000000001',
        authorId: 2,
        name: 'KUKA 5 ARC',
        workerId: 1,
        code: '35663-KL',
        date: getOffsetDate(1, 2, 27),
        endDate: '',
        color: '#F29545',
        icon: 'warning',
        actionsState: {
            "1": "Есть",
            "2": "270",
            "3": "Есть"
        }
    }
]

export function initStorage() {
    localStorage.setItem('taskList', JSON.stringify(tasks));
}

function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

var taskID = 1
var taskNumber = '000000000001'

export function createTask(task) {
    const taskList = getTasks();
    for (const taskField in task) {
        if (!task[taskField])
            return false;
    }
    taskID = length(taskList)
    taskID += 1
    task.id = taskID
    task.number = pad(taskID, 12)
    taskList.push(task);
    localStorage.setItem('taskList', JSON.stringify(taskList))
    return true;
}

export function updateTask(task) {
    const taskList = getTasks();
    for (const taskField in task) {
        if (!task[taskField])
            return false;
    }

    taskList.array.forEach(element => {
        if (element.id == task.id) {
            for (const taskField in task) {
                element[taskField] = task[taskField]
            }
        }
    });

    localStorage.setItem('taskList', JSON.stringify(taskList))
    return true;
}

export function updateActionState(taskID, actionID, value) {
    const taskList = getTasks();

    taskList.array.forEach(element => {
        if (element.id == taskID) {
            if (!element["actionsState"])
                element["actionsState"] = {}
            element["actionsState"][actionID] = value
            if (element["date"] == '') {
                const dateStart = new Date(Date.now())
                element["date"] = dateStart.toLocaleString().replace(',', ' ')
            }
        }
    });

    localStorage.setItem('taskList', JSON.stringify(taskList))
    return true;
}


export function getTasks() {
    return JSON.parse(localStorage.getItem('taskList') || '[]');
}