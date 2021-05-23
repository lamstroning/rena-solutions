import CustomTabs from '../Tabs/CustomTabs';
import TasksTable from './TasksTable';
import {useState} from 'react';

const baseDate = new Date(Date.now())

function getOffsetDate(day, hour, minutes) {
    const tmpDate = baseDate
    tmpDate.setDate(tmpDate.getDate() - day);
    tmpDate.setHours(tmpDate.getHours() - hour);
    tmpDate.setMinutes(tmpDate.getMinutes() - minutes);
    return tmpDate.toLocaleString().replace(',', ' ');
}

const tasks = [
    {
        id: 0,
        status: 'work',
        number: '000000000053',
        auth: 'Система',
        name: 'PlazMax CNC-2060',
        code: '98235-ZY',
        date: new Date().toLocaleString().replace(',', ' '),
        color: '#BF2120',
        icon: 'date'
    },
    {
        id: 1,
        status: 'finish',
        number: '000000000046',
        auth: 'Петров А.В.',
        name: 'KUKA KR 10 R9',
        code: '35663-KL',
        date: getOffsetDate(1, 2, 27),
        color: '#F29545',
        icon: 'warning'
    },
    {
        id: 2,
        status: 'new',
        number: '000000000011',
        auth: 'Система',
        name: 'PlazMax CNC-2060',
        code: '23664-OP',
        date: getOffsetDate(2, 1, 49),
        color: '#27927D',
        icon: 'error'
    },
    {
        id: 3,
        status: 'new',
        number: '000000000044',
        auth: 'Система',
        name: 'KUKA 5 ARC',
        code: '23664-OP',
        date: getOffsetDate(2, 1, 37),
        color: '#A3B4BE',
        icon: 'study'
    }
]

export default function Tasks() {
    const [tasksFiltered, setTasksFiltered] = useState(tasks)
    const Table = () => <TasksTable tasks={tasksFiltered}/>;

    function filterTasks(filter) {
        filter == 'all'
            ? setTasksFiltered(tasks)
            : setTasksFiltered(tasks.filter(task => task.status == filter))
    }

    return (
        <div className='page page_small'>
            <CustomTabs filter={filterTasks} table={Table}/>
        </div>
    );
}
