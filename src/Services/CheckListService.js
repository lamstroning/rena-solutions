const actionsDB = [
    {
        id: 1,
        desc: 'Проверить питание мотора',
        expected: {
            type: 'selector',
            value: 'Есть'
        },
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
        expected: {
            type: 'selector',
            value: 'Есть'
        },
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
        expected: {
            type: 'input',
            min: 195,
            max: 240,
            units: 'В'
        }
    }
]

const checkListsDB = [
    {
        id: 1,
        name: 'Отказ системы управления',
        equipment: 'KUKA KR 6-2',
        actions: [
            {
                actionID: 1
            },
            {
                actionID: 2,
                rules: [
                    {
                        actionID: 1,
                        compareType: '=',
                        targetValue: 'Есть'
                    }
                ]
            },
            {
                actionID: 3,
                rules: [
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
            }
        ]
    }
]

export function getCheckListsByName(name) {
    result = []
    checkListsDB.forEach((element) => {
        if (element.name.startsWith(name)) {
            result.push(element)
        }
    })
    return result
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
