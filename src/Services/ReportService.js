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
    equmpment: 'KUKA KR 6-2',
    workerName: 'Иванов П.С',
    startDate: '06.04.2021',
    endDate: '07.06.2021',
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

export function getReport(request) {

}