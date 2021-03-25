import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

import {
    Box, Table, TableBody, TableCell, TableHead, TableRow, withStyles, Button, IconButton,
    Dialog, DialogTitle, DialogContent, MenuItem, TextField
} from '@material-ui/core';

import draft from '../asetss/images/draft-icon.png';
import scrap from '../asetss/images/scrap.png';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

import { theme } from '../theme/theme';
import { SmallSelect } from '../theme/SmallSelect';
import { StyledDrawer } from '../theme/Drawer';

const checkList = [
    {
        id: 1,
        action: 'Проверить питание',
        expected: 'Есть',
        result: ''
    },
    {
        id: 2,
        action: 'Замерить напряжение на входе',
        expected: '220В',
        result: ''
    },
    {
        id: 3,
        action: 'Проверить исправность предохранителя',
        expected: 'Исправен',
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
            fontSize: 18
        }
    }
}))(TableHead);

function CameraDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    function handleTakePhoto() {
        // Do stuff with the photo...
        console.log('takePhoto');
    }

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} fullWidth={true}
            maxWidth="xl">
            <DialogTitle id="simple-dialog-title">Фото с камеры</DialogTitle>
            <DialogContent dividers >
                <Box display="flex" justifyContent="center">
                    <Camera isMaxResolution={{ width: 320, height: 240 }}
                        onTakePhoto={(dataUri) => { handleTakePhoto(dataUri); }}
                    />

                </Box>
            </DialogContent>
        </Dialog>
    );
}

function SimpleDialog(props) {
    const [open2, setOpen2] = useState(false);
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleClickOpen2 = () => {
        setOpen2(true);
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Прикрепить файл</DialogTitle>
            <DialogContent dividers>
                <Box display="flex" justifyContent="center">
                    <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleClickOpen2}>
                        <AddAPhotoIcon />
                    </IconButton>
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <AddPhotoAlternateIcon />
                    </IconButton>
                </Box>
            </DialogContent>
            <CameraDialog open={open2} onClose={() => setOpen2(false)} />
        </Dialog>
    );
}

export default function CheckList() {
    const [lock, setLock] = useState(false);

    const [open, setOpen] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    const location = useLocation();

    const [rule1, setRule1] = React.useState('')
    const [rule2, setRule2] = React.useState('')
    const [rule3, setRule3] = React.useState('')
    const [rules, setRules] = React.useState([checkList[0]])

    const handleChange1 = (event) => {
        setRule1(event.target.value);
        if (event.target.value === 'yes') {
            console.log('first rule yes')
            setRules([checkList[0], checkList[1]])
        } else {
            setRules([checkList[0]])
        }
    };

    const handleChange2 = (event) => {
        setRule2(event.target.value);
        if (event.target.value > 240) {
            console.log('second rule yes')
            setRules([checkList[0], checkList[1], checkList[2]])
        }
    };

    const handleChange3 = (event) => {
        setRule3(event.target.value);
    };

    useEffect(() => {
        console.log(location.state); // result: 'some_value'
    }, [location]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickLock = () => {
        setLock(true);
    };

    const renderEquipmentInfo = () =>
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
        </Box>;

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
            <StyledDrawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <Box>
                    {renderEquipmentInfo()}
                </Box>
                <Box mt={10} p={1} fontSize={20} fontWeight='bold'>
                    Контролируемые технологические параметры
                </Box>
                <Box
                    fontWeight='bold'
                    color='white'
                    bgcolor={theme.palette.darkGreen}
                    p={2}
                    borderRadius={24}
                >
                    <Table>
                        <TableRow>
                            <TableCell>
                                Название
                            </TableCell>
                            <TableCell>
                                Текущее значение
                            </TableCell>
                        </TableRow>
                        <TableRow style={{ backgroundColor: 'white', color: 'black' }}>
                            <TableCell>
                                Ток
                            </TableCell>
                            <TableCell>
                                15А
                            </TableCell>
                        </TableRow>
                        <TableRow style={{ backgroundColor: 'white', color: 'black' }}>
                            <TableCell>Напряжение</TableCell>
                            <TableCell>220В</TableCell>
                        </TableRow>
                        <TableRow style={{ backgroundColor: 'white', color: 'black' }}>
                            <TableCell>Код ошибки</TableCell>
                            <TableCell>43ef</TableCell>
                        </TableRow>
                    </Table>
                </Box>
            </StyledDrawer>
            <Box></Box>
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                color='white'
                width={64}
                bgcolor={theme.palette.orange}
            >
                <Button
                    fullWidth
                    className='button button_white button_vertical button_full'
                    onClick={() => setOpenDrawer(true)}
                >
                    Контролируемые технологические параметры
                </Button>
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
                            <IconButton aria-label="scrap" onClick={handleClickOpen}>
                                <img src={scrap} alt='' />
                            </IconButton>
                        </Box>
                        <Box p={1}>
                            {!lock ?
                                <Button
                                    size='medium'
                                    variant='contained'
                                    color='primary'
                                    onClick={handleClickLock}
                                    style={{ width: '138px', height: '41px' }}
                                >
                                    Заполнен
                        </Button> : <React.Fragment ></React.Fragment>
                            }
                        </Box>
                    </Box>
                </Box>
                <Box display='flex' justifyContent='space-between' fontSize={18} p={2}>
                    {renderEquipmentInfo()}
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
                                <TableCell className='border border_white border_right border_bottom'>N/N</TableCell>
                                <TableCell className='border border_white border_right border_bottom'>Действия</TableCell>
                                <TableCell className='border border_white border_right border_bottom'>Ожидаемый результат</TableCell>
                                <TableCell>Фактический результат</TableCell>
                            </TableRow>
                        </StyledTableHead>
                        <TableBody >
                            {rules.map(task =>
                                <TableRow key={task.id}>
                                    <TableCell className='border border_right border_bottom'>
                                        {task.id}
                                    </TableCell>
                                    <TableCell className='border border_right border_bottom'>
                                        {task.action}
                                    </TableCell>
                                    <TableCell className='border border_right border_bottom'>
                                        {task.expected}
                                    </TableCell>
                                    <TableCell className='border border_right border_bottom'>
                                        {task.id === 1 ?
                                            <SmallSelect
                                                fullWidth
                                                variant='outlined'
                                                value={rule1}
                                                onChange={handleChange1}
                                                disabled={lock}

                                            >
                                                <MenuItem value='yes'>Есть</MenuItem>
                                                <MenuItem value='no'>Нет</MenuItem>
                                            </SmallSelect> : <React.Fragment ></React.Fragment>
                                        }
                                        {task.id === 2 ?
                                            <TextField
                                                id="outlined-basic"
                                                label="Значение"
                                                variant="outlined"
                                                onChange={handleChange2}
                                                disabled={lock}
                                            /> : <React.Fragment ></React.Fragment>
                                        }
                                        {task.id === 3 ?
                                            <SmallSelect
                                                fullWidth
                                                variant='outlined'
                                                value={rule3}
                                                onChange={handleChange3}
                                                disabled={lock}
                                            >
                                                <MenuItem value='good'>Исправен</MenuItem>
                                                <MenuItem value='bad'>Не исправен</MenuItem>
                                            </SmallSelect> : <React.Fragment ></React.Fragment>
                                        }
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </Box>
            </Box>
            <SimpleDialog open={open} onClose={() => setOpen(false)} />
        </Box >
    );
}
