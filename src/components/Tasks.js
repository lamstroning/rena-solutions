import {Box, withStyles, MenuItem, Select, Typography, Table, TableHead, TableBody, TableCell} from "@material-ui/core";
import React, {useState} from "react";

const CustomSelect = withStyles(theme => ({
    root: {
        border: `2px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.main
    }
}))(Select)

export default function Tasks() {
    const [value, setValue] = useState('default');
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Box
            mx='auto'
            width={1}
            maxWidth={1024}
            px={2}
            height={1}
        >
            <Box
                display='flex'
                alignItems='center'
                justifyContent='space-between'
                py={2}
            >
                <Typography variant='h5'>
                    Задания на ремонт
                </Typography>
                <Box width={300} maxWidth={1}>
                    <CustomSelect
                        fullWidth
                        color='primary'
                        variant='outlined'
                        size='small'
                        value={value}
                        onChange={handleChange}
                    >
                        <MenuItem value='default'>Статус</MenuItem>
                    </CustomSelect>
                </Box>
            </Box>
            <Box
                bgcolor='white'
                height={1}
            >
                <Table>
                    <TableHead>
                        <TableCell>
                            <Box>
                                Номер задания
                            </Box>
                        </TableCell>
                        <TableCell>
                            <Box>
                                Автор
                            </Box>
                        </TableCell>
                        <TableCell>
                            <Box>
                                Дата
                            </Box>
                        </TableCell>
                    </TableHead>
                    <TableBody>
                        <TableCell>яяяяя</TableCell>
                        <TableCell>яяяяя</TableCell>
                        <TableCell>яяяяя</TableCell>
                    </TableBody>
                </Table>
            </Box>
        </Box>
    );
}