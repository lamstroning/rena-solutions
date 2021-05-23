import { getUserByName } from './AuthService'
import { getActionByID } from './CheckListService'

const emptyReport = [
    {
        number: 000000000001,
        action: {
            desc: 'Проверить питание мотора',
            expected: 'Есть',
            value: 'Есть',
            conflict: false
        },
        workerId: 1,
        endDate: '',
    }
]

const testRequest = {
    name: 'KUKA KR 6-2',
    workerName: 'Иванов П.С',
    startDate: '2021-04-06',
    endDate: '2021-06-07',
    code: '123111123553',
    checkList: {
        id: 1,
        actions: [
            {
                actionID: 1
            },
            {
                actionID: 2
            }
        ]
    }

}

function isDateBetween(targetDate1, startDate1, endDate1) {
    var startDate = Date.parse(startDate1)
    var endDate = Date.parse(endDate1)
    var targetDate = Date.parse(targetDate1.replace(' ', ','))
    if (targetDate < startDate)
        return false

    if (targetDate > endDate)
        return false

    return true
}

function isConflict(action) {
    var actionData = getActionByID(action.actionID)
    switch (actionData.field) {
        case 'select':
            return action.expected === action.value
        case 'number':
            return action.expected.min <= value && value < action.expected.max
        default:
            return false
    }
}

export function getReport(request, tasks) {
    var result = []
    tasks.array.forEach(task => {
        if ((task.code === request.code) &&
            (task.name === request.name) &&
            (getUserByName(request.workerName).id = task.workerId) &&
            isDateBetween(task.endDate, request.startDate, request.endDate)) {
            task.checkList.actions.forEach((action) => {
                var data = {
                    number: task.number,
                    action: {
                        desc: action.desc,
                        expected: action.expected,
                        value: action.value,
                        conflict: isConflict(action)
                    },
                    workerName: request.workerName,
                    endDate: task.endDate,
                }
                result.push(data)
            })
        }
    });

    return result
}