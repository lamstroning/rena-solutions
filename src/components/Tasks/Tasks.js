import CustomTabs from '../Tabs/CustomTabs';
import TasksTable from './TasksTable';
import { useState } from 'react';
import {getTasks} from '../../Services/TaskService';

const tasks = getTasks();

export default function Tasks() {
    const [tasksFiltered, setTasksFiltered] = useState(tasks)
    const Table = () => <TasksTable tasks={tasksFiltered} />;

    function filterTasks(filter) {
        filter == 'all'
            ? setTasksFiltered(tasks)
            : setTasksFiltered(tasks.filter(task => task.status == filter))
    }

    return (
        <div className='page page_small'>
            <CustomTabs filter={filterTasks} table={Table} />
        </div>
    );
}
