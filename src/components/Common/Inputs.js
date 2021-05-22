import {TextField} from '@material-ui/core';

export function Input ({error, errorMessage, ...props}) {
    return (
        <div className='input-container'>
            <TextField
                className='input input_bg-white'
                error={error}
                fullWidth
                variant='outlined'
                size='small'
                {...props}
            />
            {error &&
                <div className='input-message input-message_error'>
                    {errorMessage}
                </div>
            }
        </div>
    )
}