import {info} from './testInfo';
import image from '../../asetss/images/item.png'

export default function CheckListDetail() {
    return (
        <div className='page container'>
            <div className='row row_center row_offset-6 title title_black'>
                Проверить питание
            </div>
            <div className='card container row row_top row_offset-4'>
                <div className='col'>
                    <div className='row row_center'>
                        <img src={image} alt=''/>
                    </div>
                    <div className='row_offset-6 checklist-description'>
                        {info}
                    </div>
                </div>
            </div>
        </div>
    )
}