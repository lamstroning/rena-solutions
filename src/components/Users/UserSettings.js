import {Button} from '@material-ui/core';

import {Input} from '../Common/Inputs';
import FileInput from '../Common/FileInput';

export default function UserSettings({user}) {
    return (
        <div className='container'>
            <div className='row row_offset-2'>
                <div className='col col_4'>
                    <Input
                        placeholder='Введите логин'
                        value={user.role}
                    />
                </div>
                <div className='col col_4'>
                    <Input
                        placeholder='Введите email'
                        value={user.email}
                    />
                </div>
                <div className='col col_4'>
                    <Input
                        placeholder='Введите роль'
                        value={user.role}
                    />
                </div>
            </div>
            <div className='row row_offset-2'>
                <div className='col col_4'>
                    <div className='row'>
                        <div className='col col_12'>
                            <Input
                                placeholder='Введите фамилия'
                                value={user.lastName}
                            />
                        </div>
                    </div>
                    <div className='row row_offset-2'>
                        <div className='col col_12'>
                            <Input
                                placeholder='Введите имя'
                                value={user.firstName}
                            />
                        </div>
                    </div>
                    <div className='row row_offset-2'>
                        <div className='col col_12'>
                            <Input
                                placeholder='Введите отчество'
                                value={user.middleName}
                            />
                        </div>
                    </div>
                </div>
                <div className='col col_4'>
                    <FileInput file={user.avatar}/>
                </div>
            </div>
            <div className='row row_offset-2'>
                <div className='col col_4'>
                    <Input
                        placeholder='Введите подразделение'
                        value={user.division}
                    />
                </div>
                <div className='col col_4'>
                    <Input
                        placeholder='Введите должность'
                        value={user.position}
                    />
                </div>
            </div>
            <div className='row row_offset-2'>
                <div className='col col_4'>
                    {!user.role &&
                        <Button
                            fullWidth
                            color='primary'
                            variant='contained'
                            className='button'
                        >
                            Создать пользователя
                        </Button>
                    }

                </div>
                <div className='col col_4'>
                    {user.role &&
                        <Button
                            fullWidth
                            color='primary'
                            variant='contained'
                            className='button'
                        >
                            Удалить пользователя
                        </Button>
                    }
                </div>
                <div className='col col_4'>
                    {user.role &&
                        <Button
                            fullWidth
                            color='primary'
                            variant='contained'
                            className='button'
                        >
                            Восстановить пароль
                        </Button>
                    }
                </div>
            </div>
        </div>
    )
}