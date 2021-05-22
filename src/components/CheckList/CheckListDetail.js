import { info } from './testInfo';
import image from '../../asetss/images/item.png'

const checklistActionDetails = {
    "checkMotorPower": {
        img: '../../asetss/images/imgCheckMotorPower.png',
        name: 'Проверить питание мотора',
        info: [
            'Визуально проверить исправность кабеля кабеля мотора X20-X30',
            'Отключить кабель от робота (разъём X30)',
            'Перевести мультиметр в режим измерения постоянного напряжения',
            'Проверить наличие напряжения 24В= между клеммами 18 и 24',
            'Проверить наличие напряжения 24В= между клеммами 19 и 25'
        ]
    },
    "checkConnection": {
        img: '../../asetss/images/imgCheckConnection.png',
        name: 'Проверить наличие связи',
        info: [
            'Визуально проверить исправность кабеля кабеля связи X21-X31',
            'Отключить кабель от робота и станции управления',
            'Прозвонить линии 1,2,5,6,9,11,10,12'
        ]
    }
}

export default function CheckListDetail(actionName) {
    const actionDetail = checklistActionDetails[actionName]
    return (
        <div className='page container'>
            <div className='row row_center row_offset-6 title title_black'>
                {actionDetail.name}
            </div>
            <div className='card container row row_top row_offset-4'>
                <div className='col'>
                    <div className='row row_center'>
                        <img src={actionDetail.img} alt='' />
                    </div>
                    <div className='row_offset-6 checklist-description'>
                        {actionDetail.info.forEach(function (item, index, array) {
                            { item } <br />
                        })
                        }
                        {info}
                    </div>
                </div>
            </div>
        </div>
    )
}