import { useState } from 'react';
import { useHistory } from 'react-router';

import {Button, Link} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';

import authorization from '../../Services/AuthService';
import {Input} from '../Common/Inputs';

export default function Login() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory()

    function handleClick() {
        if (authorization(login, password)) {
            window.localStorage.setItem('auth', 'true');
            history.push('/tasks')
        } else {
            alert('Не правильный логн или пароль');
        }
    }

    return (
        <div className='login'>
            <form className='login__form card card_rounded'>
                <div className='container'>
                    <div className='row row_center'>
                        <div className='title title_primary title_center'>
                            Авторизация
                        </div>
                    </div>
                    <div className='row row_offset-4 row_center'>
                        <Input
                            label='Логин'
                            value={login}
                            onChange={event => setLogin(event.currentTarget.value)}
                            startIcon={<PersonIcon color='primary'/>}
                        />
                    </div>
                    <div className='row row_offset-4 row_center'>
                        <Input
                            type='password'
                            variant='outlined'
                            label='Пароль'
                            value={password}
                            onChange={event => setPassword(event.currentTarget.value)}
                            startIcon={<LockIcon color='primary'/>}
                        />
                    </div>
                    <div className='row row_offset-4 row_center'>
                        <Button
                            className='button'
                            fullWidth
                            variant='contained'
                            color='primary'
                            onClick={handleClick}
                        >
                            Вход
                        </Button>
                    </div>
                    <div className='row row_offset-2 row_center'>
                        <Link href='#' onClick={() => alert('admin/admin - для создания заданий\nuser/user - для заполнения заданий')}>
                            Демо пароль здесь!
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}
