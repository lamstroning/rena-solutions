const actionsDB = [
    {
        id: 1,
        desc: 'Проверить питание мотора',
        field: 'select',
        selectItems: ['Есть', 'Нет'],
        expected: 'Есть',
        detail: {
            img: '../../asetss/images/imgCheckMotorPower.png',
            name: 'Проверить питание мотора',
            info: [
                'Визуально проверить исправность кабеля кабеля мотора X20-X30',
                'Отключить кабель от робота (разъём X30)',
                'Перевести мультиметр в режим измерения постоянного напряжения',
                'Проверить наличие напряжения 24В= между клеммами 18 и 24',
                'Проверить наличие напряжения 24В= между клеммами 19 и 25'
            ]
        }
    },
    {
        id: 2,
        desc: 'Проверить  наличие связи',
        field: 'select',
        selectItems: ['Есть', 'Нет'],
        expected: 'Есть',
        detail: {
            img: '../../asetss/images/imgCheckConnection.png',
            name: 'Проверить наличие связи',
            info: [
                'Визуально проверить исправность кабеля кабеля связи X21-X31',
                'Отключить кабель от робота и станции управления',
                'Прозвонить линии 1,2,5,6,9,11,10,12'
            ]
        }
    },
    {
        id: 3,
        desc: 'Проверить питание на выходе РЩ',
        field: 'number',
        units: 'В',
        expected: {
            min: 195,
            max: 240,
        }
    }
]

export function getExpectedString(actionID) {
    let action = getActionByID(actionID)
    switch (action.field) {
        case 'select':
            return action.expected
        case 'number':
            return action.expected.min.toString() + "..." + action.expected.max.toString() + action.units
        default:
            return ''
    }
}

const checkListsDB = [
    {
        id: 1,
        name: 'Отказ системы управления',
        equipment: 'KUKA KR 6-2',
        actions: [
            {
                id: 1,
                actionID: 1,
                show: false
            },
            {
                id: 2,
                actionID: 2,
                rules: [
                    {
                        actionID: 1,
                        compareType: '=',
                        targetValue: 'Есть'
                    }
                ],
                show: false
            },
            {
                id: 3,
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
                show: false
            }
        ]
    }
]

export function getCheckListsByName(name) {
    let result = []
    if (name.length < 3) {
        return result
    }

    checkListsDB.forEach((element) => {
        if (element.name.startsWith(name)) {
            result.push(element)
        }
    })
    return result
}

export function getCheckListsByEqupment(equpment) {
    let result = []
    if (equpment.length < 3) {
        return result
    }

    checkListsDB.forEach((element) => {
        if (element.equipment.startsWith(equpment)) {
            result.push(element)
        }
    })
    return result
}

function getActionByID(actionID) {
    var result
    actionsDB.forEach((action) => {
        if (action.id === actionID) {
            result = action
        }
    })
    return result
}

export function getActionDetailByActionID(actionID) {
    let action = getActionByID(actionID)
    if ('detail' in action) {
        return action.detail
    }
}

export function getCheckListActionDetail(checklistID, actionID) {
    var result
    checkListsDB.forEach((checkList) => {
        if (checkList.id === checklistID) {
            checkList.actions.forEach((action) => {
                if (action.actionID === actionID) {
                    result = getActionDetailByActionID(actionID)
                }
            })
        }
    })
    return result
}

function getActionValue(checkList, actionID) {
    var result
    checkList.actions.forEach((action) => {
        if ((action.actionID === actionID) && ('value' in action)) {
            result = action.value
        }
    })
    return result
}

function ruleResult(rule, checkList) {
    const action = getActionByID(rule.actionID)
    const value = getActionValue(checkList, rule.actionID)
    switch (action.field) {
        case 'select':
            switch (rule.compareType) {
                case '=':
                    return action.expected === value
                default:
                    return false
            }
        case 'number':
            return action.expected.min <= value && value < action.expected.max
        default:
            return false
    }
}

export function updateCurrentCheckList(currentCheckList) {
    currentCheckList.actions.forEach((action) => {
        if ('rules' in action) {
            let orResult = false
            action.rules.forEach((rule) => {
                // it's an array, concate subitems via AND
                if (Array.isArray(rule)) {
                    let andResult = true
                    rule.forEach((subRule) => {
                        andResult = andResult && ruleResult(subRule, currentCheckList)
                    })
                    orResult = orResult || andResult
                } else {
                    // other rules concate via OR
                    orResult = orResult || ruleResult(rule, currentCheckList)
                }
            })
            action.show = orResult
        }
    })
}

const checkListFields1 = [
    {
        name: 'Проверить питание мотора',
        value: true
    },
    {
        name: 'Проверить наличие связи',
        value: true
    },
    {
        name: 'Проверить напряжеине на выхоже РЩ',
        value: '195...240В'
    }
]
const checkListFields2 = [
    {
        name: 'Проверить питание мотора',
        value: true
    },
    {
        name: 'Проверить наличие связи',
        value: true
    },
    {
        name: 'Проверить напряжеине на выхоже РЩ',
        value: '195...240В'
    }
]
const checkListFields3 = [
    {
        name: 'Проверить питание мотора',
        value: true
    },
    {
        name: 'Проверить наличие связи',
        value: true
    },
    {
        name: 'Проверить напряжеине на выхоже РЩ',
        value: '195...240В'
    }
]

const checkList = [
    {
        name: 'Проверка системы управления',
        equipments: ['KUKA KR 6-2'],
        checkListFields: checkListFields1
    },
    {
        name: 'Проверка системы управления',
        equipments: ['KUKA KR 6-2'],
        checkListFields: checkListFields2
    },
    {
        name: 'Регулировка натяжения зубчатых',
        equipments: ['KUKA KR 6-2'],
        checkListFields: checkListFields3
    }
]

export function getCheckList() {
    return checkList;
}

export function filterNameCheckList(filterName) {
    return checkList.filter(({ name }) => name.indexOf(filterName) != -1);
}
