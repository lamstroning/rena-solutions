import NewTaskHeader from './NewTaskHeader';
import NewTaskChoiceCheckList from './NewTaskChoiceCheckList';
import NewTaskCheckListContent from './NewTaskCheckListContent';
import {useState} from 'react';


export default function NewTask() {
    const [equipment, setEquipment] = useState('');

    return (
        <div className='page container'>
            <NewTaskHeader changeEquipment={setEquipment}/>
            <div className='row row_offset-2 row_top'>
                <div className='col col_6'>
                    <NewTaskChoiceCheckList equipment={equipment}/>
                </div>
                <div className='col col_6'>
                    <NewTaskCheckListContent/>
                </div>
            </div>
        </div>
    );
}
