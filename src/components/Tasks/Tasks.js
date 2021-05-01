
import {
    Box, Button
} from '@material-ui/core';

import ExpandLessIcon from '@material-ui/icons/ExpandLess'

import { theme } from '../../theme/theme';
import CustomTabs from '../Tabs/CustomTabs';
import TasksTable from './TasksTable';

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
        status: 'new',
        id: 2,
        number: '000000000011',
        auth: 'Система',
        name: 'PlazMax CNC-2060',
        code: '23664-OP',
        date: getOffsetDate(2, 1, 49),
        color: '#27927D',
        icon: 'error'
    },
    {
        status: 'new',
        id: 3,
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
    const Table = () => <TasksTable tasks={tasks}/>;

    return (
        <>
            <Box
                mx='auto'
                width={1}
                maxWidth={theme.size.appWidth}
                px={2}
            >
                <CustomTabs pages={[Table, Table, Table]}/>
            </Box>
        </>
    );
}
