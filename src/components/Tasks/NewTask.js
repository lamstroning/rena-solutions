import NewTaskHeader from './NewTaskHeader';
import NewTaskActionList from './NewTaskActionList';
import {useState} from 'react';
import {getCheckListsByEquipment} from '../../Services/CheckListService';
import {TaskList} from './TaskList';


export default function NewTask() {
    const [equipment, setEquipment] = useState('');
    const [selectedChecklist, setSelectedChecklist] = useState({});

    const checklists = getCheckListsByEquipment(equipment);

    return (
        <div className='page container'>
            <NewTaskHeader
                changeEquipment={setEquipment}
                checklistName={selectedChecklist.name}
            />
            <div className='row row_offset-2 row_top'>
                <div className='col col_6'>
                    <TaskList
                        selectChecklist={checklist => setSelectedChecklist(checklist)}
                        checklists={checklists}
                    />
                </div>
                <div className='col col_6'>
                    <NewTaskActionList actions={selectedChecklist.actions}/>
                </div>
            </div>
        </div>
    );
}
