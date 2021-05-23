
import {TaskList} from './TaskList';
import {getCheckListsByEquipment} from '../../Services/CheckListService';

export default function NewTaskChoiceCheckList({equipment}) {
    const checklists = getCheckListsByEquipment(equipment);

    return (
        <>
            <div className='row row_offset-2 col'>
                <TaskList checklists={checklists}/>
            </div>
        </>
    );
}