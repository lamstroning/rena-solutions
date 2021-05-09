import {TextField} from '@material-ui/core';

export default function NewTask() {
    return (
        <div className='container'>
            <div className='row'>
                <TextField
                    fullWidth
                    className='input input_bg-white'
                    size='small'
                    variant='outlined'
                    placeholder='Введите название задания на ремонт'
                />
            </div>
        </div>
    );
}
