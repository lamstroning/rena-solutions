import {TextField} from '@material-ui/core';

export function Input (props) {
    return (
        <TextField
            className='input input_bg-white'
            fullWidth
            variant='outlined'
            size='small'
            {...props}
        />
    )
}