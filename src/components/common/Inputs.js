import {TextField} from '@material-ui/core';

export function Input (props) {
    return (
        <TextField
            fullWidth
            variant='outlined'
            size='small'
            {...props}
        />
    )
}