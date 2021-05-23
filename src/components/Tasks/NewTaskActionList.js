import {IconButton, Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';
import {getActionByID, getExpectedString} from '../../Services/CheckListService';
import InfoIcon from '@material-ui/icons/Info';

function ActionListRow({id, index}) {
    const action = getActionByID(id);

    return (
        <TableRow>
            <TableCell>
                {index + 1}
            </TableCell>
            <TableCell>
                {action.desc}
                <IconButton
                    href={`/checklist/info?id=${id}`}
                    className='icon-button icon-button_warning'
                    size='small'
                >
                    <InfoIcon />
                </IconButton>
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
                            <TableRow>
                                <TableCell colSpan={3} align='center'>
                                    Выберите чек-лист
                                </TableCell>
                            </TableRow>
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