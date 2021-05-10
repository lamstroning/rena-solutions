import {TextField} from '@material-ui/core';

export default function NewTaskChoiceCheckList() {
    return (
        <>
            <div className='row row_offset-2 col'>
                <TextField
                    fullWidth
                    variant='outlined'
                    size='small'
                />
            </div>
            <div className='row row_offset-2'>
                <div className='col col_4'>
                    <TextField
                        fullWidth
                        variant='outlined'
                        size='small'
                    />
                </div>
                <div className='col col_2'>
                    <TextField
                        fullWidth
                        variant='outlined'
                        size='small'
                    />
                </div>
                <div className='col col_4'>
                    <TextField
                        fullWidth
                        variant='outlined'
                        size='small'
                    />
                </div>
                <div className='col col_2'>
                    <TextField
                        fullWidth
                        variant='outlined'
                        size='small'
                    />
                </div>
            </div>
        </>
    );
}