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
    return checkList.filter(({name}) => name.indexOf(filterName) != -1);
}
