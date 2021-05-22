import {Button, Drawer, IconButton} from '@material-ui/core';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SettingsIcon from '@material-ui/icons/Settings';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import {useState} from 'react';
import {getCurrentUser} from '../../Services/AuthService';
import {NavLink} from 'react-router-dom';

export default function Header({backArrow, title}) {
    const [open, setOpen] = useState(false);
    const user = getCurrentUser();

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
                                alt=''
                                className='image image_small image_rounded'
                                src={user.avatar}
                            />
                            <div className='profile__name'>
                                <div className='text text_big text_white'>
                                    {user.name}
                                </div>
                                <div className='text text_white'>
                                    {user.position}
                                </div>
                            </div>
                        </Button>
                    </div>
                    <div className='title'>
                        {title}
                    </div>
                    <div className='nav-menu'>
                        <IconButton
                            to='/tasks'
                            className='nav-menu__link'
                            activeClassName='nav-menu__link_active'
                            component={NavLink}
                        >
                            <AssignmentIcon className='nav-menu__icon'/>
                        </IconButton>
                        {user.role == 'admin' &&
                            <IconButton
                                to='/users'
                                className='nav-menu__link'
                                activeClassName='nav-menu__link_active'
                                component={NavLink}
                            >
                                <PeopleAltIcon className='nav-menu__icon'/>
                            </IconButton>
                        }
                        {user.role == 'admin' &&
                            <IconButton
                                to='/report'
                                className='nav-menu__link'
                                activeClassName='nav-menu__link_active'
                                component={NavLink}
                            >
                                <EqualizerIcon className='nav-menu__icon'/>
                            </IconButton>
                        }
                    </div>
                </div>
            </div>
            <Drawer
                classes={{paper: 'header__drawer'}}
                variant='persistent'
                open={open}
                onClose={() => setOpen(!open)}
            >
                <Button
                    className='button button_white button_left button_square'
                    href='/profile'
                >
                    <SettingsIcon
                        className='button__icon'
                        fontSize='inherit'
                    />
                    <div className='button__label'>
                        Настройки
                    </div>
                </Button>
                <Button
                    className='button button_white button_left button_square'
                    onClick={() => {
                        window.localStorage.removeItem('user');
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