import {Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';
import HeadCell from '../Table/HeadCell';

export function TaskList({selectChecklist, checklists}) {
    return (
        <Table className='table table_rounded'>
            <TableHead className='table__head table__head_primary'>
                <TableRow>
                    <HeadCell sorted>
                        Название
                    </HeadCell>
                </TableRow>
            </TableHead>
            <TableBody className='table__body'>
                {!checklists.length &&
                    <TableRow>
                        <TableCell align='center'>
                            Введите название оборудования
                        </TableCell>
                    </TableRow>
                }
                {checklists.map((checklist, index) =>
                    <TableRow
                        key={index}
                        className='table__row table__row_hovering'
                        onClick={() => selectChecklist(checklist)}
                    >
                        <TableCell>{checklist.name}</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}