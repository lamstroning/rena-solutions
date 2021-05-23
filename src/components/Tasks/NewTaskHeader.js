import {Button, TextField} from '@material-ui/core';
import {createTask, emptyTask} from '../../Services/TaskService';
import {useState} from 'react';
import {Input} from '../Common/Inputs';
import {getUser} from '../../Services/AuthService';
import Alert from '../Alert/Alert';
import FilterListIcon from '@material-ui/icons/FilterList';

export default function NewTaskHeader() {
    const [task, setTask] = useState({...emptyTask});
    const [showError, setShowError] = useState(false);
    const [open, setOpen] = useState(false);

    function newTask() {
        const successCreateTask = createTask(task);
        setShowError(!successCreateTask);
        if (successCreateTask)
            openAlert();
    }

    function openAlert() {
        setOpen(true);
        setTimeout(() => setOpen(false), 3000);
        setTask({...emptyTask});
    }

    return (
        <>
            <Alert open={open} status='success'>
                Заявка успешно создана
            </Alert>
            <div className='row row_offset-2'>
                <div className='col col_10'>
                    <Input
                        value={task.name}
                        error={showError && !task.name}
                        errorMessage='Заполните поле'
                        onChange={event => setTask({...task, name: event.currentTarget.value})}
                        placeholder='Введите название задания на ремонт'
                    />
                </div>
                <div className='col col_2'>
                    <Button
                        onClick={newTask}
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
                    <Input
                        value={task.equipment}
                        error={showError && !task.equipment}
                        errorMessage='Заполните поле'
                        onChange={event => setTask({...task, equipment: event.currentTarget.value})}
                        placeholder='Введите название оборудования'
                    />
                </div>
                <div className='col col_5'>
                    <Input
                        value={task.code}
                        error={showError && !task.code}
                        errorMessage='Заполните поле'
                        onChange={event => setTask({...task, code: event.currentTarget.value})}
                        placeholder='Введите шифр оборудования'
                    />
                </div>
            </div>
            <div className='row row_offset-2'>
                <div className='col col_3'>
                    <Input
                        value={task.authorId}
                        error={showError && !task.authorId}
                        errorMessage='Заполните поле'
                        value={getUser(task.authorId).name}
                        placeholder='Исполнитель'
                        disabled
                    />
                </div>
            </div>
            <div className='row row_offset-2'>
                <div className='col col_6'>
                    <div className='row'>
                        <div className='col col_12'>
                            <TextField
                                fullWidth
                                placeholder='Фильтр по названию'
                                className='input input_bg-white'
                                variant='outlined'
                                size='small'
                            />
                        </div>
                        <div className='col'>
                            <Button
                                variant='contained'
                                color='primary'
                                className='button'
                            >
                                <FilterListIcon/>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='col col_6'>
                    <TextField
                        fullWidth
                        placeholder='Выбранный чек-лист'
                        className='input input_bg-white'
                        variant='outlined'
                        size='small'
                    />
                </div>
            </div>
        </>
    );
}