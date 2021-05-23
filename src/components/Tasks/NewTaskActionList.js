import {Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';
import {getActionByID, getExpectedString} from '../../Services/CheckListService';

function ActionListRow({id, index}) {
    const action = getActionByID(id);

    return (
        <TableRow>
            <TableCell>
                {index + 1}
            </TableCell>
            <TableCell>
                {action.desc}
            </TableCell>
            <TableCell>
                {getExpectedString(id)}
            </TableCell>
        </TableRow>
    )
}

export default function NewTaskActionList({actions = []}) {

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
                        {!actions.length &&
                            <TableCell colSpan={3} align='center'>
                                Выберите чек-лист
                            </TableCell>
                        }
                        {actions.map(({id}, index) =>
                            <ActionListRow id={id} index={index}/>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}