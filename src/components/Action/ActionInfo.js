import { useLocation } from 'react-router';
import { queryGET } from '../../Services/Location';
import { getActionByID } from '../../Services/CheckListService';
import { Link } from '@material-ui/core';

export default function ActionInfo() {
    const location = useLocation();
    // const actionID = queryGET(location).id;
    const action1 = JSON.parse(localStorage.getItem('action'))
    const actionID = action1.id
    console.log(actionID)
    const action = getActionByID(actionID);
    const actionDetail = action?.detail;

    console.log(action)

    if (!actionID || !action)
        return (
            <div className='title title_center title_black container'>
                <div className='row row_center row_offset-2'>
                    Действие не найдено
                 </div>
                <Link className='row row_center row_offset-2' href='/'>
                    Вернутся на гланую
                </Link>
            </div>
        )

    return (
        <div className='page container'>
            <div className='card container'>
                <div className='row row_center row_offset-6 title title_black'>
                    {actionDetail.name}
                </div>
                {actionDetail.img &&
                    <div className='row row_offset-6 row_center col col_12'>
                        <img src={actionDetail.img} alt='' />
                    </div>
                }
                <div className='row_offset-6 checklist-description'>
                    <ol>
                        {actionDetail.info.map(info =>
                            <li>{info}</li>
                        )}
                    </ol>
                </div>
            </div>
        </div>
    )
}