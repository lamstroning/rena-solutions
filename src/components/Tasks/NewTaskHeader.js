import {Button} from '@material-ui/core';
import {createTask, emptyTask} from '../../Services/TaskService';
import {useState} from 'react';
import {Input} from '../Common/Inputs';
import {getUser} from '../../Services/AuthService';

export default function NewTaskHeader() {
    const [task, setTask] = useState(emptyTask);
    const [showError, setShowError] = useState(false);

    function newTask() {
        setShowError(
            !createTask(task)
        );
        if (!showError) {

        }
    }

    return (
        <>
            <div className='row row_offset-2'>
                <div className='col col_10'>
                    <Input
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
                        error={showError && !task.equipment}
                        errorMessage='Заполните поле'
                        onChange={event => setTask({...task, equipment: event.currentTarget.value})}
                        placeholder='Введите название оборудования'
                    />
                </div>
                <div className='col col_5'>
                    <Input
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
                        error={showError && !task.authorId}
                        errorMessage='Заполните поле'
                        value={getUser(task.authorId).name}
                        placeholder='Исполнитель'
                        disabled
                    />
                </div>
            </div>
        </>
    );
}