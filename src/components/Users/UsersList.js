import {IconButton, Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import {createUser} from '../../Services/AuthService';

export default function UsersList({userList, selectUser}) {
    const newUser = createUser();

    return (
        <div className='card card_rounded'>
            <Table className='table table_rounded'>
                <TableHead className='table__head table__head_primary'>
                    <TableRow>
                        <TableCell className='table__cell'>Пользватели</TableCell>
                        <TableCell className='table__cell table__cell_align-right table__cell_dense'>
                            <IconButton
                                onClick={() => selectUser(newUser)}
                                size='small'
                            >
                                <AddIcon className='icon icon_offset icon_white'/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {userList.map(user =>
                        <TableRow key={user.name} className='table__row table__row_hovering'>
                            <TableCell
                                onClick={() => selectUser(user)}
                                className='table__cell'
                                colSpan={2}
                            >
                                {user.name}
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}