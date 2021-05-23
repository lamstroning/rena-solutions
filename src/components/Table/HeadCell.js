import {Button, TableCell} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

export default function HeadCell({children, sorted}) {
    return (
        <TableCell>
            <Button className='button button_white button_hover'>
                {children}
                <ExpandLessIcon className='icon icon_flip'/>
            </Button>
        </TableCell>
    )
}