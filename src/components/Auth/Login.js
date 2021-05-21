import { useState } from 'react';
import { useHistory } from 'react-router';

import {
    Box, Button, FormControl, InputAdornment, InputLabel,
    Link, OutlinedInput, Typography
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';

import authorization from '../../Services/AuthService';

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
        <Box
            className='login'
            p={4}
            height='100vh'
            display='flex'
            justifyContent='center'
            alignItems='center'
        >
            <Box
                display='flex'
                flexDirection='column'
                bgcolor='white'
                p={4}
                borderRadius={35}
                width={400}
            >
                <Typography
                    align='center'
                    variant='subtitle1'
                    color='primary'
                >
                    Авторизация
                </Typography>
                <Typography
                    align='center'
                    variant='subtitle2'
                    color='primary'
                >
                    Доступ для незарегистрированных пользователей закрыт
                </Typography>
                <Box
                    mx='auto'
                    mt={4}
                    width={286}
                >
                    <FormControl
                        fullWidth
                        variant='outlined'
                    >
                        <InputLabel>
                            Логин
                        </InputLabel>
                        <OutlinedInput
                            value={login}
                            label='Логин'
                            onChange={event => setLogin(event.currentTarget.value)}
                            startAdornment={
                                <InputAdornment>
                                    <PersonIcon color='primary' />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </Box>
                <Box
                    mx='auto'
                    mt={4}
                    width={286}
                >
                    <FormControl
                        fullWidth
                        variant='outlined'
                    >
                        <InputLabel>Пароль</InputLabel>
                        <OutlinedInput
                            type='password'
                            variant='outlined'
                            label='Пароль'
                            value={password}
                            onChange={event => setPassword(event.currentTarget.value)}
                            startAdornment={
                                <InputAdornment>
                                    <LockIcon color='primary' />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </Box>
                <Box
                    width={226}
                    mt={6}
                    mx='auto'
                >
                    <Button
                        size='large'
                        fullWidth
                        variant='contained'
                        color='primary'
                        onClick={handleClick}
                    >
                        Вход
                    </Button>
                </Box>
                <Box
                    mt={2}
                    mx='auto'
                >
                    <Link href='#'>
                        Забыли пароль?
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}
