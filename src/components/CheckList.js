import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import draft from '../asetss/images/draft-icon.png';
import scrap from '../asetss/images/scrap.png';
import { makeStyles } from '@material-ui/styles';

import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
    Typography,
    withStyles,
    Button
} from '@material-ui/core';

import { theme } from '../theme/theme';

const TableHeader = withStyles(theme => ({
    root: {
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        backgroundColor: theme.palette.darkGreen,
        color: 'white'
    }
}))(Box);

const StyledTableHead = withStyles(theme => ({
    root: {
        '& th': {
            backgroundColor: theme.palette.darkGreen,
            color: 'white',
            fontSize: "18px"
        }
    },
}))(TableHead);


const useStylesHeder = makeStyles(theme => ({
    root: {},
    tableRightBorder: {
        borderWidth: 0,
        borderRightWidth: 1,
        borderColor: 'white',
        borderStyle: 'solid',
    },
}));

const useStyles = makeStyles(theme => ({
    root: {},
    tableRightBorder: {
        borderWidth: 0,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
    },
}));

const useStyles2 = makeStyles(theme => ({
    root: {},
    tableRightBorder: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
    },
}));

export default function CheckList() {
    const location = useLocation();
    const [checkList, setCheckList] = useState([]);
    const [edit, setEdit] = useState(false);
    const [action, setAction] = useState('');
    const [result, setResult] = useState('');
    const [expected, setExpected] = useState('');

    const classes = useStyles();
    const classes2 = useStyles2();
    const classesHeader = useStylesHeder();

    useEffect(() => {
        console.log(location.state); // result: 'some_value'
    }, [location]);

    function saveChecklist(id) {
        const newCheckList = checkList;
        newCheckList.splice(id - 1, 1, {
            id,
            action,
            result,
            expected
        });
        setCheckList([...newCheckList]);
    }

    function addChecklist() {
        setEdit(false);
        if (!action && !result && !expected)
            return;
        setCheckList([...checkList, {
            id: checkList.length + 1,
            action,
            result,
            expected
        }]);
        setAction('');
        setResult('');
        setExpected('');
    }

    function newTask() {
        setEdit(true);
    }

    return (
        <Box
            display='flex'
            mx='auto'
            overflow='auto'
            maxWidth={theme.size.appWidth}
            width={1}
            height={1}
            fontFamily="Roboto"
        >
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                className='text text_vertical'
                color='white'
                width={64}
                bgcolor={theme.palette.orange}
            >
                Контролируемые технологические параметры
            </Box>
            <Box
                width={1}
                display='flex'
                flexDirection='column'
                overflow='auto'
            >

                <Box display='flex' justifyContent="space-between" p='3'>
                    <Box display="flex">
                        <Box m={1} p={1}>
                            <img src={draft} alt='' />
                        </Box>
                        <Box fontSize={24} p={2}>
                            Задание на ремонт №{location.state.number}
                        </Box>

                    </Box>
                    <Box display="flex" p={1}>
                        <Box m={1} >
                            <img src={scrap} alt='' />
                        </Box>
                        <Button
                            size='medium'
                            variant='contained'
                            color='primary'

                            style={{ width: '138px', height: '41px' }}
                        >
                            Заполнен
                            </Button>

                    </Box>

                </Box>
                <Box display='flex' justifyContent='space-between' fontSize={18} p={2}>
                    <Box display='flex' >
                        <Box width='40px'></Box>
                        <Box fontWeight='bold' p={1} lineHeight={1}>
                            Оборудование
                        </Box>
                        <Box display='flex' flexDirection='column' justifyContent='flex-start'>
                            <Box p={1}>
                                Шифр: {location.state.code}
                            </Box>
                            <Box p={1}>
                                Наименование: {location.state.name}
                            </Box>
                        </Box>

                    </Box>
                    <Box>
                        Работы начаты: {new Date().toLocaleString().replace(',', ' ')}
                    </Box>
                </Box>
                <TableHeader
                    mt={2}
                    p={4}
                >
                    <Box fontWeight="fontWeightBold" fontSize="24px" m={1} align='center'>
                        Выполняемые работы
                </Box>
                </TableHeader>
                <Box
                    flex={1}
                    overflow='auto'
                    bgcolor='#F2F2F2'
                >
                    <Table stickyHeader>
                        <StyledTableHead>
                            <TableRow>
                                <TableCell className={classesHeader.tableRightBorder}>N/N</TableCell>
                                <TableCell className={classesHeader.tableRightBorder}>Действия</TableCell>
                                <TableCell className={classesHeader.tableRightBorder}>Ожидаемый результат</TableCell>
                                <TableCell>Фактический результат</TableCell>
                            </TableRow>
                        </StyledTableHead>
                        <TableBody >
                            {checkList.map(task =>
                                <TableRow key={task.id}>
                                    <TableCell className={classes.tableRightBorder}>{task.id}</TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <TextField
                                            value={task.action}
                                            onBlur={() => saveChecklist(task.id)}
                                            onFocus={event => {
                                                setAction(task.action);
                                                event.currentTarget.value = action;
                                            }}
                                            onChange={event => setAction(event.currentTarget.value)}
                                        />
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <TextField
                                            value={task.expected}
                                            onBlur={() => saveChecklist(task.id)}
                                            onChange={event => setExpected(event.currentTarget.value)}
                                        />
                                    </TableCell>
                                    <TableCell className={classes2.tableRightBorder}>
                                        <TextField
                                            value={task.result}
                                            onBlur={() => saveChecklist(task.id)}
                                            onChange={event => setResult(event.currentTarget.value)}
                                        />
                                    </TableCell>
                                </TableRow>
                            )}
                            <TableRow onClick={newTask}>
                                <TableCell />
                                <TableCell>
                                    <TextField
                                        onBlur={addChecklist}
                                        onChange={event => setAction(event.currentTarget.value)}
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        onBlur={addChecklist}
                                        onChange={event => setExpected(event.currentTarget.value)}
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        onBlur={addChecklist}
                                        onChange={event => setResult(event.currentTarget.value)}
                                    />
                                </TableCell>
                            </TableRow>
                            {edit &&
                                <TableRow onClick={newTask}>
                                    <TableCell />
                                    <TableCell />
                                    <TableCell />
                                    <TableCell />
                                </TableRow>
                            }
                        </TableBody>
                    </Table>
                </Box>
            </Box>
        </Box >
    );
}
