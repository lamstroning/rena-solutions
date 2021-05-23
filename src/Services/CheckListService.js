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
            max: 240
        }
    },
    {
        id: 4,
        desc: 'Снять крышку',
        field: 'select',
        selectItems: ['Снята', 'Нет'],
        expected: 'Снята',
        detail: {
            img: '../../asetss/images/imgRemovingCover.png',
            name: 'Снять крышку',
            info: [
                'Выкрутите из крышки 7 винтов M3x10-10.9 с полукруглой головкой и снимите крышку'
            ]
        }
    },
    {
        id: 5,
        desc: 'Ослабить винты на двигателе',
        field: 'select',
        selectItems: ['Ослаблены', 'Нет'],
        expected: 'Ослаблены',
        detail: {
            img: '../../asetss/images/imgTensioning.png',
            name: 'Ослабить винты на двигателе',
            info: [
                'Ослабьте 2 винта M4x10-10.9 с цилиндрической головкой на двигателе'
            ]
        }
    },
    {
        id: 6,
        desc: 'Натяжение ремня',
        field: 'select',
        selectItems: ['Натяжён', 'Нет'],
        expected: 'Натяжён',
        detail: {
            img: '',
            name: 'Натяжение ремня',
            info: [
                'Вставьте подходящий инструмент (например, отвертку) в соответствующее отверстие в креплении двигателя и осторожно нажмите на двигатель влево, чтобы натянуть зубчатый ремень.'
            ]
        }
    },
    {
        id: 7,
        desc: 'Затяжение винтов',
        field: 'select',
        selectItems: ['Затянуты', 'Нет'],
        expected: 'Затянуты',
        detail: {
            img: '',
            name: 'Затяжение винтов',
            info: [
                'Слегка затяните 2 винта M4x10-10.9 с цилиндрической головкой на двигателе'
            ]
        }
    },
    {
        id: 8,
        desc: 'Подключение устройства измерения натяжения',
        field: 'select',
        selectItems: ['Подключено', 'Нет'],
        expected: 'Подключено',
        detail: {
            img: '',
            name: 'Подключение устройства измерения натяжения',
            info: [
                'Подключите устройство измерения натяжения ремня.'
            ]
        }
    },
    {
        id: 9,
        desc: 'Регулировка натяжения',
        field: 'number',
        units: 'Гц',
        expected: {
            min: 200,
            max: 310
        },
        detail: {
            img: '../../asetss/images/imgMeasuringDevice.png',
            name: 'Регулировка натяжения',
            info: [
                'Отстегнуть зубчатый ремень и удерживать датчик около его центра на расстоянии 2-3 мм от вибрирующего зубчатого ремня',
                'Считайте результат измерения на приборе для измерения натяжения ремня.'
            ]
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
                show: true
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
    },
    {
        id: 2,
        name: 'Регулировка натяжения зубчатой передачи',
        equipment: 'KUKA KR 6-2',
        actions: [
            {
                id: 1,
                actionID: 4,
                show: true
            },
            {
                id: 2,
                actionID: 5,
                rules: [
                    {
                        actionID: 4,
                        compareType: '=',
                        targetValue: 'Снята'
                    }
                ],
                show: false
            },
            {
                id: 3,
                actionID: 6,
                rules: [
                    {
                        actionID: 5,
                        compareType: '=',
                        targetValue: 'Ослаблены'
                    }
                ],
                show: false
            },
            {
                id: 4,
                actionID: 7,
                rules: [
                    {
                        actionID: 6,
                        compareType: '=',
                        targetValue: 'Натяжён'
                    }
                ],
                show: false
            },
            {
                id: 5,
                actionID: 8,
                rules: [
                    {
                        actionID: 7,
                        compareType: '=',
                        targetValue: 'Затянуты'
                    }
                ],
                show: false
            },
            {
                id: 6,
                actionID: 9,
                rules: [
                    {
                        actionID: 8,
                        compareType: '=',
                        targetValue: 'Подключено'
                    }
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

export function getCheckListsByEquipment(equipment) {
    let result = []
    if (equipment.length < 3) {
        return result
    }

    checkListsDB.forEach((element) => {
        if (element.equipment.startsWith(equipment)) {
            result.push(element)
        }
    })
    return result
}

export function getActionByID(actionID) {
    let result
    actionsDB.forEach(action => {
        if (action.id === actionID)
            result = action
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
    let result
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
    let result
    checkList.actions.forEach((action) => {
        if ((action.actionID === actionID) && ('value' in action)) {
            result = action.value
        }
    })
    return result
}

function getActionShowed(checkList, actionID) {
    let result
    checkList.actions.forEach((action) => {
        if ((action.actionID === actionID) && ('show' in action)) {
            result = action.show
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
                    return rule.targetValue === value
                default:
                    return false
            }
        case 'number':
            switch (rule.compareType) {
                case '...':
                    return rule.min <= value && value < rule.max
                default:
                    return false
            }
        default:
            return false
    }
}

// return flag that checklist filled
export function updateCurrentCheckList(currentCheckList) {
    let counter = 0
    currentCheckList.actions.forEach((action) => {
        if ('rules' in action) {
            let showed = true
            let orResult = false
            action.rules.forEach((rule) => {
                // it's an array, concate subitems via AND
                if (Array.isArray(rule)) {
                    let andResult = true
                    rule.forEach((subRule) => {
                        andResult = andResult && ruleResult(subRule, currentCheckList)
                        showed = showed && getActionShowed(currentCheckList, subRule.actionID)
                        if (getActionValue(currentCheckList, subRule.actionID) === undefined) {
                            showed = false
                        }
                    })
                    orResult = orResult || andResult
                } else {
                    // other rules concate via OR
                    orResult = orResult || ruleResult(rule, currentCheckList)
                    showed = showed && getActionShowed(currentCheckList, rule.actionID)
                    if (getActionValue(currentCheckList, rule.actionID) === undefined) {
                        showed = false
                    }
                }
            })
            action.show = orResult
            if (showed) {
                counter++
            }
        } else {
            counter++
        }
    })

    return counter === currentCheckList.actions.length
}
