import {
    Box,
    withStyles,
    MenuItem,
    Select,
    Typography,
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableRow
} from "@material-ui/core";
import React, {useState} from "react";
import {theme} from "../theme/theme";
import {useHistory} from "react-router";

const CustomSelect = withStyles(theme => ({
    root: {
        padding: '12px',
        border: `2px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.main
    }
}))(Select)

const tasks = [
    {
        id: 0,
        number: 1111,
        auth: 'Сидоров. М.П.',
        name: 'PlazMax CNC-2060',
        date: '04.03.2021',
        color: 'red'
    },
    {
        id: 1,
        number: 1112,
        auth: 'Сидоров. М.П.',
        name: 'PlazMax CNC-2060',
        date: '04.03.2021',
        color: 'green'
    },
    {
        id: 2,
        number: 1113,
        auth: 'Сидоров. М.П.',
        name: 'PlazMax CNC-2060',
        date: '05.03.2021',
        color: 'blue'
    },
]

export default function Tasks() {
    const [value, setValue] = useState('default');
    const history = useHistory();
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const renderRow = task =>
        <TableRow key={task.id} onClick={() => history.push('/checklist')}>
            <TableCell>
                <Box display='flex' alignItems='center'>
                    <Box
                        borderRadius='50%'
                        width={24}
                        height={24}
                        bgcolor={task.color}
                    />
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
                <Typography variant='h5' className='text text_nowrap'>
                    Задания на ремонт
                </Typography>
                <Box
                    pl={2}
                    width={300}
                    maxWidth={1}
                >
                    <CustomSelect
                        fullWidth
                        color='primary'
                        variant='outlined'
                        size='small'
                        value={value}
                        onChange={handleChange}
                    >
                        <MenuItem value='default'>Статус</MenuItem>
                        <MenuItem value='number'>Номер задания</MenuItem>
                        <MenuItem value='auth'>Автор</MenuItem>
                        <MenuItem value='date'>Дата создания</MenuItem>
                    </CustomSelect>
                </Box>
            </Box>
            <Box
                bgcolor='white'
                height={1}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Box className='text text_overflow'>
                                    Номер задания
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box className='text text_overflow'>
                                    Автор
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box className='text text_overflow'>
                                    Дата
                                </Box>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tasks.map(renderRow)}
                    </TableBody>
                </Table>
            </Box>
        </Box>
    );
}