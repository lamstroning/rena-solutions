import {IconButton, Table, TableCell, TableHead, TableRow} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import {userList} from '../../Services/Auth';

export default function UsersList() {
    return (
        <div className='card card_rounded'>
            <Table className='table table_rounded'>
                <TableHead className='table__head table__head_primary'>
                    <TableCell className='table__cell'>Пользватели</TableCell>
                    <TableCell className='table__cell table__cell_align-right table__cell_dense'>
                        <IconButton size='small'>
                            <AddIcon className='icon icon_offset icon_white'/>
                        </IconButton>
                    </TableCell>
                </TableHead>
                {userList.map(user =>
                    <TableRow className='table__row table__row_hovering'>
                        <TableCell
                            className='table__cell'
                            colSpan={2}
                        >
                            {user.name}
                        </TableCell>
                    </TableRow>
                )}
            </Table>
        </div>
    );
}