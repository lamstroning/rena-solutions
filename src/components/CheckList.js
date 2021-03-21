import React, {useState} from 'react';

import {Box, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography} from '@material-ui/core';

import {theme} from '../theme/theme';

export default function CheckList() {
    const [checkList, setCheckList] = useState([]);
    const [edit, setEdit] = useState(false);
    const [action, setAction] = useState('');
    const [result, setResult] = useState('');
    const [expected, setExpected] = useState('');

    function saveChecklist() {
        if (!action && !result && !expected)
            return;
        setCheckList([...checkList, {
            id: checkList.length,
            action,
            result,
            expected
        }]);
        setAction('');
        setResult('');
        setExpected('');
        setEdit(false);
    }

    function newTask() {
        setEdit(true);
    }

    return (
        <Box
            display='flex'
            flexDirection='column'
            overflow='auto'
            mx='auto'
            bgcolor='white'
            width={1}
            maxWidth={theme.size.appWidth}
            p={4}
            height={1}
        >
            <Typography variant='h1' align='center'>
                Чек-листы
            </Typography>
            <Typography align='right' color='primary'>
                Черновик
            </Typography>
            <Box mt={2} p={4}>
                <Typography variant='h2' align='center'>
                    выполняемые работы
                </Typography>
            </Box>
            <Box overflow='auto'>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell colSpan={4} align='center'>
                                выполняемые работы
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>N/N</TableCell>
                            <TableCell>Действия</TableCell>
                            <TableCell>Ожидаемый результат</TableCell>
                            <TableCell>Фактический результат</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {checkList.map(task =>
                            <TableRow key={task.id}>
                                <TableCell>{task.id}</TableCell>
                                <TableCell>
                                    <TextField value={task.action}/>
                                </TableCell>
                                <TableCell>
                                    <TextField value={task.expected}/>
                                </TableCell>
                                <TableCell>
                                    <TextField value={task.result}/>
                                </TableCell>
                            </TableRow>
                        )}
                        <TableRow onClick={newTask}>
                            <TableCell/>
                            <TableCell>
                                <TextField
                                    onBlur={saveChecklist}
                                    onChange={event => setAction(event.currentTarget.value)}
                                />
                            </TableCell>
                            <TableCell>
                                <TextField
                                    onBlur={saveChecklist}
                                    onChange={event => setExpected(event.currentTarget.value)}
                                />
                            </TableCell>
                            <TableCell>
                                <TextField
                                onBlur={saveChecklist}
                                onChange={event => setResult(event.currentTarget.value)}
                            />
                            </TableCell>
                        </TableRow>
                        {edit &&
                            <TableRow onClick={newTask}>
                                <TableCell/>
                                <TableCell/>
                                <TableCell/>
                                <TableCell/>
                            </TableRow>
                        }
                    </TableBody>
                </Table>
            </Box>
        </Box>
    );
}
