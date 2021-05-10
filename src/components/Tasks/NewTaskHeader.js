import {Button, TextField} from '@material-ui/core';

export default function NewTaskHeader() {
    return (
        <>
            <div className='row row_offset-2'>
                <div className='col col_10'>
                    <TextField
                        fullWidth
                        className='input input_bg-white'
                        size='small'
                        variant='outlined'
                        placeholder='Введите название задания на ремонт'
                    />
                </div>
                <div className='col col_2'>
                    <Button
                        fullWidth
                        variant='contained'
                        className='button'
                        color='primary'
                    >
                        Создать
                    </Button>
                </div>
            </div>
            <div className='row row_offset-2'>
                <div className='col col_5'>
                    <TextField
                        fullWidth
                        className='input input_bg-white'
                        size='small'
                        variant='outlined'
                        placeholder='Введите название оборудования'
                    />
                </div>
                <div className='col col_5'>
                    <TextField
                        fullWidth
                        className='input input_bg-white'
                        size='small'
                        variant='outlined'
                        placeholder='Введите шифр оборудования'
                    />
                </div>
            </div>
            <div className='row row_offset-2'>
                <div className='col col_3'>
                    <TextField
                        fullWidth
                        className='input input_bg-white'
                        size='small'
                        variant='outlined'
                        placeholder='Исполнитель'
                    />
                </div>
            </div>
        </>
    );
}