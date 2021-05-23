import { getUserByName } from './AuthService'
import { getActionByID } from './CheckListService'

const testRequest = {
    name: 'KUKA 5 ARC',
    workerName: 'Петров И. Г.',
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
    const startDate = Date.parse(startDate1)
    const endDate = Date.parse(endDate1)
    const targetDate = Date.parse(targetDate1.replace(' ', ','))
    if (targetDate < startDate)
        return false

    return targetDate <= endDate;


}

function isConflict(action) {
    const actionData = getActionByID(action.actionID)
    switch (actionData.field) {
        case 'select':
            return !(actionData.expected === action.value)
        case 'number':
            return !(actionData.expected.min <= action.value && action.value < actionData.expected.max)
        default:
            return true
    }
}

export function getReport(request, tasks) {
    const result = []
    tasks.forEach(task => {
        if ((task.code === request.code) &&
            (task.name === request.name) &&
            (getUserByName(request.workerName).id === task.workerId) &&
            isDateBetween(task.endDate, request.startDate, request.endDate)) {
            task.checkList.actions.forEach(action =>
                result.push({
                    number: task.number,
                    action: {
                        actionData: getActionByID(action.actionID),
                        value: action.value,
                        conflict: isConflict(action)
                    },
                    workerName: request.workerName,
                    endDate: task.endDate
                })
            )
        }
    });

    return result
}