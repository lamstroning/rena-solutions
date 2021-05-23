import {Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';

export default function NewTaskCheckListContent() {
    return (
        <div className='container'>
            <div className='row row_offset-2'>
                <Table className='table table_rounded'>
                    <TableHead className='table__head table__head_primary'>
                        <TableRow>
                            <TableCell>N/N</TableCell>
                            <TableCell>Действие</TableCell>
                            <TableCell>Ожидаемый результат</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className='table__body'>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>Проверить питание</TableCell>
                            <TableCell>Есть</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>2</TableCell>
                            <TableCell>Измерить напряжение</TableCell>
                            <TableCell>220В</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>3</TableCell>
                            <TableCell>Проверить индекацию</TableCell>
                            <TableCell>Исправна</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}