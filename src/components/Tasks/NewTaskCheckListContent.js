import {Table, TableCell, TableHead, TableRow} from '@material-ui/core';

export default function NewTaskCheckListContent() {
    return (
        <div className='container row row_offset-2'>
            <Table className='table table_rounded'>
                <TableHead className='table__head table__head_primary'>
                    <TableRow>
                        <TableCell>N/N</TableCell>
                        <TableCell>Действие</TableCell>
                        <TableCell>Ожидаемый результат</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </div>
    );
}