import { useRef } from 'react';
import { useState } from 'react';
import { useLocation } from "react-router-dom";

import {
    Box, Table, TableBody, TableCell, TableHead, TableRow, Button, IconButton, Drawer,
    Dialog, DialogTitle, DialogContent, MenuItem, TextField, ListItemIcon, Menu, Link, Select
} from '@material-ui/core';

import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import EditIcon from '@material-ui/icons/Edit';
import InfoIcon from '@material-ui/icons/Info';

import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

import CloseIcon from '@material-ui/icons/Close';
import { theme } from '../../theme/theme';

const checkList = [
    {
        id: 1,
        action: 'Проверить питание',
        expected: 'Есть',
        result: 'Есть',
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
        result: 250,
        field: 'number'
    },
    {
        id: 3,
        action: 'Проверить исправность предохранителя',
        expected: 'Исправен',
        result: 'Исправен',
        field: 'select',
        selectItems: [
            'Исправен',
            'Не исправен'
        ]
    }
]

function CameraDialog(props) {
    const { onClose } = props;

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

function EquipmentInfo({ code, name }) {

    const items = [
        {
            category: 'Шифр оборудования',
            value: code || '000322332'
        },
        {
            category: 'Наименование',
            value: name || ' PlazMax CNC-2060'
        }
    ];

    const renderEquipmentItem = item =>
        <div key={item.value} className='row row_between'>
            <div className='col'>
                {item.category}:
            </div>
            <div className='col'>
                {item.value}
            </div>
        </div>;

    return (
        <div className='row row_top'>
            <div className='col'>
                {items.map(renderEquipmentItem)}
            </div>
        </div>
    );
}
function OpenDrawer({ code, name, onClose }) {
    return (
        <Drawer
            classes={{ paper: 'checklist__drawer' }}
            open={true}
            onClose={onClose}
        >
            <Box display='flex' justifyContent='flex-end'>
                <IconButton
                    size='small'
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            </Box>
            <EquipmentInfo code={code} name={name} />
            <Box mt={5} py={5} className='title'>
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
                        <TableCell>Название</TableCell>
                        <TableCell>Текущее значение</TableCell>
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

function SimpleDialog({ onClose, anchor }) {
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
                        <AddAPhotoIcon fontSize='small' />
                    </ListItemIcon>
                    Включить камеру
                </MenuItem>
                <MenuItem onClick={() => inputFile.current.click()}>
                    <ListItemIcon>
                        <AddPhotoAlternateIcon />
                    </ListItemIcon>
                    <Box display='none'>
                        <input type='file' ref={inputFile} />
                    </Box>
                    выбрать из галереи
                </MenuItem>
            </Menu>
            {open &&
                <CameraDialog onClose={() => setOpen(false)} />
            }
        </>
    );
}

function RenderField({ task, onChange, ...props }) {
    const [value, setValue] = useState('');

    const onChangeMiddleware = (e) => {
        setValue(e.currentTarget.value)
        onChange(task, e.currentTarget.value)
    }

    if (task.field === 'select')
        return (
            <Select
                classes={{ root: 'select' }}
                fullWidth
                displayEmpty
                variant='outlined'
                onChange={event => onChange(task, event.target.value)}
                {...props}
            >
                {task.selectItems.map(selectItem =>
                    <MenuItem key={selectItem} value={selectItem}>{selectItem}</MenuItem>
                )}
            </Select>
        );
    return (
        <TextField
            fullWidth
            value={value}
            type={task.field}
            size='small'
            label='Значение'
            variant='outlined'
            // onChange={event => setValue(event.currentTarget.value)}
            onChange={event => onChangeMiddleware(event)}
            {...props}
        />
    );
}

export default function CheckList() {
    const [lock, setLock] = useState(false);
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [openDrawer, setOpenDrawer] = useState(false);
    const location = useLocation();

    const handleChange = (task, value) => {
        if (task.field == 'number' && task.result <= +value)
            setStep(step + 1);
        else if (task.result == value)
            setStep(step + 1);
    };

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
                    <Link href='/'>Список задач</Link>
                </Box>
            </Box>
        );
    return (
        <Box className='checklist page page_row'>
            <Box
                // Remove display none
                display='none'
                // display='flex'
                alignItems='center'
                justifyContent='center'
                color='white'
                width={64}
                bgcolor={theme.palette.orange}
            >
                <Button
                    fullWidth
                    disableTouchRipple
                    className='button button_white button_vertical button_full'
                    onClick={() => setOpenDrawer(true)}
                >
                    Телеметрия
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
                <div className='checklist__header'>
                    <div className='row row_offset-2 row_between'>
                        <div className='col row'>
                            <div className='col'>
                                <EditIcon className='icon icon_border icon_medium' color='primary' />
                            </div>
                            <div className='col title title_black'>
                                Задание на ремонт №{location.state.number}
                            </div>
                        </div>
                        <Button
                            className='button'
                            variant='contained'
                            color='primary'
                            onClick={() => setLock(true)}
                            disabled={lock}
                        >
                            {lock ? 'Заполнен' : 'Заполнить'}
                        </Button>
                    </div>
                    <div className='col row row_offset-2 text'>
                        Отказ системы позиционирования обрабатываемых заготовок
                    </div>
                    <div className='row row_offset-2 row_between text text_bold'>
                        <div className='col'>
                            <EquipmentInfo code={location.state.code} name={location.state.name} />
                        </div>
                        <div className='col'>
                            Работы начаты: {new Date().toLocaleString().replace(',', ' ')}
                        </div>
                    </div>
                </div>
                {/* <Box display='flex' alignItems='center'>
                    <IconButton
                        color='primary'
                        onClick={event => setOpen(event.currentTarget)}
                    >
                        <AttachFileIcon className='icon icon_medium icon_deg45' />
                    </IconButton>
                    Нет вложений
                </Box> */}
                <Box
                    flex={1}
                    overflow='auto'
                    bgcolor='#F2F2F2'
                >
                    <Table className='table-checklist table table_rounded' stickyHeader>
                        <TableHead className='table__head table__head_primary'>
                            <TableRow>
                                <TableCell
                                    padding='none'
                                    className='table__id border border_white border_right border_bottom'
                                >
                                    N/N
                                </TableCell>
                                <TableCell
                                    align='center'
                                    className='table__name border border_white border_right border_bottom'
                                >
                                    Действия
                                </TableCell>
                                <TableCell
                                    align='center'
                                    className='border border_white border_right border_bottom'
                                >
                                    Ожидаемый результат
                                </TableCell>
                                <TableCell align='center'>
                                    Фактический результат
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {checkList.map((task, index) =>
                                index < step &&
                                <TableRow className='table__row table__row_hovering' key={task.id}>
                                    <TableCell className='table__cell border border_right border_bottom'>
                                        {task.id}
                                    </TableCell>
                                    <TableCell className='table__cell table__cell_overflow border border_right border_bottom'>
                                        <div className='row row_between'>
                                            <div className='col text text_nowrap table-checklist__col_name'>
                                                {task.action}
                                            </div>
                                            <IconButton
                                                href='/checklist/info'
                                                className='icon-button icon-button_warning'
                                                size='small'
                                            >
                                                <InfoIcon />
                                            </IconButton>
                                        </div>
                                    </TableCell>
                                    <TableCell className='table__cell border border_right border_bottom'>
                                        {task.expected}
                                    </TableCell>
                                    <TableCell className='table__cell border border_right border_bottom'>
                                        <RenderField
                                            task={task}
                                            onChange={handleChange}
                                            disabled={lock}
                                        />
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </Box>
            </Box>
            {
                open && <SimpleDialog anchor={open} onClose={() => setOpen(null)} />
            }
        </Box >
    );
}
