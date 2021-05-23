import { getOffsetDate } from './Date';

export const emptyTask = {
    name: '',
    code: '',
    equipment: '',
    authorId: 1,
    date: getOffsetDate(1, 2, 27),
    icon: 'warning'
}

const tasksDB = [
    {
        id: 1,
        status: 'finish',
        number: '000000000001',
        authorId: 1,
        name: 'KUKA 5 ARC',
        workerId: 1,
        code: '35663-KL',
        date: '2021-05-21 15:12',
        endDate: '2021-05-21 15:45',
        icon: 'warning',
        checkList: {
            id: 1,
            name: 'Отказ системы управления',
            equipment: 'KUKA KR 6-2',
            actions: [
                {
                    actionID: 1,
                    show: true,
                    value: 'Есть'
                },
                {
                    actionID: 2,
                    rules: [
                        {
                            actionID: 1,
                            compareType: '=',
                            targetValue: 'Есть'
                        }
                    ],
                    show: true,
                    value: 'Есть'
                },
                {
                    actionID: 3,
                    rules: [
                        // it isn't mistake
                        [
                            {
                                actionID: 1,
                                compareType: '=',
                                targetValue: 'Есть'
                            },
                            {
                                actionID: 2,
                                compareType: '=',
                                targetValue: 'Есть'
                            }
                        ]
                    ],
                    show: true,
                    value: 220
                }
            ]
        }
    }
]

export function initStorage() {
    if (!localStorage.getItem('taskList'))
        localStorage.setItem('taskList', JSON.stringify(tasksDB));
}

function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

let taskID = 1

export function createTask(task) {
    const taskList = getTasks();
    for (const taskField in task) {
        if (!task[taskField])
            return false;
    }
    taskID = taskList.length
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