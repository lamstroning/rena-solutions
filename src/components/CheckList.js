import {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import draft from '../asetss/images/draft-icon.png';
import scrap from '../asetss/images/scrap.png';
import { makeStyles } from '@material-ui/styles';

import {
    Box, Table, TableBody, TableCell, TableHead, TableRow, withStyles, Button
} from '@material-ui/core';

import { theme } from '../theme/theme';

const checkList = [
    {
        id: 0,
        action: '',
        expected: '',
        result: null
    },
    {
        id: 1,
        action: '',
        expected: '',
        result: null
    },
    {
        id: 2,
        action: '',
        expected: '',
        result: null
    }
]

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
    }
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

    const classes = useStyles();
    const classes2 = useStyles2();
    const classesHeader = useStylesHeder();

    useEffect(() => {
        console.log(location.state); // result: 'some_value'
    }, [location]);

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
                <Box
                    display='flex'
                    justifyContent='space-between'
                    p={3}
                >
                    <Box display='flex'>
                        <Box m={1} p={1}>
                            <img src={draft} alt='' />
                        </Box>
                        <Box fontSize={24} p={2}>
                            Задание на ремонт №{location.state.number}
                        </Box>

                    </Box>
                    <Box display='flex' p={1}>
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
                        <Box width={40}/>
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
                                        {task.action}
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        {task.expected}
                                    </TableCell>
                                    <TableCell className={classes2.tableRightBorder}>
                                        {task.result}
                                    </TableCell>
                                </TableRow>
                            )}
                            <TableRow>
                                <TableCell/>
                                <TableCell>
                                </TableCell>
                                <TableCell>
                                </TableCell>
                                <TableCell>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Box>
            </Box>
        </Box >
    );
}
