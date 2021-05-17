import {Box, Button, Drawer, IconButton, Typography} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import avatar from '../../asetss/images/worker-avatar.png'
import {useState} from 'react';

const userProfiles = [
    {
        id: 1,
        userName: 'Иванов П.С.',
        position: 'Инженер-механик',
        avatar: '/src/assets/images/worker-avatar.png'
    }
]

export default function Header({backArrow, title}) {
    const [open, setOpen] = useState(false);

    return (
        <div className='header'>
            <div className='header__wrapper'>
                <div className='row row_between'>
                    <div className='row'>
                        <div className='header__back'>
                            {backArrow &&
                                <IconButton
                                    className='icon icon_white'
                                    onClick={() => window.history.back()}
                                >
                                    <ArrowBackIcon/>
                                </IconButton>
                            }
                        </div>
                        <Button
                            onClick={() => setOpen(!open)}
                            className='row profile button button_left'
                        >
                            <img
                                className='profile__img'
                                width='100%'
                                height='100%'
                                src={avatar}
                            />
                            <div className='profile__name'>
                                <div className='text text_big text_white'>
                                    {userProfiles[0].userName}
                                </div>
                                <div className='text text_white'>
                                    {userProfiles[0].position}
                                </div>
                            </div>
                        </Button>
                    </div>
                    <div className='title'>
                        {title}
                    </div>
                    <Box
                        display='flex'
                        color='white'
                        fontSize={28}
                    >
                        <Box>
                            <IconButton color='inherit'>
                                <SearchIcon fontSize='inherit'/>
                            </IconButton >
                            <IconButton color='inherit'>
                                <LibraryBooksIcon fontSize='inherit'/>
                            </IconButton>
                            <IconButton
                                color='inherit'
                                href='/profile'
                            >
                                <SettingsIcon fontSize='inherit'/>
                            </IconButton>
                        </Box>
                    </Box>
                </div>
            </div>
            <Drawer
                variant='persistent'
                open={open}
                onClose={() => setOpen(!open)}
            >
                <Button className='button button_left button_square'>
                    <SettingsIcon
                        className='button__icon'
                        fontSize='inherit'
                    />
                    <div className='button__label'>
                        Настройки
                    </div>
                </Button>
                <Button
                    className='button button_left button_square'
                    onClick={() => {
                        window.localStorage.clear();
                        window.location.reload();
                    }}
                >
                    <ExitToAppIcon
                        className='button__icon'
                        fontSize='inherit'
                    />
                    <div className='button__label'>
                        Выйти
                    </div>
                </Button>
            </Drawer>
        </div>
    );
}