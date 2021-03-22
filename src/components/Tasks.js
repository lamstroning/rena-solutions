import {
    Box,
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableRow,
    Button
} from "@material-ui/core";
import { useHistory } from "react-router";
import { Icon, InlineIcon } from "@iconify/react";
import swapVertical from "@iconify/icons-mdi/swap-vertical";
import { FormatBold } from "@material-ui/icons";
import React from "react";
import { theme } from "../theme/theme";

const baseDate = new Date(Date.now())

function getOffsetDate(day, hour, minutes) {
    var tmpDate = baseDate
    tmpDate.setDate(tmpDate.getDate() - day)
    tmpDate.setHours(tmpDate.getHours() - hour)
    tmpDate.setMinutes(tmpDate.getMinutes() - minutes)
    return tmpDate.toLocaleString().replace(',', ' ')
}

const tasks = [
    {
        id: 0,
        number: '000000000053',
        auth: 'Система',
        name: 'PlazMax CNC-2060',
        code: '98235-ZY',
        date: new Date().toLocaleString().replace(',', ' '),
        color: 'red'
    },
    {
        id: 1,
        number: '000000000046',
        auth: 'Петров А.В.',
        name: 'KUKA KR 10 R9',
        code: '35663-KL',
        date: getOffsetDate(1, 2, 27),
        color: 'orange'
    },
    {
        id: 2,
        number: '000000000011',
        auth: 'Система',
        name: 'PlazMax CNC-2060',
        code: '23664-OP',
        date: getOffsetDate(2, 1, 49),
        color: 'green'
    },
]


export default function Tasks() {
    const history = useHistory();
    const [sortConfig, setSortConfig] = React.useState(null);
    let sortedTasks = [...tasks]
    if (sortConfig !== null) {
        sortedTasks.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });
    }

    const requestSort = key => {
        let direction = 'ascending';
        if (sortConfig === null) {
            setSortConfig({ key, direction });
            return
        }
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    }

    const renderRow = task =>
        <TableRow key={task.id}>
            <TableCell>
                <Box
                    borderRadius='50%'
                    width={24}
                    height={24}
                    bgcolor={task.color}
                />

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
                    onClick={() => history.push('/checklist', task)}
                >
                    Просмотр
                    </Button>
            </TableCell>
        </TableRow>;

    return (
        <Box
            mx='auto'
            width={1}
            maxWidth={theme.size.appWidth}
            px={2}
        // height={1}
        >
            <Box
                display='flex'
                alignItems='center'
                justifyContent='space-between'
                py={2}
            >
                <Box fontWeight="fontWeightBold" fontSize="h5.fontSize" fontFamily="Roboto" m={1}>
                    Задания на ремонт
                </Box>
            </Box>
            <Box
                bgcolor='white'
                height={1}
                borderRadius={16}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>

                            </TableCell>
                            <TableCell>
                                <Box display='flex' alignItems='center'>

                                    <Box className='text text_overflow' color='#27927D' fontWeight='bold' fontSize='16px'>
                                        Номер задания
                                </Box>
                                    <Icon icon={swapVertical} style={{ fontSize: '24px', color: '#27927D' }} onClick={() => requestSort('number')} />
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display='flex' alignItems='center'>

                                    <Box className='text text_overflow' color='#27927D' fontWeight='bold' fontSize='16px'>
                                        Автор
                                </Box>
                                    <Icon icon={swapVertical} style={{ fontSize: '24px', color: '#27927D' }} onClick={() => requestSort('auth')} />
                                </Box>

                            </TableCell>
                            <TableCell>
                                <Box display='flex' alignItems='center'>
                                    <Box className='text text_overflow' color='#27927D' fontWeight='bold' fontSize='16px'>
                                        Дата
                                </Box>
                                    <Icon icon={swapVertical} style={{ fontSize: '24px', color: '#27927D' }} onClick={() => requestSort('date')} />
                                </Box>

                            </TableCell>
                            <TableCell>

                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedTasks.map(renderRow)}
                    </TableBody>
                </Table >
            </Box >
        </Box >
    );
}