import {Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';
import HeadCell from '../Table/HeadCell';

export function TaskList({tasks}) {
    return (
        <Table className='table table_rounded'>
            <TableHead className='table__head table__head_primary'>
                <TableRow>
                    <HeadCell sorted>
                        Название
                    </HeadCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {tasks.map(({equipment, name}, index) =>
                    <TableRow key={index}>
                        <TableCell>{name}</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}