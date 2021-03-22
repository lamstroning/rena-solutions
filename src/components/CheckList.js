import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import draft from '../asetss/images/draft-icon.png';
import scrap from '../asetss/images/scrap.png';
import { makeStyles } from '@material-ui/styles';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

import {
    Box, Table, TableBody, TableCell, TableHead, TableRow, withStyles, Button, IconButton,
    Dialog, DialogTitle, DialogContent, MenuItem
} from '@material-ui/core';

import { theme } from '../theme/theme';
import {SmallSelect} from '../theme/SmallSelect';

const checkList = [
    {
        id: 1,
        action: 'Проверить питание',
        expected: 'Есть',
        result: ''
    },
    {
        id: 2,
        action: 'Замерить напряжение',
        expected: '220В',
        result: ''
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

function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Прикрепить файл</DialogTitle>
            <DialogContent dividers alignItems='center'>
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <AddAPhotoIcon />
                </IconButton>
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <AddPhotoAlternateIcon />
                </IconButton>
            </DialogContent>
        </Dialog>
    );
}

export default function CheckList() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const classes = useStyles();
    const classes2 = useStyles2();
    const classesHeader = useStylesHeder();

    useEffect(() => {
        console.log(location.state); // result: 'some_value'
    }, [location]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
    };

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
                        <Box>
                            <IconButton aria-label="scrap" onClick={handleClickOpen}><img src={scrap} alt='' /></IconButton>

                        </Box>
                        <Box p={1}>
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
                </Box>
                <Box display='flex' justifyContent='space-between' fontSize={18} p={2}>
                    <Box display='flex' >
                        <Box width={40} />
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
                                    <TableCell className={classes.tableRightBorder}>
                                        {task.id}
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        {task.action}
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        {task.expected}
                                    </TableCell>
                                    <TableCell className={classes2.tableRightBorder}>
                                        <SmallSelect
                                            fullWidth
                                            variant='outlined'
                                            value={task.result}
                                        >
                                            <MenuItem value=''>Выберите значение</MenuItem>
                                            <MenuItem>true</MenuItem>
                                            <MenuItem>false</MenuItem>
                                        </SmallSelect>
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
            <SimpleDialog open={open} onClose={handleClose} />
        </Box >
    );
}
