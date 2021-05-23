import {TextField} from '@material-ui/core';

export function Input ({startIcon, error, errorMessage, ...props}) {
    return (
        <div className='input-container'>
            {startIcon &&
                <div className='input-container__icon'>
                    {startIcon}
                </div>
            }
            <TextField
                InputLabelProps={{ shrink: true}}
                inputProps={{ className: startIcon && 'input_icon-start'}}
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