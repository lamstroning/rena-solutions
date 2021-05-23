import {getTasks} from '../../Services/TaskService';
import {TaskList} from './TaskList';

export default function NewTaskChoiceCheckList() {
    const tasks = getTasks();

    if (!tasks.length)
        return (
            <div className='row row_center'>
                Заданий нет
            </div>)
    return (
        <>
            <div className='row row_offset-2 col'>
                <div className='card card_rounded'>
                    <TaskList tasks={tasks}/>
                </div>
            </div>
        </>
    );
}