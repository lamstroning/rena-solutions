import {Button, TextField} from '@material-ui/core';

function NameRow() {
    return (
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
    );
}

function TasksRow() {
    return (
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
    );
}

function AuthorRow() {
    return (
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
    );
}

export default function NewTask() {
    return (
        <div className='page container'>
            <NameRow/>
            <TasksRow/>
            <AuthorRow/>
            <div className='area-border'>
                <div className='area-border__label'>Выбор чек-листа</div>
            </div>
        </div>
    );
}
