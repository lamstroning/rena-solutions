import {getUser} from '../Services/Auth';
import {Button, TextField} from '@material-ui/core';

export default function Profile() {
    const user = getUser();

    return (
        <div className='page container'>
            <div className='row row_top row_offset-8'>
                <div className='col col_top'>
                    <div className='card card_rounded container container_offset'>
                        <div className='row row_offset-2 col'>
                            <img className='image image_big image_rounded' src={user.avatar} alt=''/>
                        </div>
                        <div className='row row_end row_offset-4 col'>
                            <Button
                                fullWidth
                                className='button'
                                variant='contained'
                                color='primary'
                            >
                                Изменить
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='row row_wrap col col_wide'>
                    <div className='col col_top col_6'>
                        <div className='card card_rounded container container_offset'>
                            <div className='row row_offset-2 col'>
                                <TextField
                                    fullWidth
                                    value={user.name}
                                    label='Имя'
                                    variant='outlined'
                                    size='small'
                                />
                            </div>
                            <div className='row row_offset-2 col'>
                                <TextField
                                    fullWidth
                                    value={user.position}
                                    label='Должность'
                                    variant='outlined'
                                    size='small'
                                />
                            </div>
                            <div className='row row_end row_offset-2 col'>
                                <Button
                                    className='button'
                                    variant='contained'
                                    color='primary'
                                >
                                    Сохранить
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='col col_top col_6'>
                        <div className='card card_rounded container container_offset'>
                            <div className='row row_offset-2 col'>
                                <TextField
                                    fullWidth
                                    label='Новый пароль'
                                    type='password'
                                    variant='outlined'
                                    size='small'
                                />
                            </div>
                            <div className='row row_offset-2 col'>
                                <TextField
                                    fullWidth
                                    label='Повторите пароль'
                                    type='password'
                                    variant='outlined'
                                    size='small'
                                />
                            </div>
                            <div className='row row_end row_offset-2 col'>
                                <Button
                                    className='button'
                                    variant='contained'
                                    color='primary'
                                >
                                    Сохранить
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='col col_top col_6'>
                        <div className='card card_rounded container container_offset'>
                            <div className='row row_offset-2 col'>
                                <TextField
                                    fullWidth
                                    label='Email'
                                    type='email'
                                    variant='outlined'
                                    size='small'
                                />
                            </div>
                            <div className='row row_offset-2 col'>
                                <TextField
                                    fullWidth
                                    label='Телефон'
                                    variant='outlined'
                                    size='small'
                                />
                            </div>
                            <div className='row row_end row_offset-2 col'>
                                <Button
                                    className='button'
                                    variant='contained'
                                    color='primary'
                                >
                                    Сохранить
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
