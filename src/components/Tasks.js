import {
    Box,
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableRow,
    Button
} from "@material-ui/core";
import React from "react";
import { theme } from "../theme/theme";
import { useHistory } from "react-router";
import { Icon, InlineIcon } from "@iconify/react";
import swapVertical from "@iconify/icons-mdi/swap-vertical";

const tasks = [
    {
        id: 0,
        number: '000000000053',
        auth: 'Система',
        name: 'PlazMax CNC-2060',
        date: '04.03.2021',
        color: 'red'
    },
    {
        id: 1,
        number: '000000000046',
        auth: 'Петров А.В.',
        name: 'KUKA KR 10 R9',
        date: '04.03.2021',
        color: 'orange'
    },
    {
        id: 2,
        number: '000000000011',
        auth: 'Система',
        name: 'PlazMax CNC-2060',
        date: '05.03.2021',
        color: 'green'
    },
]


export default function Tasks() {
    const history = useHistory();

    let sortedTasks = [...tasks]

    const sort = (sortField) => {
        if (sortField !== null) {
            console.log(sortField);
            sortedTasks = []
            var sortedArray = [];
            for (var i = 0; i < tasks.length; i++) {
                // Push each JSON Object entry in array by [value, key]
                sortedArray.push([tasks[i][sortField], i]);
            }
            sortedArray.sort()

            for (var i = 0; i < sortedArray.length; i++) {
                sortedTasks.push(tasks[sortedArray[i][1]]);
            }

            console.log(sortedTasks);
        }
    };

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
                    onClick={() => history.push('/checklist')}
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
            height={1}
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

                                    <Box className='text text_overflow' color='#27927D'>
                                        Номер задания
                                </Box>
                                    <Icon icon={swapVertical} style={{ fontSize: '24px' }} onClick={() => sort('number')} />
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display='flex' alignItems='center'>

                                    <Box className='text text_overflow' color='#27927D'>
                                        Автор
                                </Box>
                                    <Icon icon={swapVertical} style={{ fontSize: '24px' }} onClick={() => sort('auth')} />
                                </Box>

                            </TableCell>
                            <TableCell>
                                <Box display='flex' alignItems='center'>
                                    <Box className='text text_overflow' color='#27927D'>
                                        Дата
                                </Box>
                                    <Icon icon={swapVertical} style={{ fontSize: '24px' }} />
                                </Box>

                            </TableCell>
                            <TableCell>

                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedTasks.map(renderRow)}
                    </TableBody>
                </Table>
            </Box>
        </Box >
    );
}