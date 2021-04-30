import { useState } from 'react';

import {
    Box, Table, TableHead, TableBody, TableCell, TableRow, Button
} from '@material-ui/core';

import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import FlashOnIcon from '@material-ui/icons/FlashOn';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import TodayIcon from '@material-ui/icons/Today';
import SchoolIcon from '@material-ui/icons/School';

import { useHistory } from 'react-router';
import { theme } from '../theme/theme';
import CustomTabs from './Tabs/CustomTabs';

const baseDate = new Date(Date.now())

function getOffsetDate(day, hour, minutes) {
    const tmpDate = baseDate
    tmpDate.setDate(tmpDate.getDate() - day);
    tmpDate.setHours(tmpDate.getHours() - hour);
    tmpDate.setMinutes(tmpDate.getMinutes() - minutes);
    return tmpDate.toLocaleString().replace(',', ' ');
}

const tableHeader = [
    {
        key: 'number',
        name: 'Номер задания'
    },
    {
        key: 'auth',
        name: 'Автор'
    },
    {
        key: 'date',
        name: 'Дата'
    }
]

const tasks = [
    {
        id: 0,
        number: '000000000053',
        auth: 'Система',
        name: 'PlazMax CNC-2060',
        code: '98235-ZY',
        date: new Date().toLocaleString().replace(',', ' '),
        color: '#BF2120',
        icon: <PriorityHighIcon/>
    },
    {
        id: 1,
        number: '000000000046',
        auth: 'Петров А.В.',
        name: 'KUKA KR 10 R9',
        code: '35663-KL',
        date: getOffsetDate(1, 2, 27),
        color: '#F29545',
        icon: <FlashOnIcon/>
    },
    {
        id: 2,
        number: '000000000011',
        auth: 'Система',
        name: 'PlazMax CNC-2060',
        code: '23664-OP',
        date: getOffsetDate(2, 1, 49),
        color: '#27927D',
        icon: <TodayIcon/>
    },
    {
        id: 3,
        number: '000000000044',
        auth: 'Система',
        name: 'KUKA 5 ARC',
        code: '23664-OP',
        date: getOffsetDate(2, 1, 37),
        color: '#A3B4BE',
        icon: <SchoolIcon/>
    }
]


export default function Tasks() {
    const history = useHistory();
    const [sortConfig, setSortConfig] = useState({});
    let sortedTasks = [...tasks]
    if (sortConfig !== null) {
        sortedTasks.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.ascending ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.ascending ? 1 : -1;
            }
            return 0;
        });
    }

    const sortButton = sort =>
        <Button
            color='primary'
            className='button button_hover'
            onClick={() => requestSort(sort.key)}
        >
            {sort.name}
            <Box width={20} display='flex' alignItems='center'>
                {sortConfig.key === sort.key &&
                    <ExpandLessIcon className={`icon ${sortConfig.ascending ? '' : 'icon_flip'}`} />
                }
            </Box>
        </Button>;

    function navigate() {
        history.push({
            pathname: '/checklist',
            state: {}
        });
    }

    const requestSort = key => {
        if (sortConfig.key == key && !sortConfig.ascending)
            setSortConfig({});
        else if (sortConfig.key == key)
            setSortConfig({ key, ascending: !sortConfig.ascending });
        else
            setSortConfig({ key, ascending: true });
    }

    const renderRow = task =>
        <TableRow key={task.id}>
            <TableCell>
                <Box
                    borderRadius='50%'
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    width={38}
                    height={38}
                    bgcolor={task.color}
                    color='white'
                >
                    {task.icon}
                </Box>

            </TableCell>
            <TableCell>
                <Box display='flex' alignItems='center'>
                    <Box pl={2}>
                        <Box className='text text_overflow'>
                            №{task.number}
                        </Box>
                        <Box className='text text_overflow'>
                            {task.name}
                        </Box>
                    </Box>
                </Box>
            </TableCell>
            <TableCell>
                <Box>
                    {task.auth}
                </Box>
            </TableCell>
            <TableCell>
                <Box
                    display='flex'
                    justifyContent='space-between'
                    alignItems='center'
                    flexWrap='wrap'
                >
                    <Box>
                        {task.date}
                    </Box>
                </Box>
            </TableCell>
            <TableCell>
                <Button
                    size='medium'
                    fullWidth
                    variant='contained'
                    color='primary'
                    onClick={navigate}
                >
                    Просмотр
                </Button>
            </TableCell>
        </TableRow>;

    return (
        <>
            <Box
                mx='auto'
                width={1}
                maxWidth={theme.size.appWidth}
                px={2}
            >
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                    pt={6}
                    pb={4}
                >
                </Box>
                <div>
                    <CustomTabs content={['x', '2', '2']}/>
                </div>
                <Box
                    bgcolor='white'
                    height={1}
                    borderRadius={16}
                >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell/>
                                {tableHeader.map(sort =>
                                    <TableCell key={sort.key}>
                                        {sortButton(sort)}
                                    </TableCell>
                                )}
                                <TableCell/>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sortedTasks.map(renderRow)}
                        </TableBody>
                    </Table>
                </Box>
            </Box>
        </>
    );
}