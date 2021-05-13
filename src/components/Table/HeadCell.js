import {Box, Button, TableCell} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

export default function HeadCell({children, sorted}) {
    return (
        <TableCell>
            <Button
                color='primary'
                className='button button_hover'
            >
                {children}
                <Box width={20} display='flex' alignItems='center'>
                    <ExpandLessIcon className='icon icon_flip'/>
                </Box>
            </Button>
        </TableCell>
    )
}