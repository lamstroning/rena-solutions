import React, {useRef} from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

import {
    Box, Table, TableBody, TableCell, TableHead, TableRow, withStyles, Button, IconButton, Drawer,
    Dialog, DialogTitle, DialogContent, MenuItem, TextField, ListItemIcon, Menu, Link
} from '@material-ui/core';

import AttachFileIcon from '@material-ui/icons/AttachFile'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import EditIcon from '@material-ui/icons/Edit';

import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

import { theme } from '../theme/theme';
import { SmallSelect } from '../theme/SmallSelect';
import CloseIcon from '@material-ui/icons/Close';

const checkList = [
    {
        id: 1,
        action: 'Проверить питание',
        expected: 'Есть',
        result: true,
        field: 'select',
        selectItems: [
            'Есть',
            'Нет'
        ]
    },
    {
        id: 2,
        action: 'Замерить напряжение на входе',
        expected: '220В',
        result: '',
        field: 'text'
    },
    {
        id: 3,
        action: 'Проверить исправность предохранителя',
        expected: 'Исправен',
        result: '',
        field: 'select',
        selectItems: [
            'Исправен',
            'Не исправен'
        ]
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
    const {onClose, selectedValue} = props;

    function handleTakePhoto() {
        // Do stuff with the photo...
        console.log('takePhoto');
    }

    return (
        <Dialog
            onClose={onClose}
            fullWidth
            open={true}
            maxWidth='xl'
        >
            <DialogTitle>Фото с камеры</DialogTitle>
            <DialogContent dividers >
                <Box display='flex' justifyContent='center'>
                    <Camera isMaxResolution={{ width: 320, height: 240 }}
                        onTakePhoto={(dataUri) => { handleTakePhoto(dataUri); }}
                    />

                </Box>
            </DialogContent>
        </Dialog>
    );
}

function EquipmentInfo ({code, name}) {
    return (
        <Box display='flex'>
            <Box width={40}/>
            <Box fontWeight='bold' p={1} lineHeight={1}>
                Оборудование
            </Box>
            <Box display='flex' flexDirection='column' justifyContent='flex-start'>
                <Box p={1}>
                    Шифр: {code}
                </Box>
                <Box p={1}>
                    Наименование: {name}
                </Box>
            </Box>
        </Box>
    );
}
function OpenDrawer({code, name, onClose}) {
    return (
        <Drawer
            classes={{paper: 'checklist__drawer'}}
            open={true}
            onClose={onClose}
        >
            <Box display='flex' justifyContent='flex-end'>
                <IconButton
                    size='small'
                    onClick={onClose}
                >
                    <CloseIcon/>
                </IconButton>
            </Box>
            <EquipmentInfo code={code} name={name}/>
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
        </Drawer>
    );
}

function SimpleDialog({onClose, anchor}) {
    const [open, setOpen] = useState(false);
    const inputFile = useRef(null);

    return (
        <>
            <Menu
                anchorEl={anchor}
                keepMounted
                open={true}
                onClose={onClose}
            >
                <MenuItem onClick={() => setOpen(true)}>
                    <ListItemIcon>
                        <AddAPhotoIcon fontSize='small'/>
                    </ListItemIcon>
                    Включить камеру
                </MenuItem>
                <MenuItem onClick={() => inputFile.current.click()}>
                    <ListItemIcon>
                        <AddPhotoAlternateIcon/>
                    </ListItemIcon>
                    <Box display='none'>
                        <input type='file' ref={inputFile}/>
                    </Box>
                    выбрать из галереи
                </MenuItem>
            </Menu>
            {open &&
                <CameraDialog onClose={() => setOpen(false)}/>
            }
        </>
    );
}

function RenderField({task, onChange, ...props}) {
    if (task.field === 'select')
        return (
            <SmallSelect
                fullWidth
                variant='outlined'
                onChange={onChange}
                {...props}
            >
                {task.selectItems.map(selectItem =>
                    <MenuItem value={selectItem}>{selectItem}</MenuItem>
                )}
            </SmallSelect>
        );
    return (
        <TextField
            label='Значение'
            variant='outlined'
            onChange={onChange}
            {...props}
        />
    );
}

export default function CheckList() {
    const [lock, setLock] = useState(false);

    const [open, setOpen] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    const location = useLocation();

    const [rule1, setRule1] = React.useState('');
    const [rule2, setRule2] = React.useState('');
    const [rule3, setRule3] = React.useState('');
    const [rules, setRules] = React.useState([checkList[0]]);

    const handleChange = event => {
        const newRule = event.target.value;
        setRules(event.target.value);

    };

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

    if (!location.state)
        return (
            <Box
                className='title title_center'
                display='flex'
                justifyContent='center'
                py={3}
            >
                Заявка не выбрана
                <Box px={2}>
                    <Link href='/tasks'>Список задач</Link>
                </Box>
            </Box>
        );
    return (
        <Box
            className='checklist'
            display='flex'
            mx='auto'
            overflow='auto'
            maxWidth={theme.size.appWidth}
            width={1}
            height={1}
        >

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
                {openDrawer &&
                    <OpenDrawer
                        code={location.state.code}
                        onClose={() => setOpenDrawer(false)}
                        name={location.state.name}
                    />
                }
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
                    <Box
                        display='flex'
                        alignItems='center'
                    >
                        <EditIcon className='icon icon_border icon_medium' color='primary'/>
                        <Box className='title' px={2}>
                            Задание на ремонт №{location.state.number}
                        </Box>

                    </Box>
                    <Box display='flex' alignItems='center'>
                        <Box px={2}>
                            <IconButton
                                color='primary'
                                onClick={event => setOpen(event.currentTarget)}
                            >
                                <AttachFileIcon className='icon icon_medium icon_deg45'/>
                            </IconButton>
                        </Box>
                        <Box
                            height={40}
                            width={140}
                        >
                            <Button
                                className='button button_full'
                                variant='contained'
                                color='primary'
                                onClick={() => setLock(true)}
                                disabled={lock}
                            >
                                {lock ? 'Заполнен' : 'Заполнить'}
                            </Button>
                        </Box>
                        <Box px={2}>
                            <IconButton
                                title='Назад'
                                color='primary'
                                href='/tasks'
                            >
                                <CloseIcon className='icon icon_border icon_medium' color='primary'/>
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
                <Box display='flex' justifyContent='space-between' fontSize={18} p={2}>
                    <EquipmentInfo code={location.state.code} name={location.state.name}/>
                    <Box>
                        Работы начаты: {new Date().toLocaleString().replace(',', ' ')}
                    </Box>
                </Box>
                <TableHeader
                    mt={2}
                    p={4}
                >
                    <Box fontWeight='fontWeightBold' fontSize='24px' m={1} align='center'>
                        Выполняемые работы
                </Box>
                </TableHeader>
                <Box
                    flex={1}
                    overflow='auto'
                    bgcolor='#F2F2F2'
                >
                    <Table className='table' stickyHeader>
                        <StyledTableHead>
                            <TableRow>
                                <TableCell
                                    padding='none'
                                    className='table__id border border_white border_right border_bottom'
                                >
                                    N/N
                                </TableCell>
                                <TableCell className='table__name border border_white border_right border_bottom'>
                                    Действия
                                </TableCell>
                                <TableCell className='border border_white border_right border_bottom'>
                                    Ожидаемый результат
                                </TableCell>
                                <TableCell>Фактический результат</TableCell>
                            </TableRow>
                        </StyledTableHead>
                        <TableBody >
                            {checkList.map(task =>
                                task.result &&
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
                                            <RenderField
                                                task={task}
                                                onChange={handleChange1}
                                                disabled={lock}
                                            />
                                            {/*{task.id === 1 ?
                                            <SmallSelect
                                                fullWidth
                                                variant='outlined'
                                                value={rule1}
                                                onChange={handleChange1}
                                                disabled={lock}

                                            >
                                                <MenuItem value='yes'>Есть</MenuItem>
                                                <MenuItem value='no'>Нет</MenuItem>
                                            </SmallSelect> : <></>
                                        }
                                        {task.id === 2 ?
                                            <TextField
                                                label='Значение'
                                                variant='outlined'
                                                value={rule2}
                                                onChange={handleChange2}
                                                disabled={lock}
                                            /> : <></>
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
                                            </SmallSelect> :  <></>
                                        }*/}
                                        </TableCell>
                                    </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </Box>
            </Box>
            {
                open &&
                    <SimpleDialog anchor={open} onClose={() => setOpen(null)}/>
            }
        </Box >
    );
}
