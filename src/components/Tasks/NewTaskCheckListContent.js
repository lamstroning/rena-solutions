import {Table, TableCell, TableHead, TableRow} from '@material-ui/core';

export default function NewTaskCheckListContent() {
    return (
        <div className='container'>
            <div className='row row_offset-2 title row_center title_black'>
                Содержание чек-листа
            </div>
            <div className='row row_offset-2'>
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
        </div>
    );
}