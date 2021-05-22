import {Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';
import HeadCell from '../Table/HeadCell';

export function TaskList({tasks}) {
    return (
        <Table className='table'>
            <TableHead className='table__head'>
                <TableRow>
                    <HeadCell sorted>
                        Название
                    </HeadCell>
                    <HeadCell sorted>
                        Оборудование
                    </HeadCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {tasks.map(({equipment, name}, index) =>
                    <TableRow key={index}>
                        <TableCell>{name}</TableCell>
                        <TableCell>{equipment}</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}