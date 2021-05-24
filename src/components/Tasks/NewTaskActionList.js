import { IconButton, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { getActionByID, getExpectedString } from '../../Services/CheckListService';
import InfoIcon from '@material-ui/icons/Info';

function ActionListRow({ action, index }) {
    const actionData = getActionByID(action.actionID);

    return (
        <TableRow>
            <TableCell>
                {index + 1}
            </TableCell>
            <TableCell>
                {action.desc}
                <IconButton
                    href={`/checklist/info?id=${action.actionID}`}
                    className='icon-button icon-button_warning'
                    size='small'
                >
                    <InfoIcon />
                </IconButton>
            </TableCell>
            <TableCell>
                {getExpectedString(action.actionID)}
            </TableCell>
        </TableRow>
    )
}

export default function NewTaskActionList({ actions = [] }) {

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
                        {actions.map((action, index) =>
                            <ActionListRow action={action} index={index} />
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}