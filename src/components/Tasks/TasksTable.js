import { useHistory } from 'react-router';

import {Box, Button, Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';
import TodayIcon from '@material-ui/icons/Today';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import SchoolIcon from '@material-ui/icons/School';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import {useState} from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

function RenderRow ({task}) {
    const history = useHistory();

    const iconList = {
        error: <PriorityHighIcon/>,
        warning: <FlashOnIcon/>,
        date: <TodayIcon/>,
        study: <SchoolIcon/>
    }


    function navigate() {
        history.push({
            pathname: '/checklist',
            state: {}
        });
    }

    return (
    <TableRow>
        <TableCell>
            <div className={`tasks__icon tasks__icon_${task.icon}`}>
                {iconList[task.icon]}
            </div>
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
    </TableRow>
    );
}


export default function TasksTable({tasks = []}) {
    const [sortConfig, setSortConfig] = useState({});
    const [sortedTasks, setSortedTasks] = useState(tasks);

    const requestSort = key => {
        if (sortConfig.key == key && !sortConfig.ascending)
            setSortConfig({});
        else if (sortConfig.key == key)
            setSortConfig({ key, ascending: !sortConfig.ascending });
        else
            setSortConfig({ key, ascending: true });

        sortedTasks.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.ascending ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.ascending ? 1 : -1;
            }
            return 0;
        });
        setSortedTasks(sortedTasks);
    }


    const SortButton = ({name, type}) =>
        <Button
            color='primary'
            className='button button_hover'
            onClick={() => requestSort(type)}
        >
            {name}
            <Box width={20} display='flex' alignItems='center'>
                {sortConfig.key === type &&
                    <ExpandLessIcon className={`icon ${sortConfig.ascending ? '' : 'icon_flip'}`} />
                }
            </Box>
        </Button>;


    const names = [
        {name: ''},
        {
            name: 'Номер задания',
            key: 'number'
        },
        {
            name: 'Автор',
            key: 'auth'
        },
        {
            name: 'Дата',
            key: 'date'
        },
        {name: ''}
    ]
    return (

        <div className='card card_rounded'>
            <Table>
                <TableHead>
                    <TableRow>
                        {names.map(({name, key}) =>
                            <TableCell key={key}>
                                {name && <SortButton name={name} type={key}/>}
                            </TableCell>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tasks.map(task => <RenderRow task={task}/>)}
                </TableBody>
            </Table>
        </div>
    );
}